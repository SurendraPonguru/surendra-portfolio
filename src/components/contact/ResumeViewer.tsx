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
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
        >
          <FileText className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          View Resume
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[95vh] p-0 bg-card border-border/50 overflow-hidden"
        onInteractOutside={(e) => e.preventDefault()}
      >
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
        <div className="flex-1 p-6 pt-4 overflow-hidden">
          <div className="w-full h-full rounded-lg overflow-hidden border border-border/30 bg-background">
            <object
              data={`${resumeUrl}#toolbar=1&navpanes=1&scrollbar=1`}
              type="application/pdf"
              className="w-full h-full"
              style={{ minHeight: '70vh' }}
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
      </DialogContent>
    </Dialog>
  );
}