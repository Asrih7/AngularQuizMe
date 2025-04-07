
import React, { useState } from 'react';
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
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number | null>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (value: string) => {
    console.log("Answer selected in QuizSection:", value);
    // Convert to number before storing
    const answerIndex = parseInt(value, 10);
    
    setSelectedAnswers(prev => ({
      ...prev, 
      [currentQuestion.id]: answerIndex
    }));
  };

  const handleCheckAnswer = () => {
    setShowResults(prev => ({
      ...prev,
      [currentQuestion.id]: true
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      // Move to the next question first
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      
      // Actually reset the selection for the next question by NOT including it in selectedAnswers
      // This was the bug - we had the comment but weren't actually doing the reset
      const nextQuestionId = questions[currentQuestionIndex + 1].id;
      setSelectedAnswers(prev => {
        const newSelections = {...prev};
        // Ensure the next question has no selected answer
        newSelections[nextQuestionId] = null;
        return newSelections;
      });
    } else {
      setQuizCompleted(true);
      
      // Calculate final score for the callback
      const correctCount = getCorrectCount();
      if (onComplete) {
        onComplete(correctCount, questions.length);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults({});
    setQuizCompleted(false);
  };

  const getCorrectCount = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.answer) {
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
          selectedAnswers={selectedAnswers}
          languageId={languageId}
          resetQuiz={resetQuiz}
        />
      ) : (
        <QuizCard
          currentQuestion={currentQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questionsLength={questions.length}
          selectedAnswer={selectedAnswers[currentQuestion.id] ?? null}
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
