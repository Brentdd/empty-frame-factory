
import React from 'react';
import { Logo } from './Logo';

export const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-evergrove-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo size="sm" />
          </div>
          
          <div className="text-evergrove-500 text-sm">
            &copy; {year} Evergrove Capital. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
