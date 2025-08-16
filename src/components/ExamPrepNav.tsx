import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Home,
  Target,
  BarChart3,
  Bookmark,
  Play,
  X,
  ChevronRight,
  ChevronLeft,
  GraduationCap,
  BookOpen,
  Search,
  Clock,
  Users,
  Brain,
  Trophy,
  Zap,
  Lightbulb,
  FileText,
  Menu,
  Calculator,
  Code,
  BookText,
  Calendar,
  ClipboardList,
  Bell,
  ThumbsUp,
} from "lucide-react";

interface ExamPrepNavProps {
  categories: any[];
  onStartTest: (categoryId: string, mode: "practice" | "test") => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  sidebarCollapsed?: boolean;
  setSidebarCollapsed?: (collapsed: boolean) => void;
}

const ExamPrepNav: React.FC<ExamPrepNavProps> = ({
  categories,
  onStartTest,
  sidebarOpen,
  setSidebarOpen,
  sidebarCollapsed = false,
  setSidebarCollapsed,
}) => {
  const [internalSidebarCollapsed, setInternalSidebarCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Use external state if provided, otherwise use internal state
  const isCollapsed = setSidebarCollapsed ? sidebarCollapsed : internalSidebarCollapsed;
  const setIsCollapsed = setSidebarCollapsed || setInternalSidebarCollapsed;

  // Navigation handlers
  const handleNavigation = (route: string) => {
    navigate(route);
  };

  // Check if current route is active
  const isActiveRoute = (route: string) => {
    return location.pathname === route || location.pathname.startsWith(route + '/');
  };

  // Mock test data
  const mockTests = [
    {
      id: 'verbal-mock',
      name: 'Verbal Mock Test',
      route: '/verbal-ability/instructions/comprehensive-verbal',
      icon: <BookOpen className="w-3 h-3 text-white" />
    },
    {
      id: 'aptitude-mock',
      name: 'Aptitude Mock Test',
      route: '/quantitative-aptitude/instructions/comprehensive-aptitude',
      icon: <Calculator className="w-3 h-3 text-white" />
    },
    {
      id: 'logical-mock',
      name: 'Logical Mock Test',
      route: '/logical-reasoning/instructions/comprehensive-logical',
      icon: <Brain className="w-3 h-3 text-white" />
    },
    {
      id: 'programming-mock',
      name: 'Programming Mock Test',
      route: '/programming/instructions/comprehensive-programming',
      icon: <Code className="w-3 h-3 text-white" />
    }
  ];

  return (
    <>
      <style>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1e293b;
          border-radius: 10px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
          border-radius: 10px;
          transition: all 0.3s ease;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563eb, #7c3aed);
        }
        
        /* For Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #3b82f6 #1e293b;
        }
        
        /* Hide scrollbar for mobile */
        @media (max-width: 300px) {
          .custom-scrollbar::-webkit-scrollbar {
            width: 0px;
          }
        }

        /* Sidebar Animation */
        .sidebar-transition {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        /* Hover Effects */
        .nav-item {
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .nav-item:hover {
          transform: translateX(4px);
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
        }

        .nav-item.active {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          color: white;
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }

        /* Floating Animation */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-soft {
          animation: bounce 2s infinite;
        }
      `}</style>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Modern Dark Sidebar */}
      <aside
        className={`bg-gradient-to-b from-slate-900 to-slate-800 border border-slate-700 shadow-2xl transition-all duration-300 backdrop-blur-sm ${
          sidebarOpen ? 'fixed lg:relative inset-y-0 left-0 z-50 w-64 lg:w-64' : 'hidden lg:block w-64'
        }`}
      >
        {/* Sidebar Header with Company Logo */}
        <div className="p-4 mx-2 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {/* Company Logo */}
              <div className="w-10 h-10 rounded-lg flex items-center justify-center shadow-lg">
                <img src="/images/mylogo.png" alt="PrepCampus Logo" className="" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-orange-500">PrepCampus</h2>
                <p className="text-xs text-slate-400">Learning Platform</p>
              </div>
            </div>
            {/* Mobile Close Button */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="p-4 border-b border-slate-700">
          <Button 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 font-semibold shadow-lg"
            onClick={() => onStartTest("live-test", "test")}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Start Practice
          </Button>
        </div>

        {/* Navigation Sections */}
        <div className="p-4">
          {/* Main Navigation */}
          <div className="space-y-1">
            <div className="px-2 py-1">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Main Menu
              </h3>
            </div>
            
            {/* Quantitative Aptitude */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/quantitative-aptitude') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/quantitative-aptitude')}
            >
              <Calculator className={`w-4 h-4 mr-3 ${isActiveRoute('/quantitative-aptitude') ? 'text-white' : 'text-blue-400'}`} />
              <span className="font-medium text-sm">Quantitative Aptitude</span>
            </div>

            {/* Logical Reasoning */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/logical-reasoning') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/logical-reasoning')}
            >
              <Brain className={`w-4 h-4 mr-3 ${isActiveRoute('/logical-reasoning') ? 'text-white' : 'text-purple-400'}`} />
              <span className="font-medium text-sm">Logical Reasoning</span>
            </div>

            {/* Verbal Ability */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/verbal-ability') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/verbal-ability')}
            >
              <BookOpen className={`w-4 h-4 mr-3 ${isActiveRoute('/verbal-ability') ? 'text-white' : 'text-green-400'}`} />
              <span className="font-medium text-sm">Verbal Ability</span>
            </div>

            {/* Programming */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/programming') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/programming')}
            >
              <Code className={`w-4 h-4 mr-3 ${isActiveRoute('/programming') ? 'text-white' : 'text-green-400'}`} />
              <span className="font-medium text-sm">Programming</span>
            </div>

            {/* Student Notes */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/student-notes') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/student-notes')}
            >
              <BookText className={`w-4 h-4 mr-3 ${isActiveRoute('/student-notes') ? 'text-white' : 'text-yellow-400'}`} />
              <span className="font-medium text-sm">Student Notes</span>
            </div>

            {/* Exam Syllabus */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/syllabus') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/syllabus')}
            >
              <Calendar className={`w-4 h-4 mr-3 ${isActiveRoute('/syllabus') ? 'text-white' : 'text-red-400'}`} />
              <span className="font-medium text-sm">Exam Syllabus</span>
            </div>

            {/* Mock Test */}
            <div 
              className={`nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white ${
                isActiveRoute('/mock-test') ? 'active' : ''
              }`}
              onClick={() => handleNavigation('/mock-test')}
            >
              <ClipboardList className={`w-4 h-4 mr-3 ${isActiveRoute('/mock-test') ? 'text-white' : 'text-blue-400'}`} />
              <span className="font-medium text-sm">MNCs Mock Test</span>
            </div>
          </div>

          {/* Mock Tests Section */}
          <div className="mt-6 space-y-1">
            <div className="px-3 py-2">
              <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Mock Tests
              </h3>
            </div>
            
            {mockTests.map((test) => (
              <div 
                key={test.id}
                className="nav-item flex items-center px-3 py-2 rounded-lg text-slate-300 hover:text-white"
                onClick={() => handleNavigation(test.route)}
              >
                <div className="w-5 h-5 mr-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  {test.icon}
                </div>
                <div className="flex-1">
                  <span className="text-slate-300 font-medium text-sm">{test.name}</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-xs text-slate-500">60 questions</span>
                    <Badge variant="secondary" className="text-xs bg-red-600 text-white">Live</Badge>
                  </div>
                </div>
              </div>
            ))}
          </div>

        

          {/* Bottom Section */}
          <div className="mt-6 pt-4 border-t border-slate-700">
            <div className="text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <p className="text-xs text-slate-400">Ready to excel?</p>
              <p className="text-xs text-slate-500">Start your journey today</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ExamPrepNav; 