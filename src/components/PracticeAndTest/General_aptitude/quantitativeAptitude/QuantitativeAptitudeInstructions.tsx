import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const QuantitativeAptitudeInstructions: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    // For comprehensive mock test, use a special topic
    if (topicId === 'comprehensive-aptitude') {
      navigate(`/quantitative-aptitude/test/comprehensive-aptitude`);
    } else {
      navigate(`/quantitative-aptitude/test/${topic}`);
    }
  };

  const handleGoBack = () => {
    // For comprehensive mock test, return to test home
    if (topicId === 'comprehensive-aptitude') {
      navigate('/test');
    } else {
      navigate('/quantitative-aptitude');
    }
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