import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Flag, CheckCircle, AlertCircle, Menu, X } from 'lucide-react';
import { LogicalQuestion, LogicalQuestionStatus } from './types';

interface QuestionPanelProps {
  question: LogicalQuestion;
  currentQuestionIndex: number;
  totalQuestions: number;
  userAnswer: number | number[] | undefined;
  onAnswerChange: (answer: number | number[]) => void;
  onMarkForReview: () => void;
  isMarkedForReview: boolean;
  onNextQuestion: () => void;
  onPreviousQuestion: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
  // New props for proper navigation and status
  allQuestions: LogicalQuestion[];
  allAnswers: Record<string, number | number[]>;
  allMarkedForReview: Record<string, boolean>;
  visitedQuestions: Set<string>;
  onQuestionChange: (index: number) => void;
  getQuestionStatus: (questionId: string) => LogicalQuestionStatus;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  question,
  currentQuestionIndex,
  totalQuestions,
  userAnswer,
  onAnswerChange,
  onMarkForReview,
  isMarkedForReview,
  onNextQuestion,
  onPreviousQuestion,
  canGoNext,
  canGoPrevious,
  // New props
  allQuestions,
  allAnswers,
  allMarkedForReview,
  visitedQuestions,
  onQuestionChange,
  getQuestionStatus
}) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleAnswerSelect = (answerIndex: number) => {
    if (Array.isArray(question.correctAnswer)) {
      // Multiple choice
      const currentAnswers = Array.isArray(userAnswer) ? userAnswer : [];
      const newAnswers = currentAnswers.includes(answerIndex)
        ? currentAnswers.filter(ans => ans !== answerIndex)
        : [...currentAnswers, answerIndex];
      onAnswerChange(newAnswers);
    } else {
      // Single choice
      onAnswerChange(answerIndex);
    }
  };

  const isOptionSelected = (optionIndex: number) => {
    if (Array.isArray(userAnswer)) {
      return userAnswer.includes(optionIndex);
    }
    return userAnswer === optionIndex;
  };

  const getStatusColor = (status: LogicalQuestionStatus) => {
    switch (status) {
      case 'not-answered':
        return 'bg-red-500 text-white';
      case 'not-visited':
        return 'bg-gray-300 text-gray-600';
      case 'current':
        return 'bg-blue-600 text-white';
      case 'answered':
        return 'bg-green-500 text-white';
      case 'marked':
        return 'bg-yellow-500 text-white';
      case 'answered-marked':
        return 'bg-purple-500 text-white';
      default:
        return 'bg-gray-300 text-gray-600';
    }
  };

  const getStatusIcon = (status: LogicalQuestionStatus) => {
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

  if (!question) {
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
                 <div className="flex-1 bg-white p-2 sm:p-4 overflow-y-auto pb-32 sm:pb-20 lg:pb-4">
          <div className="max-w-5xl mx-auto">
            {/* Question Header */}
            <div className="mb-4 sm:mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="lg:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {isSidebarOpen ? <X className="h-4 w-4 sm:h-5 sm:w-5" /> : <Menu className="h-4 w-4 sm:h-5 sm:w-5" />}
                  </button>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                    Question {currentQuestionIndex + 1}
                  </h2>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <span className="text-xs sm:text-sm text-gray-600">
                    {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <button
                    onClick={onMarkForReview}
                    className={`flex items-center justify-center sm:justify-start space-x-1 px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-medium transition-colors ${
                      isMarkedForReview
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Flag className="h-3 w-3 sm:h-4 sm:w-4" />
                    <span>Mark for Review</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Reading Comprehension Passage */}
            {(question as any).passage && (
              <div className="mb-4 sm:mb-6 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-3 sm:p-4">
                <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <h3 className="text-base sm:text-lg font-semibold text-blue-900">Reading Passage</h3>
                </div>
                <div className="bg-white rounded-lg p-3 sm:p-4 border border-blue-200">
                  <p className="text-sm sm:text-base text-gray-800 leading-relaxed whitespace-pre-wrap">
                    {(question as any).passage}
                  </p>
                </div>
              </div>
            )}

            {/* Question Content */}
            <div className="mb-2">
              <div className="bg-gray-50 rounded-lg mb-4 sm:mb-5 p-3 sm:p-4">
                <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                  {question.question}
                </p>
                {Array.isArray(question.correctAnswer) && (
                  <div className="text-xs sm:text-sm text-red-600 mt-2 font-medium">
                    (Multiple Select Question*)
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <div className="space-y-2 sm:space-y-3">
                {question.options.map((option, index) => {
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
                        type={Array.isArray(question.correctAnswer) ? 'checkbox' : 'radio'}
                        name={`question-${question.id}`}
                        value={index}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(index)}
                        className="mt-1 h-4 w-4 text-blue-600 border-white-300 focus:ring-blue-500 flex-shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm sm:text-base text-gray-900 font-medium break-words">
                          {String.fromCharCode(65 + index)}. {option}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {isSidebarOpen && (
          <>
          {/* <div className='bg-black bg-opacity-25'></div> */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        </>
        )}

        {/* Question Navigator Sidebar - Compact */}
          <div className={`fixed lg:relative inset-y-0 right-0 z-50 w-full sm:w-80 lg:w-72 xl:w-80 bg-white border-l border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'
          }`}>
          {/* Mobile overlay */}
          <div className="p-2 sm:p-3 border-b border-gray-200 overflow-scroll z-50">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-sm font-semibold text-gray-900">Question Navigator</h3>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="lg:hidden p-1 rounded hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="text-xs text-gray-600">
              {Object.keys(allAnswers).length} of {totalQuestions} answered
            </div>
          </div>

          <div className="flex-1 p-2 sm:p-3 overflow-y-auto">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-1">
              {allQuestions.map((question, index) => {
                const status = getQuestionStatus(question.id);
                const isAnswered = allAnswers[question.id] !== undefined;
                const isMarked = allMarkedForReview[question.id];
                const isCurrent = index === currentQuestionIndex;

                // Determine the background color - current question should always be blue
                let backgroundColor = getStatusColor(status);
                if (isCurrent) {
                  backgroundColor = 'bg-blue-600 text-white';
                }

                return (
                  <button
                    key={question.id}
                    onClick={() => onQuestionChange(index)}
                    className={`relative p-1 sm:p-2 rounded text-xs font-medium transition-all hover:shadow-md ${
                      isCurrent
                        ? 'ring-2 ring-blue-500 ring-offset-1'
                        : ''
                    } ${backgroundColor}`}
                    title={`Question ${index + 1}${isAnswered ? ' (Answered)' : ''}${isMarked ? ' (Marked)' : ''}`}
                  >
                    <div className="flex items-center justify-center">
                      {!isCurrent && getStatusIcon(status)}
                      <span className={isCurrent ? "" : "ml-0.5"}>{index + 1}</span>
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
        {/* Fixed Navigation Buttons at Bottom */}
      <div className="fixed bottom-0 left-0 right-0 lg:left-0 lg:right-auto bg-white border-t border-gray-200 p-2 sm:p-4 z-30  lg:w-2/3 xl:w-3/4">
          <div className="flex justify-center">
            <div className="w-full max-w-5xl px-2 sm:px-0">
              <div className="flex items-center justify-between space-x-2">
                  {/* Mobile Layout: Prev | Counter | Next */}
                  <div className="flex items-center space-x-2 lg:hidden w-full">
                    <button
                      onClick={onPreviousQuestion}
                      disabled={!canGoPrevious}
                      className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors flex-shrink-0 ${
                        !canGoPrevious
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="hidden sm:inline">Previous</span>
                      <span className="sm:hidden">Prev</span>
                    </button>

                    <div className="flex items-center justify-center flex-1 px-2">
                      <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                        {currentQuestionIndex + 1} of {totalQuestions}
                      </span>
                    </div>

                    <button
                      onClick={onNextQuestion}
                      disabled={!canGoNext}
                      className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors flex-shrink-0 ${
                        !canGoNext
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <span className="hidden sm:inline">Save & Next</span>
                      <span className="sm:hidden">Next</span>
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    </button>
                  </div>

                  {/* Desktop Layout: Next | Counter | Prev */}
                  <div className="hidden lg:flex lg:flex-row-reverse items-center space-x-2 w-full">
                    <button
                      onClick={onNextQuestion}
                      disabled={!canGoNext}
                      className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors flex-shrink-0 ${
                        !canGoNext
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                    >
                      <span className="hidden sm:inline">Save & Next</span>
                      <span className="sm:hidden">Next</span>
                      <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    </button>

                    <div className="flex items-center justify-center flex-1 px-2">
                      <span className="text-xs sm:text-sm text-gray-600 whitespace-nowrap">
                        {currentQuestionIndex + 1} of {totalQuestions}
                      </span>
                    </div>

                    <button
                      onClick={onPreviousQuestion}
                      disabled={!canGoPrevious}
                      className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 rounded-lg text-sm sm:text-base font-medium transition-colors flex-shrink-0 ${
                        !canGoPrevious
                          ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                      <span className="hidden sm:inline">Previous</span>
                      <span className="sm:hidden">Prev</span>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default QuestionPanel; 