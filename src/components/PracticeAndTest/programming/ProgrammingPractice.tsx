import React from 'react';
import { 
  Code, 
  FileCode, 
  FileText, 
  Coffee, 
  Terminal,
  Palette
} from 'lucide-react';
import PracticeComponent from '../General_aptitude/common/PracticeComponent';
import { cQuestions } from './cData';
import { cppQuestions } from './c++Data';
import { pythonQuestions } from './pythonData';
import { javascriptQuestions } from './javaScriptData';
import { javaQuestions } from './javaData';
import { htmlCssQuestions } from './htmlCssData';

const ProgrammingPractice: React.FC = () => {
  const categories = [
    {
      id: 'c-programming',
      name: 'C Programming',
      icon: <Code className="w-5 h-5" />,
      description: 'Master C programming fundamentals, pointers, arrays, and data structures.'
    },
    {
      id: 'cpp-programming',
      name: 'C++ Programming',
      icon: <FileCode className="w-5 h-5" />,
      description: 'Learn C++ OOP concepts, STL, templates, and advanced programming.'
    },
    {
      id: 'python',
      name: 'Python',
      icon: <Terminal className="w-5 h-5" />,
      description: 'Master Python programming, data structures, libraries, and frameworks.'
    },
    {
      id: 'javascript',
      name: 'JavaScript',
      icon: <FileText className="w-5 h-5" />,
      description: 'Learn JavaScript ES6+, DOM manipulation, and modern web development.'
    },
    {
      id: 'java',
      name: 'Java',
      icon: <Coffee className="w-5 h-5" />,
      description: 'Master Java OOP, collections, multithreading, and enterprise concepts.'
    },
    {
      id: 'html-css',
      name: 'HTML & CSS',
      icon: <Palette className="w-5 h-5" />,
      description: 'Master HTML & CSS styling, layouts, animations, and responsive design.'
    }
  ];

  const getQuestions = (topic: string) => {
    switch (topic) {
      case 'c-programming':
        return cQuestions;
      case 'cpp-programming':
        return cppQuestions;
      case 'python':
        return pythonQuestions;
      case 'javascript':
        return javascriptQuestions;
      case 'java':
        return javaQuestions;
      case 'html-css':
        return htmlCssQuestions;
      default:
        return cQuestions;
    }
  };

  const getTopicTitle = (topic: string) => {
    switch (topic) {
      case 'c-programming':
        return 'C Programming';
      case 'cpp-programming':
        return 'C++ Programming';
      case 'python':
        return 'Python';
      case 'javascript':
        return 'JavaScript';
      case 'java':
        return 'Java';
      case 'html-css':
        return 'HTML & CSS';
      default:
        return 'Programming';
    }
  };

  return (
    <PracticeComponent
      sectionName="Programming"
      sectionIcon={<Code className="w-6 h-6" />}
      categories={categories}
      getQuestions={getQuestions}
      getTopicTitle={getTopicTitle}
      navigatePath="/programming/practice"
      backPath="/programming"
    />
  );
};

export default ProgrammingPractice;
