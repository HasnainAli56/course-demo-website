import React, { useState } from 'react';
import { 
  Star, 
  CheckCircle2, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Building2, 
  Users, 
  Award, 
  Clock, 
  Laptop, 
  Globe, 
  Video, 
  Layers, 
  Send,
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { HIRING_PARTNERS } from '../data/courses';

export default function CorporateTrainingPage({ onOpenEnquire }) {
  const [activeTalentTab, setActiveTalentTab] = useState('hire');
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    teamSize: '10-50',
    trainingDomain: 'Full Stack Development',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Section 1: 1200+ Happy Corporates & Review Ratings */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            <div className="space-y-2 max-w-xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-brand-navy tracking-tight">
                1200+ Happy Corporates
              </h1>
              <p className="text-slate-600 text-sm sm:text-base font-medium">
                Exceptional feedback from our global learners made us <strong className="text-brand-teal font-extrabold">#1 learning platform</strong>
              </p>
            </div>

            {/* 3 Review Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              
              {/* Google Reviews */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center font-black text-blue-600 text-lg shrink-0 shadow-xs">
                  G
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-800">Google Reviews</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-black text-brand-navy">4.7/5</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Course Report Reviews */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                  CR
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-800">Course Report</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-black text-brand-navy">4.8/5</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Switch Up Reviews */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-600 text-white flex items-center justify-center font-black text-xs shrink-0 shadow-xs">
                  SU
                </div>
                <div>
                  <h4 className="font-extrabold text-xs text-slate-800">Switch Up</h4>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="text-sm font-black text-brand-navy">4.8/5</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Section 2: Why Top Companies Prefer Techmaster */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
              Why Top Companies Prefer <span className="text-brand-teal">Techmaster</span>
            </h2>

            <div className="space-y-4">
              {[
                'High engagement and outcome-centric learning.',
                'Customized curriculum built with industry leaders, for industry leaders.',
                'Hands-on exercises and industry use cases.',
                'Assignments and project work review and feedback from industry SMEs.',
                'Strong reporting to track learning and calculate training ROI for managers.',
                'Pre-configured Cloud Labs for practice.'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-700 leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenEnquire('Corporate Training Consultation')}
                className="bg-brand-teal hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center gap-2"
              >
                <span>Request Corporate Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Hero Video Card Banner */}
          <div className="lg:col-span-6 relative group rounded-3xl overflow-hidden shadow-xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
              alt="Corporate Training Session"
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent flex items-center justify-center">
              <button
                onClick={() => onOpenEnquire('Watch Corporate Demo Video')}
                className="w-16 h-16 rounded-full bg-white text-brand-teal shadow-2xl flex items-center justify-center hover:scale-110 transition-transform cursor-pointer"
                aria-label="Play Corporate Training Overview"
              >
                <Play className="w-7 h-7 fill-brand-teal translate-x-0.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Section 3: Versatile Career Options & Focus Areas */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">Versatile Career Options</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              The most extensive IT courses library with 50+ tech categories, including more than 450 career paths, access to informative tutorials and blogs, and engaging hands-on projects to enhance your team's expertise.
            </p>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-black text-brand-navy mb-4">
              Explore our focus areas (No. of Courses):
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3.5">
              {[
                'Project Management Courses Online',
                'Cyber Security & Networking Courses Online',
                'AI & Machine Learning Courses Online',
                'Robotic Process Automation Courses Online',
                'BI & Data Warehousing Courses Online',
                'ERP & CRM Courses Online',
                'Oracle Courses Online',
                'Data Science Courses Online',
                'Devops Courses Online',
                'Cloud Computing Courses Online',
                'App Programming & Scripting Courses Online',
                'Master Program Courses Online'
              ].map((area, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-slate-50 border border-slate-200/80 p-3.5 rounded-xl hover:border-brand-teal/40 transition-colors">
                  <div className="w-5 h-5 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-800">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Section 4: Corporate Training Features */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">Corporate Training Features</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              Our expertise in understanding corporate needs made us design training programs with impressive features to meet versatile and customized training services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: 'Course customization',
                desc: 'Customize the course scope as per your project requirements'
              },
              {
                title: 'Certification guidance',
                desc: 'Gain complete guidance on obtaining a certification'
              },
              {
                title: 'Flexible schedules irrespective of time zones',
                desc: 'Have a schedule that is convenient as per your work schedule and time zone'
              },
              {
                title: 'Dedicated Highly Qualified Trainers',
                desc: 'Gain industry insights during the training delivered by industry experts'
              },
              {
                title: 'Virtual interactive sessions with learning analytics',
                desc: 'Engage in complete practical demonstration, discussions and exercises based on practical use cases'
              },
              {
                title: 'Versatile learning modes',
                desc: 'Along with self-paced videos, ILT and VILT, we offer hybrid and blended options'
              }
            ].map((feat, idx) => (
              <div key={idx} className="flex items-start gap-3.5 bg-slate-50 border border-slate-200/80 p-5 rounded-2xl hover:shadow-sm transition-all">
                <div className="w-6 h-6 rounded-full bg-brand-teal text-white flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-navy">{feat.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Programs delivered as per your training needs (4 Cards) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              Programs delivered as per your training needs
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { title: 'On Premises', icon: Building2 },
              { title: 'Online Instructor-led', icon: Laptop },
              { title: 'Self-paced', icon: Clock },
              { title: 'Blended', icon: Layers }
            ].map((mode, idx) => {
              const IconComp = mode.icon;
              return (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-6 rounded-2xl text-center space-y-3 hover:border-brand-teal transition-all">
                  <div className="w-14 h-14 bg-brand-mint text-brand-teal rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-brand-navy">{mode.title}</h3>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 6: Business Training Solutions & Client Logos */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">Business Training Solutions</h2>
            
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              <p>Customized learning approaches for your business requirements.</p>
              <p>Real-time projects are used in a virtual training environment with an instructor.</p>
              <p>Learn as per full day schedule with discussions, exercises and practical use cases.</p>
            </div>

            <button
              onClick={() => onOpenEnquire('Business Training Solutions')}
              className="bg-brand-teal text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl hover:bg-teal-800 transition-colors shadow-md"
            >
              Get Custom Quote
            </button>
          </div>

          {/* Client Logos Grid */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 rounded-2xl p-6">
            <h4 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-4 text-center">Trusted Global Enterprise Partners</h4>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 text-center">
              {['Oracle', 'Accenture', 'Amazon', 'Zoho', 'Wipro', 'Dell', 'Google', 'HCL', 'Infosys', 'PayPal', 'SAP', 'TATA'].map((client, cIdx) => (
                <div key={cIdx} className="bg-white border border-slate-200 p-3 rounded-xl font-black text-xs text-slate-700 shadow-2xs">
                  {client}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Section 7: Talent Solutions Tabs */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">Talent Solutions</h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">Explore exclusive business services for every project needs</p>
          </div>

          {/* Tabs header */}
          <div className="flex items-center justify-center gap-2 border-b border-slate-200 pb-4">
            {[
              { id: 'hire', label: 'Hire From Us' },
              { id: 'eval', label: 'Skill Evaluation' },
              { id: 'consulting', label: 'Project Consulting' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTalentTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all ${
                  activeTalentTab === tab.id
                    ? 'bg-brand-teal text-white shadow-md'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div className="space-y-4">
              {activeTalentTab === 'hire' && (
                <>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Trained resources</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Choose from quality skilled professionals for your technical project requirements.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Cited Skills</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Trainees' skills evaluation as per professional rating criteria.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Access a specific domain pool</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Hire resources with skills essential for your projects.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Access complete resource pool</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Choose from resources mastered in various skills to reduce hiring and training costs.</p>
                  </div>
                </>
              )}

              {activeTalentTab === 'eval' && (
                <>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Pre-Hire Skill Diagnostics</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Comprehensive technical assessment suite to benchmark your team's current capabilities.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Customized Coding & Lab Exams</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Real-world coding challenges tailored to your company's architecture.</p>
                  </div>
                </>
              )}

              {activeTalentTab === 'consulting' && (
                <>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">End-to-End Technical Advisory</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Senior architects assist in technology migration, cloud adoption, and devops setup.</p>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-extrabold text-base text-brand-navy">Project Bootcamps</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium">Fast-track sprint training for newly onboarded developer cohorts.</p>
                  </div>
                </>
              )}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-6 text-center space-y-4 shadow-sm">
              <Building2 className="w-12 h-12 text-brand-teal mx-auto" />
              <h4 className="font-black text-lg text-brand-navy">Need Custom Talent Solutions?</h4>
              <p className="text-xs text-slate-500">Contact our enterprise team for customized talent hiring and skill evaluation.</p>
              <button
                onClick={() => onOpenEnquire('Talent Solutions Request')}
                className="bg-brand-teal text-white font-bold text-xs px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
              >
                Connect with Advisor
              </button>
            </div>

          </div>
        </div>

        {/* Proposal Request Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <span className="bg-brand-mint text-brand-teal text-xs font-black px-3 py-1 rounded-full uppercase">
              Schedule Consultation
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy leading-tight">
              Request a Customized Corporate Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
              Fill out the form to connect with our enterprise learning architects. We will conduct a skill-gap analysis and design a custom bootcamp for your team.
            </p>
          </div>

          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-brand-navy">Proposal Request Received!</h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Thank you! Our Enterprise Learning Specialist will contact you at <strong>{formData.email}</strong> within 2 business hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-teal text-white text-xs font-bold px-6 py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tech Corp"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="rahul@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Training Requirements / Specific Goals</label>
                  <textarea
                    rows="3"
                    placeholder="Describe specific tech stack requirements, batch schedules, or project goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-brand-navy focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-teal hover:bg-teal-800 text-white font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg shadow-brand-teal/20 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Proposal Request</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
