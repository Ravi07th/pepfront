import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut, Maximize2, Minimize2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { QuantitativeTopic, QuantitativeQuestion, QuantitativeExamState, QuantitativeQuestionStatus } from './types';
import Timer from '../logicalReasoning/Timer.tsx';
import QuestionPanel from '../logicalReasoning/QuestionPanel';
import ResultsPage from '../logicalReasoning/ResultsPage';
import SolutionViewer from '../logicalReasoning/SolutionViewer';

const QuantitativeAptitudeMockTest: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  // Create mock topic object based on URL parameter
  const mockTopic: QuantitativeTopic = useMemo(() => ({
    id: topic || 'number-system',
    name: topic ? topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Number System',
    description: 'Mock test for quantitative aptitude topic',
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
  const questions: QuantitativeQuestion[] = useMemo(() => {
    // Generate proper quantitative aptitude questions based on topic
    const mockQuestions: QuantitativeQuestion[] = [];
    
    const topicQuestions = {
      'number-system': [
        {
          question: "What is the HCF of 24 and 36?",
          options: ['6', '8', '12', '18'],
          correctAnswer: 2,
          explanation: "Prime factorization: 24 = 2³ × 3, 36 = 2² × 3². HCF = 2² × 3 = 12"
        },
        {
          question: "Find the LCM of 15, 20, and 25.",
          options: ['150', '300', '450', '600'],
          correctAnswer: 1,
          explanation: "Prime factorization: 15 = 3 × 5, 20 = 2² × 5, 25 = 5². LCM = 2² × 3 × 5² = 300"
        },
        {
          question: "Which of the following numbers is divisible by 9?",
          options: ['12345', '23456', '34567', '45678'],
          correctAnswer: 3,
          explanation: "Sum of digits of 45678 = 4+5+6+7+8 = 30, which is divisible by 9"
        },
        {
          question: "A number when divided by 6 leaves remainder 2, when divided by 8 leaves remainder 4. What is the smallest such number?",
          options: ['14', '20', '26', '32'],
          correctAnswer: 1,
          explanation: "Using Chinese Remainder Theorem or trial: 20 ÷ 6 = 3 remainder 2, 20 ÷ 8 = 2 remainder 4"
        },
        {
          question: "Find the unit digit of 7^2023.",
          options: ['1', '3', '7', '9'],
          correctAnswer: 2,
          explanation: "Cyclic pattern: 7¹=7, 7²=49, 7³=343, 7⁴=2401. Pattern repeats every 4. 2023 ÷ 4 = 505 remainder 3. So unit digit is 7"
        }
      ],
      'percentage-ratio': [
        {
          question: "If 20% of a number is 40, what is 60% of the same number?",
          options: ['80', '100', '120', '140'],
          correctAnswer: 2,
          explanation: "20% = 40, so 100% = 40 × 5 = 200. 60% of 200 = 120"
        },
        {
          question: "The ratio of boys to girls in a class is 3:2. If there are 25 students, how many girls are there?",
          options: ['8', '10', '12', '15'],
          correctAnswer: 1,
          explanation: "Ratio 3:2 means 3+2=5 parts. 25 students ÷ 5 = 5 students per part. Girls = 2 parts = 10"
        },
        {
          question: "A number is increased by 20% and then decreased by 20%. What is the net change?",
          options: ['No change', '4% decrease', '4% increase', '20% decrease'],
          correctAnswer: 1,
          explanation: "Let original number be 100. After 20% increase = 120. After 20% decrease = 120 × 0.8 = 96. Net change = 4% decrease"
        },
        {
          question: "If A:B = 2:3 and B:C = 4:5, what is A:C?",
          options: ['8:15', '6:15', '8:12', '6:12'],
          correctAnswer: 0,
          explanation: "A:B = 2:3, B:C = 4:5. To combine ratios, make B same: A:B = 8:12, B:C = 12:15. So A:C = 8:15"
        },
        {
          question: "A shopkeeper marks his goods 25% above cost price and allows 10% discount. What is his profit percentage?",
          options: ['12.5%', '15%', '17.5%', '20%'],
          correctAnswer: 0,
          explanation: "Let CP = 100. MP = 125. SP after 10% discount = 125 × 0.9 = 112.5. Profit = 12.5%"
        }
      ],
      'profit-loss-interest': [
        {
          question: "A man buys a watch for Rs. 1950 and sells it for Rs. 2200. What is his profit percentage?",
          options: ['12.8%', '14.2%', '15.8%', '16.4%'],
          correctAnswer: 0,
          explanation: "Profit = 2200 - 1950 = 250. Profit % = (250/1950) × 100 = 12.8%"
        },
        {
          question: "At what rate of simple interest will Rs. 5000 amount to Rs. 6000 in 4 years?",
          options: ['5%', '6%', '7%', '8%'],
          correctAnswer: 0,
          explanation: "SI = 6000 - 5000 = 1000. Rate = (1000 × 100)/(5000 × 4) = 5%"
        },
        {
          question: "Find the compound interest on Rs. 8000 for 2 years at 10% per annum.",
          options: ['Rs. 1600', 'Rs. 1680', 'Rs. 1760', 'Rs. 1840'],
          correctAnswer: 1,
          explanation: "CI = P[(1 + r/100)ⁿ - 1] = 8000[(1.1)² - 1] = 8000[1.21 - 1] = Rs. 1680"
        },
        {
          question: "A trader sells an article at a loss of 10%. Had he sold it for Rs. 200 more, he would have gained 10%. Find the cost price.",
          options: ['Rs. 800', 'Rs. 900', 'Rs. 1000', 'Rs. 1100'],
          correctAnswer: 2,
          explanation: "Let CP = x. SP at 10% loss = 0.9x. SP at 10% profit = 1.1x. Difference = 1.1x - 0.9x = 0.2x = 200. So x = 1000"
        },
        {
          question: "The difference between simple and compound interest on a sum for 2 years at 10% is Rs. 100. Find the sum.",
          options: ['Rs. 8000', 'Rs. 9000', 'Rs. 10000', 'Rs. 11000'],
          correctAnswer: 2,
          explanation: "Difference = P(r/100)² = 100. P(10/100)² = 100. P = 10000"
        }
      ]
    };

    const topicQuestionsList = topicQuestions[mockTopic.id as keyof typeof topicQuestions] || topicQuestions['number-system'];
    
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
    
    // Navigate back to quantitative aptitude topics
    navigate('/quantitative-aptitude');
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

  const getQuestionStatus = (questionId: string): QuantitativeQuestionStatus => {
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
              <span className="text-blue-600 font-bold text-sm">QA</span>
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
              Quantitative Aptitude
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

export default QuantitativeAptitudeMockTest; 