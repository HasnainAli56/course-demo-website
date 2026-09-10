import React, { useState } from 'react';
import { CATEGORIES, COURSES } from '../data/courses';
import { ArrowRight, Star, Clock, Users, Building2, BarChart3, Code2, Settings2, Cloud, Layers, Cpu, ShieldCheck, IndianRupee, Sparkles } from 'lucide-react';

const ICON_MAP = {
  Building2: Building2,
  BarChart3: BarChart3,
  Code2: Code2,
  Settings2: Settings2,
  Cloud: Cloud,
  Layers: Layers,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck
};

export default function CourseGrid({ onSelectCourse, searchTerm = '' }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'all' || course.category === activeCategory;
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
              POPULAR CERTIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight mt-1">
              Top Rated <span className="text-brand-teal">Software Courses</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full hidden sm:inline-block">
              💳 0% Interest EMI Available
            </span>
            <button
              onClick={() => setActiveCategory('all')}
              className="inline-flex items-center gap-2 font-bold text-sm text-brand-teal hover:text-brand-teal-dark transition-colors group"
            >
              <span>View All ({COURSES.length})</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                  isActive
                    ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-brand-mint/60 hover:text-brand-teal'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
            <p className="text-slate-500 font-medium">No courses found matching your query.</p>
            <button
              onClick={() => { setActiveCategory('all'); }}
              className="mt-3 text-sm font-bold text-brand-teal underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredCourses.map((course) => {
              const IconComponent = ICON_MAP[course.iconName] || Code2;

              return (
                <div
                  key={course.id}
                  onClick={() => onSelectCourse(course)}
                  className="bg-brand-card hover:bg-white border border-slate-200/80 hover:border-brand-teal/40 rounded-3xl p-6 shadow-sm hover:shadow-poster transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal via-brand-teal-light to-brand-peach opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Row: Category Icon & Rating */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${course.iconBg}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-extrabold px-2 py-0.5 rounded-full">
                          {course.batchType}
                        </span>
                        <div className="flex items-center gap-1 bg-amber-50 border border-amber-200 px-2.5 py-1 rounded-full text-xs font-bold text-amber-800">
                          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          <span>{course.rating}</span>
                        </div>
                      </div>
                    </div>

                    {/* Course Title */}
                    <h3 className="text-xl font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors leading-snug mb-1.5">
                      {course.title}
                    </h3>

                    {/* Tech Badges / Tech Subtitle */}
                    <p className="text-xs font-semibold text-brand-teal mb-3">
                      {course.subtitle}
                    </p>

                    {/* Salary Package Highlight */}
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-4 flex items-center justify-between text-xs">
                      <span className="text-slate-500 font-medium flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Avg Salary:
                      </span>
                      <span className="font-extrabold text-brand-navy">{course.avgSalary}</span>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-slate-500 leading-relaxed mb-6 line-clamp-2">
                      {course.description}
                    </p>
                  </div>

                  {/* Footer Meta & Arrow Action Button */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <div className="flex flex-col text-xs font-semibold text-slate-500">
                      <span className="flex items-center gap-1 text-slate-700">
                        <Clock className="w-3.5 h-3.5 text-brand-teal" />
                        {course.duration} ({course.level})
                      </span>
                      <span className="text-[11px] text-emerald-600 font-bold mt-0.5">
                        EMI Starts @ {course.emi}
                      </span>
                    </div>

                    {/* Circle Arrow Action Button */}
                    <div className="w-10 h-10 rounded-full bg-brand-mint text-brand-teal flex items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-colors shadow-sm">
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
