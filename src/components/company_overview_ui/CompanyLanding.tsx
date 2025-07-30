import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Users, Clock, BookOpen, Trophy } from 'lucide-react';
import { companies } from '@/data/companyOverview';

export default function CompanyLanding() {
  const navigate = useNavigate();

  const handleCompanySelect = (companyId: string) => {
    navigate(`/company/${companyId}`);
  };

  return (
    <div className="min-h-screen  ">

      {/* Hero Section */}
      <section className="py-8 mx-auto border-2 border-red-200  bg-card/50 backdrop-blur-sm">
        <div className="container px-2">
          <div className="text-center   mb-5">
            <h2 className="text-5xl font-bold mb-4">Choose Your Target Company</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select from top IT companies and access curated exam materials, practice tests, 
              and detailed syllabus to boost your preparation.
            </p>
          </div>

          {/* Company Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {companies.map((company) => (
              <Card 
                key={company.id}
                className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-2 bg-gradient-card backdrop-blur-sm"
                onClick={() => handleCompanySelect(company.id)}
              >
                <CardContent className="p-8 text-center">
                  {/* Company Logo */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-primary p-0.5">
                    <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">
                        {company.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Company Name */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {company.name}
                  </h3>

                  {/* Company Type Badge */}
                  <Badge variant="secondary" className="mb-4">
                    {company.type}
                  </Badge>

                  {/* Stats */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span>{company.sections.syllabus.topics.length} Topics</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Trophy className="w-4 h-4" />
                      <span>{company.sections.tests.practiceTests.length} Practice Tests</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{company.sections.overview.examPattern.duration}</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                    <span>Start Preparation</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}