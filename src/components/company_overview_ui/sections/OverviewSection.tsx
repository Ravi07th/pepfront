import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Users, BookOpen, Award } from 'lucide-react';
import { OverviewSection as OverviewSectionType } from '@/types/company';

interface OverviewSectionProps {
  overview: OverviewSectionType;
  companyName: string;
}

export default function OverviewSection({ overview, companyName }: OverviewSectionProps) {
  return (
    <div className="space-y-6">
      {/* Main Description Card */}
      <Card>
        <CardContent className="p-6">
          <div className="prose max-w-none">
            <p className="text-foreground leading-relaxed mb-4">
              {overview.description}
            </p>
            
            {/* {overview.examPattern.platform && (
              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-6">
                <p className="text-destructive font-medium">
                  <strong>Note:</strong> {companyName} Exam 2025 will be conducted through the {overview.examPattern.platform}.
                </p>
              </div>
            )} */}

            <p className="text-foreground leading-relaxed mb-6">
              To prepare effectively, it’s essential to understand the latest {companyName} selection process. Our dedicated {companyName} 2025 preparation guide provides complete insights into each round, its duration, and key focus areas to help you perform your best.'

            </p>

            <ul className="space-y-2 mb-6">
              {overview.keyPoints.map((point, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Exam Information Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {overview.examPattern.duration && (
          <Card>
            <CardContent className="p-4 text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="font-semibold text-foreground">{overview.examPattern.duration}</div>
            </CardContent>
          </Card>
        )}
        
        {overview.examPattern.rounds && (
          <Card>
            <CardContent className="p-4 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Rounds</div>
              <div className="font-semibold text-foreground">{overview.examPattern.rounds}</div>
            </CardContent>
          </Card>
        )}
        
        {overview.examPattern.difficulty && (
          <Card>
            <CardContent className="p-4 text-center">
              <Award className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Difficulty</div>
              <div className="font-semibold text-foreground">{overview.examPattern.difficulty}</div>
            </CardContent>
          </Card>
        )}
        
        {overview.examPattern.platform && (
          <Card>
            <CardContent className="p-4 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-sm text-muted-foreground">Platform</div>
              <div className="font-semibold text-foreground text-xs">{overview.examPattern.platform}</div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Highlights */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Key Highlights</h3>
          <div className="flex flex-wrap gap-2">
            {overview.highlights.map((highlight, index) => (
              <Badge key={index} variant="secondary" className="text-sm">
                {highlight}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Eligibility Criteria */}
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Eligibility Criteria</h3>
          <ul className="space-y-2">
            {overview.eligibility.map((criteria, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-foreground">{criteria}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}