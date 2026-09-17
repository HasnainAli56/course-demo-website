import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Clock, 
  Users, 
  Send, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles,
  ArrowRight,
  FileText,
  X
} from 'lucide-react';
import { sendEmailNotification } from '../utils/sendEmail';

const CATEGORY_PILLS = [
  'Artificial Intelligence', 'Automation', 'Big Data', 'Blockchain',
  'Business Analytics', 'Cloud Computing', 'Cyber Security', 'Data Science',
  'Database', 'Datawarehouse', 'Designing and Animation', 'DevOps',
  'Digital Marketing', 'Electric Vehicle', 'Embedded System', 'Enterprise Application',
  'IBM', 'Investment Banking', 'IOT and Networking', 'IT service and Architecture',
  'Machine Learning', 'Microsoft', 'Mobile app development', 'Operating system',
  'Oracle', 'Project Management', 'Salesforce', 'Software Engineering'
];

const SUCCESS_STORIES = [
  {
    id: 1,
    title: 'Transitioning to a Career in Python Development - 80% Salary Hike',
    desc: "Techmaster's training enabled John to become a Python Developer at a start-up, boosting his salary by 100%. Discover how his dedication and Techmaster's support made it happen.",
    fromRole: 'Fresher',
    toRole: 'Python Developer',
    hike: '80% Salary Hike',
    name: 'Prasanth',
    bgColor: 'from-blue-600 via-indigo-600 to-purple-700'
  },
  {
    id: 2,
    title: 'From Non-IT Support to Cloud DevOps Engineer at MNC - 120% Hike',
    desc: "Rahul leveraged Techmaster's hands-on AWS & Kubernetes labs to switch from BPO support to senior DevOps Engineer, achieving a massive 120% hike.",
    fromRole: 'BPO Support',
    toRole: 'Cloud DevOps Engineer',
    hike: '120% Salary Hike',
    name: 'Anish Kumar',
    bgColor: 'from-emerald-600 via-teal-600 to-cyan-700'
  },
  {
    id: 3,
    title: 'Landed Data Science Specialist Role at Infosys with 30 LPA Package',
    desc: "Priya mastered Machine Learning & PowerBI through real-world capstone projects at Techmaster and cracked the Infosys Data Science interview.",
    fromRole: 'Data Analyst Intern',
    toRole: 'Data Science Specialist',
    hike: '30 LPA Package',
    name: 'Priya Sharma',
    bgColor: 'from-amber-600 via-orange-600 to-rose-700'
  }
];

const FEATURED_POSTS = [
  {
    id: 1,
    tag: 'Tutorials',
    title: 'How to Get a Data Analyst Job at Infosys',
    subtitle: 'Step-by-Step Tutorial & Interview Roadmap 2026',
    date: 'Updated On : 11th Sep 2026',
    bgColor: 'bg-gradient-to-r from-amber-50 to-orange-100',
    borderColor: 'border-amber-200',
    tagColor: 'bg-blue-100 text-blue-700',
    headerText: 'How to Write a Data Analyst Job Description: Step-by-Step Tutorial'
  },
  {
    id: 2,
    tag: 'Tutorials',
    title: 'How to Get a Full Stack Developer Job at Zoho',
    subtitle: 'Core Skills, System Design & Live Coding Tips',
    date: 'Updated On : 11th Sep 2026',
    bgColor: 'bg-gradient-to-r from-blue-50 to-indigo-100',
    borderColor: 'border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
    headerText: 'How to Get a Data Science Job at Accenture: Step-by-Step Guide'
  },
  {
    id: 3,
    tag: 'Interview Questions',
    title: 'TCS UI/UX Designer Interview Questions & Selection Process',
    subtitle: 'Comprehensive Q&A Bank for Freshers and Experienced',
    date: 'Updated On : 11th Sep 2026',
    bgColor: 'bg-gradient-to-r from-rose-50 to-pink-100',
    borderColor: 'border-rose-200',
    tagColor: 'bg-slate-100 text-slate-700',
    headerText: 'TCS UI/UX Designer Interview Questions & Selection Process'
  }
];

