import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { HelmetProvider } from "react-helmet-async";
import GoogleAnalytics from "./components/GoogleAnalytics";
import ErrorBoundary from "./components/ErrorBoundary";
import { performanceService } from "./services/performanceService";
// import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// import UiHome from "./UiHome.tsx";
import Index1 from "./Index.tsx";
import Contact from "./pages/Contact.tsx";
import ExamPrep from "./pages/ExamPrep.tsx";
import ExamPatternsPage from "./pages/ExamPatternsPage.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import Blog from "./pages/Blog.tsx";
import Community from "./pages/Community.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import { LayoutProvider } from "./contexts/LayoutContext.tsx";
import { PageLayout } from "./components/layout";
import SignIn from "./components/auth/SignIn.tsx";
import SignUp from "./components/auth/SignUp.tsx";
import ForgotPassword from "./components/auth/ForgotPassword.tsx";
import ResetPassword from "./components/auth/ResetPassword.tsx";
import UserProfile from "./components/auth/UserProfile.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

// Import MNC Exam components
import MNCExamSelection from "./components/mnc_mock_test/MNCExamSelection.tsx";
import MNCExamInstructions from "./components/mnc_mock_test/MNCExamInstructions.tsx";
import MNCExamInterface from "./components/mnc_mock_test/MNCExamInterface.tsx";

// Import Practice and Test components
import Programming from "./components/PracticeAndTest/programming/Programming.tsx";
import ProgrammingInstructions from "./components/PracticeAndTest/programming/ProgrammingInstructions.tsx";
import ProgrammingMockTest from "./components/PracticeAndTest/programming/ProgrammingMockTest.tsx";
import ProgrammingPractice from "./components/PracticeAndTest/programming/ProgrammingPractice.tsx";


// Import Student Notes components
import StudentNotesPage from "./components/student_notes/StudentNotesPage.tsx";
import PdfViewerPage from "./components/student_notes/PdfViewerPage.tsx";
import BookmarksPage from "./components/student_notes/BookmarksPage.tsx";

// Import MCQ Test component
import MCQTest from "./components/MCQTest.tsx";

// Import Syllabus components

// Import Question Page component
import QuestionPage from "./components/QuestionPage.tsx";

// Import Test Results component
import TestResults from "./components/TestResults.tsx";

// Import Company Overview components
import CompanyLanding from "./components/company_overview_ui/CompanyLanding.tsx";
import CompanyPage from "./components/CompanyPage.tsx";

// Import Exam Prep Nav component
import ExamPrepNav from "./components/ExamPrepNav.tsx";

// Import Hero component
import Hero from "./components/Hero.tsx";

// Import MNC Coding Platform components
import CodingPractice from "./components/mnc_coding/CodingPractice.tsx";
import CodingDemo from "./components/mnc_coding/CodingDemo.tsx";

// Import Mock Test components
import MockTestHome from "./components/PracticeAndTest/mock_test/MockTestHome.tsx";

// Import Exam Prep Subcategories components
import QuantitativeAptitude from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitude.tsx";
import QuantitativeAptitudePractice from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudePractice.tsx";
import QuantitativeAptitudeFormula from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeFormula.tsx";
import QuantitativeAptitudeInstructions from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeInstructions.tsx";
import QuantitativeAptitudeMockTest from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeMockTest.tsx";
import LogicalReasoning from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoning.tsx";
import LogicalReasoningPractice from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningPractice.tsx";
import LogicalReasoningFormula from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningFormula.tsx";
import LogicalReasoningInstructions from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningInstructions.tsx";
import LogicalReasoningMockTest from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningMockTest.tsx";
import VerbalSection from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSection.tsx";
import VerbalSectionPractice from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionPractice.tsx";
import VerbalSectionFormula from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionFormula.tsx";
import VerbalSectionInstructions from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionInstructions.tsx";
import VerbalSectionMockTest from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionMockTest.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (replaces cacheTime in newer versions)
      retry: 3,
      retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
    },
    mutations: {
      retry: 1,
      retryDelay: 1000,
    },
  },
});

