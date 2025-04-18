import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function About() {
  const experiences = [
    {
      year: "2022 - Present",
      title: "Senior Developer",
      company: "Tech Company",
      description: "Lead developer on multiple projects, managing a team of 5 developers and implementing best practices."
    },
    {
      year: "2019 - 2022",
      title: "Web Developer",
      company: "Digital Agency",
      description: "Developed responsive websites and web applications for various clients, focusing on performance and user experience."
    },
    {
      year: "2017 - 2019",
      title: "Junior Developer",
      company: "Startup Inc",
      description: "Worked on the front-end of web applications, learning best practices and collaborating with senior developers."
    }
  ];

  const education = [
    {
      year: "2015 - 2017",
      degree: "Master's in Computer Science",
      institution: "University Name",
    },
    {
      year: "2011 - 2015",
      degree: "Bachelor's in Computer Science",
      institution: "University Name",
    }
  ];

  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen">
        <div className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[400px] lg:h-[600px] order-1 lg:order-1">
              <FloatingElement className="absolute left-[10%] top-[10%] w-64 h-80 bg-gradient-primary/10 rounded-2xl backdrop-blur-sm" delay={0.5}>
                <div />
              </FloatingElement>
              <FloatingElement className="absolute right-[10%] bottom-[10%] w-64 h-80 bg-gradient-accent/10 rounded-2xl backdrop-blur-sm" delay={0.3}>
                <div />
              </FloatingElement>
              
              <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-96 overflow-hidden rounded-2xl">
                <div className="w-full h-full glass overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                    alt="About Me"
                    className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                  />
                </div>
              </FloatingElement>
            </div>

            <div className="order-2 lg:order-2">
              <Reveal>
                <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="text-lg text-muted-foreground mb-6">
                  I'm a passionate developer with over 5 years of experience creating beautiful, functional websites and applications. I specialize in front-end development with a focus on user experience and performance.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-muted-foreground mb-8">
                  My journey in web development started when I was in college, and I've been in love with creating digital experiences ever since. I enjoy solving complex problems and turning ideas into reality through code.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
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
              {experiences.map((exp, index) => (
                <Reveal key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 shadow-md card-hover border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{exp.title} @ {exp.company}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {exp.year}
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
                <Reveal key={index} delay={index * 0.1}>
                  <div className="bg-card rounded-xl p-6 shadow-md card-hover border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-bold">{edu.degree}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-lg">{edu.institution}</p>
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
