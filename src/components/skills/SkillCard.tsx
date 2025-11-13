
import { useState } from "react";

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
  description
}: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative rounded-2xl p-3 sm:p-4 md:p-6 bg-card overflow-hidden group border-2 border-border hover:border-primary/70 transition-all duration-500 transform hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? 'var(--shadow-2xl), 0 0 40px hsl(var(--primary) / 0.3), inset 0 0 60px hsl(var(--primary) / 0.05)' 
          : 'var(--shadow-lg)'
      }}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-primary bg-size-200 animate-gradient rounded-2xl blur-md" 
             style={{ padding: '2px', margin: '-2px' }} />
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 group-hover:opacity-20 pattern-dots pointer-events-none transition-opacity duration-500" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full pointer-events-none"
           style={{ animation: isHovered ? 'shimmer 1.5s ease-in-out' : 'none' }} />
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 relative z-10">
        <div 
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center border-2 border-primary/20 group-hover:border-primary/60 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
          style={{
            boxShadow: isHovered ? 'var(--shadow-primary)' : 'var(--shadow-sm)'
          }}
        >
          <img src={icon} alt={name} className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors duration-300">{name}</h3>
      </div>
      
      <div className="mt-2 sm:mt-3 md:mt-4 relative z-10">
        <div className="flex justify-between text-xs md:text-sm mb-2 font-medium">
          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">Proficiency</span>
          <span className="text-primary font-bold">{level}%</span>
        </div>
        <div className="w-full h-2 sm:h-2.5 md:h-3 bg-secondary rounded-full overflow-hidden border border-border/50 relative"
             style={{ boxShadow: 'var(--shadow-inner)' }}>
          <div 
            className={`h-full ${color} transition-all duration-1000 ease-out relative overflow-hidden`}
            style={{ 
              width: isHovered ? `${level}%` : `${level}%`,
              boxShadow: 'var(--shadow-glow)'
            }}
          >
            {/* Animated shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" 
                 style={{ animation: isHovered ? 'shimmer 2s infinite' : 'none' }} />
          </div>
        </div>
      </div>

      {description && (
        <div className="mt-2 sm:mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground relative z-10">
          <p className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300 group-hover:text-foreground/80">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
