import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { DreamSection } from "@/components/DreamSection";
import { CitiesSection } from "@/components/CitiesSection";
import { PartnershipsSection } from "@/components/PartnershipsSection";
import { NotForSection } from "@/components/NotForSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { SEOHelmet } from "@/components/SEOHelmet";
import { useTranslation } from "@/hooks/useTranslation";

const Index = () => {
  const location = useLocation();
  const { setLanguage } = useLanguageContext();
  const { t, language } = useTranslation();

  useEffect(() => {
    const isUkrainian = location.pathname.startsWith('/ua');
    setLanguage(isUkrainian ? 'ua' : 'en');
  }, [location.pathname, setLanguage]);

  return (
    <div className="min-h-screen">
      <SEOHelmet 
        title={t('homepage.meta.title')}
        description={t('homepage.meta.description')}
        path=""
        language={language}
      />
      <Navigation />
      <HeroSection />
      <DreamSection />
      <CitiesSection />
      <PartnershipsSection />
      <NotForSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
