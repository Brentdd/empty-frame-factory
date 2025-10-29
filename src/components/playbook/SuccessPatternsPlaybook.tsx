import { MapPin, Users, Zap, Award, Target, Sparkles } from "lucide-react";

export const SuccessPatterns = () => {
  const patterns = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "POLAND AS GATEWAY",
      stat: "90% of brands",
      description: "Started in Poland for lower costs, cultural similarity, and EU market testing",
      bullets: [
        "Lower entry costs vs Western EU",
        "Ukrainian diaspora community",
        "Test market before wider expansion"
      ]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "DIASPORA PIVOT",
      stat: "70% leveraged",
      description: "Used Ukrainian diaspora communities as early adopters and brand ambassadors",
      bullets: [
        "Cultural connection drives loyalty",
        "Word-of-mouth marketing",
        "Trust-based community sales"
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "WAR AS ACCELERATOR",
      stat: "Post-2022",
      description: "Consumer solidarity and Russian sanctions opened unprecedented doors",
      bullets: [
        "Media attention on resilience",
        "Shelf space from Russian exit",
        "Solidarity purchasing"
      ]
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "QUALITY CERTIFICATIONS",
      stat: "85% obtained",
      description: "EU compliance and certifications became competitive differentiators",
      bullets: [
        "Organic/Fair Trade labels",
        "Safety certifications",
        "Premium positioning"
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "AFFORDABLE FRANCHISES",
      stat: "Food/Beverage",
      description: "Low-cost franchise models enabled rapid expansion",
      bullets: [
        "€30K-€50K investment",
        "Proven operations playbook",
        "Local entrepreneur partnership"
      ]
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "CULTURAL HERITAGE",
      stat: "Design brands",
      description: "Ukrainian craftsmanship and heritage as unique selling proposition",
      bullets: [
        "Traditional techniques",
        "Storytelling advantage",
        "Differentiation from competitors"
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-secondary/30 to-background py-20 mt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="page-number mb-6 text-accent">PART II</div>
          <h2 className="font-modern text-5xl md:text-6xl font-bold text-foreground mb-6">
            Overview
          </h2>
          <p className="font-serif-alt text-xl italic text-muted-foreground max-w-3xl mx-auto mb-8">
            Understanding the mechanics of European market entry
          </p>
          <div className="section-divider mt-8 max-w-md mx-auto mb-16" />
          
          <div className="mt-20">
            <div className="text-accent text-sm tracking-[0.3em] uppercase mb-4">FRAMEWORK</div>
            <h3 className="font-modern text-4xl md:text-5xl font-bold text-foreground mb-6">
              SUCCESS PATTERNS
            </h3>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Cross-case analysis reveals six recurring patterns across successful Ukrainian brands
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {patterns.map((pattern, index) => (
            <div 
              key={index}
              className="bg-card border border-accent/20 rounded-lg p-8 hover:border-accent/40 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-secondary/50 rounded-full p-4 text-accent">
                  {pattern.icon}
                </div>
              </div>
              
              <h4 className="font-modern text-xl font-bold text-foreground mb-3">
                {pattern.title}
              </h4>
              
              <div className="text-3xl font-bold text-accent mb-4">
                {pattern.stat}
              </div>
              
              <p className="text-muted-foreground mb-6">
                {pattern.description}
              </p>
              
              <ul className="space-y-2">
                {pattern.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-accent mt-1">•</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
