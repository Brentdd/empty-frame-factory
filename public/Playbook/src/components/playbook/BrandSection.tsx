interface BrandSectionProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const BrandSection = ({ title, children, icon }: BrandSectionProps) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        {icon && <div className="text-accent">{icon}</div>}
        <h3 className="font-modern text-2xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="prose prose-lg max-w-none prose-invert">
        {children}
      </div>
    </div>
  );
};
