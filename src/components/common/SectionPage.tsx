import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ExamPrepNav from '@/components/ExamPrepNav';
import { BookOpen, Trophy, ArrowLeft } from 'lucide-react';
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
    onStartTest(topicId, type);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      
      <div className="bg-gradient-to-r align-center from-purple-600 to-indigo-600 text-white ">
        <div className="max-w-7xl align-center flex justify-between mx-2">
      <Button 
              variant="outline" 
              className="bg-white/10 border-white/20   align-center   text-white hover:bg-white/20"
            >
              {/* {title} Section */}
              Exam Prepration
            </Button>
            </div>
        
          {/* <div className="flex items-center justify-between"> */}
            
           
          {/* </div> */}
          <div className=" text-center py-5 -mt-10">
            <h1 className="text-4xl  font-bold mb-2">{title}</h1>
            <p className="text-xl text-white/80 ">{subtitle}</p>
          </div>
        
      </div>

      {/* Main Content */}
      <div className="">
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
          <div className="flex-1 lg:ml-4 py-5">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-foreground mb-2">Choose Your Topic</h2>
              <p className="text-muted-foreground">
                Select from our comprehensive range of {title.toLowerCase()} topics.
              </p>
            </div>

            {/* Topics Grid - 3 cards per row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mr-4">
              {topics.map((topic, index) => (
                <Card 
                  key={topic.id} 
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="text-3xl mb-2 group-hover:animate-bounce-soft">
                        {topic.icon}
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {topic.totalQuestions} Questions
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {topic.name}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex space-x-2">
                      <Button 
                        onClick={() => handleStartTest(topic.id, 'practice')}
                        className="flex-1 bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all duration-300"
                        size="sm"
                        variant="secondary"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Practice
                      </Button>
                      <Button 
                        onClick={() => handleStartTest(topic.id, 'test')}
                        className="flex-1 bg-gradient-primary hover:shadow-medium transition-all duration-300"
                        size="sm"
                      >
                        <Trophy className="w-4 h-4 mr-2" />
                        Mock Test
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