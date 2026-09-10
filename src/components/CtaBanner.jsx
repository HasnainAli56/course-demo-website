import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CtaBanner({ onOpenEnquire }) {
  return (
    <section className="py-14 bg-gradient-to-r from-brand-peach to-brand-peach-light relative overflow-hidden border-y border-brand-peach-dark/40">
      
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-white/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* CTA Text */}
          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Ready to Upgrade Your Skills?</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              Let's Build Your <span className="text-brand-teal">Future Together</span>
            </h2>

            <p className="text-sm sm:text-base text-brand-muted max-w-xl font-medium">
              Get in touch with our expert career counseling team and find the right course for your career growth.
            </p>
          </div>

          {/* CTA Button & Script Accent */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-center justify-center lg:justify-end gap-4">
            <button
              onClick={onOpenEnquire}
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-teal/20 hover:shadow-xl transition-all flex items-center gap-3 group"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="text-center lg:text-right">
              <span className="font-script text-2xl sm:text-3xl text-brand-teal font-bold tracking-wide">
                🌿 A Brighter Future Awaits
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
