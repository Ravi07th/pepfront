import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { companies } from '../data/mockData';
import { ArrowRight, Code, Target, Users, Zap } from 'lucide-react';
import { practice } from '../data/questionData';

// Type definitions
interface Company {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  totalQuestions: number;
}

interface Practice {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
  totalQuestions: number;
}

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

interface StatItemProps {
  value: string;
  label: string;
  color: string;
}

const Study: React.FC = () => {
  const navigate = useNavigate();

  const handleCompanyClick = (companyId: string): void => {
    navigate(`/company/${companyId}`);
  };

  const handleStartPracticing = (e: React.MouseEvent<HTMLButtonElement>, companyId: string): void => {
    e.stopPropagation();
    navigate(`/company/${companyId}`);
  };

  const StatItem: React.FC<StatItemProps> = ({ value, label, color }) => (
    <div className="space-y-2">
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );

  const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, iconColor }) => (
    <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 group">
      <CardContent className="p-6 text-center">
        <div className={`w-12 h-12 ${iconColor} mx-auto mb-4 group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h3 className="font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );

  const features: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
    iconColor: string;
  }> = [
    {
      icon: <Code className="w-full h-full" />,
      title: "5 Languages",
      description: "Python, Java, JavaScript, C, C++",
      iconColor: "text-blue-400"
    },
    {
      icon: <Target className="w-full h-full" />,
      title: "3 Approaches",
      description: "Worst, Better, Best solutions",
      iconColor: "text-purple-400"
    },
    {
      icon: <Users className="w-full h-full" />,
      title: "Top Companies",
      description: "Amazon, Google, TCS, questions",
      iconColor: "text-cyan-400"
    },
    {
      icon: <Zap className="w-full h-full" />,
      title: "Detailed Analysis",
      description: "Time & space complexity explained",
      iconColor: "text-yellow-400"
    }
  ];

  const stats: StatItemProps[] = [
    { value: "10k+", label: "Questions", color: "text-blue-400" },
    { value: "5", label: "Languages", color: "text-purple-400" },
    { value: "TOP", label: "Companies", color: "text-cyan-400" }
  ];

  const supportedLanguages: string[] = ["Python", "Java", "JavaScript", "C", "C++"];

  return (
    <div className="min-h-screen  bg-indigo-950 pb-6">
       <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 text-white  px-6 md:py-20 md:px-12 overflow-hidden">
      {/* Dynamic Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-blue-300 opacity-20 animate-float"
            style={{
              width: `${Math.random() * 20 + 5}px`,
              height: `${Math.random() * 20 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2  gap-12 items-center relative z-10">
        {/* Text Content with Parallax */}
        <div className="space-y-8 transform lg:translate-y-[-20px] transition-transform duration-500">
          <h1 className="text-10xl lg:text-6xl font-extrabold leading-none tracking-tight animate-fade-in-up">
            Dominate MNC Coding Challenges
          </h1>
          <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-90 animate-fade-in-up delay-200">
            Unlock premium questions from top MNCs like Google, Amazon, and Microsoft. Build mastery with AI-powered hints, live code execution, and community discussions.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
            <a
              href="/questions"
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-indigo-900 px-8 py-4 rounded-xl font-bold shadow-2xl hover:shadow-cyan-400/50 hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
              aria-label="Explore coding questions"
            >
              Explore Questions
            </a>
            <a
              href="/practice"
              className="border-2 border-cyan-400 text-cyan-200 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400/20 hover:text-cyan-100 transition-all duration-300 transform hover:scale-105"
              aria-label="Start practicing coding challenges"
            >
              Launch Practice Mode
            </a>
          </div>
          <div className="flex items-center space-x-4 pt-4">
            <Badge className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full">500+ Questions</Badge>
            <Badge className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full">FAANG Approved</Badge>
            <Badge className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full">Real-Time Practice</Badge>
          </div>
        </div>

        {/* Advanced Image Section with Overlays */}
        <div className="relative group">
          <div className="relative w-full h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl transform perspective-1000 rotate-y-6 group-hover:rotate-y-0 transition-transform duration-700">
            <img
              src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
              alt="Advanced coding workspace with laptop displaying algorithms and data structures"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Overlay Elements */}
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/70 to-transparent" />
            <div className="absolute bottom-8 left-8 space-y-4">
              <h3 className="text-2xl font-bold">Question included</h3>
              <div className="flex space-x-4">
                <img src="https://logo.clearbit.com/google.com" alt="Google logo" className="w-12 h-12 rounded-full bg-white p-2" />
                <img src="https://logo.clearbit.com/amazon.com" alt="Amazon logo" className="w-12 h-12 rounded-full bg-white p-2" />
                <img src="https://logo.clearbit.com/microsoft.com" alt="Microsoft logo" className="w-12 h-12 rounded-full bg-white p-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
      
       
      {/* Features Section */}
      <div className="py-16  bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">START YOUR COADING NOW!</h2>
            <p className="text-gray-300 text-lg">Everything you need to ace your DSA interview in one place.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {features.map((feature, index: number) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                iconColor={feature.iconColor}
              />
            ))}
          </div>

          {/* Company Selection */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Choose Your Target Company</h2>
            <p className="text-gray-300">Practice with questions specifically asked by these companies</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {companies.map((company: Company, index: number) => (
              <Card 
                key={company.id} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 group cursor-pointer transform hover:scale-105"
                onClick={() => handleCompanyClick(company.id)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${company.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl group-hover:rotate-12 transition-transform duration-300`}>
                    <img src={company.logo} className='rounded-2xl' />
                  </div>
                  <CardTitle className="text-2xl text-white">{company.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {company.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge variant="secondary" className="text-sm px-4 py-1">
                    {company.totalQuestions} Questions
                  </Badge>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group-hover:shadow-lg transition-all"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleStartPracticing(e, company.id)}
                  >
                    Start Practicing
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* interview */}
      <div className="border-t bg-gradient-to-br  from-indigo-950 via-purple-950 to-indigo-900 border-slate-700 py-12 px-6"> 
        <div className="container mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-5xl font-bold text-white">Ready to ace your interview?</h3>
            <p className="text-gray-300 text-2xl  max-w-2xl mx-auto">
              Join thousands of developers who have prepare for interviews with our comprehensive platform.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-9xl mx-auto">
            {practice.map((practice: Practice, index: number) => (
              <Card 
                key={practice.id} 
                className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-500 group cursor-pointer transform hover:scale-105"
                onClick={() => handleCompanyClick(practice.id)}
                style={{
                  animationDelay: `${index * 150}ms`
                }}
              >
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${practice.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-4xl group-hover:rotate-12 transition-transform duration-300`}>
                    {practice.logo}
                  </div>
                  <CardTitle className="text-2xl text-white">{practice.name}</CardTitle>
                  <CardDescription className="text-gray-300">
                    {practice.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <Badge variant="secondary" className="text-sm px-4 py-1">
                    {practice.totalQuestions} Questions
                  </Badge>
                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 group-hover:shadow-lg transition-all"
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleStartPracticing(e, practice.id)}
                  >
                    Start Practicing
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          


          </div>
        </div>
      </div>
      
      <div className="bg-gradient-to-br from-teal-800 to-indigo-900 text-white rounded-2xl shadow-xl mx-4 md:mx-auto max-w-7xl mt-6 relative">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDB2MjBNMCAxMGgyME0xMCAyMHYtMjBNMjAgMTBoLTIwIiBzdHJva2U9IiM5N2Y1ZmYiIGZpbGw9Im5vbmUiLz48L3N2Zz4=')]" />

      <div className="relative z-10 text-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight py-10 animate-fade-in">
          Level Up Your Coding Skills Today
        </h2>
        <p className="text-md md:text-xl text-gray-200 opacity-90 max-w-3xl mx-auto animate-fade-in delay-200">
          Transform from beginner to interview-ready with our comprehensive platform. Practice 1000+ questions, track your progress, and join a community of successful coders.
        </p>

        {/* Progress Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6 animate-fade-in delay-400">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-300">95%</div>
            <p className="text-sm opacity-80">Satisfaction Rate</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-300">10K+</div>
            <p className="text-sm opacity-80">Active Users</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-teal-300">500+</div>
            <p className="text-sm opacity-80">MNC Questions</p>
          </div>
        </div>

        {/* Mock Progress Bar */}
        <div className="max-w-md mx-auto bg-indigo-700 rounded-full h-3 overflow-hidden mb-8">
          <div className="bg-teal-400 h-full w-3/4 animate-progress" />
        </div>

        {/* Testimonial */}
        <blockquote className="italic text-lg opacity-90 max-w-2xl mx-auto border-l-4 border-teal-400 pl-4 animate-fade-in delay-600">
          "This platform helped me land my dream job at Google. The practice questions were spot-on!" - Rohan chatterjee., Software Engineer
        </blockquote>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="/signup"
            className="bg-teal-500 text-indigo-900 px-8 py-4 rounded-xl font-bold shadow-lg hover:bg-teal-400 transition-all duration-300 transform hover:scale-105 hover:shadow-teal-400/50"
          >
            Create Free Account
          </a>
          <a
            href="/explore"
            className="border-2 border-teal-400 text-teal-200 px-8 py-4 rounded-xl font-bold hover:bg-teal-400/20 transition-all duration-300 transform hover:scale-105"
          >
            Browse Questions
          </a>
        </div>
        <div className="flex justify-center space-x-4  py-6  text-sm opacity-80">
          <span>Already registered?</span>
          <a href="/login" className="text-teal-300 hover:text-teal-100 underline">
            Sign In
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Study;
