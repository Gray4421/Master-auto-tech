import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const MINIMAL_FAQS = [
  {
    question: "Where is MasterTech Auto Repair located?",
    answer: "We are at 151 S Forest St, Spartanburg, SC 29306, just minutes from Downtown Spartanburg."
  },
  {
    question: "What are your business hours?",
    answer: "Monday through Friday from 8:00 AM to 5:30 PM. A secure 24/7 key drop box is available for after-hours drop-off."
  },
  {
    question: "Do you service foreign and domestic vehicles?",
    answer: "Yes, our certified technicians service all domestic makes (Ford, Chevy, RAM, Jeep) as well as Asian and European imports (Toyota, Honda, BMW, Audi, Subaru)."
  },
  {
    question: "What warranty do you provide?",
    answer: "Qualifying repairs and parts are backed by a 24-Month / 24,000-Mile nationwide warranty."
  }
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-14 sm:py-16 bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-green-400">
            FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-white tracking-tight uppercase">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {MINIMAL_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-lg bg-black border border-zinc-800 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-3.5 px-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-white hover:text-green-400 transition-colors cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-zinc-500 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-green-400' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-900 pt-2.5">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
