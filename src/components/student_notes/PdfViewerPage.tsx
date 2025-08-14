import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut, X as CloseIcon, ChevronLeft, ChevronRight, BookOpen, ArrowLeft, FileText } from "lucide-react";
import { saveAs } from "file-saver";
import "pdfjs-dist/web/pdf_viewer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Mock data for notes (in real app, this would come from API or context)
const notesList = [
  {
    id: "id1",
    title: "Top 30 Interview Questions",
    category: "Interview Prep",
    description: "Common interview questions designed especially for students and fresh graduates. Focus on education, skills, experiences, and goals.",
    file: "/pdf/interviewQue.pdf",
    tags: ["interview", "placement", "general", "hr"],
    duration: "2 hours",
    downloads: 1250,
    rating: 4.8,
    views: 3400,
    lastUpdated: "2024-01-15",
    author: "Career Team",
    icon: "/images/tcs.jpg",
    color: "bg-blue-500"
  },
  {
    id: "id2",
    title: "GATE Complete Study Guide",
    category: "Exam Prep",
    description: "Essential GATE exam study material with previous year questions, formulas, and tricks to score high in engineering entrance exams.",
    file: "/pdf/interviewQue.pdf",
    tags: ["gate", "exam", "entrance", "engineering"],
    duration: "8 hours",
    downloads: 2100,
    rating: 4.9,
    views: 5600,
    lastUpdated: "2024-01-10",
    author: "Exam Experts",
    icon: "/images/infosys.jpg",
    color: "bg-purple-500"
  },
  {
    id: "id3",
    title: "Java Programming Masterclass",
    category: "Programming",
    description: "Comprehensive Java notes from basics to advanced OOP concepts, interview questions, and best coding practices.",
    file: "/pdf/interviewQue.pdf",
    tags: ["java", "programming", "oop", "backend"],
    duration: "6 hours",
    downloads: 1800,
    rating: 4.7,
    views: 4200,
    lastUpdated: "2024-01-12",
    author: "Java Guru",
    icon: "/images/wipro.jpg",
    color: "bg-orange-500"
  },
  {
    id: "id4",
    title: "Python Data Science Guide",
    category: "Programming",
    description: "Python notes covering syntax, data structures, libraries, and practical examples for data science projects.",
    file: "/pdf/interviewQue.pdf",
    tags: ["python", "data-science", "ml", "analytics"],
    duration: "5 hours",
    downloads: 1600,
    rating: 4.6,
    views: 3800,
    lastUpdated: "2024-01-08",
    author: "Data Scientist",
    icon: "/images/cognizant.png",
    color: "bg-green-500"
  },
  {
    id: "id5",
    title: "C Programming Fundamentals",
    category: "Programming",
    description: "Complete C programming guide covering pointers, arrays, structures, memory management, and system programming.",
    file: "/pdf/interviewQue.pdf",
    tags: ["c", "system-programming", "algorithms", "basics"],
    duration: "4 hours",
    downloads: 1400,
    rating: 4.5,
    views: 3200,
    lastUpdated: "2024-01-05",
    author: "System Expert",
    icon: "/images/capgemini.jpg",
    color: "bg-gray-500"
  },
  {
    id: "id6",
    title: "Top 30 Interview Questions for Fresher",
    category: "Interview Prep",
    description: "Comprehensive guide with top 30 interview questions specifically tailored for IT freshers with detailed answers and tips.",
    file: "/pdf/interviewQue.pdf",
    tags: ["interview", "fresher", "it", "career", "preparation"],
    duration: "45 min",
    downloads: 1200,
    rating: 4.8,
    views: 2800,
    lastUpdated: "2024-01-14",
    author: "Interview Expert",
    icon: "/images/accenture.png",
    color: "bg-blue-600"
  },
  {
    id: "id7",
    title: "JavaScript Web Development",
    category: "Programming",
    description: "Modern JavaScript ES6+, DOM manipulation, async programming, and web development patterns for full-stack development.",
    file: "/pdf/interviewQue.pdf",
    tags: ["javascript", "web", "frontend", "es6"],
    duration: "5 hours",
    downloads: 1900,
    rating: 4.7,
    views: 4500,
    lastUpdated: "2024-01-11",
    author: "Web Developer",
    icon: "/images/google.jpg",
    color: "bg-yellow-500"
  },
  {
    id: "id8",
    title: "Database Management Systems",
    category: "Computer Science",
    description: "Complete DBMS notes covering ER models, normalization, SQL queries, transactions, and database design principles.",
    file: "/pdf/interviewQue.pdf",
    tags: ["dbms", "database", "sql", "normalization"],
    duration: "6 hours",
    downloads: 1500,
    rating: 4.6,
    views: 3600,
    lastUpdated: "2024-01-09",
    author: "DB Expert",
    icon: "/images/tcs.jpg",
    color: "bg-indigo-500"
  },
  {
    id: "id9",
    title: "Operating Systems Concepts",
    category: "Computer Science",
    description: "OS fundamentals including process management, memory management, file systems, and synchronization concepts.",
    file: "/pdf/interviewQue.pdf",
    tags: ["operating-systems", "processes", "memory", "synchronization"],
    duration: "8 hours",
    downloads: 1100,
    rating: 4.8,
    views: 2600,
    lastUpdated: "2024-01-13",
    author: "OS Specialist",
    icon: "/images/infosys.jpg",
    color: "bg-red-500"
  },
  {
    id: "id10",
    title: "Computer Networks",
    category: "Computer Science",
    description: "Networking fundamentals, protocols, routing, security, and practical network administration concepts.",
    file: "/pdf/interviewQue.pdf",
    tags: ["networks", "protocols", "routing", "security"],
    duration: "6 hours",
    downloads: 1300,
    rating: 4.5,
    views: 3100,
    lastUpdated: "2024-01-07",
    author: "Network Engineer",
    icon: "/images/wipro.jpg",
    color: "bg-cyan-500"
  }
];

