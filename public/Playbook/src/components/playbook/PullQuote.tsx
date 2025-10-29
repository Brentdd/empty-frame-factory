interface PullQuoteProps {
  children: React.ReactNode;
  author?: string;
}

export const PullQuote = ({ children, author }: PullQuoteProps) => {
  return (
    <div className="my-12">
      <blockquote className="pull-quote text-foreground">
        {children}
      </blockquote>
      {author && (
        <p className="mt-4 ml-8 text-accent font-semibold text-sm tracking-wide">
          — {author}
        </p>
      )}
    </div>
  );
};
