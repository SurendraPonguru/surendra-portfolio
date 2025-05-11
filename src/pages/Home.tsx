
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import ParticleBackground from "@/components/animations/ParticleBackground";
import { FloatingElement } from "@/components/animations/FloatingImages";
import Reveal from "@/components/animations/RevealAnimation";
import { ProfileDetails } from "@/assests/context";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      
      <section className="relative min-h-[85vh] flex items-center py-12 sm:py-0">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-4">
              <Reveal>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
                  Welcome to my portfolio
                </span>
              </Reveal>
              <Reveal>
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm 
                  <br />
                  <span className="gradient-text">{ProfileDetails.name}</span>
                  <br />
                  <span className="text-2xl md:text-3xl lg:text-5xl">{ProfileDetails.domain}</span>
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-base md:text-lg text-muted-foreground mb-4 max-w-lg">
                  {ProfileDetails.about}
                </p>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Button asChild variant="default" size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                    <Link to="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => window.open('/FIle/Surendra Ponguru -- Front-end Developer.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[300px] sm:h-[400px] lg:h-[600px] -mt-0 lg:-mt-14">
              <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96">
                <div className="w-full h-full rounded-full bg-gradient-primary animate-blob opacity-60 filter blur-xl"></div>
              </FloatingElement>

              <FloatingElement delay={0.2} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80">
                <div className="w-full h-full rounded-full bg-gradient-accent animate-blob opacity-50 filter blur-xl"></div>
              </FloatingElement>

              <FloatingElement className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 overflow-hidden rounded-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/images/f2064bab-2dd2-4bda-bb6e-5bb417268395.png"
                    alt="Profile Image"
                    className="w-full h-full object-cover"
                  />
                </div>
              </FloatingElement>
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-10 md:mb-16">
              <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I specialize in creating engaging digital experiences with a focus on both aesthetics and functionality.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "Web Development",
                description: "Creating responsive and performance-optimized websites with modern technologies.",
                icon: "🌐",
                delay: 0.1,
              },
              {
                title: "UI/UX Design",
                description: "Designing intuitive and beautiful user interfaces with a focus on user experience.",
                icon: "🎨",
                delay: 0.2,
              },
              {
                title: "Mobile Apps",
                description: "Building cross-platform mobile applications that work seamlessly on all devices.",
                icon: "📱",
                delay: 0.3,
              },
            ].map((service, index) => (
              <Reveal key={index}>
                <div className="bg-card p-5 md:p-6 rounded-xl relative overflow-hidden card-hover border border-border/50">
                  <div className="absolute top-0 right-0 opacity-5 text-7xl md:text-9xl font-bold -mt-4 -mr-4">{service.icon}</div>
                  <div className="text-2xl md:text-3xl mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-14 md:py-20 bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <Reveal>
            <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">Let's Work Together</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/80 max-w-2xl mx-auto mb-6 md:mb-8 text-sm md:text-base">
              I'm always open to new projects and collaborations. Let's create something amazing together.
            </p>
          </Reveal>
          <Reveal>
            <Button asChild variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Link to="/contact">
                Get In Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
