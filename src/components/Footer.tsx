import { useTranslation } from "@/hooks/useTranslation";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

export const Footer = () => {
  const { t, language } = useTranslation();
  const linkPrefix = language === 'ua' ? '/ua' : '';
  
  return (
    <footer className="bg-slate text-white py-12 md:py-16 px-4 md:px-8" role="contentinfo">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          <div itemScope itemType="https://schema.org/Organization">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4" itemProp="name">Evergrove Global</h3>
            <p className="text-white/70 text-sm md:text-base" itemProp="description">Bridging exceptional brands with European markets.</p>
            <address className="not-italic mt-4 text-white/70 text-sm" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Brussels</span>, <span itemProp="addressCountry">Belgium</span>
            </address>
            <p className="mt-2 text-white/70 text-sm">
              <a href="mailto:info@evergroveglobal.com" itemProp="email" className="hover:text-white transition-colors">info@evergroveglobal.com</a>
            </p>
            <p className="mt-1 text-white/70 text-sm">
              <a href="tel:+32493969267" itemProp="telephone" className="hover:text-white transition-colors">+32 493 96 92 67</a>
            </p>
          </div>
          <nav aria-label="Brand resources">
            <h4 className="text-sm md:text-base font-semibold mb-3">{t('homepage.footer.brands')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('navigation.howItWorks')}
                </a>
              </li>
              <li>
                <a href="#partnerships" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('navigation.partnerships')}
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('navigation.faq')}
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company information">
            <h4 className="text-sm md:text-base font-semibold mb-3">{t('homepage.footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('homepage.footer.about')}
                </a>
              </li>
              <li>
                <Link to={`${linkPrefix}/playbook`} className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('homepage.footer.playbook')}
                </Link>
              </li>
              <li>
                <Link to={`${linkPrefix}/workshop`} className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('homepage.footer.workshop')}
                </Link>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  {t('homepage.footer.contact')}
                </a>
              </li>
            </ul>
          </nav>
          <aside>
            <h4 className="text-sm md:text-base font-semibold mb-3">{t('homepage.footer.whyBelgium')}</h4>
            <p className="text-white/70 text-sm">
              {t('homepage.footer.whyBelgiumText')}
            </p>
          </aside>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/20 space-y-4">
          <div className="flex justify-center">
            <LanguageSwitcher />
          </div>
          <p className="text-center text-white/60 text-xs md:text-sm">© 2025 {t('homepage.footer.copyright')}</p>
          <p className="flex gap-4 justify-center items-center flex-wrap text-white/60 text-xs md:text-sm">
            <Link to={`${linkPrefix}/privacy-policy`} className="hover:text-white transition-colors py-2 px-1 min-h-[40px] flex items-center">
              {t('homepage.footer.privacyPolicy')}
            </Link>
            <span>·</span>
            <Link to={`${linkPrefix}/terms-of-service`} className="hover:text-white transition-colors py-2 px-1 min-h-[40px] flex items-center">
              {t('homepage.footer.termsOfService')}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};
