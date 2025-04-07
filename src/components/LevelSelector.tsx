
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LevelData } from '@/lib/progress-manager';
import { Lock, Unlock, CheckCircle } from 'lucide-react';

interface LevelSelectorProps {
  levels: LevelData[];
  onSelectLevel: (levelId: number) => void;
  onResetProgress: () => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({
  levels,
  onSelectLevel,
  onResetProgress
}) => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Angular Quiz Levels</h2>
        <Button variant="outline" onClick={onResetProgress}>
          Reset Progress
        </Button>
      </div>
      
      <p className="text-muted-foreground">
        Complete each level with at least 90% score to unlock the next level.
        Each level contains 20 unique questions about Angular.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {levels.map((level) => (
          <LevelCard 
            key={level.id} 
            level={level} 
            onSelect={() => {
              if (level.status !== 'locked') {
                onSelectLevel(level.id);
              }
            }} 
          />
        ))}
      </div>
    </div>
  );
};

interface LevelCardProps {
  level: LevelData;
  onSelect: () => void;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, onSelect }) => {
  const { id, status, bestScore } = level;
  
  return (
    <Card 
      className={`
        cursor-pointer transition-all duration-200 hover:shadow-md
        ${status === 'locked' ? 'opacity-60' : ''}
        ${status === 'completed' ? 'border-green-500 dark:border-green-400' : ''}
      `}
      onClick={onSelect}
    >
      <CardContent className="p-6 flex flex-col items-center">
        <div className={`
          rounded-full w-12 h-12 flex items-center justify-center mb-3
          ${status === 'locked' 
            ? 'bg-muted text-muted-foreground' 
            : status === 'completed' 
              ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
              : 'bg-primary/10 text-primary'}
        `}>
          {status === 'locked' && <Lock className="h-5 w-5" />}
          {status === 'unlocked' && <Unlock className="h-5 w-5" />}
          {status === 'completed' && <CheckCircle className="h-5 w-5" />}
        </div>
        
        <h3 className="text-xl font-semibold mb-1">Level {id}</h3>
        
        {status !== 'locked' && (
          <div className="text-sm text-muted-foreground">
            {bestScore > 0 ? `Best Score: ${bestScore}%` : 'Not attempted yet'}
          </div>
        )}
        
        <div className="mt-3">
          <span className={`inline-block px-2 py-1 rounded-full text-xs
            ${status === 'locked' 
              ? 'bg-muted text-muted-foreground' 
              : status === 'completed' 
                ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' 
                : 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400'}
          `}>
            {status === 'locked' ? 'Locked' : status === 'completed' ? 'Completed' : 'Unlocked'}
          </span>
        </div>
      </CardContent>
    </Card>
  );
};

export default LevelSelector;
