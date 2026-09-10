import React, { useState } from 'react';
import { Search, Phone, Mail, MapPin, ArrowRight, Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar({ onOpenEnquire, onSearchClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'Courses', href: '#courses' },
    { label: 'Placements', href: '#placements' },
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top Notification / Contact Bar */}
      <div className="bg-brand-teal text-white py-1.5 px-4 text-xs font-medium border-b border-brand-teal-dark hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-teal-100">
              <MapPin className="w-3.5 h-3.5 text-brand-peach" /> No. 123, Anna Salai, Chennai – 600 002
            </span>
            <a href="tel:+919876543210" className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-brand-peach" /> +91 98765 43210
            </a>
            <a href="mailto:info@iclptech.com" className="flex items-center gap-1.5 text-teal-100 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-brand-peach" /> info@iclptech.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[11px] font-semibold border border-emerald-400/30 animate-pulse">
              ⚡ New Batches Starting This Monday!
            </span>
            <a href="#courses" className="text-brand-peach hover:underline text-xs">
              View Schedule
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-brand-teal flex items-center justify-center text-white shadow-md shadow-brand-teal/20 group-hover:scale-105 transition-transform">
              <span className="font-extrabold text-2xl tracking-tighter text-white">iCLP</span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl md:text-2xl text-brand-navy tracking-tight leading-none group-hover:text-brand-teal transition-colors">
                iCLP <span className="text-brand-teal">Technologies</span>
              </span>
              <span className="text-[11px] font-semibold text-brand-muted tracking-wider uppercase mt-1">
                Learn • Grow • Build Your Future
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-semibold transition-all relative py-1 ${
                  link.active
                    ? 'text-brand-teal font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-brand-teal'
                    : 'text-slate-600 hover:text-brand-teal'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Controls */}
          <div className="hidden sm:flex items-center gap-4">
            {/* Search Trigger */}
            <button
              onClick={onSearchClick}
              className="p-2.5 rounded-full text-slate-500 hover:text-brand-teal hover:bg-brand-mint/50 transition-colors focus:outline-none"
              title="Search Courses"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Enquire Now CTA Button */}
            <button
              onClick={onOpenEnquire}
              className="bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-sm px-6 py-3 rounded-full shadow-md shadow-brand-teal/20 hover:shadow-lg transition-all flex items-center gap-2 group transform active:scale-95"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:hidden">
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
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-semibold text-slate-700 hover:text-brand-teal py-2 border-b border-slate-100"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquire();
              }}
              className="w-full bg-brand-teal text-white font-bold text-center py-3 rounded-xl flex items-center justify-center gap-2 shadow-md"
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
