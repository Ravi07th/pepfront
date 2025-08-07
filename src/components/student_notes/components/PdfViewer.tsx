import React from 'react';
import { Document, Page, pdfjs } from "react-pdf";
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut, X as CloseIcon, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import "pdfjs-dist/web/pdf_viewer.css";
import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

// Setup PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

interface PdfViewerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedNote: any;
  onDownload: () => void;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ 
  isOpen, 
  onClose, 
  selectedNote, 
  onDownload 
}) => {
  const [numPages, setNumPages] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [scale, setScale] = React.useState<number>(1.0);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      setPageNumber(1);
      setScale(1.0);
      setError(null);
    }
  }, [isOpen]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setError(null);
  }

  function onDocumentLoadError(error: Error) {
    console.error('PDF load error:', error);
    setError('Failed to load PDF file. Please try again.');
  }

  if (!isOpen || !selectedNote) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-6xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-3">
            <div className={`w-8 h-8 ${selectedNote.color} rounded-lg flex items-center justify-center overflow-hidden`}>
              <img 
                src={selectedNote.icon} 
                alt={selectedNote.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <BookOpen className="h-4 w-4 text-white hidden" />
            </div>
            <div>
              <h3 className="font-semibold">{selectedNote.title}</h3>
              <p className="text-sm text-gray-500">{selectedNote.category}</p>
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
            <span className="text-sm text-gray-500">{Math.round(scale * 100)}%</span>
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
              onClick={onDownload}
            >
              <Download className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={onClose}
            >
              <CloseIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="flex-1 overflow-auto p-4">
          <div className="flex justify-center">
            {error ? (
              <div className="text-center py-8">
                <div className="text-red-500 text-lg font-semibold mb-2">{error}</div>
                <Button onClick={() => setError(null)}>Retry</Button>
              </div>
            ) : (
              <Document
                file={selectedNote.file}
                onLoadSuccess={onDocumentLoadSuccess}
                onLoadError={onDocumentLoadError}
                loading={<div className="text-center py-8">Loading PDF...</div>}
              >
                <Page
                  pageNumber={pageNumber}
                  scale={scale}
                  loading={<div className="text-center py-8">Loading page...</div>}
                />
              </Document>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between p-4 border-t">
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNumber(Math.max(1, pageNumber - 1))}
              disabled={pageNumber <= 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="text-sm text-gray-500">
              Page {pageNumber} of {numPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPageNumber(Math.min(numPages, pageNumber + 1))}
              disabled={pageNumber >= numPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setScale(1.0)}
            >
              Reset Zoom
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}; 