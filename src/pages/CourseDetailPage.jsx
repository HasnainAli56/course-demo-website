import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  Users, 
  Star, 
  Award, 
  Download, 
  ArrowRight, 
  CheckCircle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  BookOpen, 
  ShieldCheck, 
  Building2, 
  Phone, 
  MessageSquare, 
  Share2, 
  ArrowLeft, 
  Briefcase, 
  FileText, 
  Layers, 
  Loader2,
  HelpCircle,
  TrendingUp,
  GraduationCap,
  Calendar,
  Check,
  Target
} from 'lucide-react';
import { generateCoursePDF } from '../utils/generatePdf';
import { COURSES, CATEGORIES } from '../data/courses';

export default function CourseDetailPage({ course, onSelectCourse, onOpenEnquire, onNavigateHome }) {
  const [openModuleIndex, setOpenModuleIndex] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Fallback to first course if undefined
  const activeCourse = course || COURSES[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeCourse.id]);

  const handleDownloadPDF = async () => {
    try {
      setIsDownloading(true);
      await generateCoursePDF(activeCourse);
    } catch (err) {
      console.error('PDF generation error:', err);
    } finally {
      setTimeout(() => setIsDownloading(false), 800);
    }
  };

  const handleShareLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  // Find category label
  const categoryObj = CATEGORIES.find(c => c.id === activeCourse.category);
  const categoryLabel = categoryObj ? categoryObj.label.replace(/^[\u2600-\u26FF\u2700-\u27BF\u1F300-\u1F9FF]\s*/, '') : 'All Courses';

  // Related courses in same category or featured
  const relatedCourses = COURSES.filter(c => c.id !== activeCourse.id && (c.category === activeCourse.category || c.featured)).slice(0, 4);

  const courseFaqs = activeCourse.pdfFaqs || [
    {
      q: `What are the prerequisites for learning ${activeCourse.title}?`,
      a: `No prior coding background is strictly required for freshers. Our syllabus starts from foundational basics and progresses to advanced industry level hands-on projects.`
    },
    {
      q: `Will I get 100% placement assistance after completing ${activeCourse.title}?`,
      a: `Yes! Techmaster provides 100% placement support including resume building, 1-on-1 mock technical interviews, portfolio project reviews, and direct interview scheduling with our 500+ hiring partner companies.`
    },
    {
      q: `What is the mode of training for this course?`,
      a: `We offer Live Interactive Online Training, In-person Classroom Training across Chennai & Bangalore centers, as well as Weekend Fast-track batches for working professionals.`
    },
    {
      q: `Will I receive an industry-recognized certificate?`,
      a: `Yes, upon successful completion of hands-on capstone projects, you will receive an ISO 9001:2015 certified Techmaster Course Completion Certificate with verifiable credential ID.`
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-20 font-sans">
      
      {/* 1. Top Placement Guarantee Notice Strip */}
      <div className="bg-gradient-to-r from-blue-900 via-brand-teal to-blue-900 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-black flex items-center justify-center gap-3 shadow-sm">
        <Sparkles className="w-4 h-4 text-amber-300 animate-pulse shrink-0" />
        <span>
          Next Live Batch Starting This Monday! <span className="underline decoration-wavy underline-offset-2 font-black text-amber-300">Enroll Today & Get 30% Fee Off</span> + Placement Guarantee
        </span>
        <button
          onClick={() => onOpenEnquire(`Batch Offer: ${activeCourse.title}`)}
          className="bg-amber-400 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-colors shadow-sm shrink-0 hidden sm:inline-block"
        >
          Claim Offer
        </button>
      </div>

      {/* 2. Breadcrumb Navigation Bar */}
      <div className="bg-white border-b border-slate-200 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            <button 
              onClick={onNavigateHome} 
              className="hover:text-blue-700 font-bold flex items-center gap-1 shrink-0"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Courses</span>
            </button>
            <span>&gt;</span>
            <span className="shrink-0">{categoryLabel}</span>
            <span>&gt;</span>
            <span className="text-slate-900 font-extrabold truncate max-w-[200px] sm:max-w-xs">{activeCourse.title}</span>
          </div>

          <button
            onClick={handleShareLink}
            className="flex items-center gap-1.5 text-slate-600 hover:text-blue-700 font-bold text-xs bg-slate-100 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors shrink-0"
            title="Share Course Link"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? 'Link Copied!' : 'Share Page'}</span>
          </button>
        </div>
      </div>

      {/* 3. Main Course Hero Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-indigo-950 to-brand-navy text-white py-10 sm:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden shadow-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-8 space-y-5">
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <span className="bg-amber-400 text-slate-900 text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                <Star className="w-3.5 h-3.5 fill-slate-900" />
                <span>{activeCourse.rating || '4.9'} ({activeCourse.reviewsCount || '1.2k+'} Reviews)</span>
              </span>

              {activeCourse.jobGuarantee && (
                <span className="bg-emerald-500 text-white text-[11px] font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Job Guarantee Track</span>
                </span>
              )}

              <span className="bg-white/10 text-teal-200 border border-white/20 text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                {categoryLabel}
              </span>
            </div>

            {/* Course Title & Subtitle */}
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              {activeCourse.title}
            </h1>

            <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed max-w-3xl">
              {activeCourse.subtitle} Master real-world industry skills with 100% practical lab training, live project mentorship, and dedicated career placement support.
            </p>

            {/* Key Meta Stats */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 pt-3 text-xs sm:text-sm font-bold text-teal-100 border-t border-white/10">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Course Duration</span>
                  <span>{activeCourse.duration}</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Learners Enrolled</span>
                  <span>{activeCourse.studentsEnrolled || '1,450+'} Students</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Certification</span>
                  <span>ISO 9001:2015 Verified</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase font-semibold">Training Modes</span>
                  <span>Online Live & Classroom</span>
                </div>
              </div>
            </div>

            {/* Hero Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={() => onOpenEnquire(`Enroll Now: ${activeCourse.title}`)}
                className="bg-amber-400 hover:bg-yellow-300 text-slate-900 font-black text-sm px-7 py-3.5 rounded-xl shadow-lg transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
              >
                <span>Enroll Now / Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-white/10 hover:bg-white/20 text-white font-extrabold text-sm px-6 py-3.5 rounded-xl border border-white/20 transition-all flex items-center gap-2 backdrop-blur-md"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                    <span>Generating Syllabus PDF...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-amber-400" />
                    <span>Download Full Syllabus PDF</span>
                  </>
                )}
              </button>
            </div>

          </div>

          {/* Hero Right Floating Highlights Card */}
          <div className="lg:col-span-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 text-white space-y-5 shadow-2xl">
            <div className="space-y-1 text-center border-b border-white/15 pb-4">
              <span className="text-xs font-black uppercase text-amber-300 tracking-wider">SPECIAL BATCH OFFER</span>
              <div className="text-2xl font-black text-white">Interactive Training Cohort</div>
              <p className="text-xs text-slate-300">Flexible Weekday & Weekend Batches</p>
            </div>

            <div className="space-y-3 text-xs font-semibold">
              {[
                '100% Practical Hands-on Lab Exercises',
                'Real-time Live Capstone Projects',
                '1-on-1 Mock Interview Sessions',
                'Resume & Portfolio Building Support',
                '500+ Hiring Partner Referrals',
                '24/7 LMS Access & Live Batch Recordings'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenEnquire(`Instant Callback: ${activeCourse.title}`)}
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs py-3.5 rounded-xl uppercase tracking-wider shadow-md transition-all text-center block"
            >
              Request Free Instant Callback
            </button>
          </div>

        </div>
      </section>

      {/* 4. Page Body Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left 8-Column Main Content */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Course Overview Section */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-brand-teal" />
              <span>Course Overview</span>
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {activeCourse.description} This comprehensive curriculum is meticulously engineered by senior industry architects to transform beginners into job-ready professionals equipped with high-demand tech skills.
            </p>

            {/* Core Highlights Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center space-y-1">
                <GraduationCap className="w-6 h-6 text-brand-teal mx-auto" />
                <h4 className="font-extrabold text-xs text-brand-navy uppercase">Industry Mentors</h4>
                <p className="text-[11px] text-slate-500 font-medium">Guided by 10+ yrs experienced leads</p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center space-y-1">
                <Briefcase className="w-6 h-6 text-brand-teal mx-auto" />
                <h4 className="font-extrabold text-xs text-brand-navy uppercase">Career Placement</h4>
                <p className="text-[11px] text-slate-500 font-medium">Dedicated corporate drive portal</p>
              </div>

              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-center space-y-1">
                <FileText className="w-6 h-6 text-brand-teal mx-auto" />
                <h4 className="font-extrabold text-xs text-brand-navy uppercase">Capstone Projects</h4>
                <p className="text-[11px] text-slate-500 font-medium">Build live portfolio-ready apps</p>
              </div>
            </div>
          </section>

          {/* What Is Pega Section */}
          {activeCourse.whatIsPegaDetails && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-brand-teal" />
                <span>{activeCourse.whatIsPegaDetails.heading}</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {activeCourse.whatIsPegaDetails.description}
              </p>

              {activeCourse.whatIsPegaDetails.keyComponents && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {activeCourse.whatIsPegaDetails.keyComponents.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1.5">
                      <h4 className="font-black text-sm text-brand-navy flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Why Learn Pega & Key Areas */}
          {activeCourse.whyLearnPega && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-5">
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-brand-teal" />
                <span>{activeCourse.whyLearnPega.heading}</span>
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {activeCourse.whyLearnPega.description}
              </p>

              {activeCourse.whyLearnPega.keyAreas && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  {activeCourse.whyLearnPega.keyAreas.map((item, idx) => (
                    <div key={idx} className="bg-blue-50/50 border border-blue-100 rounded-2xl p-4 space-y-1">
                      <h4 className="font-extrabold text-xs text-blue-950 uppercase tracking-wider">{item.title}</h4>
                      <p className="text-xs text-slate-600 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>
          )}

          {/* Learning Methodology & Course Highlights */}
          {(activeCourse.learningMethodology || activeCourse.courseHighlights) && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              {activeCourse.learningMethodology && (
                <div className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                    <BookOpen className="w-6 h-6 text-brand-teal" />
                    <span>5-Stage Learning Methodology</span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {activeCourse.learningMethodology.map((m, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 space-y-1">
                        <span className="text-[10px] font-black uppercase text-brand-teal tracking-wider">{m.stage}</span>
                        <h4 className="font-extrabold text-sm text-brand-navy">{m.title}</h4>
                        <p className="text-xs text-slate-500 font-medium leading-relaxed">{m.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeCourse.courseHighlights && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h3 className="font-black text-sm text-brand-navy uppercase tracking-wider">Key Course Highlights</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCourse.courseHighlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <span className="font-extrabold text-xs text-slate-900 block">{h.title}</span>
                          <span className="text-xs text-slate-500 font-medium">{h.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Tools & Technologies Covered */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-4">
            <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
              <Layers className="w-6 h-6 text-brand-teal" />
              <span>Technologies & Tools Covered</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Get extensive hands-on experience using industry-standard tools, libraries, and frameworks:
            </p>

            <div className="flex flex-wrap gap-2.5 pt-2">
              {activeCourse.techBadges?.map((tech, idx) => (
                <span 
                  key={idx}
                  className="bg-blue-50 border border-blue-200 text-blue-800 font-bold text-xs sm:text-sm px-4 py-2 rounded-xl shadow-xs flex items-center gap-1.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </section>

          {/* Detailed Course Syllabus Section */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                  <FileText className="w-6 h-6 text-brand-teal" />
                  <span>Detailed Course Syllabus</span>
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Structured module-by-module learning roadmap designed for complete mastery.
                </p>
              </div>

              <span className="bg-brand-mint text-brand-teal text-xs font-black px-3.5 py-1.5 rounded-full border border-brand-teal/20 self-start sm:self-auto">
                {activeCourse.syllabus?.length || 0} Comprehensive Modules
              </span>
            </div>

            {/* Syllabus Accordion Modules List */}
            <div className="space-y-3">
              {activeCourse.syllabus?.map((mod, idx) => {
                const isOpen = openModuleIndex === idx;

                // Handle property names from data model
                const moduleName = mod.module || `Module ${idx + 1}`;
                const moduleTitle = mod.title || mod.moduleTitle || `${activeCourse.title} - ${moduleName} Overview`;

                const topicsList = mod.topics && mod.topics.length > 0
                  ? mod.topics
                  : [
                      `${activeCourse.title} core architectural concepts & setup`,
                      `Hands-on practical coding exercises & lab setup`,
                      `Real-world application building & performance tuning`,
                      `Industry standard best practices & interview Q&A preparation`
                    ];

                return (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => setOpenModuleIndex(isOpen ? -1 : idx)}
                      className="w-full bg-slate-50/80 hover:bg-blue-50/50 p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-brand-teal text-white rounded-lg flex items-center justify-center text-xs font-black shrink-0">
                          {idx + 1}
                        </span>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase text-slate-400 block tracking-wider">
                            {moduleName}
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold text-brand-navy">
                            {moduleTitle}
                          </h4>
                        </div>
                      </div>

                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-brand-teal shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white border-t border-slate-100 space-y-4 animate-fade-in">
                        <ul className="space-y-2.5">
                          {topicsList.map((topic, tIdx) => (
                            <li key={tIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                              <span className="w-2 h-2 rounded-full bg-brand-teal shrink-0 mt-1.5"></span>
                              <span>{topic}</span>
                            </li>
                          ))}
                        </ul>

                        {(mod.handsOnProject || mod.project) && (
                          <div className="bg-amber-50 border border-amber-200/80 rounded-xl p-3.5 flex items-start gap-2.5 text-xs font-semibold text-amber-900">
                            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="font-extrabold uppercase text-[10px] text-amber-700 block">Hands-on Lab Exercise</span>
                              <span>{mod.handsOnProject || mod.project}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* PDF Download Syllabus Callout */}
            <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border border-blue-200/80 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-extrabold text-sm text-slate-900">Want the offline printable curriculum?</h4>
                <p className="text-xs text-slate-600 font-medium">Get the complete module breakdown, lab setup guide, and project details in PDF format.</p>
              </div>

              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="bg-brand-teal hover:bg-teal-800 text-white font-extrabold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all shrink-0 flex items-center gap-1.5"
              >
                <Download className="w-4 h-4" />
                <span>Download Syllabus PDF</span>
              </button>
            </div>
          </section>

          {/* Real-World Project Scenarios */}
          {activeCourse.projectScenarios && activeCourse.projectScenarios.length > 0 && (
            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl space-y-6">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wider">HANDS-ON PORTFOLIO</span>
                <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                  <Briefcase className="w-6 h-6 text-amber-400" />
                  <span>Real-World Project Scenarios</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-medium">
                  Work on end-to-end practical application design scenarios modeled on real enterprise business processes:
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {activeCourse.projectScenarios.map((proj, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/15 rounded-2xl p-4 sm:p-5 space-y-2 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 bg-amber-400 text-slate-950 rounded-lg flex items-center justify-center font-black text-xs shrink-0">
                        P{idx + 1}
                      </span>
                      <h4 className="font-extrabold text-sm text-white">{proj.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-medium pl-10">{proj.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Structured Learning & Career Roadmap */}
          {activeCourse.learningRoadmap && activeCourse.learningRoadmap.length > 0 && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                <Calendar className="w-6 h-6 text-brand-teal" />
                <span>Complete Career Learning Roadmap</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Step-by-step progression path designed to build complete technical expertise from foundations to advanced architecture:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeCourse.learningRoadmap.map((step, idx) => (
                  <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3.5 flex items-center gap-3">
                    <span className="w-7 h-7 rounded-full bg-brand-teal/10 text-brand-teal font-black text-xs flex items-center justify-center shrink-0">
                      {idx + 1}
                    </span>
                    <span className="text-xs font-extrabold text-slate-800 leading-tight">{step}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Who Can Learn & Prerequisites */}
          {(activeCourse.whoCanLearn || activeCourse.prerequisites) && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
                <Users className="w-6 h-6 text-brand-teal" />
                <span>Target Audience & Prerequisites</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {activeCourse.whoCanLearn && (
                  <div className="md:col-span-7 space-y-3">
                    <h3 className="font-extrabold text-sm text-brand-navy uppercase tracking-wider">Who Can Learn This Course?</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeCourse.whoCanLearn.map((person, idx) => (
                        <div key={idx} className="bg-slate-50 border border-slate-200/80 rounded-xl p-3 space-y-1">
                          <span className="font-extrabold text-xs text-brand-navy block">{person.title}</span>
                          <span className="text-[11px] text-slate-500 font-medium block">{person.desc}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeCourse.prerequisites && (
                  <div className="md:col-span-5 bg-teal-50/60 border border-teal-100 rounded-2xl p-5 space-y-3">
                    <h3 className="font-extrabold text-sm text-teal-950 uppercase tracking-wider flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-teal" />
                      <span>Course Prerequisites</span>
                    </h3>
                    <ul className="space-y-2">
                      {activeCourse.prerequisites.map((pre, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-teal shrink-0 mt-1.5"></span>
                          <span>{pre}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Certification Guidance & Potential Roles */}
          {(activeCourse.certificationGuidance || activeCourse.potentialRoles) && (
            <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
              {activeCourse.certificationGuidance && (
                <div className="bg-gradient-to-r from-amber-500/10 via-amber-400/5 to-transparent border border-amber-200/80 rounded-2xl p-5 space-y-2">
                  <span className="bg-amber-400 text-slate-900 text-[10px] font-black px-2.5 py-1 rounded-md uppercase">
                    OFFICIAL CERTIFICATION PATHWAY
                  </span>
                  <h3 className="text-lg font-black text-slate-900">{activeCourse.certificationGuidance.pathway}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {activeCourse.certificationGuidance.description}
                  </p>
                </div>
              )}

              {activeCourse.potentialRoles && activeCourse.potentialRoles.length > 0 && (
                <div className="space-y-3">
                  <h3 className="font-extrabold text-sm text-brand-navy uppercase tracking-wider">Potential Career Roles</h3>
                  <div className="flex flex-wrap gap-2">
                    {activeCourse.potentialRoles.map((role, idx) => (
                      <span key={idx} className="bg-slate-100 text-slate-800 font-bold text-xs px-3 py-1.5 rounded-lg border border-slate-200/60">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}

          {/* Certificate & ISO Accreditation */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
              <Award className="w-6 h-6 text-brand-teal" />
              <span>Industry Recognized Certification</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-7 space-y-3">
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  Earn a globally recognized Techmaster Course Completion Certificate upon completing all capstone projects and lab assessments.
                </p>

                <div className="space-y-2 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>ISO 9001:2015 Certified Credentials</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Verifiable QR Code & Unique Student Serial ID</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Directly Shareable on LinkedIn & Resume Profiles</span>
                  </div>
                </div>
              </div>

              <div className="md:col-span-5 bg-gradient-to-br from-indigo-900 to-purple-900 text-white p-6 rounded-2xl text-center space-y-3 shadow-lg border border-indigo-700">
                <Award className="w-12 h-12 text-amber-300 mx-auto" />
                <h4 className="font-extrabold text-sm uppercase text-amber-300">TECHMASTER CERTIFICATE</h4>
                <p className="text-[11px] text-slate-300">Certified Professional in {activeCourse.title}</p>
                <span className="inline-block bg-white/20 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase">
                  VERIFIED CREDENTIAL
                </span>
              </div>
            </div>
          </section>

          {/* Frequently Asked Questions */}
          <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm space-y-6">
            <h2 className="text-xl sm:text-2xl font-black text-brand-navy flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-brand-teal" />
              <span>Frequently Asked Questions</span>
            </h2>

            <div className="space-y-3">
              {courseFaqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full bg-slate-50 p-4 text-left font-extrabold text-xs sm:text-sm text-brand-navy flex items-center justify-between gap-3"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-4 h-4 text-brand-teal shrink-0" /> : <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

        </div>

        {/* Right 4-Column Sticky Sidebar */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-xl sticky top-24 space-y-6">
            
            <div className="space-y-2 border-b border-slate-100 pb-4 text-center">
              <span className="bg-amber-100 text-amber-800 text-[10px] font-black px-3 py-1 rounded-full uppercase">
                UPCOMING BATCH ENROLLMENT
              </span>
              <h3 className="text-xl font-black text-brand-navy">Enroll in This Track</h3>
              <p className="text-xs text-slate-500 font-medium">Book a free seat or talk to a senior career counselor.</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onOpenEnquire(`Enroll Sidebar: ${activeCourse.title}`)}
                className="w-full bg-brand-teal hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Book Free Demo Seat</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadPDF}
                disabled={isDownloading}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-extrabold text-xs py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-brand-teal" />
                <span>Get Complete PDF Syllabus</span>
              </button>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3 text-xs font-semibold text-slate-600">
              <p className="font-extrabold text-slate-900 uppercase tracking-wider text-[11px]">Why Enroll with Techmaster?</p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>500+ Top Hiring Corporate Partners</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Resume & Mock Interview Support</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>24/7 Cloud Lab & LMS Portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Flexible EMI Fee Payment Options</span>
                </div>
              </div>
            </div>

            {/* Helpline Box */}
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center space-y-2">
              <p className="text-[11px] text-slate-500 font-bold uppercase">Have questions about syllabus or fees?</p>
              <a 
                href="tel:+917669100251" 
                className="inline-flex items-center gap-2 text-brand-navy hover:text-brand-teal font-black text-sm"
              >
                <Phone className="w-4 h-4 text-brand-teal" />
                <span>+91 76691 00251</span>
              </a>
            </div>

          </div>
        </div>

      </div>

      {/* 5. Related / Recommended Courses Grid */}
      {relatedCourses.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-6">
          <div className="border-b border-slate-200 pb-4 flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-black text-brand-navy">
              Recommended Related Career Programs
            </h3>
            <button 
              onClick={onNavigateHome}
              className="text-xs font-extrabold text-brand-teal hover:underline flex items-center gap-1"
            >
              <span>View All 80+ Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((rCourse) => (
              <div
                key={rCourse.id}
                onClick={() => onSelectCourse(rCourse)}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:shadow-lg transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <span className="bg-blue-50 text-blue-700 text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider">
                    ★ {rCourse.rating || '4.9'}
                  </span>
                  <h4 className="text-sm font-black text-slate-900 group-hover:text-brand-teal transition-colors leading-snug">
                    {rCourse.title}
                  </h4>
                  <p className="text-xs text-slate-500 line-clamp-2 font-medium">
                    {rCourse.subtitle}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-600 mt-4">
                  <span>{rCourse.duration}</span>
                  <span className="text-brand-teal group-hover:translate-x-1 transition-transform">&rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

    </div>
  );
}
