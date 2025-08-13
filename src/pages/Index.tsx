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
  const [appState, setAppState] = useState<AppState>('results');
  const [personalityResult, setPersonalityResult] = useState<PersonalityType | null>('The Strategist');

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
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <Badge variant="secondary" className="mb-6 text-base px-4 py-2 text-black rounded-none">
            <Sparkles className="h-4 w-4 mr-2" />
            Discover Your Future
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 animate-bounce-gentle">
            What's Your Personality Type?
          </h1>
          
          <p className="text-xl md:text-2xl text-black/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take our quick personality quiz and discover careers that match your unique strengths, 
            plus colleges that can get you there!
          </p>
          
          <Button 
            variant="secondary" 
            size="lg" 
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6 animate-pulse-slow rounded-full"
          >
            <Target className="h-6 w-6 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-12">
          What You'll Discover
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/95 backdrop-blur-sm shadow-card hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            <CardHeader className="text-center">
              <div className="mx-auto bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
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
              <div className="mx-auto bg-gradient-secondary w-16 h-16 rounded-full flex items-center justify-center mb-4">
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
              <div className="mx-auto bg-gradient-primary w-16 h-16 rounded-full flex items-center justify-center mb-4">
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

      {/* Personality Types Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-black text-center mb-4">
          16 Unique Personality Types
        </h2>
        <p className="text-black/80 text-center mb-12 max-w-2xl mx-auto">
          Discover which of these personality types matches your unique strengths and preferences
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {[
            { type: 'The Strategist', avatar: '/src/assets/avatar-strategist.jpg' },
            { type: 'The Inventor', avatar: '/src/assets/avatar-inventor.jpg' },
            { type: 'The Boss', avatar: '/src/assets/avatar-boss.jpg' },
            { type: 'The Challenger', avatar: '/src/assets/avatar-challenger.jpg' },
            { type: 'The Visionary', avatar: '/src/assets/avatar-visionary.jpg' },
            { type: 'The Creator', avatar: '/src/assets/avatar-creator.jpg' },
            { type: 'The Coach', avatar: '/src/assets/avatar-coach.jpg' },
            { type: 'The Free Spirit', avatar: '/src/assets/avatar-free-spirit.jpg' },
            { type: 'The Organizer', avatar: '/src/assets/avatar-organizer.jpg' },
            { type: 'The Helper', avatar: '/src/assets/avatar-helper.jpg' },
            { type: 'The Manager', avatar: '/src/assets/avatar-manager.jpg' },
            { type: 'The Host', avatar: '/src/assets/avatar-host.jpg' },
            { type: 'The Fixer', avatar: '/src/assets/avatar-fixer.jpg' },
            { type: 'The Artist', avatar: '/src/assets/avatar-artist.jpg' },
            { type: 'The Adventurer', avatar: '/src/assets/avatar-adventurer.jpg' },
            { type: 'The Performer', avatar: '/src/assets/avatar-performer.jpg' },
          ].map((personality) => (
            <div key={personality.type} className="text-center group">
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
      </div>

      {/* CTA Section */}
      <div className="text-center pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h3 className="text-2xl font-bold text-black mb-4">
            Ready to Shape Your Future?
          </h3>
          <p className="text-black/80 mb-8">
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
