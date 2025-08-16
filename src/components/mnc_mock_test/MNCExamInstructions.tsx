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
  
  console.log('[MNCExamInstructions] Component loaded');
  console.log('[MNCExamInstructions] companyExamId:', companyExamId);
  console.log('[MNCExamInstructions] location.state:', location.state);
  
  // Get company and examType from location state
  const { company, examType } = location.state as { 
    company: Company; 
    examType: ExamType; 
  } || {};

  // If no state data, try to parse from URL
  const resolvedCompany = company || (() => {
    console.log('[MNCExamInstructions] No company in state, parsing from URL');
    if (!companyExamId) return null;
    
    const { companyId, examTypeId } = parseRouteId(companyExamId);
    console.log('[MNCExamInstructions] Parsed companyId:', companyId, 'examTypeId:', examTypeId);
    
    const foundCompany = companies.find(c => c.id === companyId);
    console.log('[MNCExamInstructions] Found company:', foundCompany?.name);
    
    if (!foundCompany) return null;
    
    const foundExamType = foundCompany.examTypes.find(e => e.id === examTypeId);
    console.log('[MNCExamInstructions] Found examType:', foundExamType?.name);
    
    if (!foundExamType) return null;
    
    return foundCompany;
  })();

  const resolvedExamType = examType || (() => {
    console.log('[MNCExamInstructions] No examType in state, parsing from URL');
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