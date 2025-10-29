import artisanWork from "@/assets/artisan-work.jpg";

export const DreamSection = () => {
  return (
    <article id="dream" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest max-w-[900px] mx-auto mb-12 md:mb-16 leading-tight">
          Imagine walking past a boutique window in Geneva
          <br />
          <span className="text-sage">and seeing your product on display.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center mt-16">
          <img 
            src={artisanWork} 
            alt="Skilled artisan carefully crafting premium leather goods by hand in workshop" 
            className="aspect-[4/5] rounded-3xl object-cover shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            loading="lazy"
          />
          <div className="text-lg leading-relaxed space-y-6">
            <p>
              That's not a fantasy. <strong className="text-forest font-bold">That's exactly where your brand should be.</strong>
            </p>
            <p>
              You've spent years perfecting your craft. Your leather goods are museum-quality. Your textiles tell stories. Your designs deserve to be discovered by people who will pay what they're actually worth.
            </p>
            <p>
              The only thing standing between your workshop and European boutiques? The messy middle: compliance, import paperwork, retailer relationships, logistics, pricing strategy, marketplace optimization.
            </p>
            <p className="text-2xl font-bold text-forest my-8">That's the part we own.</p>
            <p className="text-xl text-sage">So you can stay focused on what you do best.</p>
          </div>
        </div>
      </div>
    </article>
  );
};
