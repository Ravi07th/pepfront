import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Code } from 'lucide-react';
import { mockQuestions } from '@/data/tcsQuestions';

interface QuestionPanelProps {
  sectionId: string;
  subsectionId: string;
  subsectionName: string;
  currentQuestion: number;
  totalQuestions: number;
  onQuestionChange: (questionIndex: number) => void;
  onAnswerChange: (questionId: string, answer: any) => void;
  answers: Record<string, any>;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  sectionId,
  subsectionId,
  subsectionName,
  currentQuestion,
  totalQuestions,
  onQuestionChange,
  onAnswerChange,
  answers
}) => {
  const questions = mockQuestions[sectionId]?.[subsectionId] || [];
  const currentQuestionData = questions[currentQuestion];

  if (!currentQuestionData) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Available</h3>
          <p className="text-gray-500">Questions for this section are being loaded.</p>
        </div>
      </div>
    );
  }

  const questionId = `${sectionId}-${subsectionId}-${currentQuestion}`;
  const currentAnswer = answers[questionId];

  const handleAnswerSelect = (answer: string) => {
    onAnswerChange(questionId, answer);
  };

  const getQuestionIcon = () => {
    if (subsectionId.includes('coding')) return <Code className="h-5 w-5" />;
    if (subsectionId.includes('numerical') || subsectionId.includes('quant')) return <Calculator className="h-5 w-5" />;
    return <BookOpen className="h-5 w-5" />;
  };

  return (
    <div className="flex-1 flex">
      {/* Question Navigation Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <h3 className="font-semibold text-gray-900 mb-4 flex items-center space-x-2">
          {getQuestionIcon()}
          <span>{subsectionName}</span>
        </h3>
        
        <div className="grid grid-cols-5 gap-2">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const qId = `${sectionId}-${subsectionId}-${index}`;
            const isAnswered = answers[qId] !== undefined;
            const isCurrent = index === currentQuestion;
            
            return (
              <button
                key={index}
                onClick={() => onQuestionChange(index)}
                className={`aspect-square flex items-center justify-center text-sm font-medium rounded-lg transition-all ${
                  isCurrent
                    ? 'bg-blue-600 text-white'
                    : isAnswered
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-100 border border-green-200 rounded"></div>
            <span className="text-gray-600">Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
            <span className="text-gray-600">Not Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-gray-600">Current</span>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-8 bg-white overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Question Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm font-medium">
                  Question {currentQuestion + 1}
                </span>
                <span className="text-gray-500 text-sm">
                  of {totalQuestions}
                </span>
              </div>
              <div className="text-sm text-gray-500">
                {subsectionName}
              </div>
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-xl font-medium text-gray-900 leading-relaxed mb-4">
                {currentQuestionData.question}
              </h2>
              
              {currentQuestionData.context && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-700">{currentQuestionData.context}</p>
                </div>
              )}

              {/* Options */}
              {currentQuestionData.type === 'coding' ? (
                <div className="space-y-4">
                  <textarea
                    value={currentAnswer || ''}
                    onChange={(e) => handleAnswerSelect(e.target.value)}
                    placeholder="Write your code here..."
                    className="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              ) : (
                <div className="space-y-3">
                  {currentQuestionData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-4 border rounded-lg transition-all hover:bg-gray-50 ${
                        currentAnswer === option
                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                          : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                          currentAnswer === option
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300'
                        }`}>
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Footer */}
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={() => onQuestionChange(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <div className="text-center">
              <div className="text-sm text-gray-500">
                Progress: {currentQuestion + 1} / {totalQuestions}
              </div>
              <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
            </div>

            <button
              onClick={() => onQuestionChange(Math.min(totalQuestions - 1, currentQuestion + 1))}
              disabled={currentQuestion === totalQuestions - 1}
              className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;