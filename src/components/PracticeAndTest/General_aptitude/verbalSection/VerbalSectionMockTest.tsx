import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut, Maximize2, Minimize2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import Timer from '../logicalReasoning/Timer.tsx';
import QuestionPanel from '../logicalReasoning/QuestionPanel';
import ResultsPage from '../logicalReasoning/ResultsPage';
import SolutionViewer from '../logicalReasoning/SolutionViewer';

// Import all verbal question data
import { readingComprehensionQuestions } from './data/readingComprehensionData';
import { tenseSubjectVerbAgreementQuestions } from './data/tenseSubjectVerbAgreementData';
import { sportingErrorQuestions } from './data/sportingErrorData';
import { paraJumblesQuestions } from './data/paraJumblesData';
import { idiomsPhraseQuestions } from './data/idiomsPhraseData';
import { sentenceCompletionQuestions } from './data/sentenceCompletionData';
import { activepassiveVoiceQuestions } from './data/activepassiveVoiceData';

interface VerbalQuestion {
  id: string;
  topicId: string;
  question: string;
  questionType?: 'single-choice' | 'multiple-choice' | 'true-false';
  options: string[];
  correctAnswer: number | number[];
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard' | string;
  passage?: string; // For reading comprehension
  diagram?: string;
}

interface VerbalTopic {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  duration: number; // in minutes
}

type VerbalQuestionStatus = 
  | 'not-visited'
  | 'not-answered'
  | 'current'
  | 'answered'
  | 'marked'
  | 'answered-marked';

