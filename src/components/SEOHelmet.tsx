import { Helmet } from 'react-helmet-async';

interface SEOHelmetProps {
  title: string;
  description: string;
  path?: string;
  language: 'en' | 'ua';
}

export const SEOHelmet = ({ title, description, path = '', language }: SEOHelmetProps) => {
  const baseUrl = 'https://evergroveglobal.com';
  const enUrl = `${baseUrl}${path}`;
  const uaUrl = `${baseUrl}/ua${path}`;
  
  return (
    <Helmet>
      {/* Title and Description */}
      <title>{title}</title>
      <meta name="description" content={description} />
      
      {/* Hreflang Tags */}
      <link rel="alternate" href={enUrl} hrefLang="en" />
      <link rel="alternate" href={uaUrl} hrefLang="uk" />
      <link rel="alternate" href={enUrl} hrefLang="x-default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={language === 'ua' ? uaUrl : enUrl} />
      
      {/* Open Graph */}
      <meta property="og:locale" content={language === 'ua' ? 'uk_UA' : 'en_US'} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={language === 'ua' ? uaUrl : enUrl} />
      
      {/* Language */}
      <html lang={language === 'ua' ? 'uk' : 'en'} />
    </Helmet>
  );
};
