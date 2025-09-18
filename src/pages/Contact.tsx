import ParticleBackground from "@/components/animations/ParticleBackground";
import Reveal from "@/components/animations/RevealAnimation";
import SocialLinks from "@/components/contact/SocialLinks";
import ResumeViewer from "@/components/contact/ResumeViewer";
import { FloatingElement } from "@/components/animations/FloatingImages";
import { ProfileDetails } from "@/assests/context";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <>
      <ParticleBackground />
      
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 blur-xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <section className="min-h-screen py-11 sm:py-10 md:py-20 relative">
        <div className="container mx-auto px-4">
          {/* Hero Section with Enhanced Styling */}
          <div className="relative mb-8 sm:mb-10 md:mb-16">
            <motion.div
              className="absolute inset-0 -translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 filter blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-0 translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 filter blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.6, 0.3, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
            />
            
            <Reveal>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-center relative z-10">
                <span className="gradient-text">Let's Connect</span>
                <br />
                <span className="text-foreground/80">& Create Together</span>
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-16 relative z-10 leading-relaxed">
                Ready to turn ideas into reality? I'm passionate about collaborating on innovative projects that make a difference. Let's discuss how we can build something extraordinary together.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
            {/* Contact Information - Spans 2 columns */}
            <div className="lg:col-span-2">
              <Reveal>
                <motion.div 
                  className="group glass p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-border/20"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className="relative z-10">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 gradient-text">
                      Get In Touch
                    </h2>
                    
                    <div className="space-y-4 sm:space-y-6">
                      <motion.div 
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-xl">📍</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base text-foreground">Location</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{ProfileDetails.address}</p>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-xl">✉️</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base text-foreground">Email</p>
                          <a 
                            href={`mailto:${ProfileDetails.email}`} 
                            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {ProfileDetails.email}
                          </a>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                        whileHover={{ x: 8 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-lg sm:text-xl">📱</span>
                        </div>
                        <div>
                          <p className="font-medium text-sm sm:text-base text-foreground">Phone</p>
                          <a 
                            href={`tel:${ProfileDetails.phoneNumber}`} 
                            className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                          >
                            {ProfileDetails.phoneNumber}
                          </a>
                        </div>
                      </motion.div>
                    </div>

                    {/* Location Image */}
                    <motion.div 
                      className="mt-6 sm:mt-8 rounded-2xl overflow-hidden border border-border/20"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <img
                        src="/images/506d2394-61d9-4fa5-b2d6-91a0655d3df5.png"
                        alt="Location"
                        className="w-full h-32 sm:h-40 md:h-48 object-cover"
                      />
                      <div className="p-3 sm:p-4 bg-card/80 backdrop-blur-sm">
                        <p className="text-xs sm:text-sm text-muted-foreground text-center">
                          📍 Currently based in {ProfileDetails.address}
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            </div>

            {/* Social Links & Resume - Spans 3 columns */}
            <div className="lg:col-span-3">
              <Reveal>
                <motion.div
                  className="group glass p-6 sm:p-8 rounded-3xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden border border-border/20 h-full"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                    initial={false}
                  />
                  
                  <div className="relative z-10 space-y-8">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold mb-6 gradient-text">
                        Connect With Me
                      </h3>
                      <SocialLinks />
                    </div>
                    
                    <div className="pt-6 border-t border-border/30">
                      <h3 className="text-lg sm:text-xl font-bold mb-4 gradient-text">
                        Download Resume
                      </h3>
                      <ResumeViewer 
                        resumeUrl="/FIle/Surendra Ponguru - Application Developer.pdf" 
                        resumeTitle="Surendra Ponguru - Frontend Developer"
                      />
                    </div>
                    
                    {/* Enhanced Call to Action */}
                    <motion.div
                      className="pt-6 border-t border-border/30"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <div className="bg-gradient-primary/10 rounded-2xl p-6 text-center border border-primary/20">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.05, 1],
                            rotate: [0, 2, -2, 0]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="mb-3"
                        >
                          🚀
                        </motion.div>
                        <h4 className="font-bold text-base sm:text-lg mb-2 gradient-text">Ready to Launch Your Project?</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          From concept to deployment, let's create something amazing together. 
                          I'm passionate about bringing innovative ideas to life.
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </Reveal>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="fixed top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-sm animate-float pointer-events-none" />
          <div className="fixed bottom-1/3 right-10 w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-sm animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
        </div>
      </section>
    </>
  );
}