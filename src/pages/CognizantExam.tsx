import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Brain, Code, User } from 'lucide-react';
import ExamInterface from '@/components/tcs_exam/ExamInterface';

function CognizantExam() {
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
                                            <strong>Be Ready on Time:</strong> Log in at least <strong>15-30 minutes before</strong> the scheduled slot to complete necessary verification.
                                        </li>
                                        <li>
                                            <strong>Use a Desktop or Laptop:</strong> Mobile devices, tablets, or laptops with dual screens are not allowed.
                                        </li>
                                        <li>
                                            <strong>Stable Internet Connection:</strong> Ensure you have a <strong>strong & uninterrupted internet</strong> connection throughout the test.
                                        </li>
                                        <li>
                                            <strong>Browser Requirements:</strong> Use <strong>Google Chrome</strong> or <strong>Mozilla Firefox</strong> latest versions; disable VPN and proxies.
                                        </li>
                                        <li>
                                            <strong>Test Environment:</strong> Quiet, well-lit room without any interruptions; no one else should be present in the room.
                                        </li>
                                        <li>
                                            <strong>ID Verification:</strong> Keep a <strong>valid government-issued photo ID</strong> ready for verification (Aadhaar, Passport, Voter ID, or College ID).
                                        </li>
                                        <li>
                                            <strong>Proctoring Compliance:</strong> Webcam and microphone must be <strong>ON and unobstructed</strong> at all times; any suspicious activity can lead to disqualification.
                                        </li>
                                        <li>
                                            <strong>No Unauthorized Materials:</strong> Do not have phones, calculators, notes, books, or any other electronic devices near you.
                                        </li>
                                        <li>
                                            <strong>Testing Rules:</strong> You cannot navigate back to previous sections once submitted; each section has a strict time limit.
                                        </li>
                                        <li>
                                            <strong>Do Not Refresh or Switch Tabs:</strong> Refreshing the page, closing the browser, or switching tabs will terminate your test session.
                                        </li>
                                        <li>
                                            <strong>Rough Work:</strong> Use only plain sheets for rough calculations and keep them visible if required by the proctor.
                                        </li>
                                        <li>
                                            <strong>Follow Instructions:</strong> Listen carefully and follow all instructions given by the proctor during the test.
                                        </li>
                                        <li>
                                            <strong>Submission:</strong> Submit your answers within the given time for each section; unanswered questions may be marked incorrect.
                                        </li>
                                        <li>
                                            <strong>Technical Issues:</strong> Reach out to the official support/helpdesk immediately for any technical difficulties during the exam.
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
            </main>
        </div>
    );
}

export default CognizantExam;