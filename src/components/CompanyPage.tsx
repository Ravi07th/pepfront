import React, { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { companies, sampleQuestions, languages } from '../data/mockData';
import { ArrowLeft, Search, Filter, Clock, Code, Star } from 'lucide-react';
import { ScrollToTop } from './ScrollToTop';

// Type definitions
interface Company {
  id: string;
  name: string;
  logo: string;
  color: string;
  description: string;
}

interface Language {
  id: string;
  name: string;
  icon: string;
}

interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyType;
  category: string;
}

interface RouteParams extends Record<string, string> {
  companyId: string;
}

type DifficultyType = 'Easy' | 'Medium' | 'Hard';

const CompanyPage: React.FC = () => {
  const { companyId } = useParams<RouteParams>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const company: Company | undefined = companies.find((c: Company) => c.id === companyId);
  const questions: Question[] = sampleQuestions[companyId as keyof typeof sampleQuestions] || [];

  const filteredQuestions = useMemo((): Question[] => {
    return questions.filter((question: Question) => {
      const matchesSearch: boolean = question.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          question.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesDifficulty: boolean = selectedDifficulty === 'all' || question.difficulty === selectedDifficulty;
      const matchesCategory: boolean = selectedCategory === 'all' || question.category === selectedCategory;
      return matchesSearch && matchesDifficulty && matchesCategory;
    });
  }, [questions, searchQuery, selectedDifficulty, selectedCategory]);

  const categories: string[] = [...new Set(questions.map((q: Question) => q.category))];
  const difficulties: DifficultyType[] = ['Easy', 'Medium', 'Hard'];

  const getDifficultyColor = (difficulty: DifficultyType): string => {
    switch (difficulty) {
      case 'Easy': 
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Medium': 
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Hard': 
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default: 
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const handleDifficultyChange = (value: string): void => {
    setSelectedDifficulty(value);
  };

  const handleCategoryChange = (value: string): void => {
    setSelectedCategory(value);
  };

  const handleBackToHome = (): void => {
    navigate('/study');
  };

  const handleQuestionClick = (questionId: string): void => {
    navigate(`/company/${companyId}/question/${questionId}`);
  };

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Company not found</h1>
          <Button onClick={handleBackToHome}>Go back home</Button>
        </div>
      </div>
    );
  }

  return (
    <>
    <ScrollToTop />
    <div className="min-h-screen bg-black p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              onClick={handleBackToHome}
              className="text-gray-300 hover:text-white"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-2xl bg-slate-800/50 border border-slate-700 mb-8">
          <div className={`absolute inset-0 bg-gradient-to-br ${company.color} opacity-10`} />
          <div className="relative p-8">
            <div className="flex items-center space-x-6">
              <div className={`w-24 h-24 bg-gradient-to-br ${company.color} rounded-3xl flex items-center justify-center text-5xl`}>
                <img src={company.logo} className='rounded-xl'/>
              </div>
              <div className="space-y-2">
                <h1 className="text-4xl font-bold text-white">{company.name} Questions</h1>
                <p className="text-xl text-gray-300">{company.description}</p>
                <div className="flex items-center space-x-4 mt-4">
                  <Badge variant="secondary" className="px-4 py-2">
                    {questions.length} Questions
                  </Badge>
                  {/* <div className="flex items-center space-x-2">
                    {languages.map((lang: Language) => (
                      <Badge key={lang.id} variant="outline" className="text-xs">
                        {lang.icon} {lang.name}
                      </Badge>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-slate-800/50 border-slate-700 mb-8">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Filter className="w-5 h-5 mr-2" />
              Filter Questions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search questions..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="pl-10 bg-slate-900/50 border-slate-600 text-white"
                />
              </div>
              <Select value={selectedDifficulty} onValueChange={handleDifficultyChange}>
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Difficulty" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Difficulties</SelectItem>
                  {difficulties.map((diff: DifficultyType) => (
                    <SelectItem key={diff} value={diff}>{diff}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((cat: string) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">
              Questions ({filteredQuestions.length})
            </h2>
          </div>

          {filteredQuestions.length === 0 ? (
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-12 text-center">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No questions found</h3>
                <p className="text-gray-400">Try adjusting your search filters</p>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4">
              {filteredQuestions.map((question: Question, index: number) => (
                <Card 
                  key={question.id}
                  className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleQuestionClick(question.id)}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                            {question.title}
                          </h3>
                          <Badge className={getDifficultyColor(question.difficulty)}>
                            {question.difficulty}
                          </Badge>
                          <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                            {question.category}
                          </Badge>
                        </div>
                        <p className="text-gray-400 mb-4 line-clamp-2">
                          {question.description}
                        </p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center">
                            <Code className="w-4 h-4 mr-1" />
                            5 Languages
                          </div>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            3 Approaches
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            ~15 min read
                          </div>
                        </div>
                      </div>
                      <Button 
                        variant="ghost" 
                        className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400 hover:text-blue-300"
                      >
                        Solve →
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default CompanyPage;
