import React from 'react';
import SectionPage from '@/components/common/SectionPage';
import { useNavigate } from 'react-router-dom';
import { 
  Code, 
  FileCode, 
  FileText, 
  Coffee, 
  Zap, 
  Server, 
  Globe, 
  Palette,
  Terminal
} from 'lucide-react';

const Programming: React.FC = () => {
  const navigate = useNavigate();
  const programmingTopics = [
    {
      id: 'c-programming',
      name: 'C Programming',
      description: 'Master C programming fundamentals, pointers, arrays, and data structures.',
      icon: <Code className="text-blue-600" />,
      totalQuestions: 60
    },
    {
      id: 'cpp-programming',
      name: 'C++ Programming',
      description: 'Learn C++ OOP concepts, STL, templates, and advanced programming.',
      icon: <FileCode className="text-green-600" />,
      totalQuestions: 65
    },
    {
      id: 'python',
      name: 'Python',
      description: 'Master Python programming, data structures, libraries, and frameworks.',
      icon: <Terminal className="text-yellow-600" />,
      totalQuestions: 70
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      description: 'Learn JavaScript ES6+, DOM manipulation, and modern web development.',
      icon: <FileText className="text-orange-600" />,
      totalQuestions: 55
    },
    {
      id: 'java',
      name: 'Java',
      description: 'Master Java OOP, collections, multithreading, and enterprise concepts.',
      icon: <Coffee className="text-red-600" />,
      totalQuestions: 60
    },
   
    {
      id: 'html-css',
      name: 'Html & CSS',
      description: 'Master Html & CSS styling, layouts, animations, and responsive design.',
      icon: <Palette className="text-pink-600" />,
      totalQuestions: 50
    }
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    if (type === 'test') {
      // Navigate to instructions page first
      navigate(`/programming/instructions/${topicId}`);
    } else {
      // For practice, navigate to practice page
      navigate(`/programming/practice/${topicId}`);
    }
  };

  return (
    <SectionPage
      title="Programming"
      subtitle="Master programming languages and web development technologies"
      topics={programmingTopics}
      onStartTest={handleStartTest}
    />
  );
};

export default Programming; 