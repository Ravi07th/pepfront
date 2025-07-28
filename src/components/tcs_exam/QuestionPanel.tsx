import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Code, Flag, SkipForward, AlertTriangle, Copy, RotateCcw } from 'lucide-react';
import { mockQuestions } from '@/data/tcsQuestions';

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
  getQuestionStatus
}) => {
  const questions = mockQuestions[sectionId]?.[subsectionId] || [];
  const currentQuestionData = questions[currentQuestion];
  const [copiedCode, setCopiedCode] = React.useState(false);

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
    if (subsectionId.includes('coding')) return <Code className="h-5 w-5" />;
    if (subsectionId.includes('numerical') || subsectionId.includes('quant')) return <Calculator className="h-5 w-5" />;
    return <BookOpen className="h-5 w-5" />;
  };

  return (
    <div className="flex-1 flex">
      {/* Question Navigation Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 p-4">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            {getQuestionIcon()}
            <span>{subsectionName}</span>
          </h3>
          <div className="text-sm text-gray-600">
            Question Palette
          </div>
        </div>
        
        <div className="grid grid-cols-6 gap-2 mb-6">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const status = getQuestionStatus(sectionId, subsectionId, index);
            
            return (
              <button
                key={index}
                onClick={() => onQuestionChange(index)}
                className={`aspect-square flex items-center justify-center text-xs font-medium rounded transition-all ${
                  status === 'current'
                    ? 'bg-blue-600 text-white border-2 border-blue-800'
                    : status === 'answered'
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : status === 'answered-marked'
                        ? 'bg-purple-500 text-white hover:bg-purple-600'
                        : status === 'marked'
                          ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                          : 'bg-red-500 text-white hover:bg-red-600'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="space-y-2 text-xs">
          <div className="font-medium text-gray-700 mb-2">Legend:</div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            <span className="text-gray-600">Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-red-500 rounded"></div>
            <span className="text-gray-600">Not Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-yellow-500 rounded"></div>
            <span className="text-gray-600">Marked for Review</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-purple-500 rounded"></div>
            <span className="text-gray-600">Answered & Marked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-gray-600">Current</span>
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-6 bg-white overflow-y-auto">
          <div className="max-w-5xl mx-auto">
            {/* Question Header */}
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                Question No. {currentQuestion + 1}
              </h2>
              {subsectionId.includes('coding') && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Note: This question is mandatory for you to attempt.</p>
                      <p><strong>This coding section is not included in total marks.</strong> You can give answer in any coding language.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Question */}
            <div className="mb-6">
              <div className="text-lg text-gray-900 leading-relaxed mb-6 bg-gray-50 p-4 rounded-lg">
                {currentQuestionData.question}
              </div>
              
              {currentQuestionData.context && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-gray-700">{currentQuestionData.context}</p>
                </div>
              )}

              {/* Options */}
              {currentQuestionData.type === 'coding' ? (
                <div className="space-y-4">
                  {/* Code Editor Toolbar */}
                  <div className="flex items-center justify-between bg-gray-100 px-4 py-2 rounded-t-lg border border-gray-300">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Code Editor</span>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">C Language</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={handleCopyCode}
                        className="flex items-center space-x-1 px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                      >
                        <Copy className="h-3 w-3" />
                        <span>{copiedCode ? 'Copied!' : 'Copy'}</span>
                      </button>
                      <button
                        onClick={handleResetCode}
                        className="flex items-center space-x-1 px-3 py-1 text-xs bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
                      >
                        <RotateCcw className="h-3 w-3" />
                        <span>Reset</span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Code Editor */}
                  <textarea
                    value={currentAnswer || getBoilerplateCode()}
                    onChange={(e) => handleAnswerSelect(e.target.value)}
                    placeholder="Write your C code here..."
                    className="w-full h-96 p-4 border border-gray-300 rounded-b-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-50 leading-relaxed"
                    style={{ 
                      fontFamily: 'Monaco, Menlo, "Ubuntu Mono", Consolas, source-code-pro, monospace',
                      fontSize: '14px',
                      lineHeight: '1.5',
                      tabSize: 4
                    }}
                    spellCheck={false}
                  />
                  
                  {/* Code Editor Features */}
                  <div className="text-xs text-gray-500 bg-gray-50 px-3 py-2 rounded border">
                    <div className="flex items-center justify-between">
                      <span>💡 Tips: Use proper indentation • Include necessary headers • Test with sample inputs</span>
                      <span>Lines: {(currentAnswer || getBoilerplateCode()).split('\n').length}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {currentQuestionData.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`w-full text-left p-4 border rounded-lg transition-all hover:bg-gray-50 ${
                        currentAnswer === option
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                          currentAnswer === option
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300 bg-white'
                        }`}>
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
        </div>

        {/* Navigation Footer */}
        <div className="bg-gray-100 border-t border-gray-200 px-6 py-4">
          <div className="max-w-5xl mx-auto flex items-center justify-between">
            {/* Left side buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleMarkForReview}
                className={`flex items-center space-x-2 px-4 py-2 rounded font-medium transition-all ${
                  markedForReview[questionId]
                    ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                    : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                }`}
              >
                <Flag className="h-4 w-4" />
                <span>Mark for Review & Next</span>
              </button>
              
              <button
                onClick={handleClearResponse}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded font-medium hover:bg-gray-300 transition-all"
              >
                Clear Response
              </button>
            </div>

            {/* Center - Question navigation */}
            <div className="flex items-center space-x-4">
            <button
              onClick={() => onQuestionChange(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded font-medium hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              onClick={() => onQuestionChange(Math.min(totalQuestions - 1, currentQuestion + 1))}
              disabled={currentQuestion === totalQuestions - 1}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded font-medium hover:bg-blue-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
            </div>

            {/* Right side button */}
            <div>
              <button
                onClick={handleSaveAndNext}
                disabled={currentQuestion === totalQuestions - 1}
                className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded font-medium hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <span>Save & Next</span>
                <SkipForward className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionPanel;