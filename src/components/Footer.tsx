
import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          © 2025 CodeSavvy Quiz. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
