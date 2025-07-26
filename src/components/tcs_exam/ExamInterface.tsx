import React, { useState, useEffect } from 'react';
import { Clock, ChevronRight, CheckCircle, AlertCircle } from 'lucide-react';
import Timer from './Timer';
import QuestionPanel from './QuestionPanel';
import SectionProgress from './SectionProgress';
import ResultsPage from './ResultsPage';

interface ExamInterfaceProps {
  onExamEnd: () => void;
}

const EXAM_SECTIONS = [
  {
    id: 'foundational',
    name: 'Foundational Section',
    totalTime: 75 * 60, // 75 minutes in seconds
    subsections: [
      { id: 'verbal', name: 'Verbal Ability', questions: 22, timeLimit: 25 * 60 },
      { id: 'reasoning', name: 'Reasoning Ability', questions: 22, timeLimit: 25 * 60 },
      { id: 'numerical', name: 'Numerical Ability', questions: 21, timeLimit: 25 * 60 }
    ]
  },
  {
    id: 'advanced',
    name: 'Advanced Cognitive Skills',
    totalTime: 115 * 60, // 115 minutes in seconds (25+25+65)
    subsections: [
      { id: 'adv-quant', name: 'Advanced Quantitative', questions: 15, timeLimit: 25 * 60 },
      { id: 'adv-reasoning', name: 'Advanced Reasoning', questions: 15, timeLimit: 25 * 60 },
      { id: 'coding', name: 'Advanced Coding', questions: 3, timeLimit: 65 * 60 } // 65 minutes for coding
    ]
  }
];

const ExamInterface: React.FC<ExamInterfaceProps> = ({ onExamEnd }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [sectionTimeLeft, setSectionTimeLeft] = useState(0);
  const [examCompleted, setExamCompleted] = useState(false);
  const [sectionSubmitted, setSectionSubmitted] = useState(false);

  const currentSectionData = EXAM_SECTIONS[currentSection];
  const currentSubsectionData = currentSectionData.subsections[currentSubsection];

  // Initialize timer for first subsection
  useEffect(() => {
    setSectionTimeLeft(currentSubsectionData.timeLimit);
  }, [currentSubsectionData.timeLimit]);

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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {currentSectionData.name}
                </h1>
                <p className="text-sm text-gray-500">
                  {currentSubsectionData.name}
                </p>
              </div>
              <div className="hidden md:block">
                <SectionProgress 
                  sections={EXAM_SECTIONS}
                  currentSection={currentSection}
                  currentSubsection={currentSubsection}
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Timer 
                timeLeft={sectionTimeLeft}
                onTimeUp={handleTimeUp}
                warningThreshold={300} // 5 minutes
              />
              <button
                onClick={handleSubmitSubsection}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Submit Section
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
            <span>Overall Progress</span>
            <span>{Math.round(getTotalProgress())}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${getTotalProgress()}%` }}
            ></div>
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
        />
      </div>

      {/* Mobile Progress */}
      <div className="md:hidden bg-white border-t px-4 py-3">
        <SectionProgress 
          sections={EXAM_SECTIONS}
          currentSection={currentSection}
          currentSubsection={currentSubsection}
        />
      </div>
    </div>
  );
};

export default ExamInterface;