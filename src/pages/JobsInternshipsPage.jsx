import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Building2, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Filter, 
  Award,
  Sparkles,
  Send,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Instagram,
  UserCheck
} from 'lucide-react';

const WEEKLY_OPENINGS = [
  {
    id: 'w1',
    company: 'HCL Tech',
    companyColor: 'text-blue-700',
    title: 'Software Testing',
    exp: '0-2 yrs Exp',
    location: 'Chennai',
    skills: ['QA testing', 'QA automation'],
    type: 'Full-Time'
  },
  {
    id: 'w2',
    company: 'Accenture',
    companyColor: 'text-purple-700',
    title: 'FullStack Developer',
    exp: '1-2 yrs Exp',
    location: 'Chennai',
    skills: ['Frontend', 'Backend', 'React', 'Node'],
    type: 'Full-Time'
  },
  {
    id: 'w3',
    company: 'Amazon',
    companyColor: 'text-amber-600',
    title: 'AWS Developer',
    exp: '0-2 yrs Exp',
    location: 'Chennai / Bangalore',
    skills: ['Linux', 'MySQL', 'HTTP', 'DNS', 'AWS EC2'],
    type: 'Full-Time'
  },
  {
    id: 'w4',
    company: 'TCS Digital',
    companyColor: 'text-blue-600',
    title: 'Python Full Stack Engineer',
    exp: '0-1 yr Exp',
    location: 'Bangalore / Remote',
    skills: ['Python 3', 'Django', 'REST APIs', 'PostgreSQL'],
    type: 'Full-Time'
  },
  {
    id: 'w5',
    company: 'Zoho Corporation',
    companyColor: 'text-emerald-600',
    title: 'Data Analyst Associate',
    exp: 'Freshers 2025 / 2026',
    location: 'Chennai (Velachery / OMR)',
    skills: ['Power BI', 'SQL', 'Advanced Excel', 'Python'],
    type: 'Internship to Full-Time'
  },
  {
    id: 'w6',
    company: 'Wipro',
    companyColor: 'text-indigo-600',
    title: 'Cloud DevOps Associate',
    exp: '0-2 yrs Exp',
    location: 'Hyderabad (HITEC City)',
    skills: ['Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
    type: 'Full-Time'
  }
];

import { sendEmailNotification } from '../utils/sendEmail';

export default function JobsInternshipsPage({ onOpenEnquire }) {
  const [jobForm, setJobForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: 'Fresher (0-1 Year)',
    skills: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [selectedJobTitle, setSelectedJobTitle] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    await sendEmailNotification({
      formType: 'Jobs & Internships Placement Form',
      subject: `Job Seeker Application from ${jobForm.name}`,
      name: jobForm.name,
      email: jobForm.email,
      phone: jobForm.phone,
      location: jobForm.location,
      message: jobForm.message,
      extraDetails: {
        'Experience Level': jobForm.experience,
        'Key Skills / Tech': jobForm.skills
      }
    });
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Top Offer Banner Strip */}
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-emerald-600 text-white p-3 rounded-2xl text-center text-xs sm:text-sm font-black shadow-md flex items-center justify-between gap-4">
          <span className="truncate">
            ⚡ Land a ₹5–15 LPA IT Job in Just 90 Days With Placement Support, Low Fees, and Expert Trainers.
          </span>
          <button
            onClick={() => onOpenEnquire('90 Days Job Placement Offer')}
            className="bg-white text-slate-900 px-4 py-1.5 rounded-xl font-black text-xs hover:bg-amber-300 transition-colors shrink-0"
          >
            Grab Now →
          </button>
        </div>

        {/* Section 1: Hero Graphic & Right Application Form (Matching Screenshot 1) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Graphic & Intro Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-brand-mint/40 border border-brand-teal/20 p-6 rounded-3xl text-center space-y-4">
              <div className="w-20 h-20 bg-brand-teal text-white rounded-3xl flex items-center justify-center mx-auto shadow-lg shadow-brand-teal/20">
                <UserCheck className="w-10 h-10 text-brand-peach" />
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy leading-tight">
                Zero-Cost Consulting, Direct Payroll Employment
              </h1>

              <div className="inline-block bg-brand-navy text-white text-xs sm:text-sm font-black px-5 py-2 rounded-full shadow-md">
                Candidates Placed: <span className="text-amber-400">30,000 and Counting</span>
              </div>
            </div>

            <div className="space-y-3 text-center sm:text-left">
              <h4 className="text-xs font-black uppercase tracking-wider text-slate-400">Connect with Techmaster Placement Cell</h4>
              <div className="flex items-center justify-center sm:justify-start gap-3 text-slate-500">
                <Facebook className="w-5 h-5 hover:text-blue-600 cursor-pointer transition-colors" />
                <Twitter className="w-5 h-5 hover:text-sky-500 cursor-pointer transition-colors" />
                <Youtube className="w-5 h-5 hover:text-red-600 cursor-pointer transition-colors" />
                <Linkedin className="w-5 h-5 hover:text-blue-700 cursor-pointer transition-colors" />
                <Instagram className="w-5 h-5 hover:text-rose-500 cursor-pointer transition-colors" />
              </div>
            </div>
          </div>

          {/* Right Form: Enter Your Information and Get Hired in 60 days! */}
          <div className="lg:col-span-6 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm space-y-5">
            <div className="text-center space-y-1">
              <h2 className="text-xl sm:text-2xl font-black text-brand-navy">
                Enter Your Information and Get Hired in 60 days!
              </h2>
            </div>

            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-brand-navy">Profile Submitted Successfully!</h3>
                <p className="text-xs text-slate-600">Our HR Placement Desk will call you within 24 hours with suitable interview drives.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-teal text-white font-extrabold text-xs px-5 py-2.5 rounded-xl hover:bg-teal-800 transition-colors"
                >
                  Submit Another Profile
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={jobForm.name}
                    onChange={(e) => setJobForm({ ...jobForm, name: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={jobForm.email}
                      onChange={(e) => setJobForm({ ...jobForm, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={jobForm.phone}
                      onChange={(e) => setJobForm({ ...jobForm, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Fresher / Experienced</label>
                  <select
                    value={jobForm.experience}
                    onChange={(e) => setJobForm({ ...jobForm, experience: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                  >
                    <option value="Fresher (0-1 Year)">Fresher (0-1 Year)</option>
                    <option value="Experienced (1-3 Years)">Experienced (1-3 Years)</option>
                    <option value="Senior (3+ Years)">Senior (3+ Years)</option>
                    <option value="Career Transition (Non-IT to IT)">Career Transition (Non-IT to IT)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Skills</label>
                  <input
                    type="text"
                    placeholder="Your Skills (e.g. Python, Java, Selenium, React, AWS)"
                    value={jobForm.skills}
                    onChange={(e) => setJobForm({ ...jobForm, skills: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current Location</label>
                  <input
                    type="text"
                    placeholder="Current Location (e.g. Chennai, Bangalore, Hyderabad)"
                    value={jobForm.location}
                    onChange={(e) => setJobForm({ ...jobForm, location: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-brand-navy outline-none focus:border-brand-teal"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Message / Key Highlights</label>
                  <textarea
                    rows="2"
                    placeholder="Message"
                    value={jobForm.message}
                    onChange={(e) => setJobForm({ ...jobForm, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs text-brand-navy outline-none focus:border-brand-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-black text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>SUBMIT 🚀</span>
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Section 2: Openings On This Week (Matching Screenshot 2) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="space-y-2 border-b border-slate-200 pb-4">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy border-b-2 border-brand-teal w-fit pb-1">
              Openings On This Week
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEEKLY_OPENINGS.map((job) => (
              <div
                key={job.id}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:border-brand-teal/50 transition-all flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className={`font-black text-lg ${job.companyColor}`}>
                      {job.company}
                    </span>
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2.5 py-1 rounded-md">
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-brand-navy group-hover:text-brand-teal transition-colors">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {job.exp}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" /> {job.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {job.skills.map((sk, sIdx) => (
                      <span key={sIdx} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded">
                        {sk}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <button
                    onClick={() => onOpenEnquire(`Quick Job Apply: ${job.title} at ${job.company}`)}
                    className="text-brand-teal hover:text-teal-800 text-xs font-black underline flex items-center gap-1"
                  >
                    <span>Quick Job</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
