import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import {
  BookOpen,
  Search as SearchIcon,
  Grid,
  List,
  Download,
  Eye,
  Star,
  Clock,
  Bookmark,
  Heart,
  ArrowLeft
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ExamPrepNav from '@/components/ExamPrepNav';
import { Link } from 'react-router-dom';

// Updated PDF import to use existing PDF file
const samplePdf = "/pdf/interviewQue.pdf";
const interviewQuestion = "/pdf/interviewQue.pdf";

// Enhanced notes data structure with real image icons
const notesList = [
  {
    id: "id1",
    title: "Top 30 Interview Questions",
    category: "Interview Prep",
    description: "Common interview questions designed especially for students and fresh graduates. Focus on education, skills, experiences, and goals.",
    file: interviewQuestion,
    tags: ["interview", "placement", "general", "hr"],
    duration: "2 hours",
    downloads: 1250,
    rating: 4.8,
    views: 3400,
    lastUpdated: "2024-01-15",
    author: "Career Team",
    icon: "/images/tcs.jpg",
    color: "bg-blue-500"
  },
  {
    id: "id2",
    title: "GATE Complete Study Guide",
    category: "Exam Prep",
    description: "Essential GATE exam study material with previous year questions, formulas, and tricks to score high in engineering entrance exams.",
    file: interviewQuestion,
    tags: ["gate", "exam", "entrance", "engineering"],
    duration: "8 hours",
    downloads: 2100,
    rating: 4.9,
    views: 5600,
    lastUpdated: "2024-01-10",
    author: "Exam Experts",
    icon: "/images/infosys.jpg",
    color: "bg-purple-500"
  },
  {
    id: "id3",
    title: "Java Programming Masterclass",
    category: "Programming",
    description: "Comprehensive Java notes from basics to advanced OOP concepts, interview questions, and best coding practices.",
    file: samplePdf,
    tags: ["java", "programming", "oop", "backend"],
    duration: "6 hours",
    downloads: 1800,
    rating: 4.7,
    views: 4200,
    lastUpdated: "2024-01-12",
    author: "Java Guru",
    icon: "/images/wipro.jpg",
    color: "bg-orange-500"
  },
  {
    id: "id4",
    title: "Python Data Science Guide",
    category: "Programming",
    description: "Python notes covering syntax, data structures, libraries, and practical examples for data science projects.",
    file: interviewQuestion,
    tags: ["python", "data-science", "ml", "analytics"],
    duration: "5 hours",
    downloads: 1600,
    rating: 4.6,
    views: 3800,
    lastUpdated: "2024-01-08",
    author: "Data Scientist",
    icon: "/images/cognizant.png",
    color: "bg-green-500"
  },
  {
    id: "id5",
    title: "C Programming Fundamentals",
    category: "Programming",
    description: "Complete C programming guide covering pointers, arrays, structures, memory management, and system programming.",
    file: samplePdf,
    tags: ["c", "system-programming", "algorithms", "basics"],
    duration: "4 hours",
    downloads: 1400,
    rating: 4.5,
    views: 3200,
    lastUpdated: "2024-01-05",
    author: "C Expert",
    icon: "/images/tcs.jpg",
    color: "bg-red-500"
  },
  {
    id: "id6",
    title: "Top 30 Interview Questions for Fresher",
    category: "Interview Prep",
    description: "Comprehensive guide with top 30 interview questions specifically tailored for IT freshers with detailed answers and tips.",
    file: interviewQuestion,
    tags: ["interview", "fresher", "it", "career", "preparation"],
    duration: "45 min",
    downloads: 1200,
    rating: 4.4,
    views: 2900,
    lastUpdated: "2024-01-03",
    author: "Interview Expert",
    icon: "/images/infosys.jpg",
    color: "bg-indigo-500"
  },
  {
    id: "id7",
    title: "JavaScript ES6+ Guide",
    category: "Programming",
    description: "Modern JavaScript ES6+, DOM manipulation, async programming, and web development patterns for full-stack development.",
    file: samplePdf,
    tags: ["javascript", "es6", "dom", "web-dev"],
    duration: "5 hours",
    downloads: 1500,
    rating: 4.6,
    views: 3600,
    lastUpdated: "2024-01-06",
    author: "JS Developer",
    icon: "/images/wipro.jpg",
    color: "bg-yellow-500"
  },
  {
    id: "id8",
    title: "Computer Networks",
    category: "Computer Science",
    description: "Complete computer networks guide covering OSI model, TCP/IP, routing protocols, and network security concepts.",
    file: samplePdf,
    tags: ["networks", "osi", "tcp-ip", "routing"],
    duration: "6 hours",
    downloads: 1100,
    rating: 4.3,
    views: 3100,
    lastUpdated: "2024-01-07",
    author: "Network Engineer",
    icon: "/images/wipro.jpg",
    color: "bg-cyan-500"
  }
];

export default function StudentNotesPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("recent");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const categories = [
    { id: 'verbal', name: 'Verbal Ability', questions: 240, status: 'live' },
    { id: 'quantitative', name: 'Quantitative Aptitude', questions: 240, status: 'live' },
    { id: 'logical', name: 'Logical Reasoning', questions: 240, status: 'live' },
  ];

  // Filter and sort notes
  const filteredNotes = useMemo(() => {
    let filtered = notesList;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(note => note.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

    // Sort notes
    switch (sortBy) {
      case "recent":
        filtered.sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime());
        break;
      case "popular":
        filtered.sort((a, b) => b.downloads - a.downloads);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "title":
        filtered.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const handleNoteClick = (note: any) => {
    if (note.id === "id2" || note.id === "id4" || note.id === "id6") {
      // Open the interview questions PDF in a new tab
        window.open('/pdf/interviewQue.pdf', '_blank');
    } else {
      // For other notes, navigate to PDF viewer
        navigate(`/pdf-viewer/${note.id}`);
    }
  };

  const handleStartTest = (topicId: string, type: 'practice' | 'test') => {
    // Handle navigation for sidebar categories
    if (type === 'practice') {
      navigate(`/${topicId}`);
    } else {
      navigate(`/${topicId}/instructions/${topicId}`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0b1220] to-[#121a2a] text-white shadow-md">
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center py-6 px-3">
          {/* Left-center button */}
          <div className="col-span-12 sm:col-span-3 flex justify-start">
            <Link to="/exam-prep">
              <Button
                variant="outline"
                className="border-amber-400 text-amber-200 bg-transparent hover:bg-amber-400/10"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Exam Preparation
              </Button>
            </Link>
          </div>
          {/* Centered title */}
          <div className="col-span-12 sm:col-span-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-1">Student Notes</h1>
            <p className="text-sm md:text-base text-white/80">Access comprehensive study materials and resources</p>
          </div>
          <div className="col-span-12 sm:col-span-3" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left Sidebar - ExamPrepNav */}
        <div className="lg:w-64 flex-shrink-0 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto">
          <ExamPrepNav 
            categories={categories}
            onStartTest={handleStartTest}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            sidebarCollapsed={sidebarCollapsed}
            setSidebarCollapsed={setSidebarCollapsed}
          />
        </div>

        {/* Right Content Area */}
        <div className="flex-1 py-6 sm:py-8 px-3 sm:px-4 lg:px-8">
          {/* Search and Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6 sm:mb-8">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md w-full">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search notes, topics, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Filter */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="interview">Interview Prep</SelectItem>
                  <SelectItem value="exam">Exam Prep</SelectItem>
                  <SelectItem value="programming">Programming</SelectItem>
                  <SelectItem value="computer science">Computer Science</SelectItem>
                </SelectContent>
              </Select>

              {/* Sort */}
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:w-40">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Most Recent</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="title">Alphabetical</SelectItem>
                </SelectContent>
              </Select>

              {/* View Mode */}
              <div className="flex items-center space-x-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Notes Grid/List */}
          <div className={viewMode === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" : "space-y-4"}>
            {filteredNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-auto sm:h-80 bg-white border border-gray-200 hover:border-blue-300" onClick={() => handleNoteClick(note)}>
                <CardHeader className="p-4 sm:p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div>
                        <CardTitle className="text-base sm:text-lg group-hover:text-blue-600 transition-colors">
                          {note.title}
                        </CardTitle>
                        <CardDescription className="text-xs sm:text-sm text-gray-500">
                          {note.category}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 p-4 sm:p-6">
                  <p className="text-gray-600 text-xs sm:text-sm mb-4 line-clamp-3">
                    {note.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Download className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{note.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span>{note.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 fill-current" />
                        <span>{note.rating}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {note.tags.slice(0, 3).map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {note.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{note.tags.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center text-center justify-between">
                    <Button
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNoteClick(note);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm"
                    >
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 mr-1 sm:mr-2" />
                      Read Now 
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Empty State */}
          {filteredNotes.length === 0 && (
            <div className="text-center py-8 sm:py-12">
              <BookOpen className="h-8 w-8 sm:h-12 sm:w-12 text-gray-400 mx-auto mb-3 sm:mb-4" />
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-2">No notes found</h3>
              <p className="text-sm sm:text-base text-gray-500">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
