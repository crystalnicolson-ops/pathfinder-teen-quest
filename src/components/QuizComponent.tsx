import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { questions, calculateMBTI } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';

interface QuizComponentProps {
  onComplete: (personality: PersonalityType) => void;
}

export default function QuizComponent({ onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ traits: string[] }[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (traits: string[]) => {
    const newAnswers = [...answers, { traits }];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
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
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-primary">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <h2 className="text-2xl font-bold mb-8 text-center text-foreground">
          {question.text}
        </h2>

        <div className="space-y-3">
          {Object.entries(question.options).map(([key, option]) => (
            <Button
              key={key}
              variant="card"
              size="lg"
              className="w-full text-left justify-start h-auto p-4 text-wrap"
              onClick={() => handleAnswer(option.traits)}
            >
              <span className="font-medium mr-2">{key}.</span>
              {option.text}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}