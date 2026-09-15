import React, { useState } from 'react';
import { 
  Phone, 
  Play, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Facebook, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Award,
  Search,
  CheckCircle2,
  ArrowRight,
  Send,
  Building2,
  Laptop,
  Clock,
  UserCheck
} from 'lucide-react';

const ROLE_PLACEMENTS_FULL = [
  { role: 'Java Developers', count: '532+' },
  { role: 'Python Developers', count: '680+' },
  { role: '.NET Developers', count: '440+' },
  { role: 'PHP Developers', count: '250+' },
  { role: 'Angular Developers', count: '623+' },
  { role: 'React Developers', count: '701+' },
  { role: 'Salesforce Developers', count: '378+' },
  { role: 'Power Bi Developers', count: '371+' },
  { role: 'Frontend Developers', count: '1012+' },
  { role: 'Full Stack Developers', count: '1819+' },
  { role: 'Data Analyst', count: '1583+' },
  { role: 'Software Testers', count: '871+' },
  { role: 'Cloud Engineers', count: '242+' },
  { role: 'MIS Executives', count: '288+' },
  { role: 'Data Scientist', count: '485+' },
  { role: 'Database Engineers', count: '1901+' },
  { role: 'Network Engineers', count: '1419+' },
  { role: 'Business Analysts', count: '371+' },
  { role: 'Digital Marketing Executives', count: '1542+' },
  { role: 'AI Engineers', count: '483+' },
  { role: 'Business Intelligence Developers', count: '588+' }
];

const PLACED_TABLE_DATA = [
  { id: 1, name: 'Selvi', company: 'Amazon', role: 'Software Engineer', course: 'DevOps' },
  { id: 2, name: 'Manimaran', company: 'i-flex solutions', role: 'Web Developer', course: 'Angular JS' },
  { id: 3, name: 'Venkatesh', company: 'Reliance Communications', role: 'S4 Admin', course: 'SAP' },
  { id: 4, name: 'Chandru', company: 'Tech Mahindra', role: 'Oracle Developer', course: 'Oracle' },
  { id: 5, name: 'Lakshmi', company: 'Honeywell', role: 'Software Engineer', course: 'JAVA' },
  { id: 6, name: 'Sivagami', company: 'Accenture', role: 'Developer', course: 'SAP' },
  { id: 7, name: 'Vivek', company: 'ICICI Bank', role: 'Node Developer', course: 'Oracle' },
  { id: 8, name: 'Jayalakshmi', company: 'DELL', role: 'UI Developer', course: 'PHP & MYSQL' },
  { id: 9, name: 'Kaviya', company: 'Cognizant', role: 'HANA Testing', course: 'SAP' },
  { id: 10, name: 'Mukaseh', company: 'HCL Tech', role: 'Oracle Developer', course: 'Oracle' },
  { id: 11, name: 'Vikram', company: 'TCS', role: 'UI Designer', course: 'Angular JS, CSS & PHP' },
  { id: 12, name: 'Gopal', company: 'RBL Bank', role: 'Developer', course: 'SAP' },
  { id: 13, name: 'Yokesh', company: 'Wipro', role: 'Backend Developer', course: 'Oracle' },
  { id: 14, name: 'Aiswaraya', company: 'Patton', role: 'Dotnet Developer', course: 'Microsoft' },
  { id: 15, name: 'Kamal', company: 'HCL Tech', role: 'UI Designer', course: 'Web Designer & Developer' }
];

const TOP_MONTH_PLACEMENTS = [
  { name: 'VIJAY', role: 'SOFTWARE TESTING', salary: '6 LPA', company: 'Accenture' },
  { name: 'SAKTHIVEL', role: 'DATA SCIENTIST', salary: '5.5 LPA', company: 'Oracle' },
  { name: 'HARISH', role: 'CLOUD ENGINEER', salary: '4.2 LPA', company: 'Zoho' },
  { name: 'GANESH', role: 'SOFTWARE TESTER', salary: '5 LPA', company: 'Google' },
  { name: 'VINITHA', role: 'SOFTWARE TESTING', salary: '3.5 LPA', company: 'Infosys' },
  { name: 'SATHISH', role: 'CLOUD ENGINEER', salary: '4.2 LPA', company: 'Wipro' },
  { name: 'MANI', role: 'DATA ANALYST', salary: '3.5 LPA', company: 'Microsoft' },
  { name: 'LOGANATHAN', role: 'FULL STACK DEV', salary: '5.5 LPA', company: 'Amazon' }
];

