import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ExamPrepNav from '@/components/ExamPrepNav';
import { BookOpen, Trophy, ArrowLeft, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Topic {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  totalQuestions: number;
}

interface SectionPageProps {
  title: string;
  subtitle: string;
  topics: Topic[];
  onStartTest: (topicId: string, type: 'practice' | 'test') => void;
}

const SectionPage: React.FC<SectionPageProps> = ({ 
  title, 
  subtitle, 
  topics, 
  onStartTest 
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const categories = [
    { id: 'verbal', name: 'Verbal Ability', questions: 240, status: 'live' },
    { id: 'quantitative', name: 'Quantitative Aptitude', questions: 240, status: 'live' },
    { id: 'logical', name: 'Logical Reasoning', questions: 240, status: 'live' },
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    // Only call onStartTest for actual topic IDs, not category IDs from sidebar
    if (topics.some(topic => topic.id === topicId)) {
      onStartTest(topicId, type);
    }
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <div className=" items-center bg-gradient-to-r py-8 from-[#0b1220] to-[#121a2a] text-white shadow-md">
        <div className='flex items-center justify-between px-5 w-full xl:w-3/5 lg:w-4/5 md:w-full sm:w-full'>
          <Link to="/exam-prep">
            <Button
              variant="outline"
              className="border-amber-400 text-amber-200 bg-transparent hover:bg-amber-400/10 text-xs sm:text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Exam Preparation</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </Link>

          <div className='text-center md:block hidden'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{title}</h1>
            <p className="text-xs sm:text-sm md:text-base text-white/80">{subtitle}</p>
          </div>

          <Button
            variant="outline"
            className="lg:hidden border-amber-400 text-amber-200 bg-transparent hover:bg-amber-400/10"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="w-4 h-4" />
          </Button>
        </div>

        <div className='md:hidden text-center sm:block'>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">{title}</h1>
          <p className="text-xs sm:text-sm md:text-base text-white/80">{subtitle}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        <div className="flex flex-col lg:flex-row gap-2 sm:gap-4">
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
          <div className="flex-1 py-4 sm:py-6 lg:py-8 px-4 sm:px-6 lg:px-8">
            <div className="mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Choose Your Topic</h2>
              <p className="text-sm sm:text-base text-gray-600">
                Select from our comprehensive range of {title.toLowerCase()} topics.
              </p>
            </div>

            {/* Topics Grid - Responsive cards per row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mr-4">
              {topics.map((topic, index) => (
                <Card 
                  key={topic.id} 
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn bg-white border border-slate-200 hover:border-amber-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl sm:text-3xl mb-2 group-hover:animate-bounce-soft">
                        {topic.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs bg-amber-100 text-amber-700">
                        {topic.totalQuestions} Questions
                      </Badge>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {topic.name}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-slate-600 leading-relaxed">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2 sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                      <Button 
                        onClick={() => handleStartTest(topic.id, 'practice')}
                        className="flex-1 border border-slate-300 text-slate-700 hover:bg-slate-50 transition-all duration-300 py-3 sm:py-2"
                        size="sm"
                        variant="secondary"
                      >
                        <BookOpen className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm">Practice</span>
                      </Button>
                      <Button 
                        onClick={() => handleStartTest(topic.id, 'test')}
                        className="flex-1 bg-blue-900 hover:shadow-medium transition-all duration-300 text-white py-3 sm:py-2"
                        size="sm"
                      >
                        <Trophy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        <span className="text-xs sm:text-sm">Mock Test</span>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionPage; 