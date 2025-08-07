import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Practice from "./Practice2.tsx";
// import UiHome from "./UiHome.tsx";
import Index1 from "./Index.tsx";
import HomePage from "@/components/PracticeAndTest/programming/Programming.tsx";
import CompanyPage from "@/components/CompanyPage.tsx";
import QuestionPage from "@/components/QuestionPage.tsx";
import { PageLayout } from "./components/layout";
import { LayoutProvider } from "./contexts/LayoutContext";
import { AuthProvider } from "./contexts/AuthContext";
import ExamPrep from "./pages/ExamPrep.tsx";
import VerbalSection from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSection.tsx";
import LogicalReasoning from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoning.tsx";
import LogicalReasoningPractice from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningPractice.tsx";
import LogicalReasoningFormula from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningFormula.tsx";
import QuantitativeAptitude from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitude.tsx";
import Programming from "./components/PracticeAndTest/programming/Programming.tsx";
import Technical from "./components/PracticeAndTest/technical/Technical.tsx";
import Contact from "./pages/Contact.tsx";
import ExamPatternsPage from "./pages/ExamPatternsPage.tsx";
import MNCExamPlatform from "./components/MNCExam/MNCExamPlatform.tsx";
import MNCExamSelection from "./components/MNCExam/MNCExamSelection.tsx";
import MNCExamInstructions from "./components/MNCExam/MNCExamInstructions.tsx";
import MNCExamInterface from "./components/MNCExam/MNCExamInterface.tsx";
import StudentNotesPage from "./components/student_notes/StudentNotesPage.tsx";
import BookmarksPage from "./components/student_notes/BookmarksPage.tsx";
import PdfViewerPage from "./components/student_notes/PdfViewerPage.tsx";
import LogicalReasoningMockTest from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningMockTest.tsx";
import LogicalReasoningInstructions from "./components/PracticeAndTest/General_aptitude/logicalReasoning/LogicalReasoningInstructions.tsx";
import QuantitativeAptitudePractice from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudePractice.tsx";
import QuantitativeAptitudeMockTest from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeMockTest.tsx";
import QuantitativeAptitudeInstructions from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeInstructions.tsx";
import QuantitativeAptitudeFormula from "./components/PracticeAndTest/General_aptitude/quantitativeAptitude/QuantitativeAptitudeFormula.tsx";
import VerbalSectionInstructions from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionInstructions.tsx";
import VerbalSectionFormula from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionFormula.tsx";
import VerbalSectionPractice from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionPractice.tsx";
import VerbalSectionMockTest from "./components/PracticeAndTest/General_aptitude/verbalSection/VerbalSectionMockTest.tsx";
import Study from "./components/Study.tsx";

// Auth Components
import SignIn from "./components/auth/SignIn.tsx";
import SignUp from "./components/auth/SignUp.tsx";
import ForgotPassword from "./components/auth/ForgotPassword.tsx";
import UserProfile from "./components/auth/UserProfile.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LayoutProvider>
        <BrowserRouter>
          <Routes>
            {/* Auth Routes */}
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
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
          
          {/* Legacy MNC route redirects to new system */}
          <Route path="/mnc" element={<Navigate to="/mock-test" replace />} />
          
          {/* Practice and Testing Routes */}
          
          <Route path="/contact" element={
            <PageLayout variant="full">
              <Contact />
            </PageLayout>
          } />
          
          
          {/* Exam Prep */}
          <Route path="/exam-prep" element={
            <PageLayout variant="full">
              <ExamPrep />
            </PageLayout>
          } />
          <Route path="/verbal-ability" element={
            <PageLayout variant="full">
              <VerbalSection />
            </PageLayout>
          } />
          <Route path="/verbal-ability/instructions/:topic" element={
            <PageLayout variant="full">
              <VerbalSectionInstructions />
            </PageLayout>
          } />
          <Route path="/verbal-ability/formula/:topic" element={
            <PageLayout variant="full">
              <VerbalSectionFormula />
            </PageLayout>
          } />
          <Route path="/verbal-ability/practice/:topic" element={
            <PageLayout variant="full">
              <VerbalSectionPractice />
            </PageLayout>
          } />
          <Route path="/verbal-ability/test/:topic" element={
            <VerbalSectionMockTest />
          } />
          <Route path="/logical-reasoning" element={
            <PageLayout variant="full">
              <LogicalReasoning />
            </PageLayout>
          } />
          <Route path="/logical-reasoning/practice/:topic" element={
            <PageLayout variant="full">
              <LogicalReasoningPractice />
            </PageLayout>
          } />
          <Route path="/logical-reasoning/formula/:topic" element={
            <PageLayout variant="full">
              <LogicalReasoningFormula />
            </PageLayout>
          } />
          <Route path="/logical-reasoning/test/:topic" element={
            <LogicalReasoningMockTest />
          } />
          <Route path="/logical-reasoning/instructions/:topic" element={
            <PageLayout variant="full">
              <LogicalReasoningInstructions />
            </PageLayout>
          } />
          <Route path="/quantitative-aptitude" element={
            <PageLayout variant="full">
              <QuantitativeAptitude />
            </PageLayout>
          } />
          <Route path="/quantitative-aptitude/formula/:topic" element={
            <PageLayout variant="full">
              <QuantitativeAptitudeFormula />
            </PageLayout>
          } />
          <Route path="/quantitative-aptitude/practice/:topic" element={
            <PageLayout variant="full">
              <QuantitativeAptitudePractice />
            </PageLayout>
          } />
          <Route path="/quantitative-aptitude/test/:topic" element={
            <QuantitativeAptitudeMockTest />
          } />
          <Route path="/quantitative-aptitude/instructions/:topic" element={
            <PageLayout variant="full">
              <QuantitativeAptitudeInstructions />
            </PageLayout>
          } />
          
          <Route path="/programming" element={
            <PageLayout variant="full">
              <Programming />
            </PageLayout>
          } />
          <Route path="/technical" element={
            <PageLayout variant="full">
              <Technical />
            </PageLayout>
          } />
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
         
          {/* Student Notes Routes */}
          <Route path="/student-notes" element={
            <PageLayout variant="full">
              <StudentNotesPage />
            </PageLayout>
          } />
          <Route path="/bookmarks" element={
            <PageLayout variant="full">
              <BookmarksPage />
            </PageLayout>
          } />
          <Route path="/pdf-viewer/:noteId" element={
            <PageLayout variant="full">
              <PdfViewerPage />
            </PageLayout>
          } />
          
          {/* Coding and Question Routes */}
          <Route path="/coding" element={
            <PageLayout variant="full">
              <Study />
            </PageLayout>
          } />

          <Route path="/coding/:companyId" element={
            <PageLayout variant="full">
              <CompanyPage />
            </PageLayout>
          } />
          <Route path="/coding/:companyId/question/:questionId" element={
            <PageLayout variant="full">
              <QuestionPage />
            </PageLayout>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={
            <PageLayout variant="full">
              <NotFound />
            </PageLayout>
          } />
        </Routes>
      </BrowserRouter>
    </LayoutProvider>
  </AuthProvider>
  </QueryClientProvider>
);

export default App;
