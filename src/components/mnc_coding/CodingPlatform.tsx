import React, { useEffect } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import CodingHome from './CodingHome';
import CompanyQuestionsList from './CompanyQuestionsList';
import QuestionSolution from './QuestionSolution';
import { mncCodingQuestions } from '../../data/mnc_coding_data/index';

interface CodingPlatformProps {}

const CodingPlatform: React.FC<CodingPlatformProps> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { companyId, questionId } = useParams<{ companyId?: string; questionId?: string }>();

  // Helper function to get proper company name from ID
  const getCompanyName = (id: string): string => {
    const companyNames: { [key: string]: string } = {
      'amazon': 'Amazon',
      'google': 'Google',
      'microsoft': 'Microsoft',
      'accenture': 'Accenture',
      'tcsnqt': 'TCS NQT',
      'cognizant': 'Cognizant',
      'wipro': 'Wipro',
      'capgemini': 'Capgemini',
      'top30': 'Most Asked Coding Questions'
    };
    return companyNames[id] || id.charAt(0).toUpperCase() + id.slice(1);
  };

  const handleCompanyClick = (companyId: string, companyName: string) => {
    navigate(`/coding/${companyId}`);
  };

  const handleQuestionClick = (questionId: string, questionTitle: string) => {
    if (companyId) {
      navigate(`/coding/${companyId}/${questionId}`);
    }
  };

  // Helper function to get question title from ID
  const getQuestionTitle = (questionId: string, companyId: string): string => {
    const companyQuestions = mncCodingQuestions[companyId as keyof typeof mncCodingQuestions];
    if (companyQuestions) {
      const question = companyQuestions.find(q => q.id === questionId);
      return question?.title || questionId;
    }
    return questionId;
  };

  const handleBackToHome = () => {
    navigate('/coding');
  };

  const handleBackToCompany = () => {
    if (companyId) {
      navigate(`/coding/${companyId}`);
    } else {
      navigate('/coding');
    }
  };

  // Determine current view based on URL
  const getCurrentView = () => {
    if (questionId && companyId) {
      return 'question';
    } else if (companyId) {
      return 'company';
    } else {
      return 'home';
    }
  };

  const currentView = getCurrentView();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return (
          <CodingHome 
            onCompanyClick={handleCompanyClick}
          />
        );
      case 'company':
        return companyId ? (
          <CompanyQuestionsList
            companyId={companyId}
            companyName={getCompanyName(companyId)}
            onQuestionClick={handleQuestionClick}
            onBackClick={handleBackToHome}
          />
        ) : null;
      case 'question':
        return questionId && companyId ? (
          <QuestionSolution
            questionId={questionId}
            questionTitle={getQuestionTitle(questionId, companyId)}
            companyName={getCompanyName(companyId)}
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
