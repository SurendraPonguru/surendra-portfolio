
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";

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
  tags,
  liveUrl,
  githubUrl,
}: ProjectCardProps) {
  const [imgSrc, setImgSrc] = useState(image);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 h-[300px]"
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={() => setImgSrc("/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 p-6 flex flex-col justify-end">

        {/* Action buttons - Slide in from right */}
        <div className="absolute top-4 right-4 flex gap-2 translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 delay-100">
          {liveUrl && (
            <Button
              asChild
              size="icon"
              variant="default"
              className="h-10 w-10 rounded-full bg-primary hover:bg-primary/80 shadow-lg shadow-primary/25"
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
              className="h-10 w-10 rounded-full bg-background/90 hover:bg-background border-primary/50"
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

        {/* Text Content - Slide up */}
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{title}</h3>

          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300">
            <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
              {description}
            </p>

            {tags && (
              <div className="flex flex-wrap gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                {tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Decorative corners for gaming look */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/50 transition-colors duration-300 rounded-br-xl" />
    </motion.div>
  );
}
