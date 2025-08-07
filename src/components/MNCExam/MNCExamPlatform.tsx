import React, { useState } from 'react';
import { Company, ExamType } from './types';
import CompanySelection from './CompanySelection';
import ExamInstructions from './ExamInstructions';
import ExamInterface from './ExamInterface';

type ExamState = 'selection' | 'instructions' | 'exam' | 'results';

interface MNCExamPlatformProps {
  onBackToMain?: () => void;
}

const MNCExamPlatform: React.FC<MNCExamPlatformProps> = ({ onBackToMain }) => {
  const [currentState, setCurrentState] = useState<ExamState>('selection');
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);
  const [selectedExamType, setSelectedExamType] = useState<ExamType | null>(null);

  const handleCompanySelect = (company: Company, examType: ExamType) => {
    setSelectedCompany(company);
    setSelectedExamType(examType);
    setCurrentState('instructions');
  };

  const handleStartExam = () => {
    setCurrentState('exam');
  };

  const handleBackToSelection = () => {
    setCurrentState('selection');
    setSelectedCompany(null);
    setSelectedExamType(null);
  };

  const handleExamEnd = () => {
    setCurrentState('selection');
    setSelectedCompany(null);
    setSelectedExamType(null);
  };

  const handleBackToMain = () => {
    if (onBackToMain) {
      onBackToMain();
    }
  };

  if (!selectedCompany || !selectedExamType) {
    return (
      <CompanySelection onCompanySelect={handleCompanySelect} />
    );
  }

  switch (currentState) {
    case 'instructions':
      return (
        <ExamInstructions
          company={selectedCompany}
          examType={selectedExamType}
          onStartExam={handleStartExam}
          onBack={handleBackToSelection}
        />
      );
    case 'exam':
      return (
        <ExamInterface
          company={selectedCompany}
          examType={selectedExamType}
          onExamEnd={handleExamEnd}
        />
      );
    default:
      return (
        <CompanySelection onCompanySelect={handleCompanySelect} />
      );
  }
};

export default MNCExamPlatform; 