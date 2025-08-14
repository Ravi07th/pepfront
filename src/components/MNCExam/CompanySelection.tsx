import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanyLogo from '@/components/common/CompanyLogo';
import { companies } from './data/companies';
import { Company, ExamType } from './types';
import ExamPrepNav from '@/components/ExamPrepNav';
import { Target, BookOpen, TrendingUp, Clock, FileText, Play } from 'lucide-react';

interface CompanySelectionProps {
  onCompanySelect: (company: Company, examType: ExamType) => void;
}

const CompanySelection: React.FC<CompanySelectionProps> = ({ onCompanySelect }) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = React.useState(false);

  // Prepare categories for ExamPrepNav
  const categories = [
    { id: 'verbal', name: 'Verbal Ability', questions: 240, status: 'live' },
    { id: 'quantitative', name: 'Quantitative Aptitude', questions: 240, status: 'live' },
    { id: 'logical', name: 'Logical Reasoning', questions: 240, status: 'live' },
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    // Handle navigation for sidebar categories
    if (type === 'practice') {
      // Navigate to practice mode
      console.log(`Navigate to practice: ${topicId}`);
    } else {
      // Navigate to test mode
      console.log(`Navigate to test: ${topicId}`);
    }
  };

  // Function to truncate description to consistent length
  const truncateDescription = (description: string, maxLength: number = 80) => {
    if (description.length <= maxLength) return description;
    return description.substring(0, maxLength) + '...';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0b1220] to-[#121a2a] text-white shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center py-6 px-3">
          {/* Back button - centered on mobile, left on desktop */}
          <div className="col-span-12 sm:col-span-3 flex justify-center sm:justify-start">
            <button
              onClick={() => navigate('/')}
              className="border-amber-400 text-amber-200 bg-transparent hover:bg-amber-400/10 px-4 py-2 rounded-lg border"
            >
              ← Back to Home
            </button>
          </div>
          {/* Centered title */}
          <div className="col-span-12 sm:col-span-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">MNC Mock Test Platform</h1>
            <p className="text-sm md:text-base text-white/80">Practice with realistic mock tests from top multinational companies</p>
          </div>
          <div className="col-span-12 sm:col-span-3" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Sidebar - ExamPrepNav */}
        <div className="lg:w-64 flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <ExamPrepNav 
            categories={categories}
            onStartTest={handleStartTest}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 py-8 px-4 lg:px-8">
          {/* Companies Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {companies.map((company) => (
              <div
                key={company.id}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-200"
              >
                {/* Company Header */}
                <div 
                  className="h-40 relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm ring-2 ring-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <CompanyLogo companyName={company.name} size={32} />
                      </div>
                      <div>
                        <h3 className="text-white text-lg font-bold">{company.name}</h3>
                        <p className="text-white/80 text-sm">
                          {company.examTypes.length} exam{company.examTypes.length > 1 ? 's' : ''} available
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-end">
                      <p className="text-white/90 text-sm leading-relaxed">
                        {truncateDescription(company.description, 70)}
                      </p>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/exam-patterns/${company.id}`);
                        }}
                        className="bg-white/20 hover:bg-white/30 text-white text-xs font-medium px-3 py-2 rounded-lg transition-all duration-300 border border-white/30 hover:border-white/50 backdrop-blur-sm"
                      >
                        View Syllabus
                      </button>
                    </div>
                  </div>
                </div>

                {/* Exam Types */}
                <div className="p-6 bg-white">
                  <div className="space-y-4">
                    {company.examTypes.map((examType) => (
                      <div
                        key={examType.id}
                        className="bg-gray-50 rounded-xl p-4 hover:bg-blue-50 transition-all duration-300 border border-gray-100 hover:border-blue-200"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-2 text-base">
                              {examType.name}
                            </h5>
                            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
                              {truncateDescription(examType.description, 75)}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3 text-xs text-gray-500">
                            <span className="flex items-center bg-white px-2 py-1 rounded-md border border-gray-200">
                              <Clock className="w-3 h-3 mr-1" />
                              {examType.sections.reduce((total, section) => total + section.duration, 0)} min
                            </span>
                            <span className="flex items-center bg-white px-2 py-1 rounded-md border border-gray-200">
                              <FileText className="w-3 h-3 mr-1" />
                              {examType.sections.reduce((total, section) => total + section.questionCount, 0)} questions
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Start Test Button */}
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <button
                      onClick={() => onCompanySelect(company, company.examTypes[0])}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-[1.02] flex items-center justify-center space-x-2"
                    >
                      <Play className="w-4 h-4" />
                      <span>Start Test</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-12 text-gray-600">
            <p className="text-sm">
              All mock tests are designed to simulate real exam conditions and help you prepare effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanySelection; 