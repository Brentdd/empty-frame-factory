import artisanWork from "@/assets/artisan-work.jpg";
import { useTranslation } from "@/hooks/useTranslation";

export const DreamSection = () => {
  const { t } = useTranslation();
  
  return (
    <article id="dream" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest max-w-[900px] mx-auto mb-12 md:mb-16 leading-tight">
          {t('homepage.dream.headline1')}
          <br />
          <span className="text-sage">{t('homepage.dream.headline2')}</span>
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
              {t('homepage.dream.paragraph1').split('. ')[0]}. <strong className="text-forest font-bold">{t('homepage.dream.paragraph1').split('. ')[1]}</strong>
            </p>
            <p>{t('homepage.dream.paragraph2')}</p>
            <p>{t('homepage.dream.paragraph3')}</p>
            <p className="text-2xl font-bold text-forest my-8">{t('homepage.dream.paragraph4')}</p>
            <p className="text-xl text-sage">{t('homepage.dream.paragraph5')}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
