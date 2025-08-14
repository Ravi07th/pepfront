import React, { useState } from 'react';
import CodingHome from './CodingHome';
import CompanyQuestionsList from './CompanyQuestionsList';
import QuestionSolution from './QuestionSolution';

type View = 'home' | 'company' | 'question';

interface CodingPlatformProps {}

const CodingPlatform: React.FC<CodingPlatformProps> = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedCompany, setSelectedCompany] = useState<{ id: string; name: string } | null>(null);
  const [selectedQuestion, setSelectedQuestion] = useState<{ id: string; title: string } | null>(null);

  const handleCompanyClick = (companyId: string, companyName: string) => {
    setSelectedCompany({ id: companyId, name: companyName });
    setCurrentView('company');
  };

  const handleQuestionClick = (questionId: string, questionTitle: string) => {
    setSelectedQuestion({ id: questionId, title: questionTitle });
    setCurrentView('question');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCompany(null);
    setSelectedQuestion(null);
  };

  const handleBackToCompany = () => {
    setCurrentView('company');
    setSelectedQuestion(null);
  };

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <CodingHome 
            onCompanyClick={handleCompanyClick}
          />
        );
      case 'company':
        return selectedCompany ? (
          <CompanyQuestionsList
            companyId={selectedCompany.id}
            companyName={selectedCompany.name}
            onQuestionClick={handleQuestionClick}
            onBackClick={handleBackToHome}
          />
        ) : null;
      case 'question':
        return selectedQuestion && selectedCompany ? (
          <QuestionSolution
            questionId={selectedQuestion.id}
            questionTitle={selectedQuestion.title}
            companyName={selectedCompany.name}
            onBackClick={handleBackToCompany}
          />
        ) : null;
      default:
        return <CodingHome onCompanyClick={handleCompanyClick} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderCurrentView()}
    </div>
  );
};

export default CodingPlatform;
