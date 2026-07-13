import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle, FileQuestion } from 'lucide-react';
import { FAQS } from '../data';

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState<string | null>(FAQS[0].id);

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq-section" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        
        {/* Editorial Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#D72638]">
            COMMON QUERIES
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-[#111111] tracking-tight uppercase">
            SENSORY FAQ.
          </h2>
          <p className="text-gray-400 text-sm">
            Everything you need to know about paper weights, Heidelberg offset plate configurations, and delivery schedules in South India.
          </p>
        </div>

        {/* Accordions Container */}
        <div className="space-y-4">
          {FAQS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`border rounded-[24px] overflow-hidden transition-all duration-300 ${
                  isOpen ? 'bg-[#FAFAF8] border-[#CFA15D]' : 'bg-white border-gray-200 hover:border-gray-400'
                }`}
              >
                {/* Trigger Row */}
                <button
                  id={`faq-trigger-${faq.id}`}
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-center space-x-4 pr-4">
                    <div className={`p-2 rounded-xl flex items-center justify-center ${isOpen ? 'bg-[#D72638] text-white' : 'bg-gray-100 text-gray-500'}`}>
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <span className="font-sans font-bold text-sm md:text-base text-[#111111] leading-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-500 ${
                      isOpen ? 'rotate-180 text-[#D72638]' : ''
                    }`}
                  />
                </button>

                {/* Animated Body Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pl-16 md:pl-20">
                        <p className="text-[#111111]/70 text-sm leading-relaxed border-t border-gray-200/50 pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
