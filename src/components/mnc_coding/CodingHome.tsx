import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Building2, 
  Code2, 
  Target, 
  Users, 
  Globe, 
  Briefcase,
  ArrowRight,
  Clock,
  TrendingUp
} from 'lucide-react';
import { mncCodingQuestions } from '../../data/MNC_coding/index';

interface CompanyCard {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string[];
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  lastUpdated: string;
  completionRate?: number;
}

interface CodingHomeProps {
  onCompanyClick: (companyId: string, companyName: string) => void;
}

const companyCards: CompanyCard[] = [
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'Top Amazon coding questions with detailed solutions in Python, Java, and C',
    questionCount: mncCodingQuestions.amazon.length,
    difficulty: 'Hard',
    category: ['Arrays', 'Strings', 'Dynamic Programming'],
    icon: <Building2 className="w-6 h-6" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20',
    lastUpdated: '2 days ago',
    completionRate: 85
  },
  {
    id: 'google',
    name: 'Google',
    description: 'Top Google coding questions with comprehensive solutions in C',
    questionCount: mncCodingQuestions.google.length,
    difficulty: 'Medium',
    category: ['Arrays', 'Greedy', 'Problem Solving'],
    icon: <Globe className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    lastUpdated: '1 day ago',
    completionRate: 90
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'Microsoft interview questions covering algorithms and data structures',
    questionCount: mncCodingQuestions.microsoft.length,
    difficulty: 'Medium',
    category: ['Dynamic Programming', 'Binary Search', 'String Matching'],
    icon: <Code2 className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20',
    lastUpdated: '1 week ago',
    completionRate: 78
  },
  {
    id: 'top30',
    name: 'Top 30 Coding',
    description: 'Top 30 general coding questions with comprehensive solutions',
    questionCount: 0, // Will be updated when we add Top 30 questions
    difficulty: 'Medium',
    category: ['Algorithms', 'Data Structures', 'Problem Solving'],
    icon: <Globe className="w-6 h-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20',
    lastUpdated: '3 days ago',
    completionRate: 92
  },
  {
    id: 'tcsNqt',
    name: 'TCS NQT',
    description: 'TCS National Qualifier Test coding questions and solutions',
    questionCount: 0, // Will be updated when we add TCS questions
    difficulty: 'Easy',
    category: ['Basic Programming', 'Arrays', 'Strings'],
    icon: <Target className="w-6 h-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20',
    lastUpdated: '5 days ago',
    completionRate: 95
  },
  {
    id: 'accenture',
    name: 'Accenture',
    description: 'Accenture coding interview questions with step-by-step solutions',
    questionCount: mncCodingQuestions.accenture.length,
    difficulty: 'Medium',
    category: ['Problem Solving', 'Data Structures', 'Algorithms'],
    icon: <Users className="w-6 h-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950/20',
    lastUpdated: '1 day ago',
    completionRate: 88
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    description: 'Cognizant coding interview questions with detailed solutions',
    questionCount: 0, // Will be updated when we add Cognizant questions
    difficulty: 'Medium',
    category: ['Problem Solving', 'Data Structures', 'Algorithms'],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
    lastUpdated: '4 days ago',
    completionRate: 82
  },

];

const CodingHome: React.FC<CodingHomeProps> = ({ onCompanyClick }) => {
  const handleCardClick = (companyId: string, companyName: string) => {
    onCompanyClick(companyId, companyName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">
                Coding Practice Hub
              </h1>
              <p className="text-gray-300 mt-2">
                Master coding interviews with company-specific questions and detailed solutions
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="bg-green-900 text-green-200">
                <TrendingUp className="w-4 h-4 mr-1" />
                Live
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center">
              <div className="p-2 bg-blue-900 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Total Questions</p>
                <p className="text-2xl font-bold text-white">{mncCodingQuestions.amazon.length + mncCodingQuestions.google.length + mncCodingQuestions.accenture.length + mncCodingQuestions.microsoft.length}</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center">
              <div className="p-2 bg-green-900 rounded-lg">
                <Target className="w-6 h-6 text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Companies</p>
                <p className="text-2xl font-bold text-white">7</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center">
              <div className="p-2 bg-purple-900 rounded-lg">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Avg. Time</p>
                <p className="text-2xl font-bold text-white">15m</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <div className="flex items-center">
              <div className="p-2 bg-orange-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-400">Success Rate</p>
                <p className="text-2xl font-bold text-white">87%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companyCards.map((company) => (
            <Card 
              key={company.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-gray-800 hover:border-gray-600 bg-gray-900"
              onClick={() => handleCardClick(company.id, company.name)}
            >
              <CardHeader className={`${company.bgColor.replace('dark:', '')} rounded-t-lg`}>
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-lg bg-gray-800 ${company.color}`}>
                    {company.icon}
                  </div>
                  <Badge 
                    variant={company.difficulty === 'Hard' ? 'destructive' : company.difficulty === 'Medium' ? 'secondary' : 'default'}
                    className="text-xs"
                  >
                    {company.difficulty}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-white mt-4">
                  {company.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-300 text-sm mb-4">
                  {company.description}
                </p>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Questions:</span>
                    <span className="font-semibold text-white">{company.questionCount}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Completion:</span>
                    <span className="font-semibold text-green-400">
                      {company.completionRate}%
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Updated:</span>
                    <span className="text-gray-300">{company.lastUpdated}</span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {company.category.slice(0, 2).map((cat, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-700 text-gray-300">
                      {cat}
                    </Badge>
                  ))}
                  {company.category.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                      +{company.category.length - 2} more
                    </Badge>
                  )}
                </div>

                <Button 
                  className="w-full mt-6 group-hover:bg-white group-hover:text-black transition-colors"
                  variant="outline"
                >
                  Start Practice
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm">
            Click on any company card to access their specific coding questions and solutions
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodingHome;