const VerbalSectionMockTest: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Create mock topic object based on URL parameter
  const mockTopic: VerbalTopic = useMemo(() => ({
    id: topic || 'reading-comprehension',
    name: topic ? topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Reading Comprehension',
    description: 'Mock test for verbal ability topic',
    questionCount: 60, // 60 questions
    duration: 60 // 60 minutes
  }), [topic]);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [timeLeft, setTimeLeft] = useState<number>(mockTopic.duration * 60);
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [examStartTime, setExamStartTime] = useState<number | null>(null);
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());
  const [actualTimeTaken, setActualTimeTaken] = useState<number>(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Function to shuffle array (Fisher-Yates algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Get questions based on topic and randomly select 60
  const questions: VerbalQuestion[] = useMemo(() => {
    let topicQuestions: VerbalQuestion[] = [];
    
    // Map topic ID to corresponding question data
    switch (topic) {
      case 'comprehensive-verbal':
        // For comprehensive mock test, combine questions from all topics
        // First, process reading comprehension questions with proper passage grouping
        const comprehensiveRCQuestions = readingComprehensionQuestions;
        const comprehensiveGroupedRC: { passage: string; questions: VerbalQuestion[] }[] = [];
        let comprehensiveCurrentGroup: { passage: string; questions: VerbalQuestion[] } | null = null;
        
        comprehensiveRCQuestions.forEach(question => {
          if (question.passage) {
            // Start a new group
            if (comprehensiveCurrentGroup) {
              comprehensiveGroupedRC.push(comprehensiveCurrentGroup);
            }
            comprehensiveCurrentGroup = {
              passage: question.passage,
              questions: [question]
            };
          } else if (comprehensiveCurrentGroup) {
            // Add to current group
            comprehensiveCurrentGroup.questions.push({
              ...question,
              passage: comprehensiveCurrentGroup.passage
            });
          }
        });
        
        // Add the last group
        if (comprehensiveCurrentGroup) {
          comprehensiveGroupedRC.push(comprehensiveCurrentGroup);
        }
        
        // Flatten reading comprehension questions with proper passages
        const processedRCQuestions: VerbalQuestion[] = [];
        comprehensiveGroupedRC.forEach(group => {
          processedRCQuestions.push(...group.questions);
        });
        
        // Combine with other topics
        const allTopics = [
          ...processedRCQuestions,
          ...tenseSubjectVerbAgreementQuestions,
          ...sportingErrorQuestions,
          ...paraJumblesQuestions,
          ...idiomsPhraseQuestions,
          ...sentenceCompletionQuestions,
          ...activepassiveVoiceQuestions
        ];
        // Shuffle all questions and select 60
        const shuffledAll = shuffleArray(allTopics);
        return shuffledAll.slice(0, 60);
      case 'reading-comprehension':
        // For reading comprehension, apply traditional format with shared passages
        const rcQuestions = readingComprehensionQuestions;
        
        // Group questions by their passages (questions without passages will be grouped with the previous passage)
        const groupedQuestions: { passage: string; questions: VerbalQuestion[] }[] = [];
        let currentGroup: { passage: string; questions: VerbalQuestion[] } | null = null;
        
        rcQuestions.forEach(question => {
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
        
        // Shuffle the groups and flatten
        const shuffledGroups = [...groupedQuestions].sort(() => Math.random() - 0.5);
        topicQuestions = [];
        
        shuffledGroups.forEach(group => {
          // Take up to 5 questions per group
          const limitedQuestions = group.questions.slice(0, 5);
          topicQuestions.push(...limitedQuestions);
        });
        break;
      case 'tenses-subject-verb-agreement':
        topicQuestions = tenseSubjectVerbAgreementQuestions;
        break;
      case 'spotting-error':
        topicQuestions = sportingErrorQuestions;
        break;
      case 'para-jumbles':
        topicQuestions = paraJumblesQuestions;
        break;
      case 'idioms-phrases':
        topicQuestions = idiomsPhraseQuestions;
        break;
      case 'sentence-completion':
        topicQuestions = sentenceCompletionQuestions;
        break;
      case 'active-passive-voice':
        topicQuestions = activepassiveVoiceQuestions;
        break;
      default:
        topicQuestions = readingComprehensionQuestions; // Default fallback
    }

    // For reading comprehension, we already processed the questions
    // For other topics, shuffle and select 60 questions
    if (topic === 'reading-comprehension') {
      return topicQuestions.slice(0, 60);
    } else {
      const shuffledQuestions = shuffleArray(topicQuestions);
      return shuffledQuestions.slice(0, 60);
    }
  }, [topic]);

  // Check full screen status
  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullScreenChange);
    document.addEventListener('mozfullscreenchange', handleFullScreenChange);
    document.addEventListener('MSFullscreenChange', handleFullScreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullScreenChange);
      document.removeEventListener('mozfullscreenchange', handleFullScreenChange);
      document.removeEventListener('MSFullscreenChange', handleFullScreenChange);
    };
  }, []);

  // Request full screen on component mount
  useEffect(() => {
    if (!isFullScreen) {
      const requestFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if ((document.documentElement as any).webkitRequestFullscreen) {
          (document.documentElement as any).webkitRequestFullscreen();
        } else if ((document.documentElement as any).msRequestFullscreen) {
          (document.documentElement as any).msRequestFullscreen();
        }
      };

      // Request full screen after a short delay
      const timer = setTimeout(requestFullScreen, 100);
      return () => clearTimeout(timer);
    }
  }, [isFullScreen]);

  // Initialize exam
  useEffect(() => {
    if (!examStartTime) {
      setExamStartTime(Date.now());
      setVisitedQuestions(new Set([questions[0]?.id || '']));
    }
  }, [examStartTime, questions]);

  // Monitor state changes
  useEffect(() => {
    console.log('State changed - examCompleted:', examCompleted, 'showSolutions:', showSolutions);
  }, [examCompleted, showSolutions]);

  const handleExamEnd = () => {
    console.log('handleExamEnd called, showing loading effect');
    setIsSubmitting(true);
    const totalTime = mockTopic.duration * 60;
    const timeUsed = totalTime - timeLeft;
    setActualTimeTaken(timeUsed);
    
    // Simulate a 4-second loading period before showing results
    setTimeout(() => {
      setExamCompleted(true);
      setIsSubmitting(false);
    }, 4000);
  };

  const handleReturnHome = () => {
    // Exit full screen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if ((document as any).webkitExitFullscreen) {
      (document as any).webkitExitFullscreen();
    } else if ((document as any).msExitFullscreen) {
      (document as any).msExitFullscreen();
    }
    
    // Navigate back based on test type
    if (topic === 'comprehensive-verbal') {
      navigate('/test');
    } else {
      navigate('/verbal-ability');
    }
  };

  const handleTimeUp = () => {
    console.log('handleTimeUp called, showing loading effect');
    setIsSubmitting(true);
    const totalTime = mockTopic.duration * 60;
    setActualTimeTaken(totalTime); // All time used when time runs out
    
    // Simulate a 4-second loading period before showing results
    setTimeout(() => {
      setExamCompleted(true);
      setIsSubmitting(false);
    }, 4000);
  };

  const handleAnswerChange = (questionId: string, answer: number | number[]) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleMarkForReview = (questionId: string) => {
    setMarkedForReview(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleQuestionChange = (questionIndex: number) => {
    setCurrentQuestion(questionIndex);
    setVisitedQuestions(prev => new Set([...prev, questions[questionIndex]?.id || '']));
    // Scroll to top when changing questions
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleSubmitExam = () => {
    setIsSubmitting(true);
    // Simulate a 4-second loading period before showing results
    setTimeout(() => {
      setExamCompleted(true);
      setIsSubmitting(false);
    }, 4000);
  };

  const getQuestionStatus = (questionId: string): VerbalQuestionStatus => {
    console.log(`getQuestionStatus called for ${questionId}:`, {
      currentQuestionId: questions[currentQuestion]?.id,
      isMarked: markedForReview[questionId],
      hasAnswer: answers[questionId] !== undefined,
      isVisited: visitedQuestions.has(questionId)
    });
    
    if (questions[currentQuestion]?.id === questionId) {
      return 'current';
    }
    
    if (markedForReview[questionId]) {
      return answers[questionId] !== undefined ? 'answered-marked' : 'marked';
    }
    
    if (answers[questionId] !== undefined) {
      return 'answered';
    }
    
    if (visitedQuestions.has(questionId)) {
      return 'not-answered';
    }
    
    return 'not-visited';
  };

  const getTotalProgress = () => {
    const total = questions.length;
    const answered = Object.keys(answers).length;
    return { total, answered, percentage: (answered / total) * 100 };
  };

  const calculateResults = (): any => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    let correctAnswers = 0;

    questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined) {
        if (Array.isArray(question.correctAnswer)) {
          // Multiple choice
          if (Array.isArray(userAnswer) && 
              userAnswer.length === question.correctAnswer.length &&
              userAnswer.every(ans => Array.isArray(question.correctAnswer) && question.correctAnswer.includes(ans))) {
            correctAnswers++;
          }
        } else {
          // Single choice
          if (userAnswer === question.correctAnswer) {
            correctAnswers++;
          }
        }
      }
    });

    const score = correctAnswers;
    const percentage = (correctAnswers / totalQuestions) * 100;
    const timeTaken = actualTimeTaken || (examStartTime ? (Date.now() - examStartTime) / 1000 : 0);

    return {
      totalQuestions,
      answeredQuestions,
      correctAnswers,
      score,
      percentage,
      timeTaken,
      passed: percentage >= 60, // 60% passing criteria
      topicResults: [{
        topicId: mockTopic.id,
        topicName: mockTopic.name,
        totalQuestions,
        answeredQuestions,
        correctAnswers,
        score,
        percentage
      }]
    };
  };

  const handleViewSolutions = () => {
    console.log('handleViewSolutions called, setting showSolutions to true');
    setShowSolutions(true);
  };

  const handleBackFromSolutions = () => {
    console.log('handleBackFromSolutions called, setting showSolutions to false');
    setShowSolutions(false);
  };

  if (isSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-md w-full mx-4 border border-white/20">
          <div className="text-center">
            {/* Modern Animated Icon */}
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-purple-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 animate-spin"></div>
                
                {/* Middle Ring */}
                <div className="absolute inset-2 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                
                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-full animate-pulse" style={{ width: '75%' }}></div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">Analyzing Results</h3>
            <p className="text-white/80 mb-8 leading-relaxed">
              We're carefully evaluating your performance and preparing detailed insights...
            </p>

            {/* Animated Steps */}
            <div className="space-y-3">
              <div className="flex items-center justify-center space-x-3 text-white/70">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Calculating scores</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/70">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span className="text-sm">Generating performance report</span>
              </div>
              <div className="flex items-center justify-center space-x-3 text-white/70">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span className="text-sm">Preparing solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            ></div>
          ))}
        </div>
      </div>
    );
  }

  if (showSolutions) {
    console.log('Rendering SolutionViewer, showSolutions is true');
    console.log('Questions:', questions);
    console.log('Answers:', answers);
    return (
      <SolutionViewer
        questions={questions}
        userAnswers={answers}
        onBack={handleBackFromSolutions}
      />
    );
  }

  if (examCompleted) {
    const results = calculateResults();
    console.log('Exam completed, showing ResultsPage with results:', results);
    return (
      <ResultsPage
        results={results}
        onViewSolutions={handleViewSolutions}
        onReturnHome={handleReturnHome}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];
  const progress = getTotalProgress();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Same as other mock tests */}
      <header className="text-white py-2 sm:py-3 px-2 sm:px-4" style={{ backgroundColor: '#3B82F6' }}>
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="h-6 w-6 sm:h-8 sm:w-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs sm:text-sm">VA</span>
            </div>
            <div className="text-base sm:text-lg font-bold">{mockTopic.name} Mock Test</div>
          </div>
          <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-6">
            <Timer
              timeLeft={timeLeft}
              onTimeUp={handleTimeUp}
              isActive={!examCompleted}
              onTimeUpdate={(remainingTime) => {
                const totalTime = mockTopic.duration * 60;
                const timeUsed = totalTime - remainingTime;
                setActualTimeTaken(timeUsed);
              }}
            />
            <button
              onClick={handleExamEnd}
              className="bg-red-600 hover:bg-red-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2"
            >
              <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Exit Test</span>
              <span className="sm:hidden">Exit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Section Navigation - Simplified for single topic */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 py-1 sm:py-2">
          <div className="flex space-x-1">
            <div className="relative flex-shrink-0 px-2 sm:px-3 py-1 sm:py-2 rounded-md font-medium text-xs bg-blue-600 text-white shadow-md">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">{mockTopic.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Section Info */}
      <div className="bg-white border-b px-2 sm:px-4 py-1 sm:py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
            <div className="text-base sm:text-lg font-semibold text-blue-600">
              Verbal Ability
            </div>
            <div className="flex items-center justify-between sm:justify-end space-x-2 sm:space-x-4">
              <span className="text-xs sm:text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <button
                onClick={handleSubmitExam}
                className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-1 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>

             {/* Main Content - Same as other mock tests */}
       <div className="flex-1 flex">
         <QuestionPanel
           question={currentQuestionData as any}
           currentQuestionIndex={currentQuestion}
           totalQuestions={questions.length}
           userAnswer={answers[currentQuestionData?.id || '']}
           onAnswerChange={(answer) => handleAnswerChange(currentQuestionData?.id || '', answer)}
           onMarkForReview={() => handleMarkForReview(currentQuestionData?.id || '')}
           isMarkedForReview={markedForReview[currentQuestionData?.id || ''] || false}
           onNextQuestion={() => {
             if (currentQuestion < questions.length - 1) {
               handleQuestionChange(currentQuestion + 1);
             }
           }}
           onPreviousQuestion={() => {
             if (currentQuestion > 0) {
               handleQuestionChange(currentQuestion - 1);
             }
           }}
           canGoNext={currentQuestion < questions.length - 1}
           canGoPrevious={currentQuestion > 0}
           // Add these new props for proper navigation and status
           allQuestions={questions as any}
           allAnswers={answers}
           allMarkedForReview={markedForReview}
           visitedQuestions={visitedQuestions}
           onQuestionChange={handleQuestionChange}
           getQuestionStatus={getQuestionStatus as any}
         />
       </div>
    </div>
  );
};

export default VerbalSectionMockTest; 