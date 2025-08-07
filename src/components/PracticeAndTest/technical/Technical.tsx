import React from 'react';
import SectionPage from '@/components/common/SectionPage';
import { 
  Network, 
  Database, 
  Cpu, 
  Brain, 
  Layers, 
  GitBranch, 
  Cloud, 
  Shield, 
  Server, 
  Monitor 
} from 'lucide-react';

const Technical: React.FC = () => {
  const technicalTopics = [
    {
      id: 'data-structures-algorithms',
      name: 'Data Structures & Algorithms',
      description: 'Master arrays, linked lists, trees, graphs, sorting, and searching algorithms.',
      icon: <Brain className="text-blue-600" />,
      totalQuestions: 80
    },
    {
      id: 'operating-systems',
      name: 'Operating Systems',
      description: 'Learn process management, memory management, file systems, and OS concepts.',
      icon: <Monitor className="text-green-600" />,
      totalQuestions: 65
    },
    {
      id: 'database-systems',
      name: 'Database Systems',
      description: 'Master SQL, normalization, indexing, transactions, and database design.',
      icon: <Database className="text-purple-600" />,
      totalQuestions: 70
    },
    {
      id: 'computer-networks',
      name: 'Computer Networks',
      description: 'Learn networking protocols, TCP/IP, routing, and network architecture.',
      icon: <Network className="text-orange-600" />,
      totalQuestions: 60
    },
    {
      id: 'computer-architecture',
      name: 'Computer Architecture',
      description: 'Master CPU design, memory hierarchy, pipelining, and computer organization.',
      icon: <Cpu className="text-red-600" />,
      totalQuestions: 55
    },
    {
      id: 'software-engineering',
      name: 'Software Engineering',
      description: 'Learn SDLC, design patterns, testing, and software development methodologies.',
      icon: <Layers className="text-indigo-600" />,
      totalQuestions: 50
    },
    {
      id: 'version-control',
      name: 'Version Control & Git',
      description: 'Master Git commands, branching, merging, and collaborative development.',
      icon: <GitBranch className="text-teal-600" />,
      totalQuestions: 40
    },
    {
      id: 'cloud-computing',
      name: 'Cloud Computing',
      description: 'Learn AWS, Azure, cloud services, virtualization, and distributed systems.',
      icon: <Cloud className="text-cyan-600" />,
      totalQuestions: 45
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      description: 'Master security concepts, cryptography, authentication, and network security.',
      icon: <Shield className="text-emerald-600" />,
      totalQuestions: 55
    },
    {
      id: 'system-design',
      name: 'System Design',
      description: 'Learn scalable architecture, microservices, load balancing, and system optimization.',
      icon: <Server className="text-pink-600" />,
      totalQuestions: 60
    }
  ];

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    console.log(`Starting ${type} for ${topicId}`);
    // Add your test/practice logic here
  };

  return (
    <SectionPage
      title="Technical"
      subtitle="Master computer science fundamentals and technical concepts"
      topics={technicalTopics}
      onStartTest={handleStartTest}
    />
  );
};

export default Technical; 