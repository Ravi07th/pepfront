import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InstructionsPage from '../common/InstructionsPage';

const VerbalSectionInstructions: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    // For comprehensive mock test, use a special topic
    if (topicId === 'comprehensive-verbal') {
      navigate(`/verbal-ability/test/comprehensive-verbal`);
    } else {
      navigate(`/verbal-ability/test/${topic}`);
    }
  };

  return (
    <InstructionsPage
      title="Verbal Ability Mock Test"
      description="Test your verbal ability skills with comprehensive questions"
      rules={[
        "Read each question carefully before answering",
        "You can mark questions for review and return to them later",
        "Use the question navigation panel to jump between questions",
        "You can change your answers before submitting",
        "The test will auto-submit when time runs out",
        "Ensure you have a stable internet connection",
        "Do not refresh the page during the test"
      ]}
      colorLegend={[
        {
          color: "bg-gray-300",
          label: "Not Visited",
          description: "Questions you haven't seen yet"
        },
        {
          color: "bg-red-500",
          label: "Not Answered",
          description: "Questions you've seen but not answered"
        },
        {
          color: "bg-green-500",
          label: "Answered",
          description: "Questions you've answered"
        },
        {
          color: "bg-yellow-500",
          label: "Marked for Review",
          description: "Questions you've marked to review later"
        },
        {
          color: "bg-purple-500",
          label: "Answered & Marked",
          description: "Questions you've answered and marked for review"
        }
      ]}
      additionalNotes={[
        "This test contains 60 questions to be completed in 60 minutes",
        "Each question carries equal marks",
        "There is no negative marking",
        "You need 60% to pass the test",
        "Results will be shown immediately after submission"
      ]}
      onStartTest={handleStartTest}
      topicId={topicId || 'reading-comprehension'}
      onBack={() => navigate('/test')}
    />
  );
};

export default VerbalSectionInstructions; 