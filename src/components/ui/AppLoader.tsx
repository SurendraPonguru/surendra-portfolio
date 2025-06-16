
import { useEffect, useState } from "react";

export default function AppLoader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Unique geometric loader */}
        <div className="relative w-20 h-20 mx-auto">
          <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
          <div className="absolute inset-2 border-4 border-accent/30 rounded-full animate-spin"></div>
          <div className="absolute inset-4 border-4 border-primary rounded-full animate-pulse"></div>
          <div className="absolute inset-6 w-2 h-2 bg-gradient-primary rounded-full animate-bounce"></div>
        </div>

        {/* Loading text with typewriter effect */}
        <div className="space-y-2">
          <h2 className="text-xl font-bold gradient-text">Loading Portfolio</h2>
          <div className="flex items-center justify-center space-x-1">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-64 mx-auto">
          <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2">{Math.round(Math.min(progress, 100))}%</p>
        </div>
      </div>
    </div>
  );
}
