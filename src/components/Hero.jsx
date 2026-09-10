import React from 'react';
import { ArrowRight, MessageSquare, Award, Laptop, Users, GraduationCap, CheckCircle2, Sparkles } from 'lucide-react';

export default function Hero({ onOpenEnquire, onExploreCourses }) {
  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-brand-mint/20 py-12 lg:py-20 overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-peach/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-mint border border-brand-mint-border px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                SKILLS FOR A SMARTER TOMORROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Learn In-Demand <br className="hidden sm:inline" />
              <span className="text-brand-teal relative inline-block">
                Software Courses
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-peach-dark/80 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Gain practical skills, work on real-time projects and build a successful career in IT with industry-certified trainers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#courses"
                onClick={onExploreCourses}
                className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-teal/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenEnquire}
                className="w-full sm:w-auto bg-white hover:bg-brand-mint/40 text-brand-teal border-2 border-brand-teal font-bold text-base px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow"
              >
                <MessageSquare className="w-5 h-5 text-brand-teal" />
                <span>Talk to Our Counselor</span>
              </button>
            </div>

            {/* Features Strip */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Expert</h4>
                  <p className="text-xs text-brand-muted">Trainers</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Hands-on</h4>
                  <p className="text-xs text-brand-muted">Training</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Certification</h4>
                  <p className="text-xs text-brand-muted">Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">100% Placement</h4>
                  <p className="text-xs text-brand-muted">Assistance</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual Banner & Badges */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Outer Decorative Circle */}
            <div className="relative w-[320px] sm:w-[420px] h-[320px] sm:h-[420px] rounded-full bg-gradient-to-tr from-brand-teal/20 via-brand-mint to-brand-peach/50 p-3 shadow-poster-lg">
              <div className="w-full h-full rounded-full bg-white relative overflow-hidden flex items-end justify-center shadow-inner">
                {/* Student Photo */}
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Student holding books"
                  className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Handwritten Quote Bubble Top Right */}
              <div className="absolute -top-4 -right-4 sm:top-2 sm:-right-6 bg-brand-teal text-white px-5 py-3 rounded-2xl rounded-bl-none shadow-xl transform rotate-3 border-2 border-white">
                <p className="font-script text-2xl sm:text-3xl font-bold leading-tight tracking-wide text-brand-peach">
                  “Better Skills <br /> Brighter Tomorrow”
                </p>
              </div>

              {/* Floating Feature Badges Box */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-4 sm:-left-10 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[220px] space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs font-bold text-brand-navy">
                  <div className="w-6 h-6 rounded-md bg-brand-mint flex items-center justify-center text-brand-teal">
                    <Laptop className="w-3.5 h-3.5" />
                  </div>
                  <span>Live Projects</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-brand-navy">
                  <div className="w-6 h-6 rounded-md bg-brand-mint flex items-center justify-center text-brand-teal">
                    <Users className="w-3.5 h-3.5" />
                  </div>
                  <span>Industry Trainers</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-brand-navy">
                  <div className="w-6 h-6 rounded-md bg-brand-mint flex items-center justify-center text-brand-teal">
                    <Award className="w-3.5 h-3.5" />
                  </div>
                  <span>Placement Support</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-bold text-brand-navy">
                  <div className="w-6 h-6 rounded-md bg-brand-mint flex items-center justify-center text-brand-teal">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span>Flexible Learning</span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
