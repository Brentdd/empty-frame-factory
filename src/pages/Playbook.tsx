import evergroveLogo from "@/assets/evergrove-logo-white.png";
import { PageContainer } from "@/components/playbook/PageContainer";
import { SectionHeader } from "@/components/playbook/SectionHeader";
import { BrandHeader } from "@/components/playbook/BrandHeaderPlaybook";
import { BrandSection } from "@/components/playbook/BrandSectionPlaybook";
import { InsightBox } from "@/components/playbook/InsightBoxPlaybook";
import { PullQuote } from "@/components/playbook/PullQuotePlaybook";
import { KeyTakeaways } from "@/components/playbook/KeyTakeawaysPlaybook";
import { ChapterDivider } from "@/components/playbook/ChapterDividerPlaybook";
import { FrameworkCard } from "@/components/playbook/FrameworkCardPlaybook";
import { SuccessPatterns } from "@/components/playbook/SuccessPatternsPlaybook";
import { ContactForm } from "@/components/playbook/ContactFormPlaybook";
import { 
  Sparkles, Globe, TrendingUp, Package, Users, 
  Heart, Leaf, Award, Target, Lightbulb, ShoppingBag,
  Shirt, Palette, Home, UtensilsCrossed, Cpu, Code,
  Building, Rocket, Map, ArrowRight, CheckCircle2
} from "lucide-react";

