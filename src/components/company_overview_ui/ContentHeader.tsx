import { Company } from '@/types/company';

interface ContentHeaderProps {
  company: Company;
  activeSection: string;
}

export default function ContentHeader({ company, activeSection }: ContentHeaderProps) {
  const breadcrumbText = activeSection === 'overview' ? company.name : 
                        activeSection === 'syllabus' ? `${company.name} Syllabus` :
                        activeSection === 'tests' ? `${company.name} Tests` : 
                        company.name;

  return (
    <div className="bg-background border-b border-border">
      <div className="px-6 py-4">
        <div className="text-sm text-muted-foreground mb-2">
          Home &gt; <span className="text-primary">{breadcrumbText} 2025</span>
        </div>
        <h1 className="text-2xl font-bold text-foreground">
          {activeSection === 'overview' && company.sections.overview.title}
          {activeSection === 'syllabus' && company.sections.syllabus.title}
          {activeSection === 'tests' && company.sections.tests.title}
        </h1>
      </div>
    </div>
  );
}