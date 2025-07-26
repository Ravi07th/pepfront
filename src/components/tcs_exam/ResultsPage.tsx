import React from 'react';
import { Trophy, Clock, Target, BookOpen, BarChart3, Home, Eye, CheckCircle, XCircle } from 'lucide-react';
import { mockQuestions } from '@/data/tcsQuestions';

interface ResultsPageProps {
  answers: Record<string, any>;
  onReturnHome: () => void;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ answers, onReturnHome }) => {
  const [showSolutions, setShowSolutions] = React.useState(false);
  
  // Calculate actual scores based on correct answers
  const calculateSectionScore = (sectionId: string, subsectionId: string) => {
    const questions = mockQuestions[sectionId as keyof typeof mockQuestions]?.[subsectionId as keyof typeof mockQuestions.foundational] || [];
    let correct = 0;
    let attempted = 0;
    
    questions.forEach((question, index) => {
      const questionId = `${sectionId}-${subsectionId}-${index}`;
      const userAnswer = answers[questionId];
      
      if (userAnswer !== undefined) {
        attempted++;
        if (userAnswer === question.correct) {
          correct++;
        }
      }
    });
    
    return { correct, total: questions.length, attempted, percentage: questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0 };
  };

  const totalQuestions = 98;
  const answeredQuestions = Object.keys(answers).length;

  // Calculate section results
  const sectionResults = [
    { name: 'Verbal Ability', ...calculateSectionScore('foundational', 'verbal') },
    { name: 'Reasoning Ability', ...calculateSectionScore('foundational', 'reasoning') },
    { name: 'Numerical Ability', ...calculateSectionScore('foundational', 'numerical') },
    { name: 'Advanced Quantitative', ...calculateSectionScore('advanced', 'adv-quant') },
    { name: 'Advanced Reasoning', ...calculateSectionScore('advanced', 'adv-reasoning') },
    { name: 'Advanced Coding', ...calculateSectionScore('advanced', 'coding') }
  ];
  
  // Calculate overall score
  const totalCorrect = sectionResults.reduce((sum, section) => sum + section.correct, 0);
  const overallScore = Math.round((totalCorrect / totalQuestions) * 100);
  const percentile = Math.min(99, Math.max(1, overallScore + Math.floor(Math.random() * 20) - 10)); // Simulated percentile

  const getScoreColor = (percentage: number) => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBackground = (percentage: number) => {
    if (percentage >= 80) return 'bg-green-100';
    if (percentage >= 60) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  const renderSolutionsView = () => {
    const allSections = [
      { id: 'foundational', name: 'Foundational Section', subsections: [
        { id: 'verbal', name: 'Verbal Ability' },
        { id: 'reasoning', name: 'Reasoning Ability' },
        { id: 'numerical', name: 'Numerical Ability' }
      ]},
      { id: 'advanced', name: 'Advanced Cognitive Skills', subsections: [
        { id: 'adv-quant', name: 'Advanced Quantitative' },
        { id: 'adv-reasoning', name: 'Advanced Reasoning' },
        { id: 'coding', name: 'Advanced Coding' }
      ]}
    ];

    return (
      <div className="space-y-8">
        {allSections.map((section) => (
          <div key={section.id} className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">{section.name}</h2>
            
            {section.subsections.map((subsection) => {
              const questions = mockQuestions[section.id as keyof typeof mockQuestions]?.[subsection.id as keyof typeof mockQuestions.foundational] || [];
              
              return (
                <div key={subsection.id} className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4 border-b pb-2">
                    {subsection.name}
                  </h3>
                  
                  <div className="space-y-6">
                    {questions.map((question, index) => {
                      const questionId = `${section.id}-${subsection.id}-${index}`;
                      const userAnswer = answers[questionId];
                      const isCorrect = userAnswer === question.correct;
                      const wasAttempted = userAnswer !== undefined;
                      
                      return (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-medium text-gray-900 flex-1">
                              Q{index + 1}. {question.question}
                            </h4>
                            <div className="flex items-center space-x-2 ml-4">
                              {wasAttempted ? (
                                isCorrect ? (
                                  <CheckCircle className="h-6 w-6 text-green-500" />
                                ) : (
                                  <XCircle className="h-6 w-6 text-red-500" />
                                )
                              ) : (
                                <div className="h-6 w-6 rounded-full border-2 border-gray-300"></div>
                              )}
                            </div>
                          </div>
                          
                          {question.context && (
                            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
                              <p className="text-gray-700">{question.context}</p>
                            </div>
                          )}
                          
                          {question.type === 'coding' ? (
                            <div className="space-y-4">
                              {wasAttempted && (
                                <div>
                                  <p className="text-sm font-medium text-gray-700 mb-2">Your Answer:</p>
                                  <pre className="bg-gray-100 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                                    {userAnswer || 'No answer provided'}
                                  </pre>
                                </div>
                              )}
                              <div>
                                <p className="text-sm font-medium text-green-700 mb-2">Sample Solution:</p>
                                <pre className="bg-green-50 border border-green-200 p-4 rounded-lg text-sm font-mono overflow-x-auto">
                                  {question.correct}
                                </pre>
                              </div>
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {question.options.map((option, optionIndex) => (
                                <div
                                  key={optionIndex}
                                  className={`p-3 border rounded-lg ${
                                    option === question.correct
                                      ? 'border-green-500 bg-green-50'
                                      : option === userAnswer && option !== question.correct
                                        ? 'border-red-500 bg-red-50'
                                        : 'border-gray-200'
                                  }`}
                                >
                                  <div className="flex items-center space-x-3">
                                    <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                                      option === question.correct
                                        ? 'border-green-500 bg-green-500 text-white'
                                        : option === userAnswer && option !== question.correct
                                          ? 'border-red-500 bg-red-500 text-white'
                                          : 'border-gray-300'
                                    }`}>
                                      {String.fromCharCode(65 + optionIndex)}
                                    </span>
                                    <span className={
                                      option === question.correct
                                        ? 'text-green-800 font-medium'
                                        : option === userAnswer && option !== question.correct
                                          ? 'text-red-800'
                                          : 'text-gray-700'
                                    }>
                                      {option}
                                    </span>
                                    {option === question.correct && (
                                      <span className="text-green-600 text-sm font-medium">✓ Correct</span>
                                    )}
                                    {option === userAnswer && option !== question.correct && (
                                      <span className="text-red-600 text-sm font-medium">✗ Your Answer</span>
                                    )}
                                  </div>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                            <p className="text-sm font-medium text-blue-800 mb-2">Explanation:</p>
                            <p className="text-blue-700 text-sm">{question.explanation}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    );
  };

  if (showSolutions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Detailed Solutions</h1>
              <p className="text-lg text-gray-600">Review your answers and learn from explanations</p>
            </div>
            <button
              onClick={() => setShowSolutions(false)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200"
            >
              Back to Results
            </button>
          </div>
          
          {renderSolutionsView()}
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-4">
            <Trophy className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Test Completed!</h1>
          <p className="text-lg text-gray-600">Here are your detailed results</p>
        </div>

        {/* Overall Score Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">{overallScore}%</div>
              <div className="text-gray-600">Overall Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">{percentile}</div>
              <div className="text-gray-600">Percentile</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">{answeredQuestions}</div>
              <div className="text-gray-600">Attempted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">{totalCorrect}</div>
              <div className="text-gray-600">Correct</div>
            </div>
          </div>
        </div>

        {/* Section-wise Results */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <BarChart3 className="h-6 w-6 mr-3" />
            Section-wise Performance
          </h2>
          
          <div className="space-y-6">
            {sectionResults.map((section, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{section.name}</h3>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreBackground(section.percentage)} ${getScoreColor(section.percentage)}`}>
                    {section.percentage}%
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-600">Score: {section.correct} / {section.total}</span>
                  <span className="text-sm text-gray-500">{section.percentage}%</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className={`h-3 rounded-full transition-all duration-500 ${
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

        {/* Performance Analysis */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Target className="h-5 w-5 mr-3" />
              Strengths
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Strong performance in Reasoning sections
              </li>
              <li className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Good time management across sections
              </li>
              <li className="flex items-center text-green-700">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Consistent accuracy in problem-solving
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <BookOpen className="h-5 w-5 mr-3" />
              Areas to Improve
            </h2>
            <ul className="space-y-3">
              <li className="flex items-center text-amber-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Focus more on coding practice
              </li>
              <li className="flex items-center text-amber-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Improve speed in numerical calculations
              </li>
              <li className="flex items-center text-amber-700">
                <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                Practice more complex reasoning problems
              </li>
            </ul>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="text-center space-y-4">
          <button
            onClick={() => setShowSolutions(true)}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
          >
            <Eye className="h-5 w-5 inline mr-2" />
            View Solutions
          </button>
          <button
            onClick={onReturnHome}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg mr-4"
          >
            <Home className="h-5 w-5 inline mr-2" />
            Return to Home
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg">
            Take Another Test
          </button>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>Results are based on correct answers only. Actual TCS NQT scoring may include negative marking.</p>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;