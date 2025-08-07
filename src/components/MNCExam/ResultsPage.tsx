import React from 'react';
import { CheckCircle, XCircle, Clock, Award, TrendingUp, BarChart3, Home, RefreshCw } from 'lucide-react';
import { Company, ExamType, Question, ExamResult, SectionResult } from './types';

interface ResultsPageProps {
  company: Company;
  examType: ExamType;
  answers: Record<string, number | number[]>;
  questions: Question[];
  timeTaken: number; // in seconds
  onReturnHome: () => void;
  onViewSolutions: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({
  company,
  examType,
  answers,
  questions,
  timeTaken,
  onReturnHome,
  onViewSolutions
}) => {
  const calculateResults = (): ExamResult => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    let correctAnswers = 0;

    // Calculate correct answers
    questions.forEach(question => {
      if (answers[question.id] !== undefined) {
        const userAnswer = answers[question.id];
        const correctAnswer = question.correctAnswer;
        
        let isCorrect = false;
        
        if (Array.isArray(correctAnswer)) {
          // Multiple choice question
          if (Array.isArray(userAnswer)) {
            isCorrect = userAnswer.length === correctAnswer.length &&
              userAnswer.every(answer => correctAnswer.includes(answer));
          }
        } else {
          // Single choice question
          isCorrect = userAnswer === correctAnswer;
        }
        
        if (isCorrect) {
          correctAnswers++;
        }
      }
    });

    const score = correctAnswers;
    const percentage = totalQuestions > 0 ? (correctAnswers / totalQuestions) * 100 : 0;
    // Set passing score based on company (Microsoft has 70%, others have 60%)
    const passingScore = company.id === 'microsoft' ? 70 : 60;
    const passed = percentage >= passingScore;

    // Calculate section results
    const sectionResults: SectionResult[] = examType.sections.map(section => {
      const sectionQuestions = questions.filter(q => q.sectionId === section.id);
      const sectionAnswered = sectionQuestions.filter(q => answers[q.id] !== undefined).length;
      const sectionCorrect = sectionQuestions.filter(q => {
        if (answers[q.id] === undefined) return false;
        
        const userAnswer = answers[q.id];
        const correctAnswer = q.correctAnswer;
        
        if (Array.isArray(correctAnswer)) {
          // Multiple choice question
          if (Array.isArray(userAnswer)) {
            return userAnswer.length === correctAnswer.length &&
              userAnswer.every(answer => correctAnswer.includes(answer));
          }
        } else {
          // Single choice question
          return userAnswer === correctAnswer;
        }
        
        return false;
      }).length;
      const sectionPercentage = sectionQuestions.length > 0 ? (sectionCorrect / sectionQuestions.length) * 100 : 0;

      return {
        sectionId: section.id,
        sectionName: section.name,
        totalQuestions: sectionQuestions.length,
        answeredQuestions: sectionAnswered,
        correctAnswers: sectionCorrect,
        score: sectionCorrect,
        percentage: sectionPercentage
      };
    });

    return {
      totalQuestions,
      answeredQuestions,
      correctAnswers,
      score,
      percentage,
      sectionResults,
      timeTaken,
      passed
    };
  };

