import { CheckCircle } from "lucide-react";

interface KeyTakeawaysProps {
  takeaways: string[];
}

export const KeyTakeaways = ({ takeaways }: KeyTakeawaysProps) => {
  return (
    <div className="bg-card border-l-4 border-accent p-8 my-8 shadow-sm rounded-lg">
      <h4 className="font-modern text-2xl font-semibold text-foreground mb-6">Key Takeaways</h4>
      <ul className="space-y-4">
        {takeaways.map((takeaway, index) => (
          <li key={index} className="flex gap-4">
            <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
            <span className="text-foreground leading-relaxed">{takeaway}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
