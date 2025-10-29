import { LightbulbIcon } from "lucide-react";

interface InsightBoxProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export const InsightBox = ({ title = "Evergrove Insight", children, className = "" }: InsightBoxProps) => {
  return (
    <div className={`insight-box my-8 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <LightbulbIcon className="w-6 h-6 text-accent" />
        <h4 className="font-modern-alt text-xl font-semibold text-foreground">{title}</h4>
      </div>
      <div className="font-modern-alt text-lg leading-relaxed text-foreground/90">
        {children}
      </div>
    </div>
  );
};
