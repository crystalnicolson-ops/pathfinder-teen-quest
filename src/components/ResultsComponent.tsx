import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Sparkles, Rocket, GraduationCap, Briefcase, TrendingUp, Home } from 'lucide-react';
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
  onHome: () => void;
}

export default function ResultsComponent({ personality, onRetake, onHome }: ResultsComponentProps) {
  const result = personalityResults[personality];
  const avatar = personalityAvatars[personality];
  const navigate = useNavigate();

  // Parse the description to extract MBTI type and traits
  const parseDescription = (description: string) => {
    // Extract MBTI type: matches (INTJ) pattern
    const mbtiMatch = description.match(/\(([A-Z]{4})\)/);
    // Extract traits: matches "Visionary • Independent • Analytical" pattern
    const traitsMatch = description.match(/"([^"]+)"/);
    // Clean description: remove emoji, type name, MBTI, and traits part
    const cleanDescription = description.replace(/^🧠\s*The\s+[A-Za-z\s]+\s*\([A-Z]{4}\)\s*–\s*"[^"]+"\s*/, '');
    
    return {
      mbtiType: mbtiMatch ? mbtiMatch[1] : '',
      traits: traitsMatch ? traitsMatch[1].split(' • ') : [],
      cleanDescription: cleanDescription.trim()
    };
  };

  const { mbtiType, traits, cleanDescription } = parseDescription(result.description);

  const handleViewCareers = () => {
    navigate('/detailed-results', { state: { personality, section: 'careers' } });
  };

  const handleViewColleges = () => {
    navigate('/detailed-results', { state: { personality, section: 'colleges' } });
  };

  return (
    <div className="min-h-screen bg-gradient-hero p-4 pt-20">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-black mb-2 animate-pulse">Your Results Are In!</h1>
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
            <CardTitle className="text-3xl font-bold text-primary mb-2">
              {result.type} {mbtiType && `(${mbtiType})`}
            </CardTitle>
            {traits.length > 0 && (
              <div className="mb-4">
                <p className="text-xl font-semibold text-secondary">
                  "{traits.join(' • ')}"
                </p>
              </div>
            )}
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {cleanDescription}
            </p>
            
            {/* Detailed Personality Explanation */}
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 p-6 rounded-lg border mb-6">
              <h4 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                What Does This Mean?
              </h4>
              <div className="space-y-4 text-left">
                <p className="text-muted-foreground leading-relaxed">
                  As <strong>{result.type}</strong>, you are someone who naturally <strong>thinks several steps ahead</strong>. You see the <strong>big picture</strong> while also understanding the details needed to make things happen. You're drawn to <strong>complex problems</strong> and enjoy finding <strong>innovative solutions</strong>.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  You tend to be highly <strong>independent</strong> and prefer to work at your own pace. While others might see you as quiet or reserved, you're actually <strong>processing information</strong> and developing <strong>comprehensive plans</strong>. You value <strong>competence and efficiency</strong>, both in yourself and others.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  In relationships and teamwork, you appreciate people who share your <strong>drive for excellence</strong> and can match your <strong>intellectual curiosity</strong>. You're <strong>loyal</strong> to those who earn your respect and can be incredibly <strong>supportive</strong> when you believe in a cause or person.
                </p>
                <div className="bg-white/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-foreground">
                    <strong>Key Insight:</strong> Your superpower is your ability to see <strong>long-term potential</strong> and create <strong>systematic approaches</strong> to achieve <strong>ambitious goals</strong>. You're the person others turn to when they need a solid, <strong>well-thought-out plan</strong>.
                  </p>
                </div>
              </div>
            </div>
            
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

        {/* Personality Traits */}
        <Card className="bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-lg shadow-2xl border border-white/30 overflow-hidden">
          <CardHeader className="text-center relative pb-8">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary via-secondary to-accent rounded-full shadow-xl mb-4 animate-pulse">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-3xl font-black mb-3">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Your Personality DNA
                </span>
              </CardTitle>
              <p className="text-lg text-muted-foreground font-medium">
                The unique combination that makes you <span className="text-primary font-bold">extraordinary</span> ✨
              </p>
            </div>
          </CardHeader>

          <CardContent className="px-8 pb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.traits.map((trait, index) => {
                const isHigh = trait.percentage >= 70;
                const isMedium = trait.percentage >= 40;
                
                return (
                  <div 
                    key={index}
                    className="group relative"
                    style={{animationDelay: `${index * 100}ms`}}
                  >
                    {/* Main card */}
                    <div className={`relative p-6 rounded-2xl border-2 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in ${
                      isHigh 
                        ? 'bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border-primary/30 shadow-xl hover:shadow-2xl hover:shadow-primary/25' 
                        : isMedium 
                          ? 'bg-gradient-to-br from-secondary/8 to-muted/10 border-secondary/25 shadow-lg hover:shadow-xl hover:shadow-secondary/20'
                          : 'bg-gradient-to-br from-muted/10 to-background/50 border-muted/30 shadow-md hover:shadow-lg'
                    }`}>
                      
                      {/* Floating glow effect */}
                      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                        isHigh ? 'bg-gradient-to-br from-primary/20 to-secondary/20 blur-xl' : 'bg-gradient-to-br from-secondary/15 to-muted/15 blur-lg'
                      }`}></div>
                      
                      {/* Top badge */}
                      <div className="flex justify-between items-start mb-4">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                          isHigh 
                            ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg animate-pulse' 
                            : isMedium 
                              ? 'bg-secondary/20 text-secondary border border-secondary/30'
                              : 'bg-muted/30 text-muted-foreground border border-muted/40'
                        }`}>
                          {isHigh ? '🔥 SUPERPOWER' : isMedium ? '💪 STRENGTH' : '🌱 POTENTIAL'}
                        </div>
                        
                        {isHigh && (
                          <div className="flex space-x-1">
                            <Star className="h-4 w-4 text-primary animate-bounce" />
                            <Star className="h-4 w-4 text-secondary animate-bounce" style={{animationDelay: '0.2s'}} />
                            <Star className="h-4 w-4 text-accent animate-bounce" style={{animationDelay: '0.4s'}} />
                          </div>
                        )}
                      </div>

                      {/* Trait name */}
                      <h3 className={`text-lg font-bold mb-4 transition-colors duration-300 ${
                        isHigh ? 'text-primary group-hover:text-secondary' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {trait.name}
                      </h3>

                      {/* Circular progress */}
                      <div className="relative w-24 h-24 mx-auto mb-4">
                        {/* Background circle */}
                        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="currentColor"
                            strokeWidth="8"
                            fill="transparent"
                            className="text-muted/20"
                          />
                          {/* Progress circle */}
                          <circle
                            cx="50"
                            cy="50"
                            r="40"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            fill="transparent"
                            strokeDasharray={`${2 * Math.PI * 40}`}
                            strokeDashoffset={`${2 * Math.PI * 40 * (1 - trait.percentage / 100)}`}
                            strokeLinecap="round"
                            className="transition-all duration-1000 ease-out"
                            style={{animationDelay: `${index * 200 + 500}ms`}}
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor={isHigh ? 'hsl(var(--primary))' : 'hsl(var(--secondary))'} />
                              <stop offset="100%" stopColor={isHigh ? 'hsl(var(--secondary))' : 'hsl(var(--muted-foreground))'} />
                            </linearGradient>
                          </defs>
                        </svg>
                        
                        {/* Percentage in center */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className={`text-2xl font-black ${
                            isHigh ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' : 'text-foreground'
                          }`}>
                            {trait.percentage}%
                          </span>
                        </div>
                      </div>

                      {/* Bottom decorative element */}
                      <div className="text-center">
                        <div className={`inline-block w-12 h-1 rounded-full ${
                          isHigh 
                            ? 'bg-gradient-to-r from-primary to-secondary shadow-lg' 
                            : isMedium 
                              ? 'bg-secondary/60' 
                              : 'bg-muted/60'
                        }`}></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20 shadow-lg">
                <Sparkles className="h-5 w-5 text-primary animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-base font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  This is what makes you uniquely YOU!
                </span>
                <Rocket className="h-5 w-5 text-secondary animate-bounce" />
              </div>
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
              <span className="relative z-10">Best Career Matches</span>
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
              className="relative bg-gradient-secondary text-white rounded-full border-2 border-transparent hover:bg-secondary/80 transform transition-all duration-300 hover:scale-105 hover:shadow-blue px-8 py-6 text-lg font-bold overflow-hidden"
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
            <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Home and Retake Buttons */}
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={onHome}
              size="lg"
              className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black"
            >
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button 
              variant="outline" 
              onClick={onRetake}
              size="lg"
              className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black"
            >
              Retake Quiz
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}