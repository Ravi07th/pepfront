import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

interface Formula {
  title: string;
  description: string;
  examples: string[];
}

interface TopicFormulas {
  [key: string]: Formula[];
}

interface FormulaPageProps {
  formulas: TopicFormulas;
  getTopicTitle: (topic: string) => string;
  getTopicIcon: (topic: string) => React.ReactNode;
  onStartPractice: (topic: string) => void;
  onGoBack: () => void;
  sectionName: string;
}

const FormulaPage: React.FC<FormulaPageProps> = ({
  formulas,
  getTopicTitle,
  getTopicIcon,
  onStartPractice,
  onGoBack,
  sectionName
}) => {
  const { topic } = useParams<{ topic: string }>();
  const navigate = useNavigate();

  const handleStartPractice = () => {
    onStartPractice(topic || '');
  };

  const handleGoBack = () => {
    onGoBack();
  };

  const currentFormulas = formulas[topic || Object.keys(formulas)[0]] || formulas[Object.keys(formulas)[0]];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={handleGoBack}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 text-gray-600" />
              </button>
              <div className="flex items-center space-x-3">
                {getTopicIcon(topic || '')}
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{getTopicTitle(topic || '')}</h1>
                  <p className="text-gray-600">Formulas and Quick Tricks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content - Single Card with all formulas */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-gray-900">
              {getTopicTitle(topic || '')} - Formulas and Tips
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {currentFormulas.map((formula, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {formula.title}
                </h3>
                <p className="text-gray-600 mb-4">{formula.description}</p>
                <div className="space-y-2">
                  {formula.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-700">{example}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Start Practice Button at the bottom */}
            <div className="pt-6 border-t border-gray-200">
              <Button
                onClick={handleStartPractice}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold"
              >
                Start Practice
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormulaPage; 