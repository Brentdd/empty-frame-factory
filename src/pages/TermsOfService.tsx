import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { SEOHelmet } from "@/components/SEOHelmet";

const TermsOfService = () => {
  const location = useLocation();
  const { setLanguage } = useLanguageContext();
  const { t } = useTranslation();

  useEffect(() => {
    const isUkrainian = location.pathname.startsWith('/ua');
    setLanguage(isUkrainian ? 'ua' : 'en');
  }, [location.pathname, setLanguage]);

  return (
    <>
      <SEOHelmet 
        title={t('legal.termsOfService.meta.title')}
        description={t('legal.termsOfService.meta.description')}
        path="/terms-of-service"
        language={location.pathname.startsWith('/ua') ? 'ua' : 'en'}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-8">{t('legal.termsOfService.title')}</h1>
          
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">{t('legal.termsOfService.lastUpdated')}: October 16, 2025</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.agreement')}</h2>
                <p>{t('legal.termsOfService.sections.agreementText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.services')}</h2>
                <p>{t('legal.termsOfService.sections.servicesText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.partnership')}</h2>
                <p>{t('legal.termsOfService.sections.partnershipText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.intellectual')}</h2>
                <p>{t('legal.termsOfService.sections.intellectualText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.useOfSite')}</h2>
                <p>{t('legal.termsOfService.sections.useOfSiteText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.liability')}</h2>
                <p>{t('legal.termsOfService.sections.liabilityText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.governing')}</h2>
                <p>{t('legal.termsOfService.sections.governingText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.changes')}</h2>
                <p>{t('legal.termsOfService.sections.changesText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.termsOfService.sections.contact')}</h2>
                <p>{t('legal.termsOfService.sections.contactText')} <a href="mailto:info@evergroveglobal.com" className="text-forest hover:text-forest/80">info@evergroveglobal.com</a></p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default TermsOfService;
