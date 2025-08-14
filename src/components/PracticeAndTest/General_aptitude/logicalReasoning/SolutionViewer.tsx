import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, XCircle, Eye, BarChart3 } from 'lucide-react';

// Generic question interface that works for both logical and quantitative questions
interface GenericQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number | number[];
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | string;
}

interface SolutionViewerProps {
  questions: GenericQuestion[];
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

  // Add safety check for empty questions array
  if (!questions || questions.length === 0) {
    return (
      <div className="h-screen bg-gray-50 py-4">
        <div className="max-w-6xl mx-auto px-6 h-full">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Results
            </button>
          </div>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">No Questions Available</h3>
            <p className="text-gray-600">There are no questions to display in the solution viewer.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-gray-50 py-4">
      <div className="max-w-6xl mx-auto px-6 h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Results
          </button>
        </div>

        <div className="flex gap-4  h-[calc(100vh-120px)]">
          {/* Left Side - Question Navigation */}
          <div className="w-64 bg-white  rounded-lg shadow-md border border-gray-200 p-4 h-fit">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-600" />
              Questions
            </h3>
            <div className="grid grid-cols-5 gap-2 ">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(index)}
                  className={`w-10 h-10 rounded-lg text-xs font-medium flex items-center justify-center transition-all duration-200 ${
                    index === currentQuestionIndex
                      ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg scale-105'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:shadow-md'
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
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
                {/* Question Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-lg font-bold text-blue-600">
                      Question {currentQuestionIndex + 1}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isCorrect() ? (
                      <div className="flex items-center gap-2 bg-green-100 px-3 py-1 rounded-full">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-700">Correct</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 bg-red-100 px-3 py-1 rounded-full">
                        <XCircle className="w-4 h-4 text-red-600" />
                        <span className="text-sm font-medium text-red-700">Incorrect</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Question */}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4 leading-relaxed">
                    {currentQuestion.question}
                  </h3>
                </div>

                {/* Options */}
                <div className="space-y-3 mb-4">
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
                        className={`p-3 rounded-lg border-2 transition-all duration-200 ${
                          isCorrectAnswer
                            ? 'border-green-500 bg-green-50 shadow-sm'
                            : isUserAnswer && !isCorrectAnswer
                            ? 'border-red-500 bg-red-50 shadow-sm'
                            : 'border-gray-200 hover:border-gray-300'
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
                          <span className="font-medium text-gray-700 flex-1">
                            {String.fromCharCode(65 + index)}. {option}
                          </span>
                          {isCorrectAnswer && (
                            <span className="text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded">
                              Correct
                            </span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Answer Summary */}
                <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-600" />
                    Answer Summary
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 font-medium">Your Answer:</span>
                      <span className={`font-semibold px-2 py-1 rounded ${
                        userAnswer !== undefined ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {userAnswer !== undefined ? getAnswerText(userAnswer) : 'Not answered'}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 font-medium">Correct Answer:</span>
                      <span className="font-semibold text-green-700 bg-green-100 px-2 py-1 rounded">
                        {getAnswerText(currentQuestion.correctAnswer)}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Explanation */}
                {currentQuestion.explanation && (
                  <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Eye className="w-4 h-4 text-green-600" />
                      Explanation
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{currentQuestion.explanation}</p>
                  </div>
                )}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <button
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  currentQuestionIndex > 0
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:shadow-md'
                    : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ArrowLeft className="w-4 h-4" />
                Previous
              </button>

              <button
                onClick={handleNext}
                disabled={currentQuestionIndex === questions.length - 1}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  currentQuestionIndex < questions.length - 1
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-lg'
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