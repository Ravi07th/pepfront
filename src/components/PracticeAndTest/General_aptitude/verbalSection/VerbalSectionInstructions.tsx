import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const VerbalSectionInstructions: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    navigate(`/verbal-ability/test/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/verbal-ability');
  };

  return (
    <InstructionsPage
      sectionName="Verbal Ability"
      sectionAbbreviation="VA"
      sectionIcon={<span>VA</span>}
      onStartTest={handleStartTest}
      onGoBack={handleGoBack}
    />
  );
};

export default VerbalSectionInstructions; 