export default function PlacedStudentsPage({ onOpenEnquire }) {
  const [quoteForm, setQuoteForm] = useState({ name: '', email: '', phone: '', mode: 'Classroom Training', course: '', message: '' });
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
        
        {/* Hero Banner (Matching Screenshot 1) */}
        <div className="bg-gradient-to-r from-blue-700 via-sky-800 to-brand-navy text-white rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="bg-amber-400 text-slate-900 text-xs font-black px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                Get Job in 90 Days
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                Students Placed in <span className="text-amber-300">Techmaster Technologies</span>
              </h1>

              <p className="text-blue-100 text-xs sm:text-sm font-medium leading-relaxed max-w-xl">
                If you want to get placed as a fresher, cracking the interview is the key — it's your chance to prove your potential, confidence, and readiness for the professional world.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onOpenEnquire('Call Course Advisor Request')}
                  className="bg-transparent hover:bg-white/10 text-white font-extrabold text-xs sm:text-sm px-6 py-3 rounded-xl border-2 border-white/60 transition-all flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>Call Course Advisor</span>
                </button>

                <button
                  onClick={() => onOpenEnquire('10k Placed Students Program')}
                  className="bg-brand-peach hover:bg-amber-400 text-slate-900 font-black text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
                >
                  🎓 10k+ Placed Students
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-3xl text-center space-y-4">
                <h3 className="text-lg sm:text-xl font-black text-white">
                  Every Month We Placed <span className="bg-amber-400 text-slate-900 px-3 py-1 rounded-lg">500 To 700</span> Students in Chennai and Bangalore
                </h3>

                <div className="bg-white rounded-2xl p-5 text-slate-900 shadow-xl space-y-2">
                  <h4 className="text-sm font-black text-slate-500 uppercase tracking-wider">Freshers Salary</h4>
                  <div className="flex items-center justify-center gap-3">
                    <span className="bg-brand-navy text-white text-lg sm:text-2xl font-black px-5 py-2 rounded-xl">3 LPA</span>
                    <span className="text-sm font-bold text-slate-400">To</span>
                    <span className="bg-brand-navy text-white text-lg sm:text-2xl font-black px-5 py-2 rounded-xl">8 LPA</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Metric Counter Cards (Matching Screenshot 1) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-700/50 p-5 rounded-2xl text-white flex items-center gap-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-black text-amber-300 block">10,526+ (Placed)</span>
              <span className="text-xs font-bold text-slate-300">Freshers To IT</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-700/50 p-5 rounded-2xl text-white flex items-center gap-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <Users className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-black text-amber-300 block">5,211+ (Placed)</span>
              <span className="text-xs font-bold text-slate-300">IT to NON IT</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-700/50 p-5 rounded-2xl text-white flex items-center gap-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <Award className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-black text-amber-300 block">7,265+ (Placed)</span>
              <span className="text-xs font-bold text-slate-300">Career Gap</span>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900 to-slate-900 border border-blue-700/50 p-5 rounded-2xl text-white flex items-center gap-4 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-300 shrink-0">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div>
              <span className="text-lg font-black text-amber-300 block">3,278+ (Placed)</span>
              <span className="text-xs font-bold text-slate-300">Less Than 60%</span>
            </div>
          </div>
        </div>

        {/* Section: Role-based Placements */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-brand-navy">Role-based Placements</h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto rounded-full" />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {ROLE_PLACEMENTS_FULL.map((item, idx) => (
              <div
                key={idx}
                onClick={() => onOpenEnquire(`${item.role} Placement Drive`)}
                className="bg-brand-navy hover:bg-brand-teal text-white text-xs sm:text-sm font-extrabold px-5 py-2.5 rounded-full flex items-center gap-2 shadow-md transition-colors cursor-pointer"
              >
                <span>{item.role}</span>
                <span className="bg-amber-400 text-slate-900 text-xs font-black px-2.5 py-0.5 rounded-full">
                  {item.count}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Placed Students Data Table (Without Photo column) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy uppercase tracking-wide">
              Placed Students NOVEMBER 2025 – FEBRUARY 2026
            </h2>
            <div className="w-32 h-1 bg-brand-teal mx-auto rounded-full" />
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-2xl shadow-xs">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="bg-blue-600 text-white font-extrabold uppercase text-[11px] tracking-wider">
                  <th className="p-3.5 border-b border-blue-700 text-center w-14">ID</th>
                  <th className="p-3.5 border-b border-blue-700">Student Name</th>
                  <th className="p-3.5 border-b border-blue-700">Company</th>
                  <th className="p-3.5 border-b border-blue-700">Designation</th>
                  <th className="p-3.5 border-b border-blue-700">Course Done</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                {PLACED_TABLE_DATA.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3.5 text-center font-bold text-slate-400">{row.id}</td>
                    <td className="p-3.5 font-extrabold text-brand-navy flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-brand-mint text-brand-teal font-extrabold flex items-center justify-center text-[11px] shrink-0">
                        {row.name.charAt(0)}
                      </div>
                      <span>{row.name}</span>
                    </td>
                    <td className="p-3.5 text-blue-700 font-bold">{row.company}</td>
                    <td className="p-3.5">{row.role}</td>
                    <td className="p-3.5 font-bold text-teal-700">{row.course}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Section: This Month's Top Placements (Initials badge instead of images) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              This Month's Top Placements in Chennai and Bangalore
            </h2>
            <div className="w-24 h-1 bg-brand-teal mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: 8 Top Candidate Initials Badge Cards */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {TOP_MONTH_PLACEMENTS.map((c, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-200 p-4 rounded-2xl text-center space-y-2.5 hover:border-brand-teal transition-colors">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-brand-teal to-brand-navy text-white font-black text-base flex items-center justify-center mx-auto shadow-sm">
                    {c.name.slice(0, 2)}
                  </div>
                  <div className="bg-white border border-slate-200 px-2 py-0.5 rounded text-[10px] font-black text-blue-700 w-fit mx-auto shadow-2xs">
                    {c.company}
                  </div>
                  <h4 className="font-extrabold text-xs text-brand-navy uppercase truncate">{c.name}</h4>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">{c.role}</p>
                  <span className="inline-block text-xs font-black text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    {c.salary}
                  </span>
                </div>
              ))}
            </div>

            {/* Right Column: Other Categories Placements Table */}
            <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="bg-brand-navy text-white p-4 font-black text-sm text-center">
                Other Categories Placements
              </div>
              <div className="divide-y divide-slate-200 text-xs font-bold text-slate-700">
                {[
                  { cat: 'Non-IT to IT (Career Transition)', count: '2371+' },
                  { cat: 'Diploma Candidates', count: '3001+' },
                  { cat: 'Non-Engineering Students (Arts & Science)', count: '3419+' },
                  { cat: 'Engineering Students', count: '3571+' },
                  { cat: 'CTC Greater than 5 LPA', count: '4542+' },
                  { cat: 'Academic Percentage Less than 60%', count: '5583+' },
                  { cat: 'Career Break / Gap Students', count: '2588+' }
                ].map((row, rIdx) => (
                  <div key={rIdx} className="p-3.5 flex items-center justify-between hover:bg-white transition-colors">
                    <span>{row.cat}</span>
                    <span className="bg-amber-400 text-slate-900 font-black px-2.5 py-0.5 rounded-md text-xs">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Section: Subscribe For Free Demo & Free Quote Form */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              Subscribe For Free Demo to get placed
            </h2>

            <div className="space-y-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
              <p>
                Subscribing to a free demo is a valuable first step toward securing a job placement. It offers hands-on experience with the course material, allowing you to understand key concepts and tools used in the industry. During the demo, you'll have the opportunity to interact with expert trainers, ask questions, and evaluate the teaching style.
              </p>
              <p>
                Additionally, the demo helps assess your current skill level and identify areas for improvement, giving you a clearer path to achieving job readiness.
              </p>
              <p className="font-bold text-slate-800">
                We offer Classroom, Online, and Corporate Training to help you kickstart your career and achieve job placement success.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center space-y-1">
                <Building2 className="w-6 h-6 text-brand-teal mx-auto" />
                <h5 className="font-extrabold text-[11px] text-brand-navy">Classroom Training</h5>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center space-y-1">
                <Laptop className="w-6 h-6 text-brand-teal mx-auto" />
                <h5 className="font-extrabold text-[11px] text-brand-navy">Online Training</h5>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-3 rounded-2xl text-center space-y-1">
                <Award className="w-6 h-6 text-brand-teal mx-auto" />
                <h5 className="font-extrabold text-[11px] text-brand-navy">Corporate Training</h5>
              </div>
            </div>
          </div>

          {/* Right Free Quote Form */}
          <div className="lg:col-span-6 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
            <div className="bg-brand-navy text-white p-3 rounded-xl font-black text-sm text-center">
              Get Training Quote for Free
            </div>

            {quoteSubmitted ? (
              <div className="text-center py-8 space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-black text-brand-navy">Quote Request Received!</h3>
                <p className="text-xs text-slate-600">Our advisor will contact you within 30 minutes with training quotes & demo slot.</p>
                <button onClick={() => setQuoteSubmitted(false)} className="bg-brand-teal text-white text-xs font-bold px-4 py-2 rounded-xl">
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleQuoteSubmit} className="space-y-3">
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                />

                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={quoteForm.phone}
                    onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                  />

                  <select
                    value={quoteForm.mode}
                    onChange={(e) => setQuoteForm({ ...quoteForm, mode: e.target.value })}
                    className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                  >
                    <option value="Classroom Training">Classroom Training</option>
                    <option value="Online Training">Online Training</option>
                    <option value="Corporate Training">Corporate Training</option>
                  </select>
                </div>

                <input
                  type="text"
                  placeholder="Course Interested In (e.g. Python, Selenium, AWS)"
                  value={quoteForm.course}
                  onChange={(e) => setQuoteForm({ ...quoteForm, course: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                />

                <textarea
                  rows="2"
                  placeholder="Message / Specific Queries"
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full bg-white border border-slate-300 rounded-xl p-3 text-xs font-medium text-brand-navy outline-none focus:border-brand-teal"
                />

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

      </div>
    </div>
  );
}
