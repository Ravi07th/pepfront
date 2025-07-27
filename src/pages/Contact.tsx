        import React from "react";
import { Download } from "lucide-react";


 

function Contact(){
     const pdfUrl = "/TCS_NQT_2025_Detailed_Syllabus.pdf"; // Place PDF in public folder

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "TCS_NQT_2025_Detailed_Syllabus.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
    return(
        <>

  
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* HEADER */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800">TCS NQT 2025 Study Material</h1>
        <p className="text-gray-600 mt-2">
          This page provides you with the detailed syllabus for TCS NQT 2025. 
          Our platform helps students prepare effectively with updated study materials, practice tests, and interview guidance.
        </p>
        <button
          onClick={handleDownload}
          className="mt-4 flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all shadow-lg"
        >
          <Download className="w-5 h-5" /> Download PDF
        </button>
      </div>

      {/* PDF VIEWER */}
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg overflow-hidden">
        <iframe
          src={pdfUrl}
          className="w-full h-[80vh] border-none"
          title="Study PDF"
        />
      </div>

      {/* ABOUT SECTION */}
      <div className="w-full max-w-6xl bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl shadow-md mt-8 p-6">
        <h2 className="text-2xl font-semibold text-blue-800">About Our Study Platform</h2>
        <p className="text-gray-700 mt-2">
          Our platform is dedicated to helping students prepare for competitive exams like TCS NQT, Wipro, Infosys, and more. 
          With interactive coding practice, previous year questions, mock tests, and structured roadmaps, 
          we make preparation smarter and more effective.
        </p>
        <p className="text-gray-700 mt-2">
          Whether you're aiming for Ninja, Digital, or Innovator roles, 
          we provide tailored guidance and curated study plans to help you achieve your goals.
        </p>
      </div>
    </div>



        </>
    )
}
export default Contact;