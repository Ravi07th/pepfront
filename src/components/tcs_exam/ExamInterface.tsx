import React, { useState, useEffect } from "react";
import { Clock, CheckCircle, Timer as TimerIcon, LogOut } from "lucide-react";
import Timer from "./Timer";
import QuestionPanel from "./QuestionPanel";
import ResultsPage from "./ResultsPage";
import { mockQuestions } from "@/data/tcsQuestions";

// -- Section + Subsection definitions (Numerical Ability is first!) --
const EXAM_SECTIONS = [
  {
    id: "foundational",
    name: "Foundational Section",
    subsections: [
      {
        id: "numerical",
        name: "Numerical Ability",
        questions: mockQuestions.foundational.numerical.length,
        timeLimit: 25 * 60,
      },
      {
        id: "verbal",
        name: "Verbal Ability",
        questions: mockQuestions.foundational.verbal.length,
        timeLimit: 25 * 60,
      },
      {
        id: "reasoning",
        name: "Reasoning Ability",
        questions: mockQuestions.foundational.reasoning.length,
        timeLimit: 25 * 60,
      },
    ],
  },
  {
    id: "advanced",
    name: "Advanced Cognitive Skills",
    subsections: [
      {
        id: "adv-quant",
        name: "Advanced Quantitative",
        questions: mockQuestions.advanced["adv-quant"].length,
        timeLimit: 25 * 60,
      },
      {
        id: "coding",
        name: "Advanced Coding",
        questions: mockQuestions.advanced.coding.length,
        timeLimit: 65 * 60,
      },
    ],
  },
];

interface ExamInterfaceProps {
  onExamEnd: () => void;
}

const ExamInterface: React.FC<ExamInterfaceProps> = ({ onExamEnd }) => {
  // --- THESE INITIAL STATES GUARANTEE NUMERICAL (1st) ABILITY START ---
  const [currentSection, setCurrentSection] = useState(0);
  const [currentSubsection, setCurrentSubsection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [examCompleted, setExamCompleted] = useState(false);
  const [sectionSubmitted, setSectionSubmitted] = useState(false);
  const [sectionTimeLeft, setSectionTimeLeft] = useState(() =>
    EXAM_SECTIONS[0].subsections[0].timeLimit
  );

  // Guard: force reset on first mount just in case
  useEffect(() => {
    setCurrentSection(0);
    setCurrentSubsection(0);
    setCurrentQuestion(0);
  }, []);

  const currentSectionData = EXAM_SECTIONS[currentSection];
  const currentSubsectionData = currentSectionData.subsections[currentSubsection];

  useEffect(() => {
    setSectionTimeLeft(currentSubsectionData.timeLimit);
    setCurrentQuestion(0); // Reset to Q#1 in each new subsection
  }, [currentSection, currentSubsection]);

  // Handle timer expiry or forced next
  const handleTimeUp = () => handleNextSubsection();

  // Save answer for question
  const handleAnswerChange = (questionId: string, answer: any) =>
    setAnswers((prev) => ({ ...prev, [questionId]: answer }));

  const handleMarkForReview = (questionId: string) =>
    setMarkedForReview((prev) => ({ ...prev, [questionId]: !prev[questionId] }));

  // Go to next subsection/section, else finish
  const handleNextSubsection = () => {
    const nextSubsection = currentSubsection + 1;
    if (nextSubsection < currentSectionData.subsections.length) {
      setCurrentSubsection(nextSubsection);
      setSectionSubmitted(false);
    } else {
      const nextSection = currentSection + 1;
      if (nextSection < EXAM_SECTIONS.length) {
        setCurrentSection(nextSection);
        setCurrentSubsection(0);
        setSectionSubmitted(false);
      } else {
        setExamCompleted(true);
      }
    }
  };

  const handleSubmitSubsection = () => {
    setSectionSubmitted(true);
    setTimeout(() => {
      handleNextSubsection();
    }, 2000);
  };

  // Color logic for question palette
  const getQuestionStatus = (
    sectionId: string,
    subsectionId: string,
    questionIndex: number
  ) => {
    const questionId = `${sectionId}-${subsectionId}-${questionIndex}`;
    const isAnswered = answers[questionId] !== undefined;
    const isMarked = markedForReview[questionId];
    const isCurrent =
      questionIndex === currentQuestion &&
      sectionId === currentSectionData.id &&
      subsectionId === currentSubsectionData.id;
    if (isCurrent) return "current";
    if (isAnswered && isMarked) return "answered-marked";
    if (isAnswered) return "answered";
    if (isMarked) return "marked";
    return "not-visited";
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
            Moving to:{" "}
            <span className="font-semibold">
              {currentSubsection + 1 < currentSectionData.subsections.length
                ? currentSectionData.subsections[currentSubsection + 1].name
                : currentSection + 1 < EXAM_SECTIONS.length
                ? EXAM_SECTIONS[currentSection + 1].subsections[0].name
                : "Results"}
            </span>
          </p>
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Changed Header: Added Exit Test button */}
      <header className="bg-blue-900 text-white py-4 px-4">
  <div className="max-w-7xl flex items-center justify-between mx-auto">
    <div className="text-xl flex items-center font-bold space-x-2">
      <TimerIcon className="w-10 h-10 text-yellow-500" />
      <span>NQT Practice Test - IT</span>
    </div>
    <div className="flex items-center space-x-6">
      <Timer
        timeLeft={sectionTimeLeft}
        onTimeUp={handleTimeUp}
        warningThreshold={300}
      />
      <div className="text-sm">
        Time Left: {Math.floor(sectionTimeLeft / 60)}:
        {(sectionTimeLeft % 60).toString().padStart(2, "0")}
      </div>
      {/* Exit Test Button with icon */}
      <button
        onClick={onExamEnd}
        className="ml-6 px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white font-semibold flex items-center gap-2 transition"
        aria-label="Exit Test"
      >
        <LogOut className="h-5 w-5" />
        Exit Test
      </button>
    </div>
  </div>
</header>


      {/* Section Navigation */}
      <div className="bg-gray-200 border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between">
            <div className="text-sm font-medium text-gray-700">Sections</div>
          </div>
          <div className="flex space-x-1 mt-2">
            {EXAM_SECTIONS.map((section, sIndex) =>
              section.subsections.map((subsection, ssIndex) => {
                const isActive =
                  sIndex === currentSection && ssIndex === currentSubsection;
                const isPast =
                  sIndex < currentSection ||
                  (sIndex === currentSection && ssIndex < currentSubsection);
                return (
                  <div
                    key={`${section.id}-${subsection.id}`}
                    className={`px-3 py-1 text-xs font-medium rounded ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : isPast
                        ? "bg-green-500 text-white"
                        : "bg-gray-300 text-gray-600"
                    }`}
                  >
                    {subsection.name}
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
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Question No. {currentQuestion + 1}
              </span>
              <button
                onClick={handleSubmitSubsection}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
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
  );
};

export default ExamInterface;
