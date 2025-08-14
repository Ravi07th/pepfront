import React from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Calculator, 
  Brain, 
  Code, 
  Clock, 
  Users, 
  Target,
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';

interface MockTestCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  questionCount: number;
  duration: number; // in minutes
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topics: string[];
  color: string;
  bgColor: string;
  route: string;
}

const MockTestHome: React.FC = () => {
  const mockTestCards: MockTestCard[] = [
    {
      id: 'verbal-mock',
      title: 'Verbal Mock Test',
      description: 'Comprehensive verbal ability test covering reading comprehension, grammar, vocabulary, and language skills.',
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      questionCount: 60,
      duration: 60,
      difficulty: 'Medium',
      topics: ['Reading Comprehension', 'Grammar', 'Vocabulary', 'Sentence Completion', 'Para Jumbles'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      route: '/verbal-ability/instructions/comprehensive-verbal'
    },
    {
      id: 'aptitude-mock',
      title: 'Aptitude Mock Test',
      description: 'Quantitative aptitude test covering mathematical concepts, problem solving, and analytical thinking.',
      icon: <Calculator className="w-6 h-6 sm:w-8 sm:h-8" />,
      questionCount: 60,
      duration: 60,
      difficulty: 'Hard',
      topics: ['Numbers', 'Algebra', 'Geometry', 'Time & Work', 'Profit & Loss', 'Ages'],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      route: '/quantitative-aptitude/instructions/comprehensive-aptitude'
    },
    {
      id: 'logical-mock',
      title: 'Logical Mock Test',
      description: 'Logical reasoning test covering analytical thinking, pattern recognition, and problem-solving skills.',
      icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8" />,
      questionCount: 60,
      duration: 60,
      difficulty: 'Medium',
      topics: ['Series', 'Puzzles', 'Blood Relations', 'Coding-Decoding', 'Direction Sense'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      route: '/logical-reasoning/instructions/comprehensive-logical'
    },
    {
      id: 'programming-mock',
      title: 'Programming Mock Test',
      description: 'Comprehensive programming test covering multiple languages including C, C++, Java, Python, JavaScript, and HTML/CSS.',
      icon: <Code className="w-6 h-6 sm:w-8 sm:h-8" />,
      questionCount: 60,
      duration: 60,
      difficulty: 'Hard',
      topics: ['C Programming', 'C++', 'Java', 'Python', 'JavaScript', 'HTML/CSS'],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      route: '/programming/instructions/comprehensive-programming'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Header Section */}
      <div className="bg-white dark:bg-slate-800 shadow-sm border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">
              Mock Test Center
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4">
              Practice with comprehensive mock tests designed to prepare you for competitive exams. 
              Each test includes 60 questions with a 60-minute time limit.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Target className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Total Tests</p>
                <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">4</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <CheckCircle className="w-4 h-4 sm:w-6 sm:h-6 text-green-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Total Questions</p>
                <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">240</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-purple-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Total Duration</p>
                <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">4h</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-xl p-4 sm:p-6 shadow-sm border border-slate-200 dark:border-slate-700">
            <div className="flex items-center">
              <div className="p-2 sm:p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                <Users className="w-4 h-4 sm:w-6 sm:h-6 text-amber-600" />
              </div>
              <div className="ml-3 sm:ml-4">
                <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">Topics Covered</p>
                <p className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-white">20+</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mock Test Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {mockTestCards.map((card) => (
            <div
              key={card.id}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Card Header */}
              <div className={`p-4 sm:p-6 ${card.bgColor} border-b border-slate-200 dark:border-slate-700`}>
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className={`p-2 sm:p-3 rounded-xl bg-white dark:bg-slate-700 shadow-sm ${card.color}`}>
                    {card.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                      card.difficulty === 'Easy' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' :
                      card.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' :
                      'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {card.difficulty}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-6">
                {/* Test Details */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div className="text-center p-2 sm:p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Questions</p>
                    <p className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{card.questionCount}</p>
                  </div>
                  <div className="text-center p-2 sm:p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">Duration</p>
                    <p className="text-sm sm:text-lg font-bold text-slate-900 dark:text-white">{card.duration}m</p>
                  </div>
                </div>

                {/* Topics Covered */}
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2 sm:mb-3">
                    Topics Covered:
                  </h4>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {card.topics.slice(0, 2).map((topic, index) => (
                      <span
                        key={index}
                        className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md"
                      >
                        {topic}
                      </span>
                    ))}
                    {card.topics.length > 2 && (
                      <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded-md">
                        +{card.topics.length - 2} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <Link
                  to={card.route}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-slate-700 dark:to-slate-600 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl font-semibold hover:from-slate-800 hover:to-slate-600 dark:hover:from-slate-600 dark:hover:to-slate-500 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
                >
                  <span>Start Test</span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions Section */}
        <div className="mt-12 sm:mt-16 bg-white dark:bg-slate-800 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 flex items-center">
            <Star className="w-5 h-5 sm:w-6 sm:h-6 text-amber-500 mr-2 sm:mr-3" />
            Test Instructions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">
                Before You Start:
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Ensure you have a stable internet connection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Find a quiet environment to take the test</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Have paper and pen ready for calculations</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Read all instructions carefully before starting</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">
                During the Test:
              </h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-400">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Timer will be visible throughout the test</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>You can mark questions for review</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Navigate between questions using the panel</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></div>
                  <span>Submit only when you're completely sure</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTestHome;
