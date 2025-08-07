import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut, Maximize2, Minimize2 } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { VerbalTopic, VerbalQuestion } from './types';
import Timer from '../logicalReasoning/Timer.tsx';
import QuestionPanel from '../logicalReasoning/QuestionPanel';
import ResultsPage from '../logicalReasoning/ResultsPage';
import SolutionViewer from '../logicalReasoning/SolutionViewer';

const VerbalSectionMockTest: React.FC = () => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();
  const [isFullScreen, setIsFullScreen] = useState(false);
  
  const mockTopic: VerbalTopic = useMemo(() => ({
    id: topic || 'reading-comprehension',
    name: topic ? topic.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Reading Comprehension',
    description: 'Mock test for verbal ability topic',
    questionCount: 15,
    duration: 20
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
  const questions: VerbalQuestion[] = useMemo(() => {
    // Generate proper verbal ability questions based on topic
    const mockQuestions: VerbalQuestion[] = [];
    
    const topicQuestions = {
      'reading-comprehension': [
        {
          question: "What is the main cause of climate change according to the passage?",
          options: ['Natural cycles', 'Human activities', 'Volcanic eruptions', 'Solar radiation'],
          correctAnswer: 1,
          explanation: "The passage states that climate change is primarily attributed to human activities."
        },
        {
          question: "Which statement is supported by the text about climate change?",
          options: ['It is a natural phenomenon', 'The last decade was the warmest', 'Volcanic activity causes it', 'Solar radiation is the main cause'],
          correctAnswer: 1,
          explanation: "The passage explicitly states 'the last decade being the warmest on record.'"
        },
        {
          question: "According to the passage, what is the primary driver of global warming?",
          options: ['Natural climate cycles', 'Greenhouse gas emissions', 'Solar activity', 'Ocean currents'],
          correctAnswer: 1,
          explanation: "The passage identifies greenhouse gas emissions as the primary driver of global warming."
        },
        {
          question: "What does the passage suggest about future climate trends?",
          options: ['Temperatures will stabilize', 'Continued warming is expected', 'A cooling period will begin', 'No clear trend is indicated'],
          correctAnswer: 1,
          explanation: "The passage indicates that continued warming is expected based on current trends."
        },
        {
          question: "Which of the following is NOT mentioned in the passage?",
          options: ['Temperature records', 'Human activities', 'Volcanic eruptions', 'Economic impacts'],
          correctAnswer: 3,
          explanation: "Economic impacts are not mentioned in the passage."
        }
      ],
      'sentence-completion': [
        {
          question: "Complete: The new policy was implemented to _____ efficiency.",
          options: ['increase', 'decrease', 'maintain', 'ignore'],
          correctAnswer: 0,
          explanation: "The context suggests positive outcomes, so 'increase' is most appropriate."
        },
        {
          question: "Choose the word: The research findings _____ the hypothesis.",
          options: ['contradict', 'support', 'ignore', 'complicate'],
          correctAnswer: 1,
          explanation: "The context suggests a positive relationship, so 'support' is appropriate."
        },
        {
          question: "Fill in the blank: The company's success _____ from its innovative approach.",
          options: ['resulted', 'arose', 'stemmed', 'emerged'],
          correctAnswer: 2,
          explanation: "'Stemmed' is the most appropriate word as it indicates origin or source."
        },
        {
          question: "Complete: Despite the challenges, the team _____ to complete the project.",
          options: ['managed', 'succeeded', 'attempted', 'struggled'],
          correctAnswer: 0,
          explanation: "'Managed' indicates successful completion despite difficulties."
        },
        {
          question: "Choose the best word: The evidence _____ the defendant's innocence.",
          options: ['proves', 'suggests', 'indicates', 'demonstrates'],
          correctAnswer: 3,
          explanation: "'Demonstrates' is the strongest word indicating clear evidence."
        }
      ],
      'error-identification': [
        {
          question: "Identify the error: The team have been working on this project for months.",
          options: ['team', 'have', 'been', 'working'],
          correctAnswer: 1,
          explanation: "'Have' should be 'has' as 'team' is a singular collective noun."
        },
        {
          question: "Find the mistake: Neither the students nor the teacher were present.",
          options: ['Neither', 'students', 'teacher', 'were'],
          correctAnswer: 3,
          explanation: "'Were' should be 'was' as the verb agrees with the nearer subject 'teacher'."
        },
        {
          question: "Spot the error: The data shows that climate change is real.",
          options: ['data', 'shows', 'that', 'is'],
          correctAnswer: 1,
          explanation: "'Shows' should be 'show' as 'data' is plural."
        },
        {
          question: "Identify the mistake: Each of the students have their own book.",
          options: ['Each', 'students', 'have', 'their'],
          correctAnswer: 2,
          explanation: "'Have' should be 'has' as 'each' is singular."
        },
        {
          question: "Find the error: The committee are divided on this issue.",
          options: ['committee', 'are', 'divided', 'issue'],
          correctAnswer: 1,
          explanation: "'Are' should be 'is' as 'committee' is a singular collective noun."
        }
      ],
      'para-jumbles': [
        {
          question: "Arrange the sentences: 1) The invention of the printing press 2) This led to widespread literacy 3) Revolutionized the spread of knowledge 4) In the 15th century",
          options: ['1-4-3-2', '4-1-3-2', '1-3-4-2', '4-3-1-2'],
          correctAnswer: 1,
          explanation: "The correct order is: In the 15th century, the invention of the printing press revolutionized the spread of knowledge. This led to widespread literacy."
        },
        {
          question: "Arrange: 1) The Industrial Revolution began 2) New technologies emerged 3) In the late 18th century 4) Changing society forever",
          options: ['1-3-2-4', '3-1-2-4', '1-2-3-4', '3-2-1-4'],
          correctAnswer: 1,
          explanation: "The correct order is: In the late 18th century, the Industrial Revolution began. New technologies emerged, changing society forever."
        },
        {
          question: "Arrange: 1) The discovery of penicillin 2) By Alexander Fleming 3) In 1928 4) Revolutionized medicine",
          options: ['1-2-3-4', '3-2-1-4', '1-3-2-4', '3-1-2-4'],
          correctAnswer: 1,
          explanation: "The correct order is: In 1928, the discovery of penicillin by Alexander Fleming revolutionized medicine."
        },
        {
          question: "Arrange: 1) The internet was developed 2) For military purposes 3) In the 1960s 4) As ARPANET",
          options: ['1-3-4-2', '3-1-4-2', '1-4-3-2', '3-4-1-2'],
          correctAnswer: 1,
          explanation: "The correct order is: In the 1960s, the internet was developed as ARPANET for military purposes."
        },
        {
          question: "Arrange: 1) The Wright brothers 2) Made the first powered flight 3) In 1903 4) At Kitty Hawk",
          options: ['1-2-3-4', '3-1-2-4', '1-3-2-4', '3-2-1-4'],
          correctAnswer: 1,
          explanation: "The correct order is: In 1903, the Wright brothers made the first powered flight at Kitty Hawk."
        }
      ],
      'vocabulary': [
        {
          question: "What is the meaning of 'ubiquitous'?",
          options: ['Rare', 'Present everywhere', 'Expensive', 'Difficult'],
          correctAnswer: 1,
          explanation: "'Ubiquitous' means present, appearing, or found everywhere."
        },
        {
          question: "Choose the synonym for 'ephemeral':",
          options: ['Permanent', 'Temporary', 'Important', 'Beautiful'],
          correctAnswer: 1,
          explanation: "'Ephemeral' means lasting for a very short time; transitory."
        },
        {
          question: "What does 'serendipity' mean?",
          options: ['Bad luck', 'Good fortune', 'Hard work', 'Planning'],
          correctAnswer: 1,
          explanation: "'Serendipity' means the occurrence and development of events by chance in a happy or beneficial way."
        },
        {
          question: "Choose the antonym for 'verbose':",
          options: ['Talkative', 'Concise', 'Detailed', 'Complex'],
          correctAnswer: 1,
          explanation: "'Verbose' means using more words than necessary; wordy. Its antonym is 'concise'."
        },
        {
          question: "What is the meaning of 'pragmatic'?",
          options: ['Theoretical', 'Practical', 'Emotional', 'Creative'],
          correctAnswer: 1,
          explanation: "'Pragmatic' means dealing with things sensibly and realistically in a way that is based on practical rather than idealistic considerations."
        }
      ],
      'sentence-improvement': [
        {
          question: "Improve: The reason why I am late is because of traffic.",
          options: ['The reason I am late is because of traffic.', 'I am late because of traffic.', 'The reason why I am late is traffic.', 'I am late due to traffic.'],
          correctAnswer: 1,
          explanation: "Remove redundancy: 'The reason why' and 'because' are redundant. Simply say 'I am late because of traffic.'"
        },
        {
          question: "Improve: Each and every student must submit their assignment.",
          options: ['Each student must submit their assignment.', 'Every student must submit their assignment.', 'Each and every student must submit his assignment.', 'All students must submit their assignments.'],
          correctAnswer: 3,
          explanation: "Use 'all students' and 'assignments' for clarity and avoid redundancy."
        },
        {
          question: "Improve: The data shows that the results are positive.",
          options: ['The data show that the results are positive.', 'The data indicates that the results are positive.', 'The data demonstrates that the results are positive.', 'The data prove that the results are positive.'],
          correctAnswer: 0,
          explanation: "'Data' is plural, so use 'show' instead of 'shows'."
        },
        {
          question: "Improve: I have been working here since 5 years.",
          options: ['I have been working here for 5 years.', 'I have been working here since 5 years ago.', 'I have been working here from 5 years.', 'I have been working here since 5 years back.'],
          correctAnswer: 0,
          explanation: "Use 'for' with duration and 'since' with a point in time."
        },
        {
          question: "Improve: The team are divided on this issue.",
          options: ['The team is divided on this issue.', 'The team members are divided on this issue.', 'The teams are divided on this issue.', 'The team have divided on this issue.'],
          correctAnswer: 0,
          explanation: "'Team' is a singular collective noun, so use 'is' instead of 'are'."
        }
      ],
      'grammar-usage': [
        {
          question: "Choose the correct form: The committee _____ divided on this issue.",
          options: ['is', 'are', 'have', 'has'],
          correctAnswer: 0,
          explanation: "'Committee' is a singular collective noun, so use 'is'."
        },
        {
          question: "Select the right tense: By next year, I _____ here for ten years.",
          options: ['will work', 'will have worked', 'will be working', 'work'],
          correctAnswer: 1,
          explanation: "Use future perfect tense for an action that will be completed by a specific time in the future."
        },
        {
          question: "Choose the correct pronoun: Neither John nor his friends _____ present.",
          options: ['was', 'were', 'is', 'are'],
          correctAnswer: 1,
          explanation: "When using 'neither...nor', the verb agrees with the nearer subject 'friends' (plural)."
        },
        {
          question: "Select the appropriate article: _____ university is located in the city center.",
          options: ['A', 'An', 'The', 'No article'],
          correctAnswer: 2,
          explanation: "Use 'the' when referring to a specific university that is known or mentioned."
        },
        {
          question: "Choose the correct form: The data _____ analyzed yesterday.",
          options: ['was', 'were', 'is', 'are'],
          correctAnswer: 0,
          explanation: "'Data' can be treated as singular in formal contexts, so 'was' is acceptable."
        }
      ]
    };

    const topicQuestionsList = topicQuestions[mockTopic.id as keyof typeof topicQuestions] || topicQuestions['reading-comprehension'];
    
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

  useEffect(() => {
    if (!examStartTime) {
      setExamStartTime(Date.now());
      setVisitedQuestions(new Set([questions[0]?.id || '']));
    }
  }, [examStartTime, questions]);

  const handleExamEnd = () => {
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
    
    // Navigate back to verbal section topics
    navigate('/verbal-ability');
  };

  const handleTimeUp = () => {
    const totalTime = mockTopic.duration * 60;
    setActualTimeTaken(totalTime);
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

  const getQuestionStatus = (questionId: string) => {
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

  const calculateResults = () => {
    const totalQuestions = questions.length;
    const answeredQuestions = Object.keys(answers).length;
    let correctAnswers = 0;

    questions.forEach(question => {
      const userAnswer = answers[question.id];
      if (userAnswer !== undefined && userAnswer === question.correctAnswer) {
        correctAnswers++;
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
      passed: percentage >= 60,
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
    setShowSolutions(true);
  };

  const handleBackFromSolutions = () => {
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
              <div className="w-3 h-3 bg-pink-600 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></div>
            </div>
            
            {/* Status Messages */}
            <div className="mt-6 space-y-2">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Validating answers...</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>Calculating scores...</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>Generating results...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showSolutions) {
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
    return (
      <ResultsPage
        results={results}
        onViewSolutions={handleViewSolutions}
        onReturnHome={handleReturnHome}
      />
    );
  }

  const currentQuestionData = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header - Same as MNC Exam */}
      <header className="text-white py-3 px-4" style={{ backgroundColor: '#3B82F6' }}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-sm">VA</span>
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
              Verbal Ability
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

      {/* Main Content */}
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

export default VerbalSectionMockTest; 