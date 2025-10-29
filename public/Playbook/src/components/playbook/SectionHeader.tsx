interface SectionHeaderProps {
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ number, title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`text-center py-20 ${className}`}>
      <div className="page-number mb-4 text-accent">{number}</div>
      <h1 className="font-modern text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">
        {title}
      </h1>
      {subtitle && (
        <p className="font-modern-alt text-xl md:text-2xl text-muted-foreground italic max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className="section-divider mt-12 max-w-md mx-auto" />
    </div>
  );
};
