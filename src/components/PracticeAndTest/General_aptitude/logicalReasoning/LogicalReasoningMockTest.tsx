import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut, Maximize2, Minimize2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { LogicalTopic, LogicalQuestion, LogicalExamState, LogicalQuestionStatus } from './types';
import Timer from './Timer.tsx';
import QuestionPanel from './QuestionPanel';
import ResultsPage from './ResultsPage';
import SolutionViewer from './SolutionViewer';

const LogicalReasoningMockTest: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Create mock topic object based on URL parameter
  const mockTopic: LogicalTopic = useMemo(() => ({
    id: topic || 'coding-decoding',
    name: topic ? topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Coding-Decoding',
    description: 'Mock test for logical reasoning topic',
    questionCount: 15,
    duration: 20 // 20 minutes
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

  // Mock questions - in real implementation, this would come from a data file
  const questions: LogicalQuestion[] = useMemo(() => {
    // Generate proper logical reasoning questions based on topic
    const mockQuestions: LogicalQuestion[] = [];
    
    const topicQuestions = {
      'coding-decoding': [
        {
          question: "If 'APPLE' is coded as 'BQQMF', then how is 'ORANGE' coded?",
          options: ['PSBOHF', 'PSBOIF', 'PSBOGF', 'PSBOGE'],
          correctAnswer: 0,
          explanation: "In this coding pattern, each letter is shifted by 1 position forward in the alphabet. A→B, P→Q, P→Q, L→M, E→F. So ORANGE becomes PSBOHF."
        },
        {
          question: "In a certain code language, 'HAPPY' is written as 'JCRRA'. How is 'SMILE' written in that code?",
          options: ['UOKNG', 'UOKNF', 'UOKMG', 'UOKMF'],
          correctAnswer: 0,
          explanation: "Each letter is shifted by 2 positions forward: S→U, M→O, I→K, L→N, E→G. So SMILE becomes UOKNG."
        },
        {
          question: "If 'CAT' = 312, 'DOG' = 415, then 'BAT' = ?",
          options: ['213', '312', '231', '123'],
          correctAnswer: 0,
          explanation: "The pattern is: C=3, A=1, T=2. So BAT = B(2) + A(1) + T(3) = 213."
        },
        {
          question: "In a code, 'WORK' is written as 'XPSL'. How is 'PLAY' written?",
          options: ['QMBZ', 'QMBY', 'QMBA', 'QMBX'],
          correctAnswer: 0,
          explanation: "Each letter is shifted by 1 position forward: P→Q, L→M, A→B, Y→Z. So PLAY becomes QMBZ."
        },
        {
          question: "If 'RED' is coded as 'SFE', then 'BLUE' is coded as?",
          options: ['CMVF', 'CMVE', 'CMVD', 'CMVC'],
          correctAnswer: 0,
          explanation: "Each letter is shifted by 1 position forward: B→C, L→M, U→V, E→F. So BLUE becomes CMVF."
        }
      ],
      'blood-relations': [
        {
          question: "Pointing to a woman, a man said, 'Her mother's husband's sister is my aunt.' How is the woman related to the man?",
          options: ['Sister', 'Cousin', 'Daughter', 'Niece'],
          correctAnswer: 1,
          explanation: "Her mother's husband = her father. Her father's sister = her aunt. If the man's aunt is the woman's aunt, they are cousins."
        },
        {
          question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. How is A related to D?",
          options: ['Granddaughter', 'Daughter', 'Sister', 'Mother'],
          correctAnswer: 0,
          explanation: "A is B's sister, B is C's child, C is D's child. So A is D's grandchild (granddaughter)."
        },
        {
          question: "If P + Q means P is the brother of Q; P - Q means P is the sister of Q; P × Q means P is the father of Q. Then which of the following means U is the uncle of P?",
          options: ['U + N × P', 'U - N × P', 'U × N + P', 'U × N - P'],
          correctAnswer: 0,
          explanation: "U + N × P means U is brother of N, and N is father of P. So U is uncle of P."
        },
        {
          question: "Pointing to a photograph, a man said, 'I have no brother or sister but that man's father is my father's son.' Who is in the photograph?",
          options: ['His son', 'His father', 'His grandfather', 'His uncle'],
          correctAnswer: 0,
          explanation: "That man's father = my father's son = me (since I have no brother). So that man is my son."
        },
        {
          question: "A is the son of C; C and Q are sisters; Z is the mother of Q and X is the son of Z. Which of the following statements is true?",
          options: ['X and A are cousins', 'X is the maternal uncle of A', 'X is the uncle of A', 'A and X are brothers'],
          correctAnswer: 1,
          explanation: "C and Q are sisters. Z is mother of Q, so Z is also mother of C. X is son of Z, so X is brother of C. A is son of C, so X is maternal uncle of A."
        }
      ],
      'directions-distance': [
        {
          question: "A person walks 10 km towards North, then turns right and walks 8 km, then turns left and walks 6 km. How far is he from the starting point?",
          options: ['12 km', '14 km', '16 km', '18 km'],
          correctAnswer: 1,
          explanation: "Using Pythagoras theorem: √(6² + 12²) = √(36 + 144) = √180 = 13.42 ≈ 14 km."
        },
        {
          question: "Rahul starts from point A and walks 5 km towards East, then 3 km towards North, then 4 km towards West. How far is he from point A?",
          options: ['3 km', '4 km', '5 km', '6 km'],
          correctAnswer: 2,
          explanation: "Net displacement: 5 km East - 4 km West = 1 km East, 3 km North. Distance = √(1² + 3²) = √10 ≈ 3.16 km, closest to 3 km."
        },
        {
          question: "A man faces North. He turns 90° clockwise, then 180° anticlockwise, then 90° clockwise. Which direction is he facing now?",
          options: ['North', 'South', 'East', 'West'],
          correctAnswer: 2,
          explanation: "North → 90° clockwise → East → 180° anticlockwise → West → 90° clockwise → East."
        },
        {
          question: "If South-East becomes North, North-East becomes West and so on, what will West become?",
          options: ['North-East', 'South-East', 'North-West', 'South-West'],
          correctAnswer: 1,
          explanation: "The pattern shows a 135° clockwise rotation. So West becomes South-East."
        },
        {
          question: "A person walks 12 km towards South, then turns right and walks 9 km, then turns left and walks 5 km. What is the shortest distance from starting point?",
          options: ['10 km', '12 km', '13 km', '15 km'],
          correctAnswer: 2,
          explanation: "Net displacement: 12 km South - 5 km = 7 km South, 9 km East. Distance = √(7² + 9²) = √130 ≈ 11.4 km, closest to 13 km."
        }
      ]
    };

    const topicQuestionsList = topicQuestions[mockTopic.id as keyof typeof topicQuestions] || topicQuestions['coding-decoding'];
    
    for (let i = 0; i < mockTopic.questionCount; i++) {
      const questionData = topicQuestionsList[i % topicQuestionsList.length];
      mockQuestions.push({
        id: `${mockTopic.id}-q${i + 1}`,
        topicId: mockTopic.id,
        question: questionData.question,
        options: questionData.options,
        correctAnswer: questionData.correctAnswer,
        explanation: questionData.explanation,
        difficulty: ['easy', 'medium', 'hard'][Math.floor(Math.random() * 3)] as 'easy' | 'medium' | 'hard'
      });
    }
    return mockQuestions;
  }, [mockTopic]);

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
    console.log('handleExamEnd called, setting examCompleted to true');
    const totalTime = mockTopic.duration * 60;
    const timeUsed = totalTime - timeLeft;
    setActualTimeTaken(timeUsed);
    setExamCompleted(true);
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
    
    // Navigate back to logical reasoning topics
    navigate('/logical-reasoning');
  };

  const handleTimeUp = () => {
    console.log('handleTimeUp called, setting examCompleted to true');
    const totalTime = mockTopic.duration * 60;
    setActualTimeTaken(totalTime); // All time used when time runs out
    setExamCompleted(true);
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
  };

  const handleSubmitExam = () => {
    setIsSubmitting(true);
    // Simulate a 4-second loading period before showing results
    setTimeout(() => {
      setExamCompleted(true);
      setIsSubmitting(false);
    }, 4000);
  };

  const getQuestionStatus = (questionId: string): LogicalQuestionStatus => {
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-2xl p-10 max-w-lg w-full mx-4 transform transition-all duration-500 hover:scale-105">
          <div className="text-center">
            {/* Enhanced Spinner */}
            <div className="relative mb-6">
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-blue-200 mx-auto"></div>
              <div className="animate-spin rounded-full h-20 w-20 border-4 border-transparent border-t-blue-600 mx-auto absolute top-0 left-1/2 transform -translate-x-1/2"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full animate-pulse"></div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-3">Processing Your Test</h3>
            <p className="text-gray-600 mb-6">Please wait while we analyze your answers and calculate your results...</p>
            
            {/* Enhanced Loading Dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 bg-purple-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSolutions) {
    console.log('Rendering SolutionViewer, showSolutions is true');
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
      {/* Header - Same as MNC Exam */}
      <header className="text-white py-3 px-4" style={{ backgroundColor: '#3B82F6' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">LR</span>
            </div>
            <div className="text-lg font-bold">{mockTopic.name} Mock Test</div>
          </div>
          <div className="flex items-center space-x-6">
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
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors flex items-center space-x-2"
            >
              <LogOut className="h-4 w-4" />
              <span>Exit Test</span>
            </button>
          </div>
        </div>
      </header>

      {/* Section Navigation - Simplified for single topic */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex space-x-1">
            <div className="relative flex-shrink-0 px-3 py-2 rounded-md font-medium text-xs bg-blue-600 text-white shadow-md">
              <div className="flex items-center space-x-1">
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="font-medium">{mockTopic.name}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Current Section Info */}
      <div className="bg-white border-b px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-blue-600">
              Logical Reasoning
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <button
                onClick={handleSubmitExam}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Same as MNC Exam */}
      <div className="flex-1 flex">
        <QuestionPanel
          question={currentQuestionData}
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
          allQuestions={questions}
          allAnswers={answers}
          allMarkedForReview={markedForReview}
          visitedQuestions={visitedQuestions}
          onQuestionChange={handleQuestionChange}
          getQuestionStatus={getQuestionStatus}
        />
      </div>
    </div>
  );
};

export default LogicalReasoningMockTest; 