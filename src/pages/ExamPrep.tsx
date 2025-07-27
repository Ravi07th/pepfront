import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader,CardDescription, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight, CheckCircle, Maximize, Minimize, BookOpen, ArrowLeft, ArrowRight, Lightbulb, Eye, HelpCircle, Menu, MoreHorizontal, GraduationCap, Users, Trophy, Brain, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
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

  const totalQuestions = categories.reduce((sum, cat) => sum + cat.totalQuestions, 0);

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (selectedCategory) {
    return (
      <MCQTest
        categoryId={selectedCategory}
        mode={testMode}
        onBack={handleBackToCategories}
      />
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
            <Button variant="ghost" className="md:hidden" onClick={() => setSidebarOpen(false)}>✕</Button>
          </div>
          <div className="mb-4">
            <Button
              variant="default"
              className="w-full justify-center text-lg py-3"
              onClick={() => handleStartTest("live-test", "test")}
            >
              Start Preparation
            </Button>
          </div>
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

        {/* Categories */}
        <section className="py-16 px-4 flex-1">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-foreground">
                Choose Your Test Category
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Select from our comprehensive range of aptitude and reasoning tests.
              </p>

              <div className="relative max-w-md mx-auto mt-8">
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  <p className="text-muted-foreground">
                    Try adjusting your search terms or browse all available categories.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Our Platform?</h2>
            <p className="text-xl text-muted-foreground">Experience the best in online assessment</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<Clock />} title="Timed Tests" description="Practice under real exam conditions with time tracking." />
            <FeatureCard icon={<Brain />} title="Detailed Analysis" description="Get insights and explanations for every question." />
            <FeatureCard icon={<Trophy />} title="Progress Tracking" description="Monitor your growth with clear performance metrics." />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="flex justify-center items-center mb-4">
            <GraduationCap className="w-8 h-8 mr-2 text-primary" />
            <span className="text-2xl font-bold text-foreground">MCQ Test Platform</span>
          </div>
          <p className="text-muted-foreground mb-4">
            Empowering students with comprehensive practice tests for competitive exams
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>© 2024 MCQ Test Platform</span>
            <span>•</span>
            <span>{totalQuestions}+ Questions</span>
            <span>•</span>
            <span>8 Categories</span>
          </div>
        </div>
      </footer>
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

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <Card className="bg-white shadow-md hover:shadow-lg transition-all hover:scale-105">
    <CardHeader className="text-center">
      <div className="w-12 h-12 mx-auto mb-4 text-primary">{icon}</div>
      <CardTitle className="text-xl">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription className="text-center">{description}</CardDescription>
    </CardContent>
  </Card>
);

export default ExamPrep;
