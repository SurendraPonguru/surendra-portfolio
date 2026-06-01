import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileText, Download, X, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface ResumeViewerProps {
  resumeUrl: string;
  resumeTitle: string;
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export default function ResumeViewer({
  resumeUrl,
  resumeTitle,
  size = "sm",
  className,
}: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = `${resumeTitle}.pdf`;
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const openInNewTab = () => {
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size={size}
        onClick={openModal}
        className={cn(
          "rounded-xl border-border bg-background hover:bg-muted/80 font-medium sm:size-lg",
          className
        )}
      >
        <FileText className="h-4 w-4 sm:mr-2" />
        <span className="hidden sm:inline">View Resume</span>
        <span className="sm:hidden">Resume</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Resume preview"
          >
            <motion.div
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
              onClick={closeModal}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="relative flex flex-col w-full max-w-5xl h-[92vh] sm:h-[88vh] bg-card rounded-2xl border border-border shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-4 border-b border-border bg-muted/30 shrink-0">
                <div className="min-w-0">
                  <p className="text-xs font-medium text-primary uppercase tracking-wide mb-0.5">
                    Resume
                  </p>
                  <h2 className="text-base sm:text-lg font-display font-semibold truncate pr-2">
                    {resumeTitle}
                  </h2>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={openInNewTab}
                    className="rounded-lg hidden sm:inline-flex"
                  >
                    <ExternalLink className="h-4 w-4 mr-1.5" />
                    Open tab
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleDownload}
                    className="rounded-lg bg-gradient-primary border-0"
                  >
                    <Download className="h-4 w-4 mr-1.5" />
                    Download
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeModal}
                    className="rounded-lg h-9 w-9"
                    aria-label="Close resume"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </header>

              <div className="flex-1 min-h-0 p-3 sm:p-4 bg-muted/20">
                <div className="w-full h-full rounded-xl overflow-hidden border border-border bg-white dark:bg-zinc-900 shadow-inner">
                  <iframe
                    src={`${resumeUrl}#view=FitH`}
                    className="w-full h-full min-h-[60vh]"
                    title={resumeTitle}
                  />
                </div>
              </div>

              <footer className="flex sm:hidden items-center justify-center gap-2 px-4 py-3 border-t border-border bg-muted/30 shrink-0">
                <Button variant="outline" size="sm" onClick={openInNewTab} className="rounded-lg flex-1">
                  <ExternalLink className="h-4 w-4 mr-1.5" />
                  Open in browser
                </Button>
              </footer>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
