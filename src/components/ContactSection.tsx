import { Button } from "@/components/ui/button";
import { useTranslation } from "@/hooks/useTranslation";

export const ContactSection = () => {
  const { t } = useTranslation();
  
  return (
    <section id="contact" className="bg-forest text-white py-16 md:py-32 px-4 md:px-8" itemScope itemType="https://schema.org/ContactPage">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center mb-6">
          {t('homepage.contact.title')}
        </h2>
        <p className="text-center text-lg md:text-xl max-w-[800px] mx-auto mb-12 md:mb-16 text-white/90 leading-relaxed">
          {t('homepage.contact.subtitle')}
        </p>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white text-slate p-6 md:p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] cursor-pointer" itemScope itemType="https://schema.org/ContactPoint">
            <div className="text-4xl md:text-5xl mb-4">💬</div>
            <h3 className="text-xl md:text-2xl font-bold text-forest mb-4" itemProp="name">{t('homepage.contact.bookCall.title')}</h3>
            <p className="mb-6 text-slate text-base">
              {t('homepage.contact.bookCall.description')}
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full min-h-[48px]"
              onClick={() => window.open('https://wa.me/32493969267', '_blank', 'noopener,noreferrer')}
              aria-label="Book a call via WhatsApp"
            >
              {t('homepage.contact.bookCall.cta')}
            </Button>
          </div>

          <div className="bg-white text-slate p-6 md:p-8 rounded-3xl text-center transition-all duration-300 hover:-translate-y-3 hover:shadow-[0_20px_60px_rgba(212,175,55,0.3)] cursor-pointer">
            <div className="text-4xl md:text-5xl mb-4">📖</div>
            <h3 className="text-xl md:text-2xl font-bold text-forest mb-4">{t('homepage.contact.downloadGuide.title')}</h3>
            <p className="mb-6 text-slate text-base">
              {t('homepage.contact.downloadGuide.description')}
            </p>
            <Button 
              variant="hero" 
              size="lg" 
              className="w-full min-h-[48px]"
              onClick={() => window.location.href = 'mailto:info@evergroveglobal.com?subject=Request for Free Guide'}
              aria-label="Request free guide via email"
            >
              {t('homepage.contact.downloadGuide.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
