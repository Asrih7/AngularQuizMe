
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../QuizSection';

interface QuizCardProps {
  currentQuestion: QuizQuestion;
  currentQuestionIndex: number;
  questionsLength: number;
  selectedAnswer: number | null;
  isResultShown: boolean;
  correctCount: number;
  onAnswerSelect: (value: string) => void;
  onCheckAnswer: () => void;
  onNextQuestion: () => void;
}

const QuizCard = ({
  currentQuestion,
  currentQuestionIndex,
  questionsLength,
  selectedAnswer,
  isResultShown,
  correctCount,
  onAnswerSelect,
  onCheckAnswer,
  onNextQuestion
}: QuizCardProps) => {
  const isAnswerSelected = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion.answer;

  // Ensure we have a proper handler for radio selection
  const handleRadioChange = (value: string) => {
    console.log("Radio value selected:", value);
    onAnswerSelect(value);
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Question {currentQuestionIndex + 1} of {questionsLength}</CardTitle>
            <CardDescription>Select the best answer</CardDescription>
          </div>
          <div className="text-sm font-medium">
            {correctCount}/{currentQuestionIndex} correct
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2">{currentQuestion.question}</h3>
          {currentQuestion.codeSnippet && (
            <div className="bg-gray-900 text-gray-100 p-4 rounded-md my-3 overflow-x-auto">
              <pre className="text-sm">
                <code>{currentQuestion.codeSnippet}</code>
              </pre>
            </div>
          )}
        </div>

        <RadioGroup 
          value={selectedAnswer !== null ? selectedAnswer.toString() : undefined}
          onValueChange={handleRadioChange}
          className="space-y-3"
          disabled={isResultShown}
        >
          {currentQuestion.options.map((option, i) => (
            <div key={i} className={`flex items-start space-x-2 p-3 rounded-md transition-colors ${
              isResultShown && i === currentQuestion.answer 
                ? 'bg-green-100 dark:bg-green-900/20' 
                : isResultShown && i === selectedAnswer 
                  ? 'bg-red-100 dark:bg-red-900/20' 
                  : 'hover:bg-muted'
            }`}>
              <RadioGroupItem 
                value={i.toString()} 
                id={`option-${currentQuestion.id}-${i}`}
                className="cursor-pointer"
              />
              <Label
                htmlFor={`option-${currentQuestion.id}-${i}`}
                className="cursor-pointer flex-grow font-normal text-md leading-relaxed"
              >
                {option}
              </Label>
              {isResultShown && i === currentQuestion.answer && (
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
              )}
              {isResultShown && i === selectedAnswer && i !== currentQuestion.answer && (
                <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
              )}
            </div>
          ))}
        </RadioGroup>

        {isResultShown && currentQuestion.explanation && (
          <div className="bg-muted p-4 rounded-md text-sm">
            <p className="font-medium mb-1">Explanation:</p>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isResultShown ? (
          <Button 
            onClick={onCheckAnswer} 
            disabled={!isAnswerSelected}
            className="w-full"
          >
            Check Answer
          </Button>
        ) : (
          <Button 
            onClick={onNextQuestion} 
            className="w-full"
          >
            {currentQuestionIndex < questionsLength - 1 ? (
              <>Next Question <ArrowRight className="ml-2 h-4 w-4" /></>
            ) : (
              "Complete Quiz"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuizCard;
