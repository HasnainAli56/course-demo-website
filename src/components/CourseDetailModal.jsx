import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, Clock, Users, Star, Award, Download, ArrowRight, CheckCircle } from 'lucide-react';

export default function CourseDetailModal({ course, onClose, onEnquireThisCourse }) {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);

  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-slate-100 relative no-scrollbar">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-brand-teal to-brand-teal-dark text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-brand-peach">
              <span>★ {course.rating} Rating ({course.reviewsCount} Reviews)</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              {course.title}
            </h2>
            <p className="text-sm text-teal-100 font-medium">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold pt-2 text-teal-100 border-t border-teal-600/50">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand-peach" /> Duration: {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-brand-peach" /> {course.studentsEnrolled} Learners
              </span>
              <span className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-peach" /> ISO Certified Diploma
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Overview */}
          <div>
            <h3 className="text-lg font-extrabold text-brand-navy mb-2">Course Overview</h3>
            <p className="text-sm text-slate-600 leading-relaxed font-normal">
              {course.description} Designed according to latest industry standards with 100% real-time lab work, live project experience, and job interview assistance.
            </p>
          </div>

          {/* Tech stack tags */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-brand-teal mb-2">Technologies Covered</h4>
            <div className="flex flex-wrap gap-2">
              {course.techBadges.map((badge, idx) => (
                <span key={idx} className="bg-brand-mint border border-brand-mint-border text-brand-teal font-bold text-xs px-3 py-1 rounded-full">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Syllabus Accordions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-extrabold text-brand-navy">Detailed Course Syllabus</h3>
              <span className="text-xs font-bold text-brand-teal">{course.syllabus?.length || 0} Modules</span>
            </div>

            <div className="space-y-3">
              {course.syllabus?.map((mod, idx) => {
                const isOpen = openModuleIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-xl overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                      className="w-full bg-slate-50 hover:bg-slate-100 p-4 text-left font-bold text-sm text-brand-navy flex items-center justify-between transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="bg-brand-teal text-white text-xs px-2.5 py-1 rounded-md">
                          {mod.module}
                        </span>
                        <span>{mod.title}</span>
                      </div>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-brand-teal" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
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
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80">
            <h4 className="font-extrabold text-sm text-brand-navy mb-3">Job Roles You Can Apply For</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> Junior / Senior Specialist</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> Technical Consultant</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> System Engineer</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> QA / Test Analyst</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> Project Lead</div>
              <div className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-brand-teal" /> Solutions Architect</div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => alert(`Downloading ${course.title} Syllabus PDF...`)}
              className="w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-5 py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Syllabus PDF</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onEnquireThisCourse(course.title);
              }}
              className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-white font-extrabold text-sm px-7 py-3 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center justify-center gap-2"
            >
              <span>Enroll / Enquire Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
