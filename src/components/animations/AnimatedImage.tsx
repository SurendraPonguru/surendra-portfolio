import { useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";

interface AnimatedImageProps {
  src: string;
  alt: string;
  className?: string;
  overlay?: React.ReactNode;
  aspect?: "video" | "square" | "auto";
  enableTilt?: boolean;
  enableKenBurns?: boolean;
}

export default function AnimatedImage({
  src,
  alt,
  className = "",
  overlay,
  aspect = "video",
  enableTilt = true,
  enableKenBurns = true,
}: AnimatedImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [imgSrc, setImgSrc] = useState(src);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 20 });

  const aspectClass =
    aspect === "square" ? "aspect-square" : aspect === "video" ? "aspect-video" : "";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl group ${aspectClass} ${className}`}
      style={enableTilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 z-20 pointer-events-none" />

      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.2, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.img
          src={imgSrc}
          alt={alt}
          className="w-full h-full object-cover"
          animate={enableKenBurns && isInView ? { scale: [1, 1.06, 1] } : {}}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          onError={() => setImgSrc("/placeholder.svg")}
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

      <motion.div
        className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)",
        }}
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 1.8, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
      />

      {overlay && <div className="absolute inset-0 z-20">{overlay}</div>}
    </motion.div>
  );
}
