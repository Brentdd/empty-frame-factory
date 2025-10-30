import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import workshopHero from "@/assets/workshop-hero.png";
import evergroveLogo from "@/assets/evergrove-logo-white.png";

const Workshop = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date("2026-02-01T10:00:00Z").getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-forest via-primary to-sage">
      {/* Header */}
      <header className="py-6 px-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={evergroveLogo} alt="Evergrove" className="h-8" />
          </Link>
          <Link to="/" className="text-cream hover:text-gold transition-colors text-sm font-semibold">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Hero Card */}
          <div className="bg-cream rounded-[40px] shadow-elegant overflow-hidden">
            {/* Countdown Banner */}
            <div className="bg-forest text-cream px-8 py-6 mx-8 mt-8 rounded-[30px] text-center font-semibold">
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <span className="text-lg">Live Workshop Starts In:</span>
                <div className="flex gap-3">
                  <div className="bg-slate/30 rounded-xl px-4 py-2 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.days).padStart(2, '0')}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Days</div>
                  </div>
                  <div className="bg-slate/30 rounded-xl px-4 py-2 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Hours</div>
                  </div>
                  <div className="bg-slate/30 rounded-xl px-4 py-2 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Mins</div>
                  </div>
                  <div className="bg-slate/30 rounded-xl px-4 py-2 min-w-[70px]">
                    <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                    <div className="text-xs uppercase tracking-wider opacity-80">Secs</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 text-center">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6 leading-tight">
                Launch your <span className="text-gold">Brand in Europe</span>
              </h1>

              <p className="text-2xl text-slate font-semibold mb-4">
                How 24 Ukrainian Brands Cracked Europe (And How You Can Too)
              </p>
              
              <p className="text-xl text-slate mb-8">
                Live 90-Minute Workshop
              </p>

              {/* Visual/Image */}
              <div className="my-12 bg-forest rounded-[30px] p-6">
                <img 
                  src={workshopHero} 
                  alt="Workshop Preview" 
                  className="w-full rounded-[20px] shadow-card"
                />
              </div>

              {/* Form */}
              {!submitted ? (
                <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-8">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mb-4 text-center h-14 text-lg border-2 border-sage focus:border-gold rounded-full"
                  />
                  <Button
                    type="submit"
                    className="w-full h-14 text-xl font-bold bg-gold hover:bg-gold/90 text-forest rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                  >
                    Reserve My Spot
                  </Button>
                </form>
              ) : (
                <div className="max-w-md mx-auto mb-8 p-6 bg-primary/10 rounded-2xl border-2 border-gold">
                  <div className="flex items-center justify-center gap-3 text-forest mb-2">
                    <Check className="w-6 h-6 text-gold" />
                    <p className="text-xl font-bold">Registration Confirmed!</p>
                  </div>
                  <p className="text-slate">We'll send you the workshop details shortly.</p>
                </div>
              )}

              {/* Workshop Details */}
              <div className="border-l-4 border-gold pl-8 py-6 mt-12 max-w-2xl mx-auto text-left">
                <div className="flex items-start gap-4 text-slate text-lg mb-2">
                  <Calendar className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <span className="font-semibold">[DATE] | </span>
                  <Clock className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <span className="font-semibold">[TIME] CET</span>
                </div>
                <p className="text-slate text-lg ml-10">60 min workshop + 30 min Q&A</p>
              </div>

              {/* Benefits */}
              <div className="text-left max-w-lg mx-auto space-y-4 mt-12">
                <h3 className="text-2xl font-bold text-forest mb-6 text-center">What You'll Learn:</h3>
                {[
                  "Proven market entry strategies for European markets",
                  "Real case studies from 24 successful Ukrainian brands",
                  "Expert insights on overcoming regulatory challenges",
                  "Networking opportunities with industry veterans",
                  "Actionable frameworks you can implement immediately"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-forest flex items-center justify-center flex-shrink-0 mt-1">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <p className="text-slate text-lg">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="px-8 pb-8 pt-6 border-t border-sage/30 text-center">
              <p className="text-sm text-slate">
                Questions? Contact us at{" "}
                <a 
                  href="mailto:workshop@evergroveglobal.com" 
                  className="text-forest font-semibold hover:text-gold transition-colors"
                >
                  workshop@evergroveglobal.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-8 text-center text-cream">
            <p className="text-sm opacity-90">
              Trusted by leading brands across Europe and Asia
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Workshop;
