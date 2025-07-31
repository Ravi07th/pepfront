import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Calculator,
  Code,
  Flag,
  SkipForward,
  AlertTriangle,
  Copy,
  RotateCcw,
} from "lucide-react";
import { mockQuestions } from "@/data/tcsQuestions";

const QUESTION_PALETTE_BG = "bg-blue-50 border-r border-blue-200 shadow-lg"; // matches TCS left sidebar look

interface QuestionPanelProps {
  sectionId: string;
  subsectionId: string;
  subsectionName: string;
  currentQuestion: number;
  totalQuestions: number;
  onQuestionChange: (questionIndex: number) => void;
  onAnswerChange: (questionId: string, answer: any) => void;
  answers: Record<string, any>;
  markedForReview: Record<string, boolean>;
  onMarkForReview: (questionId: string) => void;
  getQuestionStatus: (sectionId: string, subsectionId: string, questionIndex: number) => string;
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  sectionId,
  subsectionId,
  subsectionName,
  currentQuestion,
  totalQuestions,
  onQuestionChange,
  onAnswerChange,
  answers,
  markedForReview,
  onMarkForReview,
  getQuestionStatus,
}) => {
  const questions = mockQuestions[sectionId]?.[subsectionId] || [];
  const currentQuestionData = questions[currentQuestion];
  const [copiedCode, setCopiedCode] = useState(false);

  if (!currentQuestionData) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No Questions Available</h3>
          <p className="text-gray-500">Questions for this section are being loaded.</p>
        </div>
      </div>
    );
  }

  const questionId = `${sectionId}-${subsectionId}-${currentQuestion}`;
  const currentAnswer = answers[questionId];

  const handleAnswerSelect = (answer: string) => {
    onAnswerChange(questionId, answer);
  };

  const handleMarkForReview = () => {
    onMarkForReview(questionId);
  };

  const handleSaveAndNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      onQuestionChange(currentQuestion + 1);
    }
  };

  const handleClearResponse = () => {
    onAnswerChange(questionId, undefined);
  };

  const getBoilerplateCode = () => {
    return `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main() {
    // Write your code here
    
    return 0;
}`;
  };

  const handleCopyCode = () => {
    const code = currentAnswer || getBoilerplateCode();
    navigator.clipboard.writeText(code).then(() => {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    });
  };

  const handleResetCode = () => {
    handleAnswerSelect(getBoilerplateCode());
  };

  const getQuestionIcon = () => {
    if (subsectionId.includes("coding")) return <Code className="h-5 w-5" />;
    if (subsectionId.includes("numerical") || subsectionId.includes("quant"))
      return <Calculator className="h-5 w-5" />;
    return <BookOpen className="h-5 w-5" />;
  };

  // --- MAIN RENDER ---
  return (
    <div className="w-full flex min-h-[calc(100vh-56px)] bg-white">
      {/* Question Palette Sidebar */}
      <aside className={`w-[220px] ${QUESTION_PALETTE_BG} flex flex-col py-6 px-4`}>
        <div className="mb-8">
          <div className="flex items-center gap-2 font-bold text-blue-800">
            {getQuestionIcon()}
            <span className="truncate">{subsectionName}</span>
          </div>
        </div>
        {/* Palette */}
        <div className="mb-4 font-semibold text-xs text-gray-700">Question Palette</div>
        <div className="grid grid-cols-5 gap-2 mb-8">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const status = getQuestionStatus(sectionId, subsectionId, index);
            // TCS palette color codes
            const paletteColors = {
              current: "bg-blue-700 border-2 border-blue-800 text-white",
              answered: "bg-green-500 text-white hover:bg-green-600",
              "answered-marked": "bg-purple-500 text-white hover:bg-purple-600",
              marked: "bg-yellow-400 text-white hover:bg-yellow-500",
              "not-visited": "bg-gray-300 text-gray-800 hover:bg-gray-400"
            };
            return (
              <button
                key={index}
                onClick={() => onQuestionChange(index)}
                className={`w-9 h-9 rounded font-bold border-2 border-transparent flex items-center justify-center transition ${paletteColors[status] || ""}`}
                aria-label={`Question ${index + 1} (${status})`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
        {/* Legend */}
        <div className="mt-5 space-y-1 text-xs">
          <div className="font-bold text-gray-700">Legend:</div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-green-500 rounded" /> Answered
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-700 rounded" /> Current
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-yellow-400 rounded" /> Marked
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-purple-500 rounded" /> Answered & Marked
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-300 rounded" /> Not Visited
          </div>
        </div>
      </aside>

      {/* Main Question Content */}
      <main className="flex-1 h-full flex flex-col justify-between px-0 bg-white">
        <div className="flex-1 max-w-4xl mx-auto w-full flex flex-col">
          {/* Question Number and Type (top header) */}
          <div className="px-0 pt-8 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-extrabold text-blue-900 italic mr-2">
                Q{currentQuestion + 1}
              </span>
              <span className="tracking-wider uppercase text-xs text-gray-600">
                {subsectionName}
              </span>
            </div>
          </div>
          {/* Coding Note (if required) */}
          {subsectionId.includes("coding") && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 rounded-md flex items-center gap-3 p-4 mb-4 shadow-sm">
              <AlertTriangle className="h-5 w-5 text-yellow-700" />
              <div>
                <span className="font-semibold text-yellow-800">Note:</span>{" "}
                This question is <span className="font-semibold">mandatory</span>. It does not count towards total marks. Answer can be written in any language.
              </div>
            </div>
          )}

          {/* Question Text */}
          <div className="bg-gray-100 rounded-lg shadow p-6 mt-2 mb-6 text-lg text-gray-900 min-h-[70px]">
            <span className="font-semibold">{currentQuestionData.question}</span>
          </div>

          {/* Context box, if any */}
          {currentQuestionData.context && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
              <p className="text-gray-700">{currentQuestionData.context}</p>
            </div>
          )}

          {/* MCQ or Code Editor */}
          <div className="mb-8">
            {currentQuestionData.type === "coding" ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-t-lg border border-gray-300">
                  <div className="flex items-center gap-2">
                    <Code className="h-4 w-4 text-blue-700" />
                    <span className="text-sm font-semibold text-blue-800">Code Editor</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={handleCopyCode}
                      className="flex items-center space-x-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-300 transition-colors"
                      aria-label="Copy code"
                    >
                      <Copy className="h-3 w-3" />
                      <span>{copiedCode ? "Copied!" : "Copy"}</span>
                    </button>
                    <button
                      onClick={handleResetCode}
                      className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-50 text-gray-600 rounded hover:bg-gray-200 transition-colors"
                      aria-label="Reset code"
                    >
                      <RotateCcw className="h-3 w-3" />
                      <span>Reset</span>
                    </button>
                  </div>
                </div>
                <textarea
                  value={currentAnswer || getBoilerplateCode()}
                  onChange={(e) => handleAnswerSelect(e.target.value)}
                  placeholder="Write your C code here..."
                  className="w-full h-80 p-4 border border-gray-300 rounded-b-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-100 leading-relaxed"
                  style={{
                    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
                    fontSize: "14px",
                    lineHeight: "1.5",
                    tabSize: 4,
                  }}
                  spellCheck={false}
                  aria-label="Code editor textarea"
                />
                <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded border">
                  <div className="flex items-center justify-between">
                    <span>
                      💡 Use indentation • Add necessary headers • Test sample inputs
                    </span>
                    <span>
                      Lines: {(currentAnswer || getBoilerplateCode()).split("\n").length}
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3">
                {currentQuestionData.options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswerSelect(option)}
                    className={`w-full text-left p-4 border rounded-lg transition-all font-medium text-base hover:bg-blue-50
                      ${
                        currentAnswer === option
                          ? "border-blue-600 bg-blue-50 font-bold text-blue-900"
                          : "border-gray-200 text-gray-700"
                      }`}
                    aria-pressed={currentAnswer === option}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`flex-shrink-0 w-7 h-7 rounded-full border-2 flex items-center justify-center text-base font-bold
                        ${
                          currentAnswer === option
                            ? "border-blue-600 bg-blue-600 text-white"
                            : "border-gray-300 bg-white"
                        }`}
                        aria-label={`Option ${String.fromCharCode(65 + index)}`}
                      >
                        {String.fromCharCode(65 + index)}
                      </span>
                      <span>{option}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Navigation bar (bottom) */}
        <footer className="bg-blue-50 border-t border-blue-200 px-6 py-4 shadow-inner">
          <div className="flex flex-wrap justify-between items-center gap-3 max-w-4xl mx-auto">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleMarkForReview}
                className={`flex items-center space-x-2 px-4 py-2 rounded font-semibold transition-all 
                  ${
                    markedForReview[questionId]
                      ? "bg-yellow-400 text-gray-900 border border-yellow-700"
                      : "bg-yellow-100 text-yellow-900 border border-yellow-200"
                  }`}
                aria-pressed={!!markedForReview[questionId]}
                aria-label="Mark for review"
              >
                <Flag className="h-4 w-4" />
                <span>Mark for Review</span>
              </button>
              <button
                onClick={handleClearResponse}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded font-semibold hover:bg-gray-200 border border-gray-300 transition"
                aria-label="Clear response"
              >
                Clear
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => onQuestionChange(Math.max(0, currentQuestion - 1))}
                disabled={currentQuestion === 0}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded font-semibold hover:bg-blue-200 border border-blue-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Prev</span>
              </button>
              <button
                onClick={() => onQuestionChange(Math.min(totalQuestions - 1, currentQuestion + 1))}
                disabled={currentQuestion === totalQuestions - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-800 rounded font-semibold hover:bg-blue-200 border border-blue-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <span>Next</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
            <button
              onClick={handleSaveAndNext}
              disabled={currentQuestion === totalQuestions - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-green-700 text-white rounded font-bold hover:bg-green-800 disabled:opacity-50 disabled:cursor-not-allowed border border-green-900 transition"
              aria-label="Save and go to next"
            >
              <span>Save & Next</span>
              <SkipForward className="h-4 w-4" />
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default QuestionPanel;
