interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer = ({ children, className = "" }: PageContainerProps) => {
  return (
    <div className={`max-w-5xl mx-auto px-6 md:px-12 py-16 ${className}`}>
      {children}
    </div>
  );
};
