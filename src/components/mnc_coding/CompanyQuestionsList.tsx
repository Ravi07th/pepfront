import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Search, 
  Filter, 
  ArrowLeft, 
  Clock, 
  CheckCircle, 
  Circle,
  TrendingUp,
  Code2,
  Target
} from 'lucide-react';
import { mncCodingQuestions, Question } from '../../data/MNC_coding/index';



interface CompanyQuestionsListProps {
  companyId: string;
  companyName: string;
  onQuestionClick: (questionId: string) => void;
  onBackClick: () => void;
}

// Get questions for a specific company
const getQuestionsForCompany = (companyId: string): Question[] => {
  const companyQuestions = mncCodingQuestions[companyId as keyof typeof mncCodingQuestions];
  
  if (!companyQuestions) {
    return [];
  }
  
  // Transform the questions to match the expected format
  return companyQuestions.map((question, index) => ({
    ...question,
    isCompleted: Math.random() > 0.5, // Random completion status for demo
    timeEstimate: `${Math.floor(Math.random() * 30) + 10} min`, // Random time estimate
    successRate: Math.floor(Math.random() * 30) + 70, // Random success rate between 70-100
    lastAttempted: index % 3 === 0 ? '2 days ago' : index % 3 === 1 ? '1 week ago' : '3 days ago'
  }));

};

const CompanyQuestionsList: React.FC<CompanyQuestionsListProps> = ({
  companyId,
  companyName,
  onQuestionClick,
  onBackClick
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const questions = getQuestionsForCompany(companyId);
  
  const filteredQuestions = questions.filter(question => {
    const matchesSearch = question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         question.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
    const matchesCategory = categoryFilter === 'all' || question.category.includes(categoryFilter);
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const completedCount = questions.filter(q => q.isCompleted).length;
  const totalCount = questions.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBackClick}
                className="text-gray-400 hover:text-white"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Companies
              </Button>
              <div>
                <h1 className="text-2xl font-bold text-white">
                  {companyName} Questions
                </h1>
                <p className="text-gray-400 text-sm">
                  {totalCount} questions • {completedCount} completed
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-900 text-green-200">
                <Target className="w-4 h-4 mr-1" />
                {Math.round((completedCount / totalCount) * 100)}% Complete
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters */}
        <div className="bg-gray-900 rounded-lg p-6 mb-6 border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
            </div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">All Difficulties</SelectItem>
                <SelectItem value="Easy">Easy</SelectItem>
                <SelectItem value="Medium">Medium</SelectItem>
                <SelectItem value="Hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="Arrays">Arrays</SelectItem>
                <SelectItem value="Strings">Strings</SelectItem>
                <SelectItem value="Hash Table">Hash Table</SelectItem>
                <SelectItem value="Linked List">Linked List</SelectItem>
                <SelectItem value="Two Pointers">Two Pointers</SelectItem>
                <SelectItem value="Sliding Window">Sliding Window</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" className="flex items-center justify-center border-gray-700 text-gray-300 hover:bg-gray-800">
              <Filter className="w-4 h-4 mr-2" />
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Questions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredQuestions.map((question) => (
            <Card 
              key={question.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-gray-800 hover:border-gray-600 bg-gray-900"
              onClick={() => onQuestionClick(question.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                      {question.title}
                    </CardTitle>
                    <p className="text-gray-300 text-sm mt-2 line-clamp-2">
                      {question.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {question.isCompleted ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Circle className="w-5 h-5 text-gray-400" />
                    )}
                    <Badge 
                      variant={question.difficulty === 'Hard' ? 'destructive' : question.difficulty === 'Medium' ? 'secondary' : 'default'}
                      className="text-xs"
                    >
                      {question.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {question.category.slice(0, 3).map((cat, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-700 text-gray-300">
                      {cat}
                    </Badge>
                  ))}
                  {question.category.length > 3 && (
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                      +{question.category.length - 3}
                    </Badge>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {question.timeEstimate}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      {question.successRate}% success
                    </div>
                  </div>
                  {question.lastAttempted && (
                    <span className="text-xs">
                      Last: {question.lastAttempted}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-12">
            <Code2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">
              No questions found
            </h3>
            <p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyQuestionsList;
