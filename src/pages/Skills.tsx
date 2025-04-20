
import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import SkillCard from "@/components/skills/SkillCard";
import { FloatingElement } from "@/components/animations/FloatingImages";

export default function Skills() {
  const technicalSkills = [
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      level: 95,
      color: "bg-yellow-500",
      description: "Modern ES6+, async/await, functional programming"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      level: 90,
      color: "bg-blue-500",
      description: "React hooks, context API, custom hooks"
    },
    {
      name: "Angular",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
      level: 90,
      color: "bg-green-600",
      description: "Components, services, routing, RxJS"
    },
    {
      name: "CSS & Tailwind",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      level: 85,
      color: "bg-sky-600",
      description: "Responsive design, animations, custom utilities"
    },
    // {
    //   name: "Node.js",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    //   level: 80,
    //   color: "bg-green-600",
    //   description: "RESTful APIs, Express, middleware"
    // },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      level: 75,
      color: "bg-blue-600",
      description: "Type definitions, interfaces, generics"
    },
    // {
    //   name: "MongoDB",
    //   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    //   level: 70,
    //   color: "bg-green-500",
    //   description: "Schema design, aggregation, indexing"
    // }
  ];

  const otherSkills = [
    {
      name: "UI/UX Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      level: 80,
      color: "bg-purple-500",
      description: "User flows, wireframing, prototyping"
    },
    {
      name: "Git & GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      level: 85,
      color: "bg-orange-500",
      description: "Version control, branching strategies, CI/CD"
    },
    {
      name: "Performance Optimization",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
      level: 75,
      color: "bg-blue-500",
      description: "Lazy loading, code splitting, bundle optimization"
    },
    {
      name: "Responsive Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      level: 90,
      color: "bg-red-500",
      description: "Mobile first, adaptive layouts, media queries"
    }
  ];

  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-16">
            <FloatingElement className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            <FloatingElement delay={0.5} className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full bg-accent/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            
            <Reveal>
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center relative z-10">My Skills</h1>
            </Reveal>
            <Reveal>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 relative z-10">
                I've developed expertise in various technologies and methodologies over my career, with a focus on front-end development and user experience.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Technical Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {technicalSkills.map((skill, index) => (
              <Reveal key={skill.name}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                  description={skill.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-2xl font-bold mb-8">Other Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-16">
            {otherSkills.map((skill, index) => (
              <Reveal key={skill.name}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                  description={skill.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative bg-gradient-to-r from-primary to-accent p-8 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="relative z-10 text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="mb-6 text-white/90">
                  Technology evolves rapidly, and I'm committed to staying current with the latest tools and best practices. I'm currently exploring:
                </p>
                <div className="flex flex-wrap gap-3">
                {/* "Web3", "Next.js", "GraphQL", "Karma", "Docker" */}
                  {["Web3", "Jasmine", "Karma", "Docker"].map((tech) => (
                    <span key={tech} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
