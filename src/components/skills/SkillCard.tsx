
import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";

interface SkillCardProps {
  name: string;
  icon: string;
  level: number;
  color?: string;
  description?: string;
}

export default function SkillCard({
  name,
  icon,
  level,
  color = "bg-primary",
  description,
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imgSrc, setImgSrc] = useState(icon);
  const [displayLevel, setDisplayLevel] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView) return;
    const duration = 1200;
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayLevel(Math.round(level * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, level]);

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl p-5 md:p-6 bg-card group border border-border/60 transition-all duration-500 card-hover overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
      />

      <div className="flex items-center gap-4 mb-4 relative z-10">
        <motion.div
          className={`w-12 h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center border border-primary/20`}
          animate={isHovered ? { rotate: [0, -5, 5, 0], scale: 1.1 } : { scale: 1 }}
          transition={{ duration: 0.4 }}
        >
          <img
            src={imgSrc}
            alt={name}
            className="w-7 h-7 drop-shadow-md"
            onError={() =>
              setImgSrc("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg")
            }
          />
        </motion.div>
        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{name}</h3>
      </div>

      <div className="relative z-10">
        <div className="flex justify-between text-sm mb-2 font-medium">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-bold tabular-nums">{displayLevel}%</span>
        </div>
        <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
          <motion.div
            className={`h-full ${color} rounded-full relative overflow-hidden`}
            initial={{ width: 0 }}
            animate={{ width: `${displayLevel}%` }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 animate-shimmer" />
          </motion.div>
        </div>
      </div>

      {description && (
        <p className="mt-4 text-sm text-muted-foreground line-clamp-2 relative z-10 group-hover:text-foreground/80 transition-colors">
          {description}
        </p>
      )}
    </motion.div>
  );
}
