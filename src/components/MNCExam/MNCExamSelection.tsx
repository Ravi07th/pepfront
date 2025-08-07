import React from 'react';
import { useNavigate } from 'react-router-dom';
import CompanySelection from './CompanySelection';

import { Company, ExamType } from './types';

const MNCExamSelection: React.FC = () => {
  const navigate = useNavigate();

  const handleCompanySelect = (company: Company, examType: ExamType) => {
    // Navigate to instructions page with company ID and exam type ID
    navigate(`/mock-test/${company.id}-${examType.id}`, { 
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