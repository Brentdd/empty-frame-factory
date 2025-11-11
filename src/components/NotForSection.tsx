import { useTranslation } from "@/hooks/useTranslation";

export const NotForSection = () => {
  const { t } = useTranslation();
  
  return (
    <article className="bg-forest text-white py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center mb-12 md:mb-16">
          {t('homepage.notFor.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4">
              <span>✗</span> {t('homepage.notFor.wontWork.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>{t('homepage.notFor.wontWork.point1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>{t('homepage.notFor.wontWork.point2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>{t('homepage.notFor.wontWork.point3')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>{t('homepage.notFor.wontWork.point4')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✗</span>
                <span>{t('homepage.notFor.wontWork.point5')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white text-slate p-6 md:p-8 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.2)]">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-4 text-forest">
              <span>✓</span> {t('homepage.notFor.willWork.title')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>{t('homepage.notFor.willWork.point1')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>{t('homepage.notFor.willWork.point2')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>{t('homepage.notFor.willWork.point3')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>{t('homepage.notFor.willWork.point4')}</span>
              </li>
              <li className="flex items-start gap-4">
                <span>✓</span>
                <span>{t('homepage.notFor.willWork.point5')}</span>
              </li>
            </ul>
            <p className="mt-8 text-2xl font-bold text-forest text-center">{t('homepage.notFor.willWork.closing')}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
