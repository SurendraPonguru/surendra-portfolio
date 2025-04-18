
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
      className="relative rounded-xl p-6 shadow-md bg-card card-hover overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />
      
      <div className="flex items-center gap-4 mb-4">
        <div className={`w-12 h-12 rounded-lg ${color} bg-opacity-20 flex items-center justify-center`}>
          <img src={icon} alt={name} className="w-7 h-7" />
        </div>
        <h3 className="text-xl font-semibold">{name}</h3>
      </div>
      
      <div className="mt-4">
        <div className="flex justify-between text-sm mb-1">
          <span>Proficiency</span>
          <span>{level}%</span>
        </div>
        <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
          <div 
            className={`h-full ${color} transition-all duration-1000 ease-out`}
            style={{ width: isHovered ? `${level}%` : "0%" }}
          />
        </div>
      </div>

      {description && (
        <div className="mt-4 text-sm text-muted-foreground">
          <p className="line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
