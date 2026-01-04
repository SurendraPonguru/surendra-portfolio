
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border hover:border-primary/70 transition-all duration-500 transform hover:-translate-y-3 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        boxShadow: isHovered 
          ? 'var(--shadow-2xl), 0 0 40px hsl(var(--primary) / 0.4), inset 0 0 60px hsl(var(--primary) / 0.05)' 
          : 'var(--shadow-lg)'
      }}
    >
      {/* Animated border gradient */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-size-200 animate-gradient rounded-2xl blur-sm" 
             style={{ padding: '2px', margin: '-2px' }} />
      </div>

      <div className="aspect-video overflow-hidden relative rounded-t-2xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
        />
        {/* Shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-x-full group-hover:translate-x-full" 
             style={{ animation: isHovered ? 'shimmer 1.5s ease-in-out' : 'none' }} />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pattern-dots pointer-events-none transition-opacity duration-500" />

      {/* Action buttons - right side */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 z-10">
        {liveUrl && (
          <Button 
            asChild 
            size="icon" 
            variant="default" 
            className="h-12 w-12 rounded-full backdrop-blur-md bg-primary hover:bg-primary/90 hover:scale-125 transition-all duration-300 border-2 border-primary-foreground/20"
            style={{ boxShadow: 'var(--shadow-glow)' }}
          >
            <a 
              href={liveUrl} 
              target="_blank" 
              rel="noreferrer" 
              title="View Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button 
            asChild 
            size="icon" 
            variant="outline" 
            className="h-12 w-12 rounded-full backdrop-blur-md bg-background/90 border-2 border-primary/50 hover:bg-primary/10 hover:border-primary hover:scale-125 transition-all duration-300"
            style={{ boxShadow: 'var(--shadow-xl)' }}
          >
            <a 
              href={githubUrl} 
              target="_blank" 
              rel="noreferrer" 
              title="View Code"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        )}
      </div>

      {/* Content - bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 drop-shadow-sm">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300 drop-shadow-sm">
          {description}
        </p>
      </div>
    </div>
  );
}
