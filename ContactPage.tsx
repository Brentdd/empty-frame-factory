
import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { Contact } from '../components/sections/Contact';

const ContactPage = () => {
  useEffect(() => {
    document.title = "Contact | Evergrove Capital";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 mt-24">
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-light text-evergrove-900 mb-12 text-center">Contact</h1>
          </div>
        </section>
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
