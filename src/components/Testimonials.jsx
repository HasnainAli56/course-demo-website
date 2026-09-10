import React from 'react';
import { TESTIMONIALS } from '../data/courses';
import { Star, ArrowRight, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              STUDENT TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
              What Our <span className="text-brand-teal">Students Say</span>
            </h2>
          </div>

          <a
            href="#reviews"
            className="inline-flex items-center gap-2 font-bold text-sm text-brand-teal hover:text-brand-teal-dark transition-colors group"
          >
            <span>View More Reviews</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="bg-brand-card hover:bg-white border border-slate-100 hover:border-brand-mint-border p-6 rounded-2xl shadow-sm hover:shadow-poster transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Avatar & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-brand-teal/20 group-hover:scale-105 transition-transform"
                    />
                    <div className="absolute -bottom-1 -right-1 bg-brand-teal text-white rounded-full p-1 shadow">
                      <Quote className="w-3 h-3" />
                    </div>
                  </div>

                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote Content */}
                <p className="text-sm text-slate-600 leading-relaxed font-normal italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Student Bio */}
              <div className="pt-4 mt-6 border-t border-slate-100">
                <h4 className="font-extrabold text-base text-brand-navy">
                  {item.name}
                </h4>
                <p className="text-xs font-semibold text-brand-teal">
                  {item.role} • <span className="text-slate-400 font-normal">{item.company}</span>
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  Course: {item.course}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
