
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import QuizGenerator from '@/components/QuizGenerator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 container py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-4">Angular Quiz Learning Path</h1>
            <p className="text-xl text-muted-foreground">
              Master Angular through 20 levels of comprehensive quizzes covering all aspects of the framework
            </p>
          </div>
          
          <QuizGenerator />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
