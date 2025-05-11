
import ParticleBackground from "@/components/animations/ParticleBackground";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Reveal from "@/components/animations/RevealAnimation";
import { workExperience, education, ProfileDetails } from "@/assests/context";

export default function About() {
  return (
    <>
      <ParticleBackground />

      <section className="min-h-screen">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-20">
            <div className="relative h-[350px] sm:h-[400px] lg:h-[500px] order-1 lg:order-1">
              <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96">
                <div className="w-full h-full rounded-full bg-gradient-primary opacity-30 filter blur-xl"></div>
              </FloatingElement>
              
              <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 sm:w-72 lg:w-[350px] h-60 sm:h-72 lg:h-[350px] overflow-hidden rounded-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/ebc6f922-f187-4c31-909d-3012ff5fb66b.png"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FloatingElement>
            </div>

            <div className="order-2 lg:order-2">
              <Reveal>
                <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">About Me</h1>
              </Reveal>
              <Reveal>
                <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                  {ProfileDetails.about}
                </p>
              </Reveal>
              <Reveal>
                <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
                In addition to my development skills, I have a keen eye for design and proficiency in UX design using Figma. This combination allows me to bridge the gap between design and development, ensuring that the user experience is both seamless and visually appealing.
I am currently working at {workExperience[0].companyName}, where I've been involved in developing scalable front-end solutions for various clients. My work involves collaborating closely with cross-functional teams to deliver high-quality products that meet client requirements and exceed user expectations.     </p>
              </Reveal>
              <Reveal className="flex flex-wrap gap-3 md:gap-4">
                <Button asChild variant="default" className="bg-gradient-primary hover:bg-gradient-primary/90">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button 
                    variant="outline"
                    onClick={() => window.open('/FIle/Surendra Ponguru - Front-end Developer.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
              </Reveal>
            </div>
          </div>

          <div className="mb-12 md:mb-20">
            <Reveal>
              <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">My Experience</h2>
            </Reveal>
            <div className="space-y-6 md:space-y-8">
              {workExperience.map((exp, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-5 md:p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-0">{exp.role} @ {exp.companyName}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-sm md:text-base text-muted-foreground">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8">Education</h2>
            </Reveal>
            <div className="space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-5 md:p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-3 md:mb-4">
                      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-0">{edu.degree}</h3>
                      <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-base md:text-lg">{edu.collegeName}</p>
                    <p className="text-base md:text-lg mb-2">{edu.location}</p>
                    <p className="text-sm md:text-base text-muted-foreground">{edu.description}</p>
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
