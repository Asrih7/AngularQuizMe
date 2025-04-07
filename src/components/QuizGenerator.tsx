
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import QuizSection, { QuizQuestion } from './QuizSection';
import { generateQuiz } from '@/lib/quiz-generator';
import LevelSelector from './LevelSelector';
import { 
  LevelData, 
  getInitialLevels, 
  updateLevelProgress, 
  resetProgress,
  getQuizLimit
} from '@/lib/progress-manager';

const QuizGenerator = () => {
  const [levels, setLevels] = useState<LevelData[]>([]);
  const [currentLevel, setCurrentLevel] = useState<number | null>(null);
  const [quizQuestions, setQuizQuestions] = useState<QuizQuestion[] | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();
  const { passingScore } = getQuizLimit();

  // Load levels from localStorage on initial render
  useEffect(() => {
    const initialLevels = getInitialLevels();
    setLevels(initialLevels);
  }, []);

  const handleSelectLevel = async (levelId: number) => {
    setIsGenerating(true);
    setCurrentLevel(levelId);
    
    try {
      // Generate questions for the selected level
      const questions = await generateQuiz(levelId);
      setQuizQuestions(questions);
      
      toast({
        title: `Level ${levelId} loaded`,
        description: `Complete with at least ${passingScore}% to unlock the next level`,
      });
    } catch (error) {
      toast({
        title: "Failed to load level",
        description: "There was an error loading this level. Please try again.",
        variant: "destructive",
      });
      setCurrentLevel(null);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleQuizComplete = (correct: number, total: number) => {
    if (!currentLevel) return;
    
    const updatedLevels = updateLevelProgress(levels, currentLevel, correct, total);
    setLevels(updatedLevels);
    
    const score = Math.round((correct / total) * 100);
    const passedLevel = score >= passingScore;
    
    toast({
      title: passedLevel ? "Level completed!" : "Level finished",
      description: passedLevel 
        ? `Great job! You've passed Level ${currentLevel} with ${score}%`
        : `You've scored ${score}%. You need at least ${passingScore}% to advance.`,
      variant: passedLevel ? "default" : "destructive",
    });
  };

  const handleResetProgress = () => {
    const resetLevels = resetProgress();
    setLevels(resetLevels);
    setQuizQuestions(null);
    setCurrentLevel(null);
    
    toast({
      title: "Progress reset",
      description: "All your progress has been reset. Only level 1 is now unlocked.",
    });
  };

  const handleReset = () => {
    setQuizQuestions(null);
    setCurrentLevel(null);
  };

  return (
    <div className="space-y-8">
      {!quizQuestions ? (
        <LevelSelector 
          levels={levels}
          onSelectLevel={handleSelectLevel}
          onResetProgress={handleResetProgress}
        />
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-1">Level {currentLevel}: Angular Quiz</h2>
              <p className="text-muted-foreground">
                Complete with at least {passingScore}% to unlock the next level
              </p>
            </div>
            <Button variant="outline" onClick={handleReset}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Levels
            </Button>
          </div>

          <QuizSection 
            questions={quizQuestions} 
            languageId="angular"
            onComplete={handleQuizComplete}
          />
        </div>
      )}
    </div>
  );
};

export default QuizGenerator;
