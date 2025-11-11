import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useLanguageContext } from "@/contexts/LanguageContext";
import { useTranslation } from "@/hooks/useTranslation";
import { SEOHelmet } from "@/components/SEOHelmet";

const NotFound = () => {
  const location = useLocation();
  const { setLanguage } = useLanguageContext();
  const { t } = useTranslation();

  useEffect(() => {
    const isUkrainian = location.pathname.startsWith('/ua');
    setLanguage(isUkrainian ? 'ua' : 'en');
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname, setLanguage]);

  return (
    <>
      <SEOHelmet 
        title={t('common.notFound')} 
        description={t('common.notFoundMessage')}
        path={location.pathname}
        language={location.pathname.startsWith('/ua') ? 'ua' : 'en'}
      />
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-forest">404</h1>
          <p className="mb-4 text-xl text-gray-600">{t('common.notFoundMessage')}</p>
          <a href="/" className="text-forest underline hover:text-forest/80 transition-colors">
            {t('common.returnHome')}
          </a>
        </div>
      </div>
    </>
  );
};

export default NotFound;
