import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, BookOpen, Code, Network, Brain, Star, Filter, Globe, Database, Cpu, Users, Server, Settings } from 'lucide-react';
import PDFGenerator from './PDFGenerator';

const StudentNotesPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('title');

  // Enhanced notes data structure
  const notesList = [
    {
      id: "id2",
      title: "Data Structures & Algorithms - Complete Guide",
      category: "Theory",
      description: "Comprehensive DSA guide with detailed explanations, code examples, complexity analysis, and common interview problems. Perfect for placement preparation!",
      tags: ["dsa", "algorithms", "programming", "coding", "interview"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      featured: true,
      stats: { questions: "200+", time: "90 min", downloads: "3.2K" },
      features: ["Detailed Explanations", "Code Examples", "Complexity Analysis", "Interview Problems", "PDF Download"]
    },
    {
      id: "id6",
      title: "Top 30 Interview Questions for Fresher",
      category: "Interview Prep",
      description: "Comprehensive guide with top 30 interview questions specifically tailored for IT freshers with detailed answers and tips.",
      tags: ["interview", "fresher", "it", "career", "preparation"],
      icon: <Users className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-900/20 to-purple-900/20",
      featured: true,
      stats: { questions: "30+", time: "45 min", downloads: "1.2K" },
      features: ["Interview Tips", "Sample Answers", "Career Guidance", "PDF Download"]
    },
    {
      id: "id7",
      title: "C Programming Fundamentals",
      category: "Theory",
      description: "Complete guide to C programming language covering syntax, data types, control structures, functions, arrays, pointers, and memory management.",
      tags: ["c", "programming", "basics", "syntax", "pointers"],
      icon: <Code className="w-6 h-6" />,
      gradient: "from-teal-500 to-cyan-500",
      bgGradient: "from-teal-900/20 to-cyan-900/20",
      featured: false,
      stats: { questions: "100+", time: "60 min", downloads: "1.8K" },
      features: ["Syntax Examples", "Code Snippets", "Memory Management", "File Handling", "PDF Download"]
    },
    {
      id: "id8",
      title: "Automata Theory - Complete Guide",
      category: "Theory",
      description: "Comprehensive guide to Automata Theory covering Finite Automata, Regular Expressions, Context-Free Grammars, Pushdown Automata, and Turing Machines with detailed explanations and examples.",
      tags: ["automata", "theory", "finite-automata", "regular-expressions", "turing-machines"],
      icon: <Cpu className="w-6 h-6" />,
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-900/20 to-purple-900/20",
      featured: false,
      stats: { questions: "150+", time: "120 min", downloads: "950" },
      features: ["Finite Automata", "Regular Expressions", "Context-Free Grammars", "Turing Machines", "PDF Download"]
    },
                  {
                id: "id9",
                title: "Operating System - Complete Guide",
                category: "Theory",
                description: "Comprehensive Operating System guide covering process management, memory management, file systems, I/O management, deadlocks, and modern OS case studies with practical examples.",
                tags: ["operating-system", "os", "process-management", "memory-management", "file-systems"],
                icon: <Cpu className="w-6 h-6" />,
                gradient: "from-orange-500 to-red-500",
                bgGradient: "from-orange-900/20 to-red-900/20",
                featured: false,
                stats: { questions: "200+", time: "150 min", downloads: "1.2K" },
                features: ["Process Management", "Memory Management", "File Systems", "I/O Management", "PDF Download"]
              },
              {
                id: "id10",
                title: "Computer Network - Complete Guide",
                category: "Networking",
                description: "Comprehensive Computer Network guide covering OSI model, TCP/IP protocols, routing, switching, network security, wireless networks, and emerging technologies with practical examples.",
                tags: ["computer-network", "networking", "tcp-ip", "routing", "network-security"],
                icon: <Network className="w-6 h-6" />,
                gradient: "from-blue-500 to-purple-500",
                bgGradient: "from-blue-900/20 to-purple-900/20",
                featured: false,
                stats: { questions: "250+", time: "180 min", downloads: "1.5K" },
                features: ["OSI Model", "TCP/IP Protocols", "Routing & Switching", "Network Security", "PDF Download"]
              },
                              {
                id: "id11",
                title: "Python Programming - Complete Guide",
                category: "Theory",
                description: "Comprehensive Python programming guide covering basics, data types, control flow, functions, OOP, modules, file handling, exception handling, and advanced concepts with practical examples.",
                tags: ["python", "programming", "basics", "oop", "modules", "file-handling"],
                icon: <Code className="w-6 h-6" />,
                gradient: "from-green-500 to-blue-500",
                bgGradient: "from-green-900/20 to-blue-900/20",
                featured: false,
                stats: { questions: "300+", time: "200 min", downloads: "2.0K" },
                features: ["Python Basics", "OOP Concepts", "File Handling", "Exception Handling", "PDF Download"]
              }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Interview Prep', label: 'Interview Prep' },
    { value: 'Theory', label: 'Theory' },
    { value: 'AI/ML', label: 'AI/ML' }
  ];

  const sortOptions = [
    { value: 'title', label: 'Title' },
    { value: 'category', label: 'Category' },
    { value: 'featured', label: 'Featured' }
  ];

  const filteredAndSortedNotes = useMemo(() => {
    let filtered = notesList.filter(note => {
      const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || note.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });

    // Sort notes
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'featured':
          return b.featured ? 1 : -1;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredNotes = notesList.filter(note => note.featured);
  const regularNotes = filteredAndSortedNotes.filter(note => !note.featured);

  const handleNoteClick = (note: any) => {
    if (note.id === "id1") {
      // Open the interview questions PDF in a new tab
      window.open('/pdf/interviewQue.pdf', '_blank');
    } else if (note.id === "id2") {
      // Navigate to DSA notes
      navigate('/student-notes/dsa-notes');
    } else if (note.id === "id3") {
      // Navigate to coding notes
      navigate('/coding-notes');
    } else if (note.id === "id6") {
      // Navigate to interview questions
      navigate('/student-notes/interview-question');
    } else if (note.id === "id7") {
      // Navigate to C programming notes
      navigate('/student-notes/c-programming-notes');
    } else if (note.id === "id8") {
      // Navigate to automata theory notes
      navigate('/student-notes/automata-notes');
    } else if (note.id === "id9") {
      // Navigate to operating system notes
      navigate('/student-notes/operating-system-notes');
    } else if (note.id === "id10") {
      // Navigate to computer network notes
      navigate('/student-notes/computer-network-notes');
    } else if (note.id === "id11") {
      // Navigate to Python notes
      navigate('/student-notes/python-notes');
    } else {
      // For other notes, navigate to PDF viewer
      navigate(`/pdf-viewer/${note.id}`);
    }
  };

  const getCategoryColor = (category: string) => {
    const colorMap: { [key: string]: string } = {
      'Interview Prep': 'bg-yellow-900/30 text-yellow-300 border-yellow-500/30',
      'Programming': 'bg-blue-900/30 text-blue-300 border-blue-500/30',
      'Web Dev': 'bg-purple-900/30 text-purple-300 border-purple-500/30',
      'Database': 'bg-green-900/30 text-green-300 border-green-500/30',
      'Architecture': 'bg-red-900/30 text-red-300 border-red-500/30',
      'AI/ML': 'bg-indigo-900/30 text-indigo-300 border-indigo-500/30'
    };
    return colorMap[category] || 'bg-gray-900/30 text-gray-300 border-gray-500/30';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-6xl font-bold text-white mb-4">
            Student Notes & Resources
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
          Comprehensive study notes, exam guides, and learning resources designed to help you understand concepts clearly and score better in your semester exams.
          </p>
        </div>



                 {/* Featured Section */}
         {featuredNotes.length > 0 && (
           <div className="mb-8">
             <div className="flex items-center gap-2 mb-4">
               <Star className="h-5 w-5 text-yellow-500" />
               <h2 className="text-2xl font-semibold text-white">Featured Notes</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {featuredNotes.map((note) => (
                 <div
                   key={note.id}
                   className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${note.bgGradient} hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:scale-[1.02] transform ease-in-out cursor-pointer`}
                   onClick={() => handleNoteClick(note)}
                 >
                   {/* Animated Background Pattern */}
                   <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                     <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${note.gradient} rounded-full -translate-y-16 translate-x-16 animate-pulse`}></div>
                     <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${note.gradient} rounded-full translate-y-10 -translate-x-10 animate-bounce delay-1000`}></div>
                     <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br ${note.gradient} rounded-full -translate-x-8 -translate-y-8 animate-spin delay-500`}></div>
                   </div>

                   {/* Card Content */}
                   <div className="relative p-6">
                     {/* Header with Icon */}
                     <div className="flex items-center justify-between mb-4">
                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${note.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                         {note.icon}
                       </div>
                     </div>

                     {/* Title */}
                     <div className="flex items-start justify-between mb-3">
                       <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors duration-300">
                         {note.title}
                       </h3>
                       <Badge variant="secondary" className="bg-yellow-900/30 text-yellow-300 border-yellow-500/30">
                         Featured
                       </Badge>
                     </div>



                     {/* Category Badge */}
                     <Badge className={`${getCategoryColor(note.category)} mb-4 border`}>
                       {note.category}
                     </Badge>

                     {/* Description */}
                     <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                       {note.description}
                     </p>

                     {/* Features Tags */}
                     <div className="flex flex-wrap gap-1 mb-4">
                       {note.features.map((feature, i) => (
                         <span key={i} className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${note.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                           {feature}
                         </span>
                       ))}
                     </div>

                     {/* Tags */}
                     <div className="flex flex-wrap gap-1 mb-4">
                       {note.tags.slice(0, 3).map((tag) => (
                         <Badge key={tag} variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
                           {tag}
                         </Badge>
                       ))}
                       {note.tags.length > 3 && (
                         <Badge variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
                           +{note.tags.length - 3}
                         </Badge>
                       )}
                     </div>

                     {/* Enhanced Button */}
                     <button className={`relative overflow-hidden bg-gradient-to-r ${note.gradient} text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full group/btn`}>
                       <span className="relative z-10 flex items-center justify-center">
                         <BookOpen className="h-4 w-4 mr-2" />
                         Read Now
                         <div className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                           →
                         </div>
                       </span>
                       <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                     </button>
                   </div>

                   {/* Enhanced Hover Effect Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-r ${note.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`}></div>

                   {/* Animated Bottom Accent */}
                   <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${note.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>

                   {/* Floating Elements */}
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className={`w-3 h-3 bg-gradient-to-r ${note.gradient} rounded-full animate-ping`}></div>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         )}

                 {/* All Notes Section */}
         <div>
           <div className="flex items-center justify-between mb-4">
             <h2 className="text-2xl font-semibold text-white">
               All Study Notes
             </h2>
           </div>

           {regularNotes.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {regularNotes.map((note) => (
                 <div
                   key={note.id}
                   className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${note.bgGradient} hover:from-gray-800 hover:via-gray-700 hover:to-gray-800 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:scale-[1.02] transform ease-in-out cursor-pointer`}
                   onClick={() => handleNoteClick(note)}
                 >
                   {/* Animated Background Pattern */}
                   <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                     <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${note.gradient} rounded-full -translate-y-16 translate-x-16 animate-pulse`}></div>
                     <div className={`absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr ${note.gradient} rounded-full translate-y-10 -translate-x-10 animate-bounce delay-1000`}></div>
                     <div className={`absolute top-1/2 left-1/2 w-16 h-16 bg-gradient-to-br ${note.gradient} rounded-full -translate-x-8 -translate-y-8 animate-spin delay-500`}></div>
                   </div>

                   {/* Card Content */}
                   <div className="relative p-6">
                     {/* Header with Icon */}
                     <div className="flex items-center justify-between mb-4">
                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${note.gradient} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                         {note.icon}
                       </div>
                     </div>

                     {/* Title */}
                     <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                       {note.title}
                     </h3>


                     {/* Category Badge */}
                     <Badge className={`${getCategoryColor(note.category)} mb-4 border`}>
                       {note.category}
                     </Badge>

                     {/* Description */}
                     <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                       {note.description}
                     </p>

                     {/* Features Tags */}
                     <div className="flex flex-wrap gap-1 mb-4">
                       {note.features.map((feature, i) => (
                         <span key={i} className={`px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r ${note.gradient} text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                           {feature}
                         </span>
                       ))}
                     </div>

                     {/* Tags */}
                     <div className="flex flex-wrap gap-1 mb-4">
                       {note.tags.slice(0, 3).map((tag) => (
                         <Badge key={tag} variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
                           {tag}
                         </Badge>
                       ))}
                       {note.tags.length > 3 && (
                         <Badge variant="outline" className="text-xs bg-gray-800/50 border-gray-600 text-gray-300">
                           +{note.tags.length - 3}
                         </Badge>
                       )}
                     </div>

                     {/* Enhanced Button */}
                     <button className={`relative overflow-hidden bg-gradient-to-r ${note.gradient} text-white px-6 py-3 rounded-xl text-sm font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 w-full group/btn`}>
                       <span className="relative z-10 flex items-center justify-center">
                         <BookOpen className="h-4 w-4 mr-2" />
                         Read Now
                         <div className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300">
                           →
                         </div>
                       </span>
                       <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-20 transition-opacity duration-300"></div>
                     </button>
                   </div>

                   {/* Enhanced Hover Effect Overlay */}
                   <div className={`absolute inset-0 bg-gradient-to-r ${note.gradient} opacity-0 group-hover:opacity-5 transition-all duration-500 rounded-2xl`}></div>

                   {/* Animated Bottom Accent */}
                   <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${note.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}></div>

                   {/* Floating Elements */}
                   <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                     <div className={`w-3 h-3 bg-gradient-to-r ${note.gradient} rounded-full animate-ping`}></div>
                   </div>
                 </div>
               ))}
             </div>
           ) : (
             <div className="text-center py-12">
               <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
               <h3 className="text-lg font-medium text-white mb-2">No notes found</h3>
               <p className="text-gray-400">
                 Try adjusting your search or filter criteria to find what you're looking for.
               </p>
             </div>
           )}
         </div>

                 {/* Upcoming Notes Section */}
         <div className="mt-12">
           <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700 p-6">
             <div className="flex items-center justify-between mb-6">
               <div>
                 <h2 className="text-2xl font-bold text-white mb-2">Upcoming Notes</h2>
                 <p className="text-gray-400">New study materials coming soon!</p>
               </div>
               <Badge variant="secondary" className="bg-orange-900/30 text-orange-300 border-orange-500/30">
                 Coming Soon
               </Badge>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {/* Java Notes Card */}
               <div className="group relative bg-gradient-to-br from-orange-900/20 to-red-900/20 rounded-2xl p-6 border border-orange-500/30 hover:border-orange-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center text-white shadow-lg">
                     <Code className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-orange-900/30 text-orange-300 border-orange-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Java Programming</h3>
                 <p className="text-gray-300 text-sm mb-4">Complete Java programming guide covering OOP concepts, collections, multithreading, and advanced features.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white opacity-80">
                     OOP Concepts
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white opacity-80">
                     Collections
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-orange-500 to-red-500 text-white opacity-80">
                     Multithreading
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>

               {/* JavaScript Notes Card */}
               <div className="group relative bg-gradient-to-br from-yellow-900/20 to-orange-900/20 rounded-2xl p-6 border border-yellow-500/30 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center text-white shadow-lg">
                     <Code className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-yellow-900/30 text-yellow-300 border-yellow-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">JavaScript Fundamentals</h3>
                 <p className="text-gray-300 text-sm mb-4">Modern JavaScript guide covering ES6+, DOM manipulation, async programming, and frameworks.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white opacity-80">
                     ES6+
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white opacity-80">
                     DOM
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white opacity-80">
                     Async/Await
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>

               {/* Node.js Notes Card */}
               <div className="group relative bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-2xl p-6 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-white shadow-lg">
                     <Server className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-green-900/30 text-green-300 border-green-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Node.js Backend</h3>
                 <p className="text-gray-300 text-sm mb-4">Complete Node.js backend development guide with Express, MongoDB, authentication, and deployment.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white opacity-80">
                     Express.js
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white opacity-80">
                     MongoDB
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white opacity-80">
                     Authentication
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>

               {/* React Notes Card */}
               <div className="group relative bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-2xl p-6 border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                     <Code className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-blue-900/30 text-blue-300 border-blue-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">React Development</h3>
                 <p className="text-gray-300 text-sm mb-4">Modern React development guide with hooks, context, state management, and advanced patterns.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white opacity-80">
                     Hooks
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white opacity-80">
                     Context
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white opacity-80">
                     Redux
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>

               {/* Database Notes Card */}
               <div className="group relative bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-2xl p-6 border border-purple-500/30 hover:border-purple-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white shadow-lg">
                     <Database className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-purple-900/30 text-purple-300 border-purple-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">Database Systems</h3>
                 <p className="text-gray-300 text-sm mb-4">Comprehensive database guide covering SQL, NoSQL, normalization, transactions, and optimization.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white opacity-80">
                     SQL
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white opacity-80">
                     NoSQL
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white opacity-80">
                     Optimization
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>

               {/* DevOps Notes Card */}
               <div className="group relative bg-gradient-to-br from-indigo-900/20 to-violet-900/20 rounded-2xl p-6 border border-indigo-500/30 hover:border-indigo-400/50 transition-all duration-300 cursor-pointer">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-500 flex items-center justify-center text-white shadow-lg">
                     <Settings className="w-6 h-6" />
                   </div>
                   <Badge variant="outline" className="bg-indigo-900/30 text-indigo-300 border-indigo-500/30">
                     Coming Soon
                   </Badge>
                 </div>
                 <h3 className="text-xl font-bold text-white mb-3">DevOps & CI/CD</h3>
                 <p className="text-gray-300 text-sm mb-4">DevOps practices, Docker, Kubernetes, CI/CD pipelines, and cloud deployment strategies.</p>
                 <div className="flex flex-wrap gap-1 mb-4">
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white opacity-80">
                     Docker
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white opacity-80">
                     Kubernetes
                   </span>
                   <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white opacity-80">
                     CI/CD
                   </span>
                 </div>
                 <button className="w-full bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-2 rounded-lg text-sm font-semibold opacity-50 cursor-not-allowed">
                   Coming Soon
                 </button>
               </div>
             </div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default StudentNotesPage;
