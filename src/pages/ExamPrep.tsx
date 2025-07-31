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
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { CategoryCard } from "@/components/CategoryCard";
import { MCQTest } from "@/components/MCQTest";
import { categories, trendingCategories } from "@/data/questions";
import OverView from "./OverView";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExamPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [testMode, setTestMode] = useState<"practice" | "test">("test");
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState("tcs");

  const navigate = useNavigate();

  const handleStartTest = (categoryId: string, mode: "practice" | "test") => {
    setSelectedCategory(categoryId);
    setTestMode(mode);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.totalQuestions, 0);

  const filteredCategories = categories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
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

  // Navigation helper
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  if (selectedCategory) {
    return (
      <MCQTest categoryId={selectedCategory} mode={testMode} onBack={handleBackToCategories} />
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 text-white px-6 md:py-20 md:px-12 overflow-hidden">
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
      <section className="py-12 bg-card">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard icon={<BookOpen />} value={`${totalQuestions}+`} label="Questions" />
          <StatCard icon={<Brain />} value="8" label="Categories" />
          <StatCard icon={<Clock />} value="60" label="Minutes/Test" />
          <StatCard icon={<Users />} value="10K+" label="Students" />
        </div>
      </section>

      {/* Sidebar and Categories */}
      <div className="flex">
        <aside
          className={`fixed md:sticky top-0 md:top-16 z-50 bg-card border-r border-border w-64 p-4 transition-transform duration-300 rounded-xl
              md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
          style={{ maxHeight: "calc(100vh - 80px)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Categories</h2>
            <Button variant="ghost" className="md:hidden" onClick={() => setSidebarOpen(false)}>
              ✕
            </Button>
          </div>
          <div className="mb-4">
            <Button variant="default" className="w-full justify-center text-lg py-3" onClick={() => handleStartTest("live-test", "test")}>
              Start Preparation
            </Button>
          </div>
          <div className="space-y-2 overflow-y-auto pr-2" style={{ maxHeight: "calc(100vh - 200px)" }}>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant="ghost"
                className="w-full justify-start text-left hover:bg-muted hover:text-blue-500"
                onClick={() => handleStartTest(cat.id, "practice")}
              >
                {cat.name}
              </Button>
            ))}
          </div>
        </aside>

        {/* Categories */}
        <section className="py-16 px-4 flex-1">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Choose Your Test Category</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select from our comprehensive range of aptitude and reasoning tests.
              </p>
            </div>

            {/* Trending section */}
            <div className="flex justify-between">
              <div className="text-3xl font-bold">Start Preparation Now!</div>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  type="text"
                  placeholder="Search categories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 text-base"
                />
              </div>
            </div>

            <div className="border-2 rounded-xl px-5 mt-5 mb-5 max-h-[450px] ">
              <div className="text-3xl font-bold text-center border-b-2 border-blue-700 py-3 max-h-[450px]">Trending Test 🔥</div>
              <Slider {...carouselSettings} className="mb-8">
                {/* First Trending Card */}
                <div className="px-2 mt-5 mb-5">
                  <Card
                    className="p-6 shadow hover:shadow-lg rounded-lg flex flex-col justify-between h-full cursor-pointer"
                    onClick={() => handleNavigate('/tcsExam')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavigate('/tcsExam');
                      }
                    }}
                  >
                    <CardHeader className="flex flex-col items-center">
                      <img
                        src="images/tcs.jpg" // <-- Replace with your actual logo path
                        alt="TCS NQT Mock Test"
                        className="w-20 h-20 object-contain mb-2"
                      />
                      <CardTitle className="text-md font-bold text-center">
                        TCS NQT Mock Test
                      </CardTitle>
                      <CardDescription className="text-center text-gray-600 mt-2">
                        Attempt the latest TCS NQT pattern mock exam under real conditions.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center mt-auto">
                      <Button
                        className="w-full cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          handleNavigate('/tcsExam');
                        }}
                        aria-label="Start TCS NQT Mock Test"
                      >
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                {/* Second Trending Card */}
                <div className="px-2 mt-5 mb-5">
                  <Card
                    className="p-6 shadow hover:shadow-lg rounded-lg flex flex-col justify-between h-full cursor-pointer"
                    onClick={() => handleNavigate('/cognizantExam')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavigate('/studentExam');
                      }
                    }}
                  >
                    <CardHeader className="flex flex-col items-center">
                      <img
                        src="amazon.jpg" // <-- Replace with your actual logo path
                        alt="Student Special Exam"
                        className="w-10 h-10 object-contain mb-4"
                      />
                      <CardTitle className="text-lg font-bold text-center">
                        Coginazant Exam
                      </CardTitle>
                      <CardDescription className="text-center text-gray-600 mt-2">
                        Take a comprehensive notes for college students.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Button
                        className="w-full cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          handleNavigate('/studentExam');
                        }}
                        aria-label="Start Student Special Exam"
                      >
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* third Card Trending Card */}
                <div className="px-2 mt-5 mb-5">
                  <Card
                    className="p-6 shadow hover:shadow-lg rounded-lg flex flex-col justify-between h-full cursor-pointer"
                    onClick={() => handleNavigate('/studentExam')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavigate('/studentExam');
                      }
                    }}
                  >
                    <CardHeader className="flex flex-col items-center">
                      <img
                        src="amazon.jpg" // <-- Replace with your actual logo path
                        alt="Student Special Exam"
                        className="w-10 h-10 object-contain mb-4"
                      />
                      <CardTitle className="text-lg font-bold text-center">
                        Placement Test
                      </CardTitle>
                      <CardDescription className="text-center text-gray-600 mt-2">
                        Take a comprehensive notes for college students.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Button
                        className="w-full cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          handleNavigate('/studentExam');
                        }}
                        aria-label="Start Student Special Exam"
                      >
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* fouth Card Trending Card */}
                <div className="px-2 mt-5 mb-5">
                  <Card
                    className="p-6 shadow hover:shadow-lg rounded-lg flex flex-col justify-between h-full cursor-pointer"
                    onClick={() => handleNavigate('/studentExam')}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavigate('/studentExam');
                      }
                    }}
                  >
                    <CardHeader className="flex flex-col items-center">
                      <img
                        src="amazon.jpg" // <-- Replace with your actual logo path
                        alt="Student Special Exam"
                        className="w-10 h-10 object-contain mb-4"
                      />
                      <CardTitle className="text-lg font-bold text-center">
                        Collage notes
                      </CardTitle>
                      <CardDescription className="text-center text-gray-600 mt-2">
                        Take a comprehensive notes for college students.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex justify-center">
                      <Button
                        className="w-full cursor-pointer"
                        onClick={e => {
                          e.stopPropagation();
                          handleNavigate('/studentExam');
                        }}
                        aria-label="Start Student Special Exam"
                      >
                        Start
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </Slider>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
              {filteredCategories.length > 0 ? (
                filteredCategories.map((category, index) => (
                  <div key={category.id} style={{ animationDelay: `${index * 0.1}s` }}>
                    <CategoryCard category={category} onStartTest={handleStartTest} />
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">No categories found</h3>
                  <p className="text-muted-foreground">Try adjusting your search terms or browse all available categories.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* companyOverview */}
      <div className="min-h-screen">
        <OverView />
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-4 mx-10 gap-5 py-5">
        {/* Timed Tests - Blue Theme */}
        <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-2 border-blue-200 group">
          <CardHeader className="text-center pb-4">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
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
