import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { BookOpen, Clock, Tag } from 'lucide-react';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

const seedPosts: BlogPost[] = [
  { id: 'b1', title: 'Aptitude Tricks: Percentages Made Easy', excerpt: 'Quick methods to solve percentage problems in seconds with examples and shortcuts.', category: 'Aptitude', readTime: '5 min', date: '2025-08-01' },
  { id: 'b2', title: 'Master Coding Interviews: Arrays & Strings', excerpt: 'Patterns, pitfalls, and practice plan to crack array and string questions.', category: 'Coding', readTime: '8 min', date: '2025-08-03' },
  { id: 'b3', title: 'Verbal Section: Spotting Errors Checklist', excerpt: 'A handy checklist to avoid common grammar traps in competitive exams.', category: 'Verbal', readTime: '6 min', date: '2025-08-05' },
  { id: 'b4', title: 'Logical Reasoning: Seating Arrangements', excerpt: 'Deterministic approach for linear, circular, and two-row arrangements.', category: 'Reasoning', readTime: '7 min', date: '2025-08-06' },
  { id: 'b5', title: 'SQL for Placements: Joins to Window Functions', excerpt: 'A concise roadmap to the most tested SQL topics in campus interviews.', category: 'SQL', readTime: '9 min', date: '2025-08-08' },
];

const categories = ['All', 'Aptitude', 'Reasoning', 'Verbal', 'Coding', 'SQL'];

const Blog: React.FC = () => {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(() => {
    return seedPosts.filter(p =>
      (filter === 'All' || p.category === filter) &&
      (p.title.toLowerCase().includes(search.toLowerCase()) || p.excerpt.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, filter]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#101828] to-[#0b1220] text-white px-4">
      <div className="max-w-6xl mx-auto py-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Study Blog</h1>
          <p className="text-slate-300 mt-2">Curated reads to power your prepCampus journey</p>
        </header>

        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between mb-6">
          <Input
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
          />
          <div className="flex flex-wrap items-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-full text-sm border ${filter === cat ? 'bg-amber-500 text-black border-amber-500' : 'border-white/20 text-slate-200 hover:bg-white/10'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map(post => (
            <Card key={post.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="bg-amber-500/20 text-amber-300">
                    <Tag className="w-3 h-3 mr-1" /> {post.category}
                  </Badge>
                  <span className="text-xs text-slate-300 flex items-center"><Clock className="w-3 h-3 mr-1" />{post.readTime}</span>
                </div>
                <CardTitle className="text-white mt-2">{post.title}</CardTitle>
                <CardDescription className="text-slate-300">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center"><BookOpen className="w-3 h-3 mr-1" />Updated {new Date(post.date).toLocaleDateString()}</span>
                  <button className="text-amber-300 hover:text-amber-200">Read more →</button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;


