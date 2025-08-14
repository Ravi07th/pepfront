import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, XCircle, Clock, Trophy, RotateCcw, ArrowLeft } from "lucide-react";
import { Question, Category } from "@/data/questions";

interface TestResultsProps {
  category: Category;
  questions: Question[];
  selectedAnswers: Record<number, number>;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  onRetake: () => void;
  onBack: () => void;
  placementScore?: { score: number; correct: number; wrong: number };
}

export const TestResults = ({
  category,
  questions,
  selectedAnswers,
  score,
  totalQuestions,
  timeSpent,
  onRetake,
  onBack,
  placementScore
}: TestResultsProps) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  const unanswered = totalQuestions - Object.keys(selectedAnswers).length;
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}m ${secs}s`;
  };

  const getGrade = (percentage: number) => {
    if (percentage >= 90) return { grade: 'A+', color: 'success', message: 'Excellent!' };
    if (percentage >= 80) return { grade: 'A', color: 'success', message: 'Very Good!' };
    if (percentage >= 70) return { grade: 'B+', color: 'warning', message: 'Good!' };
    if (percentage >= 60) return { grade: 'B', color: 'warning', message: 'Above Average' };
    if (percentage >= 50) return { grade: 'C', color: 'destructive', message: 'Average' };
    return { grade: 'F', color: 'destructive', message: 'Needs Improvement' };
  };

  const gradeInfo = getGrade(percentage);

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 animate-fadeIn">
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-4xl font-bold mb-2">Test Completed!</h1>
          <p className="text-xl text-muted-foreground">{category.name}</p>
        </div>

        {/* Score Card */}
        <Card className="mb-8 bg-gradient-card shadow-glow animate-slideInLeft">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl">Your Results</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center">
              <div className="text-6xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
                {percentage}%
              </div>
              <Badge 
                variant={gradeInfo.color === 'success' ? 'default' : 
                        gradeInfo.color === 'warning' ? 'secondary' : 'destructive'}
                className="text-lg px-4 py-1"
              >
                Grade: {gradeInfo.grade}
              </Badge>
              <p className="text-lg text-muted-foreground mt-2">{gradeInfo.message}</p>
            </div>
            
            <Progress value={percentage} className="h-4" />
            
            {placementScore ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-primary">
                    <Trophy className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Total Score</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">{placementScore.score}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-success">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Correct (+2)</span>
                  </div>
                  <div className="text-2xl font-bold text-success">{placementScore.correct}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-destructive">
                    <XCircle className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Wrong (-1)</span>
                  </div>
                  <div className="text-2xl font-bold text-destructive">{placementScore.wrong}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Time</span>
                  </div>
                  <div className="text-lg font-bold text-primary">{formatTime(timeSpent)}</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-success">
                    <CheckCircle className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Correct</span>
                  </div>
                  <div className="text-2xl font-bold text-success">{score}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-destructive">
                    <XCircle className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Incorrect</span>
                  </div>
                  <div className="text-2xl font-bold text-destructive">
                    {Object.keys(selectedAnswers).length - score}
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-muted-foreground">
                    <span className="font-semibold">Unanswered</span>
                  </div>
                  <div className="text-2xl font-bold text-muted-foreground">{unanswered}</div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-primary">
                    <Clock className="w-5 h-5 mr-1" />
                    <span className="font-semibold">Time</span>
                  </div>
                  <div className="text-lg font-bold text-primary">{formatTime(timeSpent)}</div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Question Review */}
        <Card className="mb-8 animate-fadeIn">
          <CardHeader>
            <CardTitle className="text-xl">Question Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {questions.map((question, index) => {
                const selectedAnswer = selectedAnswers[index];
                const isCorrect = selectedAnswer === question.correctAnswer;
                const wasAnswered = selectedAnswer !== undefined;
                
                return (
                  <div key={question.id} className="border border-border rounded-lg p-4">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="flex-shrink-0">
                        {!wasAnswered ? (
                          <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-xs">
                            {index + 1}
                          </div>
                        ) : isCorrect ? (
                          <CheckCircle className="w-6 h-6 text-success" />
                        ) : (
                          <XCircle className="w-6 h-6 text-destructive" />
                        )}
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-2">{question.question}</p>
                        <div className="space-y-1 text-sm">
                          {question.options.map((option, optionIndex) => (
                            <div
                              key={optionIndex}
                              className={`p-2 rounded ${
                                optionIndex === question.correctAnswer
                                  ? 'bg-success/10 text-success border border-success/20'
                                  : selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                  ? 'bg-destructive/10 text-destructive border border-destructive/20'
                                  : 'bg-muted/50'
                              }`}
                            >
                              <span className="font-medium mr-2">
                                {String.fromCharCode(65 + optionIndex)}.
                              </span>
                              {option}
                              {optionIndex === question.correctAnswer && (
                                <Badge variant="outline" className="ml-2 text-xs border-success text-success">
                                  Correct
                                </Badge>
                              )}
                              {selectedAnswer === optionIndex && optionIndex !== question.correctAnswer && (
                                <Badge variant="outline" className="ml-2 text-xs border-destructive text-destructive">
                                  Your Answer
                                </Badge>
                              )}
                            </div>
                          ))}
                        </div>
                        {question.explanation && (
                          <div className="mt-3 p-3 bg-primary/5 rounded border border-primary/20">
                            <p className="text-sm font-medium text-primary mb-1">Explanation:</p>
                            <p className="text-sm text-muted-foreground">{question.explanation}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn">
          <Button variant="outline" onClick={onBack} size="lg" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Categories
          </Button>
          <Button onClick={onRetake} size="lg" className="bg-gradient-primary flex items-center gap-2">
            <RotateCcw className="w-4 h-4" />
            Retake Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestResults;