import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Crown, BookOpen, CreditCard } from 'lucide-react';
import Header from '@/components/Header';
import { detailedQuestions, calculateDetailedMBTI, DetailedQuestion, AnswerType } from '@/data/detailedQuiz';
import { createClient } from '@supabase/supabase-js';
import { useToast } from '@/components/ui/use-toast';

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'
);

// Add debug logging
console.log('Supabase URL:', import.meta.env.VITE_SUPABASE_URL);
console.log('Supabase Anon Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);

const DetailedQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ question: DetailedQuestion; answer: AnswerType }[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<AnswerType | ''>('');
  const [showPaymentPrompt, setShowPaymentPrompt] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const handleGoHome = () => {
    navigate('/');
  };

  const handleAnswerSelect = (answer: AnswerType) => {
    setCurrentAnswer(answer);
    
    // Automatically advance to next question
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      question: detailedQuestions[currentQuestion],
      answer: answer
    };
    setAnswers(newAnswers);

    if (currentQuestion < detailedQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
        setCurrentAnswer(newAnswers[currentQuestion + 1]?.answer || '');
      }, 300); // Small delay for better UX
    } else {
      // Quiz completed - show payment prompt
      setTimeout(() => {
        setShowPaymentPrompt(true);
      }, 300);
    }
  };

  const handleNext = () => {
    if (!currentAnswer) return;

    const newAnswers = [...answers];
    newAnswers[currentQuestion] = {
      question: detailedQuestions[currentQuestion],
      answer: currentAnswer
    };
    setAnswers(newAnswers);

    if (currentQuestion < detailedQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setCurrentAnswer(newAnswers[currentQuestion + 1]?.answer || '');
    } else {
      // Quiz completed - show payment prompt
      setShowPaymentPrompt(true);
    }
  };

  const handlePayment = async () => {
    setIsProcessingPayment(true);
    try {
      // Check if Supabase is properly configured
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        throw new Error("Supabase not configured. Please connect your project to Supabase first.");
      }

      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: { email: 'guest@example.com' } // For guest checkout
      });

      if (error) throw error;

      if (data?.url) {
        // Store quiz data in localStorage before redirecting
        const results = calculateDetailedMBTI(answers);
        localStorage.setItem('pendingQuizResults', JSON.stringify({
          results,
          answers: answers.map(a => ({
            question: a.question.text,
            answer: a.answer
          }))
        }));
        
        // Open Stripe checkout in new tab
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Payment error:', error);
      toast({
        title: "Payment Error", 
        description: error.message || "Failed to initiate payment. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessingPayment(false);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setCurrentAnswer(answers[currentQuestion - 1]?.answer || '');
    }
  };

  const progress = ((currentQuestion + 1) / detailedQuestions.length) * 100;
  const currentSection = detailedQuestions[currentQuestion].section;
  
  // Get section info
  const sectionIcons = {
    "Social Energy & Communication Style": "👥",
    "Decision-Making & Emotional Style": "🎯", 
    "Learning Style & Study Habits": "🧠",
    "Work Habits & Time Management": "🛠️",
    "Creative vs Practical Thinking": "🌈"
  };

  if (showPaymentPrompt) {
    return (
      <>
        <Header onHome={handleGoHome} />
        <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 flex items-center justify-center">
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-center">Complete Your Assessment</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="space-y-2">
                <p className="text-lg font-medium">Unlock Your Detailed Results</p>
                <p className="text-muted-foreground">
                  Get comprehensive insights into your personality, learning style, and career recommendations.
                </p>
              </div>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-primary">$9.97</p>
                <p className="text-sm text-muted-foreground">One-time payment</p>
              </div>

              <div className="space-y-2">
                <Button 
                  onClick={handlePayment}
                  disabled={isProcessingPayment}
                  className="w-full"
                  size="lg"
                >
                  <CreditCard className="mr-2 h-4 w-4" />
                  {isProcessingPayment ? 'Processing...' : 'Get My Results'}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setShowPaymentPrompt(false)}
                  className="w-full"
                >
                  Back to Quiz
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  return (
    <>
      <Header onHome={handleGoHome} />
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Crown className="h-6 w-6 text-primary" />
              📊 Learning Style & Personality Test Results
              <Crown className="h-6 w-6 text-primary" />
            </div>
            <p className="text-muted-foreground">
              50-Question Personality + Learning Style Test - Select how much you agree with each statement
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                Question {currentQuestion + 1} of {detailedQuestions.length}
              </span>
              <span className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Section Indicator */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">
                📚 Learning Style Assessment
              </span>
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8 shadow-lg border-0 bg-background/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl text-center font-semibold">
                {detailedQuestions[currentQuestion].text}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={currentAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-4">
                  {[
                    { value: 'Strongly Agree', label: 'A. Strongly Agree', color: 'bg-green-100 border-green-300 text-green-800' },
                    { value: 'Agree', label: 'B. Agree', color: 'bg-green-50 border-green-200 text-green-700' },
                    { value: 'Disagree', label: 'C. Disagree', color: 'bg-red-50 border-red-200 text-red-700' },
                    { value: 'Strongly Disagree', label: 'D. Strongly Disagree', color: 'bg-red-100 border-red-300 text-red-800' }
                  ].map((option) => (
                    <div key={option.value} className="flex items-center space-x-3">
                      <RadioGroupItem 
                        value={option.value} 
                        id={option.value}
                        className="border-2"
                      />
                      <Label 
                        htmlFor={option.value} 
                        className={`flex-1 p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                          currentAnswer === option.value 
                            ? `${option.color} shadow-md scale-[1.02]` 
                            : 'bg-background border-border hover:border-border/60'
                        }`}
                      >
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <Button
              variant="outline"
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2 text-muted-foreground">
              <div className="flex gap-1">
                {Array.from({ length: Math.ceil(detailedQuestions.length / 10) }).map((_, i) => (
                  <div
                    key={i}
                    className={`w-2 h-2 rounded-full ${
                      Math.floor(currentQuestion / 10) === i 
                        ? 'bg-primary' 
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm">Select an answer to continue</span>
            </div>

            <div className="w-[100px]"></div> {/* Spacer to maintain layout balance */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedQuiz;