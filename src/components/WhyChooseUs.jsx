import React from 'react';
import { ArrowRight, GraduationCap, Users, FileText, Briefcase } from 'lucide-react';

export default function WhyChooseUs({ onOpenEnquire }) {
  const features = [
    {
      title: 'Industry Relevant',
      subtitle: 'Curriculum',
      icon: GraduationCap,
      color: 'bg-teal-50 text-brand-teal border-teal-100',
    },
    {
      title: 'Experienced',
      subtitle: 'Trainers',
      icon: Users,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
    {
      title: 'Real-time',
      subtitle: 'Projects',
      icon: FileText,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      title: 'Placement',
      subtitle: 'Assistance',
      icon: Briefcase,
      color: 'bg-amber-50 text-amber-600 border-amber-100',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content Side */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              WHY CHOOSE ICLP
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy tracking-tight leading-tight">
              More Than Just <br />
              <span className="text-brand-teal">Training</span>
            </h2>

            <p className="text-base sm:text-lg text-brand-muted font-normal leading-relaxed">
              We focus on practical learning, real-world industry exposure, and personalized career guidance to help you achieve your professional goals and stand out in the IT market.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenEnquire}
                className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-md shadow-brand-teal/20 transition-all flex items-center gap-2 group"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {features.map((item, idx) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-poster transition-all text-center flex flex-col items-center justify-center space-y-3 group hover:-translate-y-1 duration-300"
                  >
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border shadow-inner ${item.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-7 h-7" />
                    </div>

                    <div>
                      <h4 className="font-extrabold text-base text-brand-navy leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-xs font-semibold text-brand-muted">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
