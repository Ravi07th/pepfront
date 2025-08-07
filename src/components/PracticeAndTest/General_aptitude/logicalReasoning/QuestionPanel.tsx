import React from 'react';
import { ChevronLeft, ChevronRight, Flag, CheckCircle, AlertCircle } from 'lucide-react';
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
      <div className="flex-1 flex">
        <div className="flex-1 bg-white p-6 overflow-y-auto pb-20">
          <div className="max-w-4xl mx-auto">
            {/* Question Header */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-900">
                  Question {currentQuestionIndex + 1}
                </h2>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">
                    {currentQuestionIndex + 1} of {totalQuestions}
                  </span>
                  <button
                    onClick={onMarkForReview}
                    className={`flex items-center space-x-1 px-3 py-1 rounded text-sm font-medium transition-colors ${
                      isMarkedForReview
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Flag className="h-4 w-4" />
                    <span>Mark for Review</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Question Content */}
            <div className="mb-2">
              <div className="bg-gray-50 rounded-lg mb-5 p-4">
                <p className="text-lg text-gray-900 leading-relaxed">
                  {question.question}
                </p>
                {Array.isArray(question.correctAnswer) && (
                  <div className="text-sm text-red-600 mt-2 font-medium">
                    (Multiple Select Question*)
                  </div>
                )}
              </div>

              {/* Answer Options */}
              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = isOptionSelected(index);
                  
                  return (
                    <label
                      key={index}
                      className={`flex items-start space-x-3 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md bg-white ${
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
                        className="mt-1 h-4 w-4 text-blue-600 border-white-300 focus:ring-blue-500"
                      />
                      <div className="flex-1">
                        <span className="text-gray-900 font-medium">
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

        {/* Question Navigator Sidebar */}
        <div className="w-80 bg-white border-l border-gray-200 flex flex-col">
          <div className="p-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Question Navigator</h3>
            <div className="text-sm text-gray-600">
              {Object.keys(allAnswers).length} of {totalQuestions} answered
            </div>
          </div>

          <div className="flex-1 p-4 overflow-y-auto">
            <div className="grid grid-cols-5 gap-2">
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

                console.log(`Question ${index + 1}: status=${status}, isCurrent=${isCurrent}, backgroundColor=${backgroundColor}`);

                return (
                  <button
                    key={question.id}
                    onClick={() => onQuestionChange(index)}
                    className={`relative p-3 rounded-lg text-sm font-medium transition-all hover:shadow-md ${
                      isCurrent
                        ? 'ring-2 ring-blue-500 ring-offset-2'
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

          {/* Fixed Legend */}
          <div className="p-4 border-t border-gray-200">
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Legend</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span>Not Answered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-300 rounded"></div>
                <span>Not Visited Yet</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded"></div>
                <span>Current Question</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span>Answered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span>Marked for Review</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-purple-500 rounded"></div>
                <span>Answered & Marked</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Navigation Buttons at Bottom */}
      <div className="fixed bottom-0 left-0 bg-white border-t border-gray-200 p-4 z-10" style={{ width: 'calc(100vw - 320px)' }}>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex items-center justify-between">
              <button
                onClick={onPreviousQuestion}
                disabled={!canGoPrevious}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  !canGoPrevious
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Previous</span>
              </button>

              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">
                  {currentQuestionIndex + 1} of {totalQuestions}
                </span>
              </div>

              <button
                onClick={onNextQuestion}
                disabled={!canGoNext}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                  !canGoNext
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                <span>Save & Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel; 