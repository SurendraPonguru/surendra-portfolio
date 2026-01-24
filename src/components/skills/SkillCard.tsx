
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
  const [imgSrc, setImgSrc] = useState(icon);

  return (
    <div
      className="relative rounded-2xl p-3 sm:p-4 md:p-6 bg-card group border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_0_30px_-5px_hsl(var(--primary)/0.3)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered ? `0 10px 40px -10px ${color.includes('bg-') ? `var(--${color.replace('bg-', '')})` : 'hsl(var(--primary))'}` : ''
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />

      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 relative z-10">
        <div
          className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl ${color} bg-opacity-20 flex items-center justify-center border border-primary/20 group-hover:border-primary transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
        >
          <img
            src={imgSrc}
            alt={name}
            className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 transition-all duration-300 drop-shadow-md"
            onError={() => setImgSrc("https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haskell/haskell-original.svg")} // Fallback or clear it
          />
        </div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold group-hover:text-primary transition-colors duration-300">{name}</h3>
      </div>

      <div className="mt-2 sm:mt-3 md:mt-4 relative z-10">
        <div className="flex justify-between text-xs md:text-sm mb-2 font-medium">
          <span className="text-muted-foreground group-hover:text-foreground transition-colors">Proficiency</span>
          <span className="text-primary font-bold">{level}%</span>
        </div>
        <div className="w-full h-2 sm:h-2.5 md:h-3 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full ${color} transition-all duration-1000 ease-out group-hover:brightness-125 relative overflow-hidden`}
            style={{ width: `${level}%` }}
          >
            <div className="absolute inset-0 bg-white/30 skew-x-12 -translate-x-full group-hover:animate-shimmer" />
          </div>
        </div>
      </div>

      {description && (
        <div className="mt-2 sm:mt-3 md:mt-4 text-xs md:text-sm text-muted-foreground relative z-10">
          <p className="line-clamp-2 group-hover:text-foreground/90 transition-colors">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
