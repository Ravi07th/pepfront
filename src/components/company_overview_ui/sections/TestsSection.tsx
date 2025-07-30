import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Clock, FileText, Play, Target, BookOpen } from 'lucide-react';
import { TestSection as TestSectionType } from '@/types/company';

interface TestsSectionProps {
  tests: TestSectionType;
  companyName: string;
}

export default function TestsSection({ tests, companyName }: TestsSectionProps) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <Card>
        <CardContent className="p-6">
          <p className="text-foreground leading-relaxed">
            {tests.description}
          </p>
        </CardContent>
      </Card>

      {/* Mock Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="w-5 h-5 text-primary" />
            Full Mock Tests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {tests.mockTests.map((test, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary/20 transition-colors">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{test.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Simulate the complete exam experience
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {test.duration}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        <FileText className="w-3 h-3 mr-1" />
                        {test.questions} questions
                      </Badge>
                      <Badge 
                        variant={
                          test.difficulty.includes('Easy') ? 'secondary' :
                          test.difficulty.includes('Hard') ? 'destructive' : 'default'
                        }
                        className="text-xs"
                      >
                        {test.difficulty}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Covers:</p>
                      <div className="flex flex-wrap gap-1">
                        {test.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Start Test
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Practice Tests */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            Section-wise Practice Tests
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.practiceTests.map((test, index) => (
              <Card key={index} className="border border-border hover:border-primary/20 transition-colors">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">{test.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        Practice specific topics
                      </p>
                    </div>
                    
                    <Badge variant="outline" className="text-xs">
                      <FileText className="w-3 h-3 mr-1" />
                      {test.questions} questions
                    </Badge>

                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground">Topics:</p>
                      <div className="flex flex-wrap gap-1">
                        {test.topics.map((topic, topicIndex) => (
                          <Badge key={topicIndex} variant="secondary" className="text-xs">
                            {topic}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="outline" className="w-full" size="sm">
                      <Play className="w-4 h-4 mr-2" />
                      Practice
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Test Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Test Taking Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">Before the Test</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Review all syllabus topics</li>
                <li>• Take timed practice tests</li>
                <li>• Ensure stable internet connection</li>
                <li>• Keep necessary documents ready</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium text-foreground">During the Test</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Read questions carefully</li>
                <li>• Manage time effectively</li>
                <li>• Don't get stuck on difficult questions</li>
                <li>• Review answers if time permits</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}