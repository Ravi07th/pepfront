import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/components/ui/use-toast';
import { companies } from '@/data/companyOverview';
import { sampleQuestions } from '@/data/mnc_coding_data/index';
import { ArrowLeft, Clock, Zap, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollToTop } from '@/components/ScrollToTop';

// Type definitions
import type { Company } from '@/data/companyOverview';

interface Language {
  id: string;
  name: string;
  icon: string;
}

interface Approach {
  id: string;
  name: string;
  description: string;
  color: string;
}

interface Solution {
  code: string;
  explanation: string;
  timeComplexity: string;
  spaceComplexity: string;
}

import type { Question } from '@/data/mnc_coding_data/data/amazonQuestions';

interface RouteParams extends Record<string, string> {
  companyId: string;
  questionId: string;
}

// Define approaches and languages that were in mockData.js
const approaches = [
  { id: 'best', name: 'Best', description: 'Most optimal approach', color: 'text-green-500' },
  { id: 'average', name: 'Average', description: 'Optimized approach', color: 'text-yellow-500' },
  { id: 'worst', name: 'Worst', description: 'Brute force approach', color: 'text-red-500' },
];

const languages = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'c', name: 'C', icon: '🔧' },
];

const QuestionPage: React.FC = () => {
  const { companyId, questionId } = useParams<RouteParams>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [selectedApproach, setSelectedApproach] = useState<string>('best');
  
  // Ensure the selected language and approach exist in the available options
  React.useEffect(() => {
    if (languages.length > 0 && !languages.find(l => l.id === selectedLanguage)) {
      setSelectedLanguage(languages[0].id);
    }
    if (approaches.length > 0 && !approaches.find(a => a.id === selectedApproach)) {
      setSelectedApproach(approaches[0].id);
    }
  }, [languages, approaches, selectedLanguage, selectedApproach]);

  const company = companies.find((c: Company) => c.id === companyId);
  
  // Map company IDs to the correct keys in sampleQuestions
  const getCompanyQuestionsKey = (companyId: string): string => {
    const companyIdMap: { [key: string]: string } = {
      'tcs': 'tcsnqt',
      'tcs-digital': 'tcsnqt',
      'tcs-nqt': 'tcsnqt',
      'infosys': 'infosys',
      'wipro': 'wipro',
      'cognizant': 'cognizant',
      'capgemini': 'capgemini',
      'accenture': 'accenture',
      'hcl': 'hcl',
      'amazon': 'amazon',
      'microsoft': 'microsoft',
      'google': 'google'
    };
    return companyIdMap[companyId] || companyId;
  };
  
  const questionsKey = getCompanyQuestionsKey(companyId || '');
  const questions = sampleQuestions[questionsKey as keyof typeof sampleQuestions] || [];
  const question = questions.find((q: any) => q.id === questionId) as Question | undefined;

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

  if (!company) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Company not found</h1>
          <Button onClick={() => navigate('/')}>Go back home</Button>
        </div>
      </div>
    );
  }

  if (!question) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black p-4">
        <div className="text-center">
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-4">Question not found</h1>
          <p className="text-gray-400 mb-4">The requested question could not be found.</p>
          <Button onClick={() => navigate(`/coding/${companyId}`)}>Back to {company?.name || 'Company'}</Button>
        </div>
      </div>
    );
  }

  const currentSolution = question?.solutions?.[selectedLanguage]?.[selectedApproach];

  const handleLanguageChange = (value: string): void => {
    setSelectedLanguage(value);
  };

  const handleApproachClick = (approachId: string): void => {
    setSelectedApproach(approachId);
  };

  const handleCopyClick = (): void => {
    if (currentSolution?.code) {
      copyToClipboard(currentSolution.code);
    }
  };

  const handleBackClick = (): void => {
    navigate(`/coding/${companyId}`);
  };

  return (
    <>
      <ScrollToTop />
      <div className="min-h-screen bg-black p-2 sm:p-4 md:p-6 overflow-x-hidden">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button - Mobile Optimized */}
          <div className="flex items-center justify-between mb-4 sm:mb-6 md:mb-8">
            <Button
              variant="ghost"
              onClick={handleBackClick}
              className="text-gray-300 hover:text-white text-sm sm:text-base"
            >
              <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              <span className="hidden sm:inline">Back to {company?.name || 'Company'}</span>
              <span className="sm:hidden">Back</span>
            </Button>
          </div>

          {/* Main Content Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4 sm:gap-6">
            {/* Header Card - Mobile Optimized */}
            <div className="lg:col-span-1 mb-4 sm:mb-5">
              <Card className="bg-slate-800/50 border-slate-700 lg:sticky lg:top-6">
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
                    {/* Company Info - Mobile Stacked */}
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-xl sm:text-2xl text-white font-bold">
                        {company.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-xs sm:text-sm text-gray-400">{company?.name || 'Company'}</div>
                        <div className="text-white font-medium text-sm sm:text-base">Interview Question</div>
                      </div>
                    </div>
                    
                    {/* Question Info - Mobile Centered */}
                    <div className="space-y-2 flex flex-col items-center sm:items-end">
                                              <CardTitle className="text-lg sm:text-xl md:text-2xl text-white text-center sm:text-right">{question?.title || 'Untitled Question'}</CardTitle>
                      <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                        <Badge className={`${getDifficultyColor(question?.difficulty || 'Medium')} text-xs`}>
                          {question?.difficulty || 'Medium'}
                        </Badge>
                        <div className="flex flex-col gap-2">
                          <div className="flex gap-1 sm:gap-2 flex-wrap justify-center sm:justify-end">
                            {(question?.category || []).slice(0, 2).map((categ, idx) => (
                              <Badge key={idx} variant="secondary" className="bg-slate-700 text-gray-300 text-xs">
                                {categ}
                              </Badge>
                            ))}
                            {(question?.category || []).length > 2 && (
                              <Badge variant="secondary" className="text-gray-300 text-xs">
                                +{(question?.category || []).length - 2}
                              </Badge>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Language Selector - Mobile Full Width */}
                    <div className="space-y-2 w-full sm:w-auto">
                      <label className="text-xs sm:text-sm font-medium text-gray-300">Programming Language</label>
                      <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                        <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white text-sm">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {(languages || []).map((lang: Language) => (
                            <SelectItem key={lang.id} value={lang.id}>
                              <div className="flex items-center space-x-2">
                                <span>{lang.icon}</span>
                                <span>{lang.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Content Card - Mobile Optimized */}
            <div className="lg:col-span-3">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-4 sm:p-6 md:p-8">
                  <Tabs defaultValue="problem" className="space-y-4 sm:space-y-6">
                    <TabsList className="grid w-full grid-cols-2 gap-1 transition-all duration-300" style={{ minWidth: '100%', overflow: 'hidden' }}>
                      <TabsTrigger value="problem" className="text-xs sm:text-sm p-2 min-w-0 overflow-hidden">Problem Description</TabsTrigger>
                      <TabsTrigger value="solution" className="text-xs sm:text-sm p-2 min-w-0 overflow-hidden">Solution</TabsTrigger>
                    </TabsList>

                    <TabsContent value="problem" className="space-y-4 sm:space-y-6">
                      <div className="space-y-3 sm:space-y-4">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Problem Statement</h2>
                        <pre className="text-gray-300 text-sm sm:text-md whitespace-pre-wrap break-words overflow-x-auto p-2 sm:p-3 rounded">
                          <div dangerouslySetInnerHTML={{ __html: question?.description || 'No description available' }} />
                        </pre>
                      </div>

                      <Separator className="bg-slate-600" />

                      <div className="space-y-4 sm:space-y-6">
                        <h3 className="text-lg sm:text-xl font-semibold text-white">Example 1</h3>
                        <Card className="bg-slate-900/50 border-slate-600">
                          <CardContent className="p-3 sm:p-4">
                            <div className="text-blue-400 text-lg sm:text-xl">Input :</div>
                            <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                              <div dangerouslySetInnerHTML={{ __html: question?.input1 || 'No input example available' }} />
                            </pre>
                            <div className="text-blue-400 text-lg sm:text-xl mt-3">Output :</div>
                            <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                              <div dangerouslySetInnerHTML={{ __html: question?.output1 || 'No output example available' }} />
                            </pre>
                            <div className="text-blue-400 text-lg sm:text-xl mt-3">Explanation :</div>
                            <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                              <div dangerouslySetInnerHTML={{ __html: question?.explanation || 'No explanation available' }} />
                            </pre>
                          </CardContent>
                        </Card>

                        <h3 className="text-lg sm:text-xl font-semibold text-white">Example 2</h3>
                        <Card className="bg-slate-900/50 border-slate-600">
                          <CardContent className="p-3 sm:p-4">
                            <div className="text-blue-400 text-lg sm:text-xl">Input :</div>
                            <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                              <div dangerouslySetInnerHTML={{ __html: question?.input2 || 'No input example available' }} />
                            </pre>
                            <div className="text-blue-400 text-lg sm:text-xl mt-3">Output :</div>
                            <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                              <div dangerouslySetInnerHTML={{ __html: question?.output2 || 'No output example available' }} />
                            </pre>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <h3 className="text-lg sm:text-xl font-semibold text-white">Constraints</h3>
                      <Card className="bg-slate-900/50 border-slate-600">
                        <CardContent className="p-3 sm:p-4">
                          <div className="text-blue-400 text-lg sm:text-xl">Constraints :</div>
                          <pre className="text-gray-300 font-mono text-xs sm:text-sm whitespace-pre-wrap break-words overflow-x-auto p-2 rounded">
                            <div dangerouslySetInnerHTML={{ __html: question?.constraints || 'No constraints available' }} />
                          </pre>
                        </CardContent>
                      </Card>
                    </TabsContent>

                    <TabsContent value="solution" className="space-y-4 sm:space-y-6">
                      {/* Select Solution approach - Mobile Responsive */}
                      <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-5">
                        <label className="text-lg sm:text-2xl font-bold text-blue-300">Solution Approach</label>
                        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 lg:gap-5">
                          {(approaches || []).map((approach: Approach) => (
                            <Button
                              key={approach.id}
                              variant={selectedApproach === approach.id ? "default" : "outline"}
                              className={`justify-start text-left h-auto py-2 px-3 sm:px-4 text-xs sm:text-sm ${selectedApproach === approach.id
                                  ? "bg-slate-50 hover:bg-slate-200"
                                  : "bg-slate-900/50 border-slate-600 hover:bg-slate-800"
                                }`}
                              onClick={() => handleApproachClick(approach.id)}
                            >
                              <div className="space-y-1">
                                <div className={`font-medium ${approach.color}`}>
                                  {approach.name}
                                </div>
                                <div className="text-xs text-gray-400">
                                  {approach.description}
                                </div>
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>

                      {currentSolution ? (
                        <div className="space-y-4 sm:space-y-6">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                            <h2 className="text-lg sm:text-2xl font-bold text-white">
                              {approaches.find((a: Approach) => a.id === selectedApproach)?.name || 'Selected'} Approach
                            </h2>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={handleCopyClick}
                              className="bg-slate-900/50 border-slate-600 text-slate-300 hover:bg-slate-800 text-xs sm:text-sm"
                            >
                              <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                              Copy Code
                            </Button>
                          </div>

                          <Card className="bg-slate-900 border-slate-700">
                            <CardHeader className="pb-2 p-3 sm:p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <span className="text-xs sm:text-sm text-gray-400">
                                    {languages.find((l: Language) => l.id === selectedLanguage)?.icon || '🔧'}
                                  </span>
                                  <span className="text-xs sm:text-sm font-medium text-gray-300">
                                    {languages.find((l: Language) => l.id === selectedLanguage)?.name || 'Unknown'}
                                  </span>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent className="p-3 sm:p-4">
                              <pre className="text-xs sm:text-sm text-gray-100 overflow-x-auto">
                                <code>{currentSolution?.code || 'No code available'}</code>
                              </pre>
                            </CardContent>
                          </Card>

                          <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-white">Explanation</h3>
                            <Card className="bg-slate-800/30 border-slate-600">
                              <CardContent className="p-4 sm:p-6">
                                <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                                  {currentSolution?.explanation || 'No explanation available'}
                                </p>
                              </CardContent>
                            </Card>
                          </div>

                          <div className="space-y-3 sm:space-y-4">
                            <h3 className="text-lg sm:text-xl font-semibold text-white">Complexity Analysis</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                              <Card className="bg-slate-800/30 border-slate-600">
                                <CardContent className="p-4 sm:p-6">
                                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                                    {getComplexityIcon(currentSolution?.timeComplexity || 'O(n)')}
                                    <h4 className="font-semibold text-white text-sm sm:text-base">Time Complexity</h4>
                                  </div>
                                  <p className="text-lg sm:text-2xl font-bold text-blue-400 mb-2">
                                    {currentSolution?.timeComplexity || 'O(n)'}
                                  </p>
                                  <p className="text-xs sm:text-sm text-gray-400">
                                    Time taken relative to input size
                                  </p>
                                </CardContent>
                              </Card>
                              <Card className="bg-slate-800/30 border-slate-600">
                                <CardContent className="p-4 sm:p-6">
                                  <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                                    <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                                    <h4 className="font-semibold text-white text-sm sm:text-base">Space Complexity</h4>
                                  </div>
                                  <p className="text-lg sm:text-2xl font-bold text-purple-400 mb-2">
                                    {currentSolution?.spaceComplexity || 'O(1)'}
                                  </p>
                                  <p className="text-xs sm:text-sm text-gray-400">
                                    Extra memory used by algorithm
                                  </p>
                                </CardContent>
                              </Card>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="text-center py-8 sm:py-12">
                          <AlertCircle className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Solution not available</h3>
                          <p className="text-gray-400 text-sm sm:text-base">
                            The solution for {languages.find((l: Language) => l.id === selectedLanguage)?.name || 'selected language'} in {approaches.find((a: Approach) => a.id === selectedApproach)?.name?.toLowerCase() || 'selected'} approach is not available yet.
                          </p>
                        </div>
                      )}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
