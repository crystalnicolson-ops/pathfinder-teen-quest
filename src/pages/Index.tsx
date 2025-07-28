import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Target, GraduationCap, TrendingUp } from 'lucide-react';
import QuizComponent from '@/components/QuizComponent';
import ResultsComponent from '@/components/ResultsComponent';
import { PersonalityType } from '@/types/quiz';
import heroImage from '@/assets/hero-careers.jpg';

type AppState = 'landing' | 'quiz' | 'results';

const Index = () => {
  const [appState, setAppState] = useState<AppState>('landing');
  const [personalityResult, setPersonalityResult] = useState<PersonalityType | null>(null);

  const handleStartQuiz = () => setAppState('quiz');
  
  const handleQuizComplete = (personality: PersonalityType) => {
    setPersonalityResult(personality);
    setAppState('results');
  };

  const handleRetakeQuiz = () => {
    setPersonalityResult(null);
    setAppState('landing');
  };

  if (appState === 'quiz') {
    return <QuizComponent onComplete={handleQuizComplete} />;
  }

  if (appState === 'results' && personalityResult) {
    return <ResultsComponent personality={personalityResult} onRetake={handleRetakeQuiz} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 py-16 text-center">
          <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
            <Sparkles className="h-4 w-4 mr-2" />
            Discover Your Future
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-bounce-gentle">
            Find Your Perfect Career Path
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Take our quick personality quiz and discover careers that match your unique strengths, 
            plus colleges that can get you there!
          </p>
          
          <Button 
            variant="hero" 
            size="lg" 
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6 animate-pulse-slow"
          >
            <Target className="h-6 w-6 mr-2" />
            Start Your Journey
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
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
            variant="hero" 
            size="lg" 
            onClick={handleStartQuiz}
            className="text-lg px-8 py-6"
          >
            <TrendingUp className="h-6 w-6 mr-2" />
            Begin Assessment
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
