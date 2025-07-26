import React from 'react';
import { CheckCircle, Circle, Clock } from 'lucide-react';

interface Section {
  id: string;
  name: string;
  subsections: {
    id: string;
    name: string;
    questions: number;
  }[];
}

interface SectionProgressProps {
  sections: Section[];
  currentSection: number;
  currentSubsection: number;
}

const SectionProgress: React.FC<SectionProgressProps> = ({ 
  sections, 
  currentSection, 
  currentSubsection 
}) => {
  const getSubsectionStatus = (sectionIndex: number, subsectionIndex: number) => {
    if (sectionIndex < currentSection) return 'completed';
    if (sectionIndex === currentSection) {
      if (subsectionIndex < currentSubsection) return 'completed';
      if (subsectionIndex === currentSubsection) return 'current';
    }
    return 'pending';
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      {sections.map((section, sectionIndex) => 
        section.subsections.map((subsection, subsectionIndex) => {
          const status = getSubsectionStatus(sectionIndex, subsectionIndex);
          
          return (
            <div
              key={`${section.id}-${subsection.id}`}
              className={`flex items-center space-x-1 px-2 py-1 rounded-lg text-xs font-medium transition-all ${
                status === 'completed'
                  ? 'bg-green-100 text-green-700'
                  : status === 'current'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-gray-100 text-gray-500'
              }`}
            >
              {status === 'completed' ? (
                <CheckCircle className="h-3 w-3" />
              ) : status === 'current' ? (
                <Clock className="h-3 w-3" />
              ) : (
                <Circle className="h-3 w-3" />
              )}
              <span className="hidden sm:inline">{subsection.name}</span>
              <span className="sm:hidden">{subsection.name.split(' ')[0]}</span>
            </div>
          );
        })
      )}
    </div>
  );
};

export default SectionProgress;