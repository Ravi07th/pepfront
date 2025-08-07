import React, { useState, useEffect, useMemo } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle, Flag, SkipForward, ArrowLeft, LogOut } from 'lucide-react';
import { Company, ExamType, ExamState, Question, QuestionStatus } from './types';
import { getLimitedQuestionsByCompanyAndExam } from './data/questions';
import Timer from './Timer';
import QuestionPanel from './QuestionPanel';
import ResultsPage from './ResultsPage';
import { SolutionViewer } from './SolutionViewer';

interface ExamInterfaceProps {
  company: Company;
  examType: ExamType;
  onExamEnd: () => void;
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ 
  company, 
  examType, 
  onExamEnd 
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
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    onExamEnd();
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
    setCurrentQuestion(questionIndex);
    // Mark the current question as visited
    const currentQuestionId = currentQuestions[questionIndex]?.id;
    if (currentQuestionId) {
      setVisitedQuestions(prev => new Set([...prev, currentQuestionId]));
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
    />;
  }

  if (sectionSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Section Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Moving to: <span className="font-semibold">{
              currentSection + 1 < examType.sections.length 
                ? examType.sections[currentSection + 1].name
                : "Results"
            }</span>
          </p>
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  if (examSubmitting) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Exam Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Processing your results...
          </p>
          <div className="animate-spin h-8 w-8 border-4 border-green-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  // Don't render the exam interface until timers are initialized
  if (!timersInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <h3 className="text-xl font-semibold text-gray-900">Loading Exam...</h3>
          <p className="text-gray-600">Please wait while we prepare your exam.</p>
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
                          company.id === 'tcs' ? '#0066CC' :
                          company.id === 'cognizant' ? '#1F4E79' :
                          company.id === 'cognizant' ? '#1F4E79' :
                          company.id === 'wipro' ? '#0066CC' :
                         company.id === 'infosys' ? '#0073E6' :
                           company.id === 'microsoft' ? '#0078D4' :
                           company.id === 'hcl' ? '#FF6600' :
                           company.id === 'capgemini' ? '#FF6B35' :
                           '#3B82F6' // Default blue
         }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <img
              src={company.logo}
              alt={company.name}
              className="h-8 w-8 object-contain"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/placeholder.svg';
              }}
            />
            <div className="text-lg font-bold">{examType.name}</div>
          </div>
          <div className="flex items-center space-x-6">
            <Timer 
              timeLeft={company.id === 'microsoft' ? (sectionTimeLeft[0] || 0) : (sectionTimeLeft[currentSection] || 0)}
                              onTimeUp={company.id === 'cognizant' ? handleCognizantSectionSubmit : 
                         company.id === 'wipro' ? handleWiproSectionSubmit :
                         company.id === 'infosys' ? handleInfosysSectionSubmit : handleTimeUp}
              warningThreshold={300}
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

      {/* Section Navigation */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex space-x-1 overflow-x-auto">
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
                  className={`relative flex-shrink-0 px-3 py-2 rounded-md font-medium text-xs transition-all duration-200 ${
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
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold text-blue-600">
              {formatSectionName(currentSectionData.name, currentSection)}
              {hasSubsections && currentSubsectionData && (
                <span className="text-sm text-gray-600 ml-2">
                  - {currentSubsectionData.name}
                </span>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Question {currentQuestion + 1} of {currentQuestions.length}
              </span>
              {company.id === 'microsoft' ? (
                <button
                  onClick={handleExamEnd}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Submit All Sections
                </button>
              ) : (
                <button
                  onClick={company.id === 'cognizant' ? handleCognizantSectionSubmit : 
                          company.id === 'wipro' ? handleWiproSectionSubmit :
                          company.id === 'infosys' ? handleInfosysSectionSubmit : handleSubmitSection}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                >
                  Submit Section
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