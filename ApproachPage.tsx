
import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const ApproachPage = () => {
  useEffect(() => {
    document.title = "Our Approach | Evergrove Capital";
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 mt-24">
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-light text-evergrove-900 mb-12 text-center">Our Approach</h1>
            
            <div className="prose prose-lg mx-auto text-evergrove-700">
              <p className="text-xl text-center mb-12 font-light">
                We invest with patience and discretion, seeking opportunities that align with our long-term perspective.
              </p>
              
              <div className="mb-16">
                <h2 className="text-2xl font-light text-evergrove-800 mb-4">Philosophy</h2>
                <p>
                  Like the ancient evergreen that forms our emblem, we seek to cultivate investments that establish deep roots and demonstrate resilience through changing conditions. Our approach is deliberate and measured, focusing on sustainable value creation rather than short-term outcomes.
                </p>
              </div>
              
              <div className="mb-16">
                <h2 className="text-2xl font-light text-evergrove-800 mb-4">Strategy</h2>
                <p>
                  We maintain a highly selective investment portfolio, engaging only with opportunities that meet our strict criteria for quality, leadership, and growth potential. Our decision-making process prioritizes thorough analysis and due diligence, guided by decades of investment experience.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-light text-evergrove-800 mb-4">Governance</h2>
                <p>
                  Our governance framework emphasizes alignment with management teams who demonstrate integrity and vision. We value transparency within our partnerships while maintaining strict confidentiality in our broader operations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ApproachPage;
