import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { saveAs } from "file-saver";
import {
  ChevronLeft,
  ChevronRight,
  ArrowDown,
  ZoomIn,
  ZoomOut,
  FileText,
  BookOpen,
  Home,
} from "lucide-react";
import "pdfjs-dist/web/pdf_viewer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

// Demo PDF import (replace with your PDF file path)
import rrPdf from "/rr.pdf";

// Static notes list
const notesList = [
  {
    id: "id1",
    title: "Top 30 Interview Questions",
    navoption: "Interview Questions",
    discription:
      "These are common interview questions designed especially for students and fresh graduates. They focus on your education, skills, experiences, and goals to help you confidently prepare for campus placements, internships, or your first job.",
    file: rrPdf,
    tags: ["interview", "placement", "general"],
  },
  {
    id: "id2",
    title: "Gate Notes",
    navoption: "GATE Study Material",
    discription:
      "Essential GATE exam study material, including previous year question topics, formulas, and tricks to score high in engineering entrance exams.",
    file: rrPdf,
    tags: ["gate", "exam", "entrance"],
  },
  {
    id: "id3",
    title: "Java Full Notes",
    navoption: "Java Notes",
    discription:
      "Comprehensive notes covering Java basics to advanced OOP concepts, commonly asked Java interview questions, and best coding practices for engineering students.",
    file: rrPdf,
    tags: ["java", "programming", "oop"],
  },
  {
    id: "id4",
    title: "Python Crash Course",
    navoption: "Python Notes",
    discription:
      "Quick-reference notes for Python covering syntax, data structures, and code snippets for data science and college projects.",
    file: rrPdf,
    tags: ["python", "programming", "coding"],
  },
{
  id: "id16",
  title: "C Programming Guide",
  navoption: "C Notes",
  discription:
    "Reference guide to C programming: pointers, arrays, structures, memory management, and sample programs for exams and interviews.",
  file: rrPdf,
  tags: ["c", "procedural", "programming", "system"],
},
{
  id: "id17",
  title: "C++ Masterclass",
  navoption: "C++ Study",
  discription:
    "Complete C++ notes: OOP, STL, memory model, templates, and typical C++ interview coding problems for software roles.",
  file: rrPdf,
  tags: ["c++", "oop", "programming", "development"],
},
{
  id: "id18",
  title: "JavaScript Crash Course",
  navoption: "JavaScript Notes",
  discription:
    "The most common JS syntax, ES6+, DOM, async programming, debugging, and web development patterns for placements and projects.",
  file: rrPdf,
  tags: ["javascript", "web", "frontend", "coding"],
},
  {
    id: "id6",
    title: "DBMS Quick Revision",
    navoption: "DBMS Notes",
    discription:
      "Summary notes for Database Management Systems with ER models, normalization, SQL queries, and exam points for university and placements.",
    file: rrPdf,
    tags: ["dbms", "database", "sql"],
  },
 
  {
    id: "id8",
    title: "Operating Systems Concepts",
    navoption: "OS Notes",
    discription:
      "Essential OS topics like process management, scheduling, memory, and synchronization with solved questions for engineering exams.",
    file: rrPdf,
    tags: ["os", "operating systems", "theory"],
  },
  {
    id: "id9",
    title: "Aptitude Formulas",
    navoption: "Aptitude Notes",
    discription:
      "Maths aptitude shortcut tricks for quantitative, logical reasoning, and verbal skills, for campus placements and competitive exams.",
    file: rrPdf,
    tags: ["aptitude", "quant", "reasoning"],
  },
  {
    id: "id10",
    title: "Digital Logic Design",
    navoption: "Digital Electronics",
    discription:
      "Key concepts of digital electronics: logic gates, flip-flops, counters, sequential circuits, and design examples for ECE/EEE students.",
    file: rrPdf,
    tags: ["digital", "electronics", "logic"],
  },
  {
    id: "id13",
    title: "Networks & Communication",
    navoption: "Networking Notes",
    discription:
      "Protocols, OSI & TCP/IP models, routing algorithms, popular interview questions for Computer Networks and IT branch.",
    file: rrPdf,
    tags: ["network", "communication", "it"],
  },

{
  id: "id20",
  title: "PHP for Beginners",
  navoption: "PHP Notes",
  discription:
    "Core PHP concepts, server-side scripting, database integration, and MVC, helpful for web dev interviews and backend tasks.",
  file: rrPdf,
  tags: ["php", "web", "backend", "scripting"],
},

];

