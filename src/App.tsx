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


const queryClient = new QueryClient();

const App = () => (
  // <QueryClientProvider client={queryClient}>
  //   <TooltipProvider>
  //     <Toaster />
  //     <Sonner position="top-right" richColors />
      <BrowserRouter>
      <Header/>
        <Routes>
          
           {/* <Route path="/home" element={<Index />} /> */}
          <Route path="/" element= {<Index1/>} /> 
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          
          {/* my testing */}
           <Route path="/practice" element={<Practice />} />
          <Route path= "/uiComponents" element={<UiHome />} />
         <Route path="/study" element={<HomePage />} />
          <Route path="/company/:companyId" element={<CompanyPage />} />
          <Route path="/company/:companyId/question/:questionId" element={<QuestionPage />} />
        </Routes>
      <Footer/>
      </BrowserRouter>
  //   </TooltipProvider>
  // </QueryClientProvider>
);

export default App;
