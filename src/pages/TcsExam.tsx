import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Brain, Code, User } from 'lucide-react';
import ExamInterface from '@/components/tcs_exam/ExamInterface';

function TcsExam() {
  const [examStarted, setExamStarted] = useState(false);

  const examStructure = [
    {
      title: "Foundational Section",
      duration: "75 minutes",
      questions: 65,
      subsections: [
        { name: "Verbal Ability", questions: "20", time: "25 min" },
        { name: "Reasoning Ability", questions: "20", time: "25 min" },
        { name: "Numerical Ability", questions: "25", time: "25 min" }
      ]
    },
    {
      title: "Advanced Cognitive Skills",
      duration: "115 minutes",
      questions: 18,
      subsections: [
        { name: "Advanced Quantitative and Logical Reasoning", questions: "15", time: "25 min" },
        { name: "Advanced Coding", questions: "3", time: "90 min" }
      ]
    }
  ];

  if (examStarted) {
    return <ExamInterface onExamEnd={() => setExamStarted(false)} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">TCS NQT Practice</h1>
                <p className="text-sm text-gray-500">National Qualifier Test Preparation</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <User className="h-5 w-5" />
              <span className="text-sm font-medium">Student Portal</span>
            </div>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            TCS NQT Mock Test
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Practice with our comprehensive mock test that follows the exact TCS NQT pattern.
            Test your skills across all sections with timed practice sessions.
          </p>
        </div>

        {/* Exam Card */}
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Card Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">TCS NQT Full Mock Test</h3>
                  <div className="flex items-center space-x-6 text-blue-100">
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>190 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Brain className="h-5 w-5" />
                      <span>83 questions</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-md text-white-400">No Negative marking</div>
                </div>
              </div>
            </div>

            {/* Card Content */}
            <div className="px-8 py-6 bg-gray-80">
              {/* Exam Structure */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                {examStructure.map((section, index) => (
                  <div key={index} className="border border-gray-200 rounded-xl p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      {index === 0 ? (
                        <BookOpen className="h-6 w-6 text-blue-600" />
                      ) : (
                        <Code className="h-6 w-6 text-purple-600" />
                      )}
                      <h4 className="text-lg font-semibold text-gray-900">{section.title}</h4>
                    </div>

                    <div className="flex justify-between items-center mb-4">
                      <span className="text-2xl font-bold text-gray-900">{section.questions}</span>
                      <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                        {section.duration}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {section.subsections.map((sub, subIndex) => (
                        <div key={subIndex} className="flex justify-between items-center text-sm">
                          <span className="text-gray-700">{sub.name}</span>
                          <div className="flex space-x-2">
                            <span className="text-gray-500">{sub.questions} Q</span>
                            <span className="text-blue-600 font-medium">{sub.time}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Instructions */}

              <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
                <div className="bg-white shadow-lg rounded-2xl max-w-6xl w-full p-8 border">
                  {/* Header */}
                  <h1 className="text-2xl font-bold text-center text-blue-700 mb-4">
                    TCS NQT – Instructions Before Starting the Test
                  </h1>
                  <p className="text-center text-gray-600 mb-6">
                    Please read all instructions carefully before proceeding.
                  </p>

                  {/* Instructions */}
                  <ol className="list-decimal list-inside space-y-3 text-gray-800">
                    <li>
                      <strong>Be Punctual:</strong> Log in <strong>15–30 minutes before</strong> the scheduled time to complete verification and avoid last-minute issues.
                    </li>
                    <li>
                      <strong>Section Timing:</strong> Each section has a <strong>fixed time limit</strong>. Once a section is over, you <strong>cannot return</strong> to it.
                    </li>
                    <li>
                      <strong>No Section Switching:</strong> You must complete the current section before moving to the next one.
                    </li>
                    <li>
                      <strong>Single Attempt Only:</strong> Once you submit a section/answer, you <strong>cannot modify it later</strong>.
                    </li>
                    <li>
                      <strong>Proctored Environment:</strong> Keep your <strong>webcam & microphone ON</strong> throughout the test. Any suspicious activity may lead to disqualification.
                    </li>
                    <li>
                      <strong>Identity Proof:</strong> Keep a <strong>valid photo ID</strong> (Aadhaar, Passport, College ID, etc.) ready for verification.
                    </li>
                    <li>
                      <strong>No Unauthorized Material:</strong> Do <strong>NOT</strong> use mobile phones, calculators, books, or any other external resources.
                    </li>
                    <li>
                      <strong>Stable Internet:</strong> Ensure a <strong>strong & stable internet connection</strong> to avoid disruptions.
                    </li>
                    <li>
                      <strong>Do Not Refresh/Close:</strong> <strong>Do not close or refresh</strong> the browser during the test. This may lead to termination.
                    </li>
                    <li>
                      <strong>Rough Work:</strong> Use only plain sheets for rough work (keep them ready if remote).
                    </li>
                    <li>
                      <strong>Follow Proctor Instructions:</strong> Listen to and comply with all instructions given by the invigilator/proctor.
                    </li>
                    <li>
                      <strong>Exam Decorum:</strong> Do not talk, move unnecessarily, or indulge in any malpractice.
                    </li>
                    <li>
                      <strong>Answer Submission:</strong> Ensure that you <strong>submit all answers</strong> before the timer ends; unanswered questions will be marked incorrect.
                    </li>
                  </ol>

                  {/* Warning Box */}
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mt-6">
                    <strong className="block mb-1">⚠️ Warning:</strong>
                    <ul className="list-disc list-inside space-y-1">
                      <li>
                        Any attempt to <strong>cheat</strong>, <strong>use unfair means</strong>, or <strong>disrupt the test</strong> will lead to <strong>immediate disqualification</strong>.
                      </li>
                      <li>
                        <strong>Multiple logins</strong> from different devices/browsers are strictly prohibited.
                      </li>
                    </ul>
                  </div>

                
                </div>
              </div>

              {/* Start Button */}
              <div className="text-center">
                <button
                  onClick={() => setExamStarted(true)}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Start Mock Test
                </button>
                <p className="text-sm text-gray-500 mt-3">
                  Click to begin your 190-minute practice session
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Exact Timing</h3>
            <p className="text-gray-600">Practice with the same time constraints as the actual TCS NQT exam</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Comprehensive Coverage</h3>
            <p className="text-gray-600">All sections covered with authentic question patterns and difficulty levels</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Real Experience</h3>
            <p className="text-gray-600">Interface and flow designed to match the actual exam environment</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default TcsExam;