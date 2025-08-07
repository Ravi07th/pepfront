import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Clock, Eye, ArrowRight, Info, Target, BookOpen } from "lucide-react";
import { SidebarSlider } from "@/components/sidebar";
import { 
  companyExamPatterns2025, 
  ExamPattern, 
  getExamPatternByCompany
} from './CompanyExamPatterns2025';

interface ExamPatternDisplayProps {
  selectedCompany?: string;
}

const ExamPatternDisplay: React.FC<ExamPatternDisplayProps> = ({ selectedCompany }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPatterns = useMemo(() => {
    let patterns = companyExamPatterns2025;

    // Filter by selected company
    if (selectedCompany) {
      patterns = patterns.filter(pattern => pattern.companyId === selectedCompany);
    }

    // Filter by search term
    if (searchTerm) {
      patterns = patterns.filter(pattern =>
        pattern.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pattern.examName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return patterns;
  }, [searchTerm, selectedCompany]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'very high':
        return 'bg-red-100 text-red-800';
      case 'high':
        return 'bg-orange-100 text-orange-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getCompanyColor = (companyId: string) => {
    const colors: { [key: string]: string } = {
      'tcs-nqt': 'bg-blue-100 text-blue-800',
      'tcs-digital': 'bg-blue-100 text-blue-800',
      'infosys': 'bg-purple-100 text-purple-800',
      'wipro': 'bg-green-100 text-green-800',
      'cognizant': 'bg-red-100 text-red-800',
      'capgemini': 'bg-orange-100 text-orange-800',
      'accenture': 'bg-pink-100 text-pink-800',
      'hcl': 'bg-indigo-100 text-indigo-800',
      'tech-mahindra': 'bg-teal-100 text-teal-800',
      'amazon': 'bg-yellow-100 text-yellow-800',
      'microsoft': 'bg-gray-100 text-gray-800',
      'google': 'bg-red-100 text-red-800'
    };
    return colors[companyId] || 'bg-gray-100 text-gray-800';
  };

  // Prepare companies data for sidebar
  const sidebarCompanies = companyExamPatterns2025.map(company => ({
    companyId: company.companyId,
    companyName: company.companyName,
    examName: company.examName,
    color: getCompanyColor(company.companyId)
  }));

  // Prepare stats data for sidebar
  const sidebarStats = [
    {
      label: 'Total Companies',
      value: companyExamPatterns2025.length,
      icon: Target,
      color: 'text-blue-600'
    },
    {
      label: 'Year',
      value: '2025',
      icon: BookOpen,
      color: 'text-green-600'
    }
  ];

  return (
    <TooltipProvider>
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <SidebarSlider 
          title="Quick Access"
          subtitle="Navigate to different sections"
          companies={sidebarCompanies}
          stats={sidebarStats}
        />

        {/* Main Content - No Scroll */}
        <div className="flex-1">
          <div className="max-w-6xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Company Exam Patterns 2025
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Comprehensive guide to all major company recruitment exams with detailed syllabus, 
                exam patterns, and preparation strategies for 2025 batch.
              </p>
            </div>

            {/* Search Filter */}
            <div className="mb-8">
              <div className="max-w-md mx-auto">
                <Input
                  placeholder="Search companies or exam names..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

                                       {/* Exam Patterns Grid - Single Row */}
              <div className="grid gap-4 grid-cols-1">
                {filteredPatterns.map((pattern) => (
                  <Card 
                    key={pattern.companyId} 
                    className="hover:shadow-lg transition-shadow border-gray-200 flex flex-row h-32 overflow-hidden cursor-pointer hover:bg-gray-50"
                    onClick={() => navigate(`/exam-patterns/${pattern.companyId}`)}
                  >
                    {/* Header Section */}
                    <div className="flex-shrink-0 w-1/3 p-3 border-r border-gray-200 flex flex-col justify-center">
                      <div className="flex items-center justify-between mb-1">
                        <Badge className={`${getCompanyColor(pattern.companyId)} font-medium text-xs px-2 py-0.5`}>
                          {pattern.companyName}
                        </Badge>
                        <Badge variant="outline" className="text-xs font-medium px-2 py-0.5">
                          {pattern.year}
                        </Badge>
                      </div>
                      <CardTitle className="text-sm font-bold text-gray-900 leading-tight line-clamp-2">{pattern.examName}</CardTitle>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 flex items-center p-3">
                      <div className="flex items-center space-x-4 w-full">
                        {/* Exam Sections */}
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-xs text-gray-900 mb-1">Exam Sections:</h4>
                          <div className="flex space-x-3">
                            {pattern.sections.slice(0, 2).map((section, index) => (
                              <div key={index} className="text-xs min-w-0">
                                <div className="font-medium text-gray-800 truncate">{section.name}</div>
                                <div className="text-gray-600">
                                  {section.questions} Q • {section.duration}
                                </div>
                              </div>
                            ))}
                            {pattern.sections.length > 2 && (
                              <div className="text-blue-600 text-xs font-medium flex-shrink-0">
                                +{pattern.sections.length - 2} more
                              </div>
                            )}
                          </div>
                        </div>



                        {/* Action Button */}
                        <div className="flex-shrink-0">
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Button 
                                size="sm"
                                variant="outline"
                                className="px-3 py-5 h-7 text-xs"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  navigate(`/exam-patterns/${pattern.companyId}`);
                                }}
                              >
                                <Eye className="h-5 w-3 mr-3" />
                                View Exam Pattern & Syllabus
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>View complete syllabus, eligibility, pattern and more detailed information</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

            {/* No Results */}
            {filteredPatterns.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">No exam patterns found</h3>
                <p className="text-gray-600">
                  Try adjusting your search terms or filters to find what you're looking for.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ExamPatternDisplay; 