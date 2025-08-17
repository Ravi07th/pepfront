import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, CheckCircle, XCircle, Eye, BookOpen, Users, Navigation, Grid3X3, Puzzle, Edit3, Save, X, Calculator, MessageSquare, Trophy, Clock, Target, BarChart3, Menu, HelpCircle, RefreshCcw, Play } from 'lucide-react';
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
  mainSectionPath?: string; // New prop to control where back button goes
}

const PracticeComponent: React.FC<PracticeComponentProps> = ({
  sectionName,
  sectionIcon,
  categories,
  getQuestions,
  getTopicTitle,
  navigatePath,
  backPath,
  mainSectionPath
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
  const [sessionTimestamp, setSessionTimestamp] = useState<number>(Date.now());

  const questionsPerPanel = 5;
  const maxQuestions = 30; // Maximum 30 questions

  // Enhanced Fisher-Yates shuffle algorithm with better randomization
  const shuffleArray = (array: any[]): any[] => {
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
    try {
      // Try multiple scroll targets for better compatibility
      const targets = [
        document.getElementById('practice-content'),
        document.documentElement,
        document.body
      ];
      
      targets.forEach(target => {
        if (target && target.scrollTo) {
          target.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      
      // Fallback for older browsers
      if (window.scrollTo) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      
      // Additional fallback for very old browsers
      if (window.scrollTo) {
        window.scrollTo(0, 0);
      }
    } catch (error) {
      console.warn('Scroll to top failed:', error);
      // Final fallback
      window.scrollTo(0, 0);
    }
  };

  // Generate a stable session key for the current topic
  const getSessionKey = (topic: string) => `practice_session_${topic}`;

  useEffect(() => {
    const questions = getQuestions(topicId || '');
    if (questions.length > 0) {
      const sessionKey = getSessionKey(topicId || '');
      const existingSession = localStorage.getItem(sessionKey);
      
      if (existingSession) {
        // Restore existing session
        try {
          const session = JSON.parse(existingSession);
          // Check if session is still valid (not too old - 12 hours)
          const sessionAge = Date.now() - session.timestamp;
          const maxSessionAge = 12 * 60 * 60 * 1000; // 12 hours in milliseconds
          
          if (sessionAge < maxSessionAge && session.questions && session.questions.length > 0) {
            setShuffledQuestions(session.questions);
            setSelectedAnswers(session.selectedAnswers || {});
            setShowExplanations(session.showExplanations || {});
            setAnswered(session.answered || {});
            setShowNotes(session.showNotes || {});
            setNotes(session.notes || {});
            setScore(session.score || 0);
            setCurrentPanel(session.currentPanel || 0);
            setSessionTimestamp(session.timestamp);
            console.log('Restored existing session for topic:', topicId);
          } else {
            console.log('Session expired or invalid, creating new one');
            createNewSession(questions);
          }
        } catch (error) {
          console.warn('Failed to restore session, creating new one:', error);
          createNewSession(questions);
        }
      } else {
        // Create new session
        createNewSession(questions);
      }
    }
  }, [topicId, getQuestions]);

  const createNewSession = (questions: Question[]) => {
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
        const shuffledGroups = shuffleArray(groupedQuestions);
        processedQuestions = [];
        
        shuffledGroups.forEach(group => {
          // Take up to 5 questions per group
          const limitedQuestions = group.questions.slice(0, 5);
          processedQuestions.push(...limitedQuestions);
        });
        
        console.log('Processed questions:', processedQuestions.length);
        console.log('First question passage:', processedQuestions[0]?.passage ? 'Has passage' : 'No passage');
      } else {
      // For all other topics, shuffle the questions only once for new sessions
        processedQuestions = shuffleArray(questions);
        
        // Also shuffle the options within each question for better randomization
        processedQuestions = processedQuestions.map(question => {
          const shuffledOptions = shuffleArray(question.options);
          const correctAnswerText = question.options[question.correctAnswer];
          const newCorrectAnswerIndex = shuffledOptions.indexOf(correctAnswerText);
          
          return {
            ...question,
            options: shuffledOptions,
            correctAnswer: newCorrectAnswerIndex
          };
        });
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
    setSessionTimestamp(Date.now());
    
    // Save new session to localStorage
    const sessionKey = getSessionKey(topicId || '');
    const session = {
      questions: finalQuestions,
      selectedAnswers: {},
      showExplanations: {},
      answered: {},
      showNotes: {},
      notes: {},
      score: 0,
      currentPanel: 0,
      timestamp: Date.now()
    };
    localStorage.setItem(sessionKey, JSON.stringify(session));
  };

  // Add function to reset session and get new questions
  const resetSession = () => {
    const questions = getQuestions(topicId || '');
    if (questions.length > 0) {
      createNewSession(questions);
      toast.success('Practice session reset! New questions loaded.');
    }
  };

  // Function to clear session when navigating back
  const handleBackNavigation = () => {
    // Clear the current session when going back
    const sessionKey = getSessionKey(topicId || '');
    localStorage.removeItem(sessionKey);
    
    // Navigate to the main practice section instead of the exam section
    // This prevents users from accessing the exam section again via back button
    if (mainSectionPath) {
      navigate(mainSectionPath);
    } else {
      // Fallback: navigate to the parent directory of backPath
      const mainPracticePath = backPath.split('/').slice(0, -1).join('/');
      navigate(mainPracticePath || '/');
    }
  };

  // Save session state whenever it changes
  useEffect(() => {
    if (shuffledQuestions.length > 0) {
      const sessionKey = getSessionKey(topicId || '');
      const session = {
        questions: shuffledQuestions,
        selectedAnswers,
        showExplanations,
        answered,
        showNotes,
        notes,
        score,
        currentPanel,
        timestamp: Date.now()
      };
      localStorage.setItem(sessionKey, JSON.stringify(session));
    }
  }, [shuffledQuestions, selectedAnswers, showExplanations, answered, showNotes, notes, score, currentPanel, topicId]);

  // Scroll to top when panel changes
  useEffect(() => {
    scrollToTop();
  }, [currentPanel]);

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

  const handleNotesToggle = (questionIndex: number) => {
    setShowNotes({
      ...showNotes,
      [questionIndex]: !showNotes[questionIndex]
    });
  };

  const handleNotesChange = (questionIndex: number, value: string) => {
    setNotes({
      ...notes,
      [questionIndex]: value
    });
  };

  const handleSaveNotes = (questionIndex: number) => {
    setQuestionNotes({
      ...questionNotes,
      [questionIndex]: notes[questionIndex] || ''
    });
    setShowNotes({
      ...showNotes,
      [questionIndex]: false
    });
    toast.success('Notes saved successfully!');
  };

  const handleCancelNotes = (questionIndex: number) => {
    setShowNotes({
      ...showNotes,
      [questionIndex]: false
    });
    setNotes({
      ...notes,
      [questionIndex]: questionNotes[questionIndex] || ''
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

  const handleCategoryClick = (categoryId: string) => {
    navigate(`${navigatePath}/${categoryId}`);
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

  const answeredCount = Object.keys(answered).length;
  const progress = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0;
  const accuracy = answeredCount > 0 ? Math.round((score / answeredCount) * 100) : 0;

  // Don't show loading screen if we're in the middle of restoring a session
  if (questions.length === 0 && !localStorage.getItem(getSessionKey(topicId || ''))) {
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
          <div className="flex items-center justify-between py-2 sm:py-3 md:py-4">
            {/* Left Side - Back Button */}
            <div className="w-fit flex-shrink-0">
              <Button
                variant="ghost"
                 onClick={handleBackNavigation}
                 className="flex items-center gap-1 sm:gap-2 text-yellow-200 hover:text-black p-1 sm:p-2 border border-yellow-500 rounded-lg hover:bg-yellow-100 transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                 <span className="hidden sm:inline text-xs sm:text-sm">Back</span>
              </Button>
            </div>
            
            {/* Center - Heading */}
            <div className=" flex flex-wrap items-center space-x-2 justify-center mr-10">
              <div className="hidden xl:block md:block p-1 sm:p-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white flex-shrink-0 shadow-md">
                {sectionIcon}
              </div>
              <div className="text-center">
                <h1 className="text-sm sm:text-base md:text-lg font-bold text-white">{getTopicTitle(topicId || '')}</h1>
                {/* <p className="text-xs sm:text-sm text-gray-400">Panel {currentPanel + 1} of {totalPanels}</p> */}
                {/* <p className="text-xs text-blue-400 lg:hidden">Tap "Topics" to change practice area</p>
                <div className="flex items-center justify-center space-x-1 mt-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400">Randomized Questions</span>
                </div> */}
              </div>
            </div>
            
            {/* Right Side - Menu Toggle and Score */}
            <div className="w-20 sm:w-24 flex-shrink-0 flex items-center justify-end space-x-1 sm:space-x-2">
              <div className="flex items-center space-x-1 sm:space-x-2 bg-gray-800 border border-gray-600 rounded-lg px-2 sm:px-3 py-1 sm:py-2 shadow-md">
                <Trophy className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-400 flex-shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-gray-200 hidden sm:inline">Score: {score}/{totalQuestions}</span>
                <span className="text-xs sm:text-sm font-medium text-gray-200 sm:hidden">{score}/{totalQuestions}</span>
                <Badge variant="secondary" className="ml-1 sm:ml-2 text-xs bg-blue-600 text-white">
                  {accuracy}%
                </Badge>
              </div>
              {/* Enhanced Sidebar Toggle Button */}
              <Button
                variant="ghost"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="group lg:hidden flex items-center gap-2 text-gray-300 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-blue-600/20 p-2 sm:p-3 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-600/50 hover:border-purple-500/50"
              >
                <div className="relative">
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
                {/* <span className="hidden sm:inline text-xs sm:text-sm font-medium">Topics</span> */}
                {/* <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div> */}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50" onClick={() => setIsSidebarOpen(false)}>
          <div className="fixed left-0 top-0 h-full w-80 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-md shadow-2xl z-50 overflow-y-auto border-r border-gray-700/50" onClick={(e) => e.stopPropagation()}>
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            </div>
            
            <div className="relative p-6 space-y-6">
              {/* Enhanced Header */}
              <div className="flex items-center justify-between pb-4 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-xl text-white shadow-lg">
                    {sectionIcon}
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Practice Topics</h2>
                    <p className="text-xs text-gray-400">Choose your area</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  onClick={() => setIsSidebarOpen(false)}
                  className="p-2 text-white hover:bg-gray-700/50 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
              
              <div className="space-y-4">
                {/* Enhanced Action Buttons */}
                <div className="space-y-3">
                  {/* Start Practice Button */}
                  {/* <Button className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-3 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/25 border-0 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    <span className="text-xl animate-pulse">▶</span>
                    <span className="font-semibold">Start Practice</span>
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                  </Button> */}
                  
                  {/* Reset Session Button */}
                  <Button 
                    variant="outline" 
                    onClick={resetSession}
                    className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-3 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/25 border-0 relative overflow-hidden"
                    // "group w-full border-2 border-gray-600/50 text-gray-700 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 py-3 flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
                  >
                    <div className='flex items-center justify-center ml-5 animate-pulse group-hover:rotate-90'>
                      <RefreshCcw />
                    </div>
                    <span className="font-medium">Reset Session</span>
                    {/* <span className="text-xs text-gray-500 group-hover:text-purple-400">New Questions</span> */}
                    <Badge variant="success" className="ml-1 sm:ml-2 text-xs bg-green-600 text-white">
                      New
                    </Badge>
                  </Button>
                </div>
                
                {/* Enhanced Practice Categories */}
              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Card 
                    key={category.id}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 backdrop-blur-sm ${
                      topicId === category.id 
                        ? 'text-white border-purple-500/80 bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border-gray-700/50 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/80 bg-gray-800/40 hover:scale-105'
                    } transform transition-all duration-300`}
                    onClick={() => handleCategoryClick(category.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCategoryClick(category.id);
                      }
                    }}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`relative p-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                          topicId === category.id 
                            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg scale-110' 
                            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white group-hover:scale-110'
                        }`}>
                          {category.icon}
                          {/* Glow effect for active category */}
                          {topicId === category.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-md opacity-50 animate-pulse"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                            topicId === category.id ? 'text-blue-200' : 'text-gray-300 group-hover:text-purple-200'
                          }`}>
                            {category.name}
                          </h3>
                          <p className={`text-xs mt-2 line-clamp-2 transition-colors duration-300 ${
                            topicId === category.id ? 'text-blue-100' : 'text-gray-400 group-hover:text-purple-100'
                          }`}>
                            {category.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {topicId === category.id && (
                            <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 shadow-lg animate-pulse"></div>
                          )}
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            topicId === category.id ? 'bg-blue-400' : 'bg-gray-600 group-hover:bg-purple-400'
                          }`}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
                
                {/* Enhanced Footer */}
                <div className="pt-6 border-t border-gray-700/50">
                  <div className="text-center space-y-3">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-xs text-green-400 font-medium">Session Active</span>
                    </div>
                    <p className="text-xs text-gray-500 font-medium">
                      Practice makes perfect! 🚀
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Left Sidebar - Enhanced Dark Theme with Glassmorphism */}
        <div className="hidden lg:block w-72 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/95 backdrop-blur-sm border-r border-gray-700/50 shadow-2xl overflow-hidden z-10 relative">
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          </div>
          
          <div className="relative p-6 space-y-6 overflow-y-auto h-full">
            {/* Enhanced Header Section */}
            <div className="text-center border-b border-gray-700/50">
              <div className="relative mb-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-2xl text-white flex-shrink-0 shadow-2xl mx-auto w-16 h-16 flex items-center justify-center">
                  {sectionIcon}
                </div>
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-30 animate-pulse"></div>
              </div>
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-white bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  {sectionName}
                </h2>
                <p className="text-sm text-gray-400 font-medium">Choose your practice journey</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Live Practice</span>
                </div>
              </div>
            </div>
            
            {/* Enhanced Action Buttons */}
            <div className="space-y-4">
              {/* Start Practice Button */}
              {/* <Button className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-3 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/25 border-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Play />
                <span className="font-semibold">Practice with Solution</span>
                <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
              </Button> */}
              
              {/* Reset Session Button */}
              <Button 
                variant="outline" 
                onClick={resetSession}
                className="group w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-semibold py-4 flex items-center justify-center space-x-3 shadow-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-blue-500/25 border-0 relative overflow-hidden"
                // "group w-full border-2 border-gray-600/50 text-gray-700 hover:text-white hover:border-purple-500/50 hover:bg-purple-500/10 py-3 flex items-center justify-center space-x-3 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm"
              >
                <div className='flex items-center justify-center ml-5 animate-pulse group-hover:rotate-90'>
                  <RefreshCcw />
                </div>
                <span className="font-medium">Reset Session</span>
                {/* <span className="text-xs text-gray-500 group-hover:text-purple-400">New Questions</span> */}
                <Badge variant="success" className="ml-1 sm:ml-2 text-xs bg-green-600 text-white">
                  New
                </Badge>
              </Button>
            </div>
            
            {/* Enhanced Practice Categories */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xs font-bold text-gray-300 uppercase tracking-widest">PRACTICE TOPICS</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>

              <div className="space-y-3">
                {categories.map((category, index) => (
                  <Card 
                    key={category.id}
                    className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl border-2 backdrop-blur-sm ${
                      topicId === category.id 
                        ? 'text-white border-purple-500/80 bg-purple-500/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25'
                        : 'border-gray-700/50 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-gray-800/80 hover:to-gray-700/80 bg-gray-800/40 hover:scale-105'
                    } transform transition-all duration-300`}
                    onClick={() => handleCategoryClick(category.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleCategoryClick(category.id);
                      }
                    }}
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className={`relative p-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                          topicId === category.id 
                            ? 'bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 text-white shadow-lg scale-110' 
                            : 'bg-gradient-to-r from-gray-700 to-gray-600 text-gray-300 group-hover:from-purple-600 group-hover:to-purple-700 group-hover:text-white group-hover:scale-110'
                        }`}>
                          {category.icon}
                          {/* Glow effect for active category */}
                          {topicId === category.id && (
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl blur-md opacity-50 animate-pulse"></div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className={`font-semibold text-sm transition-colors duration-300 ${
                            topicId === category.id ? 'text-blue-200' : 'text-gray-300 group-hover:text-purple-200'
                          }`}>
                            {category.name}
                          </h3>
                          <p className={`text-xs mt-2 line-clamp-2 transition-colors duration-300 ${
                            topicId === category.id ? 'text-blue-100' : 'text-gray-400 group-hover:text-purple-100'
                          }`}>
                            {category.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          {topicId === category.id && (
                            <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0 shadow-lg animate-pulse"></div>
                          )}
                          <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            topicId === category.id ? 'bg-blue-400' : 'bg-gray-600 group-hover:bg-purple-400'
                          }`}></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Enhanced Footer */}
            <div className="pt-6 border-t border-gray-700/50">
              <div className="text-center space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-green-400 font-medium">Session Active</span>
                </div>
                <p className="text-xs text-gray-500 font-medium">
                  Practice makes perfect! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Enhanced */}
        <div className="flex-1 p-2 sm:p-3 md:p-4 lg:p-6 min-w-0 overflow-y-auto" id="practice-content">
          <div className="w-full max-w-4xl mx-auto">
            {/* Progress Section */}
            <div className="sticky -top-16 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-3 sm:p-4 md:p-6 mb-3 sm:mb-4 md:mb-6 shadow-lg border border-gray-700">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                                 <div className="flex items-center space-x-2">
                <h3 className="text-base sm:text-lg font-semibold text-white">Progress</h3>
                   {/* <Button
                     variant="outline"
                     size="sm"
                     onClick={resetSession}
                     className="text-xs px-2 py-1 h-auto border-gray-600 text-gray-300 hover:text-white hover:border-gray-500"
                   >
                     Reset Session
                   </Button> */}
                 </div>

                <div className="flex flex-row gap-5  sm:items-center sm:space-y-0 sm:space-x-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                    <span className="text-xs sm:text-sm text-gray-300">Page {currentPanel + 1} of {totalPanels}</span>
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
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
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
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between space-y-2 sm:space-y-0">
                        <CardTitle className="text-sm sm:text-base md:text-lg text-gray-900 flex-1">
                          <span className="inline-flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full text-xs sm:text-sm font-bold mr-2 sm:mr-3 flex-shrink-0">
                            {actualQuestionIndex + 1}
                          </span>
                          <span className="break-words leading-relaxed">{question.question}</span>
                        </CardTitle>
                        {isAnswered && (
                          <Badge variant={selectedAnswer === question.correctAnswer ? "success" : "destructive"} className="ml-0 sm:ml-2 text-xs flex-shrink-0">
                            {selectedAnswer === question.correctAnswer ? "Correct" : "Incorrect"}
                          </Badge>
                        )}
                      </div>
                    </CardHeader>

                    <CardContent className="p-3 sm:p-4 md:p-6">
                      <div className="space-y-2 sm:space-y-3 md:space-y-5">
                        {question.options.map((option, optionIndex) => (
                          <Button
                            key={optionIndex}
                            variant="outline"
                            className={`w-full justify-start text-left h-auto p-2 sm:p-3 md:p-4 rounded-xl border-2 transition-all duration-300 ${
                              isAnswered && optionIndex === question.correctAnswer
                                ? "border-green-700 bg-green-200  text-green-600 shadow-lg transform scale-105"
                                : isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                ? "border-red-500 bg-red-200 text-red-800 shadow-lg transform scale-105"
                                : selectedAnswer === optionIndex && !isAnswered
                                ? "border-blue-500 bg-blue-100 text-blue-900 shadow-lg transform scale-105"
                                : "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-900"
                            }`}
                            onClick={() => handleAnswerSelect(questionIndex, optionIndex)}
                            disabled={isAnswered}
                          >
                            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full">
                              <div className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 rounded-full border-2 font-bold text-xs sm:text-sm transition-all duration-300 flex-shrink-0 ${
                                isAnswered && optionIndex === question.correctAnswer
                                  ? "bg-green-700 border-green-700 text-white shadow-lg"
                                  : isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer
                                  ? "bg-red-800 border-red-800 text-white shadow-lg"
                                  : selectedAnswer === optionIndex && !isAnswered
                                  ? "bg-blue-600 border-blue-600 text-white shadow-lg"
                                  : "bg-white border-gray-300 text-gray-700 hover:bg-blue-50 hover:border-blue-400"
                              }`}>
                                {String.fromCharCode(65 + optionIndex)}
                              </div>
                              <span className="text-xs sm:text-sm md:text-base font-medium flex-1 break-words leading-relaxed">{option}</span>
                              {isAnswered && optionIndex === question.correctAnswer && (
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 flex-shrink-0" />
                              )}
                              {isAnswered && selectedAnswer === optionIndex && optionIndex !== question.correctAnswer && (
                                <XCircle className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 flex-shrink-0" />
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
             <div className="flex justify-between mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8">
               {/* Left Side - Previous Button */}
              <Button 
                variant="outline"
                onClick={handlePreviousPanel}
                disabled={currentPanel === 0}
                 className="flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-white hover:bg-gray-50 border-gray-300 text-xs sm:text-sm min-w-[80px] sm:min-w-[100px] md:min-w-auto"
              >
                 <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Previous</span>
                <span className="sm:hidden">Prev</span>
              </Button>
              
               {/* Center - Page Indicator */}
               <div className="flex items-center justify-center">
                 <span className="text-sm sm:text-base font-medium text-gray-600">
                   {currentPanel + 1} of {totalPanels}
                 </span>
               </div>
               
               {/* Right Side - Save & Next Button */}
              <Button 
                onClick={handleNextPanel}
                disabled={currentPanel === totalPanels - 1}
                 className="flex items-center gap-2 px-3 sm:px-4 md:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg text-xs sm:text-sm min-w-[80px] sm:min-w-[100px] md:min-w-auto"
              >
                 <span className="hidden sm:inline">Save & Next</span>
                <span className="sm:hidden">Next</span>
                 <ArrowLeft className="w-4 h-4 rotate-180" />
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