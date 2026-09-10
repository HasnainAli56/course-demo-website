import React from 'react';
import { CAREER_STEPS } from '../data/courses';
import { BookOpen, Laptop, FileCheck, Briefcase, ArrowRight } from 'lucide-react';

const ICON_MAP = {
  BookOpen: BookOpen,
  Laptop: Laptop,
  FileCheck: FileCheck,
  Briefcase: Briefcase,
};

export default function CareerPath({ onOpenEnquire }) {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-white to-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            SUCCESS ROADMAP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight">
            Your 4-Step Journey to a <span className="text-brand-teal">High-Paying IT Career</span>
          </h2>
          <p className="text-base text-brand-muted">
            From complete beginner logic to landing your first job offer in top MNCs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {CAREER_STEPS.map((step, idx) => {
            const IconComp = ICON_MAP[step.icon] || BookOpen;

            return (
              <div
                key={idx}
                className="bg-white border border-slate-100 p-8 rounded-3xl shadow-sm hover:shadow-poster transition-all duration-300 relative group flex flex-col justify-between"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-black text-brand-teal/20 group-hover:text-brand-teal transition-colors font-mono">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-brand-mint text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors shadow-inner">
                    <IconComp className="w-6 h-6" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-extrabold text-brand-navy mb-2 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow indicator */}
                <div className="pt-6 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-teal">
                  <span>Step {idx + 1}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner callout */}
        <div className="mt-12 text-center">
          <button
            onClick={onOpenEnquire}
            className="inline-flex items-center gap-3 bg-brand-teal text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-brand-teal/20 hover:bg-brand-teal-dark hover:shadow-xl transition-all"
          >
            <span>Start Your Learning Journey Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
