
import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import SocialLinks from "@/components/contact/SocialLinks";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { socialMedia, ProfileDetails } from "@/assests/context";

export default function Contact() {
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
              <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center relative z-10">Get In Touch</h1>
            </Reveal>
            <Reveal>
              <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12 relative z-10">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <Reveal>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-muted-foreground">{ProfileDetails.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-muted-foreground">{ProfileDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-muted-foreground">{ProfileDetails.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-60 rounded-xl overflow-hidden">
                  <img 
                    src="/images/1d25e8b1-1535-4f3b-9b1d-7fada51486f6.png" 
                    alt="Hyderabad Cityscape" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="font-bold">Hyderabad</h3>
                    <p className="text-sm">Available for remote work</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
                <SocialLinks />
                
                <div className="mt-12 p-6 bg-gradient-primary rounded-xl text-white">
                  <h3 className="text-xl font-bold mb-4">Looking for a developer?</h3>
                  <p className="mb-4">
                    I'm currently available for freelance work and open to discussing new opportunities. Let's create something amazing together!
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Response time:</span> Usually within 24 hours
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
