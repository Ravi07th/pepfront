import React, { useState } from 'react';
import { Clock, BookOpen, AlertTriangle, ArrowLeft, Monitor, CheckCircle } from 'lucide-react';

interface ExamEntryProps {
  onStartExam: () => void;
  onBack: () => void;
}

const ExamEntry: React.FC<ExamEntryProps> = ({ onStartExam, onBack }) => {
  const [agreed, setAgreed] = useState(false);
  const [language, setLanguage] = useState('English');

  const handleStartExam = () => {
    // Enter fullscreen mode
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    }
    onStartExam();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white py-3 px-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-xl font-bold">TCS NQT PRACTICE TEST</h1>
          <div className="flex items-center space-x-2">
            <Monitor className="h-5 w-5" />
            <span className="text-sm">Online Test</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Instructions Header */}
          <div className="bg-gray-50 border-b px-6 py-4">
            <h2 className="text-xl font-bold text-gray-900">Instruction for Online Test</h2>
            <p className="text-red-600 font-medium mt-2">
              Please read the instructions carefully before starting the test.
            </p>
          </div>

          {/* Instructions Content */}
          <div className="px-6 py-6">
            <ol className="space-y-3 text-sm text-gray-700">
              <li className="flex">
                <span className="font-medium mr-2">1.</span>
                <span>Click <strong>start</strong> test on bottom of your screen to begin the test.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">2.</span>
                <span>The clock has been set at server and count down timer at the top Right side of the screen will display left out time to closure from where you can monitor time you have to complete the exam.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">3.</span>
                <span>Click one of the answer, simply click the desired option button.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">4.</span>
                <span>Candidate can change their response of attempted answer anytime during examination slot time by clicking another answer which candidates want to change an answer. Click to remove incorrect answer, click the desired option button.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">5.</span>
                <span>Click on Next to save the answer and moving to the next question. The next question will automatically be displayed.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">6.</span>
                <span>Click on Mark for Review to review you answer at later stage.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">7.</span>
                <span>To select a question, click on the question number on the Right side of the screen.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">8.</span>
                <span>The colour coded diagram on the Left side of the screen shows the status of the question.</span>
              </li>
            </ol>

            {/* Color Legend */}
            <div className="mt-6 border border-gray-300 rounded-lg overflow-hidden">
              <div className="grid grid-cols-2 text-sm">
                <div className="bg-red-500 text-white px-3 py-2 font-medium">Red</div>
                <div className="px-3 py-2 border-b">Not answered / <strong>Not Attempted</strong> Question.</div>
                
                <div className="bg-green-500 text-white px-3 py-2 font-medium">Green</div>
                <div className="px-3 py-2 border-b">Answered / <strong>Attempted</strong> Question.</div>
                
                <div className="bg-yellow-500 text-white px-3 py-2 font-medium">Yellow</div>
                <div className="px-3 py-2 border-b"><strong>Not Answered</strong> & Marked for review.</div>
                
                <div className="bg-purple-500 text-white px-3 py-2 font-medium">Violet</div>
                <div className="px-3 py-2 border-b"><strong>Answered</strong> & Marked for Review</div>
                
                <div className="bg-blue-500 text-white px-3 py-2 font-medium">Gray</div>
                <div className="px-3 py-2 border-b">Current</div>
                
                {/* <div className="bg-white border px-3 py-2 font-medium">White</div>
                <div className="px-3 py-2">Not Visited</div> */}
              </div>
            </div>

            {/* Additional Instructions */}
            <ol start={9} className="space-y-3 text-sm text-gray-700 mt-6">
              <li className="flex">
                <span className="font-medium mr-2">9.</span>
                <span>Candidate will be allowed to Shuffle between questions anytime during the examination as per their convenience.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">10.</span>
                <span>All the answered questions will be counted for calculating the final score.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">11.</span>
                <span>Do not click final <strong>SUBMIT</strong> on the left corner of the screen unless you have completed the exam. In case you click final <strong>SUBMIT</strong> you will not be permitted to continue.</span>
              </li>
              <li className="flex">
                <span className="font-medium mr-2">12.</span>
                <span>Score obtained will be displayed immediately after the test.</span>
              </li>
            </ol>

            {/* Language Selection */}
            <div className="mt-8 flex items-center space-x-4">
              <label className="text-sm font-medium text-gray-700">
                Choose your default language:
              </label>
              <select 
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm"
              >
                <option value="English">English</option>
                <option value="Hindi" disabled >Hindi</option>
              </select>
            </div>

            {/* Language Note */}
            <div className="mt-4 text-sm text-red-600">
              <p><strong>Please note all questions will appear in your default language.</strong></p>
              <p>This language can be changed for a particular question later on.</p>
            </div>

            {/* Agreement Checkbox */}
            <div className="mt-8 flex items-start space-x-3">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-sm text-gray-700">
                The computer provided to me is in proper working condition. 
                I have read and understood the instructions given above.
              </span>
            </div>

            {/* Start Button */}
            <div className="text-center mt-8">
              <button
                onClick={handleStartExam}
                disabled={!agreed}
                className={`px-12 py-3 rounded font-semibold text-lg transition-all duration-200 ${
                  agreed
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                Start Test
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          © TCS NQT Practice Platform
        </div>
      </main>
    </div>
  );
};

export default ExamEntry;