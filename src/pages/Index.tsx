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

const Index = () => {
  return (
    <div className="min-h-screen">
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
