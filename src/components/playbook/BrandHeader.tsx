import { Button } from "@/components/ui/button";

interface BrandHeaderProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const BrandHeader = ({ title, subtitle, ctaText, onCtaClick }: BrandHeaderProps) => {
  return (
    <header className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && onCtaClick && (
          <Button
            onClick={onCtaClick}
            size="lg"
            variant="secondary"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
          >
            {ctaText}
          </Button>
        )}
      </div>
    </header>
  );
};
