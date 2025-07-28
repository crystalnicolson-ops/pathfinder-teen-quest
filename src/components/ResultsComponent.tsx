import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Users, TrendingUp, MapPin, GraduationCap } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';

// Import all personality avatars
import avatarStrategist from '@/assets/avatar-strategist.jpg';
import avatarInventor from '@/assets/avatar-inventor.jpg';
import avatarBoss from '@/assets/avatar-boss.jpg';
import avatarChallenger from '@/assets/avatar-challenger.jpg';
import avatarVisionary from '@/assets/avatar-visionary.jpg';
import avatarCreator from '@/assets/avatar-creator.jpg';
import avatarCoach from '@/assets/avatar-coach.jpg';
import avatarFreeSpirit from '@/assets/avatar-free-spirit.jpg';
import avatarOrganizer from '@/assets/avatar-organizer.jpg';
import avatarHelper from '@/assets/avatar-helper.jpg';
import avatarManager from '@/assets/avatar-manager.jpg';
import avatarHost from '@/assets/avatar-host.jpg';
import avatarFixer from '@/assets/avatar-fixer.jpg';
import avatarArtist from '@/assets/avatar-artist.jpg';
import avatarAdventurer from '@/assets/avatar-adventurer.jpg';
import avatarPerformer from '@/assets/avatar-performer.jpg';

// Avatar mapping
const personalityAvatars: Record<PersonalityType, string> = {
  'The Strategist': avatarStrategist,
  'The Inventor': avatarInventor,
  'The Boss': avatarBoss,
  'The Challenger': avatarChallenger,
  'The Visionary': avatarVisionary,
  'The Creator': avatarCreator,
  'The Coach': avatarCoach,
  'The Free Spirit': avatarFreeSpirit,
  'The Organizer': avatarOrganizer,
  'The Helper': avatarHelper,
  'The Manager': avatarManager,
  'The Host': avatarHost,
  'The Fixer': avatarFixer,
  'The Artist': avatarArtist,
  'The Adventurer': avatarAdventurer,
  'The Performer': avatarPerformer,
};

interface ResultsComponentProps {
  personality: PersonalityType;
  onRetake: () => void;
}

export default function ResultsComponent({ personality, onRetake }: ResultsComponentProps) {
  const result = personalityResults[personality];
  const avatar = personalityAvatars[personality];

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
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-primary/20">
                <img 
                  src={avatar} 
                  alt={`${result.type} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <CardTitle className="text-3xl font-bold text-primary mb-4">
              {result.type}
            </CardTitle>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {result.description}
            </p>
            
            {/* Detailed Personality Insights */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">🎯 Your Strengths</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Strategic thinking and planning</li>
                  <li>• Independent problem-solving</li>
                  <li>• Long-term vision and focus</li>
                  <li>• Analytical decision making</li>
                </ul>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">💡 Work Style</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Prefers working independently</li>
                  <li>• Values competence and efficiency</li>
                  <li>• Enjoys complex challenges</li>
                  <li>• Focuses on long-term outcomes</li>
                </ul>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">🌟 Best Environments</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Structured and organized</li>
                  <li>• Innovation-focused teams</li>
                  <li>• Minimal micromanagement</li>
                  <li>• Intellectually stimulating</li>
                </ul>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Career Recommendations */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Users className="h-6 w-6 text-primary" />
              Perfect Career Matches
            </CardTitle>
            <p className="text-muted-foreground mt-2">
              These careers align perfectly with your personality traits, work style preferences, and natural strengths. 
              Your analytical thinking, strategic planning abilities, and preference for independent work make you 
              an ideal fit for these roles.
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            {result.careers.map((career, index) => (
              <div key={index} className="border rounded-lg p-4 bg-gradient-card">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{career.title}</h3>
                  <Badge variant="secondary" className="ml-2">Perfect Match</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{career.description}</p>
                
                {/* Why it's perfect section */}
                <div className="bg-primary/5 p-3 rounded-md mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">🎯 Why This is Perfect for You:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Utilizes your strategic thinking and planning skills</li>
                    <li>• Offers intellectual challenges and complex problem-solving</li>
                    <li>• Allows for independent work with minimal supervision</li>
                    <li>• Provides opportunities for long-term project ownership</li>
                  </ul>
                </div>
                
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