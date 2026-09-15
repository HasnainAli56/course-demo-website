import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Clock, Users, Star, Award, Download, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';
import { generateCoursePDF } from '../utils/generatePdf';

export default function CourseDetailModal({ course, onClose, onEnquireThisCourse }) {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  if (!course) return null;

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      await generateCoursePDF(course);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col border border-slate-100 relative overflow-hidden">
        
        {/* Sticky Header Banner */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-navy text-white p-5 sm:p-7 relative shrink-0 z-10 shadow-md">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors z-20"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 pr-8">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-peach">
              <span>★ {course.rating || '4.9'} Rating ({course.reviewsCount || '1.2k+'} Reviews)</span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white leading-tight">
              {course.title}
            </h2>
            <p className="text-xs sm:text-sm text-teal-100 font-medium line-clamp-1">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-xs font-semibold pt-2 text-teal-100 border-t border-teal-600/50">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-peach" /> Duration: {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-peach" /> {course.studentsEnrolled || '1,200+'} Learners
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-peach" /> ISO 9001:2015 Certified
              </span>
            </div>
          </div>
        </div>

        {/* Scrollable Content Body with Visible Custom Scrollbar */}
        <div className="p-5 sm:p-8 space-y-6 overflow-y-auto modal-scrollbar grow">
          
          {/* Overview */}
          <div>
            <h3 className="text-base sm:text-lg font-extrabold text-brand-navy mb-2">Course Overview</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {course.description} Designed according to latest industry standards with 100% real-time lab work, live project experience, and job interview assistance.
            </p>
          </div>

          {/* Tech stack tags */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-teal mb-2">Technologies & Tools Covered</h4>
            <div className="flex flex-wrap gap-2">
              {course.techBadges.map((badge, idx) => (
                <span key={idx} className="bg-brand-mint border border-brand-teal/20 text-brand-teal font-bold text-xs px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Syllabus Accordions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-extrabold text-brand-navy">Detailed Course Syllabus</h3>
              <span className="text-xs font-extrabold text-brand-teal bg-brand-mint px-2.5 py-1 rounded-full border border-brand-teal/20">
                {course.syllabus?.length || 0} Modules
              </span>
            </div>

            <div className="space-y-3">
              {course.syllabus?.map((mod, idx) => {
                const isOpen = openModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200/90 rounded-xl overflow-hidden transition-all shadow-sm hover:border-brand-teal/40"
                  >
                    <button
                      onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                      className="w-full bg-slate-50 hover:bg-slate-100/80 p-3.5 sm:p-4 text-left font-bold text-xs sm:text-sm text-brand-navy flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-3 pr-2">
                        <span className="bg-brand-teal text-white text-[11px] font-black px-2.5 py-1 rounded-md shrink-0">
                          {mod.module}
                        </span>
                        <span className="leading-snug">{mod.title}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-brand-teal shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>

                    {isOpen && (
                      <div className="p-4 bg-white text-xs text-slate-600 leading-relaxed border-t border-slate-100 space-y-2">
                        <p className="font-semibold text-slate-700">Key Learning Takeaways:</p>
                        <ul className="space-y-1.5 pl-4 list-disc text-slate-500">
                          <li>In-depth conceptual understanding and hands-on lab exercises.</li>
                          <li>Real-time project scenario implementation with industry standards.</li>
                          <li>Weekly assignments, mock quizzes, and technical code reviews.</li>
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Career Opportunities */}
          <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border border-slate-200/80">
            <h4 className="font-extrabold text-xs sm:text-sm text-brand-navy mb-3">Job Roles You Can Apply For</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Junior / Senior Specialist</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Technical Consultant</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> System Engineer</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> QA / Test Analyst</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Project Lead</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal shrink-0" /> Solutions Architect</div>
            </div>
          </div>

        </div>

        {/* Sticky Action Footer */}
        <div className="p-4 sm:p-5 bg-white border-t border-slate-200 shrink-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-3 shadow-lg">
          <button
            onClick={handleDownloadPDF}
            disabled={isDownloading}
            className="w-full sm:w-auto bg-slate-100 hover:bg-brand-mint text-slate-700 hover:text-brand-teal font-extrabold text-xs px-5 py-3 rounded-xl transition-all flex items-center justify-center gap-2 border border-slate-200 hover:border-brand-teal/30 disabled:opacity-75"
          >
            {isDownloading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-brand-teal" />
                <span>Generating PDF...</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4 text-brand-teal" />
                <span>Download Syllabus PDF</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              onClose();
              onEnquireThisCourse(course.title);
            }}
            className="w-full sm:w-auto bg-brand-teal hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center justify-center gap-2"
          >
            <span>Enroll / Enquire Course</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
