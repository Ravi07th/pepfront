import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Brain, 
  Code, 
  Users, 
  Home, 
  FileText, 
  Play, 
  Target as TargetIcon, 
  TrendingUp,
  BookOpen
} from "lucide-react";

interface SidebarSliderProps {
  title?: string;
  subtitle?: string;
  categories?: Array<{
    id: string;
    name: string;
    icon: any;
    path: string;
    description: string;
  }>;
  companies?: Array<{
    companyId: string;
    companyName: string;
    examName: string;
    color: string;
  }>;
  stats?: Array<{
    label: string;
    value: string | number;
    icon: any;
    color: string;
  }>;
}

const SidebarSlider: React.FC<SidebarSliderProps> = ({
  title = "Quick Access",
  subtitle = "Navigate to different sections",
  categories = [],
  companies = [],
  stats = []
}) => {
  const navigate = useNavigate();

  // Default categories if none provided
  const defaultCategories = [
    {
      id: 'home',
      name: 'Home',
      icon: Home,
      path: '/',
      description: 'Main dashboard'
    },
    {
      id: 'mock-test',
      name: 'Mock Tests',
      icon: Play,
      path: '/mock-test',
      description: 'Practice with mock exams'
    },
    {
      id: 'study',
      name: 'Study Materials',
      icon: BookOpen,
      path: '/coding',
      description: 'Learning resources'
    },
    {
      id: 'exam-pattern',
      name: 'Exam Pattern',
      icon: Code,
      path: '/exam-patterns',
      description: 'Company exam patterns'
    },
    {
      id: 'practice',
      name: 'Practice',
      icon: Brain,
      path: '/practice',
      description: 'Practice questions'
    },
    {
      id: 'exam-prep',
      name: 'Exam Prep',
      icon: GraduationCap,
      path: '/exam-prep',
      description: 'Exam preparation guide'
    },
    {
      id: 'contact',
      name: 'Contact',
      icon: Users,
      path: '/contact',
      description: 'Get in touch'
    },
    {
      id: 'ui-components',
      name: 'UI Components',
      icon: FileText,
      path: '/uiComponents',
      description: 'Component library'
    }
  ];

  const displayCategories = categories.length > 0 ? categories : defaultCategories;

  return (
    <TooltipProvider>
      <div className="w-80 bg-gray-50 border-r border-gray-200 flex flex-col sticky top-0 h-screen">
        {/* Sidebar Header */}
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{subtitle}</p>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1">
          <div className="p-6 space-y-6">
            {/* Quick Access Categories */}
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Categories</h3>
              <div className="space-y-2">
                {displayCategories.map((category) => (
                  <Tooltip key={category.id}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        className="w-full justify-start h-auto p-3"
                        onClick={() => navigate(category.path)}
                      >
                        <category.icon className="h-4 w-4 mr-3 text-gray-600" />
                        <div className="text-left">
                          <div className="font-medium text-gray-900">{category.name}</div>
                          <div className="text-xs text-gray-500">{category.description}</div>
                        </div>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{category.description}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {/* Companies Section - Only show if companies are provided */}
            {companies.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Companies</h3>
                  <div className="space-y-2">
                    {companies.map((company) => (
                      <Tooltip key={company.companyId}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            className="w-full justify-start h-auto p-3"
                            onClick={() => navigate(`/exam-patterns/${company.companyId}`)}
                          >
                            <div className={`w-8 h-8 rounded-full ${company.color} flex items-center justify-center mr-3`}>
                              <span className="text-xs font-bold text-white">
                                {company.companyName.charAt(0)}
                              </span>
                            </div>
                            <div className="text-left">
                              <div className="font-medium text-gray-900">{company.companyName}</div>
                              <div className="text-xs text-gray-500">{company.examName}</div>
                            </div>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>View {company.companyName} exam pattern</p>
                        </TooltipContent>
                      </Tooltip>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Quick Stats Section - Only show if stats are provided */}
            {stats.length > 0 && (
              <>
                <Separator />
                <div>
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Quick Stats</h3>
                  <div className="space-y-3">
                    {stats.map((stat, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                        <div className="flex items-center">
                          <stat.icon className={`h-4 w-4 ${stat.color} mr-2`} />
                          <span className="text-sm text-gray-600">{stat.label}</span>
                        </div>
                        <Badge variant="secondary">{stat.value}</Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </ScrollArea>
      </div>
    </TooltipProvider>
  );
};

export default SidebarSlider; 