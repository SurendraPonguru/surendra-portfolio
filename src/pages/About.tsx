
import ParticleBackground from "@/components/animations/ParticleBackground";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ArrowRight,Download } from "lucide-react";
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[500px] lg:h-[650px] order-1 lg:order-1">
              <FloatingElement className="absolute top-[20%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px]">
                <div className="w-full h-full rounded-full bg-gradient-primary opacity-30 filter blur-xl"></div>
              </FloatingElement>
              
              <FloatingElement className="absolute top-[20%] left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] overflow-hidden rounded-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/public/images/ebc6f922-f187-4c31-909d-3012ff5fb66b.png"
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
                I am a passionate front-end developer with over 3 years of experience in building dynamic and responsive web applications using React and Angular . My journey in the tech industry has equipped me with a strong understanding of modern web technologies and user-centered design principles.                </p>
              </Reveal>
              <Reveal>
                <p className="text-lg text-muted-foreground mb-8">
                In addition to my development skills, I have a keen eye for design and proficiency in UX design using Figma . This combination allows me to bridge the gap between design and development, ensuring that the user experience is both seamless and visually appealing.
I am currently working at Kanerika Software Pvt Ltd , where I've been involved in developing scalable front-end solutions for various clients. My work involves collaborating closely with cross-functional teams to deliver high-quality products that meet client requirements and exceed user expectations.     </p>
              </Reveal>
               <Reveal className="flex gap-4">
                <Button asChild variant="default" className="bg-gradient-primary hover:bg-gradient-primary/90">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => window.open('/FIle/Surendra Ponguru - Front-end Developer.pdf', '_blank')}
                  >
                    <Download className="ml-2 h-4 w-4" />
                    Resume
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
