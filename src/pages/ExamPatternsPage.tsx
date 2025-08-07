import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExamPatternDisplay from '@/components/exam_pattern/ExamPatternDisplay';
import DetailedSyllabus from '@/components/exam_pattern/DetailedSyllabus';

const ExamPatternsPage: React.FC = () => {
  const { companyId } = useParams<{ companyId: string }>();
  const navigate = useNavigate();

  const handleCompanySelect = (companyId: string) => {
    navigate(`/exam-patterns/${companyId}`);
  };

  const handleBackToOverview = () => {
    navigate('/exam-patterns');
  };

  // If companyId is present in URL, show detailed view
  if (companyId) {
    return (
      <DetailedSyllabus 
        companyId={companyId} 
        onBack={handleBackToOverview}
      />
    );
  }

  // Otherwise show overview
  return (
    <ExamPatternDisplay />
  );
};

export default ExamPatternsPage; 