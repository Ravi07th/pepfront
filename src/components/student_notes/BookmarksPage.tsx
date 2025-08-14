import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Bookmark, Heart, Download, Eye, Star, Clock, Trash2, BookOpen } from "lucide-react";
import { SearchAndFilter } from './components';
import CompanyLogo from '../common/CompanyLogo';

// Mock data for bookmarks and favorites
const bookmarkedNotes = [
  {
    id: "id2",
    title: "GATE Complete Study Guide",
    category: "Exam Prep",
    description: "Essential GATE exam study material with previous year questions, formulas, and tricks to score high in engineering entrance exams.",
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
    id: "id4",
    title: "Python Data Science Guide",
    category: "Programming",
    description: "Python notes covering syntax, data structures, libraries, and practical examples for data science projects.",
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
    id: "id6",
    title: "Top 30 Interview Questions for Fresher",
    category: "Interview Prep",
    description: "Comprehensive guide with top 30 interview questions specifically tailored for IT freshers with detailed answers and tips.",
    tags: ["interview", "fresher", "it", "career", "preparation"],
    duration: "45 min",
    downloads: 1200,
    rating: 4.8,
    views: 2800,
    lastUpdated: "2024-01-14",
    author: "Interview Expert",
    icon: "/images/accenture.png",
    color: "bg-blue-600"
  },
  {
    id: "id8",
    title: "Database Management Systems",
    category: "Computer Science",
    description: "Complete DBMS notes covering ER models, normalization, SQL queries, transactions, and database design principles.",
    tags: ["dbms", "database", "sql", "normalization"],
    duration: "6 hours",
    downloads: 1500,
    rating: 4.6,
    views: 3600,
    lastUpdated: "2024-01-09",
    author: "DB Expert",
    icon: "/images/tcs.jpg",
    color: "bg-indigo-500"
  }
];

const favoriteNotes = [
  {
    id: "id2",
    title: "GATE Complete Study Guide",
    category: "Exam Prep",
    description: "Essential GATE exam study material with previous year questions, formulas, and tricks to score high in engineering entrance exams.",
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
    id: "id6",
    title: "Top 30 Interview Questions for Fresher",
    category: "Interview Prep",
    description: "Comprehensive guide with top 30 interview questions specifically tailored for IT freshers with detailed answers and tips.",
    tags: ["interview", "fresher", "it", "career", "preparation"],
    duration: "45 min",
    downloads: 1200,
    rating: 4.8,
    views: 2800,
    lastUpdated: "2024-01-14",
    author: "Interview Expert",
    icon: "/images/accenture.png",
    color: "bg-blue-600"
  },
  {
    id: "id7",
    title: "JavaScript Web Development",
    category: "Programming",
    description: "Modern JavaScript ES6+, DOM manipulation, async programming, and web development patterns for full-stack development.",
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
    id: "id9",
    title: "Operating Systems Concepts",
    category: "Computer Science",
    description: "OS fundamentals including process management, memory management, file systems, and synchronization concepts.",
    tags: ["operating-systems", "processes", "memory", "synchronization"],
    duration: "8 hours",
    downloads: 1100,
    rating: 4.8,
    views: 2600,
    lastUpdated: "2024-01-13",
    author: "OS Specialist",
    icon: "/images/capgemini.jpg",
    color: "bg-red-500"
  }
];

export default function BookmarksPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeTab, setActiveTab] = useState("bookmarks");

  // Filter and sort bookmarked notes
  const filteredBookmarks = useMemo(() => {
    let filtered = bookmarkedNotes;

    if (searchTerm) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(note => note.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

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

  // Filter and sort favorite notes
  const filteredFavorites = useMemo(() => {
    let filtered = favoriteNotes;

    if (searchTerm) {
      filtered = filtered.filter(note =>
        note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(note => note.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }

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

  const removeBookmark = (noteId: string) => {
    // Implement remove bookmark functionality
    console.log(`Removing bookmark for note ${noteId}`);
  };

  const removeFavorite = (noteId: string) => {
    // Implement remove favorite functionality
    console.log(`Removing favorite for note ${noteId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">My Collections</h1>
              <p className="text-gray-600 mt-1">Your bookmarked and favorite study materials</p>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <BookOpen className="h-4 w-4 mr-2" />
                All Notes
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <SearchAndFilter
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          sortBy={sortBy}
          onSortChange={setSortBy}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="bookmarks" className="flex items-center space-x-2">
              <Bookmark className="h-4 w-4" />
              <span>Bookmarks ({bookmarkedNotes.length})</span>
            </TabsTrigger>
            <TabsTrigger value="favorites" className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>Favorites ({favoriteNotes.length})</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Bookmarks Tab */}
        <TabsContent value="bookmarks">
          {filteredBookmarks.length > 0 ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredBookmarks.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-all duration-200 group h-80" onClick={() => handleNoteClick(note)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${note.color} rounded-lg flex items-center justify-center overflow-hidden`}>
                          <CompanyLogo 
                            companyName={note.icon.includes('infosys') ? 'Infosys' : 
                                       note.icon.includes('cognizant') ? 'Cognizant' :
                                       note.icon.includes('accenture') ? 'Accenture' :
                                       note.icon.includes('tcs') ? 'TCS' :
                                       note.icon.includes('wipro') ? 'Wipro' :
                                       note.icon.includes('google') ? 'Google' :
                                       note.icon.includes('capgemini') ? 'Capgemini' : 'Company'}
                            size={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {note.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            {note.category}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeBookmark(note.id);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{note.duration}</span>
                        <span>•</span>
                        <span>Updated {new Date(note.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNoteClick(note);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Bookmark className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No bookmarks found</h3>
              <p className="text-gray-500">Start bookmarking notes to see them here.</p>
            </div>
          )}
        </TabsContent>

        {/* Favorites Tab */}
        <TabsContent value="favorites">
          {filteredFavorites.length > 0 ? (
            <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-4"}>
              {filteredFavorites.map((note) => (
                <Card key={note.id} className="hover:shadow-lg transition-all duration-200 group h-80" onClick={() => handleNoteClick(note)}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 ${note.color} rounded-lg flex items-center justify-center overflow-hidden`}>
                          <CompanyLogo 
                            companyName={note.icon.includes('infosys') ? 'Infosys' : 
                                       note.icon.includes('cognizant') ? 'Cognizant' :
                                       note.icon.includes('accenture') ? 'Accenture' :
                                       note.icon.includes('tcs') ? 'TCS' :
                                       note.icon.includes('wipro') ? 'Wipro' :
                                       note.icon.includes('google') ? 'Google' :
                                       note.icon.includes('capgemini') ? 'Capgemini' : 'Company'}
                            size={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                            {note.title}
                          </CardTitle>
                          <CardDescription className="text-sm text-gray-500">
                            {note.category}
                          </CardDescription>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          removeFavorite(note.id);
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
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

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs text-gray-500">
                        <Clock className="h-3 w-3" />
                        <span>{note.duration}</span>
                        <span>•</span>
                        <span>Updated {new Date(note.lastUpdated).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNoteClick(note);
                          }}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No favorites found</h3>
              <p className="text-gray-500">Start favoriting notes to see them here.</p>
            </div>
          )}
        </TabsContent>
      </div>


    </div>
  );
} 