import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Eye } from 'lucide-react';
import { LogicalQuestion } from './types';

interface SolutionViewerProps {
  questions: LogicalQuestion[];
  userAnswers: Record<string, number | number[]>;
  onBack: () => void;
}

const SolutionViewer: React.FC<SolutionViewerProps> = ({
  questions,
  userAnswers,
  onBack
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const userAnswer = userAnswers[currentQuestion?.id || ''];
  const isCorrect = () => {
    if (!currentQuestion || userAnswer === undefined) return false;
    
    if (Array.isArray(currentQuestion.correctAnswer)) {
      return Array.isArray(userAnswer) && 
             userAnswer.length === currentQuestion.correctAnswer.length &&
             userAnswer.every(ans => currentQuestion.correctAnswer.includes(ans));
    } else {
      return userAnswer === currentQuestion.correctAnswer;
    }
  };

  const getAnswerText = (answer: number | number[]) => {
    if (Array.isArray(answer)) {
      return answer.map(ans => String.fromCharCode(65 + ans)).join(', ');
    }
    return String.fromCharCode(65 + answer);
  };

  const getQuestionStatus = (questionId: string) => {
    const answer = userAnswers[questionId];
    const question = questions.find(q => q.id === questionId);
    if (!answer || !question) return 'not-answered';
    
    const correctAnswer = question.correctAnswer;
    
    if (Array.isArray(correctAnswer)) {
      // Multiple choice question
      if (Array.isArray(answer)) {
        return answer.length === correctAnswer.length &&
          answer.every(a => correctAnswer.includes(a)) ? 'correct' : 'incorrect';
      }
    } else {
      // Single choice question
      return answer === correctAnswer ? 'correct' : 'incorrect';
    }
    
    return 'incorrect';
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </button>
        </div>

        <div className="flex gap-6">
          {/* Left Side - Question Navigation */}
          <div className="w-64 bg-white rounded-lg shadow-sm border border-gray-200 p-4 h-fit">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions</h3>
            <div className="grid grid-cols-4 gap-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`w-12 h-12 rounded-lg text-sm font-medium flex items-center justify-center transition-colors ${
                    index === currentQuestionIndex
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                  title={`Question ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Question Content */}
          <div className="flex-1">
            {/* Question and Solution */}
            {currentQuestion && (
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                {/* Question Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-medium text-gray-500">
                      Question {currentQuestionIndex + 1}
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      {currentQuestion.difficulty?.toUpperCase()}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isCorrect() ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                    <span className={`text-sm font-medium ${
                      isCorrect() ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {isCorrect() ? 'Correct' : 'Incorrect'}
                    </span>
                  </div>
                </div>

                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  {currentQuestion.options.map((option, index) => {
                    const isCorrectAnswer = Array.isArray(currentQuestion.correctAnswer) 
                      ? currentQuestion.correctAnswer.includes(index)
                      : currentQuestion.correctAnswer === index;
                    
                    const isUserAnswer = Array.isArray(userAnswer)
                      ? userAnswer.includes(index)
                      : userAnswer === index;

                    return (
                      <div
                        key={index}
                        className={`p-4 rounded-lg border-2 ${
                          isCorrectAnswer
                            ? 'border-green-500 bg-green-50'
                            : isUserAnswer && !isCorrectAnswer
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            isCorrectAnswer
                              ? 'border-green-500 bg-green-500'
                              : isUserAnswer && !isCorrectAnswer
                              ? 'border-red-500 bg-red-500'
                              : 'border-gray-300'
                          }`}>
                            {isCorrectAnswer && (
                              <CheckCircle className="w-3 h-3 text-white" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle className="w-3 h-3 text-white" />
                            )}
                          </div>
                          <span className="font-medium text-gray-700">
                            {String.fromCharCode(65 + index)}. {option}
                          </span>
                          {isCorrectAnswer && (
                            <span className="ml-auto text-sm font-medium text-green-600">
                              Correct Answer
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Answer Summary */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-900 mb-2">Answer Summary</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-600">Your Answer: </span>
                      <span className="font-medium">
                        {userAnswer !== undefined ? getAnswerText(userAnswer) : 'Not answered'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-600">Correct Answer: </span>
                      <span className="font-medium text-green-600">
                        {getAnswerText(currentQuestion.correctAnswer)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                {currentQuestion.explanation && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      Explanation
                    </h4>
                    <p className="text-gray-700">{currentQuestion.explanation}</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  currentQuestionIndex > 0
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-medium transition-colors ${
                  currentQuestionIndex < questions.length - 1
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                Next
                <ArrowLeft className="w-4 h-4 rotate-180" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionViewer; 