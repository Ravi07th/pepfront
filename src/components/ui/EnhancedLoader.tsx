import React from 'react';
import { Loader2, CheckCircle, FileText, BookOpen, Target, Trophy, Brain, Users, Code } from 'lucide-react';

interface EnhancedLoaderProps {
  type?: 'default' | 'exam' | 'practice' | 'results' | 'study' | 'community' | 'coding' | 'pdf' | 'success';
  message?: string;
  showProgress?: boolean;
  progress?: number;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

const EnhancedLoader: React.FC<EnhancedLoaderProps> = ({ 
  type = 'default', 
  message, 
  showProgress = false, 
  progress = 0,
  size = 'md',
  variant = 'light'
}) => {
  const getLoaderContent = () => {
    switch (type) {
      case 'exam':
        return {
          icon: <BookOpen className="h-6 w-6 text-blue-600" />,
          title: 'Loading Exam',
          defaultMessage: 'Preparing your exam environment...',
          colors: 'from-blue-50 to-indigo-50',
          spinnerColors: 'from-blue-500 to-indigo-600',
          dotColors: ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500']
        };
      case 'practice':
        return {
          icon: <Target className="h-6 w-6 text-green-600" />,
          title: 'Loading Practice',
          defaultMessage: 'Setting up practice questions...',
          colors: 'from-green-50 to-emerald-50',
          spinnerColors: 'from-green-500 to-emerald-600',
          dotColors: ['bg-green-500', 'bg-emerald-500', 'bg-teal-500']
        };
      case 'results':
        return {
          icon: <Trophy className="h-6 w-6 text-yellow-600" />,
          title: 'Processing Results',
          defaultMessage: 'Analyzing your performance...',
          colors: 'from-yellow-50 to-orange-50',
          spinnerColors: 'from-yellow-500 to-orange-600',
          dotColors: ['bg-yellow-500', 'bg-orange-500', 'bg-red-500']
        };
      case 'study':
        return {
          icon: <Brain className="h-6 w-6 text-purple-600" />,
          title: 'Loading Study Materials',
          defaultMessage: 'Preparing study content...',
          colors: 'from-purple-50 to-violet-50',
          spinnerColors: 'from-purple-500 to-violet-600',
          dotColors: ['bg-purple-500', 'bg-violet-500', 'bg-pink-500']
        };
      case 'community':
        return {
          icon: <Users className="h-6 w-6 text-pink-600" />,
          title: 'Loading Community',
          defaultMessage: 'Connecting to community...',
          colors: 'from-pink-50 to-rose-50',
          spinnerColors: 'from-pink-500 to-rose-600',
          dotColors: ['bg-pink-500', 'bg-rose-500', 'bg-red-500']
        };
      case 'coding':
        return {
          icon: <Code className="h-6 w-6 text-indigo-600" />,
          title: 'Loading Coding Platform',
          defaultMessage: 'Initializing coding environment...',
          colors: 'from-indigo-50 to-blue-50',
          spinnerColors: 'from-indigo-500 to-blue-600',
          dotColors: ['bg-indigo-500', 'bg-blue-500', 'bg-purple-500']
        };
      case 'pdf':
        return {
          icon: <FileText className="h-6 w-6 text-blue-600" />,
          title: 'Loading PDF',
          defaultMessage: 'Preparing your document...',
          colors: 'from-blue-50 to-indigo-50',
          spinnerColors: 'from-blue-500 to-indigo-600',
          dotColors: ['bg-blue-500', 'bg-indigo-500', 'bg-purple-500']
        };
      case 'success':
        return {
          icon: <CheckCircle className="h-6 w-6 text-green-600" />,
          title: 'Success',
          defaultMessage: 'Operation completed successfully...',
          colors: 'from-green-50 to-emerald-50',
          spinnerColors: 'from-green-500 to-emerald-600',
          dotColors: ['bg-green-500', 'bg-emerald-500', 'bg-teal-500']
        };
      default:
        return {
          icon: <Loader2 className="h-6 w-6 text-gray-600" />,
          title: 'Loading',
          defaultMessage: 'Please wait...',
          colors: 'from-gray-50 to-slate-50',
          spinnerColors: 'from-gray-500 to-slate-600',
          dotColors: ['bg-gray-500', 'bg-slate-500', 'bg-zinc-500']
        };
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return {
          container: 'p-4',
          icon: 'w-12 h-12',
          spinner: 'w-8 h-8',
          title: 'text-lg',
          message: 'text-sm'
        };
      case 'lg':
        return {
          container: 'p-12',
          icon: 'w-24 h-24',
          spinner: 'w-16 h-16',
          title: 'text-3xl',
          message: 'text-lg'
        };
      default:
        return {
          container: 'p-8',
          icon: 'w-20 h-20',
          spinner: 'w-12 h-12',
          title: 'text-2xl',
          message: 'text-base'
        };
    }
  };

  const content = getLoaderContent();
  const sizeClasses = getSizeClasses();
  const isDark = variant === 'dark';

  return (
    <div className={`min-h-screen bg-gradient-to-br ${content.colors} flex items-center justify-center ${sizeClasses.container}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-1/4 left-1/4 w-72 h-72 ${content.dotColors[0].replace('bg-', 'bg-')} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob`}></div>
        <div className={`absolute top-1/3 right-1/4 w-72 h-72 ${content.dotColors[1].replace('bg-', 'bg-')} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000`}></div>
        <div className={`absolute bottom-1/4 left-1/3 w-72 h-72 ${content.dotColors[2].replace('bg-', 'bg-')} rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000`}></div>
      </div>

      <div className={`relative z-10 ${isDark ? 'bg-black/20 backdrop-blur-lg' : 'bg-white/90 backdrop-blur-lg'} rounded-3xl shadow-2xl ${sizeClasses.container} max-w-md w-full border ${isDark ? 'border-white/20' : 'border-white/20'}`}>
        <div className="text-center">
          {/* Enhanced Icon */}
          <div className="relative mb-8">
            <div className={`${sizeClasses.icon} mx-auto relative`}>
              {/* Outer Ring */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gray-500 animate-spin"></div>
              
              {/* Middle Ring */}
              <div className="absolute inset-2 rounded-full border-4 border-gray-200/30"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-gray-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
              
              {/* Inner Circle */}
              <div className={`absolute inset-4 rounded-full bg-gradient-to-br ${content.spinnerColors} flex items-center justify-center`}>
                {type === 'success' ? (
                  <CheckCircle className="h-6 w-6 text-white" />
                ) : (
                  <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
                )}
              </div>
            </div>
          </div>

          {/* Content */}
          <h3 className={`${sizeClasses.title} font-bold ${isDark ? 'text-white' : 'text-gray-900'} mb-4`}>{content.title}</h3>
          <p className={`${sizeClasses.message} ${isDark ? 'text-white/80' : 'text-gray-600'} mb-6`}>
            {message || content.defaultMessage}
          </p>

          {/* Enhanced Progress Indicator */}
          {showProgress && (
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className={`w-2 h-2 ${content.dotColors[0]} rounded-full animate-pulse`}></div>
                <div className={`w-2 h-2 ${content.dotColors[1]} rounded-full animate-pulse`} style={{ animationDelay: '0.2s' }}></div>
                <div className={`w-2 h-2 ${content.dotColors[2]} rounded-full animate-pulse`} style={{ animationDelay: '0.4s' }}></div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${content.spinnerColors} rounded-full transition-all duration-300 ease-out`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* Enhanced Spinner */}
          <div className="relative">
            <div className={`${sizeClasses.spinner} mx-auto relative`}>
              <div className="absolute inset-0 rounded-full border-4 border-gray-200/30"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-gray-600 animate-spin"></div>
              <div className="absolute inset-2 rounded-full border-4 border-gray-200/30"></div>
              <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-gray-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedLoader;
