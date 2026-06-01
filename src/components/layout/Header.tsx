
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { useProfileSettings } from "@/context/ProfileSettingsContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const { toggleTheme, theme } = useTheme();
  const { headerProfile, openProfile } = useProfileSettings();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      if (!isHomePage) return;

      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 120;

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
    return () => window.removeEventListener("scroll", handleScroll);
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
      element?.scrollIntoView({ behavior: "smooth" });
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3 glass-strong shadow-lg border-b border-border/40"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={openProfile}
              className="relative rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="Open profile"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <img
                  src={headerProfile.avatarUrl}
                  alt={headerProfile.name}
                  className="w-9 h-9 rounded-xl object-cover ring-2 ring-primary/30 hover:ring-primary/60 transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "/placeholder.svg";
                  }}
                />
              </motion.div>
            </button>
            <NavLink
              to="/"
              className="text-lg font-display font-bold gradient-text hover:opacity-90 transition-opacity"
            >
              {headerProfile.name.split(" ")[0]}
            </NavLink>
          </div>

          <nav className="hidden md:flex space-x-1 items-center glass px-2 py-1.5 rounded-full">
            {navLinks.map((link) =>
              isHomePage ? (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id!)}
                  className={`nav-link px-4 rounded-full ${activeSection === link.id ? "active bg-primary/10" : ""}`}
                >
                  {link.label}
                </button>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path!}
                  className={({ isActive }) =>
                    `nav-link px-4 rounded-full ${isActive ? "active bg-primary/10" : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-1 rounded-full hover:bg-primary/10"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </nav>

          <div className="flex items-center md:hidden gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full hover:bg-primary/10"
            >
              {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="rounded-full hover:bg-primary/10"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2 glass-strong mt-2 mx-4 rounded-2xl">
              <button
                type="button"
                onClick={() => {
                  openProfile();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-3 text-left text-lg py-3 px-4 rounded-xl hover:bg-muted mb-2 border border-border/50"
              >
                <img
                  src={headerProfile.avatarUrl}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="font-semibold">View profile</span>
              </button>
              {navLinks.map((link, i) =>
                isHomePage ? (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => {
                      scrollToSection(link.id!);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left text-lg py-3 px-4 rounded-xl transition-colors ${
                      activeSection === link.id
                        ? "bg-primary/10 text-primary font-semibold"
                        : "hover:bg-muted"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path!}
                    className={({ isActive }) =>
                      `text-lg py-3 px-4 rounded-xl transition-colors ${
                        isActive ? "bg-primary/10 text-primary font-semibold" : "hover:bg-muted"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                )
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
