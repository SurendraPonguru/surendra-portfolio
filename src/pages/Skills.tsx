
import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import SkillCard from "@/components/skills/SkillCard";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { technicalSkills ,otherSkills ,learningSkills} from "@/assests/context";

export default function Skills() {

  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-10 md:mb-16">
            <FloatingElement className="absolute -top-20 -left-20 w-48 md:w-64 h-48 md:h-64 rounded-full bg-primary/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            <FloatingElement delay={0.5} className="absolute -bottom-20 -right-20 w-48 md:w-64 h-48 md:h-64 rounded-full bg-accent/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            
            <Reveal>
              <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center relative z-10">My Skills</h1>
            </Reveal>
            <Reveal>
              <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-10">
                I've developed expertise in various technologies and methodologies over my career, with a focus on front-end development and user experience.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-8">Technical Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
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
            <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-8">Other Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-12 md:mb-16">
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
            <div className="relative bg-gradient-to-r from-primary to-accent p-6 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
              
              <div className="relative z-10 text-white">
                <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="mb-4 md:mb-6 text-white/90 text-sm md:text-base">
                  Technology evolves rapidly, and I'm committed to staying current with the latest tools and best practices. I'm currently exploring:
                </p>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {learningSkills.map((tech) => (
                    <span key={tech} className="bg-white/20 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
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
