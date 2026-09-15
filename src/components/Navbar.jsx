import React, { useState } from 'react';
import { Search, Phone, Mail, MapPin, ArrowRight, Menu, X, Sparkles, ExternalLink } from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Job Guarantee Courses', view: 'home', targetId: 'courses', highlight: true },
  { label: 'All Courses', view: 'home', targetId: 'courses' },
  { label: 'Corporate Training', view: 'corporate' },
  { label: 'Placed Students List', view: 'placed-students' },
  { label: 'Jobs & Internship', view: 'jobs-internships' },
  { label: 'Resources', view: 'resources' },
  { label: 'Branches', view: 'branches' },
  { label: 'LMS Portal', view: 'lms', badge: 'AI LMS' }
];

export default function Navbar({ onOpenEnquire, onSearchClick, currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleItemClick = (item, e) => {
    e.preventDefault();
    if (item.view === 'lms') {
      onOpenEnquire('LMS Portal Access Request');
      return;
    }

    onNavigate(item.view, item.targetId);
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top Notification Bar */}
      <div className="bg-brand-teal text-white py-1.5 px-4 text-xs font-medium border-b border-brand-teal-dark hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-teal-100">
              <MapPin className="w-3.5 h-3.5 text-brand-peach" /> No. 123, Anna Salai, Chennai – 600 002
            </span>
            <a href="tel:+917669100251" className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-peach" /> Online Enquiry: +91 76691 00251
            </a>
            <a href="tel:+919953306008" className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-peach" /> Chennai: +91 99533 06008
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-400/30 animate-pulse">
              ⚡ Land a ₹5-15 LPA IT Job in 90 Days!
            </span>
            <button onClick={() => onOpenEnquire('Limited Scholarship Offer')} className="text-brand-peach hover:underline text-xs font-bold">
              Grab Offer →
            </button>
          </div>
        </div>
      </div>

      {/* Brand & Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-md shadow-brand-teal/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-xl tracking-tight text-white">TM</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl md:text-2xl text-brand-navy tracking-tight leading-none group-hover:text-brand-teal transition-colors">
                Tech<span className="text-brand-teal">master</span>
              </span>
              <span className="text-[11px] font-semibold text-brand-muted tracking-wider uppercase mt-1">
                Learn • Grow • Build Your Future
              </span>
            </div>
          </button>

          {/* Top Nav Links */}
          <nav className="hidden xl:flex items-center space-x-3.5">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = currentPage === item.view && !item.targetId;

              return (
                <button
                  key={idx}
                  onClick={(e) => handleItemClick(item, e)}
                  className={`text-xs font-extrabold transition-all relative py-1 flex items-center gap-1 rounded-xl px-2.5 ${
                    item.highlight
                      ? 'text-emerald-700 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 py-1.5'
                      : item.badge
                      ? 'text-white bg-amber-500 hover:bg-amber-600 px-3 py-1.5 rounded-full font-bold shadow-sm'
                      : isActive
                      ? 'text-brand-teal bg-brand-mint/60'
                      : 'text-slate-700 hover:text-brand-teal hover:bg-slate-100'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && <span className="text-[9px] bg-white/20 px-1.5 rounded">{item.badge}</span>}
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-full text-slate-500 hover:text-brand-teal hover:bg-brand-mint/50 transition-colors focus:outline-none"
              title="Search Courses"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => onOpenEnquire('General Enquiry')}
              className="bg-brand-teal hover:bg-teal-800 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-full shadow-md shadow-brand-teal/20 hover:shadow-lg transition-all flex items-center gap-2 group transform active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 xl:hidden">
            <button
              onClick={onSearchClick}
              className="p-2 text-slate-600"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-brand-teal focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2 pt-2">
            {NAV_ITEMS.map((item, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleItemClick(item, e);
                }}
                className={`text-sm font-bold py-2.5 border-b border-slate-100 flex items-center justify-between text-left ${
                  currentPage === item.view ? 'text-brand-teal font-extrabold' : 'text-slate-700 hover:text-brand-teal'
                }`}
              >
                <span>{item.label}</span>
                {item.highlight && <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">100% Placement</span>}
              </button>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquire();
              }}
              className="w-full bg-brand-teal text-white font-bold text-center py-3 rounded-xl flex items-center justify-center gap-2 shadow-md text-sm"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
