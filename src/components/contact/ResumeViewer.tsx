import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ResumeViewerProps {
  resumeUrl: string;
  resumeTitle: string;
}

export default function ResumeViewer({ resumeUrl, resumeTitle }: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent?.stopImmediatePropagation();
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <Button 
        variant="outline" 
        className="group bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
        onClick={openModal}
        type="button"
      >
        <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
        View Resume
      </Button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeModal}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-6xl h-[90vh] bg-card rounded-2xl border border-border/50 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border/50 bg-card/95 backdrop-blur-sm">
                <h2 className="text-xl font-bold">{resumeTitle}</h2>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleDownload}
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={closeModal}
                    className="hover:bg-destructive hover:text-destructive-foreground transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              {/* PDF Content */}
              <div className="flex-1 p-6 h-[calc(90vh-120px)] overflow-hidden">
                <div className="w-full h-full rounded-lg overflow-hidden border border-border/30 bg-background">
                  <object
                    data={`${resumeUrl}#toolbar=1&navpanes=1&scrollbar=1`}
                    type="application/pdf"
                    className="w-full h-full"
                  >
                    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
                      <FileText className="w-16 h-16 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Unable to display PDF</h3>
                      <p className="text-muted-foreground mb-4">
                        Your browser doesn't support PDF viewing. Please download the file to view it.
                      </p>
                      <Button onClick={handleDownload} className="mt-2">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Button>
                    </div>
                  </object>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}