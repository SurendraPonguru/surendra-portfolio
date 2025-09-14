
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
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center relative z-10 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                Let's Connect & Create
              </h1>
            </Reveal>
            <Reveal>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 relative z-10">
                Ready to turn ideas into reality? I'm here to collaborate, innovate, and build something extraordinary together.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Reveal>
              <motion.div 
                className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 border border-border/30 hover:border-primary/50 transition-all duration-500 relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={false}
                />
                
                <div className="relative z-10">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Contact Information
                  </h2>
                  <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 md:mb-8">
                    <motion.div 
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                        <span className="text-sm sm:text-base md:text-lg">📍</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.address}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                        <span className="text-sm sm:text-base md:text-lg">📧</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.email}</p>
                      </div>
                    </motion.div>
                    <motion.div 
                      className="flex items-start space-x-3 p-3 rounded-xl hover:bg-primary/5 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mt-1 backdrop-blur-sm">
                        <span className="text-sm sm:text-base md:text-lg">📱</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.phoneNumber}</p>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="relative h-36 sm:h-40 md:h-48 rounded-xl overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <img 
                      src="/images/1d25e8b1-1535-4f3b-9b1d-7fada51486f6.png" 
                      alt="Hyderabad Cityscape" 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                    <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white">
                      <h3 className="font-bold">Hyderabad</h3>
                      <p className="text-xs md:text-sm">Available for remote work</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </Reveal>

            <Reveal>
              <div className="space-y-6">
                <div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Connect With Me
                  </h2>
                  <SocialLinks />
                </div>
                
                {/* Resume Section */}
                <motion.div 
                  className="p-4 sm:p-5 md:p-6 bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm rounded-2xl border border-border/30 hover:border-accent/50 transition-all duration-500"
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mb-3 text-center">My Resume</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground text-center mb-4">
                    Take a detailed look at my experience and skills
                  </p>
                  <div className="flex justify-center">
                    <ResumeViewer 
                      resumeUrl="/FIle/Surendra Ponguru - Application Developer.pdf"
                      resumeTitle="Surendra Ponguru - Application Developer"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="p-4 sm:p-5 md:p-6 relative bg-gradient-to-br from-primary via-accent to-primary rounded-2xl text-white overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-20 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"
                    animate={{
                      backgroundPosition: ["0px 0px", "16px 16px"],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                  
                  {/* Floating orbs */}
                  <motion.div
                    className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/10 blur-xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                  
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Ready to Innovate?</h3>
                    <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
                      Let's transform your vision into digital reality. I specialize in creating modern, scalable applications that make an impact.
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-xs md:text-sm">
                        <span className="font-semibold">Response time:</span> Usually within 24 hours
                      </p>
                      <motion.div
                        className="w-3 h-3 bg-green-400 rounded-full"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