const POPULAR_COURSES = [
  { title: 'PCB Design Training In Delhi', learners: '5897 Learners', rating: '5.0', gradient: 'from-cyan-600 to-blue-700', tag: 'ELECTRONICS' },
  { title: 'Data Analytics Course In Techmaster', learners: '11369 Learners', rating: '4.9', gradient: 'from-blue-600 to-indigo-700', tag: 'DATA ANALYTICS' },
  { title: 'Full Stack With Java Course', learners: '7855 Learners', rating: '5.0', gradient: 'from-sky-500 to-teal-700', tag: 'FULL STACK JAVA' },
  { title: 'Python Course In Techmaster', learners: '16875 Learners', rating: '5.0', gradient: 'from-indigo-600 to-purple-700', tag: 'PYTHON COURSE' },
  { title: 'Data Science Certification Course', learners: '14230 Learners', rating: '4.9', gradient: 'from-violet-600 to-fuchsia-700', tag: 'DATA SCIENCE' },
  { title: 'Software Testing Professional Course', learners: '9420 Learners', rating: '4.8', gradient: 'from-blue-700 to-cyan-600', tag: 'SOFTWARE TESTING' },
  { title: 'Digital Marketing Specialist Course', learners: '12310 Learners', rating: '4.9', gradient: 'from-purple-600 to-indigo-800', tag: 'DIGITAL MARKETING' },
  { title: 'Cloud Computing & DevOps Master', learners: '11890 Learners', rating: '5.0', gradient: 'from-teal-600 to-blue-700', tag: 'CLOUD COMPUTING' }
];

const MASTER_PROGRAMS = [
  { title: 'Data Science Masters Program Training', learners: '6588 Learners', rating: '5.0', subtitle: 'DATA SCIENCE MASTER PROGRAM' },
  { title: 'Python Master Program Training', learners: '6541 Learners', rating: '5.0', subtitle: 'PYTHON MASTER PROGRAM' },
  { title: 'Software Testing Master Program Training', learners: '7855 Learners', rating: '5.0', subtitle: 'SOFTWARE TESTING MASTER PROGRAM' },
  { title: 'Data Analyst Masters Program Training', learners: '6588 Learners', rating: '4.9', subtitle: 'DATA ANALYTICS MASTER PROGRAM' },
  { title: 'Full Stack Developer Master Program', learners: '8120 Learners', rating: '5.0', subtitle: 'FULL STACK DEVELOPER MASTER PROGRAM' },
  { title: 'Digital Marketing Master Program', learners: '5930 Learners', rating: '4.9', subtitle: 'DIGITAL MARKETING MASTER PROGRAM' },
  { title: 'Java Full-Stack Development Master Program', learners: '9240 Learners', rating: '5.0', subtitle: 'JAVA FULL-STACK MASTER PROGRAM' },
  { title: 'Cloud Computing Masters Program', learners: '7450 Learners', rating: '5.0', subtitle: 'CLOUD COMPUTING MASTERS PROGRAM' }
];

