import React, { useState, useMemo } from 'react';
import { Question } from './types';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, HelpCircle, BookOpen } from 'lucide-react';

interface SolutionViewerProps {
  questions: Question[];
  userAnswers: Record<string, number | number[]>;
  onBack: () => void;
}

export const SolutionViewer: React.FC<SolutionViewerProps> = ({
  questions,
  userAnswers,
  onBack
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(true);

  // Group questions by section
  const questionsBySection = useMemo(() => {
    const sections: { [key: string]: Question[] } = {};
    
    questions.forEach(question => {
      if (!sections[question.sectionId]) {
        sections[question.sectionId] = [];
      }
      sections[question.sectionId].push(question);
    });
    
    return sections;
  }, [questions]);

  const sectionIds = Object.keys(questionsBySection);
  const currentSectionId = sectionIds[currentSection];
  const currentSectionQuestions = questionsBySection[currentSectionId] || [];
  const currentQuestion = currentSectionQuestions[currentQuestionIndex];
  
  const userAnswer = currentQuestion ? userAnswers[currentQuestion.id] : undefined;
  
  const isCorrect = (() => {
    if (!currentQuestion || userAnswer === undefined) return false;
    
    const correctAnswer = currentQuestion.correctAnswer;
    
    if (Array.isArray(correctAnswer)) {
      // Multiple choice question
      if (Array.isArray(userAnswer)) {
        return userAnswer.length === correctAnswer.length &&
          userAnswer.every(answer => correctAnswer.includes(answer));
      }
    } else {
      // Single choice question
      return userAnswer === correctAnswer;
    }
    
    return false;
  })();

  const getQuestionStatus = (questionId: string) => {
    const answer = userAnswers[questionId];
    const question = questions.find(q => q.id === questionId);
    if (!answer || !question) return 'not-answered';
    
    const correctAnswer = question.correctAnswer;
    
    if (Array.isArray(correctAnswer)) {
      // Multiple choice question
      if (Array.isArray(answer)) {
        return answer.length === correctAnswer.length &&
          answer.every(a => correctAnswer.includes(a)) ? 'correct' : 'incorrect';
      }
    } else {
      // Single choice question
      return answer === correctAnswer ? 'correct' : 'incorrect';
    }
    
    return 'incorrect';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'correct':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'incorrect':
        return <XCircle className="w-4 h-4 text-red-500" />;
      default:
        return <HelpCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'correct':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'incorrect':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (currentSection > 0) {
      // Move to previous section
      const prevSection = currentSection - 1;
      setCurrentSection(prevSection);
      const prevSectionQuestions = questionsBySection[sectionIds[prevSection]];
      setCurrentQuestionIndex(prevSectionQuestions.length - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < currentSectionQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else if (currentSection < sectionIds.length - 1) {
      // Move to next section
      setCurrentSection(currentSection + 1);
      setCurrentQuestionIndex(0);
    }
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestionIndex(index);
  };

  const handleSectionClick = (sectionIndex: number) => {
    setCurrentSection(sectionIndex);
    setCurrentQuestionIndex(0);
  };

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No Questions Available</h3>
          <p className="text-gray-600">No questions found for this section.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button
            variant="outline"
            onClick={onBack}
            className="mb-4"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back to Results
          </Button>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900">Solution Viewer</h1>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className={getStatusColor(getQuestionStatus(currentQuestion.id))}>
                {getStatusIcon(getQuestionStatus(currentQuestion.id))}
                <span className="ml-2">
                  {getQuestionStatus(currentQuestion.id) === 'correct' ? 'Correct' : 
                   getQuestionStatus(currentQuestion.id) === 'incorrect' ? 'Incorrect' : 'Not Answered'}
                </span>
              </Badge>
              <Badge variant="outline">
                Section {currentSection + 1} of {sectionIds.length} - Question {currentQuestionIndex + 1} of {currentSectionQuestions.length}
              </Badge>
            </div>
          </div>
        </div>

        {/* Section Navigation */}
        <div className="mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                Section Navigation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {sectionIds.map((sectionId, index) => {
                  const sectionQuestions = questionsBySection[sectionId];
                  const correctCount = sectionQuestions.filter(q => 
                    getQuestionStatus(q.id) === 'correct'
                  ).length;
                  const totalCount = sectionQuestions.length;
                  
                  return (
                    <button
                      key={sectionId}
                      onClick={() => handleSectionClick(index)}
                      className={`px-4 py-2 rounded-lg border-2 font-medium transition-colors ${
                        index === currentSection
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white border-gray-300 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div className="text-sm font-semibold">Section {index + 1}</div>
                      <div className="text-xs opacity-75">
                        {correctCount}/{totalCount} Correct
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Question Navigator */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Section {currentSection + 1} Questions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2 max-h-96 overflow-y-auto">
                  {currentSectionQuestions.map((question, index) => {
                    const status = getQuestionStatus(question.id);
                    return (
                      <button
                        key={question.id}
                        onClick={() => handleQuestionClick(index)}
                        className={`p-2 rounded border text-sm font-medium transition-colors ${
                          index === currentQuestionIndex
                            ? 'bg-blue-500 text-white border-blue-500'
                            : getStatusColor(status)
                        }`}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Question and Solution */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">
                    Section {currentSection + 1} - Question {currentQuestionIndex + 1}
                  </CardTitle>
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">
                      {currentQuestion.topic}
                    </Badge>
                    <Badge variant="outline">
                      {currentQuestion.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Question */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{currentQuestion.question}</h3>
                  <div className="space-y-3">
                    {currentQuestion.options.map((option, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg border-2 ${
                          index === currentQuestion.correctAnswer
                            ? 'border-green-500 bg-green-50'
                            : index === userAnswer && index !== currentQuestion.correctAnswer
                            ? 'border-red-500 bg-red-50'
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <div className="flex items-center">
                          <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                          <span>{option}</span>
                          {index === currentQuestion.correctAnswer && (
                            <CheckCircle className="w-5 h-5 text-green-500 ml-auto" />
                          )}
                          {index === userAnswer && index !== currentQuestion.correctAnswer && (
                            <XCircle className="w-5 h-5 text-red-500 ml-auto" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Explanation */}
                {currentQuestion.explanation && (
                  <div className="border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="text-lg font-semibold">Explanation</h4>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setShowExplanation(!showExplanation)}
                      >
                        {showExplanation ? 'Hide' : 'Show'} Explanation
                      </Button>
                    </div>
                    {showExplanation && (
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <p className="text-blue-900">{currentQuestion.explanation}</p>
                      </div>
                    )}
                  </div>
                )}

                {/* Navigation */}
                <div className="flex items-center justify-between pt-6 border-t">
                  <Button
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentQuestionIndex === 0 && currentSection === 0}
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleNext}
                    disabled={currentQuestionIndex === currentSectionQuestions.length - 1 && currentSection === sectionIds.length - 1}
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}; 