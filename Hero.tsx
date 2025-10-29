
import React, { useEffect, useRef } from 'react';
import { Logo } from '../Logo';

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  
  useEffect(() => {
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    
    if (title) {
      title.classList.add('opacity-0');
      setTimeout(() => {
        title.classList.remove('opacity-0');
        title.classList.add('animate-fade-in');
      }, 300);
    }
    
    if (subtitle) {
      subtitle.classList.add('opacity-0');
      setTimeout(() => {
        subtitle.classList.remove('opacity-0');
        subtitle.classList.add('animate-fade-in');
      }, 1000);
    }
  }, []);
  
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-100 -z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-5 -z-10"></div>
      
      <div className="text-center max-w-3xl mx-auto">
        <div className="mb-12">
          <Logo size="lg" className="mx-auto" />
        </div>
        
        <h1 
          ref={titleRef} 
          className="text-4xl md:text-5xl lg:text-6xl font-light text-evergrove-900 mb-8 leading-tight pb-3"
        >
          <span className="inline-block reveal-text-wrapper">Cultivating Growth</span>
        </h1>
        
        <p 
          ref={subtitleRef} 
          className="text-base md:text-lg text-evergrove-600 max-w-lg mx-auto leading-relaxed"
        >
          Investing in opportunities with deep roots and long-term value.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-[1px] h-12 bg-evergrove-400 mx-auto animate-pulse"></div>
      </div>
    </section>
  );
};
