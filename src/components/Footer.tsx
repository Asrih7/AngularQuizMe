import React from 'react';
import { Github, Twitter } from 'lucide-react'; // Import only the icons you need

const Footer = () => {
  return (
    <footer className="py-6 border-t">
      <div className="container flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0 text-center md:text-left">
          © 2025 AngularQuizMe Quiz. All rights reserved.
        </div>
        <div className="flex items-center space-x-4">
          <a 
            href="https://asrih7.github.io/AsrihAngularAcademy/" 
            className="text-muted-foreground hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* Angular Logo */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 250 250"
              width="24"
              height="24"
            >
              <path fill="#DD0031" d="M125 30L31.9 63.2l14.2 123.1L125 230l78.9-43.7 14.2-123.1z" />
              <path fill="#C3002F" d="M125 30v22.2-.1V230l78.9-43.7 14.2-123.1L125 30z" />
              <path fill="#FFFFFF" d="M125 52.1L66.8 182.6h21.7l11.7-29.2h49.4l11.7 29.2H183L125 52.1zm17 83.3h-34l17-40.9 17 40.9z" />
            </svg>
            <span className="sr-only">Asrih Angular Academy</span>
          </a>
          Angular Training Platform
        </div>
      </div>
    </footer>
  );
};

export default Footer;