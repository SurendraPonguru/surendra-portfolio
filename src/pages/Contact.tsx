
import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import SocialLinks from "@/components/contact/SocialLinks";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ProfileDetails } from "@/assests/context";

export default function Contact() {
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
              <h1 className="text-2xl md:text-4xl font-bold mb-3 text-center relative z-10">Get In Touch</h1>
            </Reveal>
            <Reveal>
              <p className="text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-8 md:mb-12 relative z-10">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <Reveal>
              <div className="bg-card rounded-2xl p-6 md:p-8 border border-border/50">
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Contact Information</h2>
                <div className="space-y-4 mb-6 md:mb-8">
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-base md:text-lg">📍</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{ProfileDetails.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-base md:text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{ProfileDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:space-x-4">
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-base md:text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{ProfileDetails.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-48 md:h-60 rounded-xl overflow-hidden">
                  <img 
                    src="/images/1d25e8b1-1535-4f3b-9b1d-7fada51486f6.png" 
                    alt="Hyderabad Cityscape" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 text-white">
                    <h3 className="font-bold">Hyderabad</h3>
                    <p className="text-xs md:text-sm">Available for remote work</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Connect With Me</h2>
                <SocialLinks />
                
                <div className="mt-8 md:mt-12 p-5 md:p-6 relative bg-gradient-to-r from-primary to-accent rounded-2xl text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">Looking for a developer?</h3>
                    <p className="text-sm md:text-base mb-3 md:mb-4">
                      I'm currently available for freelance work and open to discussing new opportunities. Let's create something amazing together!
                    </p>
                    <p className="text-xs md:text-sm">
                      <span className="font-semibold">Response time:</span> Usually within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