const App = () => {
  // Initialize performance tracking
  React.useEffect(() => {
    performanceService.trackPageLoad(window.location.href);
  }, []);

  return (
    <ErrorBoundary>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <GoogleOAuthProvider clientId="922756107438-3bqbs956ph4p3su9811c9cc6c5fqa0us.apps.googleusercontent.com">
            <AuthProvider>
              <LayoutProvider>
                <BrowserRouter>
                  <GoogleAnalytics />
                  <ScrollToTop />
            <Routes>
              {/* Auth Routes */}
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
              <Route path="/profile" element={<UserProfile />} />
              
              {/* Home Page */}
              <Route path="/" element={
                <PageLayout variant="full">
                  <Index1 />
                </PageLayout>
              } />
            
            {/* MNC Exam Platform Routes */}
            <Route path="/mock-test" element={
              <PageLayout variant="full">
                <MNCExamSelection />
              </PageLayout>
            } />
            <Route path="/mock-test/:companyExamId" element={
              <PageLayout variant="full">
                <MNCExamInstructions />
              </PageLayout>
            } />
            <Route path="/mock-test/:companyExamId/exam" element={
              <PageLayout variant="content-only">
                <MNCExamInterface />
              </PageLayout>
            } />
            
            {/* New Mock Test System Routes */}
            <Route path="/test" element={
              <PageLayout variant="full">
                <MockTestHome />
              </PageLayout>
            } />
            
            {/* Legacy MNC route redirects to new system */}
            <Route path="/mnc" element={<Navigate to="/mock-test" replace />} />
            
            {/* Practice and Testing Routes */}
            
            <Route path="/contact" element={
              <PageLayout variant="full">
                <Contact />
              </PageLayout>
            } />
            
            
            {/* Exam Prep Routes */}
            <Route path="/exam-prep" element={
              <PageLayout variant="full">
                <ExamPrep />
              </PageLayout>
            } />
            
            {/* Quantitative Aptitude Routes */}
            <Route path="/quantitative-aptitude" element={
              <PageLayout variant="full">
                <QuantitativeAptitude />
              </PageLayout>
            } />
            <Route path="/quantitative-aptitude/practice/:topicId" element={
              <PageLayout variant="full">
                <QuantitativeAptitudePractice />
              </PageLayout>
            } />
            <Route path="/quantitative-aptitude/formula/:topicId" element={
              <PageLayout variant="full">
                <QuantitativeAptitudeFormula />
              </PageLayout>
            } />
            <Route path="/quantitative-aptitude/instructions/:topicId" element={
              <PageLayout variant="full">
                <QuantitativeAptitudeInstructions />
              </PageLayout>
            } />
            <Route path="/quantitative-aptitude/test/:topic" element={
              <QuantitativeAptitudeMockTest />
            } />
            
            {/* Logical Reasoning Routes */}
            <Route path="/logical-reasoning" element={
              <PageLayout variant="full">
                <LogicalReasoning />
              </PageLayout>
            } />
            <Route path="/logical-reasoning/practice/:topicId" element={
              <PageLayout variant="full">
                <LogicalReasoningPractice />
              </PageLayout>
            } />
            <Route path="/logical-reasoning/formula/:topicId" element={
              <PageLayout variant="full">
                <LogicalReasoningFormula />
              </PageLayout>
            } />
            <Route path="/logical-reasoning/instructions/:topicId" element={
              <PageLayout variant="full">
                <LogicalReasoningInstructions />
              </PageLayout>
            } />
            <Route path="/logical-reasoning/test/:topic" element={
              <LogicalReasoningMockTest />
            } />
            
            {/* Verbal Ability Routes */}
            <Route path="/verbal-ability" element={
              <PageLayout variant="full">
                <VerbalSection />
              </PageLayout>
            } />
            <Route path="/verbal-ability/practice/:topicId" element={
              <PageLayout variant="full">
                <VerbalSectionPractice />
              </PageLayout>
            } />
            <Route path="/verbal-ability/formula/:topicId" element={
              <PageLayout variant="full">
                <VerbalSectionFormula />
              </PageLayout>
            } />
            <Route path="/verbal-ability/instructions/:topicId" element={
              <PageLayout variant="full">
                <VerbalSectionInstructions />
              </PageLayout>
            } />
            <Route path="/verbal-ability/test/:topic" element={
              <VerbalSectionMockTest />
            } />
            
            {/* Programming Routes */}
            <Route path="/programming" element={
              <PageLayout variant="full">
                <Programming />
              </PageLayout>
            } />
            <Route path="/programming/instructions/:topicId" element={
              <PageLayout variant="full">
                <ProgrammingInstructions />
              </PageLayout>
            } />
            <Route path="/programming/test/:topic" element={
              <ProgrammingMockTest />
            } />
            <Route path="/programming/practice/:topicId" element={
              <PageLayout variant="full">
                <ProgrammingPractice />
              </PageLayout>
            } />
            <Route path="/programming/mock-test/:topicId" element={
              <MCQTest categoryId="programming" mode="test" onBack={() => {}} />
            } />
            

            
            
            
            {/* Coding Routes */}
            <Route path="/coding" element={
              <PageLayout variant="full">
                <CodingPractice />
              </PageLayout>
            } />
            <Route path="/coding/:companyId" element={
              <PageLayout variant="full">
                <CodingPractice />
              </PageLayout>
            } />
            <Route path="/coding/:companyId/:questionId" element={
              <PageLayout variant="full">
                <CodingPractice />
              </PageLayout>
            } />
            
            {/* Coding Demo Route */}
            <Route path="/coding-demo" element={
              <PageLayout variant="full">
                <CodingDemo />
              </PageLayout>
            } />
            
            {/* SkillUp Routes */}
            <Route path="/skillup" element={
              <PageLayout variant="full">
                <StudentNotesPage />
              </PageLayout>
            } />
            
            {/* Student Notes */}
            <Route path="/student-notes" element={
              <PageLayout variant="full">
                <StudentNotesPage />
              </PageLayout>
            } />
            
            {/* PDF Viewer */}
            <Route path="/pdf-viewer/:noteId" element={
              <PageLayout variant="full">
                <PdfViewerPage />
              </PageLayout>
            } />
            
            {/* Interview Questions Guide */}
            <Route path="/student-notes/interview-question" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/interview-questions.html"
                    className="w-full h-full border-0"
                    title="Interview Questions Guide"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* My PDF */}
            <Route path="/mypdf" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/mypdf.html"
                    className="w-full h-full border-0"
                    title="My PDF Viewer"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* DSA Notes */}
            <Route path="/student-notes/dsa-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/dsa-notes.html"
                    className="w-full h-full border-0"
                    title="DSA Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* Detailed DSA Notes */}
            <Route path="/dsa-notes-detailed" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/dsa-notes-detailed.html"
                    className="w-full h-full border-0"
                    title="Detailed DSA Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* Coding Notes */}
            <Route path="/coding-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/coding-notes.html"
                    className="w-full h-full border-0"
                    title="Coding Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* C Programming Notes */}
            <Route path="/student-notes/c-programming-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/c-programming-notes.html"
                    className="w-full h-full border-0"
                    title="C Programming Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* Automata Theory Notes */}
            <Route path="/student-notes/automata-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/automata-notes.html"
                    className="w-full h-full border-0"
                    title="Automata Theory Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* Operating System Notes */}
            <Route path="/student-notes/operating-system-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/osnotes.html"
                    className="w-full h-full border-0"
                    title="Operating System Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />

            {/* Computer Network Notes */}
            <Route path="/student-notes/computer-network-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/computer-network-note.html"
                    className="w-full h-full border-0"
                    title="Computer Network Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />

            {/* Python Notes */}
            <Route path="/student-notes/python-notes" element={
              <PageLayout variant="content-only">
                <div className="w-full h-screen bg-gray-100">
                  <iframe
                    src="/pythonnotes.html"
                    className="w-full h-full border-0"
                    title="Python Programming Notes"
                    sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-modals"
                  />
                </div>
              </PageLayout>
            } />
            
            {/* Bookmarks */}
            <Route path="/bookmarks" element={
              <PageLayout variant="full">
                <BookmarksPage />
              </PageLayout>
            } />
            
            {/* MCQ Test */}
            <Route path="/mcq-test" element={
              <PageLayout variant="full">
                <MCQTest 
                  categoryId="general"
                  mode="test"
                  onBack={() => {}}
                />
              </PageLayout>
            } />
            

            
            {/* Syllabus */}
            <Route path="/syllabus-pattern" element={
              <PageLayout variant="full">
                < ExamPatternsPage/>
              </PageLayout>
            } />
            
            {/* Question Page */}
            <Route path="/question" element={
              <PageLayout variant="full">
                <QuestionPage />
              </PageLayout>
            } />
            
            {/* Test Results */}
            <Route path="/test-results" element={
              <PageLayout variant="full">
                <TestResults 
                  category={{
                    id: 'general-aptitude',
                    name: 'General Aptitude',
                    description: 'Basic aptitude questions',
                    questionCount: 0
                  }}
                  questions={[]}
                  selectedAnswers={{}}
                  score={0}
                  totalQuestions={0}
                  timeSpent={0}
                  onRetake={() => {}}
                  onBack={() => {}}
                />
              </PageLayout>
            } />
            
            {/* Company Overview */}
            <Route path="/company-overview" element={
              <PageLayout variant="full">
                <CompanyLanding />
              </PageLayout>
            } />
            
            {/* Company Page */}
            <Route path="/company/:companyId" element={
              <PageLayout variant="full">
                <CompanyPage />
              </PageLayout>
            } />
            
            {/* Exam Prep Nav */}
            <Route path="/exam-prep-nav" element={
              <PageLayout variant="full">
                <ExamPrepNav 
                  categories={[]}
                  onStartTest={() => {}}
                  sidebarOpen={false}
                  setSidebarOpen={() => {}}
                />
              </PageLayout>
            } />

            {/* Exam Patterns */}
            <Route path="/exam-patterns" element={
              <PageLayout variant="full">
                <ExamPatternsPage />
              </PageLayout>
            } />
            <Route path="/exam-patterns/:companyId" element={
              <PageLayout variant="full">
                <ExamPatternsPage />
              </PageLayout>
            } />

            {/* Legal */}
            <Route path="/terms" element={
              <PageLayout variant="full">
                <TermsAndConditions />
              </PageLayout>
            } />
            <Route path="/privacy" element={
              <PageLayout variant="full">
                <PrivacyPolicy />
              </PageLayout>
            } />

            {/* Content */}
            <Route path="/blog" element={
              <PageLayout variant="full">
                <Blog />
              </PageLayout>
            } />
            <Route path="/community" element={
              <PageLayout variant="full">
                <Community />
              </PageLayout>
            } />
            
            {/* Hero */}
            <Route path="/hero" element={
              <PageLayout variant="full">
                <Hero />
              </PageLayout>
            } />
            
            {/* 404 Page */}
            <Route path="*" element={
              <PageLayout variant="full">
                <NotFound />
              </PageLayout>
            } />
          </Routes>
        </BrowserRouter>
      </LayoutProvider>
    </AuthProvider>
  </GoogleOAuthProvider>
    </QueryClientProvider>
  </HelmetProvider>
    </ErrorBoundary>
  );
};

export default App;
