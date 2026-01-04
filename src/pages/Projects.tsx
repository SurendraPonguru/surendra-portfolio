
import { useState } from "react";
import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import ProjectCard from "@/components/projects/ProjectCard";

export default function Projects() {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Experience products in a new dimension. Interact, explore, and shop in our reimagined digital space.",
      image: "/images/Surtel.png",
      tags: ['React' ,'Tailwind CSS','shadcn-ui','TypeScript'],
      category: "web",
      liveUrl: "https://surtel-mobilestore.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/surtel-mobilestore"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers and designers to showcase their work.",
      image: "/images/32e785d4-d1ae-4c9a-a15b-3475263700e6.png",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      category: "web",
      liveUrl: "https://surendra-portfolio-three.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/surendra-portfolio"
    },
    {
      id: 3,
      title: "AI Virtual Assistant [ Aiva Chat]",
      description: "AivaChat is a modern, responsive chatbot application .",
      image: "/images/Aivalogo.svg",
      tags: ["React", "TypeScript", "Tailwind CSS","Gemini API"],
      category: "web",
      liveUrl: "https://aiva-chat-surendrapongurus-projects.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/AivaChat"
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Full-Stack" },
    { id: "mobile", label: "Interactive" },
    { id: "dashboard", label: "Analytics" }
  ];

  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">Things I've Made</h1>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A collection of digital solutions combining modern design with cutting-edge functionality.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-3 mb-16">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`relative px-8 py-4 rounded-2xl transition-all duration-500 overflow-hidden group ${
                    filter === category.id
                      ? "bg-gradient-to-br from-primary to-accent text-white shadow-2xl shadow-primary/50 scale-110 border-2 border-primary/30"
                      : "bg-card text-foreground border-2 border-border hover:border-primary/50 hover:shadow-xl"
                  }`}
                  style={{
                    boxShadow: filter === category.id 
                      ? 'var(--shadow-primary), 0 0 30px hsl(var(--primary) / 0.3)' 
                      : 'var(--shadow-md)'
                  }}
                >
                  <div className="absolute inset-0 opacity-20 pattern-dots pointer-events-none" />
                  <span className="relative z-10 font-semibold">{category.label}</span>
                  {filter === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" 
                         style={{ animation: 'shimmer 2s infinite' }} />
                  )}
                </button>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <Reveal key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