export default function StudentNotesPage() {
  const [selectedNote, setSelectedNote] = useState(notesList[0]);
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(0.8);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function downloadPDF() {
    saveAs(selectedNote.file, `${selectedNote.title}.pdf`);
  }

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-slate-50 to-blue-50 dark:from-background dark:to-blue-900 overflow-hidden">
      {/* Sidebar */}
      <aside className="bg-white dark:bg-slate-900 shadow-lg border-r border-blue-100 dark:border-slate-800 w-72 min-w-[220px] hidden md:flex flex-col">
        <div className="bg-white dark:bg-slate-900 p-6 border-b border-blue-100 dark:border-slate-800 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-800 dark:text-blue-200 tracking-tight">
            Student Notes
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 space-y-2">
          {notesList.map((note) => (
            <button
              key={note.id}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm transition group relative ${
                note.id === selectedNote.id
                  ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-white font-semibold shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700"
              }`}
              onClick={() => {
                setSelectedNote(note);
                setPageNumber(1);
                setScale(1.1);
              }}
              aria-label={`Select note: ${note.navoption}`}
            >
              <FileText className="w-5 h-6" />
              <span className="truncate">{note.navoption}</span>
              {note.id === selectedNote.id && (
                <span
                  className="absolute left-0 h-full w-1 bg-blue-700 rounded-r-lg"
                  aria-hidden="true"
                />
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-100 dark:border-slate-800 text-xs text-muted-foreground">
          <Home className="inline w-3 h-3 mr-1" />
          <a href="/" className="hover:underline">
            Back to Dashboard
          </a>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center bg-gradient-to-br from-white to-blue-100 dark:from-background dark:to-blue-900/40 px-4 md:px-8 py-8 overflow-auto relative">
        <div className="max-w-4xl w-full">
          {/* Sticky header */}
          <div className="bg-opacity-70 dark:bg-opacity-70 bg-white dark:bg-slate-900 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <h1 className="text-3xl font-bold mb-2">{selectedNote.title}</h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">
              {selectedNote.discription}
            </p>
          </div>

          {/* PDF controls */}
          <section className="flex flex-wrap justify-center items-center gap-3 mb-4 mt-5 z-20">
            <button
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              disabled={pageNumber === 1}
              className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm px-3 font-mono select-none">
              Page {pageNumber}{" "}
              <span className="text-gray-400 dark:text-gray-500">
                / {numPages || "?"}
              </span>
            </span>
            <button
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              disabled={pageNumber >= numPages}
              className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Quick nav */}
            <button
              onClick={() => setPageNumber(1)}
              disabled={pageNumber === 1}
              className="text-blue-700 dark:text-blue-300 underline text-xs px-2 py-1"
              aria-label="First Page"
            >
              First
            </button>
            <button
              onClick={() => setPageNumber(numPages)}
              disabled={pageNumber === numPages}
              className="text-blue-700 dark:text-blue-300 underline text-xs px-2 py-1"
              aria-label="Last Page"
            >
              Last
            </button>
            {/* Zoom */}
            <button
              title="Zoom Out"
              onClick={() => setScale((s) => Math.max(s - 0.2, 0.7))}
              className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button
              title="Zoom In"
              onClick={() => setScale((s) => s + 0.2)}
              className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            {/* Download */}
            <button
              onClick={downloadPDF}
              className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 flex items-center font-medium shadow"
              title="Download PDF"
              aria-label="Download PDF"
            >
              <ArrowDown className="w-5 h-5 mr-1" />
              Download
            </button>
          </section>

          {/* PDF Display */}
          <section className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 transition-shadow">
            <Document
              file={selectedNote.file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="text-center text-blue-600 py-20">
                  Loading PDF…
                </div>
              }
              onLoadError={(error) => {
                console.error("Error loading PDF:", error);
                alert(`Failed to load PDF: ${error.message || error}`);
              }}
              className="block"
            >
              <Page pageNumber={pageNumber} scale={scale} />
            </Document>
          </section>

          {/* Related resources */}
          <section className="mt-6 bg-blue-100/70 dark:bg-blue-900/30 border border-blue-200 rounded-lg p-4">
            <h2 className="text-lg font-semibold text-blue-800 dark:text-blue-200 flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5" />
              Related Resources
            </h2>
            <ul className="flex flex-col md:flex-row gap-2">
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300"
                >
                  <ArrowDown className="w-4 h-4" /> Download Summary Notes (PDF)
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300"
                >
                  <FileText className="w-4 h-4" /> View More Notes on This Subject
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300"
                >
                  <ChevronRight className="w-4 h-4" /> Ask Questions in Student Forum
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
