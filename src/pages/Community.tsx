import React, { useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageSquare, Send, User } from 'lucide-react';

type Thread = {
  id: string;
  author: string;
  title: string;
  body: string;
  replies: number;
};

const seedThreads: Thread[] = [
  { id: 't1', author: 'Anjali', title: 'Best approach for seating arrangements?', body: 'Looking for a deterministic strategy for linear and circular sets.', replies: 6 },
  { id: 't2', author: 'Rahul', title: 'TCS NQT verbal tips', body: 'Any quick resources to practice error spotting and para jumbles?', replies: 4 },
  { id: 't3', author: 'Sneha', title: 'SQL joins vs window functions', body: 'Confused when to use which in interview questions.', replies: 3 },
];

const Community: React.FC = () => {
  const [search, setSearch] = useState('');
  const [newTopic, setNewTopic] = useState('');

  const filtered = useMemo(() => {
    return seedThreads.filter(t => (
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.body.toLowerCase().includes(search.toLowerCase())
    ));
  }, [search]);

  const createTopic = () => {
    if (!newTopic.trim()) return;
    alert('This is a demo. Hook to backend to create a topic.');
    setNewTopic('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#101828] to-[#0b1220] text-white px-4">
      <div className="max-w-6xl mx-auto py-10">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-bold">Community Forum</h1>
          <p className="text-slate-300 mt-2">Discuss, learn, and grow with prepCampus peers</p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="md:col-span-2">
            <Input
              placeholder="Search topics..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
          </div>
          <div className="flex gap-2">
            <Input
              placeholder="Start a new topic..."
              value={newTopic}
              onChange={(e) => setNewTopic(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400"
            />
            <button onClick={createTopic} className="px-4 rounded-md bg-amber-500 text-black font-semibold hover:bg-amber-400">
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {filtered.map(t => (
            <Card key={t.id} className="bg-white/5 border-white/10 hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-white text-lg flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-amber-300" /> {t.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm text-slate-300 mb-2">
                  <User className="w-4 h-4" /> {t.author}
                  <span className="opacity-60">•</span>
                  <span>{t.replies} replies</span>
                </div>
                <p className="text-slate-300/90">{t.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Community;


