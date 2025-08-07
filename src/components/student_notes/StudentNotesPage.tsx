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
  Heart
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Updated PDF import to use existing PDF file
const samplePdf = "/rr.pdf";

// Enhanced notes data structure with real image icons
const notesList = [
  {
    id: "id1",
    title: "Top 30 Interview Questions",
    category: "Interview Prep",
    description: "Common interview questions designed especially for students and fresh graduates. Focus on education, skills, experiences, and goals.",
    file: samplePdf,
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
    file: samplePdf,
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
    file: samplePdf,
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
    author: "System Expert",
    icon: "/images/capgemini.jpg",
    color: "bg-gray-500"
  },
  {
    id: "id6",
    title: "C++ Advanced Concepts",
    category: "Programming",
    description: "Advanced C++ concepts including STL, templates, memory management, and modern C++ features for competitive programming.",
    file: samplePdf,
    tags: ["c++", "stl", "templates", "competitive"],
    duration: "7 hours",
    downloads: 1200,
    rating: 4.8,
    views: 2800,
    lastUpdated: "2024-01-14",
    author: "CPP Master",
    icon: "/images/accenture.png",
    color: "bg-blue-600"
  },
  {
    id: "id7",
    title: "JavaScript Web Development",
    category: "Programming",
    description: "Modern JavaScript ES6+, DOM manipulation, async programming, and web development patterns for full-stack development.",
    file: samplePdf,
    tags: ["javascript", "web", "frontend", "es6"],
    duration: "5 hours",
    downloads: 1900,
    rating: 4.7,
    views: 4500,
    lastUpdated: "2024-01-11",
    author: "Web Developer",
    icon: "/images/google.jpg",
    color: "bg-yellow-500"
  },
  {
    id: "id8",
    title: "Database Management Systems",
    category: "Computer Science",
    description: "Complete DBMS notes covering ER models, normalization, SQL queries, transactions, and database design principles.",
    file: samplePdf,
    tags: ["dbms", "database", "sql", "normalization"],
    duration: "6 hours",
    downloads: 1500,
    rating: 4.6,
    views: 3600,
    lastUpdated: "2024-01-09",
    author: "DB Expert",
    icon: "/images/tcs.jpg",
    color: "bg-indigo-500"
  },
  {
    id: "id9",
    title: "Operating Systems Concepts",
    category: "Computer Science",
    description: "OS fundamentals including process management, memory management, file systems, and synchronization concepts.",
    file: samplePdf,
    tags: ["operating-systems", "processes", "memory", "synchronization"],
    duration: "8 hours",
    downloads: 1100,
    rating: 4.8,
    views: 2600,
    lastUpdated: "2024-01-13",
    author: "OS Specialist",
    icon: "/images/infosys.jpg",
    color: "bg-red-500"
  },
  {
    id: "id10",
    title: "Computer Networks",
    category: "Computer Science",
    description: "Networking fundamentals, protocols, routing, security, and practical network administration concepts.",
    file: samplePdf,
    tags: ["networks", "protocols", "routing", "security"],
    duration: "6 hours",
    downloads: 1300,
    rating: 4.5,
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
    navigate(`/pdf-viewer/${note.id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Student Notes</h1>
              <p className="text-gray-600 mt-1">Access comprehensive study materials and resources</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                My Bookmarks
              </Button>
              <Button variant="outline" size="sm">
                <Heart className="h-4 w-4 mr-2" />
                Favorites
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
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
              <SelectTrigger className="w-48">
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
              <SelectTrigger className="w-40">
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
        <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
          {filteredNotes.map((note) => (
            <Card key={note.id} className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-80" onClick={() => handleNoteClick(note)}>
              <CardHeader className="">
                <div className="flex items-start justify-between">
                  <div className="flex items-center ">
                    {/* <div className={`w-10 h-10 ${note.color} rounded-lg flex items-center justify-center overflow-hidden`}>
                      <img 
                        src={note.icon} 
                        alt={note.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a default icon if image fails to load
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <BookOpen className="h-5 w-5 text-white hidden" />
                    </div> */}
                    <div>
                      <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                        {note.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-gray-500">
                        {note.category}
                      </CardDescription>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {note.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Download className="h-4 w-4" />
                      <span>{note.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="h-4 w-4" />
                      <span>{note.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
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
                  {/* <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <Clock className="h-3 w-3" />
                    <span>{note.duration}</span>
                    <span>•</span>
                    <span>Updated {new Date(note.lastUpdated).toLocaleDateString()}</span>
                  </div> */}
                  {/* <div className="flex items-center text-center space-x-2"> */}
                    <Button
                      size="lg"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNoteClick(note);
                      }}
                    >
                      <Eye className="h-6 w-5 mr-1" />
                      Read Now 
                    </Button>
                  {/* </div> */}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotes.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No notes found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>


    </div>
  );
}
