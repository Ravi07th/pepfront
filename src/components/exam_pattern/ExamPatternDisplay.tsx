import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { Clock, Eye, ArrowRight, Info, Target, BookOpen } from "lucide-react";

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



  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        {/* Main Content */}
        <div className="overflow-y-auto">
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="absolute inset-0">
              <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
              <div className="text-center">
               
                <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Company Exam Patterns 2025
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Master your preparation with comprehensive guides to all major company recruitment exams. 
                  Get detailed syllabus, exam patterns, and strategic insights for 2025 batch.
                </p>
                
                {/* Stats Cards */}
                {/* <div className="flex justify-center mt-12 space-x-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">{companyExamPatterns2025.length}</div>
                    <div className="text-gray-300 text-sm">Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">2025</div>
                    <div className="text-gray-300 text-sm">Batch</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">100%</div>
                    <div className="text-gray-300 text-sm">Updated</div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Search Section */}
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="bg-gray-800/20 rounded-2xl shadow-lg p-6 mb-8 border border-gray-700">
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <Input
                    placeholder="🔍 Search companies or exam names..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-600 focus:border-blue-500 rounded-xl transition-all duration-300 bg-gray-800 text-white placeholder-gray-400"
                  />
                  <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <BookOpen className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-sm text-gray-400 mt-2 text-center">
                  {filteredPatterns.length} exam patterns found
                </p>
              </div>
            </div>

            {/* Exam Patterns Grid */}
            <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
              {filteredPatterns.map((pattern) => (
                <Card 
                  key={pattern.companyId} 
                  className="group relative overflow-hidden bg-gray-800/20 hover:shadow-2xl transition-all duration-500 border border-gray-700 rounded-2xl cursor-pointer transform hover:-translate-y-2"
                  onClick={() => navigate(`/exam-patterns/${pattern.companyId}`)}
                >
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Content */}
                  <div className="relative p-6">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge className={`${getCompanyColor(pattern.companyId)} font-semibold px-3 py-1 rounded-full text-sm`}>
                            {pattern.companyName}
                          </Badge>
                          <Badge variant="outline" className="font-medium px-3 py-1 text-white rounded-full text-sm border-2">
                            {pattern.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {pattern.examName}
                        </CardTitle>
                      </div>
                    </div>

                    {/* Exam Sections */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-300 mb-3 flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        Exam Sections
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                                                 {pattern.sections.slice(0, 4).map((section, index) => (
                           <div key={index} className="bg-gray-700/50 rounded-lg p-3 group-hover:bg-blue-500/20 transition-colors">
                             <div className="font-medium text-gray-200 text-sm truncate">{section.name}</div>
                             <div className="text-gray-400 text-xs mt-1">
                               {section.questions} Q • {section.duration}
                             </div>
                           </div>
                         ))}
                         {pattern.sections.length > 4 && (
                           <div className="bg-blue-500/20 rounded-lg p-3 flex items-center justify-center">
                             <span className="text-blue-400 text-sm font-medium">
                               +{pattern.sections.length - 4} more
                             </span>
                           </div>
                         )}
                      </div>
                    </div>

                                         {/* Action Button */}
                     <div className="flex justify-between items-center">
                       <div className="flex items-center space-x-2 text-sm text-gray-400">
                         <Info className="w-4 h-4" />
                         <span>Click to view detailed pattern</span>
                       </div>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button 
                            size="lg"
                            className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform group-hover:scale-105 text-base"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/exam-patterns/${pattern.companyId}`);
                            }}
                          >
                            <Eye className="w-5 h-5 mr-2" />
                            View Details
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View complete syllabus, eligibility, pattern and more detailed information</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredPatterns.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BookOpen className="h-12 w-12 text-gray-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">No exam patterns found</h3>
                <p className="text-gray-400 text-lg max-w-md mx-auto">
                  Try adjusting your search terms or browse through our complete collection of exam patterns.
                </p>
                <Button 
                  className="mt-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
                  onClick={() => setSearchTerm('')}
                >
                  Clear Search
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default ExamPatternDisplay; 