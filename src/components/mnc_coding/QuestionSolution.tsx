import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  ArrowLeft, 
  Copy, 
  Lightbulb, 
  AlertTriangle,
  Clock,
  Zap,
  AlertCircle
} from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { mncCodingQuestions, Question } from '../../data/mnc_coding_data/index';

interface QuestionSolutionProps {
  questionId: string;
  questionTitle: string;
  companyName: string;
  onBackClick: () => void;
}

const QuestionSolution: React.FC<QuestionSolutionProps> = ({
  questionId,
  questionTitle,
  companyName,
  onBackClick
}) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('c');
  const [selectedApproach, setSelectedApproach] = useState<string>('best');
  const { toast } = useToast();

  // Get the actual question data
  const getCompanyKey = (companyName: string): keyof typeof mncCodingQuestions => {
    const name = companyName.toLowerCase();
    if (name === 'tcs nqt') return 'tcsnqt';
    if (name === 'amazon') return 'amazon';
    if (name === 'google') return 'google';
    if (name === 'accenture') return 'accenture';
    if (name === 'microsoft') return 'microsoft';
    if (name === 'cognizant') return 'cognizant';
    if (name === 'wipro') return 'wipro';
    if (name === 'capgemini') return 'capgemini';
    if (name === 'most asked coding questions') return 'top30';
    return 'amazon'; // fallback
  };
  
  const companyQuestions = mncCodingQuestions[getCompanyKey(companyName)];
  const question: Question | undefined = companyQuestions?.find(q => q.id === questionId);

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 p-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Question not found</h1>
          <Button onClick={onBackClick}>Go back</Button>
        </div>
      </div>
    );
  }

  const copyToClipboard = async (code: string): Promise<void> => {
    try {
      await navigator.clipboard.writeText(code);
      toast({
        title: "Copied!",
        description: "Code copied to clipboard",
        duration: 2000,
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Could not copy code to clipboard",
        variant: "destructive",
        duration: 2000,
      });
    }
  };

  const getDifficultyColor = (difficulty: string): string => {
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

  const getComplexityIcon = (complexity: string): JSX.Element => {
    if (complexity.includes('n²') || complexity.includes('n³')) {
      return <AlertCircle className="w-4 h-4 text-red-400" />;
    } else if (complexity.includes('log')) {
      return <Zap className="w-4 h-4 text-green-400" />;
    } else {
      return <Clock className="w-4 h-4 text-blue-400" />;
    }
  };

  const currentSolution = question.solutions?.[selectedLanguage]?.[selectedApproach];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header - Mobile Responsive */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
            <div className="flex items-center space-x-3 sm:space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={onBackClick}
                className="text-gray-300 hover:text-white hover:bg-gray-700 text-sm"
              >
                <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Back to Questions</span>
                <span className="sm:hidden">Back</span>
              </Button>
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="secondary" className="text-xs bg-blue-600 text-white">
                    {companyName}
                  </Badge>
                  <Badge className={`${getDifficultyColor(question.difficulty)} text-xs`}>
                    {question.difficulty}
                  </Badge>
                  {question.category.slice(0, 2).map((cat, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                      {cat}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Mobile Responsive */}
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
        <Card className="w-full bg-gray-800 border-gray-700">
          <CardHeader className="bg-gray-800 border-b border-gray-700 p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl font-bold text-white">
              {question.title}
            </CardTitle>
            <div className="flex flex-wrap items-center gap-2 mt-2">
              <Badge variant="secondary" className="text-xs bg-blue-600 text-white">
                {companyName}
              </Badge>
              <Badge className={`${getDifficultyColor(question.difficulty)} text-xs`}>
                {question.difficulty}
              </Badge>
              {question.category.map((cat, index) => (
                <Badge key={index} variant="outline" className="text-xs border-gray-600 text-gray-300">
                  {cat}
                </Badge>
              ))}
            </div>
          </CardHeader>
          
          <CardContent className="space-y-6 sm:space-y-8 bg-gray-800 p-4 sm:p-6">
            {/* Problem Description - Mobile Responsive */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 flex items-center">
                <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-yellow-500" />
                Problem Description
              </h3>
              <p className="text-gray-300 text-sm sm:text-base">
                {question.description}
              </p>
            </div>

            {/* Examples Section - Mobile Responsive */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Examples</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-gray-700 rounded-lg p-3 sm:p-4 border border-gray-600">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Example 1:</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div><strong className="text-gray-300">Input:</strong> <span className="text-green-400">{question.input1}</span></div>
                    <div><strong className="text-gray-300">Output:</strong> <span className="text-blue-400">{question.output1}</span></div>
                  </div>
                </div>
                <div className="bg-gray-700 rounded-lg p-3 sm:p-4 border border-gray-600">
                  <h4 className="font-semibold text-white mb-2 text-sm sm:text-base">Example 2:</h4>
                  <div className="space-y-2 text-xs sm:text-sm">
                    <div><strong className="text-gray-300">Input:</strong> <span className="text-green-400">{question.input2}</span></div>
                    <div><strong className="text-gray-300">Output:</strong> <span className="text-blue-400">{question.output2}</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Constraints - Mobile Responsive */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3">Constraints</h3>
              <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <div 
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ 
                    __html: question.constraints
                      .replace(/\n/g, '<br/>')
                      .replace(/## /g, '<h2 class="text-white text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3">')
                      .replace(/### /g, '<h3 class="text-white text-base sm:text-lg font-semibold mt-3 sm:mt-4 mb-1 sm:mb-2">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                      .replace(/`(.*?)`/g, '<code class="bg-gray-700 text-green-400 px-1 py-0.5 rounded text-xs sm:text-sm">$1</code>')
                  }} 
                />
              </div>
            </div>

            {/* Disclaimer - Mobile Responsive */}
            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3 sm:p-4">
              <div className="flex items-start space-x-2 sm:space-x-3">
                <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-yellow-400 mb-1 text-sm sm:text-base">
                    Don't jump directly to the solution!
                  </h4>
                  <p className="text-xs sm:text-sm text-yellow-300">
                    Try to solve this problem yourself first. Only look at the solution after you've given it a good attempt.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Explanation - Mobile Responsive */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Detailed Explanation</h3>
              <div className="text-gray-300 leading-relaxed text-sm sm:text-base">
                <div 
                  className="prose prose-invert max-w-none text-gray-300"
                  dangerouslySetInnerHTML={{ 
                    __html: question.explanation
                      .replace(/\n/g, '<br/>')
                      .replace(/## /g, '<h2 class="text-white text-lg sm:text-xl font-semibold mt-4 sm:mt-6 mb-2 sm:mb-3">')
                      .replace(/### /g, '<h3 class="text-white text-base sm:text-lg font-semibold mt-3 sm:mt-4 mb-1 sm:mb-2">')
                      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                      .replace(/`(.*?)`/g, '<code class="bg-gray-700 text-green-400 px-1 py-0.5 rounded text-xs sm:text-sm">$1</code>')
                  }} 
                />
              </div>
            </div>

            {/* Solution Section - Mobile Responsive */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Solution</h3>
              
              {/* Approach Selection - Mobile Responsive */}
              {question.solutions && Object.keys(question.solutions).length > 0 && (
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-white mb-2 sm:mb-3 text-sm sm:text-base">Approaches:</h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(question.solutions.c || {}).map((approach) => (
                      <Button
                        key={approach}
                        variant={selectedApproach === approach ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedApproach(approach)}
                        className={`text-xs sm:text-sm ${selectedApproach === approach ? "bg-blue-600 hover:bg-blue-700" : "border-gray-600 text-gray-300 hover:bg-gray-700"}`}
                      >
                        {approach.charAt(0).toUpperCase() + approach.slice(1)}
                      </Button>
                    ))}
                  </div>
                </div>
              )}

              <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
                <TabsList className="bg-gray-700 border border-gray-600">
                  <TabsTrigger value="c" className="text-gray-300 data-[state=active]:bg-blue-600 data-[state=active]:text-white text-sm">C</TabsTrigger>
                </TabsList>
                
                {currentSolution && (
                  <TabsContent value={selectedLanguage} className="mt-4 sm:mt-6">
                    <div className="bg-gray-900 rounded-lg p-3 sm:p-4 border border-gray-700">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 space-y-2 sm:space-y-0">
                        <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4 text-xs sm:text-sm text-gray-400">
                          <span>Time: {currentSolution.timeComplexity}</span>
                          <span>Space: {currentSolution.spaceComplexity}</span>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="text-gray-400 hover:text-white hover:bg-gray-800 text-xs sm:text-sm"
                          onClick={() => copyToClipboard(currentSolution.code)}
                        >
                          <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                          Copy
                        </Button>
                      </div>
                      <pre className="text-xs sm:text-sm text-gray-300 overflow-x-auto bg-gray-950 p-3 sm:p-4 rounded border border-gray-700">
                        <code>{currentSolution.code}</code>
                      </pre>
                      <div className="mt-3 sm:mt-4 p-2 sm:p-3 bg-gray-800 rounded text-xs sm:text-sm text-gray-300 border border-gray-700">
                        <p>{currentSolution.explanation}</p>
                      </div>
                    </div>
                  </TabsContent>
                )}
              </Tabs>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QuestionSolution;
