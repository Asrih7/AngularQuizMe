
import { QuizQuestion } from '@/components/QuizSection';

export type LevelStatus = 'locked' | 'unlocked' | 'completed';

export interface LevelData {
  id: number;
  status: LevelStatus;
  score: number;
  bestScore: number;
  completedAt?: Date;
}

const STORAGE_KEY = 'angular-quiz-levels';
const MAX_LEVELS = 20;
const QUESTIONS_PER_LEVEL = 20;
const PASSING_SCORE = 90; // 90%

export const getInitialLevels = (): LevelData[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const savedLevels = localStorage.getItem(STORAGE_KEY);
    if (savedLevels) {
      return JSON.parse(savedLevels);
    }
  } catch (error) {
    console.error('Error reading levels from localStorage:', error);
  }
  
  // Create default levels (only first level is unlocked)
  return Array.from({ length: MAX_LEVELS }, (_, i) => ({
    id: i + 1,
    status: i === 0 ? 'unlocked' : 'locked',
    score: 0,
    bestScore: 0
  }));
};

export const saveLevels = (levels: LevelData[]): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(levels));
  } catch (error) {
    console.error('Error saving levels to localStorage:', error);
  }
};

export const updateLevelProgress = (
  levels: LevelData[],
  levelId: number,
  correct: number,
  total: number
): LevelData[] => {
  const updatedLevels = [...levels];
  const levelIndex = updatedLevels.findIndex(level => level.id === levelId);
  
  if (levelIndex === -1) return levels;
  
  const score = Math.round((correct / total) * 100);
  const currentLevel = updatedLevels[levelIndex];
  
  // Update current level
  updatedLevels[levelIndex] = {
    ...currentLevel,
    score,
    bestScore: Math.max(score, currentLevel.bestScore),
    status: score >= PASSING_SCORE ? 'completed' : currentLevel.status,
    completedAt: score >= PASSING_SCORE ? new Date() : currentLevel.completedAt
  };
  
  // If this level is completed and there's a next level, unlock it
  if (score >= PASSING_SCORE && levelIndex < MAX_LEVELS - 1) {
    updatedLevels[levelIndex + 1] = {
      ...updatedLevels[levelIndex + 1],
      status: 'unlocked'
    };
  }
  
  saveLevels(updatedLevels);
  return updatedLevels;
};

export const resetProgress = (): LevelData[] => {
  const levels = getInitialLevels();
  saveLevels(levels);
  return levels;
};

export const getQuizLimit = () => {
  return {
    maxLevels: MAX_LEVELS,
    questionsPerLevel: QUESTIONS_PER_LEVEL,
    passingScore: PASSING_SCORE
  };
};
