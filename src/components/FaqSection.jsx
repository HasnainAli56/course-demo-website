import React, { useState } from 'react';
import { FAQS } from '../data/courses';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="py-16 lg:py-24 bg-white relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-brand-mint text-brand-teal text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
            <HelpCircle className="w-4 h-4" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
            Frequently Asked <span className="text-brand-teal">Questions</span>
          </h2>
          <p className="text-sm text-brand-muted">
            Find clear answers regarding our training courses, fees, certificates, and placement guarantees.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full p-5 text-left font-extrabold text-sm sm:text-base text-brand-navy bg-white hover:bg-slate-50 flex items-center justify-between transition-colors gap-4"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-mint text-brand-teal font-extrabold text-xs flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-teal' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 bg-slate-50 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fade-in">
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
}
