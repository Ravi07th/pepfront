import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut, Trophy } from 'lucide-react';
import { Company, ExamType, ExamState, Question, QuestionStatus } from './types';
import { getLimitedQuestionsByCompanyAndExam } from './data/questions';
import { getRouteId } from './utils/routingUtils';
import Timer from './Timer';
import QuestionPanel from './QuestionPanel';
import ResultsPage from './ResultsPage';
import { SolutionViewer } from './SolutionViewer';

interface ExamInterfaceProps {
  company: Company;
  examType: ExamType;
  onExamEnd: () => void;
  onReExam?: () => void; // Add prop for re-exam functionality
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ 
  company, 
  examType, 
  onExamEnd,
  onReExam
}) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [sectionTimeLeft, setSectionTimeLeft] = useState<Record<number, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [sectionSubmitted, setSectionSubmitted] = useState(false);
  const [showSolutions, setShowSolutions] = useState(false);
  const [timersInitialized, setTimersInitialized] = useState(false);
  const [examSubmitting, setExamSubmitting] = useState(false);
  const [examStartTime, setExamStartTime] = useState<number | null>(null);
  const [isSubmittingSection, setIsSubmittingSection] = useState(false);
  const [submittedSections, setSubmittedSections] = useState<Set<number>>(new Set());
  const [visitedQuestions, setVisitedQuestions] = useState<Set<string>>(new Set());

  const questions = useMemo(() => {
    const allQuestions = getLimitedQuestionsByCompanyAndExam(company.id, examType.id);
    console.log(`Loaded ${allQuestions.length} questions for ${company.id}-${examType.id}`);
    console.log('Available section IDs:', [...new Set(allQuestions.map(q => q.sectionId))]);
    
    // Log the count of questions per section
    const sectionCounts = allQuestions.reduce((acc, q) => {
      acc[q.sectionId] = (acc[q.sectionId] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);
    console.log('Questions per section:', sectionCounts);
    
    return allQuestions;
  }, [company.id, examType.id]);
  
  const currentSectionData = examType.sections[currentSection];
  
  // Check if current section has subsections (nested structure)
  const hasSubsections = currentSectionData.subsections && currentSectionData.subsections.length > 0;
  const currentSubsectionData = hasSubsections ? currentSectionData.subsections![currentSubsection] : null;
  
  // Get current questions based on structure
  const currentQuestions = useMemo(() => {
    console.log(`Filtering questions for section: ${currentSectionData.id}`);
    console.log(`Has subsections: ${hasSubsections}`);
    if (currentSubsectionData) {
      console.log(`Current subsection: ${currentSubsectionData.id}`);
    }
    
    let filteredQuestions;
    if (hasSubsections && currentSubsectionData) {
      // For nested structure, filter by both section and subsection
      filteredQuestions = questions.filter(q => 
        q.sectionId === currentSectionData.id && 
        q.subsectionId === currentSubsectionData.id
      );
    } else {
      // For flat structure, filter by section only
      filteredQuestions = questions.filter(q => q.sectionId === currentSectionData.id);
    }
    
    console.log(`Found ${filteredQuestions.length} questions for current section`);
    return filteredQuestions;
  }, [questions, currentSectionData.id, hasSubsections, currentSubsectionData?.id]);

  // Initialize section timers
  useEffect(() => {
    const initialTimers: Record<number, number> = {};
    
    if (company.id === 'microsoft') {
      // For Microsoft, use shared timer for all sections
      const totalTime = 45 * 60; // 45 min for Microsoft
      examType.sections.forEach((section, index) => {
        initialTimers[index] = totalTime; // All sections share the same total time
      });
      console.log(`${company.id} exam: Initialized single timer for all sections: ${totalTime / 60} minutes (${totalTime} seconds)`);
    } else {
      // For other exams, use individual section timers
      examType.sections.forEach((section, index) => {
        initialTimers[index] = section.duration * 60; // Convert to seconds
        console.log(`Initialized timer for section ${section.name}: ${section.duration} minutes (${section.duration * 60} seconds)`);
      });
    }
    
    setSectionTimeLeft(initialTimers);
    setTimersInitialized(true);
    setExamStartTime(Date.now());
  }, [examType.sections, company.id]);

  // Mark first question as visited when exam starts
  useEffect(() => {
    if (currentQuestions.length > 0 && visitedQuestions.size === 0) {
      const firstQuestionId = currentQuestions[0].id;
      setVisitedQuestions(new Set([firstQuestionId]));
    }
  }, [currentQuestions, visitedQuestions.size]);

  // Timer countdown for current section
  useEffect(() => {
    if (examCompleted || sectionSubmitted || !timersInitialized || isSubmittingSection) return;

    const timer = setInterval(() => {
      setSectionTimeLeft(prev => {
        const newTimers = { ...prev };
        
        if (company.id === 'microsoft') {
          // For Microsoft, update all sections with the same time (continuous timer)
          const currentTime = newTimers[0]; // Use first section's time as the master timer
          if (currentTime > 0) {
            const newTime = currentTime - 1;
            // Update all sections with the same time
            Object.keys(newTimers).forEach(key => {
              newTimers[key] = newTime;
            });
            // Log timer update for debugging
            if (newTime % 60 === 0) { // Log every minute
              console.log(`${company.id} exam timer: ${Math.floor(newTime / 60)}:${(newTime % 60).toString().padStart(2, '0')}`);
            }
          }
        } else {
          // For other exams, update only current section
          if (newTimers[currentSection] > 0) {
            newTimers[currentSection] -= 1;
            // Log timer update for debugging
            if (newTimers[currentSection] % 60 === 0) { // Log every minute
              console.log(`Section ${currentSection + 1} timer: ${Math.floor(newTimers[currentSection] / 60)}:${(newTimers[currentSection] % 60).toString().padStart(2, '0')}`);
            }
          }
        }
        
        return newTimers;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSection, examCompleted, sectionSubmitted, timersInitialized, company.id, isSubmittingSection]);

  // Check if current section time is up
  useEffect(() => {
    if (!timersInitialized || isSubmittingSection) return;
    
    if (company.id === 'microsoft') {
      // For Microsoft, check if the total exam time is up
      const totalTimeLeft = sectionTimeLeft[0]; // Use first section's time as the master timer
      if (totalTimeLeft !== undefined && totalTimeLeft <= 0 && !sectionSubmitted) {
        console.log(`${company.id} exam time up - completing exam`);
        setExamCompleted(true);
      }
    } else if (company.id === 'cognizant') {
      // For Cognizant, check current section time and auto-submit
      const currentTimeLeft = sectionTimeLeft[currentSection];
      if (currentTimeLeft !== undefined && currentTimeLeft <= 0 && !sectionSubmitted) {
        console.log(`Time up for Cognizant section ${currentSection + 1}: ${examType.sections[currentSection].name}`);
        handleCognizantSectionSubmit();
      }
    } else if (company.id === 'wipro') {
      // For Wipro, check current section time and auto-submit (same logic as Cognizant)
      const currentTimeLeft = sectionTimeLeft[currentSection];
      if (currentTimeLeft !== undefined && currentTimeLeft <= 0 && !sectionSubmitted) {
        console.log(`Time up for Wipro section ${currentSection + 1}: ${examType.sections[currentSection].name}`);
        handleWiproSectionSubmit();
      }
    } else {
      // For other exams, check current section time
      const currentTimeLeft = sectionTimeLeft[currentSection];
      if (currentTimeLeft !== undefined && currentTimeLeft <= 0 && !sectionSubmitted) {
        console.log(`Time up for section ${currentSection + 1}: ${examType.sections[currentSection].name}`);
        handleSubmitSection();
      }
    }
  }, [sectionTimeLeft, currentSection, sectionSubmitted, timersInitialized, company.id, isSubmittingSection]);

  // Exit fullscreen when exam ends
  const handleExamEnd = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    // For all exams, go directly to results
    setExamSubmitting(true);
    setTimeout(() => {
      setExamCompleted(true);
      setExamSubmitting(false);
    }, 2000); // Show loading for 2 seconds
  };

  // Handle return to home from results page
  const handleReturnHome = () => {
    // Safely exit fullscreen with error handling
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((error) => {
        console.log('[ExamInterface] Error exiting fullscreen:', error);
        // Continue with navigation even if fullscreen exit fails
      });
    }
    onExamEnd();
  };

  // Handle re-exam - navigate directly to introduction page
  const handleReExam = () => {
    console.log('[ExamInterface] Retake exam button clicked');
    console.log('[ExamInterface] onReExam function available:', !!onReExam);
    
    // Safely exit fullscreen with error handling
    if (document.exitFullscreen) {
      document.exitFullscreen().catch((error) => {
        console.log('[ExamInterface] Error exiting fullscreen:', error);
        // Continue with navigation even if fullscreen exit fails
      });
    }
    // Use the passed onReExam function if available, otherwise fallback to window.location
    if (onReExam) {
      console.log('[ExamInterface] Calling onReExam function');
      onReExam();
    } else {
      console.log('[ExamInterface] Using fallback window.location');
      // Fallback to window.location if onReExam is not provided
      const routeId = getRouteId(company, examType);
      window.location.href = `/mock-test/${routeId}`;
    }
  };

  const handleTimeUp = () => {
    // Auto submit when time is up
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
    console.log('[ExamInterface] handleQuestionChange called with index:', questionIndex);
    console.log('[ExamInterface] Current question before change:', currentQuestion);
    console.log('[ExamInterface] Current questions array length:', currentQuestions.length);
    console.log('[ExamInterface] Available questions:', currentQuestions.map((q, i) => `${i}: ${q.id}`));
    
    if (questionIndex >= 0 && questionIndex < currentQuestions.length) {
      setCurrentQuestion(questionIndex);
      // Mark the current question as visited
      const currentQuestionId = currentQuestions[questionIndex]?.id;
      if (currentQuestionId) {
        setVisitedQuestions(prev => new Set([...prev, currentQuestionId]));
      }
      console.log('[ExamInterface] Question change completed successfully');
    } else {
      console.error('[ExamInterface] Invalid question index:', questionIndex, 'for questions array of length:', currentQuestions.length);
    }
  };

  const handleSubmitSection = () => {
    if (isSubmittingSection) return; // Prevent multiple submissions
    
    console.log(`Submitting section ${currentSection + 1}: ${currentSectionData.name}`);
    setIsSubmittingSection(true);
    setSectionSubmitted(true);
    // Mark current section as submitted
    setSubmittedSections(prev => new Set([...prev, currentSection]));
    setTimeout(() => {
      handleNextSection();
    }, 2000); // Show submission confirmation for 2 seconds
  };

  // Special handling for Cognizant exam - section-wise submission
  const handleCognizantSectionSubmit = () => {
    if (isSubmittingSection) return; // Prevent multiple submissions
    
    console.log(`Submitting Cognizant section ${currentSection + 1}: ${currentSectionData.name}`);
    setIsSubmittingSection(true);
    setSectionSubmitted(true);
    // Mark current section as submitted
    setSubmittedSections(prev => new Set([...prev, currentSection]));
    setTimeout(() => {
      handleNextSection();
    }, 2000); // Show submission confirmation for 2 seconds
  };

  // Special handling for Wipro exam - section-wise submission (same logic as Cognizant)
  const handleWiproSectionSubmit = () => {
    if (isSubmittingSection) return; // Prevent multiple submissions
    
    console.log(`Submitting Wipro section ${currentSection + 1}: ${currentSectionData.name}`);
    setIsSubmittingSection(true);
    setSectionSubmitted(true);
    // Mark current section as submitted
    setSubmittedSections(prev => new Set([...prev, currentSection]));
    setTimeout(() => {
      handleNextSection();
    }, 2000); // Show submission confirmation for 2 seconds
  };

  // Special handling for Infosys exam - section-wise submission (same logic as Cognizant/Wipro)
  const handleInfosysSectionSubmit = () => {
    if (isSubmittingSection) return; // Prevent multiple submissions
    
    console.log(`Submitting Infosys section ${currentSection + 1}: ${currentSectionData.name}`);
    setIsSubmittingSection(true);
    setSectionSubmitted(true);
    // Mark current section as submitted
    setSubmittedSections(prev => new Set([...prev, currentSection]));
    setTimeout(() => {
      handleNextSection();
    }, 2000); // Show submission confirmation for 2 seconds
  };

  const handleNextSection = () => {
    const nextSection = currentSection + 1;
    
    if (nextSection < examType.sections.length) {
      // Move to next section
      console.log(`Moving to section ${nextSection + 1}: ${examType.sections[nextSection].name}`);
      setCurrentSection(nextSection);
      setCurrentSubsection(0);
      setCurrentQuestion(0);
      setSectionSubmitted(false);
      setIsSubmittingSection(false); // Reset submission state
    } else {
      // Exam completed
      console.log('Exam completed - all sections finished');
      setExamCompleted(true);
      setIsSubmittingSection(false); // Reset submission state
    }
  };

  const getTotalProgress = () => {
    let totalQuestions = 0;
    let answeredQuestions = 0;
    
    examType.sections.forEach((section, sIndex) => {
      if (section.subsections) {
        // For nested structure
        section.subsections.forEach(subsection => {
          const subsectionQuestions = questions.filter(q => 
            q.sectionId === section.id && q.subsectionId === subsection.id
          );
          totalQuestions += subsectionQuestions.length;
          
          if (sIndex < currentSection) {
            answeredQuestions += subsectionQuestions.length;
          } else if (sIndex === currentSection) {
            // For current section, count based on current subsection
            const currentSubsectionIndex = currentSubsection;
            const subsectionIndex = section.subsections.findIndex(sub => sub.id === subsection.id);
            if (subsectionIndex < currentSubsectionIndex) {
              answeredQuestions += subsectionQuestions.length;
            } else if (subsectionIndex === currentSubsectionIndex) {
              answeredQuestions += currentQuestion;
            }
          }
        });
      } else {
        // For flat structure
        const sectionQuestions = questions.filter(q => q.sectionId === section.id);
        totalQuestions += sectionQuestions.length;
        
        if (sIndex < currentSection) {
          answeredQuestions += sectionQuestions.length;
        } else if (sIndex === currentSection) {
          answeredQuestions += currentQuestion;
        }
      }
    });

    return totalQuestions > 0 ? (answeredQuestions / totalQuestions) * 100 : 0;
  };

  const getQuestionStatus = (questionId: string): QuestionStatus => {
    // Check if this is the current question
    const currentQuestionIndex = currentQuestions.findIndex(q => q.id === questionId);
    if (currentQuestionIndex === currentQuestion) {
      return 'current';
    }
    
    // Check if answered and marked
    if (answers[questionId] !== undefined && markedForReview[questionId]) {
      return 'answered-marked';
    } 
    // Check if answered
    else if (answers[questionId] !== undefined) {
      return 'answered';
    } 
    // Check if marked but not answered
    else if (markedForReview[questionId]) {
      return 'marked';
    } 
    // Check if visited but not answered (we need to track visited questions)
    else if (visitedQuestions.has(questionId)) {
      return 'not-answered';
    } 
    // Not visited
    else {
      return 'not-visited';
    }
  };

  const formatSectionName = (sectionName: string, sectionIndex: number) => {
    // For TCS NQT, add Part A and Part B prefixes
    if (company.id === 'tcs-nqt') {
      if (sectionIndex < 3) {
        return `Part A: Foundation Section - ${sectionName}`;
      } else {
        return `Part B: Advanced Section - ${sectionName}`;
      }
    }
    
    // For Accenture, add Cognitive Ability and Technical Assessment prefixes
    if (company.id === 'accenture') {
      if (sectionIndex < 3) {
        return `Cognitive Ability - ${sectionName}`;
      } else {
        return `Technical Assessment - ${sectionName}`;
      }
    }
    
    // For Cognizant and Wipro, show "Aptitude Assessment" for all sections
    if (company.id === 'cognizant' || company.id === 'wipro') {
      return 'Aptitude Assessment';
    }
    return sectionName;
  };

  const handleViewSolutions = () => {
    setShowSolutions(true);
  };

  const handleBackFromSolutions = () => {
    setShowSolutions(false);
  };

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
    // Calculate actual time taken
    const actualTimeTaken = examStartTime ? Math.floor((Date.now() - examStartTime) / 1000) : 0;
    
    return <ResultsPage 
      company={company}
      examType={examType}
      answers={answers}
      questions={questions}
      timeTaken={actualTimeTaken}
      onReturnHome={handleReturnHome}
      onViewSolutions={handleViewSolutions}
      onReExam={handleReExam}
    />;
  }

  if (sectionSubmitted) {
    const isMovingToResults = currentSection + 1 >= examType.sections.length;
    
    return (
      <div className={`min-h-screen bg-gradient-to-br ${isMovingToResults 
        ? 'from-yellow-50 via-orange-50 to-red-50' 
        : 'from-green-50 via-blue-50 to-indigo-50'
      } flex items-center justify-center p-4`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {isMovingToResults ? (
            // Results Animation - Trophy and celebration theme
            <>
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-red-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
              
              {/* Celebration particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-400 rounded-full animate-bounce"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 2}s`,
                    animationDuration: `${1 + Math.random()}s`
                  }}
                />
              ))}
            </>
          ) : (
            // Next Section Animation - Standard flow
            <>
              <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
              <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
              <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            </>
          )}
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full border border-white/20">
          <div className="text-center">
            {/* Enhanced Success Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto relative">
                {isMovingToResults ? (
                  // Results Icon - Trophy with celebration
                  <>
                    {/* Outer Ring - Golden */}
                    <div className="absolute inset-0 rounded-full border-4 border-yellow-200/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 animate-spin"></div>
                    
                    {/* Middle Ring - Orange */}
                    <div className="absolute inset-2 rounded-full border-4 border-orange-200/30"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-orange-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                    
                    {/* Inner Circle with Trophy Icon */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 flex items-center justify-center">
                      <Trophy className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Celebration sparkles */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  </>
                ) : (
                  // Next Section Icon - Standard check
                  <>
                    {/* Outer Ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-green-200/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-green-500 animate-spin"></div>
                    
                    {/* Middle Ring */}
                    <div className="absolute inset-2 rounded-full border-4 border-blue-200/30"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                    
                    {/* Inner Circle with Check Icon */}
                    <div className="absolute inset-4 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              {isMovingToResults ? '🎉 Section Completed!' : 'Section Submitted!'}
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Moving to: <span className={`font-semibold ${isMovingToResults ? 'text-orange-600' : 'text-blue-600'}`}>{
                currentSection + 1 < examType.sections.length 
                  ? examType.sections[currentSection + 1].name
                  : "Results"
              }</span>
            </p>

            {/* Enhanced Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                {isMovingToResults ? (
                  // Results dots - Golden theme
                  <>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </>
                ) : (
                  // Next section dots - Blue theme
                  <>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </>
                )}
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className={`h-full rounded-full animate-pulse ${isMovingToResults 
                  ? 'bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500' 
                  : 'bg-gradient-to-r from-green-500 via-blue-500 to-indigo-500'
                }`} style={{ width: isMovingToResults ? '95%' : '75%' }}></div>
              </div>
            </div>

            {/* Enhanced Spinner */}
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative">
                {isMovingToResults ? (
                  // Results spinner - Golden theme
                  <>
                    <div className="absolute inset-0 rounded-full border-4 border-yellow-200/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-600 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-orange-200/30"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-orange-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                  </>
                ) : (
                  // Next section spinner - Blue theme
                  <>
                    <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                    <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                  </>
                )}
              </div>
            </div>

            {/* Results-specific celebration message */}
            {isMovingToResults && (
              <div className="mt-4 text-sm text-orange-600 font-medium animate-pulse">
                🎊 Preparing your final results...
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (examSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 flex items-center justify-center p-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
          
          {/* Floating stars */}
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${1 + Math.random()}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 bg-gray-800/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-lg w-full border border-gray-700/20">
          <div className="text-center">
            {/* Unique Success Icon with Rocket */}
            <div className="relative mb-8">
              <div className="w-24 h-24 mx-auto relative">
                {/* Outer Ring - Blue */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                
                {/* Middle Ring - Indigo */}
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                
                {/* Inner Ring - Purple */}
                <div className="absolute inset-4 rounded-full border-4 border-purple-200/30"></div>
                <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDuration: '1.5s' }}></div>
                
                {/* Inner Circle with Rocket Icon */}
                <div className="absolute inset-6 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-2xl">🚀</div>
                </div>
                
                {/* Rocket trail effect */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-gradient-to-t from-orange-400 to-transparent rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Content */}
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">🚀 Final Submission!</h2>
            <p className="text-gray-300 mb-6 text-sm sm:text-base">
              Launching your results into orbit...
            </p>

            {/* Unique Progress Animation */}
            <div className="mb-6">
              <div className="space-y-3">
                {examType.sections.map((section, index) => (
                  <div key={section.id} className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-lg border border-gray-600">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{section.name}</div>
                        <div className="text-xs text-blue-400 font-medium">🚀 Launching...</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {/* Rocket animation */}
                      <div className="w-6 h-6 relative">
                        <div className="absolute inset-0 text-blue-400 animate-bounce">🚀</div>
                      </div>
                      {/* Progress dots */}
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Overall Progress with Rocket */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Mission Progress</span>
                <span>🚀 Launching...</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse relative" style={{ width: '95%' }}>
                  {/* Rocket on progress bar */}
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1 py-3 text-white text-sm animate-bounce">🚀</div>
                </div>
              </div>
            </div>

            {/* Launch Sequence */}
            {/* <div className="space-y-2 text-sm">
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>🚀 Mission Control: Systems check</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <span>🔥 Ignition sequence initiated</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                <span>📊 Data processing in orbit</span>
              </div>
              <div className="flex items-center justify-center space-x-2 text-gray-300">
                <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                <span>⭐ Results preparing for landing</span>
              </div>
            </div> */}

            {/* Enhanced Spinner with Rocket Theme */}
            <div className="relative mt-6">
              <div className="w-16 h-16 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                <div className="absolute inset-4 rounded-full border-4 border-purple-200/30"></div>
                <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-purple-500 animate-spin" style={{ animationDuration: '1s' }}></div>
              </div>
            </div>

            {/* Final message */}
            <div className="mt-4 text-sm text-blue-400 font-medium animate-pulse">
              🚀 Mission accomplished! Preparing for results touchdown...
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Don't render the exam interface until timers are initialized
  if (!timersInitialized) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full border border-white/20">
          <div className="text-center">
            {/* Enhanced Loading Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                
                {/* Middle Ring */}
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                
                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Loading Exam...</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Please wait while we prepare your exam.</p>

            {/* Enhanced Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ width: '60%' }}></div>
              </div>
            </div>

            {/* Enhanced Spinner */}
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header 
        className="text-white py-3 px-4"
                 style={{ 
           backgroundColor: company.id === 'accenture' ? '#A100FF' : 
                          company.id === 'tcs-nqt' ? '#0066CC' :
                          company.id === 'cognizant' ? '#1F4E79' :
                          company.id === 'wipro' ? '#0066CC' :
                         company.id === 'infosys' ? '#0073E6' :
                           company.id === 'microsoft' ? '#0078D4' :
                           company.id === 'hcl' ? '#FF6600' :
                           company.id === 'capgemini' ? '#FF6B35' :
                           '#3B82F6' // Default blue
         }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="text-sm sm:text-lg font-bold">{examType.name}</div>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-6">
            <Timer 
              timeLeft={company.id === 'microsoft' ? (sectionTimeLeft[0] || 0) : (sectionTimeLeft[currentSection] || 0)}
                              onTimeUp={company.id === 'cognizant' ? handleCognizantSectionSubmit : 
                         company.id === 'wipro' ? handleWiproSectionSubmit :
                         company.id === 'infosys' ? handleInfosysSectionSubmit : handleTimeUp}
              warningThreshold={300}
            />
            <button
              onClick={handleExamEnd}
              className="bg-red-600 hover:bg-red-700 text-white px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-medium transition-colors flex items-center space-x-1 sm:space-x-2"
            >
              <LogOut className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="hidden sm:inline">Exit Test</span>
              <span className="sm:hidden">Exit</span>
            </button>
          </div>
        </div>
      </header>

      {/* Section Navigation */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex space-x-1 overflow-x-auto pb-2 scrollbar-hide">
            {examType.sections.map((section, sIndex) => {
              const isActive = sIndex === currentSection;
              const isCompleted = sIndex < currentSection;
              const isSubmitted = submittedSections.has(sIndex);
              const isMicrosoft = company.id === 'microsoft';
              const isCognizant = company.id === 'cognizant';
              const isWipro = company.id === 'wipro';
              const isInfosys = company.id === 'infosys';
              const canSwitch = isMicrosoft ? true : (sIndex === currentSection);
              
              return (
                <div
                  key={section.id}
                  className={`relative flex-shrink-0 px-2 sm:px-3 py-1.5 sm:py-2 rounded-md font-medium text-xs transition-all duration-200 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md'
                      : isCompleted
                        ? isMicrosoft
                          ? 'bg-green-500 text-white cursor-pointer hover:bg-green-600'
                          : 'bg-green-500 text-white cursor-not-allowed'
                        : canSwitch
                          ? 'bg-white text-gray-700 border border-gray-300 cursor-pointer hover:bg-gray-50 hover:border-blue-300'
                          : 'bg-gray-200 text-gray-400 border border-gray-300 cursor-not-allowed opacity-60'
                  }`}
                  onClick={() => {
                    if (canSwitch && sIndex !== currentSection) {
                      setCurrentSection(sIndex);
                      setCurrentQuestion(0);
                      setCurrentSubsection(0);
                    }
                  }}
                  title={!canSwitch ? (isMicrosoft ? '' : 'Cannot go back to previous sections after submission') : ''}
                >
                  <div className="flex items-center space-x-1">
                    {isActive && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                    )}
                    {isCompleted && !isActive && (
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                    )}
                    <span className="font-medium">{section.name}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Current Section Info */}
      <div className="bg-white border-b px-4 py-2">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
            <div className="text-base sm:text-lg font-semibold text-blue-600">
              {formatSectionName(currentSectionData.name, currentSection)}
              {hasSubsections && currentSubsectionData && (
                <span className="text-xs sm:text-sm text-gray-600 ml-1 sm:ml-2">
                  - {currentSubsectionData.name}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              {company.id === 'microsoft' ? (
                <button
                  onClick={handleExamEnd}
                  className="bg-green-600 hover:bg-green-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="hidden sm:inline">Submit All Sections</span>
                  <span className="sm:hidden">Submit All</span>
                </button>
              ) : (
                <button
                  onClick={company.id === 'cognizant' ? handleCognizantSectionSubmit : 
                          company.id === 'wipro' ? handleWiproSectionSubmit :
                          company.id === 'infosys' ? handleInfosysSectionSubmit : handleSubmitSection}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-2 sm:px-4 py-1.5 sm:py-2 rounded text-xs sm:text-sm font-medium transition-colors"
                >
                  <span className="hidden sm:inline">Submit Section</span>
                  <span className="sm:hidden">Submit</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <QuestionPanel
          company={company}
          examType={examType}
          currentSection={currentSectionData}
          currentQuestion={currentQuestion}
          questions={currentQuestions}
          onQuestionChange={handleQuestionChange}
          onAnswerChange={handleAnswerChange}
          answers={answers}
          markedForReview={markedForReview}
          onMarkForReview={handleMarkForReview}
          getQuestionStatus={getQuestionStatus}
        />
      </div>
    </div>
  );
};

export default ExamInterface; 