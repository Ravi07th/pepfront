import React, { useState } from 'react';
import { Clock, BookOpen, AlertTriangle, ArrowLeft, Monitor, CheckCircle, Shield, FileText, Users, Award, Zap, Target } from 'lucide-react';
import type { Company, ExamType, ExamInstructions } from './types';

interface ExamInstructionsProps {
  company: Company;
  examType: ExamType;
  onStartExam: () => void;
  onBack: () => void;
}

const ExamInstructions: React.FC<ExamInstructionsProps> = ({ 
  company, 
  examType, 
  onStartExam, 
  onBack 
}) => {
  const [agreed, setAgreed] = useState(false);
  const [language, setLanguage] = useState('English');

  const instructions: ExamInstructions = {
    title: `${examType.name} - Instructions`,
    description: `Welcome to your ${examType.name} mock test! Please read all instructions carefully before starting your exam.`,
    rules: [
      'Click the "Start Test" button below to start your examination.',
      'You will see a timer at the top-right corner of your screen - keep an eye on it!',
      'Use the question panel on the right to navigate between different questions easily.',
      'You can mark questions for review by clicking the bookmark icon - this helps you remember which questions to check later.',
      'Feel free to change your answers anytime during the exam - just select a different option.',
      'Please do not refresh the page or close your browser while taking the exam.',
      'Make sure you have a stable internet connection before starting.',
      'Only submit your exam when you are completely finished and have reviewed all your answers.',
      company.id === 'tcs-nqt' ? 'This exam contains sections: Numerical Ability, Reasoning Ability, Verbal Ability, and Advanced Quantitative & Reasoning.' : '',
      company.id === 'cognizant' ? 'This exam contains sections: Quantitative Aptitude, Logical Reasoning, and Verbal Ability with shared timer.' : '',
      company.id === 'microsoft' ? 'This exam contains sections: Cloud Concepts, Azure Architecture & Services, and Azure Management & Governance.' : '',
      company.id === 'cognizant' ? 'This exam contains sections: Communication Assessment (Reading, Listening/Speaking, Storytelling), Aptitude Assessment (Quant, Reasoning, Verbal), and Technical Assessment (Coding, SQL, Cloud/UI).' : '',
      company.id === 'wipro' ? 'This exam contains sections: Aptitude, Reasoning, and Verbal with technical questions.' : '',
      company.id === 'accenture' ? 'This exam contains sections: Aptitude, Reasoning, and Verbal with consulting scenarios.' : '',
      company.id === 'infosys' ? 'This exam contains sections: Aptitude, Reasoning, and Verbal with IT focus.' : '',
      company.id === 'hcl' ? 'This exam contains sections: Aptitude, Reasoning, and Verbal with technical emphasis.' : '',
      company.id === 'capgemini' ? 'This exam contains sections: Aptitude, Reasoning, and Verbal with consulting focus.' : '',
    ].filter(rule => rule !== ''),
    colorLegend: [
      {
        color: 'bg-red-500',
        label: 'Red',
        description: 'Not Answered - Questions you have visited but not answered yet'
      },
      {
       color: 'bg-gray-300',
       label: 'Gray',
       description: 'Not Visited Yet - Questions you have not seen yet'
      },
      {
        color: 'bg-blue-600',
        label: 'Blue',
        description: 'Current Question - The question you are currently viewing'
      },
      {
        color: 'bg-green-500',
        label: 'Green',
        description: 'Answered - Questions you have already answered'
      },
      {
        color: 'bg-yellow-500',
        label: 'Yellow',
        description: 'Marked for Review - Questions you marked for review but have not answered'
      },
      {
        color: 'bg-purple-500',
        label: 'Purple',
        description: 'Answered & Marked - Questions you answered and marked for review'
      }
    ],
    additionalNotes: [
      'All questions are important, so try to answer every single one.',
      'Your progress is automatically saved, so you do not need to worry about losing your work.',
      'You will see your results immediately after you submit the exam.',
      'The mock test presently excludes coding, puzzle games, and other simulated exams. These features are coming soon.',
      'No negative marking for incorrect answers.',
      company.id === 'tcs-nqt' ? 'TCS exams focus on foundational skills and advanced quantitative reasoning.' : '',
      company.id === 'cognizant' ? 'Cognizant exams include section-wise submission and restricted navigation.' : '',
      company.id === 'microsoft' ? 'Microsoft Azure exams require understanding of cloud concepts and services.' : '',
      company.id === 'cognizant' ? 'Cognizant GenC 2025 exams include Communication Assessment (60 Qs, 58 min), Aptitude Assessment (80 Qs, 100 min), and Technical Assessment (3 tasks, 105-120 min) with cluster-specific coding, SQL, and cloud/UI sections.' : '',
      company.id === 'wipro' ? 'Wipro exams include technical aptitude and domain knowledge.' : '',
      company.id === 'accenture' ? 'Accenture exams focus on consulting scenarios and business acumen.' : '',
      company.id === 'infosys' ? 'Infosys exams emphasize IT fundamentals and logical reasoning.' : '',
      company.id === 'hcl' ? 'HCL exams include technical questions and industry knowledge.' : '',
      company.id === 'capgemini' ? 'Capgemini exams focus on consulting and technology integration.' : '',
    ].filter(note => note !== '')
  };

  const handleStartExam = () => {
    // Enter fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
    onStartExam();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header 
        className="text-white py-4 sm:py-6 px-4 sm:px-6 lg:px-8 shadow-lg"
        style={{ backgroundColor: company.color }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 sm:space-x-3 text-white hover:opacity-80 transition-all duration-200 bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-lg text-sm sm:text-base"
          >
            <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="font-medium">Back to Selection</span>
          </button>
          <div className="flex items-center space-x-3 sm:space-x-6">
            {/* <img
              src={company.logo}
              alt={company.name}
              className="h-8 w-8 sm:h-12 sm:w-12 object-contain bg-white rounded-lg p-1"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            /> */}
            <div className="text-center">
              <h1 className="text-lg sm:text-2xl font-bold">{examType.name}</h1>
              <p className="text-xs sm:text-sm opacity-90">Mock Test Platform</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 bg-white bg-opacity-20 px-3 sm:px-4 py-2 rounded-lg">
            <Monitor className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="text-xs sm:text-sm font-medium">Online Test</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-2">
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200 w-full">
          {/* Instructions Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <FileText className="h-6 w-6 sm:h-8 sm:w-8 flex-shrink-0" />
              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-bold">{instructions.title}</h2>
                <p className="text-sm sm:text-base text-blue-100 mt-1 font-medium">
                  {instructions.description}
                </p>
              </div>
            </div>
          </div>

          {/* Instructions Content */}
          <div className="px-4 sm:px-6 lg:px-8 py-4 sm:py-2">
            <div className="space-y-4 sm:space-y-5">
              {/* Exam Overview */}
              <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-blue-900">Exam Overview</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                  <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">Duration</p>
                      <p className="font-bold text-base sm:text-lg">{examType.sections.reduce((total, section) => total + section.duration, 0)} minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                    <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">Questions</p>
                      <p className="font-bold text-base sm:text-lg">{examType.sections.reduce((total, section) => total + section.questionCount, 0)}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                    <Target className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="text-xs sm:text-sm text-gray-600">Sections</p>
                      <p className="font-bold text-base sm:text-lg">{examType.sections.length}</p>
                    </div>
                  </div>
                  {company.id === 'microsoft' && (
                    <div className="flex items-center space-x-2 sm:space-x-3 p-3 sm:p-4 bg-white rounded-lg shadow-sm">
                      <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm text-gray-600">Passing Score</p>
                        <p className="font-bold text-base sm:text-lg">700/1000</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* How to Take the Test */}
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">How to Take the Test</h3>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 sm:p-6">
                  <ol className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {instructions.rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="font-bold text-blue-600 mr-2 sm:mr-3 bg-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="leading-relaxed">{rule}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              {/* Color Legend */}
              <div>
                <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Understanding Question Colors</h3>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 sm:p-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
                    {instructions.colorLegend.map((item, index) => (
                      <div key={index} className="flex items-start space-x-2 sm:space-x-3">
                        <div className={`w-3 h-3 sm:w-4 sm:h-4 ${item.color} rounded flex-shrink-0 mt-0.5`}></div>
                        <span className="text-gray-700 leading-relaxed">{item.description}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              {instructions.additionalNotes && (
                <div>
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-4 sm:mb-6">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">Key Information about this Mock Test</h3>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 sm:p-6">
                    <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {instructions.additionalNotes.map((note, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-3 w-3 sm:h-4 sm:w-4 text-green-500 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                          <span className="leading-relaxed">{note}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Language Selection */}
            <div className="mb-3 mt-4 sm:mt-2 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-200">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
                <div className="flex-1">
                  <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Choose your default language:</h4>
                  <p className="text-xs sm:text-sm text-gray-600">This language can be changed for a particular question later on.</p>
                </div>
                <select 
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="border border-gray-300 px-3 sm:px-4 py-2 text-sm font-medium bg-white rounded-lg w-full sm:w-auto min-w-[120px]"
                >
                  <option value="English">English</option>
                  <option value="Hindi" disabled>Hindi</option>
                </select>
              </div>
            </div>

            {/* Agreement Checkbox */}
            <div className="mb-2 p-4 sm:p-6 bg-blue-50 border border-blue-200 rounded-xl">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 sm:h-5 sm:w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded flex-shrink-0"
                />
                <div className="text-xs sm:text-sm text-gray-700 leading-relaxed flex-1">
                  <p className="font-semibold mb-1 sm:mb-2">Declaration:</p>
                  <p>
                    I have read and understood all the instructions given above. 
                    I confirm that my computer is in proper working condition and 
                    I am ready to begin the examination. I understand that this is a mock test 
                    and I will follow all the rules and guidelines provided.
                  </p>
                </div>
              </div>
            </div>

            {/* Start Button */}
            <div className="text-center">
              <button
                onClick={handleStartExam}
                disabled={!agreed}
                className={`px-8 sm:px-16 py-3 sm:py-4 rounded-xl font-bold text-lg sm:text-xl transition-all duration-300 transform ${
                  agreed
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-2xl hover:shadow-3xl hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                <span>Start Test</span>
              </button>
              {!agreed && (
                <p className="text-xs sm:text-sm text-red-600 mt-2 sm:mt-3">
                  Please read and accept the terms to continue
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 sm:mt-8 text-gray-600 text-xs sm:text-sm">
          <p>{company.name} Mock Test Platform </p>
          <p className="mt-1">This is a practice test for educational purposes only</p>
        </div>
      </main>
    </div>
  );
};

export default ExamInstructions; 