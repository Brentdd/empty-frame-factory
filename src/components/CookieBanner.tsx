import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem("evergrove-cookie-consent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("evergrove-cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("evergrove-cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50 animate-fade-in">
      <div className="bg-forest/95 backdrop-blur-sm border border-gold/20 rounded-lg shadow-2xl p-6">
        <div className="flex items-start gap-4">
          <div className="flex-1">
            <h3 className="text-cream font-semibold mb-2">Cookie Notice</h3>
            <p className="text-cream/80 text-sm mb-4">
              We use cookies to enhance your browsing experience and analyze site traffic. 
              By clicking "Accept", you consent to our use of cookies.{" "}
              <a 
                href="/privacy-policy" 
                className="text-gold hover:text-gold/80 underline transition-colors"
              >
                Learn more
              </a>
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                onClick={handleAccept}
                className="bg-gold text-forest hover:bg-gold/90"
                size="sm"
              >
                Accept
              </Button>
              <Button
                onClick={handleDecline}
                variant="ghost"
                className="border border-cream/30 text-cream hover:bg-cream/10 hover:text-cream"
                size="sm"
              >
                Decline
              </Button>
            </div>
          </div>
          <button
            onClick={handleDecline}
            className="text-cream/60 hover:text-cream transition-colors"
            aria-label="Close cookie banner"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};
