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

// Demo PDF import (replace with your path)
import rrPdf from "/rr.pdf";

// Notes list for sidebar/example
const notesList = [
  {
    id: "rr",
    title: "Top 30 Interview Questions",
    navoption: "interview Questions",
    discription:
      "These are common interview questions designed especially for students and fresh graduates. They focus on your education, skills, experiences, and goals to help you confidently prepare for campus placements, internships, or your first job.",
    file: rrPdf,
    subject: "Mathematics",
    tags: ["math", "sample"],
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
        <div className=" bg-white dark:bg-slate-900 p-6 border-b border-blue-100 dark:border-slate-800 flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <span className="text-xl font-bold text-blue-800 dark:text-blue-200 tracking-tight">
            Student Notes
          </span>
        </div>
        <nav className="flex-1 overflow-y-auto py-6 space-y-2">
          {notesList.map((note) => (
            <button
              key={note.id}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg text-sm transition group relative
                ${
                  note.id === selectedNote.id
                    ? "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-white font-semibold shadow"
                    : "text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-700"
                }`}
              onClick={() => {
                setSelectedNote(note);
                setPageNumber(1);
                setScale(1.1);
              }}
            >
              <FileText className="w-5 h-6" />
              <span className="truncate">{note.navoption}</span>
              {note.id === selectedNote.id && (
                <span className="absolute left-0 h-full w-1 bg-blue-700 rounded-r-lg" aria-hidden />
              )}
            </button>
          ))}
        </nav>
        <div className="p-4 border-t border-blue-100 dark:border-slate-800 text-xs text-muted-foreground">
          <Home className="inline w-3 h-3 mr-1" />
          <a href="/" className="hover:underline">Back to Dashboard</a>
        </div>
      </aside>

      {/* Main content area */}
      <main className="flex-1 flex flex-col items-center bg-gradient-to-br from-white to-blue-100 dark:from-background dark:to-blue-900/40 px-4 md:px-8 py-8 overflow-auto relative">
        <div className="max-w-4xl w-full">
          {/* Sticky header */}
          <div className=" bg-opacity-70 dark:bg-opacity-70 bg-white dark:bg-slate-900 backdrop-blur-sm rounded-lg p-4 shadow-md">
            <h1 className="text-3xl font-bold mb-2">{selectedNote.title}</h1>
            <p className="text-lg font-medium text-gray-600 dark:text-gray-300">{selectedNote.discription}</p>
          </div>

          {/* PDF controls */}
          <section className="flex  flex-wrap justify-center items-center gap-3 mb-4 mt-5 z-20">
            <button
              onClick={() => setPageNumber((p) => Math.max(p - 1, 1))}
              disabled={pageNumber === 1}
              className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm px-3 font-mono select-none">
              Page {pageNumber} <span className="text-gray-400 dark:text-gray-500">/ {numPages || "?"}</span>
            </span>
            <button
              onClick={() => setPageNumber((p) => Math.min(p + 1, numPages))}
              disabled={pageNumber >= numPages}
              className="px-3 py-2  rounded bg-blue-600 text-white hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed shadow"
              aria-label="Next Page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            {/* Quick nav */}
            <button
              onClick={() => setPageNumber(1)}
              disabled={pageNumber === 1}
              className="text-blue-700 dark:text-blue-300 underline text-xs px-2 py-1"
            >First</button>
            <button
              onClick={() => setPageNumber(numPages)}
              disabled={pageNumber === numPages}
              className="text-blue-700 dark:text-blue-300 underline text-xs px-2 py-1"
            >Last</button>
            {/* Zoom */}
            <button title="Zoom Out"
              onClick={() => setScale(s => Math.max(s - 0.2, 0.7))}
              className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded"
            >
              <ZoomOut className="w-5 h-5" />
            </button>
            <button title="Zoom In"
              onClick={() => setScale(s => s + 0.2)}
              className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 px-3 py-2 rounded"
            >
              <ZoomIn className="w-5 h-5" />
            </button>
            {/* Download */}
            <button
              onClick={downloadPDF}
              className="px-3 py-2 rounded bg-green-600 text-white hover:bg-green-700 flex items-center font-medium shadow"
              title="Download PDF"
            >
              <ArrowDown className="w-5 h-5 mr-1" />
              Download
            </button>
          </section>

          {/* PDF Display */}
          <section className="bg-white dark:bg-slate-900 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700  transition-shadow">
            <Document
              file={selectedNote.file}
              onLoadSuccess={onDocumentLoadSuccess}
              loading={<div className="text-center text-blue-600 py-20">Loading PDF…</div>}
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
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300">
                  <ArrowDown className="w-4 h-4" /> Download Summary Notes (PDF)
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300">
                  <FileText className="w-4 h-4" /> View More Notes on This Subject
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center gap-2 px-3 py-2 rounded bg-white dark:bg-slate-800 shadow hover:shadow-md transition border border-blue-200 dark:border-slate-700 text-blue-700 dark:text-blue-300">
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
