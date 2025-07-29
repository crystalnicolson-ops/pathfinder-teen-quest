import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Sparkles, Rocket, GraduationCap, Briefcase } from 'lucide-react';
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

// Import symbolic personality images
import symbolStrategist from '@/assets/symbol-strategist.jpg';
import symbolInventor from '@/assets/symbol-inventor.jpg';
import symbolBoss from '@/assets/symbol-boss.jpg';
import symbolChallenger from '@/assets/symbol-challenger.jpg';
import symbolVisionary from '@/assets/symbol-visionary.jpg';
import symbolCreator from '@/assets/symbol-creator.jpg';
import symbolCoach from '@/assets/symbol-coach.jpg';
import symbolFreeSpirit from '@/assets/symbol-free-spirit.jpg';
import symbolOrganizer from '@/assets/symbol-organizer.jpg';
import symbolHelper from '@/assets/symbol-helper.jpg';
import symbolManager from '@/assets/symbol-manager.jpg';
import symbolHost from '@/assets/symbol-host.jpg';
import symbolFixer from '@/assets/symbol-fixer.jpg';
import symbolArtist from '@/assets/symbol-artist.jpg';
import symbolAdventurer from '@/assets/symbol-adventurer.jpg';
import symbolPerformer from '@/assets/symbol-performer.jpg';

// Personality symbol mapping
const personalitySymbols: Record<PersonalityType, string> = {
  'The Strategist': symbolStrategist,
  'The Inventor': symbolInventor,
  'The Boss': symbolBoss,
  'The Challenger': symbolChallenger,
  'The Visionary': symbolVisionary,
  'The Creator': symbolCreator,
  'The Coach': symbolCoach,
  'The Free Spirit': symbolFreeSpirit,
  'The Organizer': symbolOrganizer,
  'The Helper': symbolHelper,
  'The Manager': symbolManager,
  'The Host': symbolHost,
  'The Fixer': symbolFixer,
  'The Artist': symbolArtist,
  'The Adventurer': symbolAdventurer,
  'The Performer': symbolPerformer,
};

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

  const handleViewCareers = () => {
    navigate('/detailed-results', { state: { personality, section: 'careers' } });
  };

  const handleViewColleges = () => {
    navigate('/detailed-results', { state: { personality, section: 'colleges' } });
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

        {/* Celebrities Section */}
        <Card className="bg-white/95 backdrop-blur-sm shadow-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Famous People Like You
            </CardTitle>
            <p className="text-muted-foreground">
              These famous people share your {result.type} personality type!
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {result.celebrities.map((celebrity, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 mx-auto mb-2 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 border-2 border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-3xl">{celebrity.emoji}</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">{celebrity.name}</p>
                  <p className="text-xs text-muted-foreground">{celebrity.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col gap-6 items-center">
          {/* Career Button */}
          <div className="relative group">
            <Button 
              onClick={handleViewCareers}
              size="lg"
              className="relative bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white rounded-full border-2 border-transparent hover:from-purple-700 hover:via-blue-700 hover:to-indigo-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-6 text-lg font-bold animate-pulse-slow overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" />
              </div>
              
              <Briefcase className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Discover Your Dream Career!</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>

          {/* College Button */}
          <div className="relative group">
            <Button 
              onClick={handleViewColleges}
              size="lg"
              className="relative bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white rounded-full border-2 border-transparent hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl px-8 py-6 text-lg font-bold overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -left-1">
                <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" style={{animationDelay: '0.5s'}} />
              </div>
              
              <GraduationCap className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">Find Your Perfect College!</span>
              <ArrowRight className="h-6 w-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-600 opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Retake Button */}
          <Button 
            variant="outline" 
            onClick={onRetake}
            size="lg"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300"
          >
            Retake Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}