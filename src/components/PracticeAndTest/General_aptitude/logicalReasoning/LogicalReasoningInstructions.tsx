import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const LogicalReasoningInstructions: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    // For comprehensive mock test, use a special topic
    if (topicId === 'comprehensive-logical') {
      navigate(`/logical-reasoning/test/comprehensive-logical`);
    } else {
      navigate(`/logical-reasoning/test/${topic}`);
    }
  };

  const handleGoBack = () => {
    // For comprehensive mock test, return to test home
    if (topicId === 'comprehensive-logical') {
      navigate('/test');
    } else {
      navigate('/logical-reasoning');
    }
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