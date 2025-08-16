import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  BookOpen,
  Brain,
  GraduationCap,
  Users,
  Trophy,
  Search,
  ChevronLeft,
  ChevronRight,
  Calculator,
  MessageSquare,
  Globe,
  Code,
  UserCheck,
  Settings,
  Building2,
  Briefcase,
  DollarSign,
  FileText,
  Target,
  Zap,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { MCQTest } from "@/components/MCQTest";
import CompanyLanding from "@/components/company_overview_ui/CompanyLanding";
import ExamPrepNav from "@/components/ExamPrepNav";
import SEO from "@/components/SEO";

const ExamPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [testMode, setTestMode] = useState<"practice" | "test">("test");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState("tcs");
  const [currentSlide, setCurrentSlide] = useState(0);

  // SEO structured data for this page
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Exam Preparation - PrepCampus",
    "description": "Comprehensive exam preparation resources including practice tests, mock exams, and study materials for competitive exams.",
    "url": "https://prepcampus.com/exam-prep",
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Quantitative Aptitude",
          "description": "Math practice tests and study materials"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Logical Reasoning",
          "description": "Reasoning practice tests and study materials"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Verbal Ability",
          "description": "English practice tests and study materials"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Programming",
          "description": "Coding practice tests and study materials"
        }
      ]
    }
  };

  const navigate = useNavigate();

  const handleStartTest = (categoryId: string, mode: "practice" | "test") => {
    setSelectedCategory(categoryId);
    setTestMode(mode);
  };



  const sections = [
    {
      title: "Student Notes",
      icon: <BookOpen className="w-6 h-6" />,
      gradient: "from-yellow-400 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50",
      topics: ["Interview Questions", "DSA", "OS", "Automata", "Read more..."],
      navigateTo: "/student-notes",
      buttonText: "Explore Now",
      stats: { questions: "500+", difficulty: "Beginner", time: "5 min" },
      features: ["PDF Downloads", "Interview Prep", "Study Notes"]
    },
    {
      title: "Quantitative Aptitude (Maths)",
      icon: <Calculator className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      topics: ["Percentage & Ratio-Proportion", "Profit & Loss", "Time, Speed & Distance", "Time & Work", "Read more..."],
      navigateTo: "/quantitative-aptitude",
      buttonText: "Explore Now",
      stats: { questions: "1000+", difficulty: "Intermediate", time: "15 min" },
      features: ["Practice Mode", "Timed Tests", "Detailed Solutions"]
    },
    {
      title: "Logical Reasoning",
      icon: <Brain className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      topics: ["Coding-Decoding", "Blood Relations", "Directions & Distance", "Seating Arrangements","Read more..."],
      navigateTo: "/logical-reasoning",
      buttonText: "Explore Now",
      stats: { questions: "800+", difficulty: "Advanced", time: "20 min" },
      features: ["Pattern Recognition", "Analytical Skills", "Speed Tests"]
    },
    {
      title: "Verbal Ability (English)",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
      topics: ["Error Detection", "Synonyms & Antonyms", "Idioms & Phrases", "Reading Comprehension","Active-Passive Voice", "Read more..."],
      navigateTo: "/verbal-ability",
      buttonText: "Explore Now",
      stats: { questions: "600+", difficulty: "Intermediate", time: "12 min" },
      features: ["Grammar Practice", "Vocabulary Builder", "Reading Tests"]
    },
    {
      title: "Top MNCs Pattern & Syllabus 2025", 
      icon: <Trophy className="w-6 h-6" />,
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
      topics: ["TCS", "Amazon", "Google", "Accenture", "Read more..."],
      navigateTo: "/exam-patterns",
      buttonText: "Explore Now",
      stats: { companies: "50+", difficulty: "Expert", time: "30 min" },
      features: ["Company Specific", "Latest Patterns", "Interview Tips"]
    },
    {
      title: "Programming",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50",
      topics: ["C", "C++", "Java", "Python", "javascript", "Read more..."],
      navigateTo: "/programming",
      buttonText: "Explore Now",
      stats: { questions: "1200+", difficulty: "Expert", time: "25 min" },
      features: ["Code Execution", "Multiple Languages", "Debugging Practice"]
    },
  ];
  return (
    <>
      <SEO 
        title="Exam Preparation - Practice Tests & Study Materials"
        description="Master your competitive exams with PrepCampus! Access comprehensive practice tests, mock exams, and study materials for quantitative aptitude, logical reasoning, verbal ability, and programming."
        keywords="exam preparation, practice tests, mock exams, competitive exams, quantitative aptitude, logical reasoning, verbal ability, programming practice, placement preparation"
        url="/exam-prep"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-10 overflow-hidden">
          {/* Particle Background */}
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

          <div className="max-w-7xl mx-auto grid grid-cols-1 items-center relative z-10">
            <GraduationCap className="w-20 h-20 mb-5 mx-auto text-yellow-500 animate-bounce-soft" />
            <div className="space-y-8 text-center">
              <h1 className="text-5xl lg:text-6xl font-extrabold leading-none tracking-tight">
                Perfect for Placements & Exams
              </h1>
              <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-90">
                Boost your preparation with essential aptitude questions and solutions for placements and exams!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div
                  
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-indigo-900 px-8 py-4 rounded-xl font-bold transition"
                >
                  Explore Questions
                </div>
                <div
                  
                  className="border-2 border-cyan-400 text-cyan-200 px-8 py-4 rounded-xl font-bold  transition"
                >
                  Launch Practice Mode
                </div>
              </div>
              <div className="flex justify-center space-x-4 pt-4">
                <Badge className="bg-blue-500/30 text-blue-200">500+ Questions</Badge>
                <Badge className="bg-purple-500/30 text-purple-200">Mock Tests Each Topic</Badge>
                <Badge className="bg-green-500/30 text-green-200">Real-Time Practice</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Simple Stats Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="text-5xl lg:text-6xl font-bold text-white mb-4">Start Your Preparation Now</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Join thousands of students who have successfully cracked their dream jobs with our comprehensive preparation platform.
              </p>
            </div>

            {/* Simple Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">95%</div>
                <div className="text-sm text-gray-400">Success Rate</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-sm text-gray-400">Mock Tests</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">200+</div>
                <div className="text-sm text-gray-400">Practice Questions</div>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-sm text-gray-400">Study Materials</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 px-4 flex-1">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4 ">Choose Your Placement & Exam Preparation </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select from our comprehensive range of aptitude, reasoning, programming, and more.
              </p>
            </div>

            {/* Main Content with Sidebar Layout */}

          </div>
        </section>

        <div className="flex flex-col justify-center mb-5 lg:flex-row gap-8">
         

            
            {/*  Card Section*/}
            {/* <div className="p-2"> */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${section.bgGradient} hover:from-white hover:via-gray-50 hover:to-white shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-gray-300 hover:scale-[1.02] transform ease-in-out cursor-pointer`}
                    onClick={() => navigate(section.navigateTo)}
                  >
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                      <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${section.gradient} rounded-full -translate-y-16 translate-x-16 animate-pulse`}></div>
                      <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${section.gradient} rounded-full translate-y-10 -translate-x-10 animate-bounce delay-1000`}></div>
                      <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br ${section.gradient} rounded-full -translate-x-8 -translate-y-8 animate-spin delay-500`}></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative p-4 sm:p-6">
                      {/* Header with Icon */}
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {section.icon}
                        </div>
                        {/* <div className="text-right">
                          <div className="text-xs text-gray-500 font-medium">Difficulty</div>
                          <div className="text-sm font-bold text-gray-800">{section.stats.difficulty}</div>
                        </div> */}
                      </div>

                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-800 group-hover:text-gray-900 transition-colors duration-300">
                        {section.title}
                      </h3>

                      {/* Stats Bar */}
                      {/* <div className="flex items-center justify-between mb-4 p-3 bg-white/50 rounded-lg backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">
                            {section.stats.questions || section.stats.companies}
                          </div>
                          <div className="text-xs text-gray-500">
                            {section.stats.questions ? 'Questions' : 'Companies'}
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-gray-800">{section.stats.time}</div>
                          <div className="text-xs text-gray-500">Avg Time</div>
                        </div>
                      </div> */}

                      {/* Topics List */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {section.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              <div className={`w-2 h-2 bg-gradient-to-r ${section.gradient} rounded-full mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                              <span className="text-sm font-medium hover:text-gray-800">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Features Tags */}
                      <div className="flex flex-wrap gap-1 mb-4">
                        {section.features.map((feature, i) => (
                          <span key={i} className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${section.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            {feature}
                          </span>
                        ))}
                      </div>
                        
                      {/* Enhanced Button */}
                      <button className={`relative overflow-hidden bg-gradient-to-r ${section.gradient} text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full group/btn`}>
                        <span className="relative z-10 flex items-center justify-center">
                          {section.buttonText}
                          <div className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                            →
                          </div>
                        </span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                        </button>
                      </div>

                    {/* Enhanced Hover Effect Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`}></div>

                    {/* Animated Bottom Accent */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${section.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>

                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className={`w-3 h-3 bg-gradient-to-r ${section.gradient} rounded-full animate-ping`}></div>
                    </div>
                  </div>
                ))}
              </div>
            {/* </div> */}

          </div>
        </div>
      {/* </div> */}

      {/* companyOverview */}
      <div className="">
        <CompanyLanding />
      </div>

      {/* Features */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
            
            {/* Timed Tests - Blue Theme */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-blue-200 group h-full flex flex-col">
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <Clock className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors">
                  Timed Tests
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
                <CardDescription className="text-center leading-relaxed text-gray-600 text-sm sm:text-base">
                  Practice under real exam conditions with time tracking.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Comprehensive Syllabus - Green Theme */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-green-200 group h-full flex flex-col">
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <BookOpen className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 group-hover:text-green-600 transition-colors">
                  Comprehensive Syllabus
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
                <CardDescription className="text-center leading-relaxed text-gray-600 text-sm sm:text-base">
                  Detailed curriculum covering all exam topics with structured learning paths.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Practice Tests - Yellow Theme */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-yellow-200 group h-full flex flex-col">
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <Trophy className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 group-hover:text-yellow-600 transition-colors">
                  Practice Tests
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
                <CardDescription className="text-center leading-relaxed text-gray-600 text-sm sm:text-base">
                  Mock tests simulating real exam conditions to boost your confidence.
                </CardDescription>
              </CardContent>
            </Card>

            {/* Detailed Analysis - Purple Theme */}
            <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-purple-200 group h-full flex flex-col">
              <CardHeader className="text-center pb-4 px-4 sm:px-6">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  <Brain className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>
                <CardTitle className="text-lg sm:text-xl font-bold text-center mb-2 sm:mb-3 group-hover:text-purple-600 transition-colors">
                  Detailed Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 px-4 sm:px-6 pb-4 sm:pb-6 flex-1">
                <CardDescription className="text-center leading-relaxed text-gray-600 text-sm sm:text-base">
                  Get insights and explanations for every question.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

    </>
  );
};

export default ExamPrep;