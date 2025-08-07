import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ExamInterface from './ExamInterface';
import { Company, ExamType } from './types';

const MNCExamInterface: React.FC = () => {
  const navigate = useNavigate();
  const { companyExamId } = useParams<{ companyExamId: string }>();
  const location = useLocation();
  
  // Get company and examType from location state
  const { company, examType } = location.state as { 
    company: Company; 
    examType: ExamType; 
  } || {};

  const handleExamEnd = () => {
    // Navigate back to selection after exam ends
    navigate('/mock-test');
  };

  // If no company/examType data, redirect to selection
  if (!company || !examType) {
    navigate('/mock-test');
    return null;
  }

  return (
    <ExamInterface
      company={company}
      examType={examType}
      onExamEnd={handleExamEnd}
    />
  );
};

export default MNCExamInterface; 