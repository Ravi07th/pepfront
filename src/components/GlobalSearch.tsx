import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, Clock, TrendingUp, Filter, Code, BookOpen, GraduationCap, ClipboardList, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { searchService, SearchResult, SearchFilters } from '@/services/searchService';

interface GlobalSearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const iconMap = {
  Code,
  BookOpen,
  GraduationCap,
  ClipboardList,
  Brain
};

const typeColors = {
  coding: 'bg-blue-100 text-blue-800',
  notes: 'bg-green-100 text-green-800',
  'exam-pattern': 'bg-purple-100 text-purple-800',
  'mock-test': 'bg-orange-100 text-orange-800',
  aptitude: 'bg-pink-100 text-pink-800'
};

const typeLabels = {
  coding: 'Coding',
  notes: 'Notes',
  'exam-pattern': 'Exam Pattern',
  'mock-test': 'Mock Test',
  aptitude: 'Aptitude'
};

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [filters, setFilters] = useState<SearchFilters>({});
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches] = useState<string[]>(searchService.getPopularSearches());
  const [isLoading, setIsLoading] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setRecentSearches(searchService.getRecentSearches());
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleSearch = async () => {
      if (query.trim().length < 2) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const searchResults = searchService.search(query, filters);
        setResults(searchResults);
      } catch (error) {
        console.error('Search error:', error);
        setResults([]);
      } finally {
        setIsLoading(false);
      }
    };

    const debounceTimer = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [query, filters]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex(prev => Math.max(prev - 1, -1));
          break;
        case 'Enter':
          e.preventDefault();
          if (selectedIndex >= 0 && results[selectedIndex]) {
            handleResultClick(results[selectedIndex]);
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, results, selectedIndex, onClose]);

  const handleResultClick = (result: SearchResult) => {
    searchService.addToRecentSearches(query);
    navigate(result.href);
    onClose();
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
  };

  const handleSearchClick = (searchTerm: string) => {
    setQuery(searchTerm);
    searchService.addToRecentSearches(searchTerm);
  };

  const toggleFilter = (filterType: keyof SearchFilters, value: string) => {
    setFilters(prev => {
      const current = prev[filterType] || [];
      const updated = current.includes(value)
        ? current.filter(v => v !== value)
        : [...current, value];
      
      return {
        ...prev,
        [filterType]: updated.length > 0 ? updated : undefined
      };
    });
  };

  const clearFilters = () => {
    setFilters({});
  };

  const getIconComponent = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap] || Code;
    return <IconComponent className="h-4 w-4" />;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="flex items-start justify-center pt-20 px-4">
        <div className="w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center space-x-3 flex-1">
              <Search className="h-5 w-5 text-gray-400" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search across the entire website..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border-0 focus:ring-0 text-lg placeholder-gray-400"
              />
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Filters */}
          {Object.keys(filters).some(key => filters[key as keyof SearchFilters]?.length) && (
            <div className="px-4 py-2 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters:</span>
                {Object.entries(filters).map(([key, values]) =>
                  values?.map(value => (
                    <Badge
                      key={`${key}-${value}`}
                      variant="secondary"
                      className="text-xs"
                    >
                      {value}
                      <button
                        onClick={() => toggleFilter(key as keyof SearchFilters, value)}
                        className="ml-1 hover:text-red-500"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Clear all
                </Button>
              </div>
            </div>
          )}

          {/* Content */}
          <div className="max-h-96 overflow-y-auto">
            {query.length < 2 ? (
              /* Recent and Popular Searches */
              <div className="p-4 space-y-6">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div>
                    <div className="flex items-center space-x-2 mb-3">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <h3 className="text-sm font-medium text-gray-700">Recent Searches</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => handleSearchClick(search)}
                          className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700 transition-colors"
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Searches */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-medium text-gray-700">Popular Searches</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {popularSearches.map((search, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchClick(search)}
                        className="px-3 py-1 text-sm bg-blue-100 hover:bg-blue-200 rounded-full text-blue-700 transition-colors"
                      >
                        {search}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quick Filters */}
                <div>
                  <div className="flex items-center space-x-2 mb-3">
                    <Filter className="h-4 w-4 text-gray-500" />
                    <h3 className="text-sm font-medium text-gray-700">Quick Filters</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(typeLabels).map(([type, label]) => (
                      <button
                        key={type}
                        onClick={() => toggleFilter('type', type)}
                        className="flex items-center space-x-2 p-2 text-sm bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
                      >
                        {getIconComponent(iconMap[type as keyof typeof iconMap] ? type : 'Code')}
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* Search Results */
              <div className="p-4">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
                    <span className="ml-2 text-gray-500">Searching...</span>
                  </div>
                ) : results.length > 0 ? (
                  <div className="space-y-2">
                    {results.map((result, index) => (
                      <div
                        key={result.id}
                        ref={index === selectedIndex ? resultsRef : null}
                        onClick={() => handleResultClick(result)}
                        className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                          index === selectedIndex
                            ? 'bg-blue-50 border border-blue-200'
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            {getIconComponent(result.icon)}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm font-medium text-gray-900 truncate">
                              {result.title}
                            </h4>
                            <Badge
                              variant="secondary"
                              className={`text-xs ${typeColors[result.type]}`}
                            >
                              {typeLabels[result.type]}
                            </Badge>
                            {result.difficulty && (
                              <Badge
                                variant="outline"
                                className="text-xs"
                              >
                                {result.difficulty}
                              </Badge>
                            )}
                          </div>
                          <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                            {result.description}
                          </p>
                          <div className="flex items-center space-x-2 mt-1">
                            <span className="text-xs text-gray-400">{result.category}</span>
                            {result.tags.slice(0, 2).map((tag, tagIndex) => (
                              <span
                                key={tagIndex}
                                className="text-xs text-gray-400 bg-gray-100 px-1 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <Search className="h-12 w-12 text-gray-300 mx-auto mb-2" />
                    <p className="text-gray-500">No results found for "{query}"</p>
                    <p className="text-sm text-gray-400 mt-1">Try different keywords or check your spelling</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-4 py-3 border-t border-gray-200 bg-gray-50 rounded-b-xl">
            <div className="flex items-center justify-between text-xs text-gray-500">
              <span>Press Enter to select, Esc to close</span>
              <span>{results.length} results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
