const cities = [
  { name: "Brussels", description: "EU decision-makers and concept stores" },
  { name: "Amsterdam", description: "Design-forward premium consumers" },
  { name: "Paris", description: "Where exceptional artisanship belongs" },
  { name: "London", description: "A market embracing brands with stories" },
  { name: "Madrid", description: "Untapped hunger for authentic craft" },
  { name: "Milan", description: "Quality speaks louder than budgets" },
  { name: "Zurich", description: "Consumers seeking products with meaning" },
  { name: "Geneva", description: "High-value consumer market" },
];

export const CitiesSection = () => {
  return (
    <article className="bg-forest text-white py-32 px-8" id="how-it-works">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            The Cities Your Products Deserve
          </h2>
          <p className="text-xl text-white/80 max-w-[800px] mx-auto">
            We don't just get you into "Europe." We get you into the Europe that matters for your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {cities.map((city) => (
            <div
              key={city.name}
              className="bg-white/10 backdrop-blur-md p-8 rounded-3xl transition-all duration-300 hover:bg-white/15 hover:-translate-y-2 cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2 text-gold">{city.name}</h3>
              <p className="text-white/80">{city.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-2xl font-bold mt-12 leading-relaxed">
          Your products are already good enough for these markets.
          <br />
          <span className="text-gold">You just need someone who knows how to get them there.</span>
        </p>
      </div>
    </article>
  );
};
