
import { ReactNode } from "react";

interface FloatingImagesProps {
  images: string[];
  className?: string;
}

export default function FloatingImages({ images, className = "" }: FloatingImagesProps) {
  return (
    <div className={`relative w-full h-full ${className}`}>
      {images.map((src, index) => (
        <div
          key={index}
          className={`absolute rounded-lg overflow-hidden shadow-lg animate-float`}
          style={{
            top: `${10 + Math.random() * 60}%`,
            left: `${10 + Math.random() * 60}%`,
            zIndex: index,
            animationDelay: `${index * 0.5}s`,
            transform: `rotate(${Math.random() * 10 - 5}deg)`,
          }}
        >
          <img
            src={src}
            alt=""
            className="w-24 h-24 md:w-32 md:h-32 object-cover"
          />
        </div>
      ))}
    </div>
  );
}

export function FloatingElement({ 
  children, 
  className = "", 
  delay = 0 
}: { 
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <div
      className={`animate-float ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );
}
