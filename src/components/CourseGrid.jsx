import React, { useState } from 'react';
import { CATEGORIES, COURSES } from '../data/courses';
import { ArrowRight, Star, Clock, Users, Building2, BarChart3, Code2, Settings2, Cloud, Layers, Cpu, ShieldCheck, Flame, Sparkles, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  Building2: Building2,
  BarChart3: BarChart3,
  Code2: Code2,
  Settings2: Settings2,
  Cloud: Cloud,
  Layers: Layers,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Flame: Flame,
  Users: Users
};

export default function CourseGrid({ onSelectCourse, searchTerm = '' }) {
  const [activeCategory, setActiveCategory] = useState('popular');

  const filteredCourses = COURSES.filter((course) => {
    const matchesCategory = activeCategory === 'popular'
      ? course.featured || course.category === 'erp' || course.category === 'dev'
      : course.category === activeCategory;
      
    const matchesSearch = searchTerm === '' || 
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.subtitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="courses" className="py-12 lg:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 bg-brand-mint text-brand-teal text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE OUR PROGRAMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-navy tracking-tight">
              Acte.in <span className="text-brand-teal">All Certified Courses</span>
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3.5 py-1.5 rounded-full">
              🎓 100% Job Guarantee Courses Available
            </span>
          </div>
        </div>

        {/* Dual Layout: Left Sidebar Categories + Right Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDEBAR (Matching Acte.in Screenshot 2 Layout) */}
          <div className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-3 sticky top-24 space-y-1">
            <div className="px-4 py-2 border-b border-slate-100 text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Browse Categories
            </div>

            <div className="space-y-1 max-h-[70vh] overflow-y-auto no-scrollbar">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-extrabold transition-all flex items-center justify-between group ${
                      isActive
                        ? 'bg-brand-teal text-white shadow-md shadow-brand-teal/20'
                        : 'text-slate-700 hover:bg-brand-mint/50 hover:text-brand-teal'
                    }`}
                  >
                    <span>{cat.label}</span>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-brand-peach' : 'opacity-0 group-hover:opacity-100'}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* RIGHT CARDS GRID (Matching Acte.in Course Cards) */}
          <div className="lg:col-span-9">
            {filteredCourses.length === 0 ? (
              <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
                <p className="text-slate-500 font-medium">No courses found matching this category.</p>
                <button
                  onClick={() => { setActiveCategory('popular'); }}
                  className="mt-3 text-sm font-bold text-brand-teal underline"
                >
                  Reset to Popular Courses
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map((course) => {
                  const IconComponent = ICON_MAP[course.iconName] || Code2;

                  return (
                    <div
                      key={course.id}
                      onClick={() => onSelectCourse(course)}
                      className="bg-white border border-slate-200/90 hover:border-brand-teal/50 rounded-2xl p-5 shadow-sm hover:shadow-poster transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden"
                    >
                      {/* Top Bar Badges */}
                      <div className="flex items-center justify-between mb-3">
                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shadow-inner ${course.iconBg}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {course.jobGuarantee && (
                          <span className="bg-emerald-600 text-white text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3" /> Job Guarantee
                          </span>
                        )}
                      </div>

                      {/* Course Title & Tech Badges */}
                      <div>
                        <h3 className="text-lg font-extrabold text-brand-navy group-hover:text-brand-teal transition-colors leading-snug mb-1">
                          {course.title}
                        </h3>

                        <p className="text-xs font-semibold text-brand-teal mb-3 line-clamp-1">
                          {course.subtitle}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {course.techBadges.slice(0, 3).map((badge, bIdx) => (
                            <span key={bIdx} className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-md">
                              {badge}
                            </span>
                          ))}
                        </div>

                        {/* Salary Highlight Box */}
                        <div className="bg-slate-50 border border-slate-100 rounded-xl p-2.5 mb-4 flex items-center justify-between text-xs">
                          <span className="text-slate-500 font-medium">Avg Salary:</span>
                          <span className="font-extrabold text-brand-navy">{course.avgSalary}</span>
                        </div>
                      </div>

                      {/* Card Footer Actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex flex-col text-xs font-semibold text-slate-500">
                          <span className="flex items-center gap-1 text-slate-700">
                            <Clock className="w-3.5 h-3.5 text-brand-teal" />
                            {course.duration}
                          </span>
                          <span className="text-[11px] text-emerald-600 font-bold mt-0.5">
                            EMI @ {course.emi}
                          </span>
                        </div>

                        {/* Action Link Buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onSelectCourse(course);
                            }}
                            className="bg-brand-mint text-brand-teal hover:bg-brand-teal hover:text-white font-bold text-xs px-3 py-2 rounded-xl transition-colors"
                          >
                            Know More
                          </button>
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
