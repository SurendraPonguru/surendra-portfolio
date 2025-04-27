
import { Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { socialMedia } from "@/assests/context";

export default function Footer() {
  return (
    <footer className="py-12 mt-16 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">Surendra Ponguru</h3>
            <p className="text-sm text-muted-foreground max-w-xs">
              A showcase of my work, skills, and experience as a developer. Feel free to reach out for collaborations.
            </p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link>
              <Link to="/about" className="text-sm hover:text-primary transition-colors">About</Link>
              <Link to="/projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
              <Link to="/skills" className="text-sm hover:text-primary transition-colors">Skills</Link>
              <Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
            </nav>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href={socialMedia.github} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon hover:bg-primary/10"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a 
                href={socialMedia.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon hover:bg-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href={socialMedia.twitter} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon hover:bg-primary/10"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href={socialMedia.instagram} 
                target="_blank" 
                rel="noreferrer" 
                className="social-icon hover:bg-primary/10"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Surendra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
