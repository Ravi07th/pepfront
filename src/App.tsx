import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Practice from "./Practice.tsx";
// import UiHome from "./UiHome.tsx";
import UiHome from "@/components/ui_component/UiHome";
import Index1 from "./Index1.tsx";
import HomePage from "@/components/Study.tsx";
import CompanyPage from "@/components/CompanyPage.tsx";
import QuestionPage from "@/components/QuestionPage.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ExamPrep from "./pages/ExamPrep.tsx";
import TcsExam from "./pages/TcsExam.tsx";
import Contact from "./pages/Contact.tsx";
import Syllabus from "./components/Syllabus.tsx";
import Overview from "./pages/OverView.tsx"
import CompanyOverview from "./components/company_overview_ui/sections/OverviewSection.tsx";

import OverView from "./pages/OverView.tsx";
import CompanyExamPlatform from "./components/company_overview_ui/CompanyExamPlatform.tsx";
import InterviewPrep from "./components/student_notes/InterviewPep.tsx";

const queryClient = new QueryClient();

const App = () => (
  
      <BrowserRouter>
      <Header/>
        <Routes>
          
           {/* <Route path="/home" element={<Index />} /> */}
          <Route path="/index" element= {<Index1/>} /> 
          {/* <Route path="/" element= {<TcsExam/>}/> */}
          <Route path="/docs" element = {<Syllabus/>} />
         
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          
          {/* my testing */}
           
           <Route path="/practice" element={<Practice />} />
           <Route path="/contact" element={<Contact />} />
          <Route path= "/uiComponents" element={<UiHome />} />
          <Route path= "/examPrep" element={<ExamPrep />} />
         <Route path="/study" element={<HomePage />} />
          {/* <Route path="/company/:companyId" element={<CompanyPage />} /> */}
          <Route path="/company/:companyId/question/:questionId" element={<QuestionPage />} />
          <Route path="/contact" element={<Contact />} />
          {/* //over both saat ma */}
          <Route path="/" element={<InterviewPrep />} />
          <Route path="/company/:companyId" element={<CompanyExamPlatform />} />
        </Routes>
      
      </BrowserRouter>
  //   </TooltipProvider>
  // </QueryClientProvider>
);

export default App;
