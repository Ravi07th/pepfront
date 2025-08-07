import React from 'react';
import { CheckCircle, XCircle, Clock, BarChart3, Eye, ArrowLeft, Trophy, Target, TrendingUp } from 'lucide-react';

interface ResultsPageProps {
  results: {
    totalQuestions: number;
    answeredQuestions: number;
    correctAnswers: number;
    score: number;
    percentage: number;
    timeTaken: number;
    passed: boolean;
    topicResults: Array<{
      topicId: string;
      topicName: string;
      totalQuestions: number;
      answeredQuestions: number;
      correctAnswers: number;
      score: number;
      percentage: number;
    }>;
  };
  onViewSolutions: () => void;
  onReturnHome: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  results,
  onViewSolutions,
  onReturnHome
}) => {
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const getPerformanceMessage = () => {
    if (results.percentage >= 90) return "Excellent! Outstanding performance!";
    if (results.percentage >= 80) return "Great job! Well done!";
    if (results.percentage >= 70) return "Good work! Keep it up!";
    if (results.percentage >= 60) return "Passed! You're on the right track.";
    return "Keep practicing to improve your score.";
  };

  const getScoreColor = () => {
    if (results.percentage >= 90) return "text-green-600";
    if (results.percentage >= 80) return "text-blue-600";
    if (results.percentage >= 70) return "text-yellow-600";
    if (results.percentage >= 60) return "text-orange-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-8">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onReturnHome}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Topics
          </button>
        </div>

        {/* Results Card */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {/* Result Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 text-center">
            <div className="flex justify-center mb-4">
              {results.passed ? (
                <Trophy className="w-20 h-20 text-yellow-300" />
              ) : (
                <Target className="w-20 h-20 text-red-300" />
              )}
            </div>
            <h1 className="text-4xl font-bold mb-2">
              {results.passed ? 'Congratulations!' : 'Test Completed'}
            </h1>
            <p className="text-xl opacity-90">
              {getPerformanceMessage()}
            </p>
          </div>

          {/* Score Overview */}
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
                <div className={`text-4xl font-bold ${getScoreColor()} mb-2`}>
                  {results.percentage.toFixed(1)}%
                </div>
                <div className="text-sm font-medium text-blue-700">Overall Score</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {results.correctAnswers}/{results.totalQuestions}
                </div>
                <div className="text-sm font-medium text-green-700">Correct Answers</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
                <div className="text-4xl font-bold text-purple-600 mb-2">
                  {formatTime(results.timeTaken)}
                </div>
                <div className="text-sm font-medium text-purple-700">Time Taken</div>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl border border-orange-200">
                <div className="text-4xl font-bold text-orange-600 mb-2">
                  {results.answeredQuestions}/{results.totalQuestions}
                </div>
                <div className="text-sm font-medium text-orange-700">Questions Attempted</div>
              </div>
            </div>

            {/* Performance Insights */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Performance Insights
              </h2>
              <div className="grid grid-cols-1 gap-4">
                {results.topicResults.map((topic, index) => (
                  <div key={topic.topicId} className="p-6 border border-gray-200 rounded-xl bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-lg font-semibold text-gray-900">{topic.topicName}</h3>
                      <span className={`text-lg font-bold ${getScoreColor()}`}>
                        {topic.percentage.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                      <span className="flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {topic.correctAnswers} correct
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4 text-blue-500" />
                        {topic.answeredQuestions}/{topic.totalQuestions} attempted
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full transition-all duration-500 ${
                          topic.percentage >= 90 ? 'bg-green-500' :
                          topic.percentage >= 80 ? 'bg-blue-500' :
                          topic.percentage >= 70 ? 'bg-yellow-500' :
                          topic.percentage >= 60 ? 'bg-orange-500' : 'bg-red-500'
                        }`}
                        style={{ width: `${topic.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-center space-x-4 pt-6 border-t border-gray-200">
              <button
                onClick={onReturnHome}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
                <span>Return to Home</span>
              </button>
              <button
                onClick={onViewSolutions}
                className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                <Eye className="h-5 w-5" />
                <span>View Solutions</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 