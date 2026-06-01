import { ReactNode, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const controls = useAnimation();

  const hiddenVariants = {
    up: { opacity: 0, y: 32, filter: "blur(6px)" },
    left: { opacity: 0, x: -32, filter: "blur(6px)" },
    right: { opacity: 0, x: 32, filter: "blur(6px)" },
    scale: { opacity: 0, scale: 0.92, filter: "blur(4px)" },
  };

  const visibleVariants = {
    up: { opacity: 1, y: 0, filter: "blur(0px)" },
    left: { opacity: 1, x: 0, filter: "blur(0px)" },
    right: { opacity: 1, x: 0, filter: "blur(0px)" },
    scale: { opacity: 1, scale: 1, filter: "blur(0px)" },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: hiddenVariants[direction],
        visible: {
          ...visibleVariants[direction],
          transition: {
            duration: 0.65,
            delay: delay * 0.12,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
