import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const PartnershipsSection = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState(2);

  const tabs = [
    {
      icon: t('homepage.partnerships.roadmap.icon'),
      title: t('homepage.partnerships.roadmap.title'),
      badge: null,
      subtitle: t('homepage.partnerships.roadmap.subtitle'),
      description: t('homepage.partnerships.roadmap.description'),
      highlight: t('homepage.partnerships.roadmap.highlight'),
      bestFor: t('homepage.partnerships.roadmap.bestFor'),
    },
    {
      icon: t('homepage.partnerships.team.icon'),
      title: t('homepage.partnerships.team.title'),
      badge: null,
      subtitle: t('homepage.partnerships.team.subtitle'),
      description: t('homepage.partnerships.team.description'),
      highlight: t('homepage.partnerships.team.highlight'),
      bestFor: t('homepage.partnerships.team.bestFor'),
    },
    {
      icon: t('homepage.partnerships.revenue.icon'),
      title: t('homepage.partnerships.revenue.title'),
      badge: t('homepage.partnerships.revenue.badge') || null,
      subtitle: t('homepage.partnerships.revenue.subtitle'),
      description: t('homepage.partnerships.revenue.description'),
      highlight: t('homepage.partnerships.revenue.highlight'),
      bestFor: t('homepage.partnerships.revenue.bestFor'),
    },
  ];

  return (
    <article id="partnerships" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest mb-6">
          {t('homepage.partnerships.title')}
        </h2>
        <p className="text-center text-lg md:text-xl mb-8 md:mb-12">{t('homepage.partnerships.subtitle')}</p>

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
            {t('homepage.partnerships.cta')}
          </Button>
        </div>
      </div>
    </article>
  );
};
