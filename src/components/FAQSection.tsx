import { useState } from "react";
import { useTranslation } from "@/hooks/useTranslation";

export const FAQSection = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = t('homepage.faq.items') as Array<{ question: string; answer: string }>;

  return (
    <article id="faq" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest mb-12 md:mb-16">
          {t('homepage.faq.title')}
        </h2>

        <div className="max-w-[900px] mx-auto space-y-3 md:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-4 md:px-8 py-5 md:py-6 flex justify-between items-center font-semibold text-forest hover:bg-sage/5 transition-colors text-left min-h-[48px]"
              >
                <span className="text-base md:text-lg">{faq.question}</span>
                <span className="text-lg md:text-xl ml-4 flex-shrink-0">▼</span>
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-8 pb-5 md:pb-6 text-slate leading-relaxed text-sm md:text-base">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};
