import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Download, X } from "lucide-react";

interface ResumeViewerProps {
  resumeUrl: string;
  resumeTitle: string;
}

export default function ResumeViewer({ resumeUrl, resumeTitle }: ResumeViewerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = resumeTitle;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          className="group bg-gradient-to-r from-primary/10 to-accent/10 border-primary/30 hover:from-primary/20 hover:to-accent/20 transition-all duration-300"
        >
          <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-5xl h-[90vh] p-0 bg-card border-border/50">
        <DialogHeader className="p-6 pb-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold">{resumeTitle}</DialogTitle>
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
            </div>
          </div>
        </DialogHeader>
        <div className="flex-1 p-6 pt-4">
          <div className="w-full h-full rounded-lg overflow-hidden border border-border/30">
            <iframe
              src={resumeUrl}
              className="w-full h-full"
              title={resumeTitle}
              style={{ minHeight: '70vh' }}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}