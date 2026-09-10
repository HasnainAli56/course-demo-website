import React from 'react';
import { HIGHLIGHT_STATS } from '../data/courses';
import { GraduationCap, Users, Briefcase, TrendingUp } from 'lucide-react';

const ICON_MAP = {
  GraduationCap: GraduationCap,
  Users: Users,
  Briefcase: Briefcase,
  TrendingUp: TrendingUp,
};

export default function StatsBanner() {
  return (
    <section id="placements" className="relative bg-brand-teal text-white py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Header Left */}
          <div className="lg:col-span-8 space-y-3 text-center lg:text-left">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-peach">
              YOUR CAREER STARTS HERE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Get Trained. Get Certified. <br className="hidden sm:inline" />
              <span className="text-brand-peach">Get Hired.</span>
            </h2>
            <p className="text-sm sm:text-base text-teal-100 max-w-2xl">
              Join thousands of successful learners who transformed their careers with iCLP Technologies.
            </p>
          </div>

          {/* Script Accent Right */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end">
            <div className="text-center lg:text-right transform rotate-[-3deg]">
              <span className="font-script text-4xl sm:text-5xl lg:text-6xl text-brand-peach font-bold leading-tight block drop-shadow-md">
                Dream <br />
                Learn <br />
                Achieve
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-teal-600/50">
          {HIGHLIGHT_STATS.map((stat, idx) => {
            const IconComp = ICON_MAP[stat.icon] || GraduationCap;

            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-peach mb-1 group-hover:bg-white group-hover:text-brand-teal transition-all shadow-sm">
                  <IconComp className="w-6 h-6" />
                </div>
                <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold text-teal-100">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
