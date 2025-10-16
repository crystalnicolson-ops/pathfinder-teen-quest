import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import { detailedQuestions, calculateDetailedMBTI, DetailedQuestion, AnswerType } from '@/data/detailedQuiz';
import { useToast } from '@/components/ui/use-toast';

import { useLanguage } from '@/contexts/LanguageContext';
import { detailedQuizTranslations } from '@/i18n/detailedQuiz';

const DetailedQuiz = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, currentLanguage } = useLanguage();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ question: DetailedQuestion; answer: AnswerType }[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState<AnswerType | ''>('');

  // Get translated question text
  const getQuestionText = (questionIndex: number) => {
    const questionNumber = questionIndex + 1;
    return detailedQuizTranslations[currentLanguage.code]?.[questionNumber] || 
           detailedQuizTranslations.en[questionNumber] || 
           detailedQuestions[questionIndex]?.text || '';
  };

  const handleGoHome = () => {
    navigate('/');
  };

  const handleAnswerSelect = (answer: AnswerType) => {
    console.log(`[QUIZ DEBUG] Question ${currentQuestion + 1}/${detailedQuestions.length} answered: ${answer}`);
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
      // Quiz completed - go directly to results
      setTimeout(() => {
        const results = calculateDetailedMBTI(newAnswers);
        localStorage.setItem('pendingQuizResults', JSON.stringify({
          results,
          answers: newAnswers.map(a => ({
            question: a.question.text,
            answer: a.answer
          }))
        }));
        localStorage.setItem('hasPaidPremium', 'true');
        navigate('/detailed-results');
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
      // Quiz completed - go directly to results
      setTimeout(() => {
        const results = calculateDetailedMBTI(newAnswers);
        localStorage.setItem('pendingQuizResults', JSON.stringify({
          results,
          answers: newAnswers.map(a => ({
            question: a.question.text,
            answer: a.answer
          }))
        }));
        localStorage.setItem('hasPaidPremium', 'true');
        navigate('/detailed-results');
      }, 300);
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

  return (
    <>
      <Header onHome={handleGoHome} />
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              📊 {t('detailed_quiz.title')}
            </div>
            <p className="text-muted-foreground">
              {t('detailed_quiz.subtitle')}
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-muted-foreground">
                {t('quiz.question_counter')
                  .replace('{{current}}', (currentQuestion + 1).toString())
                  .replace('{{total}}', detailedQuestions.length.toString())}
              </span>
              <span className="text-sm font-medium text-primary">
                {t('quiz.percent_complete').replace('{{percent}}', Math.round(progress).toString())}
              </span>
            </div>
            <Progress value={progress} className="h-3" />
          </div>

          {/* Section Indicator */}
          <div className="mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
              <BookOpen className="h-4 w-4" />
              <span className="font-medium">
                📚 {t('detailed_quiz.section.learning_style')}
              </span>
            </div>
          </div>

          {/* Question Card */}
          <Card className="mb-8 shadow-lg border-0 bg-background">
            <CardHeader>
              <CardTitle className="text-xl text-center font-semibold">
                {getQuestionText(currentQuestion)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={currentAnswer} onValueChange={handleAnswerSelect}>
                <div className="space-y-4">
                  {[
                    { value: 'Strongly Agree', label: `A. ${t('option.strongly_agree')}`, color: 'bg-green-100 border-green-300 text-green-800' },
                    { value: 'Agree', label: `B. ${t('option.agree')}`, color: 'bg-green-50 border-green-200 text-green-700' },
                    { value: 'Disagree', label: `C. ${t('option.disagree')}`, color: 'bg-red-50 border-red-200 text-red-700' },
                    { value: 'Strongly Disagree', label: `D. ${t('option.strongly_disagree')}`, color: 'bg-red-100 border-red-300 text-red-800' }
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
              {t('common.previous')}
            </Button>

            <div className="w-[100px]"></div> {/* Spacer to maintain layout balance */}
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedQuiz;