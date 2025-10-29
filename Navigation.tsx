
import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
        ? 'bg-evergrove-50/90 backdrop-blur-sm py-4 shadow-sm' 
        : 'py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <Logo size="sm" />
        </Link>
        
        <nav>
          <ul className="flex items-center space-x-8">
            <li>
              <Link 
                to="/approach" 
                className="text-sm text-evergrove-600 hover:text-evergrove-900 transition-colors"
              >
                Approach
              </Link>
            </li>
            <li>
              <Link 
                to="/investments" 
                className="text-sm text-evergrove-600 hover:text-evergrove-900 transition-colors"
              >
                Investments
              </Link>
            </li>
            <li>
              <Link 
                to="/contact" 
                className="text-sm text-evergrove-600 hover:text-evergrove-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
