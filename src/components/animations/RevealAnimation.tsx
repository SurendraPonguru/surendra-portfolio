
import { useEffect, useRef, ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  once?: boolean;
  className?: string;
}

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.5,
  once = true,
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add a base delay of 0.5s plus any additional delay
            element.style.transitionDelay = `${0.5 + delay}s`;
            element.classList.add("animate-fade-in");
            if (once) observer.unobserve(element);
          } else if (!once) {
            element.classList.remove("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [once, delay]);
  
  const getInitialStyles = () => {
    let transform = "";
    let opacity = "0";
    
    switch (direction) {
      case "up":
        transform = "translateY(40px)";
        break;
      case "down":
        transform = "translateY(-40px)";
        break;
      case "left":
        transform = "translateX(40px)";
        break;
      case "right":
        transform = "translateX(-40px)";
        break;
      default:
        transform = "translateY(40px)";
    }
    
    return { transform, opacity };
  };
  
  return (
    <div
      ref={ref}
      className={`transition-all ${className}`}
      style={{
        ...getInitialStyles(),
        transitionDuration: `${duration}s`,
      }}
    >
      {children}
    </div>
  );
}
