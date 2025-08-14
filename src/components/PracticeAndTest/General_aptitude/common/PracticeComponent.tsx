import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle, Eye, BookOpen, Users, Navigation, Grid3X3, Puzzle, Edit3, Save, X, Calculator, MessageSquare, Trophy, Clock, Target, BarChart3, Menu, HelpCircle } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import ExplanationModal from './ExplanationModal';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  passage?: string; // optional: used for reading comprehension
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
  const { topicId } = useParams<{ topicId: string }>();
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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [explanationModalOpen, setExplanationModalOpen] = useState(false);
  const [selectedQuestionForExplanation, setSelectedQuestionForExplanation] = useState<Question | null>(null);

  const questionsPerPanel = 5;
  const maxQuestions = 30; // Maximum 30 questions

  // Enhanced Fisher-Yates shuffle algorithm with better randomization
  const shuffleArray = (array: Question[]): Question[] => {
    const shuffled = [...array];
    // Multiple passes for better randomization
    for (let pass = 0; pass < 3; pass++) {
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
    }
    return shuffled;
  };

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const questions = getQuestions(topicId || '');
    if (questions.length > 0) {
      let processedQuestions = questions;
      
      // For reading comprehension, create traditional format with shared passages
      if ((topicId || '') === 'reading-comprehension') {
        console.log('Processing reading comprehension questions:', questions.length);
        
        // Group questions by their passages (questions without passages will be grouped with the previous passage)
        const groupedQuestions: { passage: string; questions: any[] }[] = [];
        let currentGroup: { passage: string; questions: any[] } | null = null;
        
        questions.forEach(question => {
          if (question.passage) {
            // Start a new group
            if (currentGroup) {
              groupedQuestions.push(currentGroup);
            }
            currentGroup = {
              passage: question.passage,
              questions: [question]
            };
          } else if (currentGroup) {
            // Add to current group
            currentGroup.questions.push({
              ...question,
              passage: currentGroup.passage
            });
          }
        });
        
        // Add the last group
        if (currentGroup) {
          groupedQuestions.push(currentGroup);
        }
        
        console.log('Grouped questions:', groupedQuestions.length, 'groups');
        
        // Shuffle the groups and flatten
        const shuffledGroups = [...groupedQuestions].sort(() => Math.random() - 0.5);
        processedQuestions = [];
        
        shuffledGroups.forEach(group => {
          // Take up to 5 questions per group
          const limitedQuestions = group.questions.slice(0, 5);
          processedQuestions.push(...limitedQuestions);
        });
        
        console.log('Processed questions:', processedQuestions.length);
        console.log('First question passage:', processedQuestions[0]?.passage ? 'Has passage' : 'No passage');
      }
      
      // Take only the maximum number of questions
      const finalQuestions = processedQuestions.slice(0, maxQuestions);
      
      setShuffledQuestions(finalQuestions);
      setAnswered({});
      setSelectedAnswers({});
      setShowExplanations({});
      setShowNotes({});
      setNotes({});
      setScore(0);
      setCurrentPanel(0);
    }
  }, [topicId, getQuestions]);

  const questions = shuffledQuestions;

  // Check for notification question ID and auto-open explanation modal
  useEffect(() => {
    const notificationQuestionId = localStorage.getItem('notificationQuestionId');
    const notificationQuestionText = localStorage.getItem('notificationQuestionText');
    const notificationRelatedItemId = localStorage.getItem('notificationRelatedItemId');
    const notificationType = localStorage.getItem('notificationType');
    const notificationRelatedItemType = localStorage.getItem('notificationRelatedItemType');
    
    if (notificationQuestionId && questions.length > 0) {
      console.log('Found notification question ID:', notificationQuestionId);
      console.log('Notification type:', notificationType);
      console.log('Related item ID:', notificationRelatedItemId);
      
      // Find the question with this ID
      const question = questions.find(q => q.id.toString() === notificationQuestionId);
      
      if (question) {
        console.log('Found question for notification:', question.question);
        
        // Set the selected question and open the modal
        setSelectedQuestionForExplanation(question);
        setExplanationModalOpen(true);
        
        // Store additional notification data for the modal to use
        localStorage.setItem('modalNotificationData', JSON.stringify({
          relatedItemId: notificationRelatedItemId,
          type: notificationType,
          relatedItemType: notificationRelatedItemType
        }));
        
        // Clear the localStorage
        localStorage.removeItem('notificationQuestionId');
        localStorage.removeItem('notificationQuestionText');
        localStorage.removeItem('notificationRelatedItemId');
        localStorage.removeItem('notificationType');
        localStorage.removeItem('notificationRelatedItemType');
        
        // Show a toast to indicate the modal was opened
        setTimeout(() => {
          toast.success('Opening explanation for the question you were notified about!');
        }, 500);
      } else {
        console.log('Question not found for ID:', notificationQuestionId);
        // Clear the localStorage even if question not found
        localStorage.removeItem('notificationQuestionId');
        localStorage.removeItem('notificationQuestionText');
        localStorage.removeItem('notificationRelatedItemId');
        localStorage.removeItem('notificationType');
        localStorage.removeItem('notificationRelatedItemType');
      }
    }
  }, [questions]);
  const totalQuestions = questions.length;
  const totalPanels = Math.ceil(totalQuestions / questionsPerPanel);
  const isReadingComprehension = (topicId || '') === 'reading-comprehension';

  const getCurrentPanelQuestions = () => {
    if (isReadingComprehension) {
      // For reading comprehension, each panel should have 5 questions
      const startIndex = currentPanel * questionsPerPanel;
      const endIndex = Math.min(startIndex + questionsPerPanel, totalQuestions);
      const panelQuestions = questions.slice(startIndex, endIndex);
      
      console.log('Current panel questions:', panelQuestions.length);
      console.log('First question in panel:', panelQuestions[0]?.passage ? 'Has passage' : 'No passage');
      
      return panelQuestions;
    } else {
      // For other topics, use the standard panel logic
      const startIndex = currentPanel * questionsPerPanel;
      const endIndex = Math.min(startIndex + questionsPerPanel, totalQuestions);
      return questions.slice(startIndex, endIndex);
    }
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
      // Ensure scroll to top works properly
      setTimeout(() => {
        scrollToTop();
      }, 100);
    }
  };

  const handlePreviousPanel = () => {
    if (currentPanel > 0) {
      setCurrentPanel(currentPanel - 1);
      // Ensure scroll to top works properly
      setTimeout(() => {
        scrollToTop();
      }, 100);
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

  const handleOpenExplanationModal = (question: Question) => {
    setSelectedQuestionForExplanation(question);
    setExplanationModalOpen(true);
  };

  const handleCloseExplanationModal = () => {
    setExplanationModalOpen(false);
    setSelectedQuestionForExplanation(null);
  };

  // Calculate progress based on answered questions out of total questions
  const answeredCount = Object.keys(answered).filter(key => answered[parseInt(key)]).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const accuracy = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  if (questions.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700">Loading Practice Questions...</h2>
          <p className="text-gray-500 mt-2">Please wait while we prepare your practice session</p>
        </div>
      </div>
    );
  }

  const currentPanelQuestions = getCurrentPanelQuestions();

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 overflow-hidden flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700 shadow-lg z-20 flex-shrink-0">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4">
            {/* Left Side - Back Button */}
            <div className="w-24 flex-shrink-0">
              <Button
                variant="ghost"
                onClick={() => navigate(backPath)}
                className="flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 p-2 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            </div>
            
            {/* Center - Heading */}
            <div className="flex-1 flex items-center justify-center space-x-3 px-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white flex-shrink-0 shadow-md">
                {sectionIcon}
              </div>
              <div className="text-center">
                <h1 className="text-base sm:text-lg font-bold text-white">{getTopicTitle(topicId || '')} Practice</h1>
                <p className="text-xs sm:text-sm text-gray-400">Panel {currentPanel + 1} of {totalPanels}</p>
                <p className="text-xs text-blue-400 lg:hidden">Tap "Topics" to change practice area</p>
              </div>
            </div>
            
            {/* Right Side - Menu Toggle and Score */}
            <div className="w-24 flex-shrink-0 flex items-center justify-end space-x-2">
              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="lg:hidden flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gray-700 p-2 transition-all duration-200"
              >
                <Menu className="w-5 h-5" />
                <span className="hidden sm:inline">Topics</span>
              </Button>
              
              <div className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 shadow-md">
                <Trophy className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-sm font-medium text-gray-200 hidden sm:inline">Score: {score}/{totalQuestions}</span>
                <span className="text-sm font-medium text-gray-200 sm:hidden">{score}/{totalQuestions}</span>
                <Badge variant="secondary" className="ml-2 text-xs bg-blue-600 text-white">
                  {accuracy}%
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsSidebarOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl z-50 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-4 border-b border-gray-700 bg-gray-800">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold text-white">Practice Topics</h2>
                <Button
                  variant="ghost"
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-1 text-white hover:bg-gray-700"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <div className="p-4 space-y-4">
              {/* Start Practice Button */}
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 transform hover:scale-105">
                <span className="text-lg">▶</span>
                <span>Start Practice</span>
              </Button>
              
              {/* Practice Categories */}
              <div className="space-y-3">
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">PRACTICE TOPICS</h3>
                {categories.map((category) => (
                  <Card 
                    key={category.id}
                    className={`cursor-pointer transition-all duration-200 hover:shadow-lg border ${
                      topicId === category.id 
                        ? 'border-blue-400 bg-gradient-to-r from-blue-600/30 to-blue-700/30 shadow-lg' 
                        : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 bg-gray-800/30'
                    }`}
                    onClick={() => {
                      handleCategoryClick(category.id);
                      setIsSidebarOpen(false);
                    }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCategoryClick(category.id);
                        setIsSidebarOpen(false);
                      }
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-md flex-shrink-0 ${
                          topicId === category.id 
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm' 
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors'
                        }`}>
                          {category.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-medium text-sm ${
                            topicId === category.id ? 'text-blue-200' : 'text-gray-300'
                          }`}>
                            {category.name}
                          </h3>
                          <p className={`text-xs mt-1 line-clamp-2 ${
                            topicId === category.id ? 'text-blue-100' : 'text-gray-400'
                          }`}>
                            {category.description}
                          </p>
                        </div>
                        {topicId === category.id && (
                          <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 shadow-sm"></div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Sidebar - Dark Theme Enhanced */}
        <div className="hidden lg:block w-64 bg-gradient-to-br from-gray-900 to-gray-800 border-b lg:border-b-0 lg:border-r border-gray-700 p-4 space-y-4 overflow-y-auto z-10">
          <div className="space-y-4">
            {/* Header Section */}
            <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-700">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white flex-shrink-0 shadow-lg">
                {sectionIcon}
              </div>
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-bold text-white">{sectionName}</h2>
                <p className="text-sm text-gray-400">Choose a topic to practice</p>
              </div>
            </div>
            
            {/* Start Practice Button */}
            <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-2 shadow-lg transition-all duration-300 transform hover:scale-105">
              <span className="text-lg">▶</span>
              <span>Start Practice</span>
            </Button>
            
            {/* Practice Categories */}
            <div className="space-y-3">
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">PRACTICE TOPICS</h3>
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg border ${
                    topicId === category.id 
                      ? 'border-blue-400 bg-gradient-to-r from-blue-600/30 to-blue-700/30 shadow-lg' 
                      : 'border-gray-700 hover:border-gray-600 hover:bg-gray-800/50 bg-gray-800/30'
                  }`}
                  onClick={() => handleCategoryClick(category.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleCategoryClick(category.id);
                    }
                  }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-md flex-shrink-0 ${
                        topicId === category.id 
                          ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-sm' 
                          : 'bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors'
                      }`}>
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-medium text-sm ${
                          topicId === category.id ? 'text-blue-200' : 'text-gray-300'
                        }`}>
                          {category.name}
                        </h3>
                        <p className={`text-xs mt-1 line-clamp-2 ${
                          topicId === category.id ? 'text-blue-100' : 'text-gray-400'
                        }`}>
                          {category.description}
                        </p>
                      </div>
                      {topicId === category.id && (
                        <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0 shadow-sm"></div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Enhanced */}
        <div className="flex-1 p-2 sm:p-4 md:p-6 lg:p-8 min-w-0 overflow-y-auto" id="practice-content">
          <div className="w-full max-w-4xl mx-auto">
            {/* Progress Section */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 shadow-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                <h3 className="text-base sm:text-lg font-semibold text-white">Progress</h3>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-1 sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-300">Panel {currentPanel + 1} of {totalPanels}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Target className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-300">{answeredCount}/{totalQuestions} Questions ({progress}% Complete)</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="h-2 sm:h-3 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs font-semibold text-white drop-shadow-lg">{progress}%</span>
                </div>
              </div>
            </div>


            {/* Shared Passage Display (for reading comprehension) */}
            {isReadingComprehension && currentPanelQuestions.length > 0 && (
              <div className="mb-4 sm:mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-3 sm:p-4 md:p-6 rounded-xl">
                <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                  <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                  <h3 className="font-semibold text-green-800 text-base sm:text-lg">Reading Passage</h3>
                </div>
                <div className="bg-white p-3 sm:p-4 rounded-lg border border-green-200">
                  <p className="whitespace-pre-line text-gray-800 leading-relaxed text-sm sm:text-base">
                    {currentPanelQuestions[0].passage || 'Passage not available'}
                  </p>
                </div>
                <div className="mt-2 sm:mt-3 text-xs sm:text-sm text-green-700">
                  <strong>Note:</strong> This panel contains {currentPanelQuestions.length} questions related to the above passage.
                </div>
              </div>
            )}

            {/* Questions Stack - Enhanced */}
            <div className="space-y-4 sm:space-y-6">
              {currentPanelQuestions.map((question, questionIndex) => {
                const actualQuestionIndex = currentPanel * questionsPerPanel + questionIndex;
                const selectedAnswer = selectedAnswers[actualQuestionIndex];
                const showExplanation = showExplanations[actualQuestionIndex];
                const isAnswered = answered[actualQuestionIndex];
                const showNote = showNotes[actualQuestionIndex];
                const questionNote = notes[actualQuestionIndex] || '';

                return (
                  <Card key={actualQuestionIndex} className="border-2 border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-200 p-3 sm:p-4 md:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                        <CardTitle className="text-base sm:text-lg text-gray-900">
                          <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-bold mr-2 sm:mr-3 flex-shrink-0">
                            {actualQuestionIndex + 1}
                          </span>
                          <span className="break-words">{question.question}</span>
                        </CardTitle>
                        {isAnswered && (
                          <Badge variant={selectedAnswer === question.correctAnswer ? "success" : "destructive"} className="ml-0 sm:ml-2 text-xs">
                            {selectedAnswer === question.correctAnswer ? "Correct" : "Incorrect"}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div className="space-y-3 sm:space-y-5">
                        {question.options.map((option, optionIndex) => (
                          <Button
                            key={optionIndex}
                            variant="outline"
                            className={`w-full justify-start text-left h-auto p-3 sm:p-4 md:p-6 rounded-xl border-2 transition-all duration-300 ${
                              isAnswered && optionIndex === question.correctAnswer
                                ? "border-green-500 bg-green-100 text-green-900 shadow-lg transform scale-105"
                                : isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                ? "border-red-500 bg-red-100 text-red-900 shadow-lg transform scale-105"
                                : selectedAnswer === optionIndex && !isAnswered
                                ? "border-blue-500 bg-blue-100 text-blue-900 shadow-lg transform scale-105"
                                : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900"
                            }`}
                            onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                            disabled={isAnswered}
                          >
                            <div className="flex items-center gap-2 sm:gap-4 w-full">
                              <div className={`flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full border-2 font-bold text-xs sm:text-sm transition-all duration-300 ${
                                isAnswered && optionIndex === question.correctAnswer
                                  ? "bg-green-600 border-green-600 text-white shadow-lg"
                                  : isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                  ? "bg-red-600 border-red-600 text-white shadow-lg"
                                  : selectedAnswer === optionIndex && !isAnswered
                                  ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                                  : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
                              }`}>
                                {String.fromCharCode(65 + optionIndex)}
                              </div>
                              <span className="text-sm sm:text-base font-medium flex-1 break-words">{option}</span>
                              {isAnswered && optionIndex === question.correctAnswer && (
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                              )}
                              {isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer && (
                                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                              )}
                            </div>
                          </Button>
                        ))}
                      </div>

                      {/* Explanation Section - Enhanced */}
                      {showExplanation && (
                        <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                          <div className="flex items-center space-x-2 mb-2 sm:mb-3">
                            <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                            <h3 className="font-semibold text-blue-800 text-sm sm:text-base">Explanation</h3>
                          </div>
                          <p className="text-blue-700 leading-relaxed text-sm sm:text-base">{question.explanation}</p>
                        </div>
                      )}

                      {/* Notes and Explanation Section - Enhanced */}
                      <div className="mt-4 sm:mt-6 space-y-3">
                        {!showNote ? (
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleNotesToggle(questionIndex)}
                              className="flex items-center gap-2 sm:gap-2 hover:bg-gray-50 text-sm sm:text-sm p-3 sm:p-2 flex-1 sm:flex-none justify-center sm:justify-start"
                            >
                              <Edit3 className="w-4 h-4 sm:w-4 sm:h-4" />
                              {questionNotes[actualQuestionIndex] ? 'Edit Notes' : 'Add Notes'}
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleOpenExplanationModal(question)}
                              className="flex items-center gap-2 sm:gap-2 hover:bg-purple-50 text-sm sm:text-sm p-3 sm:p-2 flex-1 sm:flex-none justify-center sm:justify-start border-purple-300 text-purple-700"
                            >
                              <HelpCircle className="w-4 h-4 sm:w-4 sm:h-4" />
                              Ask for Explanation
                            </Button>
                          </div>
                        ) : (
                          <div className="space-y-3 sm:space-y-4 p-4 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
                            <div className="flex items-center space-x-2 mb-3 sm:mb-3">
                              <Edit3 className="w-4 h-4 sm:w-4 sm:h-4 text-gray-600" />
                              <h4 className="font-medium text-gray-800 text-base sm:text-base">Your Notes</h4>
                            </div>
                            <Textarea
                              placeholder="Write your notes for this question..."
                              value={questionNote}
                              onChange={(e) => handleNotesChange(questionIndex, e.target.value)}
                              className="min-h-[100px] sm:min-h-[100px] border-gray-300 focus:border-blue-500 text-sm p-3"
                            />
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
                              <Button
                                size="sm"
                                onClick={() => handleSaveNotes(questionIndex)}
                                className="flex items-center gap-2 sm:gap-2 bg-blue-500 hover:bg-blue-600 text-sm sm:text-sm p-3 sm:py-2 flex-1 sm:flex-none justify-center"
                              >
                                <Save className="w-4 h-4 sm:w-4 sm:h-4" />
                                Save Notes
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleCancelNotes(questionIndex)}
                                className="flex items-center gap-2 sm:gap-2 text-sm sm:text-sm p-3 sm:py-2 flex-1 sm:flex-none justify-center border-gray-300"
                              >
                                <X className="w-4 h-4 sm:w-4 sm:h-4" />
                                Cancel
                              </Button>
                            </div>
                          </div>
                        )}
                        
                        {questionNotes[actualQuestionIndex] && !showNote && (
                          <div className="mt-4 sm:mt-4 p-4 sm:p-4 bg-yellow-50 rounded-xl border border-yellow-200">
                            <div className="flex items-center space-x-2 mb-3">
                              <BookOpen className="w-4 h-4 sm:w-4 sm:h-4 text-yellow-600" />
                              <h4 className="font-medium text-yellow-800 text-base sm:text-base">Your Notes</h4>
                            </div>
                            <p className="text-yellow-700 text-sm sm:text-sm leading-relaxed">{questionNotes[actualQuestionIndex]}</p>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Navigation Buttons - Enhanced */}
            <div className="flex justify-between mt-6 sm:mt-8 mb-6 sm:mb-8">
              <Button 
                variant="outline"
                onClick={handlePreviousPanel}
                disabled={currentPanel === 0}
                className="flex items-center gap-2 sm:gap-2 px-4 sm:px-4 md:px-6 py-3 sm:py-3 bg-white hover:bg-gray-50 border-gray-300 text-sm sm:text-sm min-w-[100px] sm:min-w-auto"
              >
                <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </Button>
              
              <Button 
                onClick={handleNextPanel}
                disabled={currentPanel === totalPanels - 1}
                className="flex items-center gap-2 sm:gap-2 px-4 sm:px-4 md:px-6 py-3 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg text-sm sm:text-sm min-w-[100px] sm:min-w-auto"
              >
                <span className="hidden sm:inline">Next Page</span>
                <span className="sm:hidden">Next</span>
                <ArrowLeft className="w-4 h-4 sm:w-4 sm:h-4 rotate-180" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Explanation Modal */}
      {selectedQuestionForExplanation && (
        <ExplanationModal
          isOpen={explanationModalOpen}
          onClose={handleCloseExplanationModal}
          questionId={selectedQuestionForExplanation.id.toString()}
          questionText={selectedQuestionForExplanation.question}
          topicName={getTopicTitle(topicId || '')}
        />
      )}
    </div>
  );
};

export default PracticeComponent; 