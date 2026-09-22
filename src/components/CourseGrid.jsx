import React, { useState, useMemo, useRef } from 'react';
import { CATEGORIES, COURSES } from '../data/courses';
import { 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  Building2, 
  BarChart3, 
  Code2, 
  Settings2, 
  Cloud, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  Sparkles, 
  CheckCircle2,
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Award,
  BookOpen,
  Briefcase
} from 'lucide-react';

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

export default function CourseGrid({ onSelectCourse, searchTerm: externalSearchTerm = '' }) {
  const [activeCategory, setActiveCategory] = useState('popular');
  const [localSearch, setLocalSearch] = useState('');
  const [jobGuaranteeOnly, setJobGuaranteeOnly] = useState(false);
  const scrollContainerRef = useRef(null);

  // Combine external search term from header search modal with local search input
  const activeSearch = localSearch || externalSearchTerm;

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const matchesCategory = activeCategory === 'popular'
        ? course.featured || course.category === 'erp' || course.category === 'dev'
        : course.category === activeCategory;
        
      const matchesSearch = activeSearch === '' || 
        course.title.toLowerCase().includes(activeSearch.toLowerCase()) ||
        course.subtitle.toLowerCase().includes(activeSearch.toLowerCase()) ||
        (course.description && course.description.toLowerCase().includes(activeSearch.toLowerCase())) ||
        (course.techBadges && course.techBadges.some(b => b.toLowerCase().includes(activeSearch.toLowerCase())));

      const matchesGuarantee = !jobGuaranteeOnly || course.jobGuarantee;

      return matchesCategory && matchesSearch && matchesGuarantee;
    });
  }, [activeCategory, activeSearch, jobGuaranteeOnly]);

  const scrollCategories = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200/80 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-brand-mint text-brand-teal text-xs font-extrabold px-4 py-1.5 rounded-full uppercase tracking-wider mb-4 border border-brand-teal/10 shadow-sm">
            <Sparkles className="w-4 h-4 text-brand-teal animate-pulse" />
            <span>80+ Industry Certified Career Tracks</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight leading-tight mb-4">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-700 to-emerald-600">Featured Programs</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed">
            Gain job-ready skills with real-world projects, live interactive mentorship, and 100% placement assurance support.
          </p>
        </div>

        {/* Interactive Search & Filter Controls Bar */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 p-4 sm:p-5 shadow-lg shadow-slate-100 mb-8 sm:mb-10">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Search Input Bar */}
            <div className="relative flex-1">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search courses by name or technology (e.g., Python, React, AWS, Selenium)..."
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-brand-navy placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
              />
              {localSearch && (
                <button 
                  onClick={() => setLocalSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 font-bold text-xs bg-slate-200/70 hover:bg-slate-300 w-5 h-5 rounded-full flex items-center justify-center transition-colors"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Filter Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100">
              
              {/* Job Guarantee Toggle Pill */}
              <button
                onClick={() => setJobGuaranteeOnly(!jobGuaranteeOnly)}
                className={`px-3.5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-2 transition-all border shadow-sm ${
                  jobGuaranteeOnly
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-emerald-600/20'
                    : 'bg-emerald-50 text-emerald-800 border-emerald-200/80 hover:bg-emerald-100'
                }`}
              >
                <Award className="w-4 h-4" />
                <span>Job Guarantee Only</span>
                {jobGuaranteeOnly && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
              </button>

              {/* Total Found Count Pill */}
              <div className="bg-brand-mint text-brand-teal text-xs font-black px-3.5 py-2.5 rounded-xl border border-brand-teal/20 flex items-center gap-1.5 shrink-0">
                <BookOpen className="w-4 h-4" />
                <span>{filteredCourses.length} Courses</span>
              </div>

            </div>
          </div>
        </div>

        {/* Modern Horizontal Category Filter Slider */}
        <div className="relative mb-8 sm:mb-12">
          
          {/* Left / Right Scroll Buttons (Desktop) */}
          <button
            onClick={() => scrollCategories('left')}
            className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-600 hover:text-brand-teal hover:border-brand-teal hover:scale-105 transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollCategories('right')}
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border border-slate-200 shadow-md items-center justify-center text-slate-600 hover:text-brand-teal hover:border-brand-teal hover:scale-105 transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-2.5 overflow-x-auto pb-3 pt-1 px-1 no-scrollbar scroll-smooth snap-x"
          >
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`snap-start shrink-0 px-4 py-3 rounded-2xl text-xs sm:text-sm font-extrabold transition-all duration-200 whitespace-nowrap flex items-center gap-2 active:scale-95 shadow-sm ${
                    isActive
                      ? 'bg-brand-teal text-white shadow-lg shadow-brand-teal/25 ring-2 ring-brand-teal ring-offset-2 scale-[1.02]'
                      : 'bg-white text-slate-700 border border-slate-200/90 hover:bg-brand-mint/60 hover:text-brand-teal hover:border-brand-teal/40'
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Courses Cards Grid */}
        {filteredCourses.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200 p-8 shadow-sm">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-extrabold text-brand-navy mb-2">No matching courses found</h3>
            <p className="text-slate-500 text-sm max-w-md mx-auto mb-6">
              We couldn't find any courses matching your search filter. Try clearing your search term or switching categories.
            </p>
            <button
              onClick={() => {
                setActiveCategory('popular');
                setLocalSearch('');
                setJobGuaranteeOnly(false);
              }}
              className="bg-brand-teal text-white font-extrabold text-xs px-5 py-3 rounded-xl hover:bg-teal-800 transition-colors shadow-md shadow-brand-teal/20"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredCourses.map((course) => {
              const IconComponent = ICON_MAP[course.iconName] || Code2;

              return (
                <a
                  key={course.id}
                  href={`#/course/${course.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    onSelectCourse(course);
                  }}
                  className="bg-white border border-slate-200/90 hover:border-brand-teal/60 rounded-3xl p-6 shadow-sm hover:shadow-2xl hover:shadow-brand-teal/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden block text-left no-underline"
                >
                  {/* Top Decorative Accent Bar */}
                  <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-teal via-teal-500 to-emerald-400 opacity-90 group-hover:opacity-100 transition-opacity" />

                  <div>
                    {/* Top Header: Icon + Badges */}
                    <div className="flex items-start justify-between gap-3 mb-4 pt-1">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform ${course.iconBg || 'bg-brand-mint text-brand-teal'}`}>
                        <IconComponent className="w-6 h-6" />
                      </div>

                      <div className="flex flex-col items-end gap-1.5 shrink-0">
                        {course.jobGuarantee && (
                          <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] font-black px-2.5 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-200" />
                            Job Guarantee
                          </span>
                        )}

                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200/60">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          4.9 (1.2k+)
                        </span>
                      </div>
                    </div>

                    {/* Course Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-black text-brand-navy group-hover:text-brand-teal transition-colors leading-snug mb-1.5">
                      {course.title}
                    </h3>

                    <p className="text-xs font-semibold text-teal-700 mb-4 line-clamp-2 min-h-[32px]">
                      {course.subtitle}
                    </p>

                    {/* Tech Badges Stack */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {course.techBadges.slice(0, 4).map((badge, bIdx) => (
                        <span 
                          key={bIdx} 
                          className="bg-slate-100 group-hover:bg-brand-mint/60 text-slate-700 group-hover:text-brand-teal text-[11px] font-bold px-2.5 py-1 rounded-lg transition-colors border border-slate-200/60"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    {/* Highlights Micro Grid (Salary & Duration) */}
                    <div className="grid grid-cols-2 gap-2 bg-slate-50 group-hover:bg-brand-mint/20 border border-slate-100 group-hover:border-brand-teal/20 rounded-2xl p-3 mb-5 transition-colors">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <TrendingUp className="w-3 h-3 text-brand-teal" /> Avg Salary
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5">
                          {course.avgSalary}
                        </span>
                      </div>

                      <div className="flex flex-col border-l border-slate-200/60 pl-3">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                          <Clock className="w-3 h-3 text-brand-teal" /> Duration
                        </span>
                        <span className="text-xs sm:text-sm font-extrabold text-brand-navy mt-0.5">
                          {course.duration}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer: EMI & CTAs */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Easy EMI</span>
                      <span className="text-xs font-black text-emerald-700">
                        {course.emi}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="bg-brand-teal text-white hover:bg-teal-800 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-teal/20 flex items-center gap-1.5 group-hover:scale-105"
                      >
                        <span>Know More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>

                </a>
              );
            })}
          </div>
        )}

        {/* Section Footer Callout Banner */}
        <div className="mt-14 bg-gradient-to-r from-brand-navy via-slate-900 to-brand-teal rounded-3xl p-6 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-brand-teal/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-2 text-center md:text-left z-10">
            <h3 className="text-xl sm:text-2xl font-black tracking-tight">
              Can't decide which program fits your career path?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm font-medium max-w-xl">
              Talk to our expert tech career counselors for a free 1-on-1 guidance session and personalized roadmap.
            </p>
          </div>

          <div className="z-10 shrink-0">
            <a
              href="#enquire"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('enquire') || document.querySelector('[data-enquire-trigger]');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-peach text-brand-navy hover:bg-amber-300 font-black text-xs sm:text-sm px-6 py-3.5 rounded-xl transition-all shadow-lg hover:scale-105 inline-flex items-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              <span>Get Free Career Counseling</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
