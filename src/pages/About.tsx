
import ParticleBackground from "@/components/animations/ParticleBackground";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/animations/RevealAnimation";
import { workExperience, education } from "@/assests/context";

export default function About() {
  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[650px] order-1 lg:order-1">
              <FloatingElement className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px]">
                <div className="w-full h-full rounded-full bg-gradient-primary opacity-30 filter blur-xl"></div>
              </FloatingElement>
              
              <FloatingElement className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] overflow-hidden rounded-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/public/lovable-uploads/506d2394-61d9-4fa5-b2d6-91a0655d3df5.png"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FloatingElement>
            </div>

            <div className="order-2 lg:order-2">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
              </Reveal>
              <Reveal>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate developer with over 5 years of experience creating beautiful, functional websites and applications. I specialize in front-end development with a focus on user experience and performance.
                </p>
              </Reveal>
              <Reveal>
                <p className="text-lg text-muted-foreground mb-8">
                  My journey in web development started when I was in college, and I've been in love with creating digital experiences ever since. I enjoy solving complex problems and turning ideas into reality through code.
                </p>
              </Reveal>
              <Reveal>
                <Button asChild variant="default" className="bg-gradient-primary hover:bg-gradient-primary/90">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>

          <div className="mb-20">
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">My Experience</h2>
            </Reveal>
            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{exp.role} @ {exp.companyName}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-muted-foreground">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">Education</h2>
            </Reveal>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-lg">{edu.institution}</p>
                    <p className="text-lg">{edu.location}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