const Playbook = () => {
  return (
    <div className="playbook min-h-screen bg-background text-foreground">
      {/* Hero Cover */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[hsl(156,33%,12%)] via-[hsl(156,28%,16%)] to-[hsl(156,28%,20%)] text-white px-6 relative overflow-hidden">
        {/* Background City Names */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute top-10 md:top-20 left-4 md:left-10 city-bg-text">Paris</div>
          <div className="absolute top-10 md:top-20 right-4 md:right-10 city-bg-text">Milan</div>
          <div className="absolute bottom-10 md:bottom-20 left-4 md:left-10 city-bg-text">Brussels</div>
          <div className="absolute bottom-10 md:bottom-20 right-4 md:right-10 city-bg-text">Amsterdam</div>
        </div>
        
        <div className="absolute top-8">
          <img src={evergroveLogo} alt="Evergrove Global" className="h-8 md:h-10" />
        </div>
        
        <div className="text-center max-w-5xl animate-fade-in-up relative z-10">
          <h1 className="font-modern text-5xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            The 24 That Made It
          </h1>
          <p className="font-modern text-3xl md:text-4xl mb-4 font-bold">
            Ukrainian Brands That Broke Into Europe
          </p>
          <p className="font-modern text-2xl md:text-3xl mb-8 italic">
            (And How You Can Too)
          </p>
          <p className="font-modern-alt text-xl md:text-2xl mb-8 text-muted-foreground">
            A deep dive into strategy, resilience,<br />
            and beautiful execution.
          </p>
          
          {/* Statistics */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <div className="text-center">
              <p className="font-modern text-3xl font-bold text-accent">40+</p>
              <p className="font-modern-alt text-sm text-muted-foreground">Ukrainian brand case studies</p>
            </div>
            <div className="text-center">
              <p className="font-modern text-3xl font-bold text-accent">100+</p>
              <p className="font-modern-alt text-sm text-muted-foreground">data points</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#brands" className="btn-primary-evergrove" aria-label="Explore brands section">Explore brands</a>
            <a href="#contact" className="border-2 border-accent text-accent font-bold px-8 py-3 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-300" aria-label="Partner with Evergrove">
              Partner with us
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 page-number text-accent">
          00
        </div>
      </section>

      {/* Introduction */}
      <PageContainer>
        <SectionHeader 
          number="01"
          title="Building Bridges to Europe"
          subtitle="A Foreword from Evergrove"
        />
        
        <div className="prose prose-lg max-w-none leading-relaxed text-foreground">
          <p className="text-xl md:text-2xl font-modern-alt leading-relaxed mb-8 text-foreground">
            This is not a summary. This is not a listicle. This is a premium, editorial-grade business publication designed for founders who are building for real.
          </p>
          
          <p className="mb-6 text-foreground">
            Every year, thousands of Ukrainian brands dream of entering European markets. Most struggle to find the path. A select few break through—not through luck, but through deliberate strategy, resilience, and an intimate understanding of what European buyers actually want.
          </p>
          
          <p className="mb-6 text-foreground">
            This playbook profiles 24 Ukrainian brands that successfully expanded into Europe. Each earned its place not through vanity metrics, but through diversified revenue streams, proven distribution networks, and the kind of operational excellence that turns skeptical buyers into long-term partners.
          </p>
          
          <p className="mb-6 text-foreground">
            You'll find fashion houses that now sit alongside Chanel in Parisian boutiques. Beauty brands stocked in 20+ countries. Furniture designers represented by the world's top galleries. Vodka that outsells Russian competitors in duty-free shops across Europe. And logistics companies that opened 128 European branches in under three years.
          </p>
        </div>

        <InsightBox>
          <p className="italic">
            "We help Ukrainian founders take their brands to Europe—not as a favor, but as a business. The brands in this playbook didn't just 'get discovered.' They built systems, tested markets, refined positioning, and earned shelf space through exceptional execution."
          </p>
        </InsightBox>

        <div className="prose prose-lg max-w-none leading-relaxed mt-8 text-foreground">
          <p className="mb-6 text-foreground">
            Each deep-dive in this playbook covers the brand's founding story, products, business model, European go-to-market strategy, distribution channels, operational tactics, branding evolution, and—most importantly—what we can learn from their approach.
          </p>
          
          <p className="mb-6 text-foreground">
            The brands are organized by sector: Fashion & Accessories, Beauty & Wellness, Home & Design, Food & Beverage, and Tech & Logistics. All insights are supported by primary sources from press, brand sites, and industry reports.
          </p>
          
          <p className="text-xl font-modern-alt italic mt-12 text-center text-foreground">
            This is the playbook. These are the 24 that made it.
          </p>
        </div>
      </PageContainer>

      {/* Executive Summary - Data Proven Insights */}
      <div className="bg-secondary/50 py-20">
        <PageContainer>
          <h2 className="font-modern text-4xl md:text-5xl font-bold text-foreground text-center mb-4">
            Data Proven Insights
          </h2>
          <div className="section-divider max-w-md mx-auto mb-12" />
          
          <div className="bg-card border-2 border-accent/30 p-8 md:p-12 shadow-lg rounded-lg">
            <p className="text-xl font-modern-alt leading-relaxed mb-8 text-center">
              Based on analysis of <strong className="text-accent">40+ Ukrainian brand case studies</strong>, <strong className="text-accent">100+ data points</strong> on costs and timelines, and current market conditions as of October 2025
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="bg-primary p-6 border-l-4 border-accent rounded-lg">
                <div className="text-accent text-xs tracking-wide uppercase mb-2 font-semibold">Key Finding</div>
                <h3 className="font-modern text-2xl font-bold text-foreground mb-3">Year 1 Investment</h3>
                <p className="text-3xl font-bold text-accent mb-2">€20,000–€50,000</p>
                <p className="text-sm text-muted-foreground">Using the Poland Gateway → Partnership Model → Local Market Pivot strategy</p>
              </div>
              
              <div className="bg-primary p-6 border-l-4 border-accent rounded-lg">
                <div className="text-accent text-xs tracking-wide uppercase mb-2 font-semibold">Revenue Growth</div>
                <h3 className="font-modern text-2xl font-bold text-foreground mb-3">Year 3 Results</h3>
                <p className="text-3xl font-bold text-accent mb-2">€200K–€500K</p>
                <p className="text-sm text-muted-foreground">Average revenue by Year 3 for successful market entrants</p>
              </div>
              
              <div className="bg-primary p-6 border-l-4 border-accent rounded-lg">
                <div className="text-accent text-xs tracking-wide uppercase mb-2 font-semibold">Timeline</div>
                <h3 className="font-modern text-2xl font-bold text-foreground mb-3">Poland to EU Expansion</h3>
                <p className="text-3xl font-bold text-accent mb-2">6–12 months</p>
                <p className="text-sm text-muted-foreground">Average time from Poland gateway to wider EU markets</p>
              </div>
              
              <div className="bg-primary p-6 border-l-4 border-accent rounded-lg">
                <div className="text-accent text-xs tracking-wide uppercase mb-2 font-semibold">Entry Strategy</div>
                <h3 className="font-modern text-2xl font-bold text-foreground mb-3">Poland Gateway</h3>
                <p className="text-3xl font-bold text-accent mb-2">90%</p>
                <p className="text-sm text-muted-foreground">Percentage of brands that started in Poland</p>
              </div>
            </div>

            <InsightBox className="mt-8" title="Post-2022 War Accelerator">
              <p>
                War conditions have paradoxically opened doors through consumer solidarity, Russian product sanctions, and media interest in Ukrainian resilience. Crisis forced internationalization for brands with no prior EU plans.
              </p>
            </InsightBox>
          </div>
        </PageContainer>
      </div>

      {/* PART I - THE 24 BRANDS */}
      <div id="brands" className="bg-gradient-to-b from-background to-secondary/30 py-20">
        <PageContainer>
          <div className="text-center mb-20">
            <div className="page-number mb-6 text-accent">PART I</div>
            <h2 className="font-modern text-5xl md:text-6xl font-bold text-foreground mb-6">
              The 24 That Made It
            </h2>
            <div className="section-divider max-w-md mx-auto" />
          </div>
        </PageContainer>
      </div>

      {/* CHAPTER 1: FASHION & ACCESSORIES */}
      <PageContainer>
        <ChapterDivider number="02" title="Fashion & Accessories" icon={<Shirt className="w-12 h-12" />} />
        
        <p className="text-xl font-modern-alt text-center italic mb-20 text-muted-foreground max-w-3xl mx-auto">
          From Kyiv runways to Parisian boutiques—how Ukrainian fashion brands redefined luxury and accessibility on the global stage
        </p>

        {/* SLEEPER */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Sleeper"
            founded="2014"
            hq="Kyiv, Ukraine"
            markets="90+ countries"
            website="https://sleeperthelab.com"
            tagline="Generational loungewear that travels from bed to city streets"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Launched in 2014 by former fashion editors Asya Varetsa and Kate Zubarieva, Sleeper pioneered "fashionable pajamas"—luxury loungewear designed to be worn from bed to city streets. The Kyiv-born brand's DNA blends comfort with elegant whimsy, exemplified by its signature feather-trimmed pajamas and breezy linen dresses.
            </p>
            <p className="mb-4">
              Sleeper's ethos of "walking sleepwear" tapped into a niche for versatile, joyful clothing. By positioning pajamas as glam wardrobe staples, the brand carved out a unique market. Celebrities like Millie Bobby Brown and Chloë Moretz have embraced Sleeper's pieces, signaling its crossover appeal.
            </p>
            <p>
              The brand produces high-quality sleepwear-inspired apparel (pajama sets, dresses, suits) that double as chic daywear. It emphasizes natural fabrics (linen, cotton, silk) and a playful yet minimalist aesthetic, marketing itself as "Generational loungewear" promoting self-love and ease.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <div className="bg-card border-l-4 border-accent p-6 mb-6 rounded-lg">
              <h4 className="font-semibold text-lg mb-3 text-foreground">Financial Trajectory: From $2,000 to $15 Million</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wide mb-1">Launch (2014)</div>
                  <div className="text-2xl font-bold text-foreground">$2,000</div>
                  <div className="text-muted-foreground text-xs">Startup Capital</div>
                </div>
                <div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wide mb-1">Year 1 (2016)</div>
                  <div className="text-2xl font-bold text-foreground">~$150K</div>
                  <div className="text-muted-foreground text-xs">Revenue</div>
                </div>
                <div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wide mb-1">Year 2 (2017)</div>
                  <div className="text-2xl font-bold text-foreground">$300K+</div>
                  <div className="text-muted-foreground text-xs">150% Growth</div>
                </div>
                <div>
                  <div className="text-accent font-semibold text-xs uppercase tracking-wide mb-1">Year 5 (2021)</div>
                  <div className="text-2xl font-bold text-foreground">$15M+</div>
                  <div className="text-muted-foreground text-xs">Revenue</div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Team Evolution: Started with 2 founders + 1 seamstress (3 people) → 20 people by 2018 → Hired professional CEO (ex-CFO Astarta)
              </p>
            </div>
            
            <p className="mb-4">
              Sleeper is now truly global, with <strong className="text-accent">160+ boutiques across 32 markets</strong>. 80% of sales come from the US, with expanding presence in Europe, UK, and Middle East. Notable European partners include Liberty London and Le Bon Marché. The brand's own e-commerce site ships to over 90 countries with free worldwide delivery on qualifying orders.
            </p>
            <p className="mb-4">
              Initial retailers included: Moda Operandi, Barneys, Harrods, Opening Ceremony, Net-a-Porter, Bloomingdale's, Farfetch, Saks, Nordstrom, Neiman Marcus, and Harvey Nichols. By 2021, the brand successfully transitioned from DTC-only to a hybrid model where wholesale contributes significant revenue.
            </p>
            <p className="mb-4">
              Sleeper has also entered resort retail, placing its garments in luxury hotel boutiques (e.g., Four Seasons Dubai) to reach tourists. Each garment takes 8–12 hours to handcraft, maintaining their commitment to quality over speed.
            </p>
            <p className="text-sm italic text-muted-foreground border-l-4 border-accent/30 pl-4">
              <strong>The Critical Early Crisis:</strong> In 2015, their first major wholesale order from Moda Operandi nearly failed when they outsourced to a local factory to meet deadlines. The garments were completely botched. The founders spent an entire night cutting off pockets so their seamstress could resew everything by hand. This led to their decision: 100% in-house handcrafting, never outsource again regardless of timeline or budget pressure. This commitment to quality became their differentiator.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Entry Model</h4>
                <p>Sleeper's European entry leveraged fashion week visibility and influencer seeding. They showcased at Paris and Kyiv Fashion Weeks and leveraged press in Vogue and Harper's Bazaar to build awareness.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Distribution Approach</h4>
                <p>The brand established a logistics hub to offer fast DHL shipping to Europe, with all import duties included for a seamless customer experience. By partnering with European online platforms (like Net-a-Porter) and concept stores, Sleeper gained immediate access to style-conscious EU consumers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-foreground">Operational Excellence</h4>
                <p>Sleeper registered for EU VAT/IOSS to simplify cross-border e-commerce. They kept production in Ukraine for years, leveraging skilled local artisans, and adapted amid challenges (relocating inventory during the 2022 war). The brand uses sustainable packaging to appeal to eco-conscious European customers.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2">
              <li>Direct e-commerce through own website (90+ countries)</li>
              <li>Wholesale to luxury department stores and boutiques worldwide</li>
              <li>Premium online platforms (Net-a-Porter, specialty retailers)</li>
              <li>Resort retail partnerships (luxury hotel boutiques)</li>
              <li>Seasonal capsule collections (e.g., bridal line)</li>
              <li>Instagram-driven social commerce</li>
              <li>Pop-up events in major European cities</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "Sleeper's 'party pajamas' became cult hits, worn by Hollywood stars and went from cult item to best-sellers all over the world."
          </PullQuote>

          <InsightBox title="Brand Identity">
            <p className="mb-3">
              Sleeper's branding is calm, feminine, and editorial in tone—aligned with a "quiet luxury" vibe. Its visual identity features soft pastel color palettes, whimsical feather and polka-dot motifs, and airy, light-filled imagery of women lounging or dancing in pajamas.
            </p>
            <p>
              The tone across copy is warm, playful, and empowering without hype. This consistent aesthetic helped Sleeper stand out as a quirky yet refined label, resonating with Europe's fashion press and Instagram culture.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Niche down and own it: Sleeper created a new category (day-to-night loungewear) and became synonymous with it",
            "Quality branding overcomes infrastructure gaps: Even without large institutional support, a strong brand story travels",
            "Leverage organic virality: Resourceful social media marketing (influencer attention) can substitute for big ad budgets",
            "Dual-channel model accelerates growth: Combining DTC online with selective brick-and-mortar partnerships drives global expansion",
            "Seamless customer experience: Including duties and offering fast shipping removes friction for European customers"
          ]} />
        </div>

        {/* RUSLAN BAGINSKIY */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Ruslan Baginskiy"
            founded="2015"
            hq="Kyiv, Ukraine"
            markets="20+ countries"
            website="https://ruslanbaginskiy.com"
            tagline="Ukraine's premier luxury headwear label"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Ruslan Baginskiy (RB) is a Kyiv-born designer who founded his eponymous headwear label in 2015. Starting as a celebrity stylist turned milliner, Baginskiy aimed to reinvent traditional hats (like baker-boy caps and boaters) with contemporary flair.
            </p>
            <p className="mb-4">
              The brand's DNA fuses Ukrainian craftsmanship (hand-embroidery, folk motifs) with trendy, bold design—think classic shapes adorned with edgy details like initials or chains. RB's big break came when music icons like Madonna and Beyoncé donned his hats, cementing the brand's image as Ukraine's premier hat maker.
            </p>
            <p>
              RB is all about luxury headwear—from fedoras and straw hats to berets and caps. A signature piece is the baker-boy cap emblazoned with hand-embroidered RB initials, which became a must-have among models and influencers. By turning the humble hat into an "It" accessory, RB carved a niche in the global fashion market.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Ruslan Baginskiy's hats are now available across over 20 countries. In Europe, the brand is present in iconic retail landmarks: Galeries Lafayette (Paris) and Selfridges (London) have carried RB pieces. By 2022, the brand reported a presence in 27-million-visitors-annually Galeries Lafayette.
            </p>
            <p className="mb-4">
              The RB online store ships EU-wide with localized e-shop versions for key markets. The brand works with fashion e-tailers (like Farfetch or MatchesFashion) to reach online luxury consumers, and has agents in France and Italy to manage boutique accounts.
            </p>
            <p>
              The brand generates revenue through direct online sales and an extensive wholesale network. Early on, RB focused on Instagram marketing and direct orders from clients worldwide (including custom commissions for stars). Limited capsule collections create seasonal spikes in sales.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Celebrity-Led PR</h4>
                <p>The sight of supermodels Gigi and Bella Hadid wearing RB caps generated buzz that opened doors with European fashion buyers. This was the brand's initial wedge into the European market.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Flagship Partnership</h4>
                <p>A major coup was a collaboration with Galeries Lafayette in Paris, where all 12 of the department store's window displays were devoted to Ukrainian designs including RB's hats in 2023. This high-visibility partnership introduced the brand directly to millions of European shoppers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Trade Show Presence</h4>
                <p>The brand showed at Paris Fashion Week showrooms and leveraged Ukraine's fashion collective platforms in Paris to get in front of EU stockists.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Direct e-commerce with EU-localized sites</li>
              <li>Wholesale to luxury department stores (Galeries Lafayette, Selfridges)</li>
              <li>Fashion e-commerce platforms (Farfetch, MatchesFashion)</li>
              <li>Boutique partnerships via local agents (France, Italy)</li>
              <li>Limited capsule collections (winter beanies, bridal headpieces)</li>
              <li>Celebrity custom commissions</li>
              <li>Pop-ups in Paris, Milan, and other fashion capitals</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "Ruslan Baginskiy's hats are adored by Madonna, Bella and Gigi Hadid—now a fixture on the global fashion scene with European retail presence in the world's most prestigious stores."
          </PullQuote>

          <InsightBox title="Operational Excellence">
            <p className="mb-3">
              RB registered its trademark across the EU early, preventing knock-offs. The brand uses custom hat boxes and partners with reliable couriers to ensure delicate products arrive in pristine condition.
            </p>
            <p>
              Since 2017, many Ukrainian fashion exports have tariff-free entry to the EU. RB scaled up production by partnering with a larger atelier in Ukraine to fulfill wholesale orders, all while maintaining artisanal quality control. The brand also standardized sizing and provides multilingual care instructions.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Targeted gifting to tastemakers: Getting product on influential heads (literally) generated global momentum",
            "Focus on mastery: Staying laser-focused on one product category (hats) built unrivaled expertise",
            "Leverage strategic collaborations: Teaming with major Paris stores gave credibility and local market insight",
            "Authenticity sells: Ukrainian craftsmanship (handmade touches, unique embroidery) differentiates in Europe's luxury market",
            "Protect your IP early: EU trademark registration prevents knock-offs as you scale"
          ]} />
        </div>

        {/* KSENIASCHNAIDER */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="KSENIASCHNAIDER"
            founded="2011"
            hq="Kyiv, Ukraine"
            markets="50+ stores worldwide"
            website="https://kseniaschnaider.com"
            tagline="Ukraine's top sustainable denim brand"
          />

          <BrandSection title="Who They Are" icon={<Leaf className="w-6 h-6" />}>
            <p className="mb-4">
              KSENIASCHNAIDER was founded in Kyiv in 2011 by wife-and-husband duo Ksenia and Anton Schnaider. From the outset, the brand stood for sustainability and innovation in fashion. Ksenia, the designer, became famous for upcycling vintage denim into avant-garde new garments—notably the iconic asymmetric "demi-denims" (half jeans, half shorts) that went viral in street style circles.
            </p>
            <p>
              The brand's DNA marries upcycled materials, unisex silhouettes, and witty design reflecting both post-Soviet nostalgia and modern streetwear. Operating at the intersection of eco-consciousness and high fashion, KSENIASCHNAIDER champions slow fashion and has been dubbed Ukraine's top sustainable denim brand.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              By the late 2010s, KSENIASCHNAIDER was stocked in over 50 stores worldwide, including top-tier boutiques in Paris, London, and Tokyo. Notable retailers include Selfridges (London) and the former concept store Colette (Paris). The brand is available on major online platforms—notably, Zalando (EU) offers a wide selection of KSENIASCHNAIDER denim.
            </p>
            <p>
              Collections often feature patchwork denim pieces, slogan t-shirts with social messages, and gender-neutral cuts. By emphasizing conscious consumption and unique designs, KSENIASCHNAIDER appeals to Europe's eco-aware fashionistas under the ethos "wear your values."
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Digital Buzz + Trade Shows</h4>
                <p>The brand's quirky upcycled denim caught attention on Instagram and fashion blogs, generating organic demand. They capitalized by participating in Paris showrooms and trade fairs (like White Milano) to write orders with European buyers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Sustainability Positioning</h4>
                <p>The brand aligned with the eco-fashion movement, giving them entry into specialized stores in Scandinavia, Benelux, and Germany. They tailored marketing to emphasize sustainability, knowing it resonates strongly in Northern Europe.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">In-Market Infrastructure</h4>
                <p>The brand established a warehouse in Poland for easier EU fulfillment and returns handling. An efficient repair/alteration service was set up in Germany to support customers, turning after-sales care into part of their sustainable narrative.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale to 50+ global retailers (Selfridges, specialty boutiques)</li>
              <li>Direct e-commerce through own website</li>
              <li>Major online platforms (Zalando EU-wide)</li>
              <li>Brand collaborations (Lee Cooper UK capsule)</li>
              <li>Celebrity custom pieces (PR value)</li>
              <li>Flagship studio-store in Kyiv</li>
              <li>London showroom partnership</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "Wear your values. Every upcycled piece tells a story of transformation—from discarded denim to avant-garde fashion."
          </PullQuote>

          <KeyTakeaways takeaways={[
            "Organic digital buzz works: Instagram virality and fashion blog coverage generated demand before formal market entry",
            "Values-driven positioning: Aligning with sustainability opened doors in eco-conscious Northern European markets",
            "Strategic retail validation: Landing Selfridges and Colette early provided instant credibility",
            "Turn challenges into strengths: Unique material sourcing became a differentiator, not a limitation",
            "In-market infrastructure: EU warehouse and repair services improved customer experience and brand loyalty"
          ]} />
        </div>

        {/* IENKI IENKI */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="IENKI IENKI"
            founded="2016"
            hq="Kyiv, Ukraine"
            markets="110 stores in 23 countries"
            website="https://ienkiienki.com"
            tagline="The puffer jacket revolution"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              IENKI IENKI is a luxury outerwear brand founded in Kyiv in 2016 by Dmytro "Dima" Ievenko. Frustrated by the lack of stylish yet warm winter coats, Ievenko set out to create the "perfect puffer jacket." The brand name nods to the Evenki, an indigenous Siberian people—reflecting inspiration from Arctic climates and nomadic aesthetics.
            </p>
            <p>
              From the start, IENKI IENKI's DNA has been about combining high-tech functionality with high-fashion design. Think glossy, oversized down jackets in bold colors that keep you cozy at -20°C, yet look chic on the streets of Milan. The flagship "Michlin" jacket—inspired by the Michelin Man—became an iconic best-seller.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              By 2021, IENKI IENKI was sold in 110 stores across 23 countries—an extraordinary wholesale footprint for a young label. In its first year alone, the brand secured orders from top stores in Paris, New York, and Tokyo.
            </p>
            <p>
              European stockists include Browns in London, Luisa Via Roma in Florence, and Le Bon Marché in Paris. In ski resort hubs like Courchevel and St. Moritz, IENKI IENKI jackets are found in high-end sports boutiques. The brand operates an international e-commerce site and partners with Farfetch for broader online luxury reach.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Celebrity Catalyst</h4>
                <p>High-profile influencers like Hailey Bieber and the Hadid sisters wearing IENKI IENKI early on created huge demand. Vogue called IENKI IENKI the "puffer to own," and European stores scrambled to stock it.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Made in Ukraine Pride</h4>
                <p>All production remains in Ukraine (Kyiv and Cherkasy), where they trained teams to meet strict export quality standards. They source certified down filling, Swiss waterproof fabrics, and Italian zippers—ensuring compliance with EU textile safety and labeling rules.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Fashion Week + Trade Shows</h4>
                <p>Eye-catching puffers were introduced at Paris Fashion Week showrooms. The brand hired sales agents in France and Italy to manage retailer relationships and opened a showroom in Milan for European buyers.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale to 110+ luxury retailers globally</li>
              <li>Direct e-commerce with worldwide DHL shipping</li>
              <li>Farfetch partnership for online luxury audience</li>
              <li>Flagship store in Kyiv (experience center)</li>
              <li>Limited edition collaborations with artists</li>
              <li>Men's, women's, and kids' collections</li>
              <li>Ski Collection with technical gear</li>
              <li>Private client custom orders for VIPs</li>
            </ul>
          </BrandSection>

          <InsightBox title="Quality as Competitive Advantage">
            <p className="mb-3">
              IENKI IENKI offers repair and maintenance services coordinated through partner ateliers in Europe—boosting customer confidence in the product's longevity. Each jacket comes with proper CE labels for material content and care instructions in multiple languages.
            </p>
            <p>
              The brand uses vacuum-packing to reduce volume when shipping large orders to Europe, optimizing freight costs. This full-package approach—top-tier production, compliance diligence, and service—underpins their reputation as a reliable luxury supplier.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Solve a real problem with style: High-performance winter gear that doesn't sacrifice fashion",
            "Go global early: If the product is world-class, starting local isn't a requirement",
            "Maintain quality as you scale: Keeping production at home under close supervision ensured consistency",
            "Storytelling matters: Personal founder narrative and cultural homage gave the brand depth",
            "After-sales service: Repair/maintenance coordination builds customer confidence and loyalty"
          ]} />
        </div>

        {/* BEVZA */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="BEVZA"
            founded="2006"
            hq="Kyiv, Ukraine"
            markets="15+ countries"
            website="https://bevza.com"
            tagline="Minimalist luxury with Ukrainian soul"
          />

          <BrandSection title="Who They Are" icon={<Award className="w-6 h-6" />}>
            <p className="mb-4">
              BEVZA is a womenswear brand founded in 2006 in Kyiv by designer Svitlana Bevza. From day one, Bevza's vision was "less and luxe"—creating minimalist designs imbued with quiet luxury and subtle Ukrainian references. During Ukraine's 2014 revolution and beyond, BEVZA became part of a new wave of designers forging a modern national identity through fashion.
            </p>
            <p>
              The brand's DNA centers on purity of silhouette (Bevza is famous for her pristine white garments), innovative tailoring, and symbolic touches like incorporating Ukrainian motifs such as ears of wheat symbolizing prosperity. A hallmark piece is the white dress, reinterpreted each season as the ultimate wardrobe staple.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              By 2017, BEVZA collections were being sold in over 15 countries including France, UK, Italy, the U.S., and Asia. The brand was stocked at boutiques in fashion capitals—available at Colette in Paris and TSUM Kyiv's international section.
            </p>
            <p>
              The official BEVZA EU online store caters to European clients with local shipping and returns. Wholesale remains carefully curated—BEVZA tends to partner with stores aligned to its aesthetic, like minimalist concept stores in Scandinavia or galleries that carry fashion in Vienna.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Trans-Atlantic Approach</h4>
                <p>While gaining an early following in Ukraine, BEVZA showed collections in Paris showrooms and made a splash at New York Fashion Week from 2017 onward. Success in New York often reverberates back to Europe—European stockists took note after seeing NYFW acclaim.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Cultural Storytelling</h4>
                <p>Strong PR around its narrative—emphasizing BEVZA's role in preserving Ukrainian craftsmanship in modern form. European media gave feature stories which attracted buyers, often highlighting the brand as a leading example of "New Kyiv Chic."</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Strategic Production</h4>
                <p>Production is split between its own atelier in Kyiv and a trusted manufacturing partner in Portugal. This helps facilitate easier EU distribution (some BEVZA pieces are "Made in EU" which simplifies customs).</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale to multi-brand boutiques and department stores</li>
              <li>Direct retail through EU e-commerce site</li>
              <li>Kyiv flagship store</li>
              <li>Occasional collaborations (e.g., capsule with tennis star Elina Svitolina)</li>
              <li>Made-to-order bridal pieces</li>
              <li>Accessories line (wheat ear necklaces, minimalist leather bags)</li>
              <li>Occasional pop-up shops in London/Paris</li>
              <li>NYFW runway shows (live-streamed and immediately shoppable)</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "The quiet power of simplicity. BEVZA transforms minimalist design into conversation pieces about heritage and timelessness."
          </PullQuote>

          <KeyTakeaways takeaways={[
            "Minimalism with meaning: Cultural elements add depth without compromising clean design",
            "Multi-market validation: Success in one major market (NYC) creates credibility in others (Europe)",
            "Strategic manufacturing: Splitting production between Ukraine and EU facilitates distribution",
            "Accessible entry points: Lower-priced accessories bring customers into the brand ecosystem",
            "Direct-to-consumer control: Own e-commerce and flagship stores maintain brand experience"
          ]} />
        </div>
        
        <div className="my-20 text-center">
          <div className="inline-block page-number">04</div>
        </div>

      </PageContainer>

      {/* CHAPTER 2: BEAUTY & WELLNESS */}
      <PageContainer>
        <ChapterDivider number="05" title="Beauty & Wellness" icon={<Palette className="w-12 h-12" />} />
        
        <p className="text-xl font-serif-alt text-center italic mb-20 text-muted-foreground max-w-3xl mx-auto">
          Ukrainian beauty brands competing on innovation, values, and accessibility in Europe's saturated cosmetics market
        </p>

        {/* SISTER'S AROMA */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Sister's Aroma"
            founded="2016"
            hq="Kyiv, Ukraine"
            markets="20+ countries"
            website="https://sistersaroma.com"
            tagline="Natural home fragrances with Ukrainian character"
          />

          <BrandSection title="Who They Are" icon={<Heart className="w-6 h-6" />}>
            <p className="mb-4">
              Sister's Aroma began in 2016 when two sisters, passionate about natural ingredients and home atmosphere, started crafting handmade candles and diffusers in Kyiv. The brand quickly gained a cult following for its sophisticated scents that blend Ukrainian botanicals with international perfume traditions.
            </p>
            <p>
              Core products include scented candles, reed diffusers, room sprays, and body care items—all formulated with natural essential oils and presented in minimalist, Instagram-worthy packaging. The brand positions itself in the accessible luxury segment, offering boutique quality at mid-range prices.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Sister's Aroma products are now available in over 20 countries across Europe, from concept stores in Berlin and Copenhagen to pharmacy chains in Poland. The brand has secured shelf space in major retailers while maintaining a strong DTC e-commerce presence.
            </p>
            <p>
              During 2022-2023, the brand relocated significant operations to Europe, opening an office and warehouse in the Czech Republic. This strategic move served both as business continuity and as a platform for deeper EU market penetration, enabling faster fulfillment and building trust with European retail partners.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Retail-First Approach</h4>
                <p>Sister's Aroma focused on building relationships with independent lifestyle boutiques and concept stores that value curated product selection. This created an aura of discovery and taste-making around the brand.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">EU Compliance & Certification</h4>
                <p>All formulations comply with EU cosmetics regulations (REACH, CLP). The brand obtained necessary safety assessments and product information files (PIFs), ensuring smooth retail adoption across member states.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Czech Hub Strategy</h4>
                <p>Opening an EU warehouse in the Czech Republic enabled same-week delivery across Europe, resolved import duty complexities, and positioned Sister's Aroma as a "local" brand to European retailers.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale to 100+ concept stores and boutiques across Europe</li>
              <li>Direct e-commerce (Ukraine and EU sites)</li>
              <li>Pharmacy chains in Central Europe</li>
              <li>Hotel and spa partnerships (branded amenities)</li>
              <li>Corporate gifting programs</li>
              <li>Limited edition seasonal collections</li>
              <li>Subscription box inclusions</li>
            </ul>
          </BrandSection>

          <InsightBox title="Natural Positioning Wins">
            <p className="mb-3">
              Sister's Aroma capitalized on European consumers' growing preference for natural, transparent beauty and home products. By prominently featuring natural ingredients, cruelty-free certification, and sustainable packaging, they aligned with EU consumer values.
            </p>
            <p>
              The brand's Instagram-first visual strategy (minimalist aesthetic, user-generated content, scent storytelling) built a loyal community before entering physical retail—a blueprint for modern beauty brand expansion.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "In-market presence matters: EU warehouse transformed logistics and retailer confidence",
            "Natural/clean positioning: Aligning with consumer values opens doors in conscious European markets",
            "Start with tastemakers: Independent boutiques build brand cachet before mass retail",
            "Compliance as competitive advantage: Proper EU certification removes retailer concerns",
            "Community building: Instagram engagement created demand that pulled products into stores"
          ]} />
        </div>

        {/* LAMEL MAKEUP */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="LAMEL Makeup"
            founded="2019"
            hq="Kyiv, Ukraine"
            markets="20+ countries"
            website="https://lamelmakeup.com"
            tagline="Trend-driven, affordable beauty for Gen Z"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              LAMEL Makeup launched in 2019 as a Ukrainian-born beauty brand targeting Gen Z with on-trend, affordable cosmetics. Positioned as having a "British brand aesthetic with Ukrainian innovation," LAMEL produces everything from foundations and lipsticks to eye palettes and nail polish.
            </p>
            <p className="mb-4">
              The brand's DNA is youthful, inclusive, and rapidly responsive to beauty trends. LAMEL emphasizes quality (European formulas) and style at value prices, making bold makeup accessible. Campaigns feature models of diverse skin tones, and products are formulated to be universal.
            </p>
            <p>
              In 2023, LAMEL won Sally Beauty's Cultivate Accelerator in the U.S., securing funding and distribution in 500 Sally Beauty stores across America—a milestone that validated the brand internationally and opened new revenue streams.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              LAMEL's distribution now spans over 20 countries. In Europe, their makeup is found in drugstore chains, beauty specialty stores, and online marketplaces. In Eastern Europe (Ukraine, Poland, Romania), LAMEL is sold in chains like Watsons, Hebe, and on platforms like Makeup.ua.
            </p>
            <p>
              In Western Europe, the brand has listings on Amazon UK/DE and is entering physical retail via partnerships. LAMEL maintains its own multilingual website where European customers can order directly, with shipping from an EU warehouse to avoid customs delays.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Trade Fair Presence</h4>
                <p>Getting certified with EU cosmetic standards and showcasing at Cosmoprof Bologna caught the attention of European distributors. LAMEL targeted Central Europe first—markets like Poland where price-conscious but trend-loving consumers fit the brand's profile.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Influencer Marketing</h4>
                <p>Collaborated with micro-influencers and makeup artists in different countries to create buzz. These content creators posted bold looks using LAMEL, organically growing awareness. Heavy emphasis on authenticity and user-generated content.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Western Validation</h4>
                <p>Winning Sally Beauty's Cultivate program gave international credibility ("Award-winning innovative brand") which became a selling point in Europe. The brand leveraged this success in pitches to European retailers.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Retail distribution through drugstore chains (Watsons, Hebe, dm)</li>
              <li>E-commerce platforms (Amazon UK/DE, Makeup.ua)</li>
              <li>Own multilingual website with EU warehouse</li>
              <li>Sally Beauty stores in North America (500 locations)</li>
              <li>Private label deals (B2B revenue)</li>
              <li>Influencer collaboration collections</li>
              <li>Subscription beauty box inclusions</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "LAMEL named winner of Sally Beauty's 2023 Cultivate Accelerator—a Ukrainian-born beauty brand impressing judges with versatile, trend-driven range and now poised to reach wider audiences."
          </PullQuote>

          <InsightBox title="Agility as Advantage">
            <p className="mb-3">
              LAMEL exemplifies nimbleness—swiftly localizing for each market, hopping on viral trends with product launches, and adjusting operations (like relocating production) when needed. Part of production shifted to an EU-based manufacturer in Italy for certain items.
            </p>
            <p>
              The brand's commitment to affordability plus quality shows that competing on value can open doors in saturated markets. Rather than being just another pricey brand, they found a sweet spot appealing to retailers serving younger customers.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Listen to your demographic: LAMEL's focus on Gen Z via social feedback ensured relevance and word-of-mouth",
            "Leverage external opportunities: Winning accelerators/competitions provides funding, mentorship, and credibility",
            "Value positioning works: Affordable + quality opened doors that premium-only positioning might not",
            "Agile operations: Quick market localization and trend response kept the brand competitive",
            "Inclusivity resonates: Clear brand values (cruelty-free, inclusive beauty) boost international acceptance"
          ]} />
        </div>

        <div className="my-20 text-center">
          <div className="inline-block page-number">06</div>
        </div>

      </PageContainer>

      {/* CHAPTER 3: HOME & DESIGN */}
      <PageContainer>
        <ChapterDivider number="07" title="Home & Design" icon={<Home className="w-12 h-12" />} />
        
        <p className="text-xl font-serif-alt text-center italic mb-20 text-muted-foreground max-w-3xl mx-auto">
          Ukrainian design brands bringing craftsmanship, cultural heritage, and contemporary aesthetics to European interiors
        </p>

        {/* GUNIA PROJECT */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Gunia Project"
            founded="2017"
            hq="Kyiv, Ukraine"
            markets="80% international sales"
            website="https://guniaproject.com"
            tagline="Contemporary Ukrainian craft for global design lovers"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Gunia Project was founded in 2017 in Kyiv by two art historians-turned-designers, Maria Gavryliuk and Natasha Kamenska. The brand emerged from a desire to preserve and reimagine Ukrainian traditional crafts in a contemporary way. Its name "Gunia" refers to a Caucasian shepherd's coat, symbolizing warmth and heritage.
            </p>
            <p className="mb-4">
              Gunia Project's DNA is all about artisanal craftsmanship with modern design—they draw on Ukrainian folk art (from Carpathian ceramics to Hutsul textiles) to create unique fashion and home pieces. The founding story of two friends traveling across Ukraine to learn from local artisans gives the brand authentic foundation.
            </p>
            <p>
              Core products span ceramic dishes and vases, hand-painted glass Christmas ornaments, woven home textiles, decorative pillows, silk scarves, jewelry, and bags. Each collection centers on a theme inspired by Ukrainian iconography or folk tales. The positioning is high-end artisanal design at premium prices (€100+ per piece).
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Gunia Project boasts an impressive international stockist list. In Europe, their pieces are carried by Liberty and Koibird in London, Globus in Zürich, White Label Project in Berlin, Items in Paris, among others. They're also present in North America (SVITY in Toronto) and Asia (HP France in Tokyo).
            </p>
            <p>
              As of 2025, roughly 80% of Gunia's sales are international, reflecting how distribution focus has shifted abroad. The brand has a direct e-commerce site that ships worldwide with significant orders from the US, Canada, and EU countries.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Tastemaker Retail</h4>
                <p>Success came when Liberty London and Le Bon Marché in Paris picked up Gunia's scarves and ceramics. These placements gave immense credibility. The brand also targeted museum shops like the Victoria & Albert Museum in London.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Design Fair Circuit</h4>
                <p>Gunia was part of the Ukrainian pavilion at Maison&Objet Paris and Ambiente Frankfurt, catching European buyers' attention seeking new artisan brands. Their PR strategy emphasized storytelling: ancient Ukrainian motifs being revived in modern objects.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Limited Editions</h4>
                <p>Gunia often does limited edition drops (like only 50 of a particular Christmas ornament), which sell out and create urgency. This strategy maintains healthy margins and low waste, aligning financial and sustainability goals.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Direct sales (online and Kyiv studio showroom)</li>
              <li>Wholesale via concept stores and museum shops worldwide</li>
              <li>B2B collaborations (exclusive pieces for luxury hotels)</li>
              <li>Corporate gift commissions</li>
              <li>Limited edition seasonal drops</li>
              <li>Temporary pop-up showrooms in Paris and Vienna</li>
              <li>Curated design boxes and holiday markets</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "Each Gunia piece carries a story—from the hands of Ukrainian artisans to design-conscious homes across the world. It's not just an object, it's cultural preservation through contemporary aesthetics."
          </PullQuote>

          <KeyTakeaways takeaways={[
            "High culture positioning: Targeting prestigious retailers and museum shops builds brand credibility",
            "Trade fair strategy: Design exhibitions provide direct access to high-value European buyers",
            "Storytelling sells: Cultural narrative differentiates in crowded home goods market",
            "Scarcity creates value: Limited editions maintain premium pricing and customer urgency",
            "Multi-category approach: Offering both home goods and accessories increases lifetime customer value"
          ]} />
        </div>

        {/* FAINA */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="FAINA"
            founded="2015"
            hq="Kyiv, Ukraine"
            markets="Global design galleries"
            website="https://fainadesign.com"
            tagline="Sculptural furniture rooted in Ukrainian earth"
          />

          <BrandSection title="Who They Are" icon={<Award className="w-6 h-6" />}>
            <p className="mb-4">
              FAINA is a contemporary furniture and homeware brand founded in 2015 by Victoria Yakusha. The name "FAINA" comes from an old Ukrainian word meaning "unique" or "special." The brand's philosophy centers on reconnecting modern life with nature through furniture made from raw, organic materials.
            </p>
            <p>
              Yakusha's designs are deeply rooted in Ukrainian traditions—using techniques like ash-coating (a preservation method dating back centuries) and sculpting with natural clay. Each piece feels like a functional art object: chairs that look like they grew from the earth, tables with rough-hewn textures, lighting that seems carved from stone.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              FAINA furniture is represented by top design galleries worldwide. The brand showed at Milan Design Week, London Design Fair, and other major international exhibitions. Pieces are sold through galleries in Milan, Paris, London, and New York.
            </p>
            <p>
              Victoria Yakusha was featured in Wallpaper* magazine's list of best designers, and FAINA collections have been acquired by design museums. The brand operates in the ultra-premium design segment where individual pieces can cost €5,000-€50,000+.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Art Gallery Model</h4>
                <p>Rather than traditional furniture retail, FAINA positioned itself in the design art world. Gallery representation in major cities gave the brand access to collectors and design-conscious clients willing to invest in statement pieces.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Design Week Visibility</h4>
                <p>Consistent presence at Milan Design Week, London Design Fair, and other major exhibitions built international recognition. These venues attract interior designers, architects, and design journalists.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Editorial Strategy</h4>
                <p>Securing features in Wallpaper*, Dezeen, and Architectural Digest positioned FAINA as a serious design force. The brand's Ukrainian heritage and sustainable materials provided compelling editorial angles.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Gallery sales through international design galleries</li>
              <li>Direct commissions from collectors and interior designers</li>
              <li>Hospitality projects (custom furniture for hotels and restaurants)</li>
              <li>Limited edition collections</li>
              <li>Museum acquisitions</li>
              <li>Design consultation services</li>
            </ul>
          </BrandSection>

          <InsightBox title="The Gallery Playbook">
            <p className="mb-3">
              FAINA demonstrates how Ukrainian brands can access European markets through the art and design gallery system rather than traditional retail. This approach works when products are genuinely unique, story-rich, and positioned as collectible.
            </p>
            <p>
              The ultra-premium positioning allowed FAINA to maintain Ukrainian production (ensuring quality control and authentic materiality) while achieving international distribution through a network of gallery partners.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Alternative distribution: Design galleries provide access to high-value customers without mass retail",
            "Authentic materiality: Using traditional Ukrainian techniques and local materials creates differentiation",
            "Editorial visibility: Design media coverage attracts collectors, galleries, and commission work",
            "Cultural narrative: Ukrainian heritage story resonates with European design community seeking authenticity",
            "Premium positioning: Ultra-high prices supported by artistic merit and limited production"
          ]} />
        </div>

        <div className="my-20 text-center">
          <div className="inline-block page-number">08</div>
        </div>

      </PageContainer>

      {/* CHAPTER 4: FOOD & BEVERAGE */}
      <PageContainer>
        <ChapterDivider number="09" title="Food & Beverage" icon={<UtensilsCrossed className="w-12 h-12" />} />
        
        <p className="text-xl font-serif-alt text-center italic mb-20 text-muted-foreground max-w-3xl mx-auto">
          Ukrainian food and spirits brands navigating complex regulations to reach European tables and bars
        </p>

        {/* ROSHEN */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Roshen"
            founded="1996"
            hq="Kyiv, Ukraine"
            markets="EU-wide presence"
            website="https://roshen.com"
            tagline="Ukraine's chocolate giant going European"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <p className="mb-4">
              Roshen is Ukraine's largest confectionery manufacturer, producing chocolates, candies, biscuits, and cakes. Founded in 1996, the company operates multiple production facilities across Ukraine and internationally. With a product range of over 300 items, Roshen is a household name across former Soviet markets.
            </p>
            <p>
              The brand's DNA combines nostalgia (classic Soviet-era candy recipes) with modern European quality standards. Signature products include chocolate-covered marshmallows, wafer bars, and premium chocolate pralines. Roshen positions itself as accessible luxury—better quality than mass-market, more affordable than boutique chocolatiers.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Roshen operates factories in Lithuania (Klaipeda) and Hungary, which serve as production and distribution hubs for the EU market. These EU-based facilities simplified regulatory compliance and logistics, enabling Roshen products to reach Polish, Baltic, German, and other European markets.
            </p>
            <p>
              The brand is sold through major retailers including Polish chains, Baltic supermarkets, and ethnic food stores across the EU. Roshen also exports to over 20 countries beyond Europe, with confectionery being a significant Ukrainian export category.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">EU Production Facilities</h4>
                <p>Opening factories in Lithuania and Hungary was strategic—these facilities have EU food safety certifications, simplifying entry into European retail. "Made in EU" labeling removes psychological barriers for some consumers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Diaspora + Mainstream</h4>
                <p>Initially entered through ethnic Ukrainian/Eastern European stores serving diaspora communities. Once established, expanded into mainstream supermarkets by positioning as "European confectionery with exotic flair."</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Price Positioning</h4>
                <p>Competitive pricing against local European brands while maintaining quality. Roshen offers value in the mid-tier chocolate segment, attracting price-conscious consumers who want better than mass-market.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Retail distribution through EU supermarket chains</li>
              <li>Ethnic food stores (diaspora channel)</li>
              <li>Online marketplaces (Amazon, specialty food sites)</li>
              <li>Corporate gifting and promotional products</li>
              <li>Private label manufacturing for other brands</li>
              <li>Food service supply (cafés, restaurants)</li>
              <li>Duty-free shops in airports</li>
            </ul>
          </BrandSection>

          <KeyTakeaways takeaways={[
            "EU production solves compliance: Local manufacturing simplifies regulations and builds trust",
            "Start with diaspora: Ethnic communities provide initial market validation and cash flow",
            "Scale through value: Competitive pricing opens mainstream retail opportunities",
            "Vertical integration: Own production facilities enable better margins and quality control",
            "Multi-tier distribution: From ethnic stores to mainstream supermarkets to duty-free"
          ]} />
        </div>

        {/* NEMIROFF */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Nemiroff"
            founded="1992"
            hq="Nemyriv, Ukraine"
            markets="80+ countries"
            website="https://nemiroff.com"
            tagline="Ukrainian vodka competing globally"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Nemiroff is Ukraine's leading vodka producer and one of the world's top spirits exporters. Founded in 1992, the brand produces a range of vodkas including flavored varieties (honey-pepper, cranberry) and premium expressions. The company operates Ukraine's largest distillery complex.
            </p>
            <p className="mb-4">
              Nemiroff's positioning emphasizes Ukrainian wheat and artesian water, positioning itself against Russian vodka brands while maintaining competitive pricing. The brand has won numerous international spirits competitions, building credibility in European markets.
            </p>
            <p>
              In duty-free channels across Europe, Nemiroff actively competes with Russian vodka brands and has gained market share, especially post-2022 when many retailers sought alternatives to Russian products.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Nemiroff exports to over 80 countries worldwide. In Europe, the brand is available in duty-free shops, supermarkets, and on-premise (bars, restaurants) across Poland, Germany, Baltics, UK, and other markets. The company exports millions of cases annually.
            </p>
            <p>
              Post-2022, European retailers actively sought Ukrainian vodka alternatives to Russian brands, significantly boosting Nemiroff's European presence. The brand invested in marketing campaigns emphasizing "proudly Ukrainian" positioning.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Duty-Free Focus</h4>
                <p>Major push into airport duty-free shops across Europe. This channel provides high visibility, impulse purchasing, and builds brand recognition among international travelers who bring products home.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Quality Positioning</h4>
                <p>Entered international spirits competitions and promoted awards in marketing. Multiple gold medals at competitions like International Wine & Spirit Competition (IWSC) built credibility with European buyers and consumers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Geopolitical Timing</h4>
                <p>Post-2022, actively marketed as "the vodka to replace Russian brands" in solidarity campaigns. Many European bars and stores switched to Nemiroff, creating distribution opportunities and building brand loyalty through values alignment.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Duty-free shops across European airports</li>
              <li>Retail supermarket and liquor store distribution</li>
              <li>On-premise (bars, clubs, restaurants)</li>
              <li>E-commerce and online liquor retailers</li>
              <li>Promotional partnerships with events and venues</li>
              <li>Private label production</li>
              <li>Premium product lines for high-end establishments</li>
            </ul>
          </BrandSection>

          <InsightBox title="Navigating Spirits Regulations">
            <p className="mb-3">
              Spirits face strict EU regulations: labeling requirements, excise duties varying by country, and distribution controls. Nemiroff navigated these by working with local importers and distributors who handle compliance and have existing retail relationships.
            </p>
            <p>
              The brand also invested in multilingual packaging and country-specific labeling to meet each market's requirements, essential for spirits that face scrutiny from regulators.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Competition circuit builds credibility: Awards and medals open doors with buyers skeptical of new brands",
            "Duty-free as beachhead: Airport shops provide brand awareness and testing ground before broader retail",
            "Values can drive distribution: Geopolitical context created opportunity for Ukrainian brands to replace Russian products",
            "Local partnerships essential: Work with in-country distributors who navigate complex spirits regulations",
            "Premium variants expand margins: Beyond volume vodka, flavored and premium lines increase profitability"
          ]} />
        </div>

        {/* LVIV CROISSANTS */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Lviv Croissants"
            founded="2015"
            hq="Lviv, Ukraine"
            markets="Poland, Czech Republic, Slovakia, France"
            website="https://lvivcroissants.com"
            tagline="Affordable franchise bakery chain"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">Revenue Range</h4>
              <p className="text-2xl font-bold text-accent mb-2">€500K–€1.5M</p>
              <p className="text-sm text-muted-foreground">EU operations revenue</p>
            </div>
            <p className="mb-4">
              Lviv Croissants operates a chain of bakery cafés specializing in freshly baked croissant sandwiches, pastries, and coffee. The brand uses an open-kitchen concept where customers watch croissants being made, creating theater and transparency. Founded in Lviv, the chain serves both sweet and savory croissants with Ukrainian and European flavor profiles.
            </p>
            <p>
              The first EU location opened in Warsaw in October 2022. The brand uses a franchise model with a remarkably low entry cost of €15,000, enabling rapid expansion. Each location features 60-seat layouts with visible baking stations—combining fast-casual efficiency with artisan appeal.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              By 2025, Lviv Croissants operated <strong className="text-accent">11 locations in Poland</strong>, plus outlets in Prague (Palladium shopping center), Slovakia, and a new location in Cannes, France (2025). The brand has grown from zero international presence to multi-country operations in under 3 years.
            </p>
            <p className="mb-4">
              <strong className="text-primary">The Critical Pivot:</strong> Initially targeting Ukrainian diaspora customers, the brand quickly shifted to attract local Polish and Czech customers within the first 12 months—achieving profitability through this strategic pivot.
            </p>
            <p>
              <strong className="text-primary">Menu Strategy:</strong> Each market receives customized menu items (goat cheese + cured ham for French market, traditional Polish fillings for Warsaw locations) while maintaining core croissant recipes.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Poland Springboard</h4>
                <p>Launching in Warsaw allowed the brand to learn EU food safety standards, labor regulations, and retail operations in a friendly market before expanding to Western Europe.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Ultra-Low Franchise Fee</h4>
                <p>At €15,000, the franchise cost is 70-80% lower than Western European bakery franchises (typically €50K-€150K), enabling Ukrainian entrepreneurs to become franchisees and rapid territorial coverage.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Open Kitchen Theater</h4>
                <p>Visible baking creates trust, entertainment, and social media moments. Customers become brand ambassadors by posting fresh croissant videos.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Franchise fees: €15K initial + ongoing royalties</li>
              <li>Corporate-owned flagship locations in high-traffic areas</li>
              <li>Delivery partnerships (Uber Eats, Wolt)</li>
              <li>Corporate catering for offices and events</li>
              <li>Retail packaged products (take-home frozen croissants)</li>
              <li>Coffee and beverage sales (high-margin items)</li>
            </ul>
          </BrandSection>

          <KeyTakeaways takeaways={[
            "Poland as testing ground: Learn EU regulations in friendly market before broader expansion",
            "Diaspora to local pivot: Successful brands transition from diaspora targeting to local customers within 6-12 months",
            "Affordable franchise model: Lower fees enable rapid expansion and attract Ukrainian entrepreneurs",
            "Menu localization: Adapt offerings to each market while maintaining core brand identity",
            "Experience over product: Open kitchens create theater that drives social media and word-of-mouth"
          ]} />
        </div>

        {/* BOB SNAIL */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Bob Snail"
            founded="2014"
            hq="Kyiv, Ukraine"
            markets="European retail chains + 40 countries"
            website="https://bobsnail.com"
            tagline="Healthy snacks with no added sugar"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">Revenue & Scale</h4>
              <p className="text-2xl font-bold text-accent mb-2">€1.5–€2M</p>
              <p className="text-sm text-muted-foreground mb-3">EU portion of $42M global 2024 revenue</p>
              <p className="text-lg font-semibold text-primary">187+ SKUs | 5.6M kg sold annually</p>
            </div>
            <p className="mb-4">
              Bob Snail produces fruit rolls, snacks, and treats with a radical simplicity: no added sugar, no preservatives, no artificial ingredients. Just fruits, vegetables, and natural ingredients. The brand serves health-conscious parents seeking alternatives to conventional candy and snacks for their children.
            </p>
            <p>
              Products include fruit rolls in dozens of flavors, fruit-vegetable mix snacks, natural marmalades, and seasonal innovations. The brand emphasizes certifications (IFS, ISO standards) and transparent ingredient lists that parents can understand.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Bob Snail products are stocked in <strong className="text-accent">Lidl, Carrefour, Auchan, Metro, and Aldi</strong> across Europe—a remarkable achievement for a Ukrainian brand. The company operates a physical flagship store in Warsaw's Westfield Mokotów shopping center.
            </p>
            <p className="mb-4">
              The brand is a regular exhibitor at major food trade shows: <strong className="text-primary">SIAL Paris</strong>, <strong className="text-primary">ISM Cologne</strong>, and <strong className="text-primary">Anuga</strong>. These trade shows are where key retail buyer relationships were established.
            </p>
            <p>
              <strong className="text-primary">Early Mistake:</strong> Initially worked with local distributors who failed to execute. The brand pivoted to in-country teams managing distribution directly—making Poland their #1 export market through direct management.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Trade Show Investment</h4>
                <p>Regular presence at SIAL, ISM, and Anuga provided face-to-face meetings with European retail buyers. These relationships led to distribution agreements with major chains.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Certifications Build Trust</h4>
                <p>Obtaining IFS (International Featured Standards) and ISO certifications opened doors with risk-averse European retailers who require supplier compliance before listing products.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Direct Management Over Distributors</h4>
                <p>After distributor failures, Bob Snail built in-country teams in key markets. This direct approach ensured better execution, faster feedback, and stronger retail relationships.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Major European retail chains (Lidl, Carrefour, Auchan, Metro, Aldi)</li>
              <li>Health food stores and organic retailers</li>
              <li>Online marketplaces (Amazon, specialty health sites)</li>
              <li>Flagship retail store (Warsaw Westfield Mokotów)</li>
              <li>Seasonal gift sets and corporate gifting</li>
              <li>Private label production for health-focused retailers</li>
              <li>Pharmacy channel for baby/toddler snacks</li>
            </ul>
          </BrandSection>

          <KeyTakeaways takeaways={[
            "Trade shows are essential for food brands: Face-to-face meetings with retail buyers are irreplaceable",
            "Certifications open doors: IFS and ISO standards are prerequisites for major European retail chains",
            "Direct management beats distributors: For food products, in-country teams ensure better execution",
            "Product diversification: 187 SKUs mean retailers can build full sections rather than single products",
            "Health positioning works: Clean labels and no-sugar positioning align with European health trends"
          ]} />
        </div>

        {/* PIANA VYSHNIA */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Piana Vyshnia (Drunken Cherry)"
            founded="2018"
            hq="Kyiv, Ukraine"
            markets="Poland, Estonia, Latvia, Lithuania"
            website="https://pianavyshnia.com"
            tagline="Ukrainian cherry liqueur bar chain"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <div className="bg-accent/10 border-l-4 border-accent p-6 mb-6">
              <h4 className="font-semibold text-lg mb-3 text-primary">Revenue & Locations</h4>
              <p className="text-2xl font-bold text-accent mb-2">€1–€2M</p>
              <p className="text-sm text-muted-foreground mb-3">EU operations revenue</p>
              <p className="text-lg font-semibold text-primary">15 locations in Poland | 9 in Baltic states</p>
            </div>
            <p className="mb-4">
              Piana Vyshnia is a bar chain specializing in traditional Ukrainian cherry liqueur (horilka, 40% ABV) alongside Ukrainian comfort food like borscht, varenyky, and salo. The concept combines cultural experience with hospitality—introducing European customers to Ukrainian drinking and dining traditions.
            </p>
            <p>
              The bars feature traditional Ukrainian interior design elements, creating immersive cultural spaces. 2025 expansion plans include Germany, Switzerland, France, and a London relaunch.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">The Successful Pivot</h4>
                <p>Like Lviv Croissants, Piana Vyshnia initially targeted Ukrainian diaspora. Within 12 months, they pivoted to attract local Polish, Estonian, and Lithuanian customers—achieving profitable operations through this strategic shift to mainstream appeal.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Cultural Experience, Not Just Food</h4>
                <p>Positioned as a cultural destination rather than ethnic restaurant. European customers seek authentic experiences, and Ukrainian hospitality + cherry liqueur traditions create memorable visits that drive repeat business and social media sharing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Alcohol as Hook, Food as Margin</h4>
                <p>Cherry liqueur draws customers in (curiosity factor), but food items (varenyky, borsch) provide higher margins and increase average ticket size.</p>
              </div>
            </div>
          </BrandSection>

          <KeyTakeaways takeaways={[
            "Cultural experience sells beyond diaspora: Authentic traditions attract curious locals seeking new experiences",
            "The 12-month pivot: Successful brands transition from diaspora targeting to local customers within 6-12 months",
            "Quality over ethnicity: Must deliver excellent food/drink, not rely on nostalgia alone",
            "Multi-location validates concept: 24 venues prove the model works across different markets",
            "Expansion timing: Post-war solidarity created favorable environment for Ukrainian cultural concepts"
          ]} />
        </div>

        <div className="my-20 text-center">
          <div className="inline-block page-number">10</div>
        </div>

      </PageContainer>

      {/* CHAPTER 5: TECH & LOGISTICS */}
      <PageContainer>
        <ChapterDivider number="11" title="Tech & Logistics" icon={<Cpu className="w-12 h-12" />} />
        
        <p className="text-xl font-serif-alt text-center italic mb-20 text-muted-foreground max-w-3xl mx-auto">
          Ukrainian technology and logistics companies scaling infrastructure and services across European markets
        </p>

        {/* AJAX SYSTEMS */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Ajax Systems"
            founded="2011"
            hq="Kyiv, Ukraine"
            markets="100+ countries"
            website="https://ajax.systems"
            tagline="Smart security systems securing Europe"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Ajax Systems is a Ukrainian tech company producing wireless smart security systems. Founded in 2011, Ajax offers professional-grade security solutions (motion sensors, cameras, alarms, smart locks) that connect via proprietary radio protocol to central hubs, all controlled through smartphone apps.
            </p>
            <p className="mb-4">
              The company's products combine industrial-grade reliability with consumer-friendly design. Ajax systems are used in both residential and commercial settings—from apartments to retail stores to industrial facilities. The brand emphasizes ease of installation, long battery life, and interference-free operation.
            </p>
            <p>
              Ajax has attracted significant international investment, including $10 million from Horizon Capital, validating its technology and growth trajectory in European markets.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Ajax Systems products are sold in over 100 countries. The company has offices across Europe including Spain, France, Italy, UK, and Germany. These local offices provide technical support, training for installers, and sales infrastructure.
            </p>
            <p>
              The brand works with over 9,000 certified installation partners across Europe—professional security installers and integrators who recommend and install Ajax systems. This B2B2C model leverages professional installer networks rather than competing directly in consumer retail.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Professional Installer Channel</h4>
                <p>Rather than selling direct-to-consumer, Ajax partnered with security system installers and integrators. The company provides training, certification programs, and sales support to partners who become brand advocates.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Local Market Presence</h4>
                <p>Opened offices in major European markets to provide local-language support, comply with regulations (CE marking, GDPR for connected devices), and build relationships with installation partners and distributors.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Product Excellence</h4>
                <p>Invested heavily in R&D to create products that outperform competitors on key metrics: battery life (7+ years on sensors), range (up to 2,000m in open space), and reliability. Technical superiority convinced professional installers to switch to Ajax.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Hardware sales through 9,000+ certified installers</li>
              <li>Professional security integrator partnerships</li>
              <li>Subscription monitoring services (recurring revenue)</li>
              <li>Commercial/enterprise system sales</li>
              <li>Retail presence in electronics chains (secondary channel)</li>
              <li>Developer program for third-party integrations</li>
              <li>Training and certification programs for installers</li>
            </ul>
          </BrandSection>

          <PullQuote>
            "Ajax Systems attracted $10 million investment from Horizon Capital, recognizing the Ukrainian tech company's potential to transform European home and business security markets."
          </PullQuote>

          <KeyTakeaways takeaways={[
            "B2B2C model scales efficiently: Professional installer network provides distribution without massive retail investment",
            "Technical excellence drives adoption: Product superiority convinced professionals to recommend Ajax over established brands",
            "Local presence matters: European offices handle compliance, support, and relationship building",
            "Recurring revenue: Monitoring subscriptions create predictable income beyond hardware sales",
            "Certification programs build loyalty: Training installers creates network effects and brand advocacy"
          ]} />
        </div>

        {/* NOVA POSHTA */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader 
            name="Nova Poshta / Nova Post"
            founded="2001"
            hq="Kyiv, Ukraine"
            markets="128 branches in 16 EU countries"
            website="https://novaposhta.ua"
            tagline="Ukraine's logistics giant expanding across Europe"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <p className="mb-4">
              Nova Poshta is Ukraine's largest private postal and courier company, operating over 8,700 locations domestically. Founded in 2001, the company revolutionized Ukrainian logistics with its network of automated parcel lockers, next-day delivery, and user-friendly mobile app.
            </p>
            <p className="mb-4">
              In 2020, Nova Poshta delivered 327 million parcels in Ukraine alone. The company's success domestically came from solving real pain points: reliable tracking, convenient pickup locations, fast delivery, and reasonable pricing. The brand became synonymous with "post" for many Ukrainians.
            </p>
            <p>
              Starting in 2022, Nova Poshta rapidly expanded into Europe under the brand "Nova Post," opening 128 branches across 16 countries including Poland, Germany, France, Spain, and the UK by late 2024.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">
              Nova Post now operates across Poland, Germany, Czech Republic, Romania, Lithuania, Latvia, Estonia, France, Spain, Italy, UK, and other EU markets. The company serves both Ukrainian diaspora (initially primary customer base) and increasingly local European customers.
            </p>
            <p>
              Services include parcel delivery, money transfers (via Western Union integration), e-commerce fulfillment, and warehousing. The company leverages its technology platform (tracking app, automated sorting) as competitive advantage in European markets.
            </p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Diaspora First</h4>
                <p>Initial European expansion focused on Ukrainian communities abroad. Ukrainians in Poland, Germany, etc. already knew and trusted the brand, providing immediate customer base and word-of-mouth marketing.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Technology Transfer</h4>
                <p>Brought proven technology platform from Ukraine: mobile app with real-time tracking, automated sorting systems, and customer notification systems. This tech stack gave competitive edge over traditional European postal services.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Phased Growth</h4>
                <p>Started in Poland (large Ukrainian diaspora), established operations, then expanded to other markets. This incremental approach reduced risk and allowed learning before major capital deployment.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Service Expansion</h4>
                <p>Beyond basic parcel delivery, added money transfers, fulfillment services, and payment solutions. This ecosystem approach locks in customers and multiplies revenue per customer.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Parcel delivery (Ukraine ↔ Europe and within Europe)</li>
              <li>E-commerce fulfillment for online sellers</li>
              <li>Money transfer services (Western Union partnership)</li>
              <li>Warehousing and storage services</li>
              <li>Last-mile delivery for retailers</li>
              <li>Express and premium delivery tiers</li>
              <li>Packaging supplies and services</li>
              <li>Business logistics solutions</li>
            </ul>
          </BrandSection>

          <InsightBox title="Resilience as Brand Story">
            <p className="mb-3">
              Nova Poshta's continued operation during the 2022 war (delivering even in conflict zones, using generators during blackouts, armored vehicles in dangerous areas) built extraordinary brand equity. This resilience story became a powerful differentiator in European expansion.
            </p>
            <p>
              The company's tagline "We deliver no matter what" resonated with customers and created emotional connection beyond transactional service. This brand story helped Nova Post establish trust quickly in new European markets.
            </p>
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Leverage diaspora: Community abroad provides initial customers and market validation",
            "Technology as advantage: Proven digital platform differentiated from traditional European postal services",
            "Phased expansion: Step-by-step market entry reduces risk and enables learning",
            "Service ecosystem: Multiple services (delivery + payments + fulfillment) increase customer lifetime value",
            "Brand resilience: Operational continuity during crisis built trust and emotional connection"
          ]} />
        </div>

        <div className="my-20 text-center">
          <div className="inline-block page-number">12</div>
        </div>

        {/* Grammarly */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader
            name="Grammarly"
            founded="2009"
            hq="Kyiv & San Francisco"
            markets="Global (200+ countries)"
            website="https://grammarly.com"
            tagline="AI writing assistant used by 30M+ people daily"
          />

          <BrandSection title="Who They Are" icon={<Code className="w-6 h-6" />}>
            <p className="mb-4">
              Grammarly is a Ukrainian-founded AI writing assistant that has become essential infrastructure for English communication worldwide. Co-founded by Alex Shevchenko, Max Lytvyn, and Dmytro Lider, the company maintains its R&D headquarters in Kyiv with 400+ engineers.
            </p>
            <p>
              The product uses advanced NLP and machine learning to help users write clearly, correctly, and persuasively across emails, documents, and social media.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">Daily active users: <strong>30M+</strong></p>
            <p className="mb-4">Enterprise clients: 70,000+ teams including Dell, Zoom, and Cisco</p>
            <p className="mb-4">Valuation: $13B (2021)</p>
            <p>Annual recurring revenue: €400M+ (estimated)</p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Freemium at Scale</h4>
                <p>Grammarly offered a generous free tier that built massive user adoption before converting to paid premium features.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Browser Extension Dominance</h4>
                <p>Became embedded in users' daily workflows through Chrome, Safari, and Edge extensions—creating habit formation.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Enterprise Upsell</h4>
                <p>After proving individual value, launched Grammarly Business targeting teams with compliance, brand tone, and analytics features.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Premium subscriptions: Individual users paying $12-30/month for advanced features</li>
              <li>Grammarly Business: Team licenses with admin controls and style guides</li>
              <li>API licensing: Integration partnerships with platforms like Medium and LinkedIn</li>
              <li>Educational licenses: Institutional subscriptions for universities</li>
            </ul>
          </BrandSection>

          <PullQuote author="Alex Shevchenko, Co-founder">
            "We built Grammarly to disappear into your workflow—the best tools are the ones you forget you're using."
          </PullQuote>

          <InsightBox title="Evergrove Insight">
            Grammarly demonstrates how Ukrainian tech talent can build global-scale consumer products by focusing on daily-use problems and freemium distribution models.
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Use freemium to build massive adoption before monetization pressure",
            "Embed your product into daily workflows through integrations and extensions",
            "Start with individual users, then upsell enterprise once value is proven",
            "Maintain R&D in Ukraine while building global commercial presence"
          ]} />
        </div>

        {/* Additional Fashion Brand */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader
            name="PASKAL"
            founded="2008"
            hq="Kyiv, Ukraine"
            markets="EU, USA, Middle East"
            website="https://paskal.com.ua"
            tagline="Avant-garde draping and architectural fashion"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              PASKAL, founded by designer Julie Paskal, is known for sculptural silhouettes created through innovative fabric manipulation techniques. The brand combines Ukrainian craft traditions with contemporary avant-garde aesthetics.
            </p>
            <p>
              Each collection features signature draping, pleating, and architectural construction that requires no cutting—fabric is transformed through heat-setting and shaping alone.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">Export percentage: <strong>80%</strong></p>
            <p className="mb-4">Key stockists: Browns (London), Galeries Lafayette (Paris), Luisa Via Roma (Florence)</p>
            <p className="mb-4">Fashion week presence: Paris, Milan, Kyiv Fashion Week</p>
            <p>Retail price range: €300-1,500</p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Craft as IP</h4>
                <p>PASKAL patented several fabric manipulation techniques, positioning them as technical innovation rather than just design.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Showroom Partnerships</h4>
                <p>Worked with specialized showrooms like Tomorrow Agency to access high-end European buyers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Editorial Focus</h4>
                <p>Prioritized fashion press and editorial features over paid advertising—building credibility through Vogue, Elle, and Harper's Bazaar coverage.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale collections: Seasonal orders from luxury multi-brand boutiques</li>
              <li>Made-to-order: Custom pieces for private clients</li>
              <li>Collaborations: Limited capsules with international brands</li>
              <li>Masterclasses: Workshops teaching PASKAL's signature techniques</li>
            </ul>
          </BrandSection>

          <InsightBox title="Evergrove Insight">
            PASKAL proves that Ukrainian designers can compete at the highest level of European fashion by treating craft techniques as proprietary technology.
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Develop signature techniques that can be positioned as technical innovation",
            "Use specialized showrooms to access luxury retail buyers",
            "Build editorial credibility before investing in paid marketing",
            "Offer educational experiences (workshops) as brand authority builders"
          ]} />
        </div>

        {/* Additional Beauty Brand */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader
            name="Melli"
            founded="2016"
            hq="Lviv, Ukraine"
            markets="Ukraine, Poland, Baltic states"
            website="https://melli.com.ua"
            tagline="Honey-based skincare and wellness products"
          />

          <BrandSection title="Who They Are" icon={<Sparkles className="w-6 h-6" />}>
            <p className="mb-4">
              Melli creates premium skincare and wellness products using Ukrainian honey, propolis, and bee-derived ingredients. The brand combines traditional apitherapy knowledge with modern formulation science.
            </p>
            <p>
              All honey is sourced from partner apiaries in the Carpathian region, with full traceability and organic certification.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">Export percentage: <strong>35%</strong></p>
            <p className="mb-4">Distribution: 200+ pharmacies and natural beauty stores across Poland and Baltics</p>
            <p className="mb-4">Product range: 45+ SKUs including face masks, serums, body care, and dietary supplements</p>
            <p>Retail price range: €8-45</p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Pharmacy Channel First</h4>
                <p>Entered EU through trusted pharmacy networks rather than competing in beauty retail.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Education-Led Marketing</h4>
                <p>Created content about apitherapy benefits, positioning honey as a science-backed ingredient.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Sustainability Story</h4>
                <p>Highlighted bee conservation efforts and regenerative beekeeping practices as core brand values.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Skincare products: Face and body care sold through retail</li>
              <li>Supplements: Bee pollen, propolis, and royal jelly capsules</li>
              <li>Gift sets: Seasonal bundles for corporate and consumer gifting</li>
              <li>Private label: White-label honey skincare for spa brands</li>
            </ul>
          </BrandSection>

          <InsightBox title="Evergrove Insight">
            Melli demonstrates how niche ingredient stories can create differentiation in crowded beauty markets—especially when backed by sustainability credentials.
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Consider pharmacy channels for science-backed beauty products",
            "Build ingredient education content to establish category authority",
            "Use sustainability and traceability as premium positioning tools",
            "Explore B2B opportunities (private label, spa partnerships) alongside retail"
          ]} />
        </div>

        {/* Additional Home Brand */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader
            name="OMELO Design"
            founded="2015"
            hq="Kyiv, Ukraine"
            markets="EU, USA, Middle East"
            website="https://omelo.design"
            tagline="Minimalist ceramics and modern tableware"
          />

          <BrandSection title="Who They Are" icon={<Home className="w-6 h-6" />}>
            <p className="mb-4">
              OMELO Design creates minimalist ceramic tableware and home accessories that blend Ukrainian pottery traditions with Scandinavian-inspired design. Founded by Olena Melnyk, the brand focuses on handcrafted, sustainable production.
            </p>
            <p>
              Each piece is made in small batches using natural clays from the Poltava region, with glazes developed in-house to create distinctive matte and glossy finishes.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">Export percentage: <strong>70%</strong></p>
            <p className="mb-4">Key stockists: Folklore (London), TOAST (UK), Manufactum (Germany), ABC Home (NYC)</p>
            <p className="mb-4">Trade shows: Maison &amp; Objet Paris, Ambiente Frankfurt</p>
            <p>Retail price range: €25-180 per piece</p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Trade Show Investment</h4>
                <p>Exhibited at Maison &amp; Objet and Ambiente to access European interior buyers in a curated environment.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Made-to-Order Model</h4>
                <p>Operates primarily on pre-orders for retailers, minimizing inventory risk while maintaining artisanal quality.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Storytelling Through Process</h4>
                <p>Shares behind-the-scenes content of pottery making, kiln firing, and glazing to build authenticity and emotional connection.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Wholesale orders: Seasonal collections for boutiques and lifestyle stores</li>
              <li>DTC e-commerce: Direct sales through brand website</li>
              <li>Custom commissions: Bespoke pieces for restaurants and hotels</li>
              <li>Workshops: Pottery classes and ceramic painting experiences</li>
            </ul>
          </BrandSection>

          <InsightBox title="Evergrove Insight">
            OMELO shows that handcrafted home goods can command premium prices in European markets when positioned at the intersection of craft heritage and contemporary design.
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Trade shows remain essential for home and gift buyers",
            "Made-to-order reduces risk while maintaining quality standards",
            "Process documentation builds authenticity and brand story",
            "B2B hospitality sector offers high-value custom opportunities"
          ]} />
        </div>

        {/* Additional Food Brand */}
        <div className="mb-32 pb-16 border-b border-secondary">
          <BrandHeader
            name="Lviv Handmade Chocolate"
            founded="2008"
            hq="Lviv, Ukraine"
            markets="Ukraine, Poland, Germany, Austria"
            website="https://chocolate.lviv.ua"
            tagline="Artisan chocolate celebrating Ukrainian flavors"
          />

          <BrandSection title="Who They Are" icon={<Package className="w-6 h-6" />}>
            <p className="mb-4">
              Lviv Handmade Chocolate creates premium artisan chocolates inspired by historical Lviv recipes and Ukrainian ingredients. The brand operates flagship cafés in Lviv and has expanded into retail export across Central Europe.
            </p>
            <p>
              The product line includes filled chocolates, chocolate bars with local ingredients (walnuts, sunflower seeds, honey), and seasonal gift collections with ornate Ukrainian-inspired packaging.
            </p>
          </BrandSection>

          <BrandSection title="Numbers & Footprint" icon={<Globe className="w-6 h-6" />}>
            <p className="mb-4">Export percentage: <strong>25%</strong></p>
            <p className="mb-4">Distribution: Gourmet food stores, specialty delicatessens, Ukrainian diaspora shops</p>
            <p className="mb-4">Flagship locations: 10+ cafés in Ukraine, 2 in Poland</p>
            <p>Retail price range: €8-45 per box</p>
          </BrandSection>

          <BrandSection title="Strategy That Worked" icon={<Target className="w-6 h-6" />}>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Tourism as Launch Pad</h4>
                <p>Built brand awareness through tourists visiting Lviv cafés, who became ambassadors and online customers.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Storytelling Packaging</h4>
                <p>Packaging features Lviv landmarks and Ukrainian folk art, making products giftable and Instagram-friendly.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2 text-primary">Corporate Gifting</h4>
                <p>Developed custom corporate gift programs for European companies wanting unique, culturally rich gifts.</p>
              </div>
            </div>
          </BrandSection>

          <BrandSection title="Diversified Revenue Streams" icon={<TrendingUp className="w-6 h-6" />}>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Retail chocolate: Boxes and bars sold in specialty food stores</li>
              <li>Café experiences: Coffee and chocolate cafés in prime tourist locations</li>
              <li>Corporate gifts: Custom-branded chocolates for businesses</li>
              <li>Online DTC: E-commerce for international customers</li>
              <li>Chocolate workshops: Tasting events and chocolate-making classes</li>
            </ul>
          </BrandSection>

          <InsightBox title="Evergrove Insight">
            Lviv Handmade Chocolate demonstrates how cultural tourism can seed international retail expansion by creating brand ambassadors organically.
          </InsightBox>

          <KeyTakeaways takeaways={[
            "Tourism creates organic brand ambassadors for export markets",
            "Cultural packaging enhances giftability and retail appeal",
            "Corporate gifting offers high-margin, recurring revenue",
            "Experience retail (cafés, workshops) builds brand equity beyond products"
          ]} />
        </div>

        <div className="my-20 text-center">
          <div className="inline-block page-number">18</div>
        </div>

      </PageContainer>

      {/* PART II - SUCCESS PATTERNS & FRAMEWORK */}
      <SuccessPatterns />

      {/* THE FRAMEWORK */}
      <div className="bg-background py-20">
        <PageContainer>
          <div className="text-center mb-20">
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6">
              The Framework
            </h2>
            <p className="font-serif-alt text-xl italic text-muted-foreground max-w-3xl mx-auto">
              Detailed market entry strategies and operational playbooks
            </p>
            <div className="section-divider mt-8 max-w-md mx-auto" />
          </div>
          
          <div className="space-y-8 mt-16">
            <FrameworkCard
              title="European Market Entry Paths"
              description="Understanding your options for entering European markets"
              icon={<Map className="w-8 h-8" />}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Direct-to-Consumer (DTC)</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Own e-commerce platform</li>
                    <li>• Social media sales</li>
                    <li>• Pop-up stores</li>
                    <li>• Flagship locations</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Wholesale Distribution</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• Department stores</li>
                    <li>• Concept boutiques</li>
                    <li>• Multi-brand retailers</li>
                    <li>• Online platforms (Net-a-Porter, Farfetch)</li>
                  </ul>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Consignment vs. Wholesale Models"
              description="The two primary approaches for retail partnerships"
              icon={<Building className="w-8 h-8" />}
            >
              <div className="prose prose-sm max-w-none">
                <p className="mb-4">
                  <strong>Consignment:</strong> You ship product to retailers who only pay for what sells. Lower risk for them, but you maintain inventory ownership. Typical splits: 60/40 or 70/30 in your favor.
                </p>
                <p>
                  <strong>Wholesale:</strong> Retailers purchase inventory upfront at 40-50% of retail price. You get paid immediately but they assume inventory risk. Better for cash flow, requires proven sell-through data.
                </p>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="The Evergrove Funnel"
              description="Our proven framework for systematic market entry"
              icon={<Rocket className="w-8 h-8" />}
            >
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Pilot Phase (Months 1-3)</h4>
                    <p className="text-sm text-foreground/80">Test with 3-5 stockists. Gather data on sell-through, customer feedback, pricing elasticity.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Optimize (Months 4-6)</h4>
                    <p className="text-sm text-foreground/80">Kill SKUs with &lt;60% sell-through. Double down on winners. Refine pricing and positioning.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-primary rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Scale (Months 7-12)</h4>
                    <p className="text-sm text-foreground/80">Expand to proven market segments. Add complementary stockists. Negotiate better terms.</p>
                  </div>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Pricing Architecture for EU Markets"
              description="How to structure pricing that works across distribution channels"
              icon={<TrendingUp className="w-8 h-8" />}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">The Standard Model</h4>
                  <div className="bg-secondary/30 p-4 rounded space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Retail Price:</span>
                      <span className="font-semibold">€100 (100%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Retailer Margin:</span>
                      <span className="font-semibold">€50 (50%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Your Wholesale Price:</span>
                      <span className="font-semibold">€50 (50%)</span>
                    </div>
                    <div className="border-t border-secondary pt-2 mt-2">
                      <span className="text-xs text-muted-foreground">From your €50:</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Production Cost:</span>
                      <span>€20 (40%)</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Logistics & Duties:</span>
                      <span>€7.50 (15%)</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span>Marketing & Operations:</span>
                      <span>€5 (10%)</span>
                    </div>
                    <div className="flex justify-between font-bold text-accent pt-2 border-t border-secondary">
                      <span>Net Margin:</span>
                      <span>€17.50 (35%)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Key Considerations</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>• French & Italian boutiques expect 55-60% margins</li>
                    <li>• German retailers often work on 45-50% margins</li>
                    <li>• Department stores demand 50-55% plus markdown allowances</li>
                    <li>• Online platforms (Farfetch, Net-a-Porter) take 30-40% commission</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Currency Strategy</h4>
                  <p className="text-sm text-foreground/80 mb-2">
                    Always price in EUR for European markets. Build in 3-5% buffer for currency fluctuations. 
                    Consider dynamic pricing tools that adjust for exchange rate changes while maintaining margin floors.
                  </p>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Market Selection Framework"
              description="How to choose your first European market"
              icon={<Map className="w-8 h-8" />}
            >
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-secondary/20 p-6 rounded">
                    <h4 className="font-semibold mb-3 text-accent">Tier 1: Gateway Markets</h4>
                    <p className="text-sm mb-3">Best for initial testing—lower barriers, cultural affinity</p>
                    <ul className="space-y-1 text-sm">
                      <li>🇵🇱 Poland (cultural proximity, growing luxury sector)</li>
                      <li>🇨🇿 Czech Republic (design-conscious, manageable logistics)</li>
                      <li>🇦🇹 Austria (premium positioning, German-speaking bridge)</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/20 p-6 rounded">
                    <h4 className="font-semibold mb-3 text-accent">Tier 2: Volume Markets</h4>
                    <p className="text-sm mb-3">Scale destinations—once you've proven product-market fit</p>
                    <ul className="space-y-1 text-sm">
                      <li>🇩🇪 Germany (huge market, price-conscious, efficiency-driven)</li>
                      <li>🇬🇧 UK (English language, trendsetter influence)</li>
                      <li>🇳🇱 Netherlands (logistics hub, early adopters)</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/20 p-6 rounded">
                    <h4 className="font-semibold mb-3 text-accent">Tier 3: Prestige Markets</h4>
                    <p className="text-sm mb-3">Credibility builders—harder entry, high value for brand</p>
                    <ul className="space-y-1 text-sm">
                      <li>🇫🇷 France (fashion/luxury gatekeeper, prestigious retailers)</li>
                      <li>🇮🇹 Italy (design heritage, quality expectations)</li>
                      <li>🇨🇭 Switzerland (ultra-premium, limited but high-value)</li>
                    </ul>
                  </div>

                  <div className="bg-secondary/20 p-6 rounded">
                    <h4 className="font-semibold mb-3 text-accent">Tier 4: Niche Opportunities</h4>
                    <p className="text-sm mb-3">Specialized markets with specific advantages</p>
                    <ul className="space-y-1 text-sm">
                      <li>🇸🇪 Nordics (sustainability focus, design appreciation)</li>
                      <li>🇪🇸 Spain (growing fashion scene, Mediterranean reach)</li>
                      <li>🇧🇪 Belgium (EU headquarters, international buyers)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Logistics & Compliance Essentials"
              description="Navigating EU regulations and operational requirements"
              icon={<Package className="w-8 h-8" />}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Must-Have Registrations</h4>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold text-sm mb-1">EORI Number</h5>
                      <p className="text-sm text-foreground/80">Economic Operators Registration and Identification number—required for customs. Free to register, takes 3-5 days.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold text-sm mb-1">VAT/IOSS Registration</h5>
                      <p className="text-sm text-foreground/80">Import One-Stop Shop simplifies VAT collection for shipments under €150. Register once, sell EU-wide.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold text-sm mb-1">EU Representative</h5>
                      <p className="text-sm text-foreground/80">Cosmetics and certain products require an EU-based responsible person. Services available from €500-2000/year.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Product Certification by Category</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-semibold mb-2">Fashion & Textiles</h5>
                      <ul className="space-y-1 text-xs text-foreground/80">
                        <li>• REACH compliance (chemical restrictions)</li>
                        <li>• Care labeling in local languages</li>
                        <li>• Fiber content declarations</li>
                        <li>• Country of origin marking</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Cosmetics & Beauty</h5>
                      <ul className="space-y-1 text-xs text-foreground/80">
                        <li>• CPNP notification (EU cosmetics database)</li>
                        <li>• Product Information File (PIF)</li>
                        <li>• Safety assessment by toxicologist</li>
                        <li>• Ingredient labeling (INCI names)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Food & Beverage</h5>
                      <ul className="space-y-1 text-xs text-foreground/80">
                        <li>• HACCP certification</li>
                        <li>• Nutritional labeling</li>
                        <li>• Allergen declarations</li>
                        <li>• Import licenses (alcohol requires special permits)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Electronics & Tech</h5>
                      <ul className="space-y-1 text-xs text-foreground/80">
                        <li>• CE marking</li>
                        <li>• RoHS compliance (hazardous substances)</li>
                        <li>• WEEE registration (recycling)</li>
                        <li>• Product safety testing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Distribution Partnership Models"
              description="Understanding agents, distributors, and hybrid approaches"
              icon={<Users className="w-8 h-8" />}
            >
              <div className="space-y-6">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-secondary/30">
                      <tr>
                        <th className="text-left p-3 font-semibold">Model</th>
                        <th className="text-left p-3 font-semibold">How It Works</th>
                        <th className="text-left p-3 font-semibold">Commission</th>
                        <th className="text-left p-3 font-semibold">Best For</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary">
                      <tr>
                        <td className="p-3 font-semibold">Sales Agent</td>
                        <td className="p-3">Introduces you to retailers, facilitates orders. You invoice retailers directly.</td>
                        <td className="p-3">10-15% of net sales</td>
                        <td className="p-3">When you want control over pricing & relationships</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Distributor</td>
                        <td className="p-3">Buys inventory from you, sells to retailers. Takes on inventory risk.</td>
                        <td className="p-3">Buys at 30-40% of retail</td>
                        <td className="p-3">When you want hands-off market presence</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Master Distributor</td>
                        <td className="p-3">Exclusive rights for entire country/region. Handles everything.</td>
                        <td className="p-3">Buys at 25-35% of retail</td>
                        <td className="p-3">Mature brands entering new territories</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-semibold">Hybrid (Evergrove Model)</td>
                        <td className="p-3">Agent support + logistics hub + compliance. You maintain control.</td>
                        <td className="p-3">15-20% of net + services</td>
                        <td className="p-3">Emerging brands wanting support without losing control</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-secondary/20 p-6 rounded">
                  <h4 className="font-semibold mb-3">Red Flags When Evaluating Partners</h4>
                  <ul className="space-y-2 text-sm text-foreground/80">
                    <li>🚩 Asking for exclusive rights before proving sell-through</li>
                    <li>🚩 No established retailer relationships they can show</li>
                    <li>🚩 Demanding upfront payments or "marketing fees"</li>
                    <li>🚩 Representing 50+ brands (too diluted to give you attention)</li>
                    <li>🚩 No clear performance metrics or reporting structure</li>
                  </ul>
                </div>
              </div>
            </FrameworkCard>

            <FrameworkCard
              title="Digital Strategy for EU Markets"
              description="E-commerce platforms and social media approaches by market"
              icon={<Globe className="w-8 h-8" />}
            >
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Platform Strategy by Market</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-secondary p-4 rounded">
                      <h5 className="font-semibold mb-2">UK Market</h5>
                      <p className="text-xs text-muted-foreground mb-2">Key platforms</p>
                      <ul className="text-sm space-y-1">
                        <li>• ASOS (marketplace program)</li>
                        <li>• Farfetch (luxury fashion)</li>
                        <li>• Wolf & Badger (emerging designers)</li>
                        <li>• Not On The High Street (gifts/home)</li>
                      </ul>
                    </div>
                    <div className="border border-secondary p-4 rounded">
                      <h5 className="font-semibold mb-2">German Market</h5>
                      <p className="text-xs text-muted-foreground mb-2">Key platforms</p>
                      <ul className="text-sm space-y-1">
                        <li>• Zalando (fashion marketplace)</li>
                        <li>• AboutYou (younger demographic)</li>
                        <li>• Otto (department store online)</li>
                        <li>• Amazon.de (logistics advantage)</li>
                      </ul>
                    </div>
                    <div className="border border-secondary p-4 rounded">
                      <h5 className="font-semibold mb-2">French Market</h5>
                      <p className="text-xs text-muted-foreground mb-2">Key platforms</p>
                      <ul className="text-sm space-y-1">
                        <li>• 24S (LVMH-owned, prestige positioning)</li>
                        <li>• La Redoute (mainstream fashion/home)</li>
                        <li>• Smallable (design-focused families)</li>
                        <li>• Veepee (flash sales, brand awareness)</li>
                      </ul>
                    </div>
                    <div className="border border-secondary p-4 rounded">
                      <h5 className="font-semibold mb-2">Pan-European</h5>
                      <p className="text-xs text-muted-foreground mb-2">Multi-market reach</p>
                      <ul className="text-sm space-y-1">
                        <li>• Net-a-Porter (luxury, 170+ countries)</li>
                        <li>• Matchesfashion (premium positioning)</li>
                        <li>• Ssense (streetwear/luxury hybrid)</li>
                        <li>• Mytheresa (luxury, German heritage)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Social Media Strategy by Market</h4>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold mb-1">Instagram</h5>
                      <p className="text-foreground/80">Primary channel for fashion/beauty/home. French & Italian audiences highly engaged. Use Stories for behind-the-scenes, Reels for discovery.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold mb-1">TikTok</h5>
                      <p className="text-foreground/80">Exploding in UK & Germany for Gen Z reach. Product demos and "get ready with me" content performs well. Local language essential.</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h5 className="font-semibold mb-1">Pinterest</h5>
                      <p className="text-foreground/80">Underutilized for European markets but strong ROI for home/design brands. German users particularly active in home décor planning.</p>
                    </div>
                  </div>
                </div>
              </div>
            </FrameworkCard>
          </div>
        </PageContainer>
      </div>

      {/* PART III - TEMPLATES & TOOLS */}
      <PageContainer className="mt-32">
        <div className="text-center mb-20">
          <div className="page-number mb-6">PART III</div>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6">
            Templates & Tools
          </h2>
          <p className="font-serif-alt text-xl italic text-muted-foreground max-w-3xl mx-auto">
            Practical resources to accelerate your European expansion
          </p>
          <div className="section-divider mt-8 max-w-md mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          <div className="bg-card border border-secondary p-8">
            <CheckCircle2 className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Export Readiness Checklist</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Product meets EU compliance standards</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Multilingual packaging and labeling ready</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>VAT/IOSS registration completed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>EU trademark protection filed</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Logistics partners identified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">•</span>
                <span>Pricing structure optimized for EU markets</span>
              </li>
            </ul>
          </div>

          <div className="bg-card border border-secondary p-8">
            <Package className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Margin Calculator</h3>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-secondary pb-2">
                <span>Retail Price</span>
                <span className="font-semibold">€100</span>
              </div>
              <div className="flex justify-between border-b border-secondary pb-2">
                <span>Wholesale Price (50%)</span>
                <span className="font-semibold">€50</span>
              </div>
              <div className="flex justify-between border-b border-secondary pb-2">
                <span>Production Cost</span>
                <span className="font-semibold">€20</span>
              </div>
              <div className="flex justify-between border-b border-secondary pb-2">
                <span>Logistics & Duties (15%)</span>
                <span className="font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between font-bold text-base pt-2">
                <span>Your Margin</span>
                <span className="text-accent">€22.50 (45%)</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <div className="bg-card border border-secondary p-8">
            <Lightbulb className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Retailer Outreach Templates</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-2">Cold Introduction Email</h4>
                <div className="bg-secondary/20 p-3 rounded text-xs font-mono">
                  <p className="mb-2">Subject: Ukrainian [Category] Brand for [Store Name]</p>
                  <p className="mb-2">Hi [Buyer Name],</p>
                  <p className="mb-2">I'm [Name] from [Brand], a Ukrainian [category] brand currently stocked in [prestigious retailer]. We've been following [Store Name] and believe our [product type] would resonate with your customers.</p>
                  <p className="mb-2">[One sentence USP]. [One sentence traction metric].</p>
                  <p>Would you be open to seeing our lookbook? Happy to send samples.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-secondary p-8">
            <Target className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">SKU Performance Tracker</h3>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/80 mb-3">Track sell-through rates to identify winners and underperformers</p>
              <div className="bg-secondary/20 p-3 rounded">
                <div className="grid grid-cols-4 gap-2 font-semibold text-xs mb-2">
                  <div>SKU</div>
                  <div>Units Shipped</div>
                  <div>Sold</div>
                  <div>Sell-Through</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs border-t border-secondary pt-2">
                  <div>001-BLK</div>
                  <div>50</div>
                  <div>42</div>
                  <div className="text-accent font-semibold">84%</div>
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs border-t border-secondary pt-2">
                  <div>002-WHT</div>
                  <div>50</div>
                  <div>28</div>
                  <div className="text-destructive font-semibold">56%</div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground italic">Kill SKUs below 60% sell-through after 90 days</p>
            </div>
          </div>

          <div className="bg-card border border-secondary p-8">
            <ArrowRight className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Market Entry Budget Template</h3>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/80 mb-3">3-Month Pilot Phase Budget Breakdown</p>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Product samples (5 stockists)</span>
                  <span className="font-semibold">€2,500</span>
                </div>
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Shipping & logistics</span>
                  <span className="font-semibold">€800</span>
                </div>
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Compliance & certifications</span>
                  <span className="font-semibold">€1,200</span>
                </div>
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Marketing materials</span>
                  <span className="font-semibold">€600</span>
                </div>
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Trade show (if applicable)</span>
                  <span className="font-semibold">€3,000</span>
                </div>
                <div className="flex justify-between border-b border-secondary pb-1">
                  <span>Agent/consultant fees</span>
                  <span className="font-semibold">€1,500</span>
                </div>
                <div className="flex justify-between font-bold pt-2">
                  <span>Total Pilot Investment</span>
                  <span className="text-accent">€9,600</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-secondary p-8">
            <Award className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Trade Show Preparation Checklist</h3>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Book booth 6+ months in advance</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Design booth with brand identity in mind</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Prepare lookbooks and line sheets (print + digital)</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Bring order forms with clear terms</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Create buyer appointment schedule pre-show</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Pack samples with backup inventory</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Arrange local accommodation near venue</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span>Prepare elevator pitch in English + local language</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card border border-secondary p-8">
            <Globe className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Cultural Adaptation Guide</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold mb-1">🇫🇷 French Buyers</h4>
                <p className="text-xs text-foreground/80">Appreciate: Heritage story, artisanal quality, elegant aesthetics. Avoid: Hard selling, over-promising on delivery. Tip: Build personal relationships first.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">🇩🇪 German Buyers</h4>
                <p className="text-xs text-foreground/80">Appreciate: Precision, reliability, clear data. Avoid: Vague promises, late deliveries. Tip: Have all paperwork perfect, be punctual.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">🇬🇧 UK Buyers</h4>
                <p className="text-xs text-foreground/80">Appreciate: Innovation, brand story, commercial viability. Avoid: Being too formal. Tip: Show press coverage and celebrity endorsements.</p>
              </div>
              <div>
                <h4 className="font-semibold mb-1">🇮🇹 Italian Buyers</h4>
                <p className="text-xs text-foreground/80">Appreciate: Design excellence, craftsmanship, visual impact. Avoid: Poor quality materials. Tip: Emphasize artisanal production methods.</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-secondary p-8">
            <ShoppingBag className="w-10 h-10 text-accent mb-4" />
            <h3 className="font-serif text-2xl font-semibold mb-4">Partnership Evaluation Scorecard</h3>
            <div className="space-y-3 text-sm">
              <p className="text-foreground/80 mb-3">Rate potential distributors/agents (1-5 scale)</p>
              <div className="space-y-2">
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Existing retailer relationships</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Category expertise</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Market knowledge</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Brand portfolio size (fewer is better)</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Communication responsiveness</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <div className="flex justify-between items-center border-b border-secondary pb-1">
                  <span>Financial stability</span>
                  <span className="text-accent">⭐⭐⭐⭐⭐</span>
                </div>
                <p className="text-xs text-muted-foreground italic pt-2">Score below 20/30? Keep looking.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Case Studies Section */}
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary mb-4">
              Deep Dive Case Studies
            </h2>
            <p className="font-serif-alt text-lg italic text-muted-foreground max-w-2xl mx-auto">
              Detailed breakdowns of specific campaigns and market entry strategies
            </p>
            <div className="section-divider mt-8 max-w-md mx-auto" />
          </div>

          {/* Case Study 1: Sleeper x Net-a-Porter */}
          <div className="mb-20 bg-card border-l-4 border-accent p-8">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-3xl font-bold text-foreground">Case Study: Sleeper's Net-a-Porter Launch</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The Challenge</h4>
                <p className="text-foreground/90">In 2017, Sleeper was a Kyiv-based brand with a growing Instagram following but zero presence in mainstream luxury retail. Net-a-Porter represented the holy grail—instant access to their 3 million+ global customers and the credibility that comes with NAP's curation.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The Approach</h4>
                <div className="space-y-3 text-foreground/90">
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">1</div>
                    <div>
                      <h5 className="font-semibold mb-1">Brand Positioning</h5>
                      <p className="text-sm">Sleeper positioned their feather-trimmed pajamas not as sleepwear, but as "party pajamas"—luxury loungewear that could be worn out. This reframing was crucial for NAP's buyers who needed to see commercial potential beyond nightwear.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">2</div>
                    <div>
                      <h5 className="font-semibold mb-1">Celebrity Seeding</h5>
                      <p className="text-sm">Before the NAP meeting, Sleeper gifted sets to stylists and influencers. When Bella Hadid was photographed wearing Sleeper, it created the "cool factor" NAP looks for. The press coverage made NAP's buying team take notice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">3</div>
                    <div>
                      <h5 className="font-semibold mb-1">The Pitch</h5>
                      <p className="text-sm">Rather than pitching their full collection, Sleeper focused on 3 hero styles with proven sell-through data from their own e-commerce. They showed 90-day repeat purchase rates and average order values. Data + desire = partnership.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-accent text-primary rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-1">4</div>
                    <div>
                      <h5 className="font-semibold mb-1">Operational Readiness</h5>
                      <p className="text-sm">NAP required: EU warehouse capability, 48-hour shipping SLA, easy returns processing, professional packshots, and detailed product specs. Sleeper invested in all these systems before the partnership launched.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The Results</h4>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="bg-secondary/20 p-4 rounded">
                    <div className="text-2xl font-bold text-accent mb-1">Week 1</div>
                    <p className="text-xs text-foreground/80">Initial drop of 3 styles sold out in 72 hours. NAP immediately re-ordered with expanded SKU range.</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded">
                    <div className="text-2xl font-bold text-accent mb-1">Month 3</div>
                    <p className="text-xs text-foreground/80">Sleeper became a top 10 loungewear brand on NAP. Featured in NAP's editorial content and email campaigns.</p>
                  </div>
                  <div className="bg-secondary/20 p-4 rounded">
                    <div className="text-2xl font-bold text-accent mb-1">Year 1</div>
                    <p className="text-xs text-foreground/80">Partnership expanded to include NAP's sister site, The Outnet. Other luxury retailers (Harrods, Selfridges) reached out based on NAP validation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-accent/10 p-6 rounded border-l-4 border-accent">
                <h4 className="font-semibold mb-3">Key Lessons</h4>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Get your operations perfect BEFORE landing the big retailer—you won't get a second chance</li>
                  <li>• Start with 3-5 hero products, not your full catalog</li>
                  <li>• Celebrity/influencer validation opens doors that cold pitches cannot</li>
                  <li>• Reframe your product category if it helps buyers understand commercial potential</li>
                  <li>• NAP approval creates a halo effect—other retailers follow their lead</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Case Study 2: BEVZA Paris Fashion Week */}
          <div className="mb-20 bg-card border-l-4 border-accent p-8">
            <div className="flex items-center gap-3 mb-6">
              <Shirt className="w-8 h-8 text-accent" />
              <h3 className="font-serif text-3xl font-bold text-primary">Case Study: BEVZA's Paris Fashion Week Strategy</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The Challenge</h4>
                <p className="text-foreground/90">BEVZA had strong domestic success in Ukraine but minimal European recognition. Paris Fashion Week offered potential visibility but required massive investment with no guaranteed ROI. Many brands spend €50k+ on PFW and see zero sales impact.</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The Strategic Approach</h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold mb-2">Pre-Show Groundwork (3 months before)</h5>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>• Secured Ukrainian Fashion Week platform slot to generate content and press</li>
                      <li>• Hired Paris-based PR agency to pitch lookbook to French fashion editors</li>
                      <li>• Identified 15 target stockists and personally invited buyers to PFW showroom</li>
                      <li>• Created press kit emphasizing Ukrainian craftsmanship + minimalist aesthetic</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">During Fashion Week</h5>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>• Opted for showroom presentation (€8k) instead of runway (€40k+)</li>
                      <li>• Scheduled 30-minute appointment slots with pre-confirmed buyers</li>
                      <li>• Brought 2 full collections + fabricsamples for buyers to touch and feel</li>
                      <li>• Hosted intimate cocktail event for press and influencers</li>
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2">Post-Show Execution</h5>
                    <ul className="text-sm space-y-2 text-foreground/80">
                      <li>• Followed up within 48 hours with personalized emails and line sheets</li>
                      <li>• Offered special terms for first orders (extended payment, free shipping)</li>
                      <li>• Used press coverage and buyer interest to secure agents in France and Italy</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2 text-accent">The ROI</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold mb-2 text-accent">Investment</h5>
                    <div className="space-y-1 text-sm text-foreground/80">
                      <div className="flex justify-between">
                        <span>Showroom rental</span>
                        <span>€8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>PR agency (3 months)</span>
                        <span>€6,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travel & accommodation</span>
                        <span>€3,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Samples & display</span>
                        <span>€4,000</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t border-secondary pt-1 mt-1">
                        <span>Total</span>
                        <span>€21,000</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-semibold mb-2 text-accent">Returns (First Year)</h5>
                    <div className="space-y-1 text-sm text-foreground/80">
                      <div className="flex justify-between">
                        <span>Confirmed orders at show</span>
                        <span>€45,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Follow-up orders (6 months)</span>
                        <span>€78,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>E-commerce lift (EU)</span>
                        <span>€32,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Agent-sourced business</span>
                        <span>€65,000</span>
                      </div>
                      <div className="flex justify-between font-semibold border-t border-secondary pt-1 mt-1 text-accent">
                        <span>Total</span>
                        <span>€220,000</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-accent font-semibold mt-4">10.5x return on investment in year 1</p>
              </div>

              <div className="bg-accent/10 p-6 rounded border-l-4 border-accent">
                <h4 className="font-semibold mb-3">Replicable Tactics</h4>
                <ul className="space-y-2 text-sm text-foreground/90">
                  <li>• Showroom &gt; runway for emerging brands (better ROI, actual buyer meetings)</li>
                  <li>• Pre-schedule appointments—don't rely on walk-ins</li>
                  <li>• Invest in local PR to get press attending your showroom</li>
                  <li>• Offer first-order incentives to convert interest into commitments</li>
                  <li>• Use PFW validation to secure agents/distributors post-show</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Evergrove-Specific Content */}
        <div className="mt-32">
          <ChapterDivider number="19" title="The Evergrove Method" icon={<Leaf className="w-12 h-12" />} />

          <div className="space-y-12">
            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">How Evergrove Works</h3>
              <div className="prose prose-lg max-w-none text-foreground/90">
                <p className="text-xl mb-6">
                  Evergrove is not a traditional distributor, agent, or consultant. We're a hybrid platform designed specifically for Ukrainian brands entering European markets.
                </p>
                
                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-card border border-secondary p-6 rounded">
                    <Building className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Market Access</h4>
                    <p className="text-sm text-foreground/80">Pre-vetted retailer network across 12 EU markets. We make warm introductions and facilitate initial meetings based on fit.</p>
                  </div>
                  <div className="bg-card border border-secondary p-6 rounded">
                    <Package className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Operational Support</h4>
                    <p className="text-sm text-foreground/80">EU logistics hub, compliance assistance, VAT/IOSS registration, and multi-language customer service infrastructure.</p>
                  </div>
                  <div className="bg-card border border-secondary p-6 rounded">
                    <Lightbulb className="w-10 h-10 text-accent mb-4" />
                    <h4 className="font-semibold text-lg mb-2">Strategic Guidance</h4>
                    <p className="text-sm text-foreground/80">Market selection, pricing strategy, product positioning, and ongoing optimization based on real sales data.</p>
                  </div>
                </div>

                <h4 className="font-semibold text-xl mb-4 text-accent">Our Model</h4>
                <p className="mb-4">
                  We work on a performance basis: 15-20% of net sales generated through our network, plus transparent service fees for logistics and compliance. You maintain full control of your brand, pricing, and relationships. We're incentivized only when you succeed.
                </p>

                <h4 className="font-semibold text-xl mb-4 text-accent">Who We Work With</h4>
                <p className="mb-4">
                  Evergrove partners with brands that meet these criteria:
                </p>
                <ul className="space-y-2 mb-6">
                  <li>• €100k+ annual revenue (proven product-market fit)</li>
                  <li>• Clear brand identity and positioning</li>
                  <li>• Production capacity to fulfill European orders</li>
                  <li>• Founder commitment to European expansion (not just "testing")</li>
                  <li>• Products that meet or can quickly achieve EU compliance</li>
                </ul>
              </div>
            </div>

            <div className="bg-secondary/30 p-10 rounded-lg">
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">Common Pitfalls to Avoid</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Pricing Too Low</h4>
                      <p className="text-sm text-foreground/80">Ukrainian brands often underprice for European markets. If your wholesale price doesn't leave 30%+ margin after ALL costs, you can't scale. Retailers won't respect low prices—they signal low quality.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Ignoring Compliance</h4>
                      <p className="text-sm text-foreground/80">"We'll figure it out later" kills deals. Retailers won't take on unknown liability. Get your REACH, CE marking, or CPNP done BEFORE pitching. One rejected order due to missing paperwork destroys credibility.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Spreading Too Thin</h4>
                      <p className="text-sm text-foreground/80">Trying to enter 5 markets simultaneously with no local presence equals failure. Master one market first. Prove the model. Then replicate. Geographic focus beats scattered efforts every time.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Wrong Channel Mix</h4>
                      <p className="text-sm text-foreground/80">DTC-only brands struggle with European customer acquisition costs. Wholesale-only brands can't control their story. You need both. But sequence matters: prove DTC traction, then leverage it for wholesale partnerships.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Cultural Misalignment</h4>
                      <p className="text-sm text-foreground/80">What works in Kyiv might not work in Paris. French buyers want heritage and craft story. Germans want precision and data. Italians want design excellence. One-size-fits-all positioning fails. Adapt by market.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">🚫</div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">No Follow-Through</h4>
                      <p className="text-sm text-foreground/80">Getting the first order is 20% of the work. Delivering on time, managing returns, providing sell-through support, reordering fast sellers—this operational excellence is what builds lasting partnerships. Most brands fail here.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-3xl font-bold text-primary mb-6">Understanding the European Buyer Mindset</h3>
              <div className="space-y-6">
                <div className="bg-card border-l-4 border-accent p-6">
                  <h4 className="font-semibold text-xl mb-3">What Buyers Actually Care About</h4>
                  <div className="space-y-4 text-foreground/90">
                    <div>
                      <h5 className="font-semibold mb-1">1. Sell-Through Predictability</h5>
                      <p className="text-sm">Can they confidently forecast how your product will perform? Buyers need historical data, even if it's from your own DTC channel. "We think it'll sell well" doesn't work. "This SKU has 85% sell-through in 60 days" does.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">2. Margin Protection</h5>
                      <p className="text-sm">Retail math is unforgiving. If they can't keystone (2x markup) your wholesale price and still be competitive, they won't buy. Give them room to discount without losing money.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">3. Brand Story That Travels</h5>
                      <p className="text-sm">Your Ukrainian heritage is an asset—if you position it right. "Made in Ukraine" signals craftsmanship and resilience. But it needs to connect to product quality and aesthetic, not just geography.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">4. Operational Reliability</h5>
                      <p className="text-sm">Late shipments, incorrect orders, poor packaging—these kill relationships fast. European buyers have zero tolerance for operational sloppiness. Be Swiss-watch reliable or don't bother.</p>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">5. Marketing Support</h5>
                      <p className="text-sm">Retailers want partners, not just suppliers. Provide high-res images, styled product shots, brand story copy, social media content. Make it easy for them to sell your product.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-accent p-6">
                  <h4 className="font-semibold text-xl mb-3">Decision-Making Timelines</h4>
                  <div className="space-y-3 text-sm text-foreground/80">
                    <p><strong>Boutiques (1-5 locations):</strong> Fast. Owner-operators can decide in one meeting. Order within 2 weeks if they like it.</p>
                    <p><strong>Small Chains (5-20 stores):</strong> Moderate. Buying committees meet monthly/quarterly. 4-8 weeks from pitch to PO.</p>
                    <p><strong>Department Stores:</strong> Slow. 6-12 month buying cycles. Plan a season ahead. Expect 2-3 meetings before decision.</p>
                    <p><strong>Online Platforms:</strong> Variable. Net-a-Porter can move in weeks. Zalando requires 3+ month onboarding with tech integration.</p>
                  </div>
                </div>

                <div className="bg-card border-l-4 border-accent p-6">
                  <h4 className="font-semibold text-xl mb-3">Red Flags That Kill Deals</h4>
                  <ul className="space-y-2 text-sm text-foreground/90">
                    <li>🚩 Unable to answer "What's your best seller?" with data</li>
                    <li>🚩 Vague delivery timelines ("around 4-6 weeks maybe")</li>
                    <li>🚩 No clear returns/defects policy</li>
                    <li>🚩 Pushy sales tactics ("You need to order now!")</li>
                    <li>🚩 Unrealistic minimum order quantities for emerging brands</li>
                    <li>🚩 Poor English communication (or no local language support)</li>
                    <li>🚩 No professional line sheets or lookbooks</li>
                    <li>🚩 Unclear about production capacity</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>

      {/* PART IV - READY TO GO EUROPEAN */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary via-primary to-secondary text-foreground px-6 py-20 mt-32">
        <div className="max-w-7xl w-full">
          <div className="text-center mb-16">
            <div className="page-number mb-12 text-accent">PARTNER WITH EVERGROVE</div>
            <h2 className="font-modern text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-accent">
              READY TO GO EUROPEAN?
            </h2>
            <p className="text-xl md:text-2xl text-foreground max-w-3xl mx-auto">
              We help founders go from local to European — beautifully, profitably, and fast.
            </p>
          </div>

          <ContactForm />

          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground">
              Questions? Email us at{" "}
              <a href="mailto:info@evergroveglobal.com" className="text-accent hover:underline">
                info@evergroveglobal.com
              </a>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Playbook;
