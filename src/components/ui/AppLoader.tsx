import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AppLoader() {
  const [loadingStage, setLoadingStage] = useState(0);
  const [progress, setProgress] = useState(0);

  const stages = [
    { text: "Initializing Runtime...", sub: "Loading core modules" },
    { text: "Compiling Assets...", sub: "Optimizing performace" },
    { text: "Hydrating UI...", sub: "Applying theme variables" },
    { text: "Polishing Pixels...", sub: "Almost there" }
  ];

  useEffect(() => {
    // Progress timer
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Non-linear progress simulation
        const increment = Math.random() * 2 + (prev > 80 ? 0.5 : 1.5);
        return Math.min(prev + increment, 100);
      });
    }, 50);

    // Stage timer
    const stageInterval = setInterval(() => {
      setLoadingStage(prev => {
        if (prev >= stages.length - 1) {
          clearInterval(stageInterval);
          return prev;
        }
        return prev + 1;
      });
    }, 1200);

    return () => {
      clearInterval(interval);
      clearInterval(stageInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-[100] flex flex-col items-center justify-center overflow-hidden">
      {/* Background Code Particles Effect (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono text-primary whitespace-nowrap"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            {`{ code: "logic", id: ${i} }`}
          </motion.div>
        ))}
      </div>

      <div className="relative w-full max-w-md mx-auto p-6 flex flex-col items-center z-10">
        {/* Central Graphic: Morphing Shape (Logic <-> UI) */}
        <div className="relative w-32 h-32 mb-12 flex items-center justify-center">
          {/* Outer Ring - Dynamic */}
          <motion.div
            className="absolute inset-0 border-2 border-dashed border-primary/20 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          />

          {/* Inner - Logic Representation (Brackets) */}
          <AnimatePresence mode="wait">
            {progress < 50 ? (
              <motion.div
                key="logic"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, rotate: 90 }}
                className="absolute text-4xl font-mono text-primary font-bold"
              >
                {"< />"}
              </motion.div>
            ) : (
              // Inner - UI Representation (Geometric Shapes)
              <motion.div
                key="ui"
                initial={{ opacity: 0, scale: 0.8, rotate: -90 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                className="absolute flex items-center justify-center"
              >
                <div className="w-12 h-12 bg-gradient-to-tr from-primary to-accent rounded-xl shadow-lg shadow-primary/30" />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pulse Effect */}
          <motion.div
            className="absolute inset-4 rounded-full border border-primary/40"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Text Container */}
        <div className="h-16 flex flex-col items-center justify-center mb-6 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={stages[loadingStage].text}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h2 className="text-xl font-bold tracking-wider font-playfair bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary animate-gradient bg-size-200">
                {stages[loadingStage].text}
              </h2>
              <p className="text-xs text-muted-foreground font-mono mt-1">
                {stages[loadingStage].sub}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Technical Progress Bar */}
        <div className="w-64 relative">
          {/* Bar Background */}
          <div className="h-1 w-full bg-secondary overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>

          {/* Percentage Indicator */}
          <motion.div
            className="flex justify-between text-[10px] font-mono text-muted-foreground mt-2"
          >
            <span>0000</span>
            <span className="text-primary">{Math.round(progress)}%</span>
            <span>FFFF</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
