import React, { useState } from 'react';
import { X, Search, ArrowRight, BookOpen } from 'lucide-react';
import { COURSES } from '../data/courses';

export default function SearchModal({ isOpen, onClose, onSelectCourse }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = COURSES.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-100 relative">
        
        {/* Search Input Header */}
        <div className="p-4 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-teal ml-2" />
          <input
            type="text"
            autoFocus
            placeholder="Search courses (e.g. SAP, Python, React, Testing, AWS)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-base font-semibold text-brand-navy placeholder-slate-400 outline-none bg-transparent"
          />
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-4 max-h-96 overflow-y-auto no-scrollbar space-y-2">
          {results.length === 0 ? (
            <div className="text-center py-10 text-slate-400 font-medium">
              No courses matching "<span className="text-slate-700">{query}</span>"
            </div>
          ) : (
            results.map((c) => (
              <div
                key={c.id}
                onClick={() => {
                  onClose();
                  onSelectCourse(c);
                }}
                className="p-3.5 rounded-2xl hover:bg-brand-mint/40 border border-transparent hover:border-brand-mint-border transition-all flex items-center justify-between cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center font-bold text-sm shrink-0">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm text-brand-navy group-hover:text-brand-teal transition-colors">
                      {c.title}
                    </h4>
                    <p className="text-xs text-slate-500 font-medium">
                      {c.subtitle} • <span className="text-brand-teal font-bold">{c.duration}</span>
                    </p>
                  </div>
                </div>

                <div className="w-8 h-8 rounded-full bg-white text-brand-teal flex items-center justify-center shadow-sm group-hover:bg-brand-teal group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}
