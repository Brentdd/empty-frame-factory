
import React from 'react';
import { TrendingUp, Briefcase, Projector } from 'lucide-react';

const InvestmentCard = ({ title, description, icon: Icon }: { 
  title: string;
  description: string;
  icon: typeof TrendingUp;
}) => {
  return (
    <div className="p-8 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col">
      <div className="mb-4 text-evergrove-700">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <h3 className="text-lg font-medium text-evergrove-900 mb-3">{title}</h3>
      <p className="text-evergrove-600 text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export const Investments = () => {
  const investmentAreas = [
    {
      icon: TrendingUp,
      title: "Strategic Investments",
      description: "Minority and majority positions in established businesses with proven models and strong leadership."
    },
    {
      icon: Projector,
      title: "Venture Capital",
      description: "Selective investments in emerging technologies and innovative solutions addressing meaningful challenges."
    },
    {
      icon: Briefcase,
      title: "Portfolio Companies",
      description: "Direct ownership of companies with sustainable competitive advantages and stable cash flows."
    }
  ];
  
  return (
    <section id="investments" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl font-light text-evergrove-900 mb-16 text-center">Investment Focus</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {investmentAreas.map((area, index) => (
            <InvestmentCard
              key={index}
              icon={area.icon}
              title={area.title}
              description={area.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
