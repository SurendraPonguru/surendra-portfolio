import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Type, Layout, Settings, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

interface CustomizationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface ColorTheme {
  name: string;
  primary: string;
  accent: string;
  background: string;
  preview: string;
}

interface FontOption {
  name: string;
  family: string;
  preview: string;
}

interface LayoutOption {
  name: string;
  description: string;
  preview: string;
}

const colorThemes: ColorTheme[] = [
  {
    name: "Default Purple",
    primary: "262 83% 58%",
    accent: "176 59% 88%",
    background: "0 0% 100%",
    preview: "bg-gradient-to-r from-purple-600 to-cyan-500",
  },
  {
    name: "Ocean Blue",
    primary: "210 100% 50%",
    accent: "195 100% 60%",
    background: "210 20% 98%",
    preview: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Sunset Orange",
    primary: "25 100% 55%",
    accent: "45 100% 60%",
    background: "25 20% 98%",
    preview: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    name: "Forest Green",
    primary: "120 60% 45%",
    accent: "90 60% 55%",
    background: "120 20% 98%",
    preview: "bg-gradient-to-r from-green-600 to-lime-500",
  },
  {
    name: "Rose Gold",
    primary: "350 80% 60%",
    accent: "30 80% 70%",
    background: "350 20% 98%",
    preview: "bg-gradient-to-r from-rose-500 to-amber-400",
  },
];

const themePresets = [
  {
    name: "Modern Purple",
    primary: "262 83% 58%",
    accent: "176 59% 88%",
    secondary: "214 32% 91%",
    font: "Poppins, sans-serif",
    headingFont: "Playfair Display, serif",
  },
  {
    name: "Ocean Professional",
    primary: "210 100% 50%",
    accent: "195 100% 75%",
    secondary: "210 32% 91%",
    font: "Inter, sans-serif",
    headingFont: "Inter, sans-serif",
  },
  {
    name: "Warm Creative",
    primary: "25 100% 55%",
    accent: "45 100% 75%",
    secondary: "25 32% 91%",
    font: "Poppins, sans-serif",
    headingFont: "Playfair Display, serif",
  },
  {
    name: "Nature Fresh",
    primary: "120 60% 45%",
    accent: "90 60% 75%",
    secondary: "120 32% 91%",
    font: "Inter, sans-serif",
    headingFont: "Poppins, sans-serif",
  },
  {
    name: "Elegant Rose",
    primary: "350 80% 60%",
    accent: "30 80% 80%",
    secondary: "350 32% 91%",
    font: "Playfair Display, serif",
    headingFont: "Playfair Display, serif",
  },
];

const layoutOptions: LayoutOption[] = [
  {
    name: "Modern Grid",
    description: "Card-based layout with grid system",
    preview: "🏗️",
  },
  {
    name: "Minimalist",
    description: "Clean, spacious design",
    preview: "⚪",
  },
  {
    name: "Creative",
    description: "Asymmetric, artistic layout",
    preview: "🎨",
  },
  {
    name: "Professional",
    description: "Corporate, structured design",
    preview: "💼",
  },
];

export default function CustomizationPanel({ isOpen, onClose }: CustomizationPanelProps) {
  const [selectedPreset, setSelectedPreset] = useState(themePresets[0]);
  const [applied, setApplied] = useState(false);

  const handleApplyChanges = () => {
    const root = document.documentElement;
    const isDark = root.classList.contains('dark');
    
    // Apply theme changes to CSS variables (HSL values without hsl() wrapper)
    root.style.setProperty('--primary', selectedPreset.primary);
    root.style.setProperty('--accent', selectedPreset.accent);
    root.style.setProperty('--secondary', selectedPreset.secondary);
    
    // Update dark mode colors appropriately
    if (isDark) {
      root.style.setProperty('--accent-foreground', '0 0% 98%');
      root.style.setProperty('--secondary-foreground', '0 0% 98%');
    } else {
      root.style.setProperty('--accent-foreground', '240 5.9% 10%');
      root.style.setProperty('--secondary-foreground', '222 47% 11%');
    }
    
    // Apply fonts
    root.style.setProperty('--font-body', selectedPreset.font);
    root.style.setProperty('--font-heading', selectedPreset.headingFont);
    
    // Update font classes
    document.body.style.fontFamily = selectedPreset.font;
    const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
    headings.forEach(heading => {
      (heading as HTMLElement).style.fontFamily = selectedPreset.headingFont;
    });
    
    setApplied(true);
    setTimeout(() => setApplied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl h-[80vh] bg-card rounded-2xl border border-border/50 overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-1 border-b border-border/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Settings className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">Customize Your Portfolio</h2>
                  <p className="text-sm text-muted-foreground">
                    Personalize colors, fonts, and layout to match your style
                  </p>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={onClose}>
                <X className="w-4 h-4" />
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 h-[calc(80vh-140px)] overflow-y-auto">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Choose Your Theme Style</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {themePresets.map((preset, index) => (
                      <motion.div
                        key={preset.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card
                          className={cn(
                            "p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
                            selectedPreset.name === preset.name
                              ? "border-primary shadow-md ring-2 ring-primary/20"
                              : "border-border hover:border-primary/50"
                          )}
                          onClick={() => setSelectedPreset(preset)}
                        >
                          {/* Theme Preview */}
                          <div className="h-16 rounded-lg mb-3 flex overflow-hidden">
                            <div 
                              className="flex-1"
                              style={{ backgroundColor: `hsl(${preset.primary})` }}
                            />
                            <div 
                              className="flex-1"
                              style={{ backgroundColor: `hsl(${preset.accent})` }}
                            />
                            <div 
                              className="flex-1"
                              style={{ backgroundColor: `hsl(${preset.secondary})` }}
                            />
                          </div>
                          
                          <h4 className="font-medium text-base mb-2">{preset.name}</h4>
                          
                          {/* Font Preview */}
                          <div className="space-y-1 mb-3">
                            <p 
                              className="text-sm text-muted-foreground"
                              style={{ fontFamily: preset.font }}
                            >
                              Body: {preset.font.split(',')[0]}
                            </p>
                            <p 
                              className="text-sm text-muted-foreground"
                              style={{ fontFamily: preset.headingFont }}
                            >
                              Heading: {preset.headingFont.split(',')[0]}
                            </p>
                          </div>
                          
                          <p className="text-xs text-muted-foreground">
                            {selectedPreset.name === preset.name ? "✓ Selected" : "Click to select"}
                          </p>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border/50 bg-card/50">
              <div className="flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  Preview changes in real-time
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={handleApplyChanges} className="min-w-[120px]">
                    <AnimatePresence mode="wait">
                      {applied ? (
                        <motion.div
                          key="applied"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="flex items-center space-x-2"
                        >
                          <Check className="w-4 h-4" />
                          <span>Applied!</span>
                        </motion.div>
                      ) : (
                        <motion.span
                          key="apply"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        >
                          Apply Changes
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}