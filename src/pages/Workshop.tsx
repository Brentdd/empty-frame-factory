import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Calendar, Clock, Users } from "lucide-react";
import { Link } from "react-router-dom";
import workshopHero from "@/assets/workshop-hero.png";
import evergroveLogo from "@/assets/evergrove-logo-white.png";

const Workshop = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

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
        <div className="max-w-3xl mx-auto">
          {/* Hero Card */}
          <div className="bg-cream rounded-3xl shadow-elegant overflow-hidden">
            {/* Countdown Banner */}
            <div className="bg-primary text-cream px-6 py-4 text-center font-semibold flex items-center justify-center gap-3">
              <Clock className="w-5 h-5 text-gold" />
              <span>Limited Seats Available • Register Now</span>
            </div>

            <div className="p-8 md:p-12 text-center">
              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6 leading-tight">
                24 Ukrainian Brands Cracked Europe - <span className="text-gold">Here's How</span>
              </h1>

              <p className="text-xl text-slate font-semibold mb-8">
                Join our exclusive workshop and learn the proven strategies
              </p>

              {/* Visual/Image */}
              <div className="my-12 relative">
                <img 
                  src={workshopHero} 
                  alt="Workshop Preview" 
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-card"
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

              {/* Workshop Details */}
              <div className="grid md:grid-cols-3 gap-6 mt-12 pt-12 border-t border-sage/30">
                <div className="flex flex-col items-center gap-2">
                  <Calendar className="w-8 h-8 text-gold" />
                  <p className="font-bold text-forest">Date</p>
                  <p className="text-slate text-sm">TBA - Early 2026</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Clock className="w-8 h-8 text-gold" />
                  <p className="font-bold text-forest">Duration</p>
                  <p className="text-slate text-sm">3 Hours</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Users className="w-8 h-8 text-gold" />
                  <p className="font-bold text-forest">Format</p>
                  <p className="text-slate text-sm">Online + In-Person</p>
                </div>
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
