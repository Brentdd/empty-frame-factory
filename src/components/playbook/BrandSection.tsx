import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrandSectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "gray" | "primary";
  id?: string;
}

export const BrandSection = ({ children, className, background = "white", id }: BrandSectionProps) => {
  const bgStyles = {
    white: "bg-background",
    gray: "bg-muted/30",
    primary: "bg-primary/5"
  };

  return (
    <section id={id} className={cn("py-16 md:py-24 px-6", bgStyles[background], className)}>
      <div className="max-w-4xl mx-auto">
        {children}
      </div>
    </section>
  );
};
