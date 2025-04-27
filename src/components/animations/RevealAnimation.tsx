
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Reveal({
  children,
  className = "",
  delay = 0
}: RevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
