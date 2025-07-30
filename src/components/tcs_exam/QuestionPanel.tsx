import React from 'react';
import { ChevronLeft, ChevronRight, BookOpen, Calculator, Code, Flag, SkipForward, SkipBack, AlertTriangle, Copy, RotateCcw } from 'lucide-react';
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
}

const QuestionPanel: React.FC<QuestionPanelProps> = ({
  sectionId,
  subsectionId,
  subsectionName,
  currentQuestion,
  totalQuestions,
  onQuestionChange,
  onAnswerChange,
  answers
}) => {
  const questions = mockQuestions[sectionId]?.[subsectionId] || [];
  const currentQuestionData = questions[currentQuestion];

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

  const getQuestionIcon = () => {
    if (subsectionId.includes('coding')) return <Code className="h-5 w-5" />;
    if (subsectionId.includes('numerical') || subsectionId.includes('quant')) return <Calculator className="h-5 w-5" />;
    return <BookOpen className="h-5 w-5 " />;
  };

  return (
    <div className="flex-1  flex">
      {/* Question Navigation Sidebar */}
      <div className="w-80 bg-gray-50 border-r border-gray-200 p-4">
        <div className="mb-4">
          <h3 className="font-semibold text-gray-900 mb-2 flex items-center space-x-2">
            {getQuestionIcon()}
            <span className="text-blue-900">{subsectionName}</span>
          </h3>
          <div className="text-sm ">
            Question Palette
          </div>
        </div>
        
        <div className="grid grid-cols-5 gap-2 mr-7 mb-6">
          {Array.from({ length: totalQuestions }, (_, index) => {
            const qId = `${sectionId}-${subsectionId}-${index}`;
            const isAnswered = answers[qId] !== undefined;
            const isCurrent = index === currentQuestion;
            
            return (
              
              <button
                key={index}
                onClick={() => onQuestionChange(index)}
                className={`aspect-square flex  items-center justify-center text-sm font-medium rounded-lg transition-all ${
                  isCurrent
                    ? 'bg-blue-600 text-white'
                    : isAnswered
                      ? 'bg-green-100 text-green-700 hover:bg-green-200'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-6 space-y-2 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-blue-600 rounded"></div>
            <span className="text-gray-600">Current</span>
          </div>
          <div className="flex items-center space-x-2">
            
            <div className="w-4 h-4 bg-green-500 rounded"></div>
            
            <span className="text-gray-600">Answered</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-200 rounded"></div>
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
          
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex-1 p-8 bg-white overflow-y-auto">
          <div className="max-w-4xl mx-auto">
            {/* Question Header */}
            <div className="mb-3">
              <h2 className="text-lg font-semibold text-gray-900 ">
                Question No. {currentQuestion + 1}
              </h2> 
            </div>

            {/* Question */}
            <div className="mb-6">
              <div className="text-lg text-gray-900 leading-relaxed bg-gray-50 p-4 rounded-lg">
                {currentQuestionData.question}
              </div>
              
              {currentQuestionData.context && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  {subsectionId.includes('coding') && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                  <div className="flex items-start space-x-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium mb-1">Note: This question is mandatory for you to attempt.</p>
                      <p><strong>“The coding section will not be included in the total marks as the compiler feature is currently unavailable.”</strong> You can write your answer in any programming language. Before submitting, copy the code and check it in any online compiler</p>
                    </div>
                  </div>
                </div>
              )}
                </div>
              )}

              {/* Options */}
              {currentQuestionData.type === 'coding' ? (
                <div className="space-y-4">
                  {/* Code Editor Toolbar */}
                  <div className="flex items-center justify-between bg-gray-200 px-4 py-2 rounded-t-lg border border-gray-300">
                    <div className="flex items-center space-x-2">
                      <Code className="h-4 w-4 text-gray-600" />
                      <span className="text-sm font-medium text-gray-700">Code Editor</span>
                      <span className="text-xs text-gray-500 bg-gray-200 px-2 py-1 rounded">Use Any Language</span>
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
                    value={currentAnswer || ''}
                    onChange={(e) => handleAnswerSelect(e.target.value)}
                    placeholder="Write your C code here..."
                    className="w-full h-96 p-4 border border-gray-300 rounded-b-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-gray-100 leading-relaxed"
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
                          ? 'border-blue-500 bg-blue-50 text-blue-900'
                          : 'border-gray-200 text-gray-700'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-medium ${
                          currentAnswer === option
                            ? 'border-blue-500 bg-blue-500 text-white'
                            : 'border-gray-300'
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
        <div className="bg-gray-50 border-t border-gray-200 px-8 py-4">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <button
              onClick={() => onQuestionChange(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              <SkipBack className="h-4 w-12" />
              <span>Previous</span>
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