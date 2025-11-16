
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Settings } from "lucide-react";
import ParticleBackground from "@/components/animations/ParticleBackground";
import { FloatingElement } from "@/components/animations/FloatingImages";
import Reveal from "@/components/animations/RevealAnimation";
import { ProfileDetails, workExperience, education, technicalSkills, otherSkills, learningSkills } from "@/assests/context";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import SkillCard from "@/components/skills/SkillCard";
import ProjectCard from "@/components/projects/ProjectCard";
import SocialLinks from "@/components/contact/SocialLinks";
import EnhancedProfileImage from "@/components/animations/EnhancedProfileImage";
import AchievementsSection from "@/components/achievements/AchievementsSection";
import CustomizationPanel from "@/components/customization/CustomizationPanel";
import { motion } from "framer-motion";
import ResumeViewer from "@/components/contact/ResumeViewer";
import { useInteractionTracking } from "@/hooks/useAnalytics";
import { useScrollTracking } from "@/components/analytics/AnalyticsWrapper";

export default function Home() {
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { trackClick } = useInteractionTracking();
  
  // Enable scroll tracking
  useScrollTracking();
  
  const { ref: homeRef, inView: homeInView } = useInView({ threshold: 0.3 });
  const { ref: aboutRef, inView: aboutInView } = useInView({ threshold: 0.3 });
  const { ref: projectsRef, inView: projectsInView } = useInView({ threshold: 0.3 });
  const { ref: skillsRef, inView: skillsInView } = useInView({ threshold: 0.3 });
  const { ref: contactRef, inView: contactInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (skillsInView) setActiveSection("skills");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, projectsInView, skillsInView, contactInView]);

  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "Experience products in a new dimension. Interact, explore, and shop in our reimagined digital space.",
      image: "/images/Surtel.png",
      tags: ['React' ,'Tailwind CSS','shadcn-ui','TypeScript'],
      category: "web",
      liveUrl: "https://surtel-mobilestore.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/surtel-mobilestore"
    },
    {
      id: 2,
      title: "Portfolio Template",
      description: "A customizable portfolio template for developers and designers to showcase their work.",
      image: "/images/32e785d4-d1ae-4c9a-a15b-3475263700e6.png",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      category: "web",
      liveUrl: "https://surendra-portfolio-three.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/surendra-portfolio"
    },
    {
      id: 3,
      title: "AI Virtual Assistant [ Aiva Chat]",
      description: "AivaChat is a modern, responsive chatbot application .",
      image: "/images/Aivalogo.svg",
      tags: ["React", "TypeScript", "Tailwind CSS","Gemini API"],
      category: "web",
      liveUrl: "https://aiva-chat-surendrapongurus-projects.vercel.app/",
      githubUrl: "https://github.com/SurendraPonguru/AivaChat"
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather app that displays current conditions and forecasts for any location.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=800",
      tags: ["JavaScript", "API Integration", "CSS3"],
      category: "web",
    },
    {
      id: 5,
      title: "Social Media Dashboard",
      description: "A dashboard that aggregates analytics from multiple social media platforms.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      tags: ["React", "Chart.js", "Social APIs"],
      category: "dashboard",
    },
    {
      id: 6,
      title: "Fitness Tracker",
      description: "A mobile app for tracking workouts, nutrition, and fitness progress.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800",
      tags: ["React Native", "Firebase", "HealthKit"],
      category: "mobile",
    }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: "all", label: "All" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "dashboard", label: "Dashboard" }
  ];

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const nameText = ProfileDetails.name;
  const domainText = ProfileDetails.domain;

  return (
    <>
      <ParticleBackground />
      
      {/* Customization Panel - Commented out */}
      {/* <CustomizationPanel 
        isOpen={isCustomizationOpen} 
        onClose={() => setIsCustomizationOpen(false)} 
      /> */}

      {/* Floating customization button - Commented out */}
      {/* <motion.div
        className="fixed top-20 right-6 z-40"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsCustomizationOpen(true)}
          className="rounded-full w-12 h-12 p-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-primary to-accent"
          title="Customize Portfolio"
        >
          <Settings className="w-5 h-5" />
        </Button>
      </motion.div> */}
      
      {/* Home Section */}
      <section id="home" ref={homeRef} className="relative min-h-[320px] sm:min-h-[450px] md:min-h-[85vh] flex items-center py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="order-2 lg:order-1 space-y-3 sm:space-y-4">
              <Reveal>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-2">
                  Welcome to my portfolio
                </span>
              </Reveal>
              <motion.div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-tight">
                  Hi, I'm 
                  <br />
                  <span className="gradient-text inline-block">
                    {nameText.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </span>
                  <br />
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-5xl inline-block">
                    {domainText.split('').map((letter, i) => (
                      <motion.span
                        key={i}
                        custom={i + nameText.length}
                        initial="hidden"
                        animate="visible"
                        variants={letterAnimation}
                        className="inline-block"
                      >
                        {letter === ' ' ? '\u00A0' : letter}
                      </motion.span>
                    ))}
                  </span>
                </h1>
              </motion.div>
              <Reveal>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-3 sm:mb-4 max-w-lg">
                  {ProfileDetails.about}
                </p>
              </Reveal>
              
              <Reveal>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 text-green-500 text-xs font-medium border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Available for Remote Work
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-500 text-xs font-medium border border-blue-500/20">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    Open to Freelance
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-500 text-xs font-medium border border-purple-500/20">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    Full-time Ready
                  </span>
                </div>
              </Reveal>
              
              <Reveal>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })} variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity sm:size-lg">
                    View Projects
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                  </Button>
                  <ResumeViewer resumeUrl={"/FIle/Surendra Ponguru - Application Developer.pdf"} resumeTitle={"Surendra Ponguru - Frontend Developer"} />
                  {/* <Button 
                    variant="outline" 
                    size="sm"
                    className="sm:size-lg"
                    onClick={() => window.open('/FIle/Surendra Ponguru - Application Developer.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Resume
                  </Button> */}
                </div>
              </Reveal>
            </div>
            
            <div className="order-1 lg:order-2 relative h-[260px] sm:h-[300px] md:h-[400px] lg:h-[400px] hidden md:block">
              <EnhancedProfileImage
                src="/images/ebc6f922-f187-4c31-909d-3012ff5fb66b.png"
                alt="Profile Image"
                className="absolute inset-0 m-auto w-80 md:w-96 lg:w-[28rem] h-80 md:h-96 lg:h-[28rem]"
              />
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

      {/* Achievements Section */}
      <AchievementsSection />

      {/* About Section */}
      <section id="about" ref={aboutRef} className="min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center mb-10 sm:mb-12 md:mb-16 lg:mb-20">
            <div className="relative h-[260px] sm:h-[300px] md:h-[350px] lg:h-[450px] order-1 lg:order-1">
              <EnhancedProfileImage
                src="/images/ebc6f922-f187-4c31-909d-3012ff5fb66b.png"
                alt="About Me"
                className="absolute inset-0 m-auto w-44 sm:w-52 md:w-60 lg:w-72 h-44 sm:h-52 md:h-60 lg:h-72"
              />
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
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="default" size="sm" className="bg-gradient-primary hover:opacity-90 transition-opacity sm:size-lg">
                  Contact Me
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </Button>
                <ResumeViewer resumeUrl={"/FIle/Surendra Ponguru - Application Developer.pdf"} resumeTitle={"Surendra Ponguru - Frontend Developer"} />
                
                {/* <Button 
                    variant="outline"
                    size="sm"
                    className="sm:size-lg"
                    onClick={() => window.open('/FIle/Surendra Ponguru - Application Developer.pdf', '_blank')}
                  >
                    <Download className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                    Resume
                  </Button> */}
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

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4">
          <Reveal>
            <h1 className="text-3xl md:text-4xl font-bold mb-3 text-center">My Projects</h1>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              A collection of my recent work spanning web applications, mobile apps, and interactive experiences.
            </p>
          </Reveal>

          {/* <Reveal>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    filter === category.id 
                      ? "bg-primary text-white" 
                      : "bg-secondary hover:bg-secondary/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </Reveal> */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Reveal key={project.id}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project?.image}
                  tags={project.tags}
                  liveUrl={project?.liveUrl?? ""}
                  githubUrl={project.githubUrl ?? ""}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" ref={skillsRef} className="min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-8 sm:mb-10 md:mb-16">
            <FloatingElement className="absolute inset-0 -translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-primary/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            <FloatingElement delay={0.5} className="absolute inset-0 translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-accent/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            
            <Reveal>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center relative z-10">My Skills</h1>
            </Reveal>
            <Reveal>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 relative z-10">
                I've developed expertise in various technologies and methodologies over my career, with a focus on front-end development and user experience.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-5 md:mb-8">Technical Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-16">
            {technicalSkills.map((skill, index) => (
              <Reveal key={skill.name}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                  description={skill.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-5 md:mb-8">Other Skills</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-16">
            {otherSkills.map((skill, index) => (
              <Reveal key={skill.name}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  level={skill.level}
                  color={skill.color}
                  description={skill.description}
                />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="relative bg-gradient-to-r from-primary to-accent p-4 sm:p-6 md:p-12 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 opacity-30 pattern-waves pointer-events-none" />
              
              <div className="relative z-10 text-white">
                <h3 className="text-lg sm:text-xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4">
                  Always Learning, Always Growing
                </h3>
                <p className="mb-3 sm:mb-4 md:mb-6 text-white/90 text-xs sm:text-sm md:text-base">
                  Technology evolves rapidly, and I'm committed to staying current with the latest tools and best practices. I'm currently exploring:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3">
                  {learningSkills.map((tech) => (
                    <span key={tech} className="bg-white/20 px-1.5 sm:px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" ref={contactRef} className="min-h-screen py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="relative mb-8 sm:mb-10 md:mb-16">
            <FloatingElement className="absolute inset-0 -translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-primary/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            <FloatingElement delay={0.5} className="absolute inset-0 translate-y-16 m-auto w-40 sm:w-48 md:w-64 h-40 sm:h-48 md:h-64 rounded-full bg-accent/10 filter blur-3xl opacity-70">
              <div />
            </FloatingElement>
            
            <Reveal>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 text-center relative z-10">Get In Touch</h1>
            </Reveal>
            <Reveal>
              <p className="text-xs sm:text-sm md:text-base text-muted-foreground text-center max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-12 relative z-10">
                I'm always open to new opportunities, collaborations, or just a friendly chat about technology and design.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <Reveal>
              <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 border border-border/50">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Contact Information</h2>
                <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6 md:mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-sm sm:text-base md:text-lg">📍</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-sm sm:text-base md:text-lg">📧</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.email}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 rounded-full bg-primary/10 flex items-center justify-center mt-1">
                      <span className="text-sm sm:text-base md:text-lg">📱</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground">{ProfileDetails.phoneNumber}</p>
                    </div>
                  </div>
                </div>
                <div className="relative h-36 sm:h-40 md:h-48 rounded-xl overflow-hidden">
                  <img 
                    src="/images/1d25e8b1-1535-4f3b-9b1d-7fada51486f6.png" 
                    alt="Hyderabad Cityscape" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-2 sm:left-3 md:left-4 text-white">
                    <h3 className="font-bold">Hyderabad</h3>
                    <p className="text-xs md:text-sm">Available for remote work</p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal>
              <div>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 md:mb-6">Connect With Me</h2>
                <SocialLinks />
                
                <div className="mt-6 sm:mt-8 md:mt-12 p-4 sm:p-5 md:p-6 relative bg-gradient-to-r from-primary to-accent rounded-2xl text-white overflow-hidden">
                  <div className="absolute inset-0 opacity-30 pattern-grid pointer-events-none" />
                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 md:mb-4">Looking for a developer?</h3>
                    <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 md:mb-4">
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
      
      {/* Call to Action */}
      <section className="relative py-14 md:py-20 bg-gradient-to-r from-primary to-accent text-white overflow-hidden">
        <div className="absolute inset-0 opacity-30 pattern-waves pointer-events-none" />
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
            <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              Get In Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Reveal>
        </div>
      </section>
    </>
  );
}
