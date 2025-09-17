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
    name: "Ocean Blue",
    primary: "hsl(210, 100%, 50%)",
    accent: "hsl(195, 100%, 60%)",
    background: "hsl(210, 20%, 98%)",
    preview: "bg-gradient-to-r from-blue-500 to-cyan-500",
  },
  {
    name: "Sunset Orange",
    primary: "hsl(25, 100%, 55%)",
    accent: "hsl(45, 100%, 60%)",
    background: "hsl(25, 20%, 98%)",
    preview: "bg-gradient-to-r from-orange-500 to-yellow-500",
  },
  {
    name: "Forest Green",
    primary: "hsl(120, 60%, 45%)",
    accent: "hsl(90, 60%, 55%)",
    background: "hsl(120, 20%, 98%)",
    preview: "bg-gradient-to-r from-green-600 to-lime-500",
  },
  {
    name: "Royal Purple",
    primary: "hsl(270, 70%, 55%)",
    accent: "hsl(300, 70%, 60%)",
    background: "hsl(270, 20%, 98%)",
    preview: "bg-gradient-to-r from-purple-600 to-pink-500",
  },
  {
    name: "Rose Gold",
    primary: "hsl(350, 80%, 60%)",
    accent: "hsl(30, 80%, 70%)",
    background: "hsl(350, 20%, 98%)",
    preview: "bg-gradient-to-r from-rose-500 to-amber-400",
  },
];

const fontOptions: FontOption[] = [
  {
    name: "Inter",
    family: "Inter, sans-serif",
    preview: "Modern & Clean",
  },
  {
    name: "Poppins",
    family: "Poppins, sans-serif",
    preview: "Friendly & Rounded",
  },
  {
    name: "JetBrains Mono",
    family: "JetBrains Mono, monospace",
    preview: "Code & Technical",
  },
  {
    name: "Playfair Display",
    family: "Playfair Display, serif",
    preview: "Elegant & Classic",
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
  const [selectedTheme, setSelectedTheme] = useState(colorThemes[0]);
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [selectedLayout, setSelectedLayout] = useState(layoutOptions[0]);
  const [applied, setApplied] = useState(false);

  const handleApplyChanges = () => {
    // Apply theme changes to CSS variables
    document.documentElement.style.setProperty('--primary', selectedTheme.primary);
    document.documentElement.style.setProperty('--accent', selectedTheme.accent);
    document.documentElement.style.setProperty('--background', selectedTheme.background);
    document.documentElement.style.fontFamily = selectedFont.family;
    
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
              <Tabs defaultValue="colors" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="colors" className="flex items-center space-x-2">
                    <Palette className="w-4 h-4" />
                    <span>Colors</span>
                  </TabsTrigger>
                  <TabsTrigger value="fonts" className="flex items-center space-x-2">
                    <Type className="w-4 h-4" />
                    <span>Fonts</span>
                  </TabsTrigger>
                  <TabsTrigger value="layout" className="flex items-center space-x-2">
                    <Layout className="w-4 h-4" />
                    <span>Layout</span>
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="colors" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Choose Your Color Theme</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {colorThemes.map((theme, index) => (
                        <motion.div
                          key={theme.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className={cn(
                              "p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
                              selectedTheme.name === theme.name
                                ? "border-primary shadow-md"
                                : "border-border hover:border-primary/50"
                            )}
                            onClick={() => setSelectedTheme(theme)}
                          >
                            <div className={cn("h-20 rounded-lg mb-3", theme.preview)} />
                            <h4 className="font-medium">{theme.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {selectedTheme.name === theme.name ? "Selected" : "Click to select"}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="fonts" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Choose Your Font</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {fontOptions.map((font, index) => (
                        <motion.div
                          key={font.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className={cn(
                              "p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
                              selectedFont.name === font.name
                                ? "border-primary shadow-md"
                                : "border-border hover:border-primary/50"
                            )}
                            onClick={() => setSelectedFont(font)}
                          >
                            <h4 
                              className="font-medium text-lg mb-2"
                              style={{ fontFamily: font.family }}
                            >
                              {font.name}
                            </h4>
                            <p 
                              className="text-muted-foreground"
                              style={{ fontFamily: font.family }}
                            >
                              {font.preview}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {selectedFont.name === font.name ? "Selected" : "Click to select"}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="layout" className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Choose Your Layout</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {layoutOptions.map((layout, index) => (
                        <motion.div
                          key={layout.name}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <Card
                            className={cn(
                              "p-4 cursor-pointer transition-all duration-300 hover:shadow-lg",
                              selectedLayout.name === layout.name
                                ? "border-primary shadow-md"
                                : "border-border hover:border-primary/50"
                            )}
                            onClick={() => setSelectedLayout(layout)}
                          >
                            <div className="text-3xl mb-3">{layout.preview}</div>
                            <h4 className="font-medium">{layout.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {layout.description}
                            </p>
                            <p className="text-xs text-muted-foreground mt-2">
                              {selectedLayout.name === layout.name ? "Selected" : "Click to select"}
                            </p>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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