import React, { useState, useEffect } from 'react';
import QuizCard from './quiz/QuizCard';
import QuizResults from './quiz/QuizResults';

export type QuizQuestion = {
  id: string;
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
  codeSnippet?: string;
};

interface QuizSectionProps {
  questions: QuizQuestion[];
  languageId: string;
  onComplete?: (correct: number, total: number) => void;
}

const QuizSection = ({ questions, languageId, onComplete }: QuizSectionProps) => {
  // Current question index
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  
  // Track answers separately
  const [answersRecord, setAnswersRecord] = useState<Record<string, number>>({});
  
  // Track which question has been checked
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  
  // Current selection (separate from saved answers)
  const [currentSelection, setCurrentSelection] = useState<number | null>(null);
  
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  // Reset current selection whenever question changes
  useEffect(() => {
    setCurrentSelection(null);
  }, [currentQuestionIndex]);

  const handleAnswerSelect = (value: string) => {
    const answerIndex = parseInt(value, 10);
    setCurrentSelection(answerIndex);
  };

  const handleCheckAnswer = () => {
    if (currentSelection !== null) {
      // Save the answer to our record when checking
      setAnswersRecord(prev => ({
        ...prev,
        [currentQuestion.id]: currentSelection
      }));
      
      // Show the result
      setShowResults(prev => ({
        ...prev,
        [currentQuestion.id]: true
      }));
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Just move to the next question
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      // currentSelection will be reset by useEffect
    } else {
      setQuizCompleted(true);
      const correctCount = getCorrectCount();
      if (onComplete) {
        onComplete(correctCount, questions.length);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswersRecord({});
    setShowResults({});
    setCurrentSelection(null);
    setQuizCompleted(false);
  };

  const getCorrectCount = () => {
    let correct = 0;
    questions.forEach(question => {
      if (answersRecord[question.id] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  return (
    <div className="space-y-4">
      {quizCompleted ? (
        <QuizResults 
          questions={questions}
          selectedAnswers={answersRecord}
          languageId={languageId}
          resetQuiz={resetQuiz}
        />
      ) : (
        <QuizCard
          key={`question-${currentQuestionIndex}`} // Force re-render on question change
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questionsLength={questions.length}
          selectedAnswer={currentSelection}
          isResultShown={showResults[currentQuestion.id] || false}
          correctCount={getCorrectCount()}
          onAnswerSelect={handleAnswerSelect}
          onCheckAnswer={handleCheckAnswer}
          onNextQuestion={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default QuizSection;