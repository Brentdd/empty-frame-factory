interface FrameworkCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

export const FrameworkCard = ({ title, description, icon, children }: FrameworkCardProps) => {
  return (
    <div className="bg-card border border-accent/20 p-8 mb-6 shadow-sm hover:shadow-md transition-shadow rounded-lg">
      <div className="flex items-start gap-4 mb-4">
        {icon && <div className="text-accent mt-1">{icon}</div>}
        <div>
          <h3 className="font-modern text-2xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>
      {children && <div className="mt-6 pt-6 border-t border-accent/20">{children}</div>}
    </div>
  );
};
