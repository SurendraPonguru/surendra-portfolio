
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
    <motion.article
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 hover:border-primary/40 transition-colors duration-500 h-[320px]"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          src={imgSrc}
          alt={title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          whileHover={{ scale: 1.18 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onError={() => setImgSrc("/placeholder.svg")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20 opacity-70 group-hover:opacity-95 transition-opacity duration-500" />

        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.06) 50%, transparent 65%)",
          }}
          animate={{ x: ["-100%", "200%"] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 2.5 }}
        />
      </div>

      <div className="absolute top-4 right-4 flex gap-2 z-20 translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-400 delay-75">
        {liveUrl && (
          <Button
            asChild
            size="icon"
            className="h-10 w-10 rounded-xl bg-primary hover:bg-primary/90 shadow-lg"
          >
            <a href={liveUrl} target="_blank" rel="noreferrer" title="View Demo" onClick={(e) => e.stopPropagation()}>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button
            asChild
            size="icon"
            variant="outline"
            className="h-10 w-10 rounded-xl bg-background/90 backdrop-blur-sm border-border"
          >
            <a href={githubUrl} target="_blank" rel="noreferrer" title="View Code" onClick={(e) => e.stopPropagation()}>
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
        <motion.div
          className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-400"
        >
          <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-400">
            <div className="overflow-hidden">
              <p className="text-muted-foreground text-sm mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                {description}
              </p>
              {tags && (
                <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-lg bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-colors duration-400 rounded-tl-2xl z-20" />
      <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-accent/0 group-hover:border-accent/60 transition-colors duration-400 rounded-br-2xl z-20" />
    </motion.article>
  );
}
