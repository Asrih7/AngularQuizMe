
import { QuizQuestion } from '@/components/QuizSection';
import { getAngularQuestions } from '@/data/angular-questions';

// Function to generate quiz questions for a specific level
export const generateQuiz = async (
  levelId: number
): Promise<QuizQuestion[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Get all Angular questions
  const allQuestions = getAngularQuestions();
  
  // Calculate start and end indices for this level (each level has 20 questions)
  const startIndex = (levelId - 1) * 20;
  const endIndex = startIndex + 20;
  
  // Slice questions for this level
  const levelQuestions = allQuestions.slice(startIndex, endIndex);
  
  // Ensure we have enough questions
  if (levelQuestions.length < 20) {
    console.warn(`Not enough questions for level ${levelId}, using available questions and filling with random ones`);
    
    // If we don't have enough questions for this level, get some random ones to fill
    const remainingCount = 20 - levelQuestions.length;
    const randomQuestions = allQuestions
      .filter(q => !levelQuestions.some(lq => lq.id === q.id))
      .sort(() => Math.random() - 0.5)
      .slice(0, remainingCount);
    
    return [...levelQuestions, ...randomQuestions];
  }
  
  return levelQuestions;
};
