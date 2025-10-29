import { useState } from "react";

const faqs = [
  {
    question: "Do you work with any product category?",
    answer:
      "We focus where we can add most value: fashion accessories, leather goods, jewelry, textiles, home goods, and personal care. Categories where artisanship matters and regulatory barriers are manageable. If you make electronics or food products, we are not your team yet.",
  },
  {
    question: "Do I need to be legally registered in the EU?",
    answer:
      "No. We handle all EU compliance, registration, and legal requirements. You operate from wherever you operate now.",
  },
  {
    question: "What if my English is not perfect?",
    answer:
      "Not a problem. We work in multiple languages and handle all European communication. Language is never a barrier.",
  },
  {
    question: "How do you decide which brands to partner with?",
    answer:
      "We are selective. Your products need to be genuinely exceptional and have a compelling story. We would rather serve fewer brands excellently than spread ourselves thin.",
  },
  {
    question: "Do you require exclusivity?",
    answer:
      "Only for the territories where we are actively working. You keep all other regions and can sell direct-to-consumer everywhere. We only ask for exclusivity where we are investing resources to build your presence.",
  },
  {
    question: "How fast can we start?",
    answer:
      "If your products are ready and you have clear photos and information, we can move incredibly fast. First conversations to first European marketplace listing can happen in 2-3 weeks.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <article id="faq" className="bg-cream py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center text-forest mb-12 md:mb-16">
          Questions Every Brand Asks
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
