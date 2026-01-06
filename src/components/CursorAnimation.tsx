import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CursorAnimation = () => {
  const [isMoving, setIsMoving] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    let moveTimeout: NodeJS.Timeout;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      
      setIsMoving(true);
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      clearTimeout(moveTimeout);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary pointer-events-none z-50 mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      animate={{
        scale: isMoving ? 1 : 0.5,
        opacity: isMoving ? 1 : 0.8,
        rotate: isMoving ? 0 : 45,
      }}
      transition={{
        scale: { duration: 0.2 },
        opacity: { duration: 0.2 },
        rotate: { 
          type: "spring",
          stiffness: 260,
          damping: 20 
        }
      }}
    >
      {!isMoving && (
        <motion.div
          className="w-full h-full bg-primary rounded-full opacity-50"
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}
    </motion.div>
  );
};
