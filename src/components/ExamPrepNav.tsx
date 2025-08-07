import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  Target,
  BarChart3,
  Settings,
  Bookmark,
  Award,
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
  
  // Use external state if provided, otherwise use internal state
  const isCollapsed = setSidebarCollapsed ? sidebarCollapsed : internalSidebarCollapsed;
  const setIsCollapsed = setSidebarCollapsed || setInternalSidebarCollapsed;

  return (
    <>
      <style>{`
        /* Custom Scrollbar Styles */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9;
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
          scrollbar-color: #3b82f6 #f1f5f9;
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
        }

        .nav-item:hover {
          transform: translateX(4px);
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

      {/* Modern Sidebar */}
      <aside
        className={`bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300
            ${isCollapsed ? "w-10" : "w-full"}
            h-fit`}
      >
        {/* Sidebar Header */}
        <div className="p-2 border-b border-gray-100">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div>
                  <h2 className="text-lg font-bold text-gray-900">ExamPrep</h2>
                  <p className="text-xs text-gray-500">Study Dashboard</p>
                </div>
              </div>
            )}
            <div className="flex items-center space-x-2">
              <Button 
                variant="ghost" 
                size="sm"
                className="hidden lg:flex"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        {!isCollapsed && (
          <div className="p-2 border-b border-gray-100">
            <Button 
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2"
              onClick={() => onStartTest("live-test", "test")}
            >
              <Play className="w-4 h-4 mr-2" />
              Start Practice
            </Button>
          </div>
        )}

        {/* Navigation Sections */}
        <div className="p-2">
          {/* Main Navigation */}
          <div className="space-y-1">
            <div className="px-2 py-1">
              <h3 className={`text-xs font-semibold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : ''}`}>
                Main Menu
              </h3>
            </div>
            
            {/* Dashboard */}
            <div className="nav-item flex items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-50">
              <Home className="w-4 h-4 mr-2 text-gray-600" />
              {!isCollapsed && <span className="text-gray-700 font-medium text-sm">Dashboard</span>}
            </div>

            {/* Practice Tests */}
            <div className="nav-item flex items-center px-2 py-1 rounded-lg cursor-pointer bg-purple-100 text-purple-700">
              <Target className="w-4 h-4 mr-2 text-purple-600" />
              {!isCollapsed && <span className="font-medium text-sm">Practice Tests</span>}
            </div>

            {/* Progress */}
            <div className="nav-item flex items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-50">
              <BarChart3 className="w-4 h-4 mr-2 text-gray-600" />
              {!isCollapsed && <span className="text-gray-700 font-medium text-sm">Progress</span>}
            </div>

            {/* Bookmarks */}
            <div className="nav-item flex items-center px-2 py-1 rounded-lg cursor-pointer hover:bg-gray-50">
              <Bookmark className="w-4 h-4 mr-2 text-gray-600" />
              {!isCollapsed && <span className="text-gray-700 font-medium text-sm">Bookmarks</span>}
            </div>
          </div>

          {/* Categories Section */}
          <div className="mt-6 space-y-2">
            <div className="px-3 py-2">
              <h3 className={`text-xs font-semibold text-gray-500 uppercase tracking-wider ${isCollapsed ? 'hidden' : ''}`}>
                Categories
              </h3>
            </div>
            
            {categories.slice(0, 3).map((cat) => (
              <div 
                key={cat.id}
                className="nav-item flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50"
                onClick={() => onStartTest(cat.id, "practice")}
              >
                <div className="w-5 h-5 mr-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded flex items-center justify-center">
                  <BookOpen className="w-3 h-3 text-white" />
                </div>
                {!isCollapsed && (
                  <div className="flex-1">
                    <span className="text-gray-700 font-medium text-sm">{cat.name}</span>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-xs text-gray-500">{cat.totalQuestions} questions</span>
                      <Badge variant="secondary" className="text-xs">Live</Badge>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          {!isCollapsed && (
            <div className="mt-6 p-3 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg">
              <h3 className="text-xs font-semibold text-gray-700 mb-2">Quick Stats</h3>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Completed</span>
                  <span className="text-xs font-semibold text-green-600">12 Tests</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Accuracy</span>
                  <span className="text-xs font-semibold text-blue-600">85%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-600">Streak</span>
                  <span className="text-xs font-semibold text-purple-600">7 Days</span>
                </div>
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="mt-6 space-y-2">
            <div className="nav-item flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
              <Settings className="w-5 h-5 mr-3 text-gray-600" />
              {!isCollapsed && <span className="text-gray-700 font-medium text-sm">Settings</span>}
            </div>
            
            <div className="nav-item flex items-center px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50">
              <Award className="w-5 h-5 mr-3 text-gray-600" />
              {!isCollapsed && <span className="text-gray-700 font-medium text-sm">Achievements</span>}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default ExamPrepNav; 