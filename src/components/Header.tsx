
import React from 'react';
import { Code2 } from 'lucide-react';

const Header = () => {
  return (
    <header className="py-4 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Code2 className="h-6 w-6 text-primary" />
          <span className="font-bold text-xl">AngularQuizMe</span>
        </div>
        
      </div>
    </header>
  );
};

export default Header;
