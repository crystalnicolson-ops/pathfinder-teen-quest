import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { questions, calculateMBTI } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';
import { useLanguage } from '@/contexts/LanguageContext';

interface QuizComponentProps {
  onComplete: (personality: PersonalityType) => void;
}

export default function QuizComponent({ onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ traits: string[] }[]>([]);
  const { t } = useLanguage();
  const totalQuestions = Math.min(10, questions.length);

  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswer = (traits: string[]) => {
    const newAnswers = [...answers, { traits }];
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate MBTI personality type
      const personality = calculateMBTI(newAnswers);
      onComplete(personality);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20" style={{ background: 'radial-gradient(circle at 20% 30%, #DDA0DD 0%, #D8BFD8 15%, #87CEEB 40%, #4682B4 100%)' }}>
      <Card className="w-full max-w-2xl p-8 bg-white/95 backdrop-blur-sm shadow-card">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-muted-foreground">
              {t('quiz.question_counter').replace('{{current}}', (currentQuestion + 1).toString()).replace('{{total}}', totalQuestions.toString())}
            </span>
            <span className="text-sm font-medium text-primary">
              {t('quiz.percent_complete').replace('{{percent}}', Math.round(progress).toString())}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
          {(() => {
            const key = `quick_quiz.q${currentQuestion + 1}`;
            const translated = t(key);
            return translated !== key ? translated : question.text;
          })()}
        </h2>

        <div className="space-y-3">
          {Object.entries(question.options).map(([key, option]) => {
            const translateOption = (text: string) => {
              const map: Record<string, string> = {
                'Strongly Agree': t('option.strongly_agree'),
                'Agree': t('option.agree'),
                'Neutral': t('option.neutral'),
                'Disagree': t('option.disagree'),
                'Strongly Disagree': t('option.strongly_disagree'),
              };
              return map[text] || text;
            };
            return (
              <Button
                key={key}
                variant="card"
                size="lg"
                className="w-full text-left justify-start h-auto p-4 text-wrap"
                onClick={() => handleAnswer(option.traits)}
              >
                <span className="font-medium mr-2">{key}.</span>
                {translateOption(option.text)}
              </Button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}