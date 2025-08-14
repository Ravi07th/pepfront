import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Document, Page, pdfjs } from "react-pdf";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Maximize,
  Minimize,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  Lightbulb,
  Eye,
  HelpCircle,
} from "lucide-react";
import {
  Question,
  questionBank,
  categories,
  getRandomQuestions,
} from "@/data/questions.ts";
import { TestResults } from "./TestResults";

interface MCQTestProps {
  categoryId: string;
  mode: "practice" | "test";
  onBack: () => void;
}

export const MCQTest = ({ categoryId, mode, onBack }: MCQTestProps) => {
  const isPlacementTest = categoryId === "placement-test";
  // number of question in practice page
  const questionCount = isPlacementTest ? 90 : mode === "practice" ? 30 : 60;
  const testDuration = isPlacementTest ? 7200 : 3600; // seconds: 120 minutes or 60

  //mycode for slider
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [testMode, setTestMode] = useState<"practice" | "test">("test");
  const handleStartTest = (categoryId: string, mode: "practice" | "test") => {
    setSelectedCategory(categoryId);
    setTestMode(mode);
  };
  const handleBackToCategories = () => {
    setSelectedCategory(null);
  };

  // Helper to get questions for given categoryId: combine all subsections' questions shuffled and sliced
  const getQuestionsForCategory = (
    categoryId: string,
    count: number
  ): Question[] => {
    if (!questionBank[categoryId]) return [];

    // Combine all subsections' questions
    const allQuestions: Question[] = Object.values(questionBank[categoryId]).flat();

    if (allQuestions.length <= count) return allQuestions;

    // Shuffle and return first 'count'
    const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // UseState to hold questions, initialized once
  const [questions] = useState<Question[]>(() => getQuestionsForCategory(categoryId, questionCount));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(mode === "test" ? testDuration : 0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});
  const [showTopicDetails, setShowTopicDetails] = useState(mode === "practice");
  const [currentPage, setCurrentPage] = useState(0);
  const [showHints, setShowHints] = useState<Record<number, boolean>>({});
  //pdf display

  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.5);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  const questionsPerPage = 5;
  const totalPages = Math.ceil(questions.length / questionsPerPage);
  const currentPageQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const category = categories.find((c) => c.id === categoryId);
  const currentQuestion = questions[currentQuestionIndex];
  const progress =
    mode === "practice"
      ? ((currentPage + 1) / totalPages) * 100
      : ((currentQuestionIndex + 1) / questions.length) * 100;
  const answered = Object.keys(selectedAnswers).length;

  useEffect(() => {
    if (mode === "test" && timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === "test" && timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted, mode]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionIndex: number, optionIndex: number) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionIndex]: optionIndex,
    }));

    // Show explanation for practice mode after selecting an answer
    if (mode === "practice") {
      setShowExplanation((prev) => ({
        ...prev,
        [questionIndex]: true,
      }));
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionNavigation = (index: number) => {
    setCurrentQuestionIndex(index);
    // Scroll to top when navigating between questions
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const toggleHint = (questionIndex: number) => {
    setShowHints((prev) => ({
      ...prev,
      [questionIndex]: !prev[questionIndex],
    }));
  };

  const handleSubmit = () => {
    // Exit fullscreen when test is submitted
    if (document.fullscreenElement) {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
    setIsSubmitted(true);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().then(() => {
        setIsFullscreen(true);
      });
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      });
    }
  };

  const calculateScore = () => {
    let score = 0;
    let correct = 0;
    let wrong = 0;

    questions.forEach((question, index) => {
      if (selectedAnswers[index] !== undefined) {
        if (selectedAnswers[index] === question.correctAnswer) {
          correct++;
          score += isPlacementTest ? 2 : 1; // +2 or +1
        } else {
          wrong++;
          score -= isPlacementTest ? 1 : 0; // -1 for placement test only
        }
      }
    });

    return { score, correct, wrong };
  };

  // Practice mode: Show topic details page
  if (showTopicDetails && mode === "practice") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-background/50 flex items-center justify-center p-4">
        <Card className="w-full max-w-5xl bg-blue-100 mx-auto">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div
                className={`p-2 rounded-lg text-white`}
                style={{ backgroundColor: category?.color }}
              >

              </div>
              <div>
                <CardTitle className="text-4xl mb-5 text-center"><BookOpen className="w-6 h-6" />{category?.name}</CardTitle>
                {/* <p className="text-muted-foreground">{category?.description}</p> */}
                {category?.pdf && (
                  <Document
                    file={category?.pdf}
                    onLoadSuccess={onDocumentLoadSuccess}
                    loading={<div className="text-center text-blue-600 py-20">Loading PDF…</div>}
                    onLoadError={(error) => {
                      console.error("Error loading PDF:", error);
                      alert(`Failed to load PDF: ${error.message || error}`);
                    }}
                    className="block"
                  >
                    {Array.from(new Array(numPages), (_, index) => (
                      <Page key={`page_${index + 1}`} pageNumber={index + 1} scale={scale} />
                    ))}
                  </Document>

                )}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">

            <div className="flex justify-between items-center pt-4">
              <Button onClick={onBack} variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Categories
              </Button>
              <Button onClick={() => setShowTopicDetails(false)} className="bg-gradient-primary">
                Start Practice
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isSubmitted) {
    return (
      <TestResults
        category={category!}
        questions={questions}
        selectedAnswers={selectedAnswers}
        score={calculateScore().correct}
        totalQuestions={questions.length}
        timeSpent={testDuration - timeLeft}
        onRetake={() => {
          setIsSubmitted(false);
          setCurrentQuestionIndex(0);
          setSelectedAnswers({});
          setTimeLeft(testDuration);
          setCurrentPage(0);
          setShowTopicDetails(mode === "practice");
          setShowHints({});
        }}
        onBack={onBack}
        placementScore={isPlacementTest ? calculateScore() : undefined}
      />
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-lg">No questions available for this category.</p>
            <Button onClick={onBack} className="mt-4">
              Go Back
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="flex-1">
        <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border mb-6 p-4">
          <div className="max-w-6xl mx-auto py-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <Button variant="outline" onClick={onBack} size="sm">
                  <ChevronLeft className="w-4 h-4 mr-1" />
                  Back
                </Button>
                <h1 className="text-2xl font-bold">{category?.name}</h1>
              </div>
              <div className="flex items-center gap-4">
                {mode === "test" && !isSubmitted && (
                  <>
                    <div className="flex items-center gap-2 text-lg font-mono">
                      <Clock className="w-5 h-5 text-destructive" />
                      <span className={timeLeft < 300 ? "text-destructive animate-pulse" : "text-foreground"}>
                        {formatTime(timeLeft)}
                      </span>
                    </div>
                    <Button variant="outline" onClick={toggleFullscreen} size="sm">
                      {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                    </Button>
                  </>
                )}
                {mode === "practice" && (
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    Practice Mode
                  </Badge>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              {mode === "practice" ? (
                <span>
                  Page {currentPage + 1} of {totalPages}
                </span>
              ) : (
                <span>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
              )}
              <span>•</span>
              <span>{answered} answered</span>
            </div>

            <Progress value={progress} className="mt-2 h-2" />
          </div>
        </div>

        <div className="flex flex-col-2 ">
          {mode === "practice" ? (
            <div className="">
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
              <div className="  mx-20 ">
                {currentPageQuestions.map((question, pageIndex) => {
                  const actualIndex = currentPage * questionsPerPage + pageIndex;
                  return (
                    <Card key={question.id} className="animate-slideInLeft">
                      <CardHeader>
                        <div className="flex items-center  justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline">
                              Question {actualIndex + 1} of {questions.length}
                            </Badge>
                            <Badge
                              variant={
                                question.difficulty === "easy"
                                  ? "secondary"
                                  : question.difficulty === "medium"
                                    ? "default"
                                    : "destructive"
                              }
                            >
                              {question.difficulty}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => toggleHint(actualIndex)}
                              className="text-blue-600 border-blue-200 hover:bg-blue-50"
                            >
                              <Lightbulb className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() =>
                                setShowExplanation((prev) => ({
                                  ...prev,
                                  [actualIndex]: !prev[actualIndex],
                                }))
                              }
                              className="text-green-600 border-green-200 hover:bg-green-50"
                            >
                              <Eye className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="text-lg leading-relaxed">{question.question}</div>

                        <div className="space-y-3">
                          {question.options.map((option, optionIndex) => (
                            <Button
                              key={optionIndex}
                              variant={
                                selectedAnswers[actualIndex] === optionIndex
                                  ? "default"
                                  : "outline"
                              }
                              className={`w-full justify-start text-left h-auto p-4 ${selectedAnswers[actualIndex] === optionIndex
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                                }`}
                              onClick={() => handleAnswerSelect(actualIndex, optionIndex)}
                            >
                              <span className="font-semibold mr-3">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              <span className="flex-1">{option}</span>
                            </Button>
                          ))}
                        </div>

                        {showHints[actualIndex] && (
                          <Card className="bg-blue-50 border-l-4 border-l-blue-500 animate-fade-in">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-blue-600" />
                                <span className="font-medium text-blue-800">Hint</span>
                              </div>
                              <p className="text-blue-700 text-sm">
                                Think about the key concepts involved. Consider eliminating
                                obviously wrong answers first, then analyze the remaining
                                options carefully.
                              </p>
                            </CardContent>
                          </Card>
                        )}

                        {showExplanation[actualIndex] && (
                          <Card className="bg-muted/50 border-l-4 border-l-primary animate-fade-in">
                            <CardContent className="p-4">
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <Badge
                                    variant={
                                      selectedAnswers[actualIndex] === question.correctAnswer
                                        ? "default"
                                        : "destructive"
                                    }
                                  >
                                    {selectedAnswers[actualIndex] === question.correctAnswer
                                      ? "Correct!"
                                      : "Incorrect"}
                                  </Badge>
                                  <span className="text-sm text-muted-foreground">
                                    Correct Answer: {String.fromCharCode(65 + question.correctAnswer)}
                                  </span>
                                </div>
                                <div className="text-sm leading-relaxed">
                                  <strong>Explanation:</strong> {question.explanation}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Page Navigation */}
              <div className="flex items-center justify-center gap-4 py-6">
                <Button
                  onClick={() => {
                    setCurrentPage(Math.max(0, currentPage - 1));
                    // Scroll to top when changing pages
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                  disabled={currentPage === 0}
                  variant="outline"
                  size="sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i}
                      onClick={() => {
                        setCurrentPage(i);
                        // Scroll to top when changing pages
                        setTimeout(() => {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }, 100);
                      }}
                      variant={currentPage === i ? "default" : "outline"}
                      size="sm"
                      className="w-10 h-10"
                    >
                      {i + 1}
                    </Button>
                  ))}
                </div>

                <Button
                  onClick={() => {
                    setCurrentPage(Math.min(totalPages - 1, currentPage + 1));
                    // Scroll to top when changing pages
                    setTimeout(() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }, 100);
                  }}
                  disabled={currentPage === totalPages - 1}
                  variant="outline"
                  size="sm"
                >
                  Save
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            // Test Mode: Single Question View
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Question Navigation Sidebar */}
              <div className="lg:col-span-1">
                <Card className="sticky top-28">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-5 lg:grid-cols-4 gap-2">
                      {questions.map((_, index) => (
                        <Button
                          key={index}
                          variant={currentQuestionIndex === index ? "default" : "outline"}
                          size="sm"
                          className={`relative h-10 p-0 ${selectedAnswers[index] !== undefined
                            ? "bg-success/10 border-success text-success-foreground"
                            : ""
                            }`}
                          onClick={() => handleQuestionNavigation(index)}
                        >
                          {index + 1}
                          {selectedAnswers[index] !== undefined && (
                            <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-success" />
                          )}
                        </Button>
                      ))}
                    </div>

                    <div className="mt-4 space-y-2 text-xs">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-success rounded"></div>
                        <span>Answered</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 border border-muted-foreground rounded"></div>
                        <span>Not Answered</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Question Area */}
              <div className="lg:col-span-3">
                <Card className="animate-slideInLeft">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">
                          Question {currentQuestionIndex + 1}
                        </Badge>
                        <Badge
                          variant={
                            currentQuestion.difficulty === "easy"
                              ? "secondary"
                              : currentQuestion.difficulty === "medium"
                                ? "default"
                                : "destructive"
                          }
                        >
                          {currentQuestion.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-lg leading-relaxed">{currentQuestion.question}</div>

                    <div className="space-y-3">
                      {currentQuestion.options.map((option, index) => (
                        <Button
                          key={index}
                          variant={selectedAnswers[currentQuestionIndex] === index ? "default" : "outline"}
                          className={`w-full justify-start text-left h-auto p-4 ${selectedAnswers[currentQuestionIndex] === index
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-muted"
                            }`}
                          onClick={() => handleAnswerSelect(currentQuestionIndex, index)}
                        >
                          <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                          <span className="flex-1">{option}</span>
                        </Button>
                      ))}
                    </div>

                    <div className="flex justify-between pt-4">
                      <Button
                        variant="outline"
                        onClick={handlePrevious}
                        disabled={currentQuestionIndex === 0}
                      >
                        <ChevronLeft className="w-4 h-4 mr-1" />
                        Previous
                      </Button>
                      <Button
                        onClick={handleNext}
                        disabled={currentQuestionIndex === questions.length - 1}
                        className="bg-gradient-primary"
                      >
                        Next
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MCQTest;
