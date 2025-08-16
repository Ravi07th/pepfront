import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import CompanyLogo from '../common/CompanyLogo';
import { 
  Building2, 
  Code2, 
  Target, 
  Users, 
  Globe, 
  Briefcase,
  ArrowRight,
  Clock,
  TrendingUp,
  CheckCircle,
  Zap,
  BookOpen,
  Star,
  Award,
  Play,
  BarChart3,
  Calendar,
  Users2,
  Trophy,
  Lightbulb
} from 'lucide-react';
import { mncCodingQuestions } from '../../data/mnc_coding_data/index';

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
}

interface CodingHomeProps {
  onCompanyClick: (companyId: string, companyName: string) => void;
}

const companyCards: CompanyCard[] = [
  {
    id: 'top30',
    name: 'Most Asked Coding Questions',
    description: 'Most frequently asked coding questions from top companies with comprehensive solutions',
    questionCount: mncCodingQuestions.amazon.length + mncCodingQuestions.google.length + mncCodingQuestions.accenture.length + mncCodingQuestions.microsoft.length + mncCodingQuestions.tcsnqt.length + mncCodingQuestions.cognizant.length + mncCodingQuestions.wipro.length + mncCodingQuestions.capgemini.length,
    difficulty: 'Medium',
    category: ['Algorithms', 'Data Structures', 'Problem Solving', 'Dynamic Programming', 'String Manipulation'],
    icon: <Globe className="w-6 h-6" />,
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-950/20'
  },
  {
    id: 'tcsnqt',
    name: 'TCS NQT',
    description: 'TCS National Qualifier Test coding questions and solutions',
    questionCount: mncCodingQuestions.tcsnqt.length,
    difficulty: 'Easy',
    category: ['Basic Programming', 'Arrays', 'Strings'],
    icon: <Target className="w-6 h-6" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-950/20'
  },
  {
    id: 'amazon',
    name: 'Amazon',
    description: 'Top Amazon coding questions with detailed solutions in Python, Java, and C',
    questionCount: mncCodingQuestions.amazon.length,
    difficulty: 'Hard',
    category: ['Arrays', 'Strings', 'Dynamic Programming'],
    icon: <Building2 className="w-6 h-6" />,
    color: 'text-orange-600',
    bgColor: 'bg-orange-50 dark:bg-orange-950/20'
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
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    id: 'microsoft',
    name: 'Microsoft',
    description: 'Microsoft practice questions covering algorithms and data structures',
    questionCount: mncCodingQuestions.microsoft.length,
    difficulty: 'Medium',
    category: ['Dynamic Programming', 'Binary Search', 'String Matching'],
    icon: <Code2 className="w-6 h-6" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-950/20'
  },
  {
    id: 'accenture',
    name: 'Accenture',
    description: 'Accenture coding practice questions with step-by-step solutions',
    questionCount: mncCodingQuestions.accenture.length,
    difficulty: 'Medium',
    category: ['Problem Solving', 'Data Structures', 'Algorithms'],
    icon: <Users className="w-6 h-6" />,
    color: 'text-red-600',
    bgColor: 'bg-red-50 dark:bg-red-950/20'
  },
  {
    id: 'cognizant',
    name: 'Cognizant',
    description: 'Cognizant coding practice questions with detailed solutions',
    questionCount: mncCodingQuestions.cognizant.length,
    difficulty: 'Medium',
    category: ['Problem Solving', 'Data Structures', 'Algorithms'],
    icon: <Briefcase className="w-6 h-6" />,
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-950/20'
  },
  {
    id: 'wipro',
    name: 'Wipro',
    description: 'Wipro coding practice questions with comprehensive solutions',
    questionCount: mncCodingQuestions.wipro.length,
    difficulty: 'Easy',
    category: ['String Manipulation', 'Two Pointers', 'Basic Programming'],
    icon: <Code2 className="w-6 h-6" />,
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-50 dark:bg-cyan-950/20'
  },
  {
    id: 'capgemini',
    name: 'Capgemini',
    description: 'Capgemini coding practice questions with detailed solutions',
    questionCount: mncCodingQuestions.capgemini.length,
    difficulty: 'Easy',
    category: ['Linked List', 'Data Structures', 'Basic Programming'],
    icon: <Target className="w-6 h-6" />,
    color: 'text-pink-600',
    bgColor: 'bg-pink-50 dark:bg-pink-950/20'
  },

];

