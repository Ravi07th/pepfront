import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ExamInstructions from './ExamInstructions';
import { Company, ExamType } from './types';
import { parseRouteId } from './utils/routingUtils';
import { companies } from './data/companies';

const MNCExamInstructions: React.FC = () => {
  const navigate = useNavigate();
  const { companyExamId } = useParams<{ companyExamId: string }>();
  const location = useLocation();
  
  const { company, examType } = location.state as { 
    company: Company; 
    examType: ExamType; 
  } || {};

  // If no state data, try to parse from URL
  const resolvedCompany = company || (() => {
    if (!companyExamId) return null;
    
    const { companyId, examTypeId } = parseRouteId(companyExamId);
    
    const foundCompany = companies.find(c => c.id === companyId);
    
    if (!foundCompany) return null;
    
    const foundExamType = foundCompany.examTypes.find(e => e.id === examTypeId);
    
    if (!foundExamType) return null;
    
    return foundCompany;
  })();

  const resolvedExamType = examType || (() => {
    if (!companyExamId) return null;
    
    const { companyId, examTypeId } = parseRouteId(companyExamId);
    const foundCompany = companies.find(c => c.id === companyId);
    if (!foundCompany) return null;
    
    const foundExamType = foundCompany.examTypes.find(e => e.id === examTypeId);
    if (!foundExamType) return null;
    
    return foundExamType;
  })();

  const handleStartExam = () => {
    // Navigate to exam interface with the combined company and exam type ID
    navigate(`/mock-test/${companyExamId}/exam`, { 
      state: { 
        company: resolvedCompany, 
        examType: resolvedExamType 
      } 
    });
  };

  const handleBackToSelection = () => {
    // Navigate back to selection
    navigate('/mock-test');
  };

  // If no company/examType data, redirect to selection
  if (!resolvedCompany || !resolvedExamType) {
    navigate('/mock-test');
    return null;
  }

  return (
    <ExamInstructions
      company={resolvedCompany}
      examType={resolvedExamType}
      onStartExam={handleStartExam}
      onBack={handleBackToSelection}
    />
  );
};

export default MNCExamInstructions; 