import React from 'react';
import { BRANCH_LOCATIONS } from '../data/courses';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';

export default function LocationsSection() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
            CAMPUS NETWORK
          </span>
          <h2 className="text-3xl font-extrabold text-brand-navy">
            Visit Our <span className="text-brand-teal">High-Tech Labs & Campuses</span>
          </h2>
          <p className="text-sm text-brand-muted">
            State-of-the-art lab infrastructure, AC classrooms, and high-speed ERP servers.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BRANCH_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="inline-block bg-brand-mint text-brand-teal text-[11px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {loc.city}
                </div>
                
                <h4 className="font-extrabold text-base text-brand-navy">
                  {loc.name}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-brand-teal shrink-0 mt-0.5" />
                  <span>{loc.address}</span>
                </p>

                <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs font-semibold text-slate-600">
                  <p className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-brand-teal" />
                    <a href={`tel:${loc.phone}`} className="hover:text-brand-teal">{loc.phone}</a>
                  </p>
                  <p className="flex items-center gap-2 text-slate-400 font-normal text-[11px]">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {loc.timing}
                  </p>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-brand-teal hover:underline flex items-center gap-1 group"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
