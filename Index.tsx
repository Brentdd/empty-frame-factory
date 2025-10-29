
import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/sections/Hero';
import { Approach } from '../components/sections/Approach';
import { Investments } from '../components/sections/Investments';
import { Contact } from '../components/sections/Contact';
import { Footer } from '../components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Evergrove Capital";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main>
        <Hero />
        <Approach />
        <Investments />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
