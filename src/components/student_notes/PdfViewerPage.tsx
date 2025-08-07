import React, { useEffect, useState } from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut, X as CloseIcon, ChevronLeft, ChevronRight, BookOpen, ArrowLeft } from "lucide-react";
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    title: "C++ Advanced Concepts",
    category: "Programming",
    description: "Advanced C++ concepts including STL, templates, memory management, and modern C++ features for competitive programming.",
    file: "/rr.pdf",
    tags: ["c++", "stl", "templates", "competitive"],
    duration: "7 hours",
    downloads: 1200,
    rating: 4.8,
    views: 2800,
    lastUpdated: "2024-01-14",
    author: "CPP Master",
    icon: "/images/accenture.png",
    color: "bg-blue-600"
  },
  {
    id: "id7",
    title: "JavaScript Web Development",
    category: "Programming",
    description: "Modern JavaScript ES6+, DOM manipulation, async programming, and web development patterns for full-stack development.",
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
    file: "/rr.pdf",
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
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const pdfContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (noteId) {
      const note = notesList.find(n => n.id === noteId);
      if (note) {
        setSelectedNote(note);
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
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading PDF viewer...</p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/student-notes')}
                className="flex items-center space-x-2"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Notes</span>
              </Button>
              <div className="flex items-center space-x-3">
                {/* <div className={`w-10 h-10 ${selectedNote.color} rounded-lg flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={selectedNote.icon} 
                    alt={selectedNote.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <BookOpen className="h-5 w-5 text-white hidden" />
                </div> */}
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">{selectedNote.title}</h1>
                  <p className="text-sm text-gray-500">{selectedNote.category}</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setScale(Math.max(0.5, scale - 0.1))}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm text-gray-500 min-w-[60px] text-center">{Math.round(scale * 100)}%</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setScale(Math.min(2, scale + 0.1))}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={downloadPDF}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

             {/* PDF Content */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
         <div 
           className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 overflow-auto max-h-[70vh]" 
           ref={pdfContainerRef}
           style={{ scrollBehavior: 'smooth' }}
         >
          {error ? (
            <div className="text-center py-12">
              <div className="text-red-500 text-lg font-semibold mb-4">{error}</div>
              <Button onClick={() => setError(null)}>Retry</Button>
            </div>
          ) : (
            <div className="flex justify-center">
              <Document
                file={selectedNote.file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={
                  <div className="text-center py-12">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600">Loading PDF...</p>
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  loading={
                    <div className="text-center py-8">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
                      <p className="text-gray-600">Loading page...</p>
                    </div>
                  }
                />
              </Document>
            </div>
          )}
        </div>

                 {/* Navigation */}
         {numPages > 0 && (
           <div className="mt-6 flex items-center justify-center space-x-4">
             <Button
               variant="outline"
               onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
               disabled={pageNumber <= 1}
             >
               <ChevronLeft className="h-4 w-4 mr-2" />
               Previous
             </Button>
             <span className="text-sm text-gray-500 px-4 py-2 bg-gray-100 rounded-md">
               Page {pageNumber} of {numPages}
             </span>
             <Button
               variant="outline"
               onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
               disabled={pageNumber >= numPages}
             >
               Next
               <ChevronRight className="h-4 w-4 ml-2" />
             </Button>
             <Button
               variant="outline"
               onClick={() => setScale(1.0)}
             >
               Reset Zoom
             </Button>
           </div>
         )}
      </div>
    </div>
  );
} 