  const results = calculateResults();

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}h ${minutes}m ${secs}s`;
    }
    return `${minutes}m ${secs}s`;
  };

  const getPerformanceColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getPerformanceIcon = (percentage: number) => {
    if (percentage >= 80) return <Award className="h-5 w-5 text-green-600" />;
    if (percentage >= 60) return <TrendingUp className="h-5 w-5 text-yellow-600" />;
    return <BarChart3 className="h-5 w-5 text-red-600" />;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-2">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-2">
          <div className="flex items-center justify-center space-x-4 ">
            <img
              src={company.logo}
              alt={company.name}
              className="h-12 w-12 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            <h1 className="text-3xl font-bold text-gray-900">{examType.name}</h1>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700">Exam Results</h2>
        </div>

        {/* Main Results Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div 
            className="p-8 text-white"
            style={{ backgroundColor: company.color }}
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-2">Overall Performance</h3>
                <p className="text-white text-opacity-90">
                  {results.passed ? 'Congratulations! You passed the exam.' : 'Keep practicing to improve your score.'}
                </p>
              </div>
              <div className="text-right">
                <div className="text-4xl font-bold mb-1">{Math.round(results.percentage)}%</div>
                <div className="text-sm text-white text-opacity-90">
                  {results.correctAnswers} / {results.totalQuestions} correct
                </div>
              </div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <CheckCircle className="h-5 w-5" />
                  <span className="font-semibold">Correct</span>
                </div>
                <div className="text-2xl font-bold">{results.correctAnswers}</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <XCircle className="h-5 w-5" />
                  <span className="font-semibold">Incorrect</span>
                </div>
                <div className="text-2xl font-bold">{results.totalQuestions - results.correctAnswers}</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="h-5 w-5" />
                  <span className="font-semibold">Time Taken</span>
                </div>
                <div className="text-2xl font-bold">{formatTime(timeTaken)}</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  {getPerformanceIcon(results.percentage)}
                  <span className="font-semibold">Status</span>
                </div>
                <div className={`text-2xl font-bold ${results.passed ? 'text-green-300' : 'text-red-300'}`}>
                  {results.passed ? 'PASSED' : 'FAILED'}
                </div>
              </div>
            </div>
          </div>

          {/* Section Results */}
          <div className="p-8">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Section-wise Performance</h4>
            <div className="space-y-4">
              {results.sectionResults.map((section) => (
                <div key={section.sectionId} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h5 className="font-semibold text-gray-900">{section.sectionName}</h5>
                      <p className="text-sm text-gray-600">
                        {section.correctAnswers} correct out of {section.totalQuestions} questions
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${getPerformanceColor(section.percentage)}`}>
                        {Math.round(section.percentage)}%
                      </div>
                      <div className="text-sm text-gray-500">
                        {section.answeredQuestions}/{section.totalQuestions} answered
                      </div>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${
                        section.percentage >= 80 ? 'bg-green-500' :
                        section.percentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
                      }`}
                      style={{ width: `${section.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Analysis */}
        <div className="flex gap-8 mb-2">

                     {/* Performance Insights */}
           <div className="bg-white rounded-xl shadow-lg p-6">
             <h4 className="text-lg font-semibold text-gray-900 mb-4">Performance Insights</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <div className="p-4 bg-blue-50 rounded-lg">
                 <h5 className="font-semibold text-blue-900 mb-2">Accuracy Rate</h5>
                 <div className="text-2xl font-bold text-blue-600">
                   {results.totalQuestions > 0 ? Math.round((results.correctAnswers / results.totalQuestions) * 100) : 0}%
                 </div>
                 <p className="text-sm text-blue-700">
                   {results.correctAnswers} out of {results.totalQuestions} questions correct
                 </p>
               </div>

               <div className="p-4 bg-green-50 rounded-lg">
                 <h5 className="font-semibold text-green-900 mb-2">Completion Rate</h5>
                 <div className="text-2xl font-bold text-green-600">
                   {results.totalQuestions > 0 ? Math.round((results.answeredQuestions / results.totalQuestions) * 100) : 0}%
                 </div>
                 <p className="text-sm text-green-700">
                   {results.answeredQuestions} out of {results.totalQuestions} questions attempted
                 </p>
               </div>

               <div className="p-4 bg-purple-50 rounded-lg">
                 <h5 className="font-semibold text-purple-900 mb-2">Time Efficiency</h5>
                 <div className="text-2xl font-bold text-purple-600">
                   {results.totalQuestions > 0 && timeTaken > 0 ? Math.round(timeTaken / results.totalQuestions) : 0}s
                 </div>
                 <p className="text-sm text-purple-700">
                   Average time per question
                 </p>
               </div>

               {!results.passed && (
                 <div className="p-4 bg-yellow-50 rounded-lg">
                   <h5 className="font-semibold text-yellow-900 mb-2">Improvement Needed</h5>
                   <div className="text-2xl font-bold text-yellow-600">
                     {Math.max(0, (company.id === 'microsoft' ? 70 : 60) - Math.round(results.percentage))}%
                   </div>
                   <p className="text-sm text-yellow-700">
                     More points needed to pass (Passing: {company.id === 'microsoft' ? 70 : 60}%)
                   </p>
                 </div>
               )}
             </div>
           </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={onReturnHome}
            className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            <Home className="h-5 w-5" />
            <span>Return to Home</span>
          </button>
          <button
            onClick={onViewSolutions}
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
          >
            <BarChart3 className="h-5 w-5" />
            <span>View Solutions</span>
          </button>
          <button
            onClick={() => window.location.reload()}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-semibold transition-colors"
          >
            <RefreshCw className="h-5 w-5" />
            <span>Retake Exam</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage; 