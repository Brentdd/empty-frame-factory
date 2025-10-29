import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BrandHeader } from "@/components/playbook/BrandHeader";
import { BrandSection } from "@/components/playbook/BrandSection";
import { ChapterDivider } from "@/components/playbook/ChapterDivider";
import { FrameworkCard } from "@/components/playbook/FrameworkCard";
import { SuccessPatterns } from "@/components/playbook/SuccessPatterns";
import { PlaybookContactForm } from "@/components/playbook/PlaybookContactForm";
import { Target, TrendingUp, Users, Globe, Briefcase, Lightbulb, Shield, BarChart } from "lucide-react";
import { useEffect } from "react";

const Playbook = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const frameworks = [
    {
      title: "Market Assessment",
      description: "Comprehensive analysis of European market opportunities and entry strategies.",
      icon: Target,
      items: [
        "Market sizing and segmentation",
        "Competitive landscape analysis",
        "Regulatory environment review",
        "Cultural considerations"
      ]
    },
    {
      title: "Go-to-Market Strategy",
      description: "Proven frameworks for successful market entry and scaling.",
      icon: TrendingUp,
      items: [
        "Distribution channel selection",
        "Pricing and positioning",
        "Marketing and brand strategy",
        "Sales team structure"
      ]
    },
    {
      title: "Partnership Development",
      description: "Building strategic alliances across European markets.",
      icon: Users,
      items: [
        "Partner identification and vetting",
        "Negotiation frameworks",
        "Joint venture structures",
        "Channel partner programs"
      ]
    },
    {
      title: "Operational Excellence",
      description: "Establishing efficient operations across multiple markets.",
      icon: Briefcase,
      items: [
        "Supply chain optimization",
        "Legal entity structuring",
        "Tax optimization strategies",
        "Financial management"
      ]
    }
  ];

  const successPatterns = [
    {
      title: "Start with Strong Market Research",
      description: "Successful European expansions begin with deep understanding of local market dynamics, customer preferences, and competitive landscapes. Invest time in on-the-ground research before committing resources."
    },
    {
      title: "Build Local Partnerships Early",
      description: "Companies that establish strong local partnerships from day one navigate regulatory requirements faster, build credibility quicker, and scale more efficiently across European markets."
    },
    {
      title: "Adapt Your Value Proposition",
      description: "What works in one market rarely translates directly. Successful companies customize their messaging, product features, and go-to-market strategies for each European market's unique needs."
    },
    {
      title: "Invest in Local Talent",
      description: "Hiring experienced local leaders who understand the market nuances, business culture, and decision-making processes accelerates growth and reduces costly mistakes."
    },
    {
      title: "Plan for Regulatory Complexity",
      description: "Europe's diverse regulatory environment requires careful planning. Companies that proactively address compliance, data protection, and legal requirements avoid delays and maintain momentum."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <BrandHeader
        title="Bridging Europe: Your Playbook for Market Expansion"
        subtitle="A comprehensive guide to successfully expanding your business across European markets"
        ctaText="Get Started Today"
        onCtaClick={scrollToContact}
      />

      <BrandSection background="white">
        <div className="prose prose-lg max-w-none">
          <h2 className="text-4xl font-bold mb-6">Why This Playbook?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Expanding into European markets presents unprecedented opportunities for growth, but the complexity 
            of navigating diverse regulatory environments, cultural differences, and market dynamics can be 
            overwhelming. This playbook distills decades of experience helping companies successfully bridge 
            the gap between ambition and execution across Europe.
          </p>
        </div>
      </BrandSection>

      <BrandSection background="gray">
        <ChapterDivider number="01" title="Understanding the European Landscape" />
        
        <div className="space-y-6 mt-8">
          <p className="text-lg text-muted-foreground">
            Europe isn't a single market—it's a collection of distinct markets with their own regulations, 
            languages, cultures, and business practices. Success requires understanding these nuances and 
            developing strategies that respect local differences while leveraging regional synergies.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-card rounded-lg border">
              <Globe className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Market Diversity</h3>
              <p className="text-muted-foreground">
                27 EU member states, each with unique market characteristics, purchasing behaviors, 
                and business cultures requiring tailored approaches.
              </p>
            </div>
            <div className="p-6 bg-card rounded-lg border">
              <Shield className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regulatory Framework</h3>
              <p className="text-muted-foreground">
                Navigate GDPR, product regulations, employment laws, and sector-specific compliance 
                requirements that vary across jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </BrandSection>

      <BrandSection background="white">
        <ChapterDivider number="02" title="Strategic Frameworks for Success" />
        
        <p className="text-lg text-muted-foreground mb-12">
          Our proven frameworks help you make informed decisions and execute with confidence as you 
          expand across European markets.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {frameworks.map((framework, index) => (
            <FrameworkCard key={index} {...framework} />
          ))}
        </div>
      </BrandSection>

      <BrandSection background="primary">
        <ChapterDivider number="03" title="Patterns of Success" />
        
        <p className="text-lg text-muted-foreground mb-12">
          Learn from companies that have successfully expanded across Europe. These patterns emerge 
          consistently among market leaders.
        </p>

        <SuccessPatterns patterns={successPatterns} />
      </BrandSection>

      <BrandSection background="gray">
        <ChapterDivider number="04" title="Implementation Roadmap" />
        
        <div className="space-y-8">
          <p className="text-lg text-muted-foreground">
            A phased approach to European expansion minimizes risk while building momentum. Here's how 
            to structure your journey:
          </p>

          <div className="grid gap-6">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                Q1
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Discovery & Planning</h3>
                <p className="text-muted-foreground mb-4">
                  Conduct market research, assess opportunities, develop entry strategy, and establish 
                  initial partnerships.
                </p>
                <div className="pl-4 border-l-2 border-primary/30">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <BarChart className="w-4 h-4 text-primary" />
                      Market opportunity analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-primary" />
                      Strategy development workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Partner identification
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                Q2
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Foundation Building</h3>
                <p className="text-muted-foreground mb-4">
                  Establish legal entities, build local teams, develop go-to-market materials, and 
                  pilot initial market entry.
                </p>
                <div className="pl-4 border-l-2 border-primary/30">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Legal and regulatory setup
                    </li>
                    <li className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Team recruitment and onboarding
                    </li>
                    <li className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-primary" />
                      Pilot market launch
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold">
                Q3-Q4
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-3">Scale & Optimize</h3>
                <p className="text-muted-foreground mb-4">
                  Expand to additional markets, optimize operations, strengthen partnerships, and 
                  establish sustainable growth engines.
                </p>
                <div className="pl-4 border-l-2 border-primary/30">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-primary" />
                      Multi-market expansion
                    </li>
                    <li className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary" />
                      Operational excellence programs
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-primary" />
                      Regional integration initiatives
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrandSection>

      <BrandSection background="white" className="scroll-mt-20" id="contact">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ready to Bridge Europe?</h2>
            <p className="text-lg text-muted-foreground">
              Let's discuss how we can help you successfully expand into European markets.
            </p>
          </div>
          <PlaybookContactForm />
        </div>
      </BrandSection>

      <Footer />
    </div>
  );
};

export default Playbook;
