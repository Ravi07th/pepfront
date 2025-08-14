import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import InstructionsPage from '../General_aptitude/common/InstructionsPage';

const ProgrammingInstructions: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const navigate = useNavigate();

  const handleStartTest = (topic: string) => {
    if (topic === 'comprehensive-programming') {
      navigate(`/programming/test/comprehensive-programming`);
    } else {
      navigate(`/programming/test/${topic}`);
    }
  };

  return (
    <InstructionsPage
      title="Programming Mock Test"
      description="Test your programming skills with comprehensive questions"
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
      topicId={topicId || 'c-programming'}
      onBack={() => navigate('/programming')}
    />
  );
};

export default ProgrammingInstructions;
