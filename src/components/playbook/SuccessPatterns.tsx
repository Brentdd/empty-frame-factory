import { CheckCircle2 } from "lucide-react";

interface Pattern {
  title: string;
  description: string;
}

interface SuccessPatternsProps {
  patterns: Pattern[];
}

export const SuccessPatterns = ({ patterns }: SuccessPatternsProps) => {
  return (
    <div className="space-y-6">
      {patterns.map((pattern, index) => (
        <div key={index} className="flex gap-4 p-6 rounded-lg bg-card border hover:border-primary/50 transition-colors">
          <div className="flex-shrink-0">
            <CheckCircle2 className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">{pattern.title}</h3>
            <p className="text-muted-foreground">{pattern.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
