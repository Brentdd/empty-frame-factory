
import React from 'react';

export const Approach = () => {
  return (
    <section id="approach" className="py-24 px-6 bg-evergrove-50">
      <div className="container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-light text-evergrove-900 mb-6">Our Approach</h2>
            <p className="text-evergrove-600 mb-6 leading-relaxed">
              We operate with discretion, employing a patient strategy that emphasizes value creation over short-term gains. Our investments are made with generational perspectives.
            </p>
            <p className="text-evergrove-600 leading-relaxed">
              Like the ancient evergreen that forms our emblem, we seek opportunities with strong foundations and the potential for sustained growth through changing seasons.
            </p>
          </div>
          
          <div className="order-1 md:order-2 bg-[url('https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center aspect-square rounded-sm opacity-70"></div>
        </div>
      </div>
    </section>
  );
};
