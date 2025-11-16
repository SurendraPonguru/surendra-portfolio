
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
      className="relative rounded-2xl p-3 sm:p-4 md:p-6 bg-card group border border-border hover:border-primary transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4">
        <div 
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center border border-primary/20 group-hover:border-primary transition-all duration-300`}
        >
          <img src={icon} alt={name} className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors duration-300">{name}</h3>
      </div>
      
      <div className="mt-2 sm:mt-3 md:mt-4">
        <div className="flex justify-between text-xs md:text-sm mb-2 font-medium">
          <span className="text-muted-foreground">Proficiency</span>
          <span className="text-primary font-bold">{level}%</span>
        </div>
        <div className="w-full h-2 sm:h-2.5 md:h-3 bg-secondary rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-500 ease-out`}
            style={{ width: `${level}%` }}
          />
        </div>
      </div>

      {description && (
        <div className="mt-2 sm:mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground">
          <p className="line-clamp-2">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
