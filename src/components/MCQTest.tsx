import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Clock, ChevronLeft, ChevronRight, Flag, CheckCircle, Maximize, Minimize } from "lucide-react";
import { Question, questionBank, categories, getRandomQuestions } from "@/data/questions";
import { TestResults } from "./TestResults";

interface MCQTestProps {
  categoryId: string;
  mode: 'practice' | 'test';
  onBack: () => void;
}

export const MCQTest = ({ categoryId, mode, onBack }: MCQTestProps) => {
  const [questions] = useState<Question[]>(() => getRandomQuestions(categoryId, 60));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [timeLeft, setTimeLeft] = useState(mode === 'test' ? 3600 : 0); // 60 minutes for test, no timer for practice
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [flaggedQuestions, setFlaggedQuestions] = useState<Set<number>>(new Set());
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  const category = categories.find(c => c.id === categoryId);
  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const answered = Object.keys(selectedAnswers).length;

  useEffect(() => {
    if (mode === 'test' && timeLeft > 0 && !isSubmitted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (mode === 'test' && timeLeft === 0 && !isSubmitted) {
      handleSubmit();
    }
  }, [timeLeft, isSubmitted, mode]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [currentQuestionIndex]: optionIndex
    }));
    
    // Show explanation for practice mode after selecting an answer
    if (mode === 'practice') {
      setShowExplanation(prev => ({
        ...prev,
        [currentQuestionIndex]: true
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
  };

  const toggleFlag = () => {
    setFlaggedQuestions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentQuestionIndex)) {
        newSet.delete(currentQuestionIndex);
      } else {
        newSet.add(currentQuestionIndex);
      }
      return newSet;
    });
  };

  const handleSubmit = () => {
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
    let correct = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  if (isSubmitted) {
    return (
      <TestResults
        category={category!}
        questions={questions}
        selectedAnswers={selectedAnswers}
        score={calculateScore()}
        totalQuestions={questions.length}
        timeSpent={3600 - timeLeft}
        onRetake={() => {
          setIsSubmitted(false);
          setCurrentQuestionIndex(0);
          setSelectedAnswers({});
          setTimeLeft(3600);
          setFlaggedQuestions(new Set());
        }}
        onBack={onBack}
      />
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-lg">No questions available for this category.</p>
            <Button onClick={onBack} className="mt-4">Go Back</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border mb-6">
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
              {mode === 'test' && (
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
              {mode === 'practice' && (
                <Badge variant="secondary" className="text-lg px-4 py-2">
                  Practice Mode
                </Badge>
              )}
              <Button onClick={handleSubmit} variant="default" className="bg-gradient-primary">
                Submit {mode === 'practice' ? 'Practice' : 'Test'}
              </Button>
            </div>
          </div>
          {/* change need */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
            <span>•</span>
            <span>{answered} answered</span>
            <span>•</span>
            <span>{flaggedQuestions.size} flagged</span>
          </div>
          
          <Progress value={progress} className="mt-2 h-2" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">
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
                    className={`relative h-10 p-0 ${
                      selectedAnswers[index] !== undefined
                        ? "bg-success/10 border-success text-success-foreground"
                        : ""
                    } ${
                      flaggedQuestions.has(index)
                        ? "border-warning text-warning"
                        : ""
                    }`}
                    onClick={() => handleQuestionNavigation(index)}
                  >
                    {index + 1}
                    {selectedAnswers[index] !== undefined && (
                      <CheckCircle className="w-3 h-3 absolute -top-1 -right-1 text-success" />
                    )}
                    {flaggedQuestions.has(index) && (
                      <Flag className="w-3 h-3 absolute -top-1 -left-1 text-warning fill-current" />
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
                <div className="flex items-center gap-2">
                  <Flag className="w-3 h-3 text-warning fill-current" />
                  <span>Flagged</span>
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
                  <Badge variant="outline">Question {currentQuestionIndex + 1}</Badge>
                  <Badge variant={currentQuestion.difficulty === 'easy' ? 'secondary' : 
                                currentQuestion.difficulty === 'medium' ? 'default' : 'destructive'}>
                    {currentQuestion.difficulty}
                  </Badge>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleFlag}
                  className={flaggedQuestions.has(currentQuestionIndex) ? "border-warning text-warning" : ""}
                >
                  <Flag className={`w-4 h-4 ${flaggedQuestions.has(currentQuestionIndex) ? "fill-current" : ""}`} />
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-lg leading-relaxed">
                {currentQuestion.question}
              </div>
              
              <div className="space-y-3">
                {currentQuestion.options.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswers[currentQuestionIndex] === index ? "default" : "outline"}
                    className={`w-full justify-start text-left h-auto p-4 ${
                      selectedAnswers[currentQuestionIndex] === index
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-muted"
                    }`}
                    onClick={() => handleAnswerSelect(index)}
                  >
                    <span className="font-semibold mr-3">{String.fromCharCode(65 + index)}.</span>
                    <span className="flex-1">{option}</span>
                  </Button>
                ))}
              </div>
              
              {/* Explanation for Practice Mode */}
              {mode === 'practice' && showExplanation[currentQuestionIndex] && selectedAnswers[currentQuestionIndex] !== undefined && (
                <Card className="bg-muted/50 border-l-4 border-l-primary animate-fade-in">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Badge variant={selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? "default" : "destructive"}>
                          {selectedAnswers[currentQuestionIndex] === currentQuestion.correctAnswer ? "Correct!" : "Incorrect"}
                        </Badge>
                        <span className="text-sm text-muted-foreground">
                          Correct Answer: {String.fromCharCode(65 + currentQuestion.correctAnswer)}
                        </span>
                      </div>
                      <div className="text-sm leading-relaxed">
                        <strong>Explanation:</strong> {currentQuestion.explanation}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
              
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
    </div>
  );
};