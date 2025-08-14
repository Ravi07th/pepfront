import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, FileText, BookOpen, Code, Network, Brain } from 'lucide-react';
import { notesContent } from '@/data/notesContent';

interface PDFGeneratorProps {
  className?: string;
}

const PDFGenerator: React.FC<PDFGeneratorProps> = ({ className = '' }) => {
  const handleViewPDF = (key: string) => {
    try {
      if (key === 'fresherITInterview') {
        window.open('/pdf/interviewQue.pdf', '_blank');
      } else if (key === 'dsaNotes') {
        window.open('/dsa-notes', '_blank');
      } else if (key === 'dataStructuresAlgorithms') {
        window.open('/dsa-notes-detailed', '_blank');
      } else {
        alert('Coming Soon! This PDF will be available shortly.');
      }
    } catch (error) {
      console.error('Error opening PDF:', error);
    }
  };

  const handleViewAllPDFs = () => {
    try {
      window.open('/pdf/interviewQue.pdf', '_blank');
    } catch (error) {
      console.error('Error opening PDFs:', error);
    }
  };

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'interview prep':
        return <Brain className="h-5 w-5" />;
      case 'programming':
        return <Code className="h-5 w-5" />;
      case 'computer science':
        return <Network className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Generate Study Notes PDFs
        </h2>
        <p className="text-gray-600">
          Download comprehensive study materials for each section
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(notesContent).map(([key, note]) => (
          <div
            key={key}
            className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 bg-blue-100 rounded-lg mr-3">
                {getIconForCategory(note.category)}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {note.title}
                </h3>
                <p className="text-xs text-gray-500">{note.category}</p>
              </div>
            </div>

            <div className="mb-4">
              <div className="flex flex-wrap gap-1 mb-2">
                {note.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {tag}
                  </span>
                ))}
                {note.tags.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                    +{note.tags.length - 3}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 line-clamp-2">
                {note.content[0]?.substring(0, 100)}...
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-500">
                By {note.author}
              </div>
              <Button
                onClick={() => handleViewPDF(key)}
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Download className="h-4 w-4 mr-1" />
                View PDF
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center pt-6 border-t border-gray-200">
        <Button
          onClick={handleViewAllPDFs}
          size="lg"
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <FileText className="h-5 w-5 mr-2" />
          View All PDFs
        </Button>
        <p className="text-sm text-gray-500 mt-2">
          Download all study materials at once
        </p>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <h3 className="font-semibold text-blue-900 mb-2">PDF Features:</h3>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Comprehensive study materials for each topic</li>
          <li>• Professional formatting with proper structure</li>
          <li>• Interview questions and answers</li>
          <li>• Code examples and explanations</li>
          <li>• Best practices and tips</li>
          <li>• Ready for printing and offline study</li>
        </ul>
      </div>
    </div>
  );
};

export default PDFGenerator;
