
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
}

export default function Reveal({
  children,
  className = "",
}: RevealProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
