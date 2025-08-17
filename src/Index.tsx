import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEO from "@/components/SEO";
import { 
  BookOpen, 
  Users, 
  Target, 
  Code, 
  Zap, 
  Star,  
  ArrowRight,
  Play, 
  Clock, 
  TrendingUp, 
  Award, 
  CheckCircle, 
  Building2, 
  GraduationCap, 
  Brain, 
  Rocket, 
  Sparkles, 
  BarChart3, 
  FileText, 
  Globe, 
  Shield, 
  Heart, 
  Eye, 
  MousePointer,
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Youtube,
  Download,
  Upload,
  Settings,
  Search,
  Filter,
  SortAsc,
  SortDesc,
  MoreHorizontal,
  Plus,
  Minus,
  X,
  Menu,
  Home,
  User,
  LogOut,
  LogIn,
  Bell,
  MessageSquare,
  HelpCircle,
  Info,
  AlertCircle,
  CheckSquare,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  Flag,
  Share,
  Bookmark,
  BookmarkPlus,
  BookmarkMinus,
  BookmarkX,
  BookmarkCheck,
  BookOpenCheck,
  Lightbulb,
  Timer,
  Trophy,
  Medal,
  Crown,
  Gem
} from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CompanyLogo from './components/common/CompanyLogo';

const Index1 = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);

  // SEO structured data for homepage
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "PrepCampus",
    "description": "Your Ultimate Exam Preparation Platform with comprehensive practice tests, mock exams, and study materials for competitive exams.",
    "url": "https://prepcampus.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://prepcampus.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "PrepCampus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://prepcampus.com/images/mylogo.png"
      }
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Practice Tests",
          "description": "Comprehensive practice tests for competitive exams"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Mock Exams",
          "description": "Real-time mock exams with detailed analysis"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Study Materials",
          "description": "Expert-curated study materials and notes"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Company Preparation",
          "description": "Company-specific exam patterns and preparation"
        }
      ]
    }
  };

  const heroTexts = [
    "Crack Top Company Interviews",
    "Master Coding Challenges", 
    "Ace Technical Rounds",
    "Land Your Dream Job"
  ];

  const companies = [
    { name: "TCS", logo: "dummy", color: "bg-blue-500" },
    { name: "Infosys", logo: "dummy", color: "bg-purple-500" },
    { name: "Wipro", logo: "dummy", color: "bg-green-500" },
    { name: "Cognizant", logo: "dummy", color: "bg-red-500" },
    { name: "Amazon", logo: "dummy", color: "bg-yellow-500" },
    { name: "Google", logo: "dummy", color: "bg-blue-600" },
    { name: "Microsoft", logo: "dummy", color: "bg-green-600" },
    { name: "Accenture", logo: "dummy", color: "bg-purple-600"   }
  ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 8000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const features = [
    {
      icon: Code,
      title: "5000+ Questions",
      description: "Practice with questions from top companies like TCS, Amazon, Google",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Target,
      title: "Company-Specific Prep",
      description: "Tailored preparation for each company's Mock Tests",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Brain,
      title: "Detailed Solutions",
      description: "Step by step solutions to all the questions",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Clock,
      title: "Mock Tests",
      description: "Timed practice tests simulating real exam conditions",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: BookOpen,
      title: "Exam Patterns",
      description: "Complete syllabus and pattern analysis for 2025",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10"
    },
    // {
    //   icon: TrendingUp,
    //   title: "Progress  ",
    //   description: "Monitor your improvement with detailed analytics",
    //   color: "text-pink-400",
    //   bgColor: "bg-pink-500/10"
    // },
    // {
    //   icon: Lightbulb,
    //   title: "Smart Learning",
    //   description: "AI-powered recommendations based on your performance",
    //   color: "text-yellow-400",
    //   bgColor: "bg-yellow-500/10"
    // },
    // {
    //   icon: Shield,
    //   title: "Quality Content",
    //   description: "Curated questions by industry experts and professionals",
    //   color: "text-indigo-400",
    //   bgColor: "bg-indigo-500/10"
    // },
    {
      icon: Users,
      title: "Top 30 Interview Questions for Fresher",
      description: "Comprehensive interview guide with essential questions and tips for IT freshers",
      color: "text-teal-400",
      bgColor: "bg-teal-500/10"
    }
  ];

  const popularTopics = [
    {
      title: "Most Asked Coding Questions",
      icon: Code,
      questions: 1200,
      difficulty: "Mixed",
      color: "bg-gradient-to-r from-blue-500 to-purple-500",
      description: "Top coding problems from major tech companies",
      href: "/coding/top30",
      category: "Coding"
    },
    {
      title: "TCS NQT Practice",
      icon: Target,
      questions: 950,
      difficulty: "Medium",
      color: "bg-gradient-to-r from-green-500 to-emerald-500",
      description: "Comprehensive TCS NQT exam preparation",
      href: "/coding/tcs",
      category: "Company Specific"
    },
    {
      title: "Student Notes & Theory",
      icon: BookOpen,
      questions: 500,
      difficulty: "Mixed",
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      description: "Complete study materials and theory notes",
      href: "/student-notes",
      category: "Study Materials"
    },
    {
      title: "Company Exam Patterns",
      icon: GraduationCap,
      questions: 25,
      difficulty: "Easy",
      color: "bg-gradient-to-r from-orange-500 to-red-500",
      description: "Latest exam patterns for all major companies",
      href: "/exam-patterns",
      category: "Exam Prep"
    },
    {
      title: "Mock Tests & Practice",
      icon: Trophy,
      questions: 200,
      difficulty: "Mixed",
      color: "bg-gradient-to-r from-indigo-500 to-violet-500",
      description: "Real-time mock tests with detailed analysis",
      href: "/mock-test",
      category: "Practice"
    },
    {
      title: "Data Structures & Algorithms",
      icon: BarChart3,
      questions: 850,
      difficulty: "Hard",
      color: "bg-gradient-to-r from-teal-500 to-cyan-500",
      description: "Master DSA concepts and problem-solving",
      href: "/coding",
      category: "Coding"
    }
  ];

  const learningPaths = [
    {
      title: "Beginner to Advanced",
      description: "Start from basics and progress to complex problems",
      duration: "3-6 months",
      topics: ["Basic Programming", "Data Structures", "Algorithms"],
      color: "bg-gradient-to-r from-green-400 to-blue-500",
      icon: GraduationCap
    },
    {
      title: "Company Specific",
      description: "Focused preparation for your target company",
      duration: "2-4 months",
      topics: ["Company Patterns", "Mock Tests", "Interview Prep"],
      color: "bg-gradient-to-r from-purple-400 to-pink-500",
      icon: Target
    },
    {
      title: "Competitive Programming",
      description: "Master advanced algorithms and optimization",
      duration: "6-12 months",
      topics: ["Advanced Algos", "Optimization", "Contest Prep"],
      color: "bg-gradient-to-r from-orange-400 to-red-500",
      icon: Trophy
    }
  ];

  const studyResources = [
    {
      title: "Coding Practice",
      description: "100+ coding questions with detailed solutions",
      icon: Code,
      count: "100+",
      color: "text-red-400",
      bgColor: "bg-red-500/10"
    },
    {
      title: "Practice Papers",
      description: "1000+ practice papers with detailed solutions",
      icon: FileText,
      count: "1000+",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10"
    },
    {
      title: "Study Notes",
      description: "Comprehensive study materials and cheat sheets",
      icon: BookOpen,
      count: "200+",
      color: "text-green-400",
      bgColor: "bg-green-500/10"
    },
    {
      title: "MNCs exam patterns",
      description: "Exam patterns for famous MNCs",
      icon: BookOpen,
      count: "20+",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10"
    }
  ];

  const quickStats = [
    { number: '5000+', label: 'Problem', icon: Code, color: "text-blue-400", bgColor: "bg-blue-500/10" },
    { number: '50K+', label: 'Students Helped', icon: Users, color: "text-green-400", bgColor: "bg-green-500/10" },
    { number: '24/7', label: 'Available', icon: Clock, color: "text-purple-400", bgColor: "bg-purple-500/10" },
    { number: '50+', label: 'Mock Tests', icon: Timer, color: "text-cyan-400", bgColor: "bg-cyan-500/10" }
  ];

  const stats = [
    { number: '5000+', label: 'Coding Questions', icon: Code },
    { number: '50K+', label: 'Students Helped', icon: Users },

    { number: '24/7', label: 'Available', icon: Clock }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer",
      company: "TCS",
      avatar: "👩‍💼",
      content: "StudentHelper helped me crack TCS NQT with their comprehensive question bank and detailed solutions. Got placed with 6.5 LPA!",
      rating: 5,
      package: "6.5 LPA"
    },
    {
      name: "Rahul Kumar",
      role: "SDE",
      company: "Amazon",
      avatar: "👨‍💻",
      content: "The mock tests were exactly like the real Amazon interview. Practice questions were spot-on. Highly recommended!",
      rating: 5,
      package: "18 LPA"
    },
    {
      name: "Anjali Patel",
      role: "Frontend Developer",
      company: "Infosys",
      avatar: "👩‍🎨",
      content: "Company-specific preparation made all the difference. Clear explanations and multiple solution approaches really helped.",
      rating: 5,
      package: "4.5 LPA"
    },
    {
      name: "Vikram Singh",
      role: "Backend Developer",
      company: "Wipro",
      avatar: "👨‍💼",
      content: "The study materials are top-notch. Mock tests helped me understand the actual exam pattern perfectly.",
      rating: 5,
      package: "5.2 LPA"
    },
    {
      name: "Sneha Reddy",
      role: "Full Stack Developer",
      company: "Cognizant",
      avatar: "👩‍💻",
      content: "Excellent platform for interview preparation. The question quality and explanations are outstanding.",
      rating: 5,
      package: "4.8 LPA"
    }
  ];

  const examPatterns = [
    {
      company: "TCS NQT",
      duration: "190 mins",
      questions: "83",
      sections: "2",
      difficulty: "Medium-Hard",
      icon: Target,
      gradient: "from-blue-500 to-cyan-500",
      description: "Comprehensive TCS NQT exam preparation with latest pattern"
    },
    {
      company: "Infosys",
      duration: "100 mins", 
      questions: "74",
      sections: "5",
      difficulty: "Medium",
      icon: Building2,
      gradient: "from-purple-500 to-pink-500",
      description: "Infosys recruitment process with detailed syllabus"
    },
    {
      company: "Amazon SDE-1",
      duration: "200 mins",
      questions: "49",
      sections: "5", 
      difficulty: "Hard",
      icon: Trophy,
      gradient: "from-orange-500 to-red-500",
      description: "Amazon SDE-1 online assessment with coding challenges"
    }
  ];

  useEffect(() => {
    const typeText = () => {
      const fullText = heroTexts[currentFeatureIndex];
      let currentLength = 0;
      
      const interval = setInterval(() => {
        setTypedText(fullText.substring(0, currentLength + 1));
        currentLength++;
        
        if (currentLength > fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setCurrentFeatureIndex((prev) => (prev + 1) % heroTexts.length);
          }, 2000);
        }
      }, 100);
      
      return () => clearInterval(interval);
    };

    const timeout = setTimeout(typeText, 500);
    return () => clearTimeout(timeout);
  }, [currentFeatureIndex]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <SEO 
        title="PrepCampus - Your Ultimate Exam Preparation Platform | Practice Tests, Mock Exams & Study Materials"
        description="Master your competitive exams with PrepCampus! Access 5000+ practice questions, mock tests, and study materials for TCS, Infosys, Amazon, Google, and more. Start your preparation journey today!"
        keywords="exam preparation, practice tests, mock exams, competitive exams, TCS, Infosys, Amazon, Google, coding practice, aptitude tests, reasoning, verbal ability, placement preparation"
        url="/"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      
      {/* Hero Section */}
      <section className="relative py-8 sm:py-10 create px-4 sm:px-6 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-3 sm:px-4 py-2 rounded-full mb-8 animate-fade-in">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-xs sm:text-sm font-medium">Beta Version if you find any issue please report to us in contact page</span>
              </div>
              
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-bold mb-6 animate-fade-in">
              Master Coding
              <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </span>
              </h1>
              
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up px-4">
              Practice with 5000+ Aptitude, reasoning, verbal and coding questions from top companies. 
              Crack TCS, Infosys, Amazon, Google interviews with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/mock-test">
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 transform hover:scale-105 text-sm sm:text-base">
                  <Play className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Start Mock Test
                  <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 ml-2" />
                </Button>
              </Link>
              <Link to="/exam-patterns">
                <Button variant="outline" className="border-gray-600 text-black hover:bg-gray-800 px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-200 text-sm sm:text-base">
                  <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  View Exam Patterns
                </Button>
              </Link>
            </div>
                </div>
                
          {/* Company Logos (text-only dummy logos) */}
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4 md:gap-6 mt-16">
            {companies.map((company, index) => (
              <div key={index} className="flex flex-col items-center space-y-2 group">
                <div className={`w-12 h-12 sm:w-16 sm:h-16 ${company.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-md`}>
                  <CompanyLogo companyName={company.name} size={48} />
                </div>
                <span className="text-xs sm:text-sm text-gray-300 text-center">{company.name}</span>
                {/* <span className="text-xs text-gray-500">{company.questions}+ Qs</span> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-10 bg-gray-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 ${stat.bgColor} rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  <stat.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${stat.color}`} />
                </div>
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Section – Enhanced */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6 sm:mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-bold">
                Trending Now
              </h2>
            </div>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Most searched topics by students in PrepCampus - Discover what's hot right now
            </p>
          </div>
          
          {(() => {
            const items = [
              {
                title: 'Microsoft Mock Test',
                tag: 'Mock Test',
                gradient: 'from-blue-500 to-cyan-500',
                colour: 'text-blue-500',
                chips: ['Azure Fundamentals', 'SDE-I Coding', 'Cloud Basics'],
                href: '/mock-test',
                svg: `<svg width="180" height="130" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="30" width="100" height="70" rx="14" fill="#fff" fill-opacity="0.18"/>
                        <rect x="60" y="50" width="60" height="10" rx="3" fill="#fff" fill-opacity="0.5"/>
                        <rect x="60" y="65" width="40" height="10" rx="3" fill="#fff" fill-opacity="0.4"/>
                        <rect x="60" y="80" width="30" height="10" rx="3" fill="#fff" fill-opacity="0.3"/>
                        <polyline points="52,55 58,61 70,51" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.7"/>
                        <polyline points="52,70 58,76 70,66" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.6"/>
                        <polyline points="52,85 58,91 70,81" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.5"/>
                        <rect x="120" y="100" width="32" height="8" rx="4" fill="#fff" fill-opacity="0.3"/>
                        <polygon points="152,100 160,104 152,108" fill="#fff" fill-opacity="0.5"/>
                      </svg>`
              },
              {
                title: 'Student Notes',
                tag: 'Notes',
                gradient: 'from-purple-500 to-pink-500',
                colour: 'text-purple-500',
                chips: ['DBMS', 'Operating Systems', 'DSA Notes'],
                href: '/student-notes',
                svg: `<svg width="140" height="100" className="absolute top-8 right-6 opacity-30">
                        <rect x="30" y="20" width="80" height="16" rx="4" fill="#fff" fillOpacity="0.5" />
                        <rect x="20" y="40" width="100" height="16" rx="4" fill="#fff" fillOpacity="0.5" />
                        <rect x="40" y="60" width="60" height="16" rx="4" fill="#fff" fillOpacity="0.5" />
                        <rect x="35" y="80" width="70" height="10" rx="3" fill="#fff" fillOpacity="0.5" />
                      </svg>`
              },
              {
                title: 'Student Syllabus',
                tag: 'Syllabus',
                gradient: 'from-indigo-500 to-violet-500',
                colour: 'text-indigo-500',
                chips: ['TCS NQT', 'Accenture', 'Infosys'],
                href: '/exam-patterns',
                svg: `<svg width="140" height="100" className="absolute top-8 right-6 opacity-30">
                        <circle cx="30" cy="30" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="24" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                        <circle cx="30" cy="55" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="49" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                        <circle cx="30" cy="80" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="74" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                      </svg>`
              },
              {
                title: 'TCS NQT Mock Test',
                tag: 'Mock Test',
                gradient: 'from-amber-500 to-orange-500',
                colour: 'text-amber-500',
                chips: ['Foundation', 'Advanced', 'Coding'],
                href: '/mock-test',
                svg: `<svg width="180" height="130" viewBox="0 0 180 130" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="40" y="30" width="100" height="70" rx="14" fill="#fff" fill-opacity="0.18"/>
                        <rect x="60" y="50" width="60" height="10" rx="3" fill="#fff" fill-opacity="0.5"/>
                        <rect x="60" y="65" width="40" height="10" rx="3" fill="#fff" fill-opacity="0.4"/>
                        <rect x="60" y="80" width="30" height="10" rx="3" fill="#fff" fill-opacity="0.3"/>
                        <polyline points="52,55 58,61 70,51" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.7"/>
                        <polyline points="52,70 58,76 70,66" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.6"/>
                        <polyline points="52,85 58,91 70,81" stroke="#fff" stroke-width="3" fill="none" stroke-opacity="0.5"/>
                        <rect x="120" y="100" width="32" height="8" rx="4" fill="#fff" fill-opacity="0.3"/>
                        <polygon points="152,100 160,104 152,108" fill="#fff" fill-opacity="0.5"/>
                      </svg>`
              },
              {
                title: 'Coding Practice',
                tag: 'Coding',
                gradient: 'from-emerald-500 to-teal-500',
                colour: 'text-emerald-500',
                chips: ['C / Java / Python', 'Data Structures', 'Patterns'],
                href: '/coding',
                svg: `<svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="15" y="20" width="110" height="60" rx="8" fill="#fff" fillOpacity="0.15"/>
                        <rect x="22" y="28" width="96" height="44" rx="4" fill="#fff" fillOpacity="0.25"/>
                        <rect x="60" y="82" width="20" height="8" rx="3" fill="#fff" fillOpacity="0.25"/>
                        <text x="40" y="58" textAnchor="middle" font-size="32" font-family="monospace" fill="#000" fill-opacity="0.7">&lt;/&gt;</text>
                      </svg>`
              },
              {
                title: 'Company Exam Patterns',
                tag: 'Syllabus',
                gradient: 'from-slate-600 to-blue-600',
                colour: 'text-slate-500',
                chips: ['Overview', 'Sections', 'Time & Qs'],
                href: '/exam-patterns',
                svg: `<svg width="140" height="100" className="absolute top-8 right-6 opacity-30">
                        <circle cx="30" cy="30" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="24" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                        <circle cx="30" cy="55" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="49" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                        <circle cx="30" cy="80" r="6" fill="#fff" fillOpacity="0.5" />
                        <rect x="45" y="74" width="70" height="12" rx="4" fill="#fff" fillOpacity="0.5" />
                      </svg>`
              },
            ];

            const trendingCarouselSettings = {
              dots: false,
              infinite: true,
              speed: 600,
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 2500,
              pauseOnHover: true,
              centerMode: true,
              // centerPadding: '40px',
              cssEase: 'ease-in-out',
              responsive: [
                { breakpoint: 1280, settings: { slidesToShow: 3, centerPadding: '24px' } },
                { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '24px' } },
                { breakpoint: 640, settings: { slidesToShow: 1, centerPadding: '24px' } },
              ],
            } as const;

            return (
              <div className="border-2 border-gray-700 rounded-xl px-4 py-8">
                <Slider {...(trendingCarouselSettings as any)}>
                  {items.map((item, idx) => (
                    <div key={idx} className="px-2 h-full">
                      <div className={`h-44 md:h-60 rounded-2xl bg-gradient-to-r ${item.gradient} relative overflow-hidden shadow-lg`}> 
                        <div className="absolute inset-0 bg-black/25" />
                        <div className="relative z-10 h-full p-5 flex flex-col justify-between">
                            <span
                              className="absolute top-8 right-6 opacity-30"
                              dangerouslySetInnerHTML={{ __html: item.svg }} />
                            <div className="">
                              <span className="text-xs font-semibold text-white/90 bg-white/20 px-2 py-1 w-fit rounded-md">
                                {item.tag}
                              </span>
                              <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                            </div>
                          <div className="flex justify-between items-center">
                            <div className="flex flex-wrap gap-2">
                              {item.chips.map((chip, cIdx) => (
                                <span key={cIdx} className="text-xs text-white bg-white/15 px-2 py-1 rounded-full h-fit">
                                  {chip}
                                </span>
                              ))}
                            </div>
                            <Link to={item.href}>
                              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-lg">
                                <Play className={`w-8 h-8 ${item.colour} hover:scale-110`} />
                              </div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            );
          })()}
        </div>
      </section>

      {/* (Removed duplicate Trending section) */}

      {/* Features Section */}
      <section className="py-8 sm:py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold mb-4">
              Why Choose <span className="text-orange-500">PrepCampus?</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive preparation platform designed to help you succeed in technical interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${feature.bgColor} ${feature.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
           </div>
        </section>

      {/* Popular Topics Section - Enhanced */}
      <section className="py-8 sm:py-10 px-4 sm:px-6 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold  text-orange-500">
                Popular Topics
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Master the most important topics for technical interviews and placement preparation
            </p>
          </div>
       
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {popularTopics.map((topic, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => window.location.href = topic.href}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <CardContent className="relative z-10 p-4 sm:p-6 md:p-8 flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 md:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 ${topic.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <topic.icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-8 md:w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-400">{topic.category}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 space-y-3 md:space-y-4">
                    <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-tight">
                      {topic.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed flex-1">
                      {topic.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <div className="mt-5">
                    <Button 
                      className={`w-full ${topic.color} hover:shadow-lg text-white font-semibold py-2 md:py-3 rounded-xl transition-all duration-300 transform group-hover:-translate-y-1 text-xs sm:text-sm md:text-base`}
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = topic.href;
                      }}
                    >
                      Explore Now
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center mt-5">
            <div className="inline-flex items-center gap-3 sm:gap-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl px-6 sm:px-8 py-3 sm:py-4">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Sparkles className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold text-sm sm:text-base">Ready to start your journey?</p>
                <p className="text-gray-400 text-xs sm:text-sm">Choose any topic above to begin learning</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Paths Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-300">
              Structured learning paths designed for different goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {learningPaths.map((path, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 ${path.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <path.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-xl">{path.title}</CardTitle>
                  <CardDescription className="text-gray-400">{path.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">{path.duration}</span>
                      </div>
                  <div>
                    <span className="text-gray-400 block mb-2">Topics covered:</span>
                    <div className="space-y-1">
                      {path.topics.map((topic, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-400" />
                          <span className="text-sm text-gray-300">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <Link to="/coding">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600">
                      Start Path
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Study Resources Section */}
      <section className="py-5 px-4 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-5">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-orange-500 font-bold mb-4">
              <span className="text-white">Study</span> Resources
            </h2>
            <p className="text-lg sm:text-xl text-gray-300">
              Comprehensive study materials to boost your preparation
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {studyResources.map((resource, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-all duration-300 group">
                <CardContent className="p-4 sm:p-6 text-center">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 ${resource.bgColor} ${resource.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <resource.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2">{resource.title}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mb-3">{resource.description}</p>
                  <div className="text-xl sm:text-2xl font-bold text-white">{resource.count}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Exam Patterns Section - Enhanced */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                Latest Exam Patterns 2025
              </h2>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest exam patterns and syllabus for top tech companies
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {examPatterns.map((pattern, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-gray-800/20 backdrop-blur-sm border border-gray-700/50 hover:border-gray-600/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl cursor-pointer"
                onClick={() => window.location.href = '/exam-patterns'}
              >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full translate-y-12 -translate-x-12 group-hover:scale-150 transition-transform duration-700"></div>
                
                <CardContent className="relative z-10 p-6 sm:p-8">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${pattern.gradient} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <pattern.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div className="text-right">
                      <Badge className={`bg-gradient-to-r ${pattern.gradient} text-white font-semibold px-3 py-1 rounded-full text-xs`}>
                        {pattern.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300 mb-2">
                        {pattern.company}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                        {pattern.description}
                      </p>
                    </div>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      <div className="bg-gray-700/30 rounded-lg p-2 sm:p-3 group-hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-green-400" />
                          <span className="text-xs text-gray-400">Duration</span>
                        </div>
                        <div className="text-white font-semibold text-xs sm:text-sm">{pattern.duration}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-2 sm:p-3 group-hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <Target className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400" />
                          <span className="text-xs text-gray-400">Questions</span>
                        </div>
                        <div className="text-white font-semibold text-xs sm:text-sm">{pattern.questions}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-2 sm:p-3 group-hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <BarChart3 className="h-3 w-3 sm:h-4 sm:w-4 text-purple-400" />
                          <span className="text-xs text-gray-400">Sections</span>
                        </div>
                        <div className="text-white font-semibold text-xs sm:text-sm">{pattern.sections}</div>
                      </div>
                      <div className="bg-gray-700/30 rounded-lg p-2 sm:p-3 group-hover:bg-gray-700/50 transition-all duration-300">
                        <div className="flex items-center gap-2 mb-1">
                          <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                          <span className="text-xs text-gray-400">Level</span>
                        </div>
                        <div className="text-white font-semibold text-xs sm:text-sm">{pattern.difficulty}</div>
                      </div>
                    </div>
                    
                    {/* Action Button */}
                    <div className="flex justify-end">
                      <Button 
                        className={`w-full bg-gradient-to-r ${pattern.gradient} hover:shadow-lg text-white font-semibold py-2 sm:py-3 rounded-xl transition-all duration-300 transform group-hover:-translate-y-1 text-sm sm:text-base`}
                        onClick={(e) => {
                          e.stopPropagation();
                          window.location.href = '/exam-patterns';
                        }}
                      >
                        View Details
                        <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
        
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300">
              Hear from students who cracked their dream jobs
            </p>
          </div>

          <div className="relative">
            <div className="flex justify-center">
              <Card className="bg-gray-800/50 border-gray-700 max-w-2xl">
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4">{testimonials[currentTestimonial].avatar}</div>
                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>
                  <div className="space-y-2">
                    <div className="text-white font-semibold">{testimonials[currentTestimonial].name}</div>
                    <div className="text-gray-400">{testimonials[currentTestimonial].role}</div>
                    <div className="text-blue-400">{testimonials[currentTestimonial].company}</div>
                    <div className="text-green-400 font-semibold">{testimonials[currentTestimonial].package}</div>
                </div>
                  <div className="flex justify-center mt-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-blue-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Enhanced CTA Section */}
      <section className=" px-4 bg-gradient-to-br from-gray-800/30 via-gray-900/50 to-gray-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl text-white font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have already cracked their dream jobs. 
              Create your account to track progress, save favorites, and unlock premium features.
            </p>
          </div>

          {/* Action Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            
            {/* Sign Up Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 text-center text-white shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Create Account</h3>
              <p className="text-blue-100 mb-6">
                Sign up for free and unlock personalized learning paths, progress tracking, and exclusive content.
              </p>
              <Link to="/signup">
                <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300">
                  Sign Up Free
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Sign In Card */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-6 text-center text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Welcome Back</h3>
              <p className="text-green-100 mb-6">
                Already have an account? Sign in to continue your learning journey and access your saved content.
              </p>
              <Link to="/signin">
                <Button className="w-full bg-white text-green-600 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300">
                  Sign In
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>

            {/* Explore Card */}
            <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-2xl p-6 text-center text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Start Learning</h3>
              <p className="text-orange-100 mb-6">
                Explore our platform without signing up. Try free mock tests and practice questions.
              </p>
              <Link to="/mock-test">
                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 font-semibold py-3 rounded-xl transition-all duration-300">
                  Start Free Test
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>

          

          {/* Trust Indicators */}
          <div className="py-10 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-400" />
                <span className="text-sm">Secure & Private</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm">50K+ Students</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-400" />
                <span className="text-sm">Detailed Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-purple-400" />
                <span className="text-sm">Free Excess</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default Index1;