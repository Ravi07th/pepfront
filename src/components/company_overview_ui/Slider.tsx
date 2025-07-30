import { useState } from 'react';
import { ChevronDown, ChevronRight, Home, BookOpen, Brain, Target, Play, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Company } from '@/types/company';

interface SidebarProps {
  company: Company;
  
  activeSection: string;
  onSectionChange: (section: string) => void;
  onCompanyChange: (companyId: string) => void;
  companies: Company[];
}

const navigationItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'syllabus', label: 'Syllabus', icon: BookOpen },
  { id: 'aptitude', label: 'Game Based Aptitude', icon: Brain, hasDropdown: true },
  { id: 'reasoning', label: 'Logical Reasoning', icon: Target, hasDropdown: true },
];

const prepItems = [
  { id: 'mock', label: 'Mock Tests', icon: Play },
  { id: 'video', label: 'Video Lectures', icon: Play },
];

export default function Sidebar({ 
  company, 
  activeSection, 
  onSectionChange, 
  onCompanyChange, 
  companies 
}: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <div className="w-80 bg-sidebar-bg border-r border-sidebar-border h-screen overflow-y-auto">
      {/* Company Header */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="relative">
          <button
            onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
            className="w-full text-left"
          >
            <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide">
              {company.name} MENU
            </h2>
          </button>
          
          {showCompanyDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-md shadow-lg z-50">
              {companies.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => {
                    onCompanyChange(comp.id);
                    setShowCompanyDropdown(false);
                  }}
                  className={cn(
                    "w-full text-left px-4 py-2 hover:bg-sidebar-hover transition-colors",
                    comp.id === company.id && "bg-sidebar-active"
                  )}
                >
                  {comp.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Items */}
      <div className="p-4 space-y-2">
        {/* Main Navigation */}
        <nav className="space-y-1">
          <button
            onClick={() => onSectionChange('overview')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              activeSection === 'overview'
                ? "bg-sidebar-active text-primary"
                : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
            )}
          >
            <Home className="w-4 h-4" />
            {company.name} Home
          </button>

          <button
            onClick={() => onSectionChange('syllabus')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              activeSection === 'syllabus'
                ? "bg-sidebar-active text-primary"
                : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
            )}
          >
            <BookOpen className="w-4 h-4" />
            {company.name} Syllabus
          </button>

          {navigationItems.slice(2).map((item) => (
            <div key={item.id}>
              <button
                onClick={() => toggleExpanded(item.id)}
                className="w-full flex items-center justify-between gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-sidebar-hover hover:text-foreground transition-colors"
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </div>
                {item.hasDropdown && (
                  expandedItems.includes(item.id) ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>
            </div>
          ))}

          <button
            onClick={() => onSectionChange('tests')}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
              activeSection === 'tests'
                ? "bg-sidebar-active text-primary"
                : "text-muted-foreground hover:bg-sidebar-hover hover:text-foreground"
            )}
          >
            <Target className="w-4 h-4" />
            Practice Tests
          </button>
        </nav>

        {/* Prep Section */}
        <div className="pt-6">
          <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            PREP RESOURCES
          </h3>
          <nav className="space-y-1">
            {prepItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-muted-foreground hover:bg-sidebar-hover hover:text-foreground transition-colors"
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Apply for Jobs */}
        <div className="pt-6">
          <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Briefcase className="w-4 h-4" />
            Apply For Jobs
          </button>
        </div>
      </div>
    </div>
  );
}