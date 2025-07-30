import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, BookOpen, Target } from 'lucide-react';
import { SyllabusSection as SyllabusSectionType } from '@/types/company';

interface SyllabusSectionProps {
  syllabus: SyllabusSectionType;
  companyName: string;
}

export default function SyllabusSection({ syllabus, companyName }: SyllabusSectionProps) {
  return (
    <div className="space-y-6">
      {/* Description */}
      <Card>
        <CardContent className="p-6">
          <p className="text-foreground leading-relaxed">
            {syllabus.description}
          </p>
        </CardContent>
      </Card>

      {/* Syllabus Topics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {syllabus.topics.map((topic, index) => (
          <Card key={index} className="h-fit">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span className="text-lg">{topic.section}</span>
                </div>
                <div className="flex items-center gap-2">
                  {topic.duration && (
                    <Badge variant="outline" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {topic.duration}
                    </Badge>
                  )}
                  {topic.difficulty && (
                    <Badge 
                      variant={
                        topic.difficulty.includes('Easy') ? 'secondary' :
                        topic.difficulty.includes('Hard') ? 'destructive' : 'default'
                      }
                      className="text-xs"
                    >
                      <Target className="w-3 h-3 mr-1" />
                      {topic.difficulty}
                    </Badge>
                  )}
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {topic.topics.map((subtopic, subIndex) => (
                  <li key={subIndex} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-sm text-foreground">{subtopic}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          
        ))}
      
 </div>
<div className="">
  <h1 className="text-3xl font-bold text-center mb-8 text-blue-600">Start Practice NOW</h1>
  
  <div className=" grid grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-4">
    
    {/* Quantitative Aptitude Card */}
    <Card className="border-2  border-blue-200 hover:border-blue-400 transition-colors">
      <CardHeader className="bg-blue-50">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-blue-700">
            📊 Quantitative Aptitude
          </CardTitle>

        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 gap-2">
          <Link to="/practice/number-systems">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Number Systems and Basic Mathematics
            </div>
          </Link>
          <Link to="/practice/percentages">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Percentages and Applications
            </div>
          </Link>
          <Link to="/practice/profit-loss">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Profit, Loss and Discount
            </div>
          </Link>
          <Link to="/practice/interest">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Simple and Compound Interest
            </div>
          </Link>
          <Link to="/practice/ratio-proportion">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Ratio and Proportion
            </div>
          </Link>
          <Link to="/practice/averages">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Averages and Mixtures
            </div>
          </Link>
          <Link to="/practice/time-work">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Time and Work
            </div>
          </Link>
          <Link to="/practice/pipes-cisterns">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Pipes and Cisterns
            </div>
          </Link>
          <Link to="/practice/time-speed-distance">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Time, Speed and Distance
            </div>
          </Link>
          <Link to="/practice/permutation-combination">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-blue-50 hover:text-blue-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
              Permutation and Combination
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>

    {/* Logical Reasoning Card */}
    <Card className="border-2 border-green-200 hover:border-green-400 transition-colors">
      <CardHeader className="bg-green-50">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl font-bold text-green-700">
            🧠 Logical Reasoning
          </CardTitle>
          <div className="text-right">
            <span className="bg-green-100 px-3 py-1 rounded-full text-sm font-medium">50 minutes</span>
            <div className="text-xs text-green-600 mt-1">Medium</div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="grid grid-cols-1 gap-2">
          <Link to="/practice/number-letter-series">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Number and Letter Series
            </div>
          </Link>
          <Link to="/practice/blood-relations">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Blood Relations
            </div>
          </Link>
          <Link to="/practice/direction-distance">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Direction Test and Distance
            </div>
          </Link>
          <Link to="/practice/coding-decoding">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Coding and Decoding
            </div>
          </Link>
          <Link to="/practice/ranking-sequence">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Ranking and Time Sequence
            </div>
          </Link>
          <Link to="/practice/clock-calendar">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Clock and Calendar Problems
            </div>
          </Link>
          <Link to="/practice/cube-dice">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Cube and Dice
            </div>
          </Link>
          <Link to="/practice/venn-diagrams">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Venn Diagrams
            </div>
          </Link>
          <Link to="/practice/mathematical-operations">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Mathematical Operations
            </div>
          </Link>
          <Link to="/practice/logical-puzzles">
            <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-green-50 hover:text-green-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>
              Logical Puzzles and Arrangements
            </div>
          </Link>
        </div>
      </CardContent>
    </Card>

    <Card className="border-2 border-indigo-200 hover:border-indigo-400 transition-colors">
  <CardHeader className="bg-indigo-50">
    <div className="flex justify-between items-center">
      <CardTitle className="text-xl font-bold text-indigo-700">
        🎯 Reasoning Ability
      </CardTitle>
    </div>
  </CardHeader>
  <CardContent className="pt-4">
    <div className="grid grid-cols-1 gap-2">
      <Link to="/practice/data-arrangements">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Data Arrangements
        </div>
      </Link>
      <Link to="/practice/puzzles">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Puzzles
        </div>
      </Link>
      <Link to="/practice/analogies">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Analogies
        </div>
      </Link>
      <Link to="/practice/visual-reasoning">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Visual Reasoning
        </div>
      </Link>
      <Link to="/practice/pattern-recognition">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Pattern Recognition
        </div>
      </Link>
      <Link to="/practice/series">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Series
        </div>
      </Link>
      <Link to="/practice/blood-relations-advanced">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Blood Relations
        </div>
      </Link>
      <Link to="/practice/coding-decoding-advanced">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Coding and Decoding
        </div>
      </Link>
      <Link to="/practice/direction-distance-advanced">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Direction and Distance
        </div>
      </Link>
      <Link to="/practice/mathematical-operations-advanced">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-indigo-50 hover:text-indigo-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-indigo-400 rounded-full mr-3"></span>
          Mathematical Operations
        </div>
      </Link>
    </div>
  </CardContent>
</Card>
<Card className="border-2 border-red-200 hover:border-red-400 transition-colors">
  <CardHeader className="bg-red-50">
    <div className="flex justify-between items-center">
      <CardTitle className="text-xl font-bold text-red-700">
        ⚡ Programming Logic
      </CardTitle>
    </div>
  </CardHeader>
  <CardContent className="pt-4">
    <div className="grid grid-cols-1 gap-2">
      <Link to="/practice/programming-constructs">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Programming Constructs
        </div>
      </Link>
      <Link to="/practice/iterative-constructs">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Iterative Constructs
        </div>
      </Link>
      <Link to="/practice/recursive-logic">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Recursive Logic
        </div>
      </Link>
      <Link to="/practice/flowcharts">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Flowcharts
        </div>
      </Link>
      <Link to="/practice/pseudocode">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Pseudocode
        </div>
      </Link>
      <Link to="/practice/functions">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Functions
        </div>
      </Link>
      <Link to="/practice/arrays">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Arrays
        </div>
      </Link>
      <Link to="/practice/strings">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Strings
        </div>
      </Link>
      <Link to="/practice/searching-sorting">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Searching and Sorting
        </div>
      </Link>
      <Link to="/practice/basic-data-structures">
        <div className="flex items-center text-sm text-gray-700 p-2 hover:bg-red-50 hover:text-red-600 rounded-md transition-all cursor-pointer hover:shadow-sm">
          <span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>
          Basic Data Structures
        </div>
      </Link>
    </div>
  </CardContent>
</Card>
</div>

<div className="grid grid-cols-1 mt-5 lg:grid-cols-1 gap-6">
{/* Programming Logic Card */}
<Card>
        <CardHeader>
          <CardTitle className="text-lg">Preparation Strategy</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {syllabus.preparation.map((tip, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-accent rounded-lg">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-sm text-foreground">{tip}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

</div>

      </div>
      

      {/* Preparation Tips */}
      
    </div>
  );
}