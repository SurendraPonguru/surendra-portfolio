
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
      
      <section className="relative min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="container-home grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
            <div className="order-2 lg:order-1">
              <Reveal>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                  Welcome to my portfolio
                </span>
              </Reveal>
              <Reveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Hi, I'm 
                  <br />
                  <span className="gradient-text">{ProfileDetails.name}</span>
                  <br />
                  <span className="text-3xl md:text-4xl lg:text-5xl">{ProfileDetails.domain}</span>
                </h1>
              </Reveal>
              <Reveal>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  I create engaging digital experiences with attention to detail and a focus on user experience.
                </p>
              </Reveal>
              <Reveal>
                <div className="flex flex-wrap gap-4">
                  <Button asChild variant="default" size="lg" className="bg-gradient-primary hover:bg-gradient-primary/90">
                    <Link to="/projects">
                      View Projects
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a href="#" download>
                      <Download className="mr-2 h-4 w-4" />
                      Resume
                    </a>
                  </Button>
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[500px] lg:h-[700px] -mt-14">
              <FloatingElement className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px]">
                <div className="w-full h-full rounded-full bg-gradient-primary animate-blob opacity-60 filter blur-xl"></div>
              </FloatingElement>

              <FloatingElement delay={0.2} className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[400px] md:h-[400px]">
                <div className="w-full h-full rounded-full bg-gradient-accent animate-blob opacity-50 filter blur-xl"></div>
              </FloatingElement>

              <FloatingElement className="absolute top-[38%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 md:w-[450px] md:h-[450px] overflow-hidden rounded-full">
                <div className="w-full h-full overflow-hidden">
                  <img
                    src="/public/lovable-uploads/ebc6f922-f187-4c31-909d-3012ff5fb66b.png"
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                I specialize in creating engaging digital experiences with a focus on both aesthetics and functionality.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <div className="bg-card p-6 rounded-xl relative overflow-hidden card-hover border border-border/50">
                  <div className="absolute top-0 right-0 opacity-5 text-9xl font-bold -mt-4 -mr-4">{service.icon}</div>
                  <div className="text-3xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Work Together</h2>
          </Reveal>
          <Reveal>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
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
