import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, BarChart3, TrendingUp, Award } from 'lucide-react';

interface ResultsLoadingPageProps {
  company: any;
  examType: any;
}

const ResultsLoadingPage: React.FC<ResultsLoadingPageProps> = ({ company, examType }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { name: 'Calculating Score', icon: BarChart3, color: 'text-blue-600' },
    { name: 'Analyzing Performance', icon: TrendingUp, color: 'text-green-600' },
    { name: 'Generating Insights', icon: Award, color: 'text-purple-600' },
    { name: 'Preparing Results', icon: CheckCircle, color: 'text-indigo-600' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const stepInterval = setInterval(() => {
      setCurrentStep(prev => {
        if (prev >= steps.length - 1) {
          clearInterval(stepInterval);
          return steps.length - 1;
        }
        return prev + 1;
      });
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(stepInterval);
    };
  }, [steps.length]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <img
              src={company?.logo}
              alt={company?.name}
              className="h-16 w-16 object-contain rounded-full bg-white shadow-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            <div className="text-left">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{examType?.name}</h1>
              <p className="text-gray-600">Exam Results</p>
            </div>
          </div>
        </div>

        {/* Main Loading Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Progress Bar */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Processing Your Results</h2>
              <div className="text-2xl font-bold">{progress}%</div>
            </div>
            <div className="w-full bg-white bg-opacity-20 rounded-full h-3">
              <div 
                className="bg-white h-3 rounded-full transition-all duration-300 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Loading Steps */}
          <div className="p-6">
            <div className="space-y-4">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isActive = index === currentStep;
                const isCompleted = index < currentStep;
                
                return (
                  <div 
                    key={index}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-300 ${
                      isActive 
                        ? 'bg-blue-50 border-2 border-blue-200' 
                        : isCompleted 
                        ? 'bg-green-50 border-2 border-green-200'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}
                  >
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                      isActive 
                        ? 'bg-blue-100 animate-pulse' 
                        : isCompleted 
                        ? 'bg-green-100' 
                        : 'bg-gray-100'
                    }`}>
                      <Icon className={`h-5 w-5 ${
                        isActive 
                          ? 'text-blue-600' 
                          : isCompleted 
                          ? 'text-green-600' 
                          : 'text-gray-400'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`font-semibold ${
                        isActive 
                          ? 'text-blue-900' 
                          : isCompleted 
                          ? 'text-green-900' 
                          : 'text-gray-500'
                      }`}>
                        {step.name}
                      </h3>
                      <p className={`text-sm ${
                        isActive 
                          ? 'text-blue-700' 
                          : isCompleted 
                          ? 'text-green-700' 
                          : 'text-gray-400'
                      }`}>
                        {isActive ? 'In progress...' : isCompleted ? 'Completed' : 'Pending'}
                      </p>
                    </div>
                    {isCompleted && (
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Loading Animation */}
          <div className="p-6 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
              <span className="text-sm text-gray-600 font-medium">Please wait while we analyze your performance...</span>
            </div>
          </div>
        </div>

        {/* Fun Facts */}
        <div className="mt-8 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Did you know?</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Clock className="h-4 w-4 text-blue-600" />
                <span>Most students spend 2-3 minutes per question on average</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span>Regular practice improves accuracy by up to 40%</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <Award className="h-4 w-4 text-purple-600" />
                <span>Top performers typically review marked questions twice</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsLoadingPage;
