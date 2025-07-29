import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate('/detailed-results', { state: { personality } });
  };

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

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={handleViewDetails}
            size="lg"
            className="bg-blue-500 text-white rounded-full border-2 border-blue-500 hover:bg-blue-600 hover:border-blue-600"
          >
            <ArrowRight className="h-5 w-5 mr-2" />
            View Career Matches & College Options
          </Button>
          
          <Button 
            variant="outline" 
            onClick={onRetake}
            size="lg"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}