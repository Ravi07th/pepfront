import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { MCQTest } from "@/components/MCQTest";
import CompanyLanding from "@/components/company_overview_ui/CompanyLanding";
import ExamPrepNav from "@/components/ExamPrepNav";

const ExamPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [testMode, setTestMode] = useState<"practice" | "test">("test");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState("tcs");
  const [currentSlide, setCurrentSlide] = useState(0);

  const navigate = useNavigate();

  const handleStartTest = (categoryId: string, mode: "practice" | "test") => {
    setSelectedCategory(categoryId);
    setTestMode(mode);
  };



  const sections = [
    {
      title: "Student Notes",
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      topics: ["Interview Questions", "DBMS", "OS", "Automata", "Read more..."],
      navigateTo: "/student-notes",
      buttonText: "Explore Now",
      logoText1: "Reading"
    },
    {
      title: "Quantitative Aptitude (Maths)",
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      logo2: <Trophy className="w-3 h-3 mr-2 text-purple-500" />,
      topics: ["Percentage & Ratio-Proportion", "Profit & Loss", "Time, Speed & Distance", "Time & Work", "Read more..."],
      navigateTo: "/quantitative-aptitude",
      buttonText: "Explore Now",
      logoText1: "practice",
      logoText2: "Test",
      
    },
    {
      title: "Logical Reasoning",
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      logo2: <Trophy className="w-3 h-3 mr-2 text-purple-500" />,
      topics: ["Coding-Decoding", "Blood Relations", "Directions & Distance", "Seating Arrangements","Read more..."],
      navigateTo: "/logical-reasoning",
      buttonText: "Explore Now",
      logoText1: "practice",
      logoText2: "Test",
    },
    {
      title: "Verbal Ability (English)",
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      logo2: <Trophy className="w-3 h-3 mr-2 text-purple-500" />,
      topics: ["Error Detection", "Synonyms & Antonyms", "Idioms & Phrases", "Reading Comprehension","Active-Passive Voice", "Read more..."],
      navigateTo: "/verbal-ability",
      buttonText: "Explore Now",
      logoText1: "practice",
      logoText2: "Test",
    },
    {
      title: "Top MNCs Pattern & Syllabus 2025", 
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      topics: ["TCS", "Amazon", "Google", "Accenture", "Read more..."],
      navigateTo: "/exam-patterns",
      buttonText: "Explore Now",
      logoText1: "syllabus & pattern",
    },
    {
      title: "Programming",
      logo1: <BookOpen className="w-4 h-4 mr-2 text-yellow-500" />,
      logo2: <Trophy className="w-3 h-3 mr-2 text-purple-500" />,
      topics: ["C", "C++", "Java", "Python", "javascript", "Read more..."],
      navigateTo: "/programming",
      buttonText: "Explore Now",
      logoText1: "practice",
      logoText2: "Test",
    },
  ];
  return (
    <>
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 text-white py-10 overflow-hidden">
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
                <a
                  href="/questions"
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-indigo-900 px-8 py-4 rounded-xl font-bold hover:scale-105 transition"
                >
                  Explore Questions
                </a>
                <a
                  href="/practice"
                  className="border-2 border-cyan-400 text-cyan-200 px-8 py-4 rounded-xl font-bold hover:bg-cyan-400/20 hover:text-cyan-100 transition"
                >
                  Launch Practice Mode
                </a>
              </div>
              <div className="flex justify-center space-x-4 pt-4">
                <Badge className="bg-blue-500/30 text-blue-200">500+ Questions</Badge>
                <Badge className="bg-purple-500/30 text-purple-200">FAANG Approved</Badge>
                <Badge className="bg-green-500/30 text-green-200">Real-Time Practice</Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-card">
          <div className="max-w-6xl mx-auto px-4 mt-10 mb-10 grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatCard icon={<BookOpen />} value={`5000+`} label="Questions" />
            <StatCard icon={<Brain />} value="8" label="Categories" />
            <StatCard icon={<Clock />} value="60" label="Minutes/Test" />
            <StatCard icon={<Users />} value="10K+" label="Students" />
          </div>
        </section>

        {/* Categories */}
        <section className="py-4 px-4 flex-1">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Choose Your Placement & Exam Preparation </h2>
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
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                {sections.map((section, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-gray-50 to-white hover:from-blue-50 hover:via-indigo-50 hover:to-purple-50 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 hover:border-blue-300 hover:scale-[1.02] transform ease-in-out cursor-pointer"
                    onClick={() => navigate(section.navigateTo)}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full -translate-y-12 translate-x-12"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-indigo-400 to-pink-400 rounded-full translate-y-8 -translate-x-8"></div>
                    </div>

                    {/* Card Content */}
                    <div className="relative p-6">
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                        {section.title}
                      </h3>


                      {/* Topics List */}
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {section.topics.map((topic, i) => (
                            <li key={i} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                              <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-2 group-hover:scale-125 transition-transform duration-300"></div>
                              <span className="text-md  hover:text-blue-600 font-medium">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Small Logo and Button */}
                      <div className="flex flex-col justify-between items-center space-y-2">
                        {/* Small Logo */}
                        {/* <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300">
                          {section.logo}
                        </div> */}
                        {/* Dynamic Info Bar - Similar to Image */}
                      <div className="flex justify-end space-x-10 mb-2 px-5 py-1 bg-gray-50 rounded-lg">
                        
                        <div className="flex mr-2 items-center  ">
                          {section.logo1}
                          <span className="text-xs flex justify-start mr-2  font-medium text-gray-600">{section.logoText1}</span>
                        </div>
                        <div className="flex text-md items-center">
                          {section.logo2}
                          <span className="text-xs font-medium text-gray-600">{section.logoText2}</span>
                        </div>
                      </div>
                        
                        {/* Button */}
                        <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                          <span className="relative text-md z-10">{section.buttonText}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </button>
                      </div>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 rounded-2xl"></div>
                    </div>

                    {/* Bottom Accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                  </div>
                ))}
              </div>
            {/* </div> */}

          </div>
        </div>
      {/* </div> */}

      {/* companyOverview */}
      <div className="min-h-screen">
        <CompanyLanding />
      </div>

      {/* Features */}
      <div className="-mt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-10 gap-5 py-5">
          {/* Timed Tests - Blue Theme */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-blue-200 group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-2 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <Clock className="w-10 h-10" />
              </div>
              <CardTitle className="text-xl font-bold text-center mb-3 group-hover:text-blue-600 transition-colors">
                Timed Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <CardDescription className="text-center leading-relaxed text-gray-600">
                Practice under real exam conditions with time tracking.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Comprehensive Syllabus - Green Theme */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-green-200 group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <BookOpen className="w-10 h-10" />
              </div>
              <CardTitle className="text-xl font-bold text-center mb-3 group-hover:text-green-600 transition-colors">
                Comprehensive Syllabus
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <CardDescription className="text-center leading-relaxed text-gray-600">
                Detailed curriculum covering all exam topics with structured learning paths
              </CardDescription>
            </CardContent>
          </Card>

          {/* Practice Tests - Yellow Theme */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-yellow-200 group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <Trophy className="w-10 h-10" />
              </div>
              <CardTitle className="text-xl font-bold text-center mb-3 group-hover:text-yellow-600 transition-colors">
                Practice Tests
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <CardDescription className="text-center leading-relaxed text-gray-600">
                Mock tests simulating real exam conditions to boost your confidence
              </CardDescription>
            </CardContent>
          </Card>

          {/* Detailed Analysis - Purple Theme */}
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-purple-200 group">
            <CardHeader className="text-center pb-4">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                <Brain className="w-10 h-10" />
              </div>
              <CardTitle className="text-xl font-bold text-center mb-3 group-hover:text-purple-600 transition-colors">
                Detailed Analysis
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0 px-6 pb-6">
              <CardDescription className="text-center leading-relaxed text-gray-600">
                Get insights and explanations for every question.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

    </>
  );
};
// Subcomponents for cleanliness
const StatCard = ({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) => (
  <Card className="text-center bg-white shadow-md">
    <CardContent className="p-6">
      <div className="w-10 h-10 mx-auto mb-3 text-primary">{icon}</div>
      <div className="text-3xl font-bold text-foreground mb-1">{value}</div>
      <div className="text-muted-foreground">{label}</div>
    </CardContent>
  </Card>
);

export default ExamPrep;