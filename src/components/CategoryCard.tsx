import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, BookOpen, Trophy } from "lucide-react";
import { Category } from "@/data/questions.ts";

interface CategoryCardProps {
  category: Category;
  onStartTest: (categoryId: string, mode: 'practice' | 'test') => void;
}

export const CategoryCard = ({ category, onStartTest }: CategoryCardProps) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return 'border-primary/20 hover:border-primary/40 hover:shadow-glow';
      case 'secondary':
        return 'border-secondary/20 hover:border-secondary/40';
      case 'warning':
        return 'border-warning/20 hover:border-warning/40';
      case 'success':
        return 'border-success/20 hover:border-success/40';
      case 'destructive':
        return 'border-destructive/20 hover:border-destructive/40';
      default:
        return 'border-primary/20 hover:border-primary/40';
    }
  };

  const getBadgeVariant = (color: string) => {
    switch (color) {
      case 'secondary':
        return 'secondary';
      case 'destructive':
        return 'destructive';
      default:
        return 'default';
    }
  };

  return (
    
    <Card className={`group cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-card ${getColorClasses(category.color)} animate-fadeIn`}> 
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="text-3xl mb-2 group-hover:animate-bounce-soft">
            {category.icon}
          </div>
          <Badge variant={getBadgeVariant(category.color)} className="text-xs">
            {category.totalQuestions} Questions
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {category.name}
        </CardTitle>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {category.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>60 min</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            <span>MCQ</span>
          </div>
          <div className="flex items-center gap-1">
            <Trophy className="w-4 h-4" />
            <span>Test</span>
          </div>
        </div>
        <div className="space-y-3">
          <Button 
            onClick={() => onStartTest(category.id, 'practice')}
            className="w-full bg-secondary hover:bg-secondary/80 text-secondary-foreground transition-all duration-300"
            size="lg"
            variant="secondary"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Practice
          </Button>
          <Button 
            onClick={() => onStartTest(category.id, 'test')}
            className="w-full bg-gradient-primary hover:shadow-medium transition-all duration-300"
            size="lg"
          >
            <Trophy className="w-4 h-4 mr-2" />
            Test Start
          </Button>
        </div>
      </CardContent>
    </Card>
    
  );
};
