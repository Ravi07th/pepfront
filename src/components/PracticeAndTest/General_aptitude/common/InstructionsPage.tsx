import React from 'react';
import { ArrowLeft, Clock, CheckCircle, XCircle, AlertCircle, Flag, User } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';

interface InstructionsPageProps {
  sectionName: string;
  sectionAbbreviation: string;
  sectionIcon: React.ReactNode;
  onStartTest: (topic: string) => void;
  onGoBack: () => void;
}

const InstructionsPage: React.FC<InstructionsPageProps> = ({
  sectionName,
  sectionAbbreviation,
  sectionIcon,
  onStartTest,
  onGoBack
}) => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const topicName = topicId ? topicId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'Default Topic';

  const handleStartTest = () => {
    // Ensure we have a valid topic, fallback to 'number-system' if none provided
    const validTopic = topicId || 'number-system';
    onStartTest(validTopic);
  };

  const handleGoBack = () => {
    onGoBack();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white rounded-lg p-2">
              <span className="text-blue-600 font-bold text-lg">{sectionAbbreviation}</span>
            </div>
            <h1 className="text-xl font-semibold">{sectionName} Mock Test</h1>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-8 sm:flex-row">
          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg shadow-sm border border-gray-200 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">General Instructions:</h2>
            
            <div className="space-y-6 text-gray-700">
              {/* Timer Information */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Timer Information:</h3>
                <p className="mb-2">
                  A countdown timer will be visible in the top right corner of the screen, indicating the remaining time for the examination.
                </p>
                <p>
                  The examination will end automatically when the timer reaches zero. You do not need to terminate or submit the paper manually.
                </p>
              </div>

              {/* Question Palette Legend */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Question Palette Legend:</h3>
                <p className="mb-3">
                  The following color-coded symbols are used in the Question Palette to show the status of each question:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-white border-2 border-gray-300 rounded"></div>
                    <span>You have not visited the question yet.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-500 rounded-full"></div>
                    <span>You have not answered the question.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                    <span>You have answered the question.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                    <span>You have NOT answered the question, but have marked the question for review.</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    <span>You have answered the question, but marked it for review.</span>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  The Mark For Review status for a question simply indicates that you would like to look at that question again. 
                  If a question is answered, but marked for review, then the answer will be considered for evaluation unless the status is modified by the candidate.
                </p>
              </div>

              {/* Navigation Instructions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Navigating to a Question:</h3>
                <div className="space-y-2">
                  <p>
                    <strong>1.</strong> Click on the question number in the Question Palette at the right of your screen to go to that numbered question directly. 
                    Note that using this option does NOT save your answer to the current question.
                  </p>
                  <p>
                    <strong>2.</strong> Click on Save & Next to save your answer for the current question and then go to the next question.
                  </p>
                  <p>
                    <strong>3.</strong> Click on Mark for Review & Next to save your answer for the current question and also mark it for review, and then go to the next question.
                  </p>
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  Note: You can click on the question number in the Question Palette to go to that question directly. 
                  You can also use the Previous and Next buttons to navigate between questions.
                </p>
              </div>

              {/* Additional Notes */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Additional Notes:</h3>
                <div className="space-y-2">
                  <p>
                    <strong>•</strong> You can change your answer at any time during the examination.
                  </p>
                  <p>
                    <strong>•</strong> The examination will automatically submit when the timer reaches zero.
                  </p>
                  <p>
                    <strong>•</strong> You can exit the examination at any time using the "Exit Test" button.
                  </p>
                  <p>
                    <strong>•</strong> Make sure to review all your answers before the time runs out.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-fit">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">Student</h3>
            </div>

            <div className="space-y-3">
              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Test Details</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Topic:</span>
                    <span className="font-medium">{topicName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-medium">60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Questions:</span>
                    <span className="font-medium">60</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Section:</span>
                    <span className="font-medium">{sectionName}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-3">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Instructions</h4>
                <div className="space-y-1 text-xs">
                  <div className="flex items-start space-x-2">
                    <Clock className="w-3 h-3 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Timer will be visible during the test</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Save answers before moving to next</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Flag className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" />
                    <span>Mark questions for review if needed</span>
                  </div>
                  <div className="flex items-start space-x-2">
                    <AlertCircle className="w-3 h-3 text-red-600 mt-0.5 flex-shrink-0" />
                    <span>Test auto-submits when time expires</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={handleStartTest}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white px-[60px] py-5 rounded-lg font-medium transition-colors mr-40"
              >
                Start Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage; 