import { motion } from "framer-motion";
import Reveal from "./RevealAnimation";

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionTitleProps) {
  return (
    <Reveal className={centered ? "text-center mb-12 md:mb-16" : "mb-10"}>
      {badge && (
        <motion.span
          className="section-badge mb-4 inline-flex"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {badge}
        </motion.span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
        {title}
      </h2>
      <div className="section-divider mb-4" />
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
