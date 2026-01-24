import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface EnhancedProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function EnhancedProfileImage({ src, alt, className = "" }: EnhancedProfileImageProps) {
  const imageRef = useRef<HTMLImageElement>(null);

  return (
    <div className={`relative ${className}`}>
      {/* Enhanced background effects */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: "conic-gradient(from 0deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
          filter: "blur(10px)",
          opacity: 0.2,
        }}
      />

      {/* Pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-full border-2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.2, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          borderColor: "hsl(var(--primary))",
        }}
      />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: `hsl(var(${i % 2 === 0 ? '--primary' : '--accent'}))`,
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * 60 * Math.PI / 180) * 100],
            y: [0, Math.sin(i * 60 * Math.PI / 180) * 100],
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main image container */}
      <motion.div
        className="relative z-10 w-full h-full rounded-full overflow-hidden"
        animate={{
          y: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <motion.img
          ref={imageRef}
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "/placeholder.svg";
          }}
        />

        {/* Overlay gradient for better integration */}
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{
            background: "radial-gradient(circle at center, transparent 60%, hsl(var(--primary) / 0.1) 100%)",
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full pointer-events-none"
        animate={{
          boxShadow: [
            "0 0 20px hsl(var(--primary) / 0.3)",
            "0 0 40px hsl(var(--accent) / 0.4)",
            "0 0 20px hsl(var(--primary) / 0.3)",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}