
import React from 'react';
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';
import { QuizQuestion } from '../QuizSection';

interface QuizResultsProps {
  questions: QuizQuestion[];
  selectedAnswers: Record<string, number | null>;
  languageId: string;
  resetQuiz: () => void;
}

const QuizResults = ({ questions, selectedAnswers, languageId, resetQuiz }: QuizResultsProps) => {
  const getScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.answer) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100)
    };
  };

  const score = getScore();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Completed!</CardTitle>
        <CardDescription>
          Here's how you did on your {questions.length} {languageId} questions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-6xl font-bold mb-2">{score.percentage}%</div>
          <p className="text-muted-foreground">
            You got {score.correct} out of {score.total} questions correct
          </p>
        </div>
        
        <div className="space-y-4 pt-4">
          {questions.map((q, i) => (
            <div key={q.id} className="flex items-start gap-3 p-3 rounded-md bg-muted/50">
              <div className="flex-shrink-0 mt-0.5">
                {selectedAnswers[q.id] === q.answer ? (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </div>
              <div>
                <p className="font-medium">Question {i + 1}</p>
                <p className="text-sm text-muted-foreground">{q.question}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={resetQuiz} className="w-full">
          <RotateCcw className="mr-2 h-4 w-4" />
          Start New Quiz
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuizResults;
