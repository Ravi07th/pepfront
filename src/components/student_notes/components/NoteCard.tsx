import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Eye, Star, Clock, BookOpen } from "lucide-react";

interface NoteCardProps {
  note: {
    id: string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    duration: string;
    downloads: number;
    rating: number;
    views: number;
    lastUpdated: string;
    author: string;
    icon: string;
    color: string;
  };
  onView: (note: any) => void;
  onDownload: () => void;
  viewMode: "grid" | "list";
}

export const NoteCard: React.FC<NoteCardProps> = ({ note, onView, onDownload, viewMode }) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-200 cursor-pointer group h-80" onClick={() => onView(note)}>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 ${note.color} rounded-lg flex items-center justify-center overflow-hidden`}>
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
                onView(note);
              }}
            >
              <Eye className="h-4 w-4 mr-1" />
              View
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}; 