export default function PdfViewerPage() {
  const { noteId } = useParams();
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState<any>(null);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.3);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);

  const pdfContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noteId) {
      const note = notesList.find(n => n.id === noteId);
      if (note) {
        // Add cache-busting timestamp to ensure fresh PDF loads
        const noteWithCacheBust = {
          ...note,
          file: `${note.file}?t=${Date.now()}`
        };
        setSelectedNote(noteWithCacheBust);
        setLoading(false);
      } else {
        setError('Note not found');
        setLoading(false);
      }
    }
  }, [noteId]);

  // Save scroll position when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (pdfContainerRef.current) {
        setScrollPosition(pdfContainerRef.current.scrollTop);
      }
    };

    const container = pdfContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  // Scroll to top when page changes
  useEffect(() => {
    if (pdfContainerRef.current) {
      pdfContainerRef.current.scrollTop = 0;
    }
  }, [pageNumber]);



  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError('Failed to load PDF file. Please try again.');
  }

  function downloadPDF() {
    if (selectedNote) {
      saveAs(selectedNote.file, `${selectedNote.title}.pdf`);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-12 max-w-md w-full border border-white/20">
          <div className="text-center">
            {/* Enhanced Loading Icon */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto relative">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                
                {/* Middle Ring */}
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '2s' }}></div>
                
                {/* Inner Circle */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4">Loading PDF Viewer</h3>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Preparing your document...</p>

            {/* Enhanced Progress Indicator */}
            <div className="mb-6">
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              
              {/* Animated Progress Bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full animate-pulse" style={{ width: '70%' }}></div>
              </div>
            </div>

            {/* Enhanced Spinner */}
            <div className="relative">
              <div className="w-12 h-12 mx-auto relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-600 animate-spin"></div>
                <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-600 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error && !selectedNote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-4">{error}</div>
          <Button onClick={() => navigate('/student-notes')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Notes
          </Button>
        </div>
      </div>
    );
  }

  if (!selectedNote) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-lg font-semibold mb-4">Note not found</div>
          <Button onClick={() => navigate('/student-notes')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Notes
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/student-notes')}
                className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm"
              >
                <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
                <span>Back to Notes</span>
              </Button>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div>
                  <h1 className="text-base sm:text-xl font-semibold text-gray-900">{selectedNote.title}</h1>
                  <p className="text-xs sm:text-sm text-gray-500">{selectedNote.category}</p>
                </div>
              </div>
            </div>
                         <div className="flex items-center space-x-1 sm:space-x-2">
               <Button
                 variant="outline"
                 size="sm"
                 onClick={() => setScale(Math.max(0.5, scale - 0.1))}
                 className="text-xs sm:text-sm"
               >
                 <ZoomOut className="h-3 w-3 sm:h-4 sm:w-4" />
               </Button>
               <span className="text-xs sm:text-sm text-gray-500 min-w-[40px] sm:min-w-[60px] text-center">{Math.round(scale * 100)}%</span>
               <Button
                 variant="outline"
                 size="sm"
                 onClick={() => setScale(Math.min(2, scale + 0.1))}
                 className="text-xs sm:text-sm"
               >
                 <ZoomIn className="h-3 w-3 sm:h-4 sm:w-4" />
               </Button>
               
               <Button
                 variant="outline"
                 size="sm"
                 onClick={downloadPDF}
                 className="text-xs sm:text-sm"
               >
                 <Download className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                 <span className="hidden sm:inline">Download</span>
               </Button>
             </div>
          </div>
        </div>
      </div>

             {/* PDF Content */}
               <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
          <div 
            className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-8 overflow-auto max-h-[80vh] sm:max-h-[85vh]" 
            ref={pdfContainerRef}
            style={{ scrollBehavior: 'smooth' }}
          >
          {error ? (
            <div className="text-center py-8 sm:py-12">
              <div className="text-red-500 text-base sm:text-lg font-semibold mb-3 sm:mb-4">{error}</div>
              <Button onClick={() => setError(null)} className="text-xs sm:text-sm">Retry</Button>
            </div>
          ) : (
                         <div className="flex flex-col items-center space-y-4">
               <Document
                 file={selectedNote.file}
                 onLoadSuccess={onDocumentLoadSuccess}
                 onLoadError={onDocumentLoadError}
                 loading={
                   <div className="text-center py-8 sm:py-12">
                     <div className="relative mb-4">
                       <div className="w-12 h-12 mx-auto relative">
                         <div className="absolute inset-0 rounded-full border-4 border-blue-200/30"></div>
                         <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 animate-spin"></div>
                         <div className="absolute inset-2 rounded-full border-4 border-indigo-200/30"></div>
                         <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                       </div>
                     </div>
                     <p className="text-sm sm:text-base text-gray-600">Loading PDF...</p>
                     <div className="flex justify-center items-center space-x-1 mt-3">
                       <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                       <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                       <div className="w-1.5 h-1.5 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                     </div>
                   </div>
                 }
               >
                 {Array.from(new Array(numPages), (el, index) => (
                   <Page
                     key={`page_${index + 1}`}
                     pageNumber={index + 1}
                     scale={scale}
                                           width={900}
                     loading={
                       <div className="text-center py-6 sm:py-8">
                         <div className="relative mb-3">
                           <div className="w-8 h-8 mx-auto relative">
                             <div className="absolute inset-0 rounded-full border-3 border-blue-200/30"></div>
                             <div className="absolute inset-0 rounded-full border-3 border-transparent border-t-blue-500 animate-spin"></div>
                             <div className="absolute inset-1 rounded-full border-3 border-indigo-200/30"></div>
                             <div className="absolute inset-1 rounded-full border-3 border-transparent border-t-indigo-500 animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
                           </div>
                         </div>
                         <p className="text-xs sm:text-sm text-gray-600">Loading page {index + 1}...</p>
                         <div className="flex justify-center items-center space-x-1 mt-2">
                           <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
                           <div className="w-1 h-1 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                           <div className="w-1 h-1 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                         </div>
                       </div>
                     }
                   />
                 ))}
               </Document>
             </div>
          )}
        </div>

                 {/* Navigation */}
         {numPages > 0 && (
           <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
             <span className="text-xs sm:text-sm text-gray-500 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-100 rounded-md">
               Page {pageNumber} of {numPages}
             </span>
             
                            <Button
                 variant="outline"
                                   onClick={() => setScale(1.3)}
                 className="text-xs sm:text-sm"
               >
                 Reset Zoom
               </Button>
           </div>
         )}
      </div>
    </div>
  );
} 

   
