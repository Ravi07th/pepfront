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
  Code2,
  Target
} from 'lucide-react';
import { mncCodingQuestions, Question } from '../../data/mnc_coding_data/index';



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
    ...question
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
  
  // Standardized category options
  const standardCategories = [
    'Array',
    'String', 
    'Linked List',
    'Binary',
    'Bit Manipulation',
    'Tree',
    'Graph',
    'Dynamic Programming'
  ];
  
  const filteredQuestions = questions.filter(question => {
    // Search filtering
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = searchTerm === '' || 
                         question.title.toLowerCase().includes(searchLower) ||
                         question.description.toLowerCase().includes(searchLower);
    
    // Difficulty filtering
    const matchesDifficulty = difficultyFilter === 'all' || question.difficulty === difficultyFilter;
    
    // Category filtering
    const matchesCategory = categoryFilter === 'all' || 
                           question.category.some(cat => cat === categoryFilter);
    
    return matchesSearch && matchesDifficulty && matchesCategory;
  });

  const totalCount = questions.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header - Mobile Responsive */}
      <div className="bg-black border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBackClick}
                className="text-gray-400 hover:text-white text-sm"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Companies</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                  {companyName} Questions
                </h1>
                <p className="text-gray-400 text-xs sm:text-sm">
                  {totalCount} questions
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Badge variant="secondary" className="bg-green-900 text-green-200 text-xs">
                <Target className="w-3 h-3 sm:w-4 sm:h-4 mr-1" />
                Active
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Mobile Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        {/* Filters - Mobile Responsive */}
        <div className="bg-gray-900 rounded-lg p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 border border-gray-800">
          {/* Filter Summary - Mobile Responsive */}
          {(searchTerm || difficultyFilter !== 'all' || categoryFilter !== 'all') && (
            <div className="mb-3 sm:mb-4 p-2 sm:p-3 bg-gray-800 rounded-lg">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-gray-300">
                  <span>Active filters:</span>
                  {searchTerm && (
                    <Badge variant="outline" className="text-xs">
                      Search: "{searchTerm}"
                    </Badge>
                  )}
                  {difficultyFilter !== 'all' && (
                    <Badge variant="outline" className="text-xs">
                      Difficulty: {difficultyFilter}
                    </Badge>
                  )}
                  {categoryFilter !== 'all' && (
                    <Badge variant="outline" className="text-xs">
                      Category: {categoryFilter}
                    </Badge>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-gray-400">
                  Showing {filteredQuestions.length} of {totalCount} questions
                </span>
              </div>
            </div>
          )}
          
          {/* Filter Controls - Mobile Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            <div className="relative sm:col-span-2 lg:col-span-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 sm:w-4 sm:h-4" />
              <Input
                placeholder="Search questions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 sm:pl-10 bg-gray-800 border-gray-700 text-white placeholder-gray-400 text-sm"
              />
            </div>
            <Select value={difficultyFilter} onValueChange={setDifficultyFilter}>
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white text-sm">
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
              <SelectTrigger className="bg-gray-800 border-gray-700 text-white text-sm">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-gray-800 border-gray-700">
                <SelectItem value="all">All Categories</SelectItem>
                {standardCategories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button 
              variant="outline" 
              className="flex items-center justify-center border-gray-700 text-gray-300 hover:bg-gray-800 text-sm"
              onClick={() => {
                setSearchTerm('');
                setDifficultyFilter('all');
                setCategoryFilter('all');
              }}
            >
              <Filter className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Clear Filters</span>
              <span className="sm:hidden">Clear</span>
            </Button>
          </div>
        </div>

        {/* Questions Grid - Mobile Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {filteredQuestions.map((question) => (
            <Card 
              key={question.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-gray-800 hover:border-gray-600 bg-gray-900"
              onClick={() => onQuestionClick(question.id)}
            >
              <CardHeader className="pb-2 sm:pb-3 p-3 sm:p-4">
                <div className="flex items-start justify-between">
                  <div className="flex-1 min-w-0">
                    <CardTitle className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
                      {question.title}
                    </CardTitle>
                    <p className="text-gray-300 text-xs sm:text-sm mt-2 line-clamp-2">
                      {question.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-2 sm:ml-4 flex-shrink-0">
                    <Badge 
                      variant={question.difficulty === 'Hard' ? 'destructive' : question.difficulty === 'Medium' ? 'secondary' : 'default'}
                      className="text-xs"
                    >
                      {question.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 p-3 sm:p-4">
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {question.category.slice(0, 2).map((cat, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-700 text-gray-300">
                      {cat}
                    </Badge>
                  ))}
                  {question.category.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-700 text-gray-300">
                      +{question.category.length - 2}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredQuestions.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <Code2 className="w-8 h-8 sm:w-12 sm:h-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
            <h3 className="text-base sm:text-lg font-medium text-white mb-2">
              No questions found
            </h3>
            <p className="text-gray-400 text-sm">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CompanyQuestionsList;
