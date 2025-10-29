import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import evergroveLogo from "@/assets/evergrove-logo-desktop.svg";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-8 py-6 transition-all duration-300 ${
        isScrolled
          ? "bg-forest/95 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <img 
          src={evergroveLogo} 
          alt="Evergrove Global" 
          className={`h-6 md:h-8 w-auto transition-all duration-300 ${
            isScrolled ? "brightness-0 invert" : "brightness-0 invert"
          }`}
          style={{ imageRendering: 'crisp-edges' }}
        />
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("how-it-works")}
            className={`font-medium transition-colors duration-300 hover:text-gold ${
              isScrolled ? "text-white/90" : "text-white/90"
            }`}
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("partnerships")}
            className={`font-medium transition-colors duration-300 hover:text-gold ${
              isScrolled ? "text-white/90" : "text-white/90"
            }`}
          >
            Partnerships
          </button>
          <button
            onClick={() => scrollToSection("faq")}
            className={`font-medium transition-colors duration-300 hover:text-gold ${
              isScrolled ? "text-white/90" : "text-white/90"
            }`}
          >
            FAQ
          </button>
          <Button
            variant="hero"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className={isScrolled ? "bg-gold hover:bg-gold/90 text-forest" : ""}
          >
            Let's Talk
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button 
              className="md:hidden p-2 text-white hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-forest border-l border-white/10">
            <div className="flex flex-col gap-6 mt-8">
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-lg font-medium text-white/90 hover:text-gold transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("partnerships")}
                className="text-left text-lg font-medium text-white/90 hover:text-gold transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
              >
                Partnerships
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-lg font-medium text-white/90 hover:text-gold transition-colors py-3 px-4 hover:bg-white/5 rounded-lg"
              >
                FAQ
              </button>
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="w-full mt-4"
              >
                Let's Talk
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
