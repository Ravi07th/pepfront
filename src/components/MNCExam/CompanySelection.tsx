import React from 'react';
import { companies } from './data/companies';
import { Company, ExamType } from './types';
import { SidebarSlider } from '@/components/sidebar';
import { Target, BookOpen, TrendingUp } from 'lucide-react';

interface CompanySelectionProps {
  onCompanySelect: (company: Company, examType: ExamType) => void;
}

const CompanySelection: React.FC<CompanySelectionProps> = ({ onCompanySelect }) => {
  // Prepare companies data for sidebar
  const sidebarCompanies = companies.map(company => ({
    companyId: company.id,
    companyName: company.name,
    examName: `${company.examTypes.length} Exam Types`,
    color: `bg-${company.color.split('-')[1]}-100 text-${company.color.split('-')[1]}-800`
  }));

  // Prepare stats data for sidebar
  const sidebarStats = [
    {
      label: 'Total Companies',
      value: companies.length,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      label: 'Total Exams',
      value: companies.reduce((total, company) => total + company.examTypes.length, 0),
      icon: BookOpen,
      color: 'text-green-600'
    },
    {
      label: 'Active Platform',
      value: '2025',
      icon: TrendingUp,
      color: 'text-purple-600'
    }
  ];

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <SidebarSlider 
        title="MNC Exam Platform"
        subtitle="Choose your target company"
        companies={sidebarCompanies}
        stats={sidebarStats}
      />

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              MNC Mock Test Platform
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Practice with realistic mock tests from top multinational companies. 
              Choose your target company and exam type to get started.
            </p>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Company Header */}
                <div 
                  className="h-48 relative overflow-hidden"
                  style={{ backgroundColor: company.color }}
                >
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  <div className="relative h-full flex flex-col justify-between p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-12 h-12 object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="text-white text-xl font-bold">{company.name}</h3>
                        <p className="text-white text-opacity-90 text-sm">
                          {company.examTypes.length} Exam Types
                        </p>
                      </div>
                    </div>
                    <p className="text-white text-opacity-90 text-sm">
                      {company.description}
                    </p>
                  </div>
                </div>

                {/* Exam Types */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Available Exams
                  </h4>
                  <div className="space-y-3">
                    {company.examTypes.map((examType) => (
                      <div
                        key={examType.id}
                        className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 hover:bg-blue-50 transition-colors cursor-pointer"
                        onClick={() => onCompanySelect(company, examType)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h5 className="font-semibold text-gray-900 mb-1">
                              {examType.name}
                            </h5>
                            <p className="text-sm text-gray-600 mb-2">
                              {examType.description}
                            </p>
                            <div className="flex items-center space-x-4 text-xs text-gray-500">
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {examType.sections.reduce((total, section) => total + section.duration, 0)} min
                              </span>
                              <span className="flex items-center">
                                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                                {examType.sections.reduce((total, section) => total + section.questionCount, 0)} questions
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    ))}
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