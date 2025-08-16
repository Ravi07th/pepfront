import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flag, CheckCircle, AlertCircle, Menu, X } from 'lucide-react';
import { Company, ExamType, ExamSection, Question, QuestionStatus } from './types';

interface QuestionPanelProps {
  company: Company;
  examType: ExamType;
  currentSection: ExamSection;
  currentQuestion: number;
  questions: Question[];
  onQuestionChange: (index: number) => void;
  onAnswerChange: (questionId: string, answer: number | number[]) => void;
  answers: Record<string, number | number[]>;
  markedForReview: Record<string, boolean>;
  onMarkForReview: (questionId: string) => void;
  getQuestionStatus: (questionId: string) => QuestionStatus;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  company,
  examType,
  currentSection,
  currentQuestion,
  questions,
  onQuestionChange,
  onAnswerChange,
  answers,
  markedForReview,
  onMarkForReview,
  getQuestionStatus
}) => {
  const currentQuestionData = questions[currentQuestion];
  
  // Drag and drop state
  const [draggedItem, setDraggedItem] = useState<number | null>(null);
  const [dropZoneAnswers, setDropZoneAnswers] = useState<Record<string, number>>({});
  
  // Question navigator sidebar state
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Reset drag and drop state when question changes
  useEffect(() => {
    setDraggedItem(null);
    
    // Initialize drop zone answers from existing answers for drag-drop questions
    if (currentQuestionData?.questionType === 'drag-drop') {
      const existingAnswer = answers[currentQuestionData.id];
      if (Array.isArray(existingAnswer) && existingAnswer.length > 0) {
        const newDropZoneAnswers: Record<string, number> = {};
        existingAnswer.forEach((itemIndex, zoneIndex) => {
          newDropZoneAnswers[`zone-${zoneIndex}`] = itemIndex;
        });
        setDropZoneAnswers(newDropZoneAnswers);
      } else {
        setDropZoneAnswers({});
      }
    } else {
      setDropZoneAnswers({});
    }
  }, [currentQuestion, currentQuestionData, answers]);

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      onQuestionChange(currentQuestion + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      onQuestionChange(currentQuestion - 1);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (currentQuestionData.questionType === 'multiple-choice') {
      const currentAnswers = (answers[currentQuestionData.id] as number[]) || [];
      const newAnswers = currentAnswers.includes(answerIndex)
        ? currentAnswers.filter(a => a !== answerIndex)
        : [...currentAnswers, answerIndex];
      onAnswerChange(currentQuestionData.id, newAnswers);
    } else {
      onAnswerChange(currentQuestionData.id, answerIndex);
    }
  };

  const isOptionSelected = (optionIndex: number) => {
    if (currentQuestionData.questionType === 'multiple-choice') {
      const currentAnswers = (answers[currentQuestionData.id] as number[]) || [];
      return currentAnswers.includes(optionIndex);
    } else {
      return answers[currentQuestionData.id] === optionIndex;
    }
  };

  const handleMarkForReview = () => {
    onMarkForReview(currentQuestionData.id);
  };

  // Drag and drop handlers
  const handleDragStart = (itemIndex: number) => {
    setDraggedItem(itemIndex);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (zoneIndex: number) => {
    if (draggedItem !== null) {
      const newDropZoneAnswers = { ...dropZoneAnswers };
      newDropZoneAnswers[`zone-${zoneIndex}`] = draggedItem;
      setDropZoneAnswers(newDropZoneAnswers);
      
      // Update the answer for this question
      const answerArray = Object.values(newDropZoneAnswers).sort((a, b) => a - b);
      onAnswerChange(currentQuestionData.id, answerArray);
      
      setDraggedItem(null);
    }
  };

  const handleDragEnd = () => {
    setDraggedItem(null);
  };

  const handleClearDragDrop = () => {
    setDropZoneAnswers({});
    onAnswerChange(currentQuestionData.id, []);
  };

  const getStatusColor = (status: QuestionStatus) => {
    switch (status) {
      case 'current':
        return 'bg-blue-600 text-white';
      case 'answered':
        return 'bg-green-500 text-white';
      case 'marked':
        return 'bg-yellow-500 text-white';
      case 'answered-marked':
        return 'bg-purple-500 text-white';
      case 'not-answered':
        return 'bg-red-500 text-white';
      case 'not-visited':
      default:
        return 'bg-gray-300 text-gray-600';
    }
  };

  const getStatusIcon = (status: QuestionStatus) => {
    switch (status) {
      case 'answered':
        return <CheckCircle className="h-4 w-4" />;
      case 'marked':
      case 'answered-marked':
        return <Flag className="h-4 w-4" />;
      case 'current':
        return <AlertCircle className="h-4 w-4" />;
      default:
        return null;
    }
  };

  if (!currentQuestionData) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Questions Available</h3>
          <p className="text-gray-600">This section doesn't have any questions yet.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col">
      {/* Main Question Area */}
      <div className="flex-1 flex flex-col lg:flex-row">
                  <div className="flex-1 bg-white p-2 sm:p-4 overflow-y-auto pb-32 sm:pb-20 lg:pb-24">
          <div className="max-w-4xl mx-auto">
            {/* Question Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsSidebarOpen(!isSidebarOpen);
                    }}
                    className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors touch-manipulation"
                  >
                    {isSidebarOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Question {currentQuestion + 1}
                  </h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    {currentQuestion + 1} of {questions.length}
                  </span>
                  <button
                    onClick={handleMarkForReview}
                    className={`flex items-center space-x-1 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-colors ${
                      markedForReview[currentQuestionData.id]
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Flag className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span className="hidden sm:inline">Mark for Review</span>
                    <span className="sm:hidden">Mark for Review</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="mb-2">
              <div className="bg-gray-50 rounded-lg mb-4 sm:mb-5 p-3 sm:p-4">
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  {currentQuestionData.question}
                </p>
                {currentQuestionData.questionType === 'multiple-choice' && (
                  <div className="text-xs sm:text-sm text-red-600 mt-2 font-medium">
                    (Multiple Select Question*)
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {currentQuestionData.questionType === 'drag-drop' ? (
                  // Real Drag & Drop Interface
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                      <h4 className="font-medium text-blue-900 mb-2 sm:mb-3 text-sm sm:text-base">Drag Items to Match:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                        {currentQuestionData.dragDropItems?.map((item, index) => {
                          const isUsed = Object.values(dropZoneAnswers).includes(index);
                          return (
                            <div
                              key={index}
                              draggable={!isUsed}
                              onDragStart={() => !isUsed && handleDragStart(index)}
                              onDragEnd={handleDragEnd}
                              className={`p-2 sm:p-3 rounded border-2 cursor-move transition-all ${
                                isUsed 
                                  ? 'bg-gray-100 border-gray-300 text-gray-500' 
                                  : 'bg-white border-blue-300 hover:border-blue-400 hover:shadow-md'
                              } ${draggedItem === index ? 'opacity-50' : ''}`}
                            >
                              <span className="text-xs sm:text-sm text-gray-700">{item}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg">
                      <div className="flex items-center justify-between mb-2 sm:mb-3">
                        <h4 className="font-medium text-green-900 text-sm sm:text-base">Drop Zones:</h4>
                        <button
                          onClick={handleClearDragDrop}
                          className="text-xs sm:text-sm text-red-600 hover:text-red-800 font-medium"
                        >
                          Clear All
                        </button>
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        {currentQuestionData.options.map((option, index) => {
                          const droppedItemIndex = dropZoneAnswers[`zone-${index}`];
                          const droppedItem = droppedItemIndex !== undefined ? currentQuestionData.dragDropItems?.[droppedItemIndex] : null;
                          return (
                            <div
                              key={index}
                              onDragOver={handleDragOver}
                              onDrop={() => handleDrop(index)}
                              className={`p-3 sm:p-4 rounded border-2 min-h-[50px] sm:min-h-[60px] flex items-center transition-all ${
                                droppedItem 
                                  ? 'border-green-500 bg-green-50' 
                                  : 'border-dashed border-green-300 hover:border-green-400'
                              }`}
                            >
                              {droppedItem ? (
                                <span className="text-green-800 font-medium text-sm sm:text-base">{droppedItem}</span>
                              ) : (
                                <span className="text-gray-600 text-sm sm:text-base">{option}</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Regular Multiple Choice Options
                  currentQuestionData.options.map((option, index) => {
                    const isSelected = isOptionSelected(index);
                    
                                         return (
                       <label
                         key={index}
                         className={`flex items-start space-x-2 sm:space-x-3 p-3 sm:p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md bg-white ${
                           isSelected
                             ? 'border-blue-500 bg-blue-50'
                             : 'border-gray-200 hover:border-gray-300'
                         }`}
                       >
                         <input
                           type={currentQuestionData.questionType === 'multiple-choice' ? 'checkbox' : 'radio'}
                           name={`question-${currentQuestionData.id}`}
                           value={index}
                           checked={isSelected}
                           onChange={() => handleAnswerSelect(index)}
                           className="mt-1 h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 flex-shrink-0"
                         />
                         <div className="flex-1">
                           <span className="text-sm sm:text-base text-gray-900 leading-relaxed">
                             {String.fromCharCode(65 + index)}. {option}
                           </span>
                         </div>
                       </label>
                     );
                  })
                )}
                
              </div>
            </div>
            
          </div>
        </div>
        

         {/* Fixed Navigation Buttons at Bottom */}
         <div className="fixed bottom-0 left-0 bg-white border-t border-gray-200 p-3 sm:p-4 z-10 w-full lg:w-[calc(100vw-320px)]">
           <div className="flex justify-center">
             <div className="w-full max-w-4xl">
               <div className="flex flex-col lg:flex-col-reverse items-center justify-between">
                 <button
                   onClick={handlePrevQuestion}
                   disabled={currentQuestion === 0}
                   className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                     currentQuestion === 0
                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                       : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                   }`}
                 >
                   <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                   <span className="hidden sm:inline">Previous</span>
                   <span className="sm:hidden">Prev</span>
                 </button>

                 <div className="flex items-center space-x-2">
                   <span className="text-xs sm:text-sm text-gray-600">
                     {currentQuestion + 1} of {questions.length}
                   </span>
                 </div>

                 <button
                   onClick={handleNextQuestion}
                   disabled={currentQuestion === questions.length - 1}
                   className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors ${
                     currentQuestion === questions.length - 1
                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                       : 'bg-blue-600 text-white hover:bg-blue-700'
                   }`}
                 >
                   <span className="hidden sm:inline">Save & Next</span>
                   <span className="sm:hidden">Next</span>
                   <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
                 </button>
               </div>
             </div>
           </div>
         </div>

                 {/* Question Navigator Sidebar - Compact */}
         <div className={`fixed lg:relative inset-y-0 right-0 z-50 w-full sm:w-80 lg:w-80 bg-white border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
           isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
         }`}>
          {/* Mobile overlay */}
          {isSidebarOpen && (
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsSidebarOpen(false)}
              style={{ pointerEvents: 'auto' }}
            />
          )}
          <div className="p-2 sm:p-3 border-b border-gray-200">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold text-gray-900">Question Navigator</h3>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsSidebarOpen(false);
                }}
                className="lg:hidden p-1 rounded hover:bg-gray-100 touch-manipulation"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs text-gray-600">
              {Object.keys(answers).length} of {questions.length} answered
            </div>
          </div>

          <div className="flex-1 p-2 sm:p-3 overflow-y-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1">
              {questions.map((question, index) => {
                const status = getQuestionStatus(question.id);
                const isAnswered = answers[question.id] !== undefined;
                const isMarked = markedForReview[question.id];
                const isCurrent = index === currentQuestion;

                // Determine the background color - current question should always be blue
                let backgroundColor = getStatusColor(status);
                if (isCurrent) {
                  backgroundColor = 'bg-blue-600 text-white';
                }

                return (
                  <button
                    key={question.id}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('[QuestionPanel] Question button clicked, index:', index);
                      onQuestionChange(index);
                      // Close sidebar on mobile after question selection
                      if (window.innerWidth < 1024) {
                        setIsSidebarOpen(false);
                      }
                    }}
                    className={`relative p-1 sm:p-2 rounded text-xs font-medium transition-all hover:shadow-md touch-manipulation ${
                      isCurrent
                        ? 'ring-2 ring-blue-500 ring-offset-1'
                        : ''
                    } ${backgroundColor}`}
                    title={`Question ${index + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked)' : ''}`}
                  >
                    <div className="flex items-center justify-center">
                      {!isCurrent && getStatusIcon(status)}
                      <span className={isCurrent ? "" : "ml-1"}>{index + 1}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Compact Legend */}
          <div className="p-2 sm:p-3 border-t border-gray-200">
            <h4 className="text-xs font-semibold text-gray-900 mb-2">Legend</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 text-xs">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded"></div>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-gray-300 rounded"></div>
                <span>Not Visited</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-blue-600 rounded"></div>
                <span>Current</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Marked</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-purple-500 rounded"></div>
                <span>Answered & Marked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default QuestionPanel; 