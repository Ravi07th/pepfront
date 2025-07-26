import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { GraduationCap, BookOpen, Users, Trophy, Clock, Brain, Search, Menu } from "lucide-react";
import { CategoryCard } from "@/components/CategoryCard";
import { MCQTest } from "@/components/MCQTest";
import { categories } from "@/data/questions";

const ExamPrep = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [testMode, setTestMode] = useState<'practice' | 'test'>('test');
  const [searchQuery, setSearchQuery] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleStartTest = (categoryId: string, mode: 'practice' | 'test') => {
    setSelectedCategory(categoryId);
    setTestMode(mode);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  if (selectedCategory) {
    return (
      <MCQTest
        categoryId={selectedCategory}
        mode={testMode}
        onBack={handleBackToCategories}
      />
    );
  }

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.totalQuestions, 0);
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <section className="relative bg-gradient-to-br from-indigo-950 via-purple-950 to-indigo-900 text-white  px-6 md:py-20 md:px-12 overflow-hidden">
        {/* Dynamic Particle Background */}
        {/* ===== HERO SECTION ===== */}
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

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-1    items-center relative z-10">
          {/* Text Content with Parallax */}
          <GraduationCap className="w-20 h-20 mb-5 mx-auto text-yellow-500  animate-bounce-soft" />
          <div className="space-y-8 transform text-center lg:translate-y-[-20px] transition-transform duration-500">
            <h1 className="text-5xl  lg:text-6xl text-center font-extrabold leading-none tracking-tight animate-fade-in-up">
              Perfect for Placements & Exams
            </h1>
            <p className="text-xl lg:text-3xl font-light leading-relaxed opacity-90 animate-fade-in-up delay-200">
              Boost your preparation with essential aptitude questions and solutions for placements and exams!
            </p>
            <div className="flex flex-col justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-400">
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
            <div className="flex justify-center items-center space-x-4 pt-4">
              <Badge className="bg-blue-500/30 text-blue-200 px-3 py-1 rounded-full">500+ Questions</Badge>
              <Badge className="bg-purple-500/30 text-purple-200 px-3 py-1 rounded-full">FAANG Approved</Badge>
              <Badge className="bg-green-500/30 text-green-200 px-3 py-1 rounded-full">Real-Time Practice</Badge>
            </div>
          </div>


        </div>
      </section>



      {/* ===== STATS SECTION ===== */}
      <section className="py-12 bg-card">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <BookOpen className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="text-3xl font-bold text-foreground mb-1">{totalQuestions}+</div>
                <div className="text-muted-foreground">Questions</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <Brain className="w-10 h-10 mx-auto mb-3 text-green-500" />
                <div className="text-3xl font-bold text-foreground mb-1">8</div>
                <div className="text-muted-foreground">Categories</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <Clock className="w-10 h-10 mx-auto mb-3 text-warning" />
                <div className="text-3xl font-bold text-foreground mb-1">60</div>
                <div className="text-muted-foreground">Minutes/Test</div>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <Users className="w-10 h-10 mx-auto mb-3 text-success" />
                <div className="text-3xl font-bold text-foreground mb-1">10K+</div>
                <div className="text-muted-foreground">Students</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ===== MAIN SECTION (SIDEBAR + CONTENT) ===== */}
      <div className="flex ">
        {/* Sidebar */}
        <aside
  className={`fixed bg-gray-200 md:sticky top-0 md:top-16 rounded-xl z-50 bg-card border-r border-border w-64 p-4 transition-transform duration-300
  md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
  style={{ maxHeight: "calc(100vh - 80px)" }}
>
  {/* Header */}
  <div className="flex items-center justify-between mb-6">
    <h2 className="text-xl font-bold text-foreground">Categories</h2>
    <Button variant="ghost" className="md:hidden" onClick={() => setSidebarOpen(false)}>✕</Button>
  </div>

  {/* Start Preparation Section */}
  <div className="mb-4">
    <Button
      variant="default"
      className="w-full justify-center text-lg py-3"
      onClick={() => handleStartTest("live-test", "test")}
    >
      Start Preparation
    </Button>
  </div>

  {/* Scrollable Categories */}
  <div className="space-y-2 overflow-y-auto pr-2" style={{ maxHeight: "calc(100vh - 200px)" }}>
    {categories.map(cat => (
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


        {/* Content */}
        <div className="flex-1">
          {/* Mobile Menu Button */}
          <div className="p-4 md:hidden">
            <Button variant="outline" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5 mr-2" /> Categories
            </Button>
          </div>

          {/* Categories Section */}
          <section className=" px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
                  Choose Your Test Category
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Select from our comprehensive range of aptitude and reasoning tests.
                  Each category is designed to help you excel in competitive exams and assessments.
                </p>

                {/* Search Bar */}
                <div className="flex justify-between space-x-10 items-center  mx-auto mt-8 ">
                  {/* Left-aligned label */}
                  <label className="text-3xl font-bold text-blue-900">
                    Start Practice and Test Preparation
                  </label>

                  {/* Right-aligned search input with icon */}
                  <div className="relative w-full max-w-sm ml-4">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Search categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 h-12 text-base w-full"
                    />
                  </div>
                </div>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 -mt-3 xl:grid-cols-3 gap-6">
                {filteredCategories.length > 0 ? (
                  filteredCategories.map((category, index) => (
                    <div key={category.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <CategoryCard
                        category={category}
                        onStartTest={handleStartTest}
                      />
                    </div>
                  ))
                ) : (
                  <div className="col-span-full text-center py-12">
                    <Search className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-xl font-semibold text-foreground mb-2">No categories found</h3>
                    <p className="text-muted-foreground">
                      Try adjusting your search terms or browse all available categories.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-muted/30">
            <div className="max-w-6xl mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Why Choose Our Platform?</h2>
                <p className="text-xl text-muted-foreground">Experience the best in online assessment</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-gradient-card shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <CardTitle className="text-xl">Timed Tests</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Practice under real exam conditions with proper time management and pressure simulation.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Brain className="w-12 h-12 mx-auto mb-4 text-secondary" />
                    <CardTitle className="text-xl">Detailed Analysis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Get comprehensive feedback with explanations for every question and detailed performance insights.
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card shadow-medium hover:shadow-glow transition-all duration-300 hover:scale-105">
                  <CardHeader className="text-center">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-warning" />
                    <CardTitle className="text-xl">Progress Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      Monitor your improvement over time with detailed analytics and performance metrics.
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-card border-t border-border py-12">
            <div className="max-w-6xl mx-auto px-4 text-center">
              <div className="flex items-center justify-center mb-4">
                <GraduationCap className="w-8 h-8 mr-2 text-primary" />
                <span className="text-2xl font-bold text-foreground">MCQ Test Platform</span>
              </div>
              <p className="text-muted-foreground mb-4">
                Empowering students with comprehensive practice tests for competitive exams
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>© 2024 MCQ Test Platform</span>
                <span>•</span>
                <span>{totalQuestions}+ Questions Available</span>
                <span>•</span>
                <span>8 Categories</span>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ExamPrep;
