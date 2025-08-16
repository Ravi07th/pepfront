import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanySelection from './CompanySelection';
import { getRouteId } from './utils/routingUtils';
import { Company, ExamType } from './types';

const MNCExamSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleCompanySelect = (company: Company, examType: ExamType) => {
    // Navigate to instructions page with company ID and exam type ID
    const routeId = getRouteId(company, examType);
    navigate(`/mock-test/${routeId}`, { 
      state: { 
        company, 
        examType 
      } 
    });
  };

  return (
    <div>
      
      <CompanySelection onCompanySelect={handleCompanySelect} />
    </div>
  );
};

export default MNCExamSelection; 