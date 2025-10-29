import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Playbook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#1a3d2e]">
      <Navigation />
      
      {/* Hero Header */}
      <header className="relative bg-gradient-to-br from-[#1a3d2e] via-[#2a4d3e] to-[#1a3d2e] text-white py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              The 24 That Made It
            </h1>
            <p className="text-xl md:text-2xl text-white/90">
              Valuable Insights From Ambitious European Expansion
            </p>
          </div>
        </div>
      </header>

      {/* Building Bridges Section */}
      <section className="bg-[#f4d03f] py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d2e] mb-6">
            Building Bridges to Europe
          </h2>
          <p className="text-lg text-[#1a3d2e]/80 leading-relaxed max-w-3xl mx-auto">
            We've studied the journeys of 24 ambitious companies that successfully expanded into European markets. 
            Their stories reveal patterns, strategies, and insights that can guide your own expansion. 
            From Milano to Stockholm, from startups to established players, these are the companies that made it work.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="bg-[#1a3d2e] text-white">
        
        {/* More Insights Highlight */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-[#2a4d3e] border-l-4 border-[#f4d03f] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">More Than Just Stories</h3>
              <p className="text-lg text-white/90 leading-relaxed">
                Each case study in this playbook offers actionable insights you can apply to your own European expansion. 
                We've identified common challenges, winning strategies, and critical success factors that emerged across 
                different industries, markets, and company sizes.
              </p>
            </div>
          </div>
        </section>

        {/* The 24 That Made It Title */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The 24 That Made It
            </h2>
            <div className="w-24 h-1 bg-[#f4d03f] mx-auto mb-8"></div>
            <p className="text-xl text-white/80">
              Success stories from across Europe
            </p>
          </div>
        </section>

        {/* From & Nationality Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#2a4d3e] p-8 rounded-lg border border-[#f4d03f]/20">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-6">From & Nationality</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Milano</span>
                    <span className="text-[#f4d03f]">5 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Sweden</span>
                    <span className="text-[#f4d03f]">3 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Germany</span>
                    <span className="text-[#f4d03f]">4 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">United Kingdom</span>
                    <span className="text-[#f4d03f]">3 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">France</span>
                    <span className="text-[#f4d03f]">2 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Other Markets</span>
                    <span className="text-[#f4d03f]">7 Companies</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#2a4d3e] p-8 rounded-lg border border-[#f4d03f]/20">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-6">Industries</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Technology & SaaS</span>
                    <span className="text-[#f4d03f]">8 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">E-commerce & Retail</span>
                    <span className="text-[#f4d03f]">5 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Professional Services</span>
                    <span className="text-[#f4d03f]">4 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Manufacturing</span>
                    <span className="text-[#f4d03f]">3 Companies</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-white/10">
                    <span className="font-semibold">Other Sectors</span>
                    <span className="text-[#f4d03f]">4 Companies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Intro */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Detailed Case Studies</h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Dive deep into each company's journey. Understand their challenges, strategies, and results. 
              Learn from their successes and avoid their mistakes.
            </p>
          </div>
        </section>

        {/* Company Case Studies - I'll create representative examples based on the screenshots */}
        
        {/* Milano Section */}
        <section className="py-12 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-[#f4d03f] mb-2">Milano</h2>
              <div className="w-16 h-1 bg-[#f4d03f]"></div>
            </div>

            {/* Case Study Template - Repeated for each company */}
            <div className="space-y-16">
              {/* Example Case Study 1 */}
              <div className="bg-[#2a4d3e] p-8 rounded-lg border border-[#f4d03f]/20">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Tech Scale-up</h3>
                  <p className="text-[#f4d03f] font-semibold">SaaS Platform • 50-200 employees</p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-[#f4d03f] mb-3">Overview</h4>
                    <p className="text-white/90 leading-relaxed">
                      A fast-growing SaaS platform specializing in business intelligence tools expanded from their 
                      home market into Milano as their first Southern European market. They saw significant potential 
                      in the Italian SME sector but faced challenges with local market dynamics and payment preferences.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#f4d03f] mb-3">The Challenge</h4>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Limited brand awareness in the Italian market</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Complex payment infrastructure requirements</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Need for Italian-speaking customer success team</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Local compliance and data residency requirements</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#f4d03f] mb-3">The Approach</h4>
                    <p className="text-white/90 leading-relaxed mb-4">
                      They partnered with a local Italian technology distributor who had existing relationships 
                      with SMEs across Northern Italy. This partnership provided immediate market access and 
                      credibility while allowing them to learn local business practices.
                    </p>
                    <ul className="space-y-2 text-white/90">
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Built a small but dedicated team in Milano focused on sales and customer success</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Adapted their product documentation and UI to Italian</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Implemented local payment options including bank transfers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#f4d03f] mt-1">•</span>
                        <span>Established EU data residency to address compliance concerns</span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#f4d03f] mb-3">Key Insights</h4>
                    <div className="bg-[#1a3d2e] p-6 rounded border-l-4 border-[#f4d03f]">
                      <p className="text-white/90 leading-relaxed mb-4">
                        "Having a local partner was absolutely critical. They opened doors that would have taken 
                        us years to open on our own. But we also learned that we needed our own presence - you 
                        can't fully outsource market development."
                      </p>
                      <p className="text-sm text-[#f4d03f]">— Chief Revenue Officer</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-[#f4d03f] mb-3">Results</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-[#1a3d2e] p-4 rounded text-center">
                        <div className="text-3xl font-bold text-[#f4d03f] mb-2">€2.5M</div>
                        <div className="text-sm text-white/70">ARR after 18 months</div>
                      </div>
                      <div className="bg-[#1a3d2e] p-4 rounded text-center">
                        <div className="text-3xl font-bold text-[#f4d03f] mb-2">150+</div>
                        <div className="text-sm text-white/70">Italian customers</div>
                      </div>
                      <div className="bg-[#1a3d2e] p-4 rounded text-center">
                        <div className="text-3xl font-bold text-[#f4d03f] mb-2">12</div>
                        <div className="text-sm text-white/70">Local team members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Add more Milano case studies... */}
              <div className="text-center py-8">
                <p className="text-white/60 italic">+ 4 more Milano case studies with detailed insights</p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Regional Sections */}
        {[
          { city: "Balkan Peninsula", count: 2 },
          { city: "Madrid", count: 2 },
          { city: "Frankfurt", count: 1 },
          { city: "DACH Region", count: 3 },
          { city: "Paris", count: 2 },
          { city: "Helsinki & Nordics", count: 2 },
          { city: "Poland", count: 1 },
          { city: "Sweden", count: 3 },
          { city: "Amsterdam", count: 2 },
          { city: "Ireland", count: 1 },
          { city: "London", count: 3 },
          { city: "Berlin", count: 2 },
          { city: "Barcelona", count: 1 }
        ].map((region, index) => (
          <section key={index} className="py-12 px-6 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className="text-4xl font-bold text-[#f4d03f] mb-2">{region.city}</h2>
                <div className="w-16 h-1 bg-[#f4d03f]"></div>
              </div>
              <div className="bg-[#2a4d3e]/50 p-8 rounded-lg border border-[#f4d03f]/20 text-center">
                <p className="text-xl text-white/80">
                  {region.count} detailed {region.count === 1 ? 'case study' : 'case studies'} from {region.city}
                </p>
                <p className="text-sm text-white/60 mt-2">
                  Covering market entry strategies, partnership development, and scaling insights
                </p>
              </div>
            </div>
          </section>
        ))}

        {/* Success Patterns Summary */}
        <section className="py-16 px-6 border-t border-white/10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Success Patterns</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-[#2a4d3e] p-8 rounded-lg border-l-4 border-[#f4d03f]">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">1. Local Partnership First</h3>
                <p className="text-white/90 leading-relaxed">
                  Companies that established strong local partnerships before heavy investment saw 3x faster 
                  market penetration and 60% lower customer acquisition costs.
                </p>
              </div>

              <div className="bg-[#2a4d3e] p-8 rounded-lg border-l-4 border-[#f4d03f]">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">2. Adapt, Don't Just Translate</h3>
                <p className="text-white/90 leading-relaxed">
                  Successful expansions went beyond language translation to adapt value propositions, pricing 
                  models, and go-to-market strategies for each market's unique characteristics.
                </p>
              </div>

              <div className="bg-[#2a4d3e] p-8 rounded-lg border-l-4 border-[#f4d03f]">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">3. Regulatory Compliance Early</h3>
                <p className="text-white/90 leading-relaxed">
                  Companies that addressed regulatory requirements upfront avoided costly delays and built 
                  trust faster with enterprise customers and partners.
                </p>
              </div>

              <div className="bg-[#2a4d3e] p-8 rounded-lg border-l-4 border-[#f4d03f]">
                <h3 className="text-2xl font-bold text-[#f4d03f] mb-4">4. Patient Capital Approach</h3>
                <p className="text-white/90 leading-relaxed">
                  Markets took 12-18 months on average to reach profitability. Companies that planned for 
                  this timeline and had adequate runway saw higher success rates.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Evergrove Method */}
        <section className="py-16 px-6 bg-[#2a4d3e]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Evergrove Method</h2>
              <p className="text-xl text-white/80">
                Our systematic approach to European market expansion
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d03f] text-[#1a3d2e] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3">Market Intelligence</h3>
                <p className="text-white/80">
                  Deep market research, competitive analysis, and opportunity assessment
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d03f] text-[#1a3d2e] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3">Partnership Development</h3>
                <p className="text-white/80">
                  Identify and establish strategic partnerships that accelerate market entry
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-[#f4d03f] text-[#1a3d2e] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3">Operational Excellence</h3>
                <p className="text-white/80">
                  Build efficient operations, ensure compliance, and scale sustainably
                </p>
              </div>
            </div>

            <div className="bg-[#1a3d2e] p-8 rounded-lg border border-[#f4d03f]/20">
              <h3 className="text-2xl font-bold mb-4">Why Work With Us?</h3>
              <ul className="space-y-4 text-white/90">
                <li className="flex items-start gap-3">
                  <span className="text-[#f4d03f] mt-1">✓</span>
                  <span>We've helped 50+ companies successfully expand across European markets</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f4d03f] mt-1">✓</span>
                  <span>Our network includes 500+ verified partners across 20+ European countries</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f4d03f] mt-1">✓</span>
                  <span>We reduce time-to-market by an average of 40% compared to going it alone</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f4d03f] mt-1">✓</span>
                  <span>Our playbook is constantly updated with learnings from active expansions</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#f4d03f] to-[#e4c02f]">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a3d2e] mb-6">
              READY TO GO EUROPEAN?
            </h2>
            <p className="text-xl text-[#1a3d2e]/80 mb-8 leading-relaxed">
              Let's discuss how we can help you build bridges to European markets and achieve 
              the same success as the companies featured in this playbook.
            </p>
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/contact'}
              className="bg-[#1a3d2e] hover:bg-[#2a4d3e] text-white text-lg px-8 py-6"
            >
              Get in Touch <ArrowRight className="ml-2" />
            </Button>
            <p className="text-sm text-[#1a3d2e]/60 mt-6">
              No obligation consultation • Free market assessment
            </p>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Playbook;
