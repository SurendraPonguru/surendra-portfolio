
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { Button } from "@/components/ui/button";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [displayText, setDisplayText] = useState("SP");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const fullText = "Surendra Ponguru";
    const shortText = "SP";
    
    if (isLogoHovered) {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);
      
      return () => clearInterval(typingInterval);
    } else {
      setDisplayText(shortText);
    }
  }, [isLogoHovered]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Only track sections on home page
      if (!isHomePage) return;
      
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    if (isHomePage) {
      const element = document.getElementById(sectionId);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = isHomePage 
    ? [
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "projects", label: "Projects" },
        { id: "skills", label: "Skills" },
        { id: "contact", label: "Contact" },
      ]
    : [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/skills", label: "Skills" },
        { path: "/contact", label: "Contact" },
      ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-lg shadow-sm" : "py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="group flex items-center gap-2 hover-scale"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <div className="relative">
              <img 
                src="/images/32e785d4-d1ae-4c9a-a15b-3475263700e6.png" 
                alt="Profile" 
                className="w-8 h-8 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-xl font-playfair font-bold gradient-text relative min-w-[40px]">
              {displayText}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"></span>
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              isHomePage ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`nav-link ${activeSection === link.id ? "active" : ""}`}
                >
                  {link.label}
                </button>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `nav-link ${isActive ? "active" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            ))}
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="ml-2 rounded-full hover:bg-primary/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme}
              className="mr-2 rounded-full hover:bg-primary/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMobileMenu}
              className="rounded-full hover:bg-primary/10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background z-40 md:hidden transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ top: "var(--header-height, 70px)" }}
      >
        <nav className="flex flex-col py-8 px-8 space-y-6">
          {navLinks.map((link) => (
            isHomePage ? (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl nav-link text-left ${activeSection === link.id ? "active" : ""}`}
              >
                {link.label}
              </button>
            ) : (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => 
                  `text-xl nav-link ${isActive ? "active" : ""}`
                }
              >
                {link.label}
              </NavLink>
            )
          ))}
        </nav>
      </div>
    </header>
  );
}
