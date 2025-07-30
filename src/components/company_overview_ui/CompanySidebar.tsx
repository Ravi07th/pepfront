import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Sidebar from './Slider';
import ContentHeader from './ContentHeader';
import OverviewSection from './sections/OverviewSection';
import SyllabusSection from './sections/SyllabusSection';
import TestsSection from './sections/TestsSection';
import { companies, getCompanyById } from '@/data/companyOverview';

export default function CompanyExamPlatform() {
  const { companyId } = useParams();
  const navigate = useNavigate();
  const [selectedCompanyId, setSelectedCompanyId] = useState(companyId || 'cognizant');
  const [activeSection, setActiveSection] = useState('overview');
  
  const company = getCompanyById(selectedCompanyId);
  
  if (!company) {
    return <div>Company not found</div>;
  }

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleCompanyChange = (newCompanyId: string) => {
    setSelectedCompanyId(newCompanyId);
    setActiveSection('overview'); // Reset to overview when changing company
    navigate(`/company/${newCompanyId}`);
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar 
        company={company}
        companies={companies}
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onCompanyChange={handleCompanyChange}
      />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <ContentHeader company={company} activeSection={activeSection} />
        
        {/* Content Area with Tabs */}
        <div className="flex-1 overflow-auto">
          <div className="p-6">
            <Tabs value={activeSection} onValueChange={setActiveSection} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="syllabus">Syllabus</TabsTrigger>
                <TabsTrigger value="tests">Tests</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="mt-0">
                <OverviewSection 
                  overview={company.sections.overview}
                  companyName={company.name}
                />
              </TabsContent>
              
              <TabsContent value="syllabus" className="mt-0">
                <SyllabusSection 
                  syllabus={company.sections.syllabus}
                  companyName={company.name}
                />
              </TabsContent>
              
              <TabsContent value="tests" className="mt-0">
                <TestsSection 
                  tests={company.sections.tests}
                  companyName={company.name}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}