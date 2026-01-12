
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
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-background/80 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Action buttons */}
      <div className="absolute top-4 right-4 flex flex-col gap-2 group-hover:opacity-100 transition-opacity duration-300 z-10">
        {liveUrl && (
          <Button
            asChild
            size="icon"
            variant="default"
            className="h-10 w-10 rounded-full"
          >
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              title="View Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button
            asChild
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-full bg-background/90"
          >
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              title="View Code"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-100 transition-opacity duration-300">
        <h3 className="text-lg font-semibold text-foreground mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  );
}
