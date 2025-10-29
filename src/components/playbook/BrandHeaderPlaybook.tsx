interface BrandHeaderProps {
  name: string;
  founded?: string;
  hq?: string;
  markets?: string;
  website?: string;
  tagline?: string;
}

export const BrandHeader = ({ name, founded, hq, markets, website, tagline }: BrandHeaderProps) => {
  return (
    <div className="mb-12 pb-8 border-b-2 border-accent/30">
      <h2 className="font-modern text-4xl md:text-5xl font-bold text-foreground mb-3">
        {name}
      </h2>
      {tagline && (
        <p className="font-modern-alt text-xl italic text-muted-foreground mb-6">
          {tagline}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
        {founded && (
          <div>
            <span className="font-semibold text-accent uppercase tracking-wide text-xs block mb-1">Founded</span>
            <span className="text-foreground">{founded}</span>
          </div>
        )}
        {hq && (
          <div>
            <span className="font-semibold text-accent uppercase tracking-wide text-xs block mb-1">Headquarters</span>
            <span className="text-foreground">{hq}</span>
          </div>
        )}
        {markets && (
          <div>
            <span className="font-semibold text-accent uppercase tracking-wide text-xs block mb-1">Key Markets</span>
            <span className="text-foreground">{markets}</span>
          </div>
        )}
        {website && (
          <div>
            <span className="font-semibold text-accent uppercase tracking-wide text-xs block mb-1">Website</span>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent/80 transition-colors underline">
              {website.replace('https://', '').replace('http://', '')}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
