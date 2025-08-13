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
      <div className="min-h-screen" style={{ backgroundColor: '#CFA8F0' }}>
        {/* Main Question Section */}
        <div className="relative overflow-hidden">
          <div className="relative z-10 max-w-6xl mx-auto px-4 py-16 text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2 text-black rounded-none">
              <Sparkles className="h-4 w-4 mr-2" />
              Discover Your Future
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              What's Your Personality Type?
            </h1>
            
            <p className="text-xl md:text-2xl text-black/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Choose from 16 unique personality types below, or take our quick assessment to discover which one matches your strengths and preferences!
            </p>

            {/* Personality Types Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 mb-12">
              {[
                { type: 'The Strategist', avatar: '/src/assets/avatar-strategist-new.jpg' },
                { type: 'The Inventor', avatar: '/src/assets/avatar-inventor-new.jpg' },
                { type: 'The Boss', avatar: '/src/assets/avatar-boss-new.jpg' },
                { type: 'The Challenger', avatar: '/src/assets/avatar-challenger-new.jpg' },
                { type: 'The Visionary', avatar: '/src/assets/avatar-visionary-new.jpg' },
                { type: 'The Creator', avatar: '/src/assets/avatar-creator-new.jpg' },
                { type: 'The Coach', avatar: '/src/assets/avatar-coach-new.jpg' },
                { type: 'The Free Spirit', avatar: '/src/assets/avatar-free-spirit-new.jpg' },
                { type: 'The Organizer', avatar: '/src/assets/avatar-organizer-new.jpg' },
                { type: 'The Helper', avatar: '/src/assets/avatar-helper-new.jpg' },
                { type: 'The Manager', avatar: '/src/assets/avatar-manager-new.jpg' },
                { type: 'The Host', avatar: '/src/assets/avatar-host-new.jpg' },
                { type: 'The Fixer', avatar: '/src/assets/avatar-fixer-new.jpg' },
                { type: 'The Artist', avatar: '/src/assets/avatar-artist-new.jpg' },
                { type: 'The Adventurer', avatar: '/src/assets/avatar-adventurer-new.jpg' },
                { type: 'The Performer', avatar: '/src/assets/avatar-performer-new.jpg' },
              ].map((personality) => (
                <div key={personality.type} className="text-center group cursor-pointer">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full overflow-hidden bg-white/20 backdrop-blur-sm shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={personality.avatar} 
                      alt={`${personality.type} avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium text-black/90 leading-tight">
                    {personality.type}
                  </p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="space-y-4">
              <p className="text-lg text-black/80 mb-6">
                Not sure which one you are?
              </p>
              <Button 
                variant="secondary" 
                size="lg" 
                onClick={handleStartQuiz}
                className="text-lg px-8 py-6 animate-pulse-slow rounded-full"
              >
                <Target className="h-6 w-6 mr-2" />
                Take the Assessment
              </Button>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="max-w-4xl mx-auto px-4 py-16">
          <h2 className="text-2xl font-bold text-black text-center mb-8">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Your Strengths</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Understand your unique abilities and working style
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-secondary w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Career Matches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Get personalized career recommendations with real job listings
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center mb-3">
                  <GraduationCap className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">College Options</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center text-sm">
                  Discover the best colleges for your chosen career path
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
