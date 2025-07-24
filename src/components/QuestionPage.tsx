import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { useToast } from './ui/use-toast';
import { companies, sampleQuestions, languages, approaches } from '../data/mockData';
import { ArrowLeft, Clock, Zap, Copy, CheckCircle2, AlertCircle } from 'lucide-react';
import { ScrollToTop } from './ScrollToTop';

// Type definitions
interface Company {
  id: string;
  name: string;
  logo: string;
  color: string;
}

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

interface Question {
  id: string;
  title: string;
  description: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  solutions?: {
    [languageId: string]: {
      [approachId: string]: Solution;
    };
  };
}

interface RouteParams extends Record<string, string> {
  companyId: string;
  questionId: string;
}

type DifficultyType = 'Easy' | 'Medium' | 'Hard';

const QuestionPage: React.FC = () => {
  const { companyId, questionId } = useParams<RouteParams>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('python');
  const [selectedApproach, setSelectedApproach] = useState<string>('best');

  const company = companies.find((c: Company) => c.id === companyId);
  const questions: Question[] = sampleQuestions[companyId as keyof typeof sampleQuestions] || [];
  const question = questions.find((q: Question) => q.id === questionId);

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

  const getComplexityIcon = (complexity: string): JSX.Element => {
    if (complexity.includes('n²') || complexity.includes('n³')) {
      return <AlertCircle className="w-4 h-4 text-red-400" />;
    } else if (complexity.includes('log')) {
      return <Zap className="w-4 h-4 text-green-400" />;
    } else {
      return <Clock className="w-4 h-4 text-blue-400" />;
    }
  };

  if (!company || !question) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Question not found</h1>
          <Button onClick={() => navigate('/')}>Go back home</Button>
        </div>
      </div>
    );
  }

  const currentSolution: Solution | undefined = question.solutions?.[selectedLanguage]?.[selectedApproach];

  const handleLanguageChange = (value: string): void => {
    setSelectedLanguage(value);
  };

  const handleApproachClick = (approachId: string): void => {
    setSelectedApproach(approachId);
  };

  const handleCopyClick = (): void => {
    if (currentSolution) {
      copyToClipboard(currentSolution.code);
    }
  };

  const handleBackClick = (): void => {
    navigate(`/company/${companyId}`);
  };

  return (
    <>
    <ScrollToTop />
    <div className="min-h-screen bg-black p-6">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <Button
            variant="ghost"
            onClick={handleBackClick}
            className="text-gray-300 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to {company.name}
          </Button>
        </div>

        <div className="grid lg:grid-cols-1">
          <div className="lg:col-span-1 mb-5 -py-5">
            <Card className="bg-slate-800/50 border-slate-700 sticky top-6">
              <CardHeader>
                <div className="flex justify-between items-center">
                  {/* company info */}
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br ${company.color} rounded-xl flex items-center justify-center text-2xl`}>
                      <img src={company.logo} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{company.name}</div>
                      <div className="text-white font-medium">Interview Question</div>
                    </div>
                  </div>
                  {/* question info */}
                  <div className="space-y-2 flex flex-col items-center">
                    <CardTitle className="text-2xl text-white">{question.title}</CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge className={getDifficultyColor(question.difficulty)}>
                        {question.difficulty}
                      </Badge>
                      <Badge variant="secondary" className="bg-slate-700 text-gray-300">
                        {question.category}
                      </Badge>
                    </div>
                  </div>
                {/* select language */}
                  <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Programming Language</label>
                  <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                    <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {languages.map((lang: Language) => (
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

          <div className="lg:col-span-3">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <Tabs defaultValue="problem" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="problem">Problem Description</TabsTrigger>
                    <TabsTrigger value="solution">Solution</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="problem" className="space-y-6">
                    <div className="space-y-4">
                      <h2 className="text-2xl font-bold text-white">Problem Statement</h2>
                      <pre className="text-gray-300 text-md leading-relaxed">
                        {/* {question?.description} */}
                        <div dangerouslySetInnerHTML={{ __html: question?.description }} />
                      </pre>
                    </div>

                    <Separator className="bg-slate-600" />

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Example</h3>
                      <Card className="bg-slate-900/50 border-slate-600">
                        <CardContent className="p-4">
                          <div className="space-y-2 font-mono text-sm">
                            <div className="text-gray-400">Input:</div>
                            <div className="text-green-400">nums = [2,7,11,15], target = 9</div>
                            <div className="text-gray-400">Output:</div>
                            <div className="text-blue-400">[0,1]</div>
                            <div className="text-gray-400 mt-4">Explanation:</div>
                            <div className="text-gray-300">
                              Because nums[0] + nums[1] == 9, we return [0, 1].
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-white">Constraints</h3>
                      <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>2 ≤ nums.length ≤ 10⁴</li>
                        <li>-10⁹ ≤ nums[i] ≤ 10⁹</li>
                        <li>-10⁹ ≤ target ≤ 10⁹</li>
                        <li>Only one valid answer exists</li>
                      </ul>
                    </div>
                  </TabsContent>

                  <TabsContent value="solution" className="space-y-6">
                    {/* Select Solution approach */}
                    <div className=" flex justify-start items-center space-x-5 ">
                      <label className="text-2xl font-bold text-blue-300">Solution Approach</label>
                      <div className="grid grid-cols-5 gap-5">
                        {approaches.map((approach: Approach) => (
                          <Button
                            key={approach.id}
                            variant={selectedApproach === approach.id ? "default" : "outline"}
                            className={`justify-start text-left h-auto py-2 px-4 ${
                              selectedApproach === approach.id 
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
                      <div className="space-y-6">
                        <div className="flex items-center justify-between">
                          <h2 className="text-2xl font-bold text-white">
                            {approaches.find((a: Approach) => a.id === selectedApproach)?.name} Approach
                          </h2>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={handleCopyClick}
                            className="bg-slate-900/50 border-slate-600 text-slate-300 hover:bg-slate-800"
                          >
                            <Copy className="w-4 h-4 mr-2" />
                            Copy Code
                          </Button>
                        </div>

                        <Card className="bg-slate-900 border-slate-700">
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-400">
                                  {languages.find((l: Language) => l.id === selectedLanguage)?.icon}
                                </span>
                                <span className="text-sm font-medium text-gray-300">
                                  {languages.find((l: Language) => l.id === selectedLanguage)?.name}
                                </span>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <pre className="text-sm text-gray-100 overflow-x-auto">
                              <code>{currentSolution.code}</code>
                            </pre>
                          </CardContent>
                        </Card>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-white">Explanation</h3>
                          <Card className="bg-slate-800/30 border-slate-600">
                            <CardContent className="p-6">
                              <p className="text-gray-300 leading-relaxed">
                                {currentSolution.explanation}
                              </p>
                            </CardContent>
                          </Card>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-white">Complexity Analysis</h3>
                          <div className="grid md:grid-cols-2 gap-4">
                            <Card className="bg-slate-800/30 border-slate-600">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-3 mb-2">
                                  {getComplexityIcon(currentSolution.timeComplexity)}
                                  <h4 className="font-semibold text-white">Time Complexity</h4>
                                </div>
                                <p className="text-2xl font-bold text-blue-400 mb-2">
                                  {currentSolution.timeComplexity}
                                </p>
                                <p className="text-sm text-gray-400">
                                  Time taken relative to input size
                                </p>
                              </CardContent>
                            </Card>
                            <Card className="bg-slate-800/30 border-slate-600">
                              <CardContent className="p-6">
                                <div className="flex items-center space-x-3 mb-2">
                                  <Zap className="w-5 h-5 text-purple-400" />
                                  <h4 className="font-semibold text-white">Space Complexity</h4>
                                </div>
                                <p className="text-2xl font-bold text-purple-400 mb-2">
                                  {currentSolution.spaceComplexity}
                                </p>
                                <p className="text-sm text-gray-400">
                                  Extra memory used by algorithm
                                </p>
                              </CardContent>
                            </Card>
                          </div>
                        </div>

                        {/* <div className="space-y-4">
                          <h3 className="text-xl font-semibold text-white">Approach Comparison</h3>
                          <div className="overflow-x-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b border-slate-600">
                                  <th className="text-left py-3 px-4 text-white font-semibold">Approach</th>
                                  <th className="text-left py-3 px-4 text-white font-semibold">Time</th>
                                  <th className="text-left py-3 px-4 text-white font-semibold">Space</th>
                                  <th className="text-left py-3 px-4 text-white font-semibold">Quality</th>
                                </tr>
                              </thead>
                              <tbody className="text-gray-300">
                                {approaches.map((approach: Approach) => {
                                  const solution = question.solutions?.[selectedLanguage]?.[approach.id];
                                  if (!solution) return null;
                                  return (
                                    <tr key={approach.id} className="border-b border-slate-700/50">
                                      <td className="py-3 px-4">
                                        <span className={`font-medium ${approach.color}`}>
                                          {approach.name}
                                        </span>
                                      </td>
                                      <td className="py-3 px-4">{solution.timeComplexity}</td>
                                      <td className="py-3 px-4">{solution.spaceComplexity}</td>
                                      <td className="py-3 px-4">
                                        <div className="flex">
                                          {[...Array(approach.id === 'best' ? 5 : approach.id === 'better' ? 3 : 1)].map((_, i) => (
                                            <CheckCircle2 key={i} className="w-4 h-4 text-yellow-400" />
                                          ))}
                                        </div>
                                      </td>
                                    </tr>
                                  );
                                })}
                              </tbody>
                            </table>
                          </div>
                        </div> */}
                      </div>
                    ) : (
                      <div className="text-center py-12">
                        <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-white mb-2">Solution not available</h3>
                        <p className="text-gray-400">
                          The solution for {languages.find((l: Language) => l.id === selectedLanguage)?.name} in {approaches.find((a: Approach) => a.id === selectedApproach)?.name.toLowerCase()} approach is not available yet.
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
