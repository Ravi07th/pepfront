import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle, Eye, BookOpen, Users, Navigation, Grid3X3, Puzzle, Edit3, Save, X, Calculator, MessageSquare } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
}

interface PracticeComponentProps {
  sectionName: string;
  sectionIcon: React.ReactNode;
  categories: Category[];
  getQuestions: (topic: string) => Question[];
  getTopicTitle: (topic: string) => string;
  navigatePath: string;
  backPath: string;
}

const PracticeComponent: React.FC<PracticeComponentProps> = ({
  sectionName,
  sectionIcon,
  categories,
  getQuestions,
  getTopicTitle,
  navigatePath,
  backPath
}) => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [currentPanel, setCurrentPanel] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showExplanations, setShowExplanations] = useState<{ [key: number]: boolean }>({});
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState<{ [key: number]: boolean }>({});
  const [shuffledQuestions, setShuffledQuestions] = useState<Question[]>([]);
  const [showNotes, setShowNotes] = useState<{ [key: number]: boolean }>({});
  const [notes, setNotes] = useState<{ [key: number]: string }>({});
  const [questionNotes, setQuestionNotes] = useState<{ [key: number]: string }>({});

  const questionsPerPanel = 5;

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: Question[]): Question[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    const questions = getQuestions(topic || '');
    const shuffled = shuffleArray(questions);
    setShuffledQuestions(shuffled);
    setAnswered({});
    setSelectedAnswers({});
    setShowExplanations({});
    setShowNotes({});
    setNotes({});
    setScore(0);
    setCurrentPanel(0);
  }, [topic, getQuestions]);

  const questions = shuffledQuestions;
  const totalQuestions = questions.length;
  const totalPanels = Math.ceil(totalQuestions / questionsPerPanel);

  const getCurrentPanelQuestions = () => {
    const startIndex = currentPanel * questionsPerPanel;
    const endIndex = Math.min(startIndex + questionsPerPanel, totalQuestions);
    return questions.slice(startIndex, endIndex);
  };

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
    
    if (!answered[actualQuestionIndex]) {
      setSelectedAnswers({
        ...selectedAnswers,
        [actualQuestionIndex]: answerIndex
      });
      
      setShowExplanations({
        ...showExplanations,
        [actualQuestionIndex]: true
      });
      
      const isCorrect = answerIndex === questions[actualQuestionIndex].correctAnswer;
      if (isCorrect) {
        setScore(score + 1);
      }
      
      setAnswered({
        ...answered,
        [actualQuestionIndex]: true
      });
    }
  };

  const handleNextPanel = () => {
    if (currentPanel < totalPanels - 1) {
      setCurrentPanel(currentPanel + 1);
    }
  };

  const handlePreviousPanel = () => {
    if (currentPanel > 0) {
      setCurrentPanel(currentPanel - 1);
    }
  };

  const handleCategoryClick = (categoryId: string) => {
    navigate(`${navigatePath}/${categoryId}`);
  };

  const handleNotesToggle = (questionIndex: number) => {
    const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
    setShowNotes({
      ...showNotes,
      [actualQuestionIndex]: !showNotes[actualQuestionIndex]
    });
  };

  const handleNotesChange = (questionIndex: number, value: string) => {
    const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
    setNotes({
      ...notes,
      [actualQuestionIndex]: value
    });
  };

  const handleSaveNotes = (questionIndex: number) => {
    const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
    setQuestionNotes({
      ...questionNotes,
      [actualQuestionIndex]: notes[actualQuestionIndex] || ''
    });
    setShowNotes({
      ...showNotes,
      [actualQuestionIndex]: false
    });
  };

  const handleCancelNotes = (questionIndex: number) => {
    const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
    setShowNotes({
      ...showNotes,
      [actualQuestionIndex]: false
    });
  };

  const progress = ((currentPanel + 1) / totalPanels) * 100;

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  const currentPanelQuestions = getCurrentPanelQuestions();

  return (
    <div className="min-h-screen bg-background">
      {/* Main Content Area with Fixed Sidebar */}
      <div className="flex pt-2">
        {/* Left Sidebar - Fixed */}
        <div className="w-64 bg-white border-r border-gray-200 p-4 space-y-4 overflow-y-auto sticky top-20 h-[calc(100vh-5rem)] z-10">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Categories</h2>
            <p className="text-sm text-gray-600">Select a topic to practice</p>
          </div>
          
          {categories.map((category) => (
            <Card 
              key={category.id}
              className={`cursor-pointer transition-all duration-200 hover:shadow-md ${
                topic === category.id 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleCategoryClick(category.id)}
            >
              <CardContent className="p-3">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${
                    topic === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                  }`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className={`font-medium text-sm ${
                      topic === category.id ? 'text-blue-800' : 'text-gray-800'
                    }`}>
                      {category.name}
                    </h3>
                    <p className={`text-xs ${
                      topic === category.id ? 'text-blue-600' : 'text-gray-500'
                    }`}>
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content - Scrollable */}
        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-between max-w-5xl mb-5 mx-2">
            <Button
              variant="outline"
              onClick={() => navigate(backPath)}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Topics
            </Button>
            <div className="text-center">
              <h1 className="text-xl font-bold">{getTopicTitle(topic || '')} Practice</h1>
              <p className="text-sm text-muted-foreground">Panel {currentPanel + 1} of {totalPanels}</p>
            </div>
            <div className="text-right">
              <div className="text-base font-semibold">Score: {score}/{totalQuestions}</div>
            </div>
          </div>
          <div className="p-6">
            <div className="max-w-4xl mx-auto">
              {/* Progress Bar */}
              <div className="mb-6">
                <Progress value={progress} className="h-2" />
              </div>

              {/* Questions Stack */}
              <div className="space-y-6">
                {currentPanelQuestions.map((question, questionIndex) => {
                  const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
                  const selectedAnswer = selectedAnswers[actualQuestionIndex];
                  const showExplanation = showExplanations[actualQuestionIndex];
                  const isAnswered = answered[actualQuestionIndex];
                  const showNote = showNotes[actualQuestionIndex];
                  const questionNote = notes[actualQuestionIndex] || '';

                  return (
                    <Card key={actualQuestionIndex} className="border-2 border-gray-200">
                      <CardHeader>
                        <CardTitle className="text-lg">
                          Question {actualQuestionIndex + 1}: {question.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {question.options.map((option, optionIndex) => (
                            <Button
                              key={optionIndex}
                              variant={selectedAnswer === optionIndex ? "default" : "outline"}
                              className={`w-full justify-start text-left h-auto p-4 ${
                                isAnswered && optionIndex === question.correctAnswer
                                  ? "border-green-500 bg-green-50"
                                  : isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                  ? "border-red-500 bg-red-50"
                                  : ""
                              }`}
                              onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                              disabled={isAnswered}
                            >
                              <div className="flex items-center gap-3">
                                {isAnswered && optionIndex === question.correctAnswer && (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                )}
                                {isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer && (
                                  <XCircle className="w-5 h-5 text-red-600" />
                                )}
                                <span className="font-medium mr-2">{String.fromCharCode(65 + optionIndex)}.</span>
                                <span>{option}</span>
                              </div>
                            </Button>
                          ))}
                        </div>

                        {showExplanation && (
                          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                            <h3 className="font-semibold text-blue-800 mb-2">Explanation:</h3>
                            <p className="text-blue-700">{question.explanation}</p>
                          </div>
                        )}

                        {/* Notes Section */}
                        <div className="mt-4">
                          {!showNote ? (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleNotesToggle(questionIndex)}
                              className="flex items-center gap-2"
                            >
                              <Edit3 className="w-4 h-4" />
                              {questionNotes[actualQuestionIndex] ? 'Edit Notes' : 'Quick Notes'}
                            </Button>
                          ) : (
                            <div className="space-y-3">
                              <Textarea
                                placeholder="Write your notes for this question..."
                                value={questionNote}
                                onChange={(e) => handleNotesChange(questionIndex, e.target.value)}
                                className="min-h-[100px]"
                              />
                              <div className="flex gap-2">
                                <Button
                                  size="sm"
                                  onClick={() => handleSaveNotes(questionIndex)}
                                  className="flex items-center gap-2"
                                >
                                  <Save className="w-4 h-4" />
                                  Save Notes
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => handleCancelNotes(questionIndex)}
                                  className="flex items-center gap-2"
                                >
                                  <X className="w-4 h-4" />
                                  Cancel
                                </Button>
                              </div>
                            </div>
                          )}
                          
                          {questionNotes[actualQuestionIndex] && !showNote && (
                            <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                              <h4 className="font-medium text-gray-800 mb-2">Your Notes:</h4>
                              <p className="text-gray-700 text-sm">{questionNotes[actualQuestionIndex]}</p>
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 mb-8">
                <Button 
                  className='bg-blue-600 px-7 color-white hover:bg-blue-700'
                  variant="outline"
                  onClick={handlePreviousPanel}
                  disabled={currentPanel === 0}
                >
                  Previous 
                </Button>
                
                <Button 
                  className='bg-blue-600 px-7 py-2 color-white hover:bg-blue-700'
                  variant="outline"
                  onClick={handleNextPanel}
                  disabled={currentPanel === totalPanels - 1}
                >
                  Next 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeComponent; 