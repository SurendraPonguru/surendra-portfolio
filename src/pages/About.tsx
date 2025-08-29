
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
        <div className="container mx-auto px-4 py-8 sm:py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="relative h-[260px] sm:h-[300px] md:h-[350px] lg:h-[450px] order-1 lg:order-1">
              <FloatingElement className="absolute inset-0 m-auto w-48 sm:w-56 md:w-64 lg:w-80 h-48 sm:h-56 md:h-64 lg:h-80">
                <div className="w-full h-full rounded-full bg-gradient-primary opacity-30 filter blur-xl"></div>
              </FloatingElement>
              
              <FloatingElement className="absolute inset-0 m-auto w-44 sm:w-52 md:w-60 lg:w-72 h-44 sm:h-52 md:h-60 lg:h-72 overflow-hidden rounded-full">
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
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">About Me</h1>
              </Reveal>
              <Reveal>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 md:mb-6">
                  {ProfileDetails.about}
                </p>
              </Reveal>
              <Reveal>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-5 md:mb-8">
                In addition to my development skills, I have a keen eye for design and proficiency in UX design using Figma. This combination allows me to bridge the gap between design and development, ensuring that the user experience is both seamless and visually appealing.
I am currently working at {workExperience[0].companyName}, where I've been involved in developing scalable front-end solutions for various clients. My work involves collaborating closely with cross-functional teams to deliver high-quality products that meet client requirements and exceed user expectations.     </p>
              </Reveal>
              <Reveal className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                <Button asChild variant="default" size="sm" className="bg-gradient-primary hover:bg-gradient-primary/90 sm:size-lg">
                  <Link to="/contact">
                    Contact Me
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Link>
                </Button>
                <Button 
                    variant="outline"
                    size="sm"
                    className="sm:size-lg"
                    onClick={() => window.open('/FIle/Surendra Ponguru - Application Developer.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Resume
                  </Button>
              </Reveal>
            </div>
          </div>

          <div className="mb-8 sm:mb-10 md:mb-16">
            <Reveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">My Experience</h2>
            </Reveal>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {workExperience.map((exp, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-4 sm:p-5 md:p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-0">{exp.role} @ {exp.companyName}</h3>
                      <span className="text-xs sm:text-sm text-primary font-medium px-2 sm:px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{exp.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 md:mb-8">Education</h2>
            </Reveal>
            <div className="space-y-4 sm:space-y-6 md:space-y-8">
              {education.map((edu, index) => (
                <Reveal key={index}>
                  <div className="bg-card rounded-xl p-4 sm:p-5 md:p-6 border border-border/50">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 sm:mb-3 md:mb-4">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 md:mb-0">{edu.degree}</h3>
                      <span className="text-xs sm:text-sm text-primary font-medium px-2 sm:px-3 py-1 rounded-full bg-primary/10 w-fit">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base md:text-lg">{edu.collegeName}</p>
                    <p className="text-sm sm:text-base md:text-lg mb-2">{edu.location}</p>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{edu.description}</p>
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
