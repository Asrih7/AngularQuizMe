
import React, { useState } from 'react';
import { Upload, Check, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

interface ResumeUploaderProps {
  onFileUpload: (content: string, fileName: string) => void;
}

const ResumeUploader: React.FC<ResumeUploaderProps> = ({ onFileUpload }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    if (file.type !== 'application/pdf' && file.type !== 'text/plain' && !file.type.includes('document')) {
      toast({
        title: "Invalid file format",
        description: "Please upload a PDF, text, or document file",
        variant: "destructive",
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) { // 5MB
      toast({
        title: "File too large",
        description: "Maximum file size is 5MB",
        variant: "destructive",
      });
      return;
    }

    setFile(file);
    processFile(file);
  };

  const processFile = (file: File) => {
    setIsLoading(true);
    
    const reader = new FileReader();
    
    reader.onload = (e) => {
      if (e.target?.result) {
        // For the demo, we'll just pass the raw text content
        // In a real app, you'd parse PDF and other formats appropriately
        onFileUpload(e.target.result.toString(), file.name);
        toast({
          title: "File uploaded successfully",
          description: `${file.name} has been processed`,
        });
      }
      setIsLoading(false);
    };
    
    reader.onerror = () => {
      toast({
        title: "Error reading file",
        description: "There was a problem processing your file",
        variant: "destructive",
      });
      setIsLoading(false);
    };
    
    reader.readAsText(file);
  };

  return (
    <div className="space-y-4">
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center ${
          isDragging ? 'border-primary bg-primary/5' : 'border-border'
        } transition-all`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="rounded-full bg-muted p-3">
            <Upload className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <p className="text-lg font-medium">Upload your resume or CV</p>
            <p className="text-sm text-muted-foreground">
              Drag and drop your file here, or click to browse
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports PDF, Word, and text files up to 5MB
            </p>
          </div>
          <Label htmlFor="resume-upload" className="cursor-pointer">
            <div className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium">
              Select file
            </div>
            <Input
              id="resume-upload"
              type="file"
              className="sr-only"
              accept=".pdf,.txt,.doc,.docx"
              onChange={handleFileInput}
            />
          </Label>
        </div>
      </div>

      {file && (
        <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
          {isLoading ? (
            <div className="animate-pulse rounded-full bg-muted p-1">
              <div className="h-4 w-4" />
            </div>
          ) : (
            <Check className="h-5 w-5 text-green-500" />
          )}
          <span className="text-sm font-medium truncate">{file.name}</span>
          <span className="text-xs text-muted-foreground ml-auto">
            {(file.size / 1024).toFixed(0)} KB
          </span>
        </div>
      )}
    </div>
  );
};

export default ResumeUploader;
