import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ExamInstructions from './ExamInstructions';
import { Company, ExamType } from './types';

const MNCExamInstructions: React.FC = () => {
  const navigate = useNavigate();
  const { companyExamId } = useParams<{ companyExamId: string }>();
  const location = useLocation();
  
  // Get company and examType from location state
  const { company, examType } = location.state as { 
    company: Company; 
    examType: ExamType; 
  } || {};

  const handleStartExam = () => {
    // Navigate to exam interface with the combined company and exam type ID
    navigate(`/mock-test/${companyExamId}/exam`, { 
      state: { 
        company, 
        examType 
      } 
    });
  };

  const handleBackToSelection = () => {
    // Navigate back to selection
    navigate('/mock-test');
  };

  // If no company/examType data, redirect to selection
  if (!company || !examType) {
    navigate('/mock-test');
    return null;
  }

  return (
    <ExamInstructions
      company={company}
      examType={examType}
      onStartExam={handleStartExam}
      onBack={handleBackToSelection}
    />
  );
};

export default MNCExamInstructions; 