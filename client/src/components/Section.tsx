import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ id, eyebrow, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3">
            {eyebrow}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground leading-relaxed">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
