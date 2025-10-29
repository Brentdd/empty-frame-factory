import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Playbook() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen" style={{ background: 'hsl(156 33% 12%)' }}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{ background: 'hsl(156 33% 12%)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold mb-6 text-white">
            The 24 That Made It
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/85">
            Ukrainian Brands That Broke Into Europe
          </p>
          <p className="text-lg mb-12 max-w-2xl mx-auto text-white/70">
            A deep dive into 24 Ukrainian brands that successfully expanded into Europe
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              onClick={scrollToContact}
              className="rounded-full px-8 py-6 text-lg font-semibold"
              style={{ background: 'hsl(43 75% 58%)', color: 'hsl(156 33% 12%)' }}
            >
              Get the Full Report
            </Button>
          </div>
        </div>
      </section>

      {/* Building Bridges Section */}
      <section className="py-16 px-6" style={{ background: 'hsl(43 75% 58%)' }}>
        <div className="max-w-5xl mx-auto">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-8 text-[#1a4f40]">
            Building Bridges to Europe
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-[#1a4f40]">
            <div>
              <p className="text-lg mb-6">
                This playbook examines 24 Ukrainian companies that successfully navigated European expansion.
              </p>
            </div>
            <div>
              <p className="text-lg">
                This is not theory. This is what actually worked.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
