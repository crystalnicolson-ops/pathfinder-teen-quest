import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Target, GraduationCap, TrendingUp } from 'lucide-react';
import QuizComponent from '@/components/QuizComponent';
import ResultsComponent from '@/components/ResultsComponent';
import Header from '@/components/Header';
import { PersonalityType } from '@/types/quiz';
import heroImage from '@/assets/hero-careers.jpg';

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

type AppState = 'landing' | 'quiz' | 'results';

const Index = () => {
  const location = useLocation();
  const [appState, setAppState] = useState<AppState>('landing');
  const [personalityResult, setPersonalityResult] = useState<PersonalityType | null>(null);

  // Check for incoming state from DetailedResults navigation
  useEffect(() => {
    if (location.state?.showResults && location.state?.personality) {
      setPersonalityResult(location.state.personality);
      setAppState('results');
    }
  }, [location.state]);

  const handleStartQuiz = () => setAppState('quiz');
  
  const handleQuizComplete = (personality: PersonalityType) => {
    setPersonalityResult(personality);
    setAppState('results');
  };

  const handleRetakeQuiz = () => {
    setPersonalityResult(null);
    setAppState('landing');
  };

  const handleGoHome = () => {
    setAppState('landing');
  };

  if (appState === 'quiz') {
    return (
      <>
        <Header onHome={handleGoHome} />
        <QuizComponent onComplete={handleQuizComplete} />
      </>
    );
  }

  if (appState === 'results' && personalityResult) {
    return (
      <>
        <Header onHome={handleGoHome} />
        <ResultsComponent personality={personalityResult} onRetake={handleRetakeQuiz} onHome={handleGoHome} />
      </>
    );
  }

  return (
    <>
      <Header onHome={handleGoHome} showHomeButton={false} />
      <div className="min-h-screen" style={{ background: 'radial-gradient(circle at 20% 30%, #DDA0DD 0%, #D8BFD8 15%, #87CEEB 40%, #4682B4 100%)' }}>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce-gentle">
            What's Your Personality Type?
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take our quick personality quiz and discover careers that match your unique strengths, 
            plus colleges that can get you there!
          </p>
          
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6 animate-pulse-slow rounded-full text-white border-[#DDA0DD]"
            style={{ backgroundColor: '#DDA0DD', borderColor: '#DDA0DD' }}
          >
            <Target className="h-6 w-6 mr-2" color="white" />
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* Personality Types Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white text-center mb-4">
          Find Your Match
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto">
          Discover which of these personality types matches your unique strengths and preferences
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            { type: 'The Strategist', avatar: avatarStrategist },
            { type: 'The Inventor', avatar: avatarInventor },
            { type: 'The Boss', avatar: avatarBoss },
            { type: 'The Challenger', avatar: avatarChallenger },
            { type: 'The Visionary', avatar: avatarVisionary },
            { type: 'The Creator', avatar: avatarCreator },
            { type: 'The Coach', avatar: avatarCoach },
            { type: 'The Free Spirit', avatar: avatarFreeSpirit },
            { type: 'The Organizer', avatar: avatarOrganizer },
            { type: 'The Helper', avatar: avatarHelper },
            { type: 'The Manager', avatar: avatarManager },
            { type: 'The Host', avatar: avatarHost },
            { type: 'The Fixer', avatar: avatarFixer },
            { type: 'The Artist', avatar: avatarArtist },
            { type: 'The Adventurer', avatar: avatarAdventurer },
            { type: 'The Performer', avatar: avatarPerformer },
          ].map((personality) => (
            <div key={personality.type} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={personality.avatar} 
                  alt={`${personality.type} avatar`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium text-white/90 leading-tight">
                {personality.type}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          What You'll Discover
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDA0DD' }}>
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Your Personality Type</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Understand your unique strengths, preferences, and working style through our scientifically-based assessment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDA0DD' }}>
                <Target className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Perfect Career Matches</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Get personalized career recommendations with salary information and real job listings from Indeed.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#DDA0DD' }}>
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-xl">Top College Options</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-center">
                Discover the best colleges and universities for your chosen career path, with relevant program details.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>


      {/* CTA Section */}
      <div className="text-center pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Shape Your Future?
          </h3>
          <p className="text-white/80 mb-8">
            Join thousands of teens who have discovered their perfect career path. 
            It only takes 5 minutes!
          </p>
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6 rounded-full"
          >
            <TrendingUp className="h-6 w-6 mr-2" />
            Begin Assessment
          </Button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Index;
