import React from 'react';
import { HIRING_PARTNERS } from '../data/courses';
import { Building2, Award } from 'lucide-react';

export default function HiringPartners() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 bg-brand-mint text-brand-teal text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>Top Tier Recruiters</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-brand-navy">
            Our Students Get Placed At <span className="text-brand-teal">500+ Top Companies</span>
          </h3>
        </div>

        {/* Corporate Logos Strip Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-4 items-center">
          {HIRING_PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="h-16 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-3 hover:bg-white hover:border-brand-mint-border hover:shadow-md transition-all group"
            >
              <span className={`font-black text-sm tracking-tight ${partner.color} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all`}>
                {partner.logoText}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