export default function ResourcesPage({ onOpenEnquire }) {
  const [showTopNotice, setShowTopNotice] = useState(true);
  const [storyIndex, setStoryIndex] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState('');
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    mode: 'Training Mode',
    course: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleNextStory = () => {
    setStoryIndex((prev) => (prev + 1) % SUCCESS_STORIES.length);
  };

  const handlePrevStory = () => {
    setStoryIndex((prev) => (prev - 1 + SUCCESS_STORIES.length) % SUCCESS_STORIES.length);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    await sendEmailNotification({
      formType: 'Blogs / Resources Lead Form',
      subject: `Engage & Inspire Quote Request from ${formData.name}`,
      name: formData.name,
      email: formData.email,
      phone: formData.mobile,
      course: formData.course,
      mode: formData.mode,
      message: formData.message
    });

    setFormSubmitted(false);
    setFormData({ name: '', email: '', mobile: '', mode: 'Training Mode', course: '', message: '' });
    alert('Thank you! Your request has been submitted successfully.');
  };

  const currentStory = SUCCESS_STORIES[storyIndex];

  return (
    <div className="bg-slate-50 min-h-screen pb-16 font-sans">
      
      {/* 1. Top Offer Strip */}
      {showTopNotice && (
        <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-black flex items-center justify-center gap-3 shadow-md relative">
          <span>
            Land a <span className="underline decoration-wavy underline-offset-2 font-black">₹5–15 LPA IT Job</span> in Just 90 Days With Placement Support, Low Fees, and Expert Trainers.
          </span>
          <button 
            onClick={() => onOpenEnquire('Top Offer Strip - 90 Days Job Program')}
            className="bg-yellow-300 text-slate-900 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider hover:bg-white transition-colors shadow-sm shrink-0"
          >
            Grab Now
          </button>
          <button 
            onClick={() => setShowTopNotice(false)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
            title="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 text-xs text-slate-500 font-medium">
        <span>Home</span> <span className="mx-1">&gt;</span> <span className="text-slate-800 font-bold">Blog / Resources</span>
      </div>

      {/* 2. Hero Section: "What you want to learn" */}
      <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 text-white py-10 sm:py-14 px-4 sm:px-6 lg:px-8 shadow-inner">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-blue-500/30 pb-4">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              What you want to learn
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
              Explore 28+ IT tech learning domains, course blueprints, interview question banks, and industry blogs updated weekly.
            </p>
          </div>

          {/* 28 Topic White Pills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4">
            {CATEGORY_PILLS.map((topic, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedTopic(topic);
                  onOpenEnquire(`Resource Topic: ${topic}`);
                }}
                className={`bg-white text-slate-800 text-xs sm:text-sm font-semibold py-3 px-4 rounded-lg shadow-sm hover:shadow-md hover:bg-blue-50 hover:text-blue-700 transition-all text-left flex items-center justify-between group border ${
                  selectedTopic === topic ? 'ring-2 ring-amber-400 bg-blue-50 text-blue-800 font-black' : 'border-slate-100'
                }`}
              >
                <span className="truncate">{topic}</span>
                <span className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity text-xs">&rarr;</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 mt-10">

        {/* 3. Placement Offer Banner & Success Story Carousel */}
        <section className="space-y-8">
          
          {/* Top Placement Banner Strip */}
          <div className="bg-white border border-slate-200 rounded-2xl p-4 sm:p-6 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6 overflow-hidden">
            {/* Left Graphic Banner Box */}
            <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white p-5 rounded-xl flex items-center justify-between gap-6 w-full lg:w-96 shrink-0 relative overflow-hidden shadow-md">
              <div className="space-y-1 relative z-10">
                <span className="text-xs font-black tracking-widest text-yellow-300 block">TECHMASTER</span>
                <h4 className="text-lg font-black leading-tight">Get Placed in Your Dream Company</h4>
                <div className="flex items-center gap-3 pt-2 text-xs font-bold">
                  <span className="bg-amber-400 text-slate-900 px-2 py-0.5 rounded font-black">100%</span> Placement
                  <span className="bg-emerald-400 text-slate-900 px-2 py-0.5 rounded font-black">99%</span> Hike
                </div>
              </div>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center shrink-0">
                <TrendingUp className="w-8 h-8 text-yellow-300" />
              </div>
            </div>

            {/* Banner Text Content */}
            <div className="flex-1 text-center lg:text-left space-y-1">
              <p className="text-slate-700 font-bold text-base sm:text-lg">
                Fresher earned <span className="font-black text-slate-900 text-xl sm:text-2xl">30 LPA</span> salary package on completion of the course.
              </p>
              <p className="text-[11px] text-slate-400 font-medium">Subject to Terms and Conditions</p>
            </div>

            {/* Right Carousel Next/Prev Controls */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handlePrevStory}
                className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-blue-700 transition-colors"
                title="Previous Story"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextStory}
                className="p-2.5 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-blue-700 transition-colors"
                title="Next Story"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Section Heading */}
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 inline-block relative after:content-[''] after:absolute after:bottom-[-13px] after:left-0 after:w-full after:h-1 after:bg-blue-600">
              Our Amazing Success Story
            </h2>
          </div>

          {/* Success Story Carousel Card */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden flex flex-col md:flex-row items-stretch">
            
            {/* Left Graphic Box */}
            <div className={`bg-gradient-to-br ${currentStory.bgColor} text-white p-6 sm:p-8 md:w-2/5 flex flex-col justify-between shrink-0 relative overflow-hidden`}>
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-black tracking-widest text-amber-300 uppercase">TECHMASTER</span>
                <h3 className="text-lg sm:text-xl font-black leading-snug">
                  Career Transition To {currentStory.toRole}
                </h3>
                <div className="inline-block bg-blue-900/60 backdrop-blur-sm text-yellow-300 text-xs font-black px-3 py-1 rounded-full border border-yellow-300/30">
                  {currentStory.hike}
                </div>
              </div>

              <div className="mt-8 flex items-center gap-4 relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-full border-2 border-white/50 flex items-center justify-center font-black text-xl text-white shadow-inner">
                  {currentStory.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm sm:text-base text-white">{currentStory.name}</h4>
                  <span className="bg-blue-900/80 text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    Placed Alumni
                  </span>
                </div>
              </div>
            </div>

            {/* Right Story Description */}
            <div className="p-6 sm:p-8 md:w-3/5 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {currentStory.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed font-medium">
                  {currentStory.desc}
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <span>{currentStory.fromRole}</span>
                  <span className="text-orange-500 font-bold">&gt;&gt;</span>
                  <span className="font-bold text-slate-900">{currentStory.toRole}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-700 bg-indigo-50 px-3 py-1.5 rounded-md">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    {currentStory.hike}
                  </span>
                  <button 
                    onClick={() => onOpenEnquire(`Success Story: ${currentStory.title}`)}
                    className="text-orange-600 hover:text-orange-700 font-extrabold text-xs sm:text-sm flex items-center gap-1"
                  >
                    Read More &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

        </section>

        {/* 4. Featured Posts & Right Quote Form */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column (2 Cols wide on desktop): Featured Posts */}
          <div className="lg:col-span-2 space-y-6">
            <div className="border-b border-slate-200 pb-3">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 inline-block relative after:content-[''] after:absolute after:bottom-[-13px] after:left-0 after:w-full after:h-1 after:bg-blue-600">
                Featured Posts
              </h2>
            </div>

            <div className="space-y-6">
              {FEATURED_POSTS.map((post) => (
                <div 
                  key={post.id}
                  className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-stretch"
                >
                  {/* Left Post Graphic Thumbnail */}
                  <div className={`${post.bgColor} p-6 sm:w-2/5 flex flex-col justify-between shrink-0 border-r ${post.borderColor} relative`}>
                    <span className="text-[11px] font-black text-blue-700 tracking-wider uppercase block">TECHMASTER</span>
                    <h4 className="text-sm font-extrabold text-slate-800 leading-snug mt-2">
                      {post.headerText}
                    </h4>
                    <div className="mt-4 pt-3 border-t border-slate-300/40 flex items-center justify-between text-[11px] text-slate-600 font-semibold">
                      <span>Article & Guides</span>
                      <span>2026 Edition</span>
                    </div>
                  </div>

                  {/* Right Post Detail */}
                  <div className="p-6 sm:w-3/5 flex flex-col justify-between space-y-4">
                    <div className="space-y-3">
                      <span className={`inline-block px-3 py-1 rounded-md text-[11px] font-extrabold ${post.tagColor}`}>
                        {post.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 hover:text-blue-700 transition-colors cursor-pointer"
                          onClick={() => onOpenEnquire(`Read Article: ${post.title}`)}>
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        {post.subtitle}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                      <span>{post.date}</span>
                      <button 
                        onClick={() => onOpenEnquire(`Read Article: ${post.title}`)}
                        className="text-blue-600 font-extrabold hover:underline"
                      >
                        Read Post &rarr;
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (1 Col): "Engage and Inspire" Quote Form */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-2xl shadow-lg overflow-hidden sticky top-6">
              
              {/* Form Dark Blue Header */}
              <div className="bg-slate-800 text-white p-4 sm:p-5 text-center">
                <h3 className="text-lg font-extrabold tracking-wide">Engage and Inspire</h3>
                <p className="text-slate-300 text-xs mt-0.5">Talk to our tech mentors for custom guidance</p>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="p-5 sm:p-6 space-y-4 bg-slate-50/50">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="tel"
                    required
                    placeholder="Mobile Number"
                    value={formData.mobile}
                    onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-3 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  
                  <select
                    value={formData.mode}
                    onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-2 py-2.5 text-xs font-semibold text-slate-700 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  >
                    <option value="Training Mode">Training Mode</option>
                    <option value="Online Live Training">Online Live</option>
                    <option value="Classroom Training">Classroom</option>
                    <option value="Corporate Training">Corporate</option>
                  </select>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Course Interested In"
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <textarea
                    rows={3}
                    placeholder="Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-100 border border-slate-200 rounded-lg px-4 py-2.5 text-xs font-semibold text-slate-800 placeholder-slate-400 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={formSubmitted}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-sm py-3 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md uppercase tracking-wider"
                >
                  <span>{formSubmitted ? 'SUBMITTING...' : 'SUBMIT'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>

            </div>
          </div>

        </section>

        {/* 5. Popular Courses Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Popular Courses
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Techmaster presents you the most popular courses which are recommended to study by our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {POPULAR_COURSES.map((course, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Gradient Card Header */}
                  <div className={`bg-gradient-to-r ${course.gradient} p-6 text-white text-center relative h-36 flex flex-col items-center justify-center space-y-1`}>
                    <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase">TECHMASTER</span>
                    <h4 className="text-sm font-black tracking-tight text-white uppercase">
                      {course.tag}
                    </h4>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-blue-700 transition-colors leading-snug">
                      {course.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{course.learners}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <Clock className="w-3 h-3 text-slate-400 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Master Programs Section */}
        <section className="space-y-6">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">
              Master Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              Techmaster presents you the most popular Master Programs which are recommended to study by our experts.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MASTER_PROGRAMS.map((program, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Purple Gradient Master Header */}
                  <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-purple-900 p-6 text-white text-center relative h-36 flex flex-col items-center justify-center space-y-1">
                    <span className="text-[10px] font-black tracking-widest text-amber-300 uppercase">TECHMASTER</span>
                    <h4 className="text-xs font-black tracking-tight text-white uppercase leading-tight px-2">
                      {program.subtitle}
                    </h4>
                  </div>

                  <div className="p-5 space-y-3">
                    <h3 className="text-sm font-extrabold text-slate-800 group-hover:text-purple-700 transition-colors leading-snug">
                      {program.title}
                    </h3>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-2">
                  <div className="flex items-center gap-1.5 font-bold text-slate-700">
                    <Users className="w-3.5 h-3.5 text-slate-400" />
                    <span>{program.learners}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400" />
                      ))}
                    </div>
                    <Clock className="w-3 h-3 text-slate-400 ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
