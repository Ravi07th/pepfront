import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code2, 
  Building2, 
  Target, 
  Users, 
  Globe, 
  Briefcase,
  ArrowRight,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CodingDemo: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                New Coding Platform Demo
              </h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">
                Experience the new company-based coding practice platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Play className="w-4 h-4 mr-1" />
                Live Demo
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Flow */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Navigation Flow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-lg">Step 1: Coding Home</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Browse company cards with question counts and difficulty levels
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-lg">Step 2: Company Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  View filtered list of questions with search, difficulty, and category filters
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                  <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-lg">Step 3: Detailed Solution</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Access comprehensive solutions with multiple approaches and language implementations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                  <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="ml-3 font-semibold text-slate-900 dark:text-white">Company Cards</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                6 major companies with visual cards showing progress and difficulty
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Target className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="ml-3 font-semibold text-slate-900 dark:text-white">Smart Filtering</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Search, filter by difficulty, and categorize questions for easy navigation
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <Code2 className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="ml-3 font-semibold text-slate-900 dark:text-white">Multi-Language</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Solutions in Python, Java, and C++ with time and space complexity analysis
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-lg p-6 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                  <Users className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="ml-3 font-semibold text-slate-900 dark:text-white">Progress Tracking</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Track your progress and learning journey
              </p>
            </div>
          </div>
        </div>

        {/* Companies Preview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
            Available Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Amazon', icon: <Building2 className="w-6 h-6" />, color: 'text-orange-600', bgColor: 'bg-orange-50 dark:bg-orange-950/20', questions: 50, difficulty: 'Hard' },
              { name: 'Microsoft', icon: <Code2 className="w-6 h-6" />, color: 'text-blue-600', bgColor: 'bg-blue-50 dark:bg-blue-950/20', questions: 45, difficulty: 'Medium' },
              { name: 'Google', icon: <Globe className="w-6 h-6" />, color: 'text-green-600', bgColor: 'bg-green-50 dark:bg-green-950/20', questions: 60, difficulty: 'Hard' },
              { name: 'TCS NQT', icon: <Target className="w-6 h-6" />, color: 'text-purple-600', bgColor: 'bg-purple-50 dark:bg-purple-950/20', questions: 40, difficulty: 'Easy' },
              { name: 'Accenture', icon: <Users className="w-6 h-6" />, color: 'text-red-600', bgColor: 'bg-red-50 dark:bg-red-950/20', questions: 35, difficulty: 'Medium' },
              { name: 'Cognizant', icon: <Briefcase className="w-6 h-6" />, color: 'text-indigo-600', bgColor: 'bg-indigo-50 dark:bg-indigo-950/20', questions: 42, difficulty: 'Medium' }
            ].map((company, index) => (
              <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader className={`${company.bgColor} rounded-t-lg`}>
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg bg-white dark:bg-slate-800 ${company.color}`}>
                      {company.icon}
                    </div>
                    <Badge 
                      variant={company.difficulty === 'Hard' ? 'destructive' : company.difficulty === 'Medium' ? 'secondary' : 'default'}
                      className="text-xs"
                    >
                      {company.difficulty}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 dark:text-white mt-4">
                    {company.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <span className="text-slate-500 dark:text-slate-400">Questions:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">{company.questions}</span>
                  </div>
                  <Button 
                    className="w-full group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-slate-900 transition-colors"
                    variant="outline"
                  >
                    View Questions
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-blue-200 dark:border-blue-800">
            <CardContent className="pt-8 pb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Ready to Start Coding Practice?
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-2xl mx-auto">
                Experience the new company-based coding platform with detailed solutions, 
                multiple approaches, and comprehensive learning resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  <Play className="w-5 h-5 mr-2" />
                  Start Practice Now
                </Button>
                <Button size="lg" variant="outline">
                  <Code2 className="w-5 h-5 mr-2" />
                  View Documentation
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CodingDemo;
