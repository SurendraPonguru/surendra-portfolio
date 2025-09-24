
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
      className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
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
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

      {/* Action buttons - right side */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
        {liveUrl && (
          <Button asChild size="icon" variant="default" className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm">
            <a href={liveUrl} target="_blank" rel="noreferrer" title="View Demo">
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button asChild size="icon" variant="outline" className="h-10 w-10 rounded-full shadow-lg backdrop-blur-sm bg-background/80 border-border/50">
            <a href={githubUrl} target="_blank" rel="noreferrer" title="View Code">
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>

      {/* Content - bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>
    </div>
  );
}
