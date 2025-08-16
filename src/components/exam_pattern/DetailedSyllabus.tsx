import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Clock, 
  Target, 
  BookOpen, 
  Users, 
  TrendingUp, 
  Calendar,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowRight,
  Star,
  Download,
  FileText,
  Play,
  BarChart3,
  Award,
  Zap,
  ExternalLink,
  Code,
  Brain
} from "lucide-react";
import { ExamPattern, getExamPatternByCompany } from './CompanyExamPatterns2025';

interface DetailedSyllabusProps {
  companyId: string;
  onBack?: () => void;
}

const DetailedSyllabus: React.FC<DetailedSyllabusProps> = ({ companyId, onBack }) => {
  const navigate = useNavigate();
  const pattern = getExamPatternByCompany(companyId);
  const [activeTab, setActiveTab] = useState('syllabus');
  const [isAutoNavigating, setIsAutoNavigating] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);
  const syllabusRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const tipsRef = useRef<HTMLDivElement>(null);

  // Auto-navigation based on scroll position
  const handleScroll = useCallback(() => {
    if (isAutoNavigating) return; // Prevent multiple auto-navigations
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // Check if we're near the bottom of the page
    if (scrollY + windowHeight >= documentHeight - 100) {
      // Auto-advance to next tab in the correct order
      const tabs = ['syllabus', 'pattern', 'process', 'tips'];
      const currentIndex = tabs.indexOf(activeTab);
      if (currentIndex < tabs.length - 1) {
        setIsAutoNavigating(true);
        const nextTab = tabs[currentIndex + 1];
        setActiveTab(nextTab);
        
        // Scroll to top immediately when tab changes
        window.scrollTo({ 
          top: 0, 
          behavior: 'smooth' 
        });
        
        // Reset auto-navigation flag after a delay
        setTimeout(() => {
          setIsAutoNavigating(false);
        }, 1000);
      }
    }
  }, [activeTab, isAutoNavigating]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Scroll to top when tab changes (both manual and auto)
  useEffect(() => {
    // Only scroll to top if it's a manual tab change (not auto-navigation)
    if (!isAutoNavigating) {
      const scrollToTop = () => {
        // Use a longer delay to ensure content is rendered
        setTimeout(() => {
          window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
          });
        }, 100);
      };

      // Also scroll immediately for better responsiveness
      window.scrollTo({ 
        top: 0, 
        behavior: 'smooth' 
      });

      // Then scroll again after a delay to ensure it works
      scrollToTop();
    }
  }, [activeTab, isAutoNavigating]);

  // Additional scroll-to-top effect for better reliability
  useEffect(() => {
    if (activeTab && !isAutoNavigating) {
      // Force scroll to top with multiple attempts
      const scrollAttempts = [0, 50, 150, 300];
      scrollAttempts.forEach(delay => {
        setTimeout(() => {
          window.scrollTo({ 
            top: 0, 
            behavior: 'smooth' 
          });
        }, delay);
      });
    }
  }, [activeTab, isAutoNavigating]);

  if (!pattern) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Exam Pattern Not Found</h2>
          <p className="text-gray-600 mb-4">
            The exam pattern for this company is not available.
          </p>
          {onBack && (
            <Button onClick={onBack} variant="outline">
              Go Back
            </Button>
          )}
        </div>
      </div>
    );
  }

  const getCompanyColor = (companyId: string) => {
    const colors: { [key: string]: string } = {
      'tcs': 'bg-blue-100 text-blue-800',
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
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-3 md:px-4 py-3 sm:py-4 md:py-8 transition-all duration-300 overflow-x-hidden" style={{ scrollBehavior: 'smooth' }}>
      {/* Header */}
      <div className="mb-4 sm:mb-6 md:mb-8">
        {onBack && (
          <Button onClick={onBack} variant="ghost" className="mb-2 sm:mb-3 md:mb-4 transition-all duration-200 hover:bg-gray-100 w-full sm:w-auto justify-start">
            <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
            <span className="hidden sm:inline">Back to Exam Patterns</span>
            <span className="sm:hidden">Back</span>
          </Button>
        )}
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
          <Badge className={`text-xs sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 ${getCompanyColor(companyId)} transition-all duration-200 w-fit`}>
            {pattern.companyName}
          </Badge>
          <Badge variant="outline" className="text-xs sm:text-sm md:text-lg px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 transition-all duration-200 w-fit">
            {pattern.year}
          </Badge>
        </div>
        
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 leading-tight break-words">
          {pattern.examName}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-3 sm:mb-4 md:mb-6">
          {pattern.platform}
        </p>
      </div>

      

      {/* Sticky Navigation */}
      <div className="sticky top-14 sm:top-16 md:top-20 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm mb-3 sm:mb-4 md:mb-6 transition-all duration-300">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-gray-50/80 backdrop-blur-sm gap-1 transition-all duration-300" style={{ minWidth: '100%', overflow: 'hidden' }}>
            <TabsTrigger 
              value="syllabus" 
              className="flex items-center justify-center space-x-1 sm:space-x-2 transition-all duration-200 hover:bg-blue-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 text-xs sm:text-sm p-2 sm:p-2.5 md:p-3 min-w-0 overflow-hidden"
            >
              <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">Syllabus</span>
              <span className="sm:hidden text-xs">Syl</span>
            </TabsTrigger>
            <TabsTrigger 
              value="pattern" 
              className="flex items-center justify-center space-x-1 sm:space-x-2 transition-all duration-200 hover:bg-blue-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 text-xs sm:text-sm p-2 sm:p-2.5 md:p-3 min-w-0 overflow-hidden"
            >
              <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">Exam Pattern</span>
              <span className="sm:hidden text-xs">Pat</span>
            </TabsTrigger>
            <TabsTrigger 
              value="process" 
              className="flex items-center justify-center space-x-1 sm:space-x-2 transition-all duration-200 hover:bg-blue-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 text-xs sm:text-sm p-2 sm:p-2.5 md:p-3 min-w-0 overflow-hidden"
            >
              <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">Selection Process</span>
              <span className="sm:hidden text-xs">Proc</span>
            </TabsTrigger>
            <TabsTrigger 
              value="tips" 
              className="flex items-center justify-center space-x-1 sm:space-x-2 transition-all duration-200 hover:bg-blue-50 data-[state=active]:bg-blue-100 data-[state=active]:text-blue-700 text-xs sm:text-sm p-2 sm:p-2.5 md:p-3 min-w-0 overflow-hidden"
            >
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="hidden sm:inline">Preparation Tips</span>
              <span className="sm:hidden text-xs">Tips</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
        
        {/* Auto-navigation indicator */}
        {isAutoNavigating && (
          <div className="absolute top-full left-0 right-0 bg-blue-100 text-blue-800 text-xs sm:text-sm py-1.5 sm:py-2 px-2 sm:px-3 md:px-4 text-center animate-pulse">
            <span className="flex items-center justify-center space-x-1 sm:space-x-2">
              <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Auto-advancing to next section...</span>
              <span className="sm:hidden">Auto-advancing...</span>
            </span>
          </div>
        )}
      </div>

      {/* Main Content with Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4 sm:space-y-6">
        {/* Syllabus Tab */}
        <TabsContent value="syllabus" className="space-y-3 sm:space-y-4 md:space-y-6 transition-all duration-300" ref={syllabusRef}>
          <div className="grid gap-3 sm:gap-4 md:gap-6 lg:grid-cols-4">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-3 sm:space-y-4 md:space-y-6">
              {/* Exam Sections */}
                             <Card className="transition-all duration-200 hover:shadow-lg">
                 <CardHeader>
                   <CardTitle className="flex items-center space-x-2">
                     <BookOpen className="h-5 w-5" />
                     <span>Exam Sections & Syllabus</span>
                   </CardTitle>
                   <CardDescription>
                     Detailed breakdown of all exam sections with topics and time allocation
                   </CardDescription>
                 </CardHeader>
                 
                 {/* Quick Stats Cards */}
                 <div className="px-3 sm:px-6 pb-4 sm:pb-6">
                   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                     <Card className="transition-all duration-200 hover:shadow-md">
                       <CardContent className="p-3 sm:p-4">
                         <div className="flex items-center space-x-2">
                           <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                           <div>
                             <p className="text-xs sm:text-sm font-medium text-gray-600">Duration</p>
                             <p className="text-sm sm:text-lg font-bold">{pattern.totalDuration}</p>
                           </div>
                         </div>
                       </CardContent>
                     </Card>
                     <Card className="transition-all duration-200 hover:shadow-md">
                       <CardContent className="p-3 sm:p-4">
                         <div className="flex items-center space-x-2">
                           <Target className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
                           <div>
                             <p className="text-xs sm:text-sm font-medium text-gray-600">Questions</p>
                             <p className="text-sm sm:text-lg font-bold">{pattern.totalQuestions}</p>
                           </div>
                         </div>
                       </CardContent>
                     </Card>
                     <Card className="transition-all duration-200 hover:shadow-md">
                       <CardContent className="p-3 sm:p-4">
                         <div className="flex items-center space-x-2">
                           <Users className="h-4 w-4 sm:h-5 sm:w-5 text-purple-600" />
                           <div>
                             <p className="text-xs sm:text-sm font-medium text-gray-600">Process</p>
                             <p className="text-sm sm:text-lg font-bold">{pattern.selectionProcess.length} rounds</p>
                           </div>
                         </div>
                       </CardContent>
                     </Card>
                   </div>
                 </div>
                <CardContent className="space-y-3 sm:space-y-4 md:space-y-6">
                  {pattern.sections.map((section, index) => (
                    <div key={index} className="border rounded-lg p-3 sm:p-4 md:p-6 bg-gradient-to-r from-gray-50 to-white transition-all duration-200 hover:shadow-md">
                      <div className="flex flex-col gap-2 sm:gap-3 md:gap-0 mb-2 sm:mb-3 md:mb-4">
                        <div>
                          <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 leading-tight break-words">{section.name}</h3>
                          <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">{section.description}</p>
                        </div>
                      </div>
                      
                      
                      
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900 flex items-center space-x-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span>Detailed Topics & Syllabus:</span>
                        </h4>
                        
                        {/* Topic Details */}
                        <div className="grid gap-4 md:grid-cols-2">
                          {section.topics.map((topic, topicIndex) => (
                            <div key={topicIndex} className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                              <div className="flex items-start space-x-3">
                                <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <div className="flex-1">
                                  <h5 className="font-semibold text-gray-900 mb-2">{topic.name}</h5>
                                  
                                  {/* Topic Description */}
                                  {topic.description && (
                                    <div className="text-sm text-gray-600 mb-3">
                                      {topic.description}
                                    </div>
                                  )}
                                  
                                  {/* Sub-topics */}
                                  <div className="space-y-2">
                                    {topic.subTopics.map((subTopic, subIndex) => (
                                      <div key={subIndex} className="flex items-center space-x-2">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                                        <span
                                          className="text-sm font-medium text-gray-700 cursor-default"
                                        >
                                          {subTopic}
                                        </span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Eligibility */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>Eligibility Criteria</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pattern.eligibility.map((requirement, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{requirement}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center space-x-2 text-blue-900">
                    <Zap className="h-5 w-5 text-blue-600" />
                    <span>Quick Actions</span>
                  </CardTitle>
                  <CardDescription className="text-blue-700">
                    Access study materials and practice resources
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg" 
                    variant="default"
                    onClick={() => navigate('/mock-test')}
                  >
                    <Play className="h-5 w-5 mr-3" />
                    Start Mock Test
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg" 
                    variant="default"
                    onClick={() => navigate('/student-notes')}
                  >
                    <Brain className="h-5 w-5 mr-3" />
                    Technical Questions
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg" 
                    variant="default"
                    onClick={() => navigate('/coding')}
                  >
                    <Code className="h-5 w-5 mr-3" />
                    Coding Problems
                  </Button>
                  <Button 
                    className="w-full bg-gradient-to-r from-gray-600 to-slate-600 hover:from-gray-700 hover:to-slate-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg" 
                    variant="default"
                    onClick={() => window.open(pattern.careerPortal, '_blank')}
                  >
                    <ExternalLink className="h-5 w-5 mr-3" />
                    Apply Job at {pattern.companyName}
                  </Button>
                </CardContent>
              </Card>
              
              {/* Student Exam Tips */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5" />
                    <span>Student Exam Tips</span>
                  </CardTitle>
                  <CardDescription>
                    Essential tips for exam success
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Time Management */}
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span className="font-medium text-blue-900 text-sm">Time Management</span>
                      </div>
                      <p className="text-xs text-blue-700">
                        Allocate {Math.round((parseInt(pattern.totalDuration.split(' ')[0]) * 60 / pattern.totalQuestions))}s per question. Skip difficult ones and return later.
                      </p>
                    </div>
                    
                    {/* Question Strategy */}
                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Target className="h-4 w-4 text-green-600" />
                        <span className="font-medium text-green-900 text-sm">Question Strategy</span>
                      </div>
                      <p className="text-xs text-green-700">
                        Start with easy questions to build confidence. Use elimination method for MCQs.
                      </p>
                    </div>
                    
                    {/* Section Priority */}
                    <div className="bg-purple-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <BarChart3 className="h-4 w-4 text-purple-600" />
                        <span className="font-medium text-purple-900 text-sm">Section Priority</span>
                      </div>
                      <p className="text-xs text-purple-700">
                        Focus on sections with higher weightage first. Don't spend too much time on any single question.
                      </p>
                    </div>
                    
                    {/* Accuracy vs Speed */}
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Award className="h-4 w-4 text-orange-600" />
                        <span className="font-medium text-orange-900 text-sm">Accuracy vs Speed</span>
                      </div>
                      <p className="text-xs text-orange-700">
                        Maintain accuracy over speed initially. Speed will improve with practice.
                      </p>
                    </div>
                    
                    {/* Common Mistakes */}
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <AlertCircle className="h-4 w-4 text-red-600" />
                        <span className="font-medium text-red-900 text-sm">Avoid These</span>
                      </div>
                      <p className="text-xs text-red-700">
                        Don't panic, read questions carefully, and double-check your answers before submitting.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Exam Pattern Tab */}
        <TabsContent value="pattern" className="space-y-6 transition-all duration-300" ref={patternRef}>
          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Exam Pattern Overview</span>
              </CardTitle>
              <CardDescription>
                Complete exam structure, timing, and question distribution
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              {/* Exam Pattern Details */}
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Exam Structure</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-blue-50 rounded-lg transition-all duration-200 hover:bg-blue-100 gap-1 sm:gap-0">
                      <span className="font-medium text-blue-900 text-sm sm:text-base">Total Duration</span>
                      <span className="text-blue-700 font-semibold text-sm sm:text-base">{pattern.totalDuration}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-green-50 rounded-lg transition-all duration-200 hover:bg-green-100 gap-1 sm:gap-0">
                      <span className="font-medium text-green-900 text-sm sm:text-base">Total Questions</span>
                      <span className="text-green-700 font-semibold text-sm sm:text-base">{pattern.totalQuestions}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-2 sm:p-3 bg-purple-50 rounded-lg transition-all duration-200 hover:bg-purple-100 gap-1 sm:gap-0">
                      <span className="font-medium text-purple-900 text-sm sm:text-base">Sections</span>
                      <span className="text-purple-700 font-semibold text-sm sm:text-base">{pattern.sections.length}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">Section Breakdown</h3>
                  <div className="space-y-2 sm:space-y-3">
                    {pattern.sections.map((section, index) => (
                      <div key={index} className="p-2 sm:p-3 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-gray-100">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-0 mb-1 sm:mb-2">
                          <span className="font-medium text-gray-900 text-sm sm:text-base break-words">{section.name}</span>
                          <span className="text-xs sm:text-sm text-blue-600">{section.duration}</span>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs sm:text-sm gap-1 sm:gap-0">
                          <span className="text-gray-600">{section.questions} questions</span>
                          <span className="text-gray-600 break-words">{section.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

                          {/* Selection Process Tab */}
         <TabsContent value="process" className="space-y-4 sm:space-y-6 transition-all duration-300" ref={processRef}>
           <Card className="transition-all duration-200 hover:shadow-lg">
             <CardHeader>
               <CardTitle className="flex items-center space-x-2">
                 <Users className="h-4 w-4 sm:h-5 sm:w-5" />
                 <span className="text-base sm:text-lg">Selection Process</span>
               </CardTitle>
               <CardDescription className="text-sm sm:text-base">
                 Step-by-step selection process and requirements
               </CardDescription>
             </CardHeader>
             <CardContent className="space-y-3 sm:space-y-4 md:space-y-6">
               <div className="space-y-3 sm:space-y-4">
                 {pattern.selectionProcess.map((step, index) => (
                   <div key={index} className="flex items-start space-x-2 sm:space-x-4 p-3 sm:p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg transition-all duration-200 hover:shadow-md">
                     <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold text-xs sm:text-sm">
                       {index + 1}
                     </div>
                     <div className="flex-1">
                       <p className="text-gray-700 text-sm sm:text-base leading-relaxed">{step}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </CardContent>
           </Card>
         </TabsContent>

        {/* Preparation Tips Tab */}
        <TabsContent value="tips" className="space-y-4 sm:space-y-6 transition-all duration-300" ref={tipsRef}>
          <Card className="transition-all duration-200 hover:shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-base sm:text-lg">Student Exam Tips</span>
              </CardTitle>
              <CardDescription className="text-sm sm:text-base">
                Essential tips and strategies for exam preparation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 sm:space-y-6">
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2">
                <div className="space-y-3 sm:space-y-4">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                    <span>General Tips</span>
                  </h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex items-start space-x-2 sm:space-x-3 p-2 sm:p-3 bg-yellow-50 rounded-lg transition-all duration-200 hover:bg-yellow-100">
                      <CheckCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-yellow-900">Start Early</p>
                        <p className="text-sm text-yellow-700">Begin preparation at least 3-4 months before the exam</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg transition-all duration-200 hover:bg-blue-100">
                      <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-blue-900">Practice Regularly</p>
                        <p className="text-sm text-blue-700">Solve mock tests and previous year questions daily</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg transition-all duration-200 hover:bg-green-100">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-green-900">Time Management</p>
                        <p className="text-sm text-green-700">Practice with time constraints to improve speed</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                    <Award className="h-5 w-5 text-purple-500" />
                    <span>Section-wise Tips</span>
                  </h3>
                  <div className="space-y-3">
                    {pattern.sections.map((section, index) => (
                      <div key={index} className="p-3 bg-gray-50 rounded-lg transition-all duration-200 hover:bg-gray-100">
                        <h4 className="font-medium text-gray-900 mb-2">{section.name}</h4>
                        <p className="text-sm text-gray-600">
                          Focus on core concepts and practice {section.questions} questions within {section.duration}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DetailedSyllabus; 