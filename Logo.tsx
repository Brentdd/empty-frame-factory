
import React from 'react';

type LogoProps = {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
};

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizes = {
    sm: "w-16",
    md: "w-24",
    lg: "w-40",
  };
  
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img 
        src="/lovable-uploads/b89cfe4b-eef4-4f61-9461-1044c91455a6.png" 
        alt="Evergrove Capital" 
        className={`${sizes[size]} h-auto object-contain`}
      />
    </div>
  );
};
