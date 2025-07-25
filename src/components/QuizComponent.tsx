import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { questions } from '@/data/quiz';
import { PersonalityType } from '@/types/quiz';

interface QuizComponentProps {
  onComplete: (personality: PersonalityType) => void;
}

export default function QuizComponent({ onComplete }: QuizComponentProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (personality: PersonalityType) => {
    const newAnswers = [...answers, personality];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate most common personality type
      const personalityCount: Record<string, number> = {};
      newAnswers.forEach(p => {
        personalityCount[p] = (personalityCount[p] || 0) + 1;
      });
      
      const dominantPersonality = Object.keys(personalityCount).reduce((a, b) => 
        personalityCount[a] > personalityCount[b] ? a : b
      ) as PersonalityType;

      onComplete(dominantPersonality);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center p-4">
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
          {question.options.map((option, index) => (
            <Button
              key={index}
              variant="card"
              size="lg"
              className="w-full text-left justify-start h-auto p-4 text-wrap"
              onClick={() => handleAnswer(option.personality)}
            >
              {option.text}
            </Button>
          ))}
        </div>
      </Card>
    </div>
  );
}