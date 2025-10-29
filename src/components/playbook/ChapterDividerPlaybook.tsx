interface ChapterDividerProps {
  number: string;
  title: string;
  icon?: React.ReactNode;
}

export const ChapterDivider = ({ number, title, icon }: ChapterDividerProps) => {
  return (
    <div className="my-32 py-20 bg-gradient-to-r from-secondary/50 via-card to-secondary/50">
      <div className="text-center">
        {icon && <div className="flex justify-center mb-6 text-accent">{icon}</div>}
        <div className="page-number mb-6 text-accent">{number}</div>
        <h2 className="font-modern text-4xl md:text-5xl font-bold text-foreground">
          {title}
        </h2>
        <div className="section-divider mt-8 max-w-md mx-auto" />
      </div>
    </div>
  );
};
