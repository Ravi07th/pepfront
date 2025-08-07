import React from 'react';
import { useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const LogicalReasoningInstructions: React.FC = () => {
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    navigate(`/logical-reasoning/test/${topic}`);
  };

  const handleGoBack = () => {
    navigate('/logical-reasoning');
  };

  return (
    <InstructionsPage
      sectionName="Logical Reasoning"
      sectionAbbreviation="LR"
      sectionIcon={<span>LR</span>}
      onStartTest={handleStartTest}
      onGoBack={handleGoBack}
    />
  );
};

export default LogicalReasoningInstructions; 