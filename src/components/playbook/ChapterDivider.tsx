interface ChapterDividerProps {
  number: string;
  title: string;
}

export const ChapterDivider = ({ number, title }: ChapterDividerProps) => {
  return (
    <div className="flex items-center gap-6 my-12">
      <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-2xl font-bold">
        {number}
      </div>
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          {title}
        </h2>
        <div className="h-1 bg-gradient-to-r from-primary to-transparent mt-4 rounded-full" />
      </div>
    </div>
  );
};
