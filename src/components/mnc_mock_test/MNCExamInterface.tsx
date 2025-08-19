import React from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import ExamInterface from './ExamInterface';
import { Company, ExamType } from './types';
import { parseRouteId, getRouteId } from './utils/routingUtils';
import { companies } from './data/companies';

const MNCExamInterface: React.FC = () => {
  const navigate = useNavigate();
  const { companyExamId } = useParams<{ companyExamId: string }>();
  const location = useLocation();
  
  // Get company and examType from location state
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

  const handleExamEnd = () => {
    // Navigate back to selection after exam ends
    navigate('/mock-test');
  };

  const handleReExam = () => {
    
    // Navigate to the exam instructions page with the same company and exam type
    const routeId = getRouteId(resolvedCompany, resolvedExamType);
    
    // Navigate with state to ensure data is passed correctly
    navigate(`/mock-test/${routeId}`, {
      state: {
        company: resolvedCompany,
        examType: resolvedExamType
      }
    });
  };

  // If no company/examType data, redirect to selection
  if (!resolvedCompany || !resolvedExamType) {
    navigate('/mock-test');
    return null;
  }

  return (
    <ExamInterface
      company={resolvedCompany}
      examType={resolvedExamType}
      onExamEnd={handleExamEnd}
      onReExam={handleReExam}
    />
  );
};

export default MNCExamInterface; 