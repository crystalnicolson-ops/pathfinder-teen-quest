import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Sparkles, Rocket, GraduationCap, Briefcase, Home } from 'lucide-react';
import { personalityResults } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { resultsTranslations } from '@/i18n/results';

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
  const { t, currentLanguage } = useLanguage();
  
  // Get translations for results
  const rt = (key: string) => {
    return resultsTranslations[currentLanguage.code]?.[key] || resultsTranslations.en[key] || key;
  };

  // Check if user has premium access
  const hasPremium = typeof window !== 'undefined' && localStorage.getItem('hasPaidPremium') === 'true';

  // Parse the description to extract MBTI type and traits
  const parseDescription = (description: string) => {
    // Get translated description
    const personalityKey = `desc_${result.type.toLowerCase().replace(/\s+/g, '_')}`;
    const translatedDescription = rt(personalityKey) || description;
    
    // Extract MBTI type: matches (INTJ) pattern
    const mbtiMatch = translatedDescription.match(/\(([A-Z]{4})\)/);
    // Extract traits: matches "Visionary • Independent • Analytical" pattern
    const traitsMatch = translatedDescription.match(/"([^"]+)"/);
    // Clean description: remove emoji, type name, MBTI, and traits part - make pattern more flexible
    const cleanDescription = translatedDescription.replace(/^[🧠🧪🧑‍💼🎯🔮🎨🌟🌈📋🤝💼🎉🔧🖌️🏔️🎭]\s*[^–]+–\s*"[^"]+"\s*/, '');
    
    return {
      mbtiType: mbtiMatch ? mbtiMatch[1] : '',
      traits: traitsMatch ? traitsMatch[1].split(' • ') : [],
      cleanDescription: cleanDescription.trim(),
      fullDescription: translatedDescription
    };
  };

  const { mbtiType, traits, cleanDescription, fullDescription } = parseDescription(result.description);

  const handleViewCareers = () => {
    navigate('/detailed-results', { state: { personality, section: 'careers', fromFreeAssessment: true } });
  };

  const handleViewColleges = () => {
    navigate('/detailed-results', { state: { personality, section: 'colleges', fromFreeAssessment: true } });
  };

  const handleViewLearningStyle = () => {
    navigate('/detailed-results', { state: { personality, section: 'learning-style' } });
  };

  const handleViewPersonality = () => {
    navigate('/detailed-results', { state: { personality, section: 'personality' } });
  };

  const handleViewStudyMethods = () => {
    navigate('/detailed-results', { state: { personality, section: 'study-methods' } });
  };

  return (
    <div className="min-h-screen p-4 pt-20" style={{ background: 'radial-gradient(circle at 20% 30%, #DDA0DD 0%, #D8BFD8 15%, #87CEEB 40%, #4682B4 100%)' }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-black mb-2 animate-pulse">{rt('results_header')}</h1>
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
              {t(`personality.${result.type.toLowerCase().replace(/\s+/g, '_')}`) || result.type} {mbtiType && `(${mbtiType})`}
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
                {rt('what_does_this_mean')}
              </h4>
              <div className="space-y-4 text-left">
                <p className="text-muted-foreground leading-relaxed">
                  {rt('personality_meaning').replace('{type}', result.type)}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {rt('personality_traits_desc')}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {rt('personality_relationships')}
                </p>
                <div className="bg-white/50 p-4 rounded-lg border-l-4 border-primary">
                  <p className="text-sm font-medium text-foreground">
                    {rt('key_insight')}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Detailed Personality Insights */}
            <div className="grid md:grid-cols-3 gap-4 mt-6">
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">{rt('your_strengths')}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {rt('strengths_1')}</li>
                  <li>• {rt('strengths_2')}</li>
                  <li>• {rt('strengths_3')}</li>
                  <li>• {rt('strengths_4')}</li>
                </ul>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">{rt('work_style')}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {rt('work_style_1')}</li>
                  <li>• {rt('work_style_2')}</li>
                  <li>• {rt('work_style_3')}</li>
                  <li>• {rt('work_style_4')}</li>
                </ul>
              </div>
              <div className="bg-gradient-card p-4 rounded-lg border">
                <h4 className="font-semibold text-foreground mb-2">{rt('best_environments')}</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {rt('best_env_1')}</li>
                  <li>• {rt('best_env_2')}</li>
                  <li>• {rt('best_env_3')}</li>
                  <li>• {rt('best_env_4')}</li>
                </ul>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Personality Traits */}
        <Card className="bg-gradient-to-br from-white/95 via-white/90 to-white/95 backdrop-blur-lg shadow-xl border border-white/30 overflow-hidden">
          <CardHeader className="text-center relative pb-4">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
            <div className="relative z-10">
              <CardTitle className="text-2xl font-bold mb-2 text-foreground">
                {rt('your_personality_traits')}
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                {rt('traits_subtitle')}
              </p>
            </div>
          </CardHeader>

          <CardContent className="px-6 pb-6">
            <div className="max-w-lg mx-auto mb-6">
              {result.traits.map((trait, index) => {
                const isHigh = trait.percentage >= 70;
                return (
                  <div key={index} className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-foreground">
                        {rt(`trait_${trait.name.toLowerCase().replace(/[^a-z]/g, '_')}`) || trait.name}
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {trait.percentage}%
                      </span>
                    </div>
                    <div className="relative">
                      <div className="w-full h-2 bg-purple-200 rounded-full"></div>
                      <div 
                        className={`absolute top-0 w-4 h-4 rounded-full border-2 border-white shadow-md transform -translate-y-1 -translate-x-2 transition-all duration-1000 ${
                          isHigh ? 'bg-blue-400' : 'bg-gray-400'
                        }`}
                        style={{ left: `${trait.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-full border border-primary/20 shadow-md">
                <Sparkles className="h-5 w-5 text-primary animate-spin" style={{animationDuration: '3s'}} />
                <span className="text-base font-semibold text-foreground">
                  {rt('focus_on_strengths')}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>


        {/* Action Buttons */}
        <div className="flex flex-col gap-6 items-center">
          {/* Premium Status Badge */}
          {hasPremium && (
            <div className="mb-2">
              <Badge variant="default" className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2">
                {rt('premium_access_active')}
              </Badge>
            </div>
          )}

          {/* Premium Learning Style Button - Only for Premium Users */}
          {hasPremium && (
            <div className="relative group">
              <Button 
                onClick={handleViewLearningStyle}
                size="lg"
                className="relative bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full border-2 border-transparent hover:from-purple-600 hover:to-pink-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg font-bold overflow-hidden"
              >
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" />
                </div>
                
                <Star className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                <span className="relative z-10">{rt('learning_style_analysis')}</span>
              </Button>
            </div>
          )}

          {/* Premium Personality Insights - Only for Premium Users */}
          {hasPremium && (
            <div className="relative group">
              <Button 
                onClick={handleViewPersonality}
                size="lg"
                className="relative bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-full border-2 border-transparent hover:from-indigo-600 hover:to-purple-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg font-bold overflow-hidden"
              >
                {/* Sparkle effect */}
                <div className="absolute -top-1 -left-1">
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" style={{animationDelay: '0.3s'}} />
                </div>
                
                <Rocket className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                <span className="relative z-10">{rt('deep_personality_insights')}</span>
              </Button>
            </div>
          )}

          {/* Career Button */}
          <div className="relative group">
            <Button 
              onClick={handleViewCareers}
              size="lg"
              className="relative bg-gradient-secondary text-white rounded-full border-2 border-transparent hover:bg-secondary/80 transform transition-all duration-300 hover:scale-105 hover:shadow-blue px-8 py-6 text-lg font-bold overflow-hidden"
            >
              {/* Animated background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              
              {/* Sparkle effect */}
              <div className="absolute -top-1 -right-1">
                <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" />
              </div>
              
              <Briefcase className="h-6 w-6 mr-3 group-hover:animate-bounce" />
              <span className="relative z-10">{rt('best_career_matches')}</span>
            </Button>
            
            {/* Glowing ring effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-secondary opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-300 -z-10"></div>
          </div>

          {/* Premium Study Methods - Only for Premium Users */}
          {hasPremium && (
            <div className="relative group">
              <Button 
                onClick={handleViewStudyMethods}
                size="lg"
                className="relative bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full border-2 border-transparent hover:from-green-600 hover:to-teal-600 transform transition-all duration-300 hover:scale-105 hover:shadow-lg px-8 py-6 text-lg font-bold overflow-hidden"
              >
                {/* Sparkle effect */}
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="h-4 w-4 text-yellow-300 animate-bounce" style={{animationDelay: '0.7s'}} />
                </div>
                
                <GraduationCap className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                <span className="relative z-10">{rt('study_methods')}</span>
              </Button>
            </div>
          )}

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
              <span className="relative z-10">{rt('perfect_college_matches')}</span>
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
              {rt('home')}
            </Button>
            <Button 
              variant="outline" 
              onClick={onRetake}
              size="lg"
              className="bg-white/90 border-gray-300 text-black hover:bg-white hover:text-black"
            >
              {rt('retake_quiz')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}