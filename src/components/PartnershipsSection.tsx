import { useState } from "react";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    icon: "🗺️",
    title: "Get the Roadmap",
    badge: null,
    subtitle: "For brands who want expertise, not execution",
    description:
      "We give you everything you need to conquer Western Europe yourself: complete compliance roadmap, vetted retailer lists, marketplace strategy, pricing models, import documentation. Every answer you'd pay a consultant €30K for.",
    highlight: "You keep control. We give you clarity.",
    bestFor: "You have a team to execute but need expert navigation",
  },
  {
    icon: "🚀",
    title: "We Become Your European Team",
    badge: null,
    subtitle: "For brands ready to move fast with dedicated support",
    description:
      "We don't \"help\" you with Europe. We handle Europe. Retailer outreach, marketplace management, compliance, logistics, customer service, returns, marketing, influencer partnerships. Every single operational detail.",
    highlight: "You keep making exceptional products. We build your European presence.",
    bestFor: "You want someone fully accountable for European results",
  },
  {
    icon: "🤝",
    title: "We Only Win When You Win",
    badge: "Most Popular",
    subtitle: "For brands who want results, not invoices",
    description:
      "You pay nothing upfront. Not for consulting. Not for management. Not for marketing. Zero. We invest our time, expertise, and network. You provide inventory on consignment. We both make money only when your products sell in Europe.",
    highlight: "Pure alignment. No risk on your side.",
    bestFor: "You're tired of agencies who invoice regardless of results",
  },
];

export const PartnershipsSection = () => {
  const [activeTab, setActiveTab] = useState(2);

  return (
    <article id="partnerships" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest mb-6">
          Three Ways To Work Together
        </h2>
        <p className="text-center text-lg md:text-xl mb-8 md:mb-12">We meet you where you are.</p>

        <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`relative px-6 md:px-8 py-4 rounded-full font-semibold transition-all duration-300 min-h-[48px] ${
                activeTab === index
                  ? "bg-forest text-white"
                  : "bg-white text-slate hover:bg-sage/10"
              }`}
            >
              {tab.icon} {tab.title}
              {tab.badge && (
                <span className="absolute -top-2 -right-2 bg-gold text-white text-xs px-2 py-1 rounded-full">
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
          <div className="text-5xl md:text-6xl mb-6">{tabs[activeTab].icon}</div>
          <h3 className="text-2xl md:text-3xl font-extrabold text-forest mb-4">
            {tabs[activeTab].title}
          </h3>
          <p className="text-lg md:text-xl text-sage mb-6">{tabs[activeTab].subtitle}</p>
          <p className="text-base md:text-lg leading-relaxed mb-6">{tabs[activeTab].description}</p>
          <p className="text-xl md:text-2xl text-forest font-bold mb-6">{tabs[activeTab].highlight}</p>
          <div className="inline-block bg-cream px-4 md:px-6 py-3 md:py-4 rounded-full text-slate font-semibold text-sm md:text-base">
            <strong>Best if:</strong> {tabs[activeTab].bestFor}
          </div>
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Button
            variant="hero"
            size="xl"
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto min-h-[48px]"
          >
            Tell Us Which Model Fits →
          </Button>
        </div>
      </div>
    </article>
  );
};