const CodingHome: React.FC<CodingHomeProps> = ({ onCompanyClick }) => {
  const handleCardClick = (companyId: string, companyName: string) => {
    onCompanyClick(companyId, companyName);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Modern Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white py-10 lg:py-10 overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '3s'}}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                  Master Coding
                </span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                  Challenges
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Unlock premium coding questions from top tech companies. 
                <span className="text-white font-semibold"> Practice with real interview questions</span> from Google, Amazon, Microsoft, and more.
              </p>
            </div>

            {/* Stats Section */}
            <div className="flex items-center  justify-center space-x-6">
              <Badge  className="bg-gray-800  text-yellow-500 px-4 py-2 0 border border-gray-600">
                <TrendingUp className="w-4  h-4 mr-2" />
                Detailed Solutions
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-yellow-300 px-4 py-2 bg-gray-800/50">
                <Star className="w-4 h-4 mr-2" />
                Premium Content
              </Badge>
            </div>

            

            {/* Enhanced Company Logos Section */}
            <div className="pt-5">
              <div className="text-center mb-10">
                <h3 className="text-4xl font-bold text-white mb-3">Top Companies We Cover</h3>
                <p className="text-gray-400 text-lg">Practice with real interview questions from leading tech companies</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
                {/* Google */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30 transition-shadow">
                        <CompanyLogo companyName="Google" size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-white font-semibold text-sm">Google</span>
                      {/* <span className="text-gray-400 text-xs">50+ Questions</span> */}
                    </div>
                  </div>
                </div>

                {/* Amazon */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-orange-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-orange-500/30 transition-shadow">
                        <CompanyLogo companyName="Amazon" size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-white font-semibold text-sm">Amazon</span>
                      {/* <span className="text-gray-400 text-xs">45+ Questions</span> */}
                    </div>
                  </div>
                </div>

                {/* Microsoft */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/30 transition-shadow">
                        <CompanyLogo companyName="Microsoft" size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-white font-semibold text-sm">Microsoft</span>
                      {/* <span className="text-gray-400 text-xs">40+ Questions</span> */}
                    </div>
                  </div>
                </div>

                {/* TCS */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-400/30 transition-shadow">
                        <CompanyLogo companyName="TCS" size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-white font-semibold text-sm">TCS</span>
                      {/* <span className="text-gray-400 text-xs">35+ Questions</span> */}
                    </div>
                  </div>
                </div>

                {/* Accenture */}
                <div className="group relative">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-shadow">
                        <CompanyLogo companyName="Accenture" size={32} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="text-white font-semibold text-sm">Accenture</span>
                      {/* <span className="text-gray-400 text-xs">30+ Questions</span> */}
                    </div>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>
      

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Enhanced Company Cards Grid */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Choose Your Practice Path
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {companyCards.map((company) => (
              <Card 
                key={company.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105 border-2 border-gray-700 hover:border-gray-500 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden shadow-xl"
                onClick={() => handleCardClick(company.id, company.name)}
              >
                {/* Enhanced Header with Gradient Background */}
                <CardHeader className={`rounded-t-lg relative p-6 ${
                  company.difficulty === 'Hard' 
                    ? 'bg-gradient-to-r from-red-900 to-red-800' 
                    : company.difficulty === 'Medium' 
                    ? 'bg-gradient-to-r from-yellow-900 to-orange-800' 
                    : 'bg-gradient-to-r from-green-900 to-emerald-800'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-300" />
                      <span className="text-xs text-gray-200">Premium</span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {company.name}
                  </CardTitle>
                  <div className="flex items-center mt-2">
                    <Users2 className="w-4 h-4 text-gray-300 mr-2" />
                    <span className="text-sm text-gray-300">
                      {company.questionCount} Questions Available
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {company.description}
                  </p>
                  
                  {/* Enhanced Features List */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                      What's Included
                    </h4>
                    <ul className="space-y-2 text-xs text-gray-300">
                      <li className="flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        Multiple solution approaches
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        Time complexity analysis
                      </li>
                      <li className="flex items-center">
                        <div className="w-1 h-1 bg-green-400 rounded-full mr-2"></div>
                        Step-by-step explanations
                      </li>
                    </ul>
                  </div>

                  {/* Enhanced Action Button */}
                  <Button 
                    className="w-full group-hover:bg-white group-hover:text-black transition-all duration-300 font-semibold bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 border border-gray-600"
                    variant="default"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Start Practice Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-8 text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ace Your Upcoming PlacementExams?
          </h2>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Join thousands of developers who have successfully prepared for their placement exams using our mock test series and question bank.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/mock-test">
            <Button className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-3">
              <Code2 className="w-5 h-5 mr-2" />
              Start Mock Test 
            </Button>
            </a>
           
          </div>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
              What You'll Get
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                Company-specific question sets
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                Multiple solution approaches
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                Time & space complexity analysis
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                Step-by-step explanations
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 rounded-lg p-6 border border-gray-800">
            <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              Success Stories
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p>"This platform helped me prepare for my Amazon practice. The questions were spot-on!"</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p>"The detailed solutions and explanations made complex algorithms easy to understand."</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <p>"Perfect for TCS NQT preparation. Questions match the actual exam pattern."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            Click on any company card to access their specific coding questions and solutions
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default CodingHome;
