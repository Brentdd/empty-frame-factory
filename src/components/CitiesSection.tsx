import { useTranslation } from "@/hooks/useTranslation";

export const CitiesSection = () => {
  const { t } = useTranslation();
  
  const cities = [
    { name: t('homepage.cities.brussels.name'), description: t('homepage.cities.brussels.description') },
    { name: t('homepage.cities.amsterdam.name'), description: t('homepage.cities.amsterdam.description') },
    { name: t('homepage.cities.paris.name'), description: t('homepage.cities.paris.description') },
    { name: t('homepage.cities.london.name'), description: t('homepage.cities.london.description') },
    { name: t('homepage.cities.madrid.name'), description: t('homepage.cities.madrid.description') },
    { name: t('homepage.cities.milan.name'), description: t('homepage.cities.milan.description') },
    { name: t('homepage.cities.zurich.name'), description: t('homepage.cities.zurich.description') },
    { name: t('homepage.cities.geneva.name'), description: t('homepage.cities.geneva.description') },
  ];

  return (
    <article className="bg-forest text-white py-32 px-8" id="how-it-works">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            {t('homepage.cities.title')}
          </h2>
          <p className="text-xl text-white/80 max-w-[800px] mx-auto">
            {t('homepage.cities.subtitle')}
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
          {t('homepage.cities.closing1')}
          <br />
          <span className="text-gold">{t('homepage.cities.closing2')}</span>
        </p>
      </div>
    </article>
  );
};
