
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
      title: "Task Management App",
      description: "A productivity app that helps users organize tasks, set deadlines, and track progress.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800",
      tags: ["React Native", "Firebase", "Redux"],
      category: "mobile",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com/username/project"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather app that displays current conditions and forecasts for any location.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "web",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com/username/project"
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A dashboard that aggregates analytics from multiple social media platforms.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      tags: ["React", "Chart.js", "Social APIs"],
      category: "dashboard",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com/username/project"
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts, nutrition, and fitness progress.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800",
      tags: ["React Native", "Firebase", "HealthKit"],
      category: "mobile",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com/username/project"
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "dashboard", label: "Dashboard" }
  ];

  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h1>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A collection of my recent work spanning web applications, mobile apps, and interactive experiences.
            </p>
          </Reveal>

          <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id 
                      ? "bg-primary text-white" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
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
                  liveUrl={project?.liveUrl?? ""}
                  githubUrl={project.githubUrl ?? ""}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
