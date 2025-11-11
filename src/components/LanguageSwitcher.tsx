import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguageContext } from '@/contexts/LanguageContext';
import { Button } from './ui/button';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguageContext();
  const location = useLocation();
  const navigate = useNavigate();

  const switchToEnglish = () => {
    setLanguage('en');
    const newPath = location.pathname.replace(/^\/ua/, '') || '/';
    navigate(newPath + location.search);
  };

  const switchToUkrainian = () => {
    setLanguage('ua');
    const newPath = location.pathname.startsWith('/ua') 
      ? location.pathname 
      : '/ua' + location.pathname;
    navigate(newPath + location.search);
  };

  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={switchToEnglish}
        className={`transition-colors ${
          language === 'en' 
            ? 'text-forest font-semibold' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground">|</span>
      <button
        onClick={switchToUkrainian}
        className={`transition-colors ${
          language === 'ua' 
            ? 'text-forest font-semibold' 
            : 'text-muted-foreground hover:text-foreground'
        }`}
      >
        UA
      </button>
    </div>
  );
};
