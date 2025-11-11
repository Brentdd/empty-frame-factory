import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { SEOHelmet } from "@/components/SEOHelmet";

const PrivacyPolicy = () => {
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
        title={t('legal.privacyPolicy.meta.title')}
        description={t('legal.privacyPolicy.meta.description')}
        path="/privacy-policy"
        language={location.pathname.startsWith('/ua') ? 'ua' : 'en'}
      />
      <div className="min-h-screen">
        <Navigation />
        <main className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-forest mb-8">{t('legal.privacyPolicy.title')}</h1>
          
            <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
              <p className="text-sm text-gray-500">{t('legal.privacyPolicy.lastUpdated')}: October 16, 2025</p>
              
              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.infoCollect')}</h2>
                <p>{t('legal.privacyPolicy.sections.infoCollectText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.howWeUse')}</h2>
                <p>{t('legal.privacyPolicy.sections.howWeUseText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.cookies')}</h2>
                <p>{t('legal.privacyPolicy.sections.cookiesText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.dataSecurity')}</h2>
                <p>{t('legal.privacyPolicy.sections.dataSecurityText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.yourRights')}</h2>
                <p>{t('legal.privacyPolicy.sections.yourRightsText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.thirdParty')}</h2>
                <p>{t('legal.privacyPolicy.sections.thirdPartyText')}</p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-forest mt-8 mb-4">{t('legal.privacyPolicy.sections.contact')}</h2>
                <p>{t('legal.privacyPolicy.sections.contactText')} <a href="mailto:info@evergroveglobal.com" className="text-forest hover:text-forest/80">info@evergroveglobal.com</a></p>
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
