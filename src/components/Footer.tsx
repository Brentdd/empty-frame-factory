export const Footer = () => {
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
            <h4 className="text-sm md:text-base font-semibold mb-3">For Brands</h4>
            <ul className="space-y-2">
              <li>
                <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#partnerships" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  Partnership Models
                </a>
              </li>
              <li>
                <a href="#faq" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </nav>
          <nav aria-label="Company information">
            <h4 className="text-sm md:text-base font-semibold mb-3">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-white/70 hover:text-white transition-colors text-sm md:text-base py-1 inline-block">
                  Blog
                </a>
              </li>
            </ul>
          </nav>
          <aside>
            <h4 className="text-sm md:text-base font-semibold mb-3">Why Belgium?</h4>
            <p className="text-white/70 text-sm">
              Central EU location. Multilingual market. Perfect testing ground before European expansion.
            </p>
          </aside>
        </div>

        <div className="pt-6 md:pt-8 border-t border-white/20 text-center text-white/60 text-xs md:text-sm space-y-2">
          <p>© 2025 Evergrove Global. All rights reserved.</p>
          <p className="flex gap-4 justify-center items-center flex-wrap">
            <a href="/privacy-policy" className="hover:text-white transition-colors py-2 px-1 min-h-[40px] flex items-center">
              Privacy Policy
            </a>
            <span>·</span>
            <a href="/terms-of-service" className="hover:text-white transition-colors py-2 px-1 min-h-[40px] flex items-center">
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
