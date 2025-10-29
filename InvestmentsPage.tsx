
import React, { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

const InvestmentItem = ({ title, category }: { title: string; category: string }) => {
  return (
    <div className="p-6 border-b border-evergrove-200 hover:bg-evergrove-50 transition-colors">
      <div className="text-sm text-evergrove-500 mb-1">{category}</div>
      <h3 className="text-lg font-medium text-evergrove-900">{title}</h3>
    </div>
  );
};

const InvestmentsPage = () => {
  useEffect(() => {
    document.title = "Investments | Evergrove Capital";
  }, []);
  
  // Deliberately vague portfolio items
  const portfolioItems = [
    { title: "Industrial Manufacturing Group", category: "Portfolio Company" },
    { title: "European Consumer Technology", category: "Strategic Investment" },
    { title: "North American Healthcare Platform", category: "Portfolio Company" },
    { title: "Advanced Materials Research", category: "Venture Capital" },
    { title: "Global Logistics Network", category: "Strategic Investment" },
    { title: "Sustainable Energy Solutions", category: "Venture Capital" }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 mt-24">
        <section className="py-24 px-6">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-light text-evergrove-900 mb-12 text-center">Investments</h1>
            
            <p className="text-xl text-center mb-16 font-light text-evergrove-700 max-w-2xl mx-auto">
              Our portfolio represents carefully selected investments across diverse sectors, each aligned with our long-term value creation strategy.
            </p>
            
            <div className="bg-white shadow-sm rounded-sm overflow-hidden mb-16">
              {portfolioItems.map((item, index) => (
                <InvestmentItem key={index} title={item.title} category={item.category} />
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-evergrove-600 italic">
                Note: For confidentiality reasons, specific portfolio companies are not disclosed publicly.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default InvestmentsPage;
