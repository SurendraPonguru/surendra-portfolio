import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface EnhancedProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function EnhancedProfileImage({ src, alt, className = "" }: EnhancedProfileImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { stiffness: 150, damping: 18 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { stiffness: 150, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="absolute -inset-4 rounded-full opacity-60 animate-glow-pulse"
        style={{
          background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          filter: "blur(24px)",
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      />

      {[0, 1, 2].map((ring) => (
        <motion.div
          key={ring}
          className="absolute inset-0 rounded-full border border-primary/30"
          animate={{
            scale: [1, 1.08 + ring * 0.04, 1],
            opacity: [0.4, 0.15, 0.4],
          }}
          transition={{
            duration: 3 + ring,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ring * 0.5,
          }}
        />
      ))}

      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full z-0"
          style={{
            background: i % 2 === 0 ? "hsl(var(--primary))" : "hsl(var(--accent))",
            left: "50%",
            top: "50%",
          }}
          animate={{
            x: [0, Math.cos((i * 45 * Math.PI) / 180) * 120],
            y: [0, Math.sin((i * 45 * Math.PI) / 180) * 120],
            scale: [0, 1.2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: i * 0.4,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        className="relative z-10 w-full h-full"
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="relative w-full h-full rounded-full overflow-hidden ring-4 ring-primary/20 shadow-[var(--shadow-glow)]">
          <motion.img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.03 }}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 20%, hsl(0 0% 100% / 0.15) 0%, transparent 50%), radial-gradient(circle at center, transparent 50%, hsl(var(--primary) / 0.08) 100%)",
            }}
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </div>
  );
}
