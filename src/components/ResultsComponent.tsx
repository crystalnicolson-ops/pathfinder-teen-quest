import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, MapPin, GraduationCap } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';

interface ResultsComponentProps {
  personality: PersonalityType;
  onRetake: () => void;
}

export default function ResultsComponent({ personality, onRetake }: ResultsComponentProps) {
  const result = personalityResults[personality];

  return (
    <div className="min-h-screen bg-gradient-hero p-4">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-white mb-2">Your Results Are In!</h1>
          <p className="text-white/80 text-lg">Discover your career path</p>
        </div>

        {/* Personality Type */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary mb-4">
              {result.type}
            </CardTitle>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {result.description}
            </p>
          </CardHeader>
        </Card>

        {/* Career Recommendations */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Perfect Career Matches
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {result.careers.map((career, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-card">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{career.title}</h3>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      <strong>Salary:</strong> {career.averageSalary}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-secondary" />
                    <span className="text-sm">
                      <strong>Job Growth:</strong> {career.jobGrowth}
                    </span>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(career.indeedLink, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Jobs on Indeed
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* College Recommendations */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-primary" />
              Top College Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-3 gap-6">
            {result.colleges.map((college, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-card">
                <h3 className="text-lg font-semibold mb-2 text-foreground">{college.name}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-muted-foreground">{college.location}</span>
                </div>
                
                <Badge variant="secondary" className="mb-3">{college.ranking}</Badge>
                
                <div className="mb-4">
                  <p className="text-sm font-medium mb-2">Relevant Programs:</p>
                  <div className="flex flex-wrap gap-1">
                    {college.programs.map((program, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {program}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.open(college.website, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Retake Button */}
        <div className="text-center pb-8">
          <Button variant="hero" size="lg" onClick={onRetake}>
            Take Quiz Again
          </Button>
        </div>
      </div>
    </div>
  );
}