
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
      className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/25 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 transform group-hover:scale-110"
        />
      </div>

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/95 via-card/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Action buttons - right side */}
      <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-150 z-10">
        {liveUrl && (
          <Button 
            asChild 
            size="icon" 
            variant="default" 
            className="h-12 w-12 rounded-full shadow-xl backdrop-blur-md bg-primary hover:bg-primary/90 hover:scale-110 transition-all duration-300"
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
            className="h-12 w-12 rounded-full shadow-xl backdrop-blur-md bg-background/90 border-primary/30 hover:bg-primary/10 hover:border-primary hover:scale-110 transition-all duration-300"
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
