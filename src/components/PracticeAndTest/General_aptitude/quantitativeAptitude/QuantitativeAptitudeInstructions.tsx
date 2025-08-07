import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const QuantitativeAptitudeInstructions: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    navigate(`/quantitative-aptitude/test/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/quantitative-aptitude');
  };

  return (
    <InstructionsPage
      sectionName="Quantitative Aptitude"
      sectionAbbreviation="QA"
      sectionIcon={<span>QA</span>}
      onStartTest={handleStartTest}
      onGoBack={handleGoBack}
    />
  );
};

export default QuantitativeAptitudeInstructions; 