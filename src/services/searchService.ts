import { allMNCQuestions } from '@/data/mnc_coding_data';
import { notesList } from '@/data/studentNotes';
import { companyExamPatterns2025 } from '@/components/exam_pattern/CompanyExamPatterns2025';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'coding' | 'notes' | 'exam-pattern' | 'mock-test' | 'aptitude';
  category: string;
  difficulty?: string;
  href: string;
  icon: string;
  tags: string[];
  relevance: number;
}

export interface SearchFilters {
  type?: string[];
  difficulty?: string[];
  category?: string[];
}

class SearchService {
  private searchIndex: SearchResult[] = [];

  constructor() {
    this.buildSearchIndex();
  }

  private buildSearchIndex() {
    // Add coding questions
    allMNCQuestions.forEach((question, index) => {
      this.searchIndex.push({
        id: `coding-${index}`,
        title: question.title,
        description: question.description,
        type: 'coding',
        category: question.category.join(', '),
        difficulty: question.difficulty,
        href: `/coding/${this.getCompanyFromQuestion(question)}/${index}`,
        icon: 'Code',
        tags: [...question.category, question.difficulty, 'coding', 'programming'],
        relevance: 0
      });
    });

    // Add study notes
    notesList.forEach((note, index) => {
      this.searchIndex.push({
        id: `notes-${index}`,
        title: note.title,
        description: note.description || 'Study materials and notes',
        type: 'notes',
        category: note.category,
        href: note.href,
        icon: 'BookOpen',
        tags: [note.category, 'notes', 'study', 'materials'],
        relevance: 0
      });
    });

    // Add exam patterns
    companyExamPatterns2025.forEach((pattern, index) => {
      this.searchIndex.push({
        id: `exam-${index}`,
        title: `${pattern.companyName} Exam Pattern`,
        description: `${pattern.examName} - ${pattern.duration} duration, ${pattern.totalQuestions} questions`,
        type: 'exam-pattern',
        category: pattern.companyName,
        href: `/exam-patterns/${pattern.companyId}`,
        icon: 'GraduationCap',
        tags: [pattern.companyName, 'exam', 'pattern', 'syllabus', pattern.examName],
        relevance: 0
      });
    });

    // Add aptitude topics
    const aptitudeTopics = [
      {
        title: 'Quantitative Aptitude',
        description: 'Practice quantitative aptitude questions',
        href: '/quantitative-aptitude',
        tags: ['aptitude', 'quantitative', 'math', 'practice']
      },
      {
        title: 'Logical Reasoning',
        description: 'Practice logical reasoning questions',
        href: '/logical-reasoning',
        tags: ['aptitude', 'logical', 'reasoning', 'practice']
      },
      {
        title: 'Verbal Ability',
        description: 'Practice verbal ability questions',
        href: '/verbal-ability',
        tags: ['aptitude', 'verbal', 'english', 'practice']
      }
    ];

    aptitudeTopics.forEach((topic, index) => {
      this.searchIndex.push({
        id: `aptitude-${index}`,
        title: topic.title,
        description: topic.description,
        type: 'aptitude',
        category: 'Aptitude',
        href: topic.href,
        icon: 'Brain',
        tags: topic.tags,
        relevance: 0
      });
    });

    // Add mock tests
    const mockTests = [
      {
        title: 'All Mock Tests',
        description: 'Practice with comprehensive mock tests',
        href: '/mock-test',
        tags: ['mock', 'test', 'practice', 'exam']
      },
      {
        title: 'TCS NQT Mock Test',
        description: 'TCS NQT specific mock tests',
        href: '/mock-test',
        tags: ['tcs', 'nqt', 'mock', 'test']
      },
      {
        title: 'Microsoft Mock Test',
        description: 'Microsoft specific mock tests',
        href: '/mock-test',
        tags: ['microsoft', 'mock', 'test']
      }
    ];

    mockTests.forEach((test, index) => {
      this.searchIndex.push({
        id: `mock-${index}`,
        title: test.title,
        description: test.description,
        type: 'mock-test',
        category: 'Mock Tests',
        href: test.href,
        icon: 'ClipboardList',
        tags: test.tags,
        relevance: 0
      });
    });
  }

  private getCompanyFromQuestion(question: any): string {
    // This is a simplified mapping - you might want to enhance this
    if (question.title.toLowerCase().includes('tcs')) return 'tcs';
    if (question.title.toLowerCase().includes('accenture')) return 'accenture';
    if (question.title.toLowerCase().includes('microsoft')) return 'microsoft';
    return 'top30';
  }

  private calculateRelevance(query: string, item: SearchResult): number {
    const queryLower = query.toLowerCase();
    let relevance = 0;

    // Title match (highest weight)
    if (item.title.toLowerCase().includes(queryLower)) {
      relevance += 10;
    }

    // Description match
    if (item.description.toLowerCase().includes(queryLower)) {
      relevance += 5;
    }

    // Tags match
    item.tags.forEach(tag => {
      if (tag.toLowerCase().includes(queryLower)) {
        relevance += 3;
      }
    });

    // Category match
    if (item.category.toLowerCase().includes(queryLower)) {
      relevance += 2;
    }

    // Exact matches get bonus
    if (item.title.toLowerCase() === queryLower) {
      relevance += 5;
    }

    return relevance;
  }

  public search(query: string, filters?: SearchFilters): SearchResult[] {
    if (!query.trim()) return [];

    const results = this.searchIndex
      .map(item => ({
        ...item,
        relevance: this.calculateRelevance(query, item)
      }))
      .filter(item => item.relevance > 0)
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 20); // Limit to top 20 results

    // Apply filters if provided
    if (filters) {
      return results.filter(item => {
        if (filters.type && filters.type.length > 0) {
          if (!filters.type.includes(item.type)) return false;
        }
        if (filters.difficulty && filters.difficulty.length > 0) {
          if (!item.difficulty || !filters.difficulty.includes(item.difficulty)) return false;
        }
        if (filters.category && filters.category.length > 0) {
          if (!filters.category.some(cat => item.category.toLowerCase().includes(cat.toLowerCase()))) return false;
        }
        return true;
      });
    }

    return results;
  }

  public getRecentSearches(): string[] {
    const searches = localStorage.getItem('recentSearches');
    return searches ? JSON.parse(searches) : [];
  }

  public addToRecentSearches(query: string) {
    const searches = this.getRecentSearches();
    const filtered = searches.filter(s => s !== query);
    const updated = [query, ...filtered].slice(0, 5); // Keep last 5 searches
    localStorage.setItem('recentSearches', JSON.stringify(updated));
  }

  public getPopularSearches(): string[] {
    return [
      'Two Sum',
      'TCS NQT',
      'Data Structures',
      'Mock Test',
      'Aptitude',
      'C Programming',
      'DSA Notes',
      'Exam Pattern'
    ];
  }
}

export const searchService = new SearchService();
