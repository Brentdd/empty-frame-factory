import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const cities = [
  { name: "Paris", left: "10%", top: "20%", delay: "0s" },
  { name: "Milan", left: "70%", top: "15%", delay: "0.2s" },
  { name: "Brussels", left: "15%", top: "65%", delay: "0.4s" },
  { name: "Amsterdam", left: "75%", top: "70%", delay: "0.6s" },
];

export const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById("dream")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="relative min-h-screen bg-forest flex items-center justify-center text-center px-8 py-24 overflow-hidden" role="banner">
      {/* Background Gradient Animation */}
      <div className="absolute inset-0 animate-pulse-slow">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(74,107,92,0.3)_0%,transparent_50%)]" />
      </div>

      {/* Floating Cities */}
      <div className="absolute inset-0 pointer-events-none">
        {cities.map((city) => (
          <div
            key={city.name}
            className="absolute text-4xl md:text-9xl font-black text-white opacity-10 animate-fadeInCity"
            style={{
              left: city.left,
              top: city.top,
              animationDelay: city.delay,
            }}
          >
            {city.name}
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1200px] px-4 md:px-8">
        <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-white leading-[1.1] mb-6 animate-fadeInUp">
          You make it.
          <br />
          <span className="text-gold">We get it to the cities it belongs in.</span>
        </h1>
        <p
          className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 leading-relaxed"
          style={{ animation: "fadeInUp 1s ease-out 0.2s both" }}
        >
          Your brand in Madrid. Paris. Milan. Brussels. Amsterdam. London.
          <br />
          Without the complexity, compliance headaches, or capital requirements.
        </p>
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animation: "fadeInUp 1s ease-out 0.4s both" }}
        >
          <Button
            variant="hero"
            size="xl"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto min-h-[48px]"
          >
            Let's Talk
          </Button>
          <Button
            variant="hero-outline"
            size="xl"
            onClick={() =>
              document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto min-h-[48px]"
          >
            How It Works
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow cursor-pointer"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-10 h-10 text-white" strokeWidth={2} />
      </button>
    </header>
  );
};
