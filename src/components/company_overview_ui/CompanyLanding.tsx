import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, BookOpen, Trophy, Target, Zap } from 'lucide-react';
import { companies } from '@/data/companyOverview';

export default function CompanyLanding() {
  const navigate = useNavigate();

  const handleCompanySelect = (companyId: string) => {
    // Navigate to exam pattern page based on company
    const company = companies.find(c => c.id === companyId);
    if (company && company.link) {
      // Use the company link directly or convert to proper exam pattern URL
      let examPatternUrl;
      if (companyId === 'tcs') {
        examPatternUrl = '/exam-patterns/tcs-nqt';
      } else if (companyId === 'accenture') {
        examPatternUrl = '/exam-patterns/accenture';
      } else if (companyId === 'cognizant') {
        examPatternUrl = '/exam-patterns/cognizant';
      } else if (companyId === 'capgemini') {
        examPatternUrl = '/exam-patterns/capgemini';
      } else {
        examPatternUrl = `/exam-patterns/${companyId}`;
      }
      navigate(examPatternUrl);
    } else {
      // Fallback to coding section
      navigate(`/coding/${companyId}`);
    }
  };

  const handleMockTest = (companyId: string) => {
    // Navigate to mock test page
    navigate(`/mock-test/${companyId}`);
  };

  const handleSyllabus = (companyId: string) => {
    // Navigate to syllabus page
    navigate(`/syllabus/${companyId}`);
  };

  return (
    <div className="w-full mt-1 bg-transparent">
      {/* Hero Section */}
      <section className="py-8 mx-auto bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 bg-card/50 backdrop-blur-sm">
        <div className="container px-2">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Choose Your Target Company</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Select from top IT companies and access curated exam materials, practice tests,
              and detailed syllabus to boost your preparation.
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {companies.map((company, index) => (
              <Card
                key={company.id}
                className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 border-gray-700 bg-gray-900/80 backdrop-blur-sm overflow-hidden relative"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                
                <CardContent className="p-6 text-center relative z-10">
                  {/* Company Icon */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 p-0.5 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-2xl bg-gray-900 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-xl text-white font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {company.name}
                  </h3>

                  {/* Company Type Badge */}
                  <Badge variant="secondary" className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
                    {company.type}
                  </Badge>

                  {/* Interactive Stats */}
                  <div className="space-y-3 mb-6">
                    <div 
                      className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-blue-400 transition-colors cursor-pointer group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSyllabus(company.id);
                      }}
                    >
                      <BookOpen className="w-4 h-4 text-green-500 group-hover/item:scale-110 transition-transform" />
                      <span>Exam Syllabus</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                    
                    <div 
                      className="flex items-center justify-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors cursor-pointer group/item"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMockTest(company.id);
                      }}
                    >
                      <Trophy className="w-4 h-4 text-yellow-500 group-hover/item:scale-110 transition-transform" />
                      <span>Mock Test</span>
                      <ArrowRight className="w-3 h-3 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                      <Target className="w-4 h-4 text-purple-500" />
                      <span>Exam Pattern</span>
                    </div>
                  </div>

                  {/* Enhanced CTA Button */}
                  <div 
                    className="flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-xl gap-2 font-medium group-hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-1"
                    onClick={() => handleCompanySelect(company.id)}
                  >
                    <span>Start Preparation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>

                {/* Bottom Accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              </Card>
            ))}
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span>Click on individual features to explore specific sections</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}