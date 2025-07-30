import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import Timer from './Timer';
import QuestionPanel from './QuestionPanel';
import SectionProgress from './SectionProgress';
import ResultsPage from './ResultsPage';
import { ScrollToTop } from '../ScrollToTop';

interface ExamInterfaceProps {
  onExamEnd: () => void;
}

const EXAM_SECTIONS = [
  {
    id: 'foundational',
    name: 'Foundational Section',
    totalTime: 75 * 60, // 75 minutes in seconds
    subsections: [
      { id: 'numerical', name: 'Numerical Ability', questions: 20, timeLimit: 25 * 60 },
      { id: 'verbal', name: 'Verbal Ability', questions: 20, timeLimit: 20 * 60 },
      { id: 'reasoning', name: 'Reasoning Ability', questions: 25, timeLimit: 25 * 60 }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Cognitive Skills',
    totalTime: 115 * 60, // 115 minutes in seconds (25+25+65)
    subsections: [
      { id: 'adv-quant', name: 'Quantitative & Logical', questions: 15, timeLimit: 25 * 60 },
      { id: 'coding', name: 'Advanced Coding', questions: 3, timeLimit: 90 * 60 } // 65 minutes for coding
    ]
  }
];

const ExamInterface: React.FC<ExamInterfaceProps> = ({ onExamEnd }) => {
  // Force initialization to start from numerical ability (first subsection)
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [sectionTimeLeft, setSectionTimeLeft] = useState(EXAM_SECTIONS[0].subsections[0].timeLimit);
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [sectionSubmitted, setSectionSubmitted] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Exit fullscreen when exam ends
  const handleExamEnd = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
    onExamEnd();
  };

  const currentSectionData = EXAM_SECTIONS[currentSection];
  const currentSubsectionData = currentSectionData.subsections[currentSubsection];

  // Force proper initialization on component mount
  useEffect(() => {
    console.log('ExamInterface mounted - forcing reset to numerical ability');
    
    // Reset to first section, first subsection (Numerical Ability)
    setCurrentSection(0);
    setCurrentSubsection(0);
    setCurrentQuestion(0);
    setSectionTimeLeft(EXAM_SECTIONS[0].subsections[0].timeLimit);
    setIsInitialized(true);
    
    console.log('Initial state set:', {
      section: 0,
      subsection: 0,
      subsectionName: EXAM_SECTIONS[0].subsections[0].name,
      timeLimit: EXAM_SECTIONS[0].subsections[0].timeLimit
    });
  }, []); // Empty dependency array - only run once on mount

  // Update timer when subsection changes (but not on initial mount)
  useEffect(() => {
    if (isInitialized && currentSubsectionData) {
      setSectionTimeLeft(currentSubsectionData.timeLimit);
      console.log('Subsection changed to:', currentSubsectionData.name);
    }
  }, [currentSection, currentSubsection, isInitialized]);

  const handleTimeUp = () => {
    // Auto submit current subsection when time is up
    handleNextSubsection();
  };

  const handleAnswerChange = (questionId: string, answer: any) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextSubsection = () => {
    const nextSubsection = currentSubsection + 1;
    
    if (nextSubsection < currentSectionData.subsections.length) {
      // Move to next subsection
      setCurrentSubsection(nextSubsection);
      setCurrentQuestion(0);
      setSectionTimeLeft(currentSectionData.subsections[nextSubsection].timeLimit);
      setSectionSubmitted(false);
    } else {
      // Move to next section or complete exam
      const nextSection = currentSection + 1;
      if (nextSection < EXAM_SECTIONS.length) {
        setCurrentSection(nextSection);
        setCurrentSubsection(0);
        setCurrentQuestion(0);
        setSectionTimeLeft(EXAM_SECTIONS[nextSection].subsections[0].timeLimit);
        setSectionSubmitted(false);
      } else {
        // Exam completed
        setExamCompleted(true);
      }
    }
  };

  const handleSubmitSubsection = () => {
    setSectionSubmitted(true);
    setTimeout(() => {
      handleNextSubsection();
    }, 2000); // Show submission confirmation for 2 seconds
  };

  const getTotalProgress = () => {
    let totalQuestions = 0;
    let answeredQuestions = 0;
    
    EXAM_SECTIONS.forEach((section, sIndex) => {
      section.subsections.forEach((subsection, ssIndex) => {
        totalQuestions += subsection.questions;
        if (sIndex < currentSection || (sIndex === currentSection && ssIndex < currentSubsection)) {
          answeredQuestions += subsection.questions;
        } else if (sIndex === currentSection && ssIndex === currentSubsection) {
          answeredQuestions += currentQuestion;
        }
      });
    });

    return (answeredQuestions / totalQuestions) * 100;
  };

  const getQuestionStatus = (sectionId: string, subsectionId: string, questionIndex: number) => {
    const questionId = `${sectionId}-${subsectionId}-${questionIndex}`;
    const isAnswered = answers[questionId] !== undefined;
    const isMarked = markedForReview[questionId];
    const isCurrent = questionIndex === currentQuestion && 
                     sectionId === currentSectionData.id && 
                     subsectionId === currentSubsectionData.id;

    if (isCurrent) return 'current';
    if (isAnswered && isMarked) return 'answered-marked';
    if (isAnswered) return 'answered';
    if (isMarked) return 'marked';
    return 'not-visited';
  };

  // Don't render until properly initialized
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p>Initializing Numerical Ability test...</p>
        </div>
      </div>
    );
  }

  if (examCompleted) {
    return <ResultsPage answers={answers} onReturnHome={onExamEnd} />;
  }

  if (sectionSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
        <div className="text-center bg-white p-12 rounded-2xl shadow-xl">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Section Submitted!</h2>
          <p className="text-gray-600 mb-4">
            Moving to: <span className="font-semibold">{
              currentSubsection + 1 < currentSectionData.subsections.length 
                ? currentSectionData.subsections[currentSubsection + 1].name
                : currentSection + 1 < EXAM_SECTIONS.length 
                  ? EXAM_SECTIONS[currentSection + 1].subsections[0].name
                  : "Results"
            }</span>
          </p>
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop/>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        {/* Header */}
        <header className="bg-blue-600 text-white py-2 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl text-center font-bold">TCS NQT PRACTICE TEST</div>
            <div className="flex items-center space-x-6">
              <Timer 
                timeLeft={sectionTimeLeft}
                onTimeUp={handleTimeUp}
                warningThreshold={300}
              />
              <div className="text-md space-x-2">
                Time Left: {Math.floor(sectionTimeLeft / 60)}:{(sectionTimeLeft % 60).toString().padStart(2, '0')}
              </div>
            </div>
          </div>
        </header>

        {/* Section Navigation */}
        <div className="bg-gray-200 border-b">
          <div className="max-w-7xl mx-5 px-4 py-2">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-bold">Current Section: {currentSectionData.name}</h1>
              {/* Debug info */}
              <div className="text-sm text-gray-600">
                Debug: Section {currentSection}, Subsection {currentSubsection}
              </div>
            </div>
            <div className="flex space-x-2 mt-2">
              <h2 className="text-md font-semibold mr-4">Subsections:</h2>
              {EXAM_SECTIONS.map((section, sIndex) => 
                section.subsections.map((subsection, ssIndex) => {
                  const isActive = sIndex === currentSection && ssIndex === currentSubsection;
                  const isPast = sIndex < currentSection || (sIndex === currentSection && ssIndex < currentSubsection);
                  
                  return (
                    <div
                      key={`${section.id}-${subsection.id}`}
                      className={`px-3 py-2 text-sm font-medium rounded ${
                        isActive
                          ? 'bg-blue-600 text-white'
                          : isPast
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {subsection.name}
                      {isActive && ' (Current)'}
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>

        {/* Current Section Info */}
        <div className="bg-white border-b px-4 py-2">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold text-blue-600">
                {currentSubsectionData.name}
                <span className="text-sm text-gray-600 ml-2">
                  ({currentSubsectionData.questions} questions, {Math.floor(currentSubsectionData.timeLimit / 60)} minutes)
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  Question No. {currentQuestion + 1} of {currentSubsectionData.questions}
                </span>
                <button
                  onClick={handleSubmitSubsection}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded text-sm font-medium transition-colors"
                >
                  Submit Section
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex">
          <QuestionPanel
            sectionId={currentSectionData.id}
            subsectionId={currentSubsectionData.id}
            subsectionName={currentSubsectionData.name}
            currentQuestion={currentQuestion}
            totalQuestions={currentSubsectionData.questions}
            onQuestionChange={setCurrentQuestion}
            onAnswerChange={handleAnswerChange}
            answers={answers}
            markedForReview={markedForReview}
            onMarkForReview={handleMarkForReview}
            getQuestionStatus={getQuestionStatus}
          />
        </div>
      </div>
    </>
  );
};

export default ExamInterface;
