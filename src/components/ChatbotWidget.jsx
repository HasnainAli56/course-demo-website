import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  CheckCircle2, 
  Check, 
  ArrowRight, 
  PhoneCall, 
  MapPin, 
  Award, 
  RefreshCw,
  HelpCircle,
  Briefcase,
  BookOpen,
  Smile,
  Paperclip,
  Leaf
} from 'lucide-react';
import { COURSES, CATEGORIES } from '../data/courses';

export default function ChatbotWidget({ onSelectCourse, onOpenEnquire }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isIntroduced, setIsIntroduced] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  // Pre-chat Introduction Form State
  const [introForm, setIntroForm] = useState({
    fullName: '',
    phone: '',
    countryCode: '+91',
    email: '',
    callTime: '',
    courseName: '',
    location: '',
    source: '',
    message: ''
  });

  // Chat Messages State
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      setUnreadCount(0);
    }
  }, [messages, isOpen, isSaved]);

  const handleSaveIntroForm = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setIsIntroduced(true);

    // Initial confirmation bot messages as shown in reference screenshots
    const confirmationMessages = [
      {
        id: Date.now(),
        sender: 'bot',
        text: 'Thanks! Our Team will get back to you.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      },
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: 'Consider adding any details that might help the team to answer your question.',
        suggestions: [
          '🎓 Best Job Guarantee Courses',
          '💳 Python & MERN Stack Fees',
          '📍 Campus Locations',
          '📜 Download Syllabus PDF'
        ],
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];

    setMessages(confirmationMessages);
  };

  // AI Knowledge Engine Response Generator
  const generateAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    if (q.includes('job guarantee') || q.includes('placement') || q.includes('guarantee')) {
      const guaranteeCourses = COURSES.filter(c => c.jobGuarantee).slice(0, 4);
      return {
        text: `🎓 **100% Job Guarantee Programs at Techmaster**:\n\nWe provide 100% placement assurance with 1-on-1 interview training, resume crafting, and unlimited interview calls across 500+ corporate partners!\n\n**Top Guaranteed Programs**:`,
        courseList: guaranteeCourses,
        action: { label: 'Enquire for Guarantee Batch', title: '100% Job Guarantee Program' }
      };
    }

    if (q.includes('location') || q.includes('branch') || q.includes('campus') || q.includes('address') || q.includes('chennai') || q.includes('bangalore')) {
      return {
        text: `📍 **Techmaster Training Centers & Campuses**:\n\n• **Chennai HQ**: Anna Salai, Velachery, OMR, Tambaram, Porur, Anna Nagar, T. Nagar\n• **Bangalore**: BTM Layout, Marathahalli, Electronic City, HSR Layout\n\n💬 All campuses offer **Live Online & Offline Classroom Labs**!`,
        suggestions: ['📅 Schedule a Campus Visit', '📞 Call Admissions Office']
      };
    }

    if (q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('emi') || q.includes('discount')) {
      return {
        text: `💳 **Flexible Fee & EMI Options**:\n\n• **Easy Monthly EMI**: Starting at just **₹3,999 / month** with 0% interest.\n• **Scholarship Discounts**: Up to 30% discount on upfront enrollment.\n• **No Cost EMI**: Flexible 3, 6, 9, or 12-month tenure options.`,
        suggestions: ['🐍 Python Stack Fee', '☁️ AWS DevOps Fee', '🧪 Software Testing Fee']
      };
    }

    if (q.includes('pdf') || q.includes('syllabus') || q.includes('download') || q.includes('curriculum')) {
      return {
        text: `📜 **Syllabus PDF Download**:\n\nClick on any course on Techmaster to open its dedicated page and click **"Download Full Syllabus PDF"**!`,
        suggestions: ['Explore All 80+ Courses', 'Talk to Course Counselor']
      };
    }

    const matchedCourses = COURSES.filter(course => 
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      (course.techBadges && course.techBadges.some(b => b.toLowerCase().includes(q)))
    );

    if (matchedCourses.length > 0) {
      return {
        text: `🔍 Found **${matchedCourses.length} matching course(s)** for "${userQuery}":\n\nHere are top recommended career tracks:`,
        courseList: matchedCourses.slice(0, 3)
      };
    }

    return {
      text: `🤖 Thanks for your message! Our senior admissions mentor will assist you shortly regarding ${userQuery}.\n\nYou can also explore our top training tracks below:`,
      suggestions: ['🚀 Python Full Stack', '📊 Data Science & AI', '☁️ AWS Cloud Certification']
    };
  };

  const handleSendMessage = (textToSend) => {
    const messageText = textToSend || input;
    if (!messageText.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReply = generateAIResponse(messageText);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReply.text,
        courseList: aiReply.courseList,
        suggestions: aiReply.suggestions,
        action: aiReply.action,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <>
      {/* Floating Chat Trigger Button (Bottom Right) */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-3">
        
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-teal-800 text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl border border-teal-600 cursor-pointer hover:bg-teal-700 transition-all animate-bounce"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-spin" />
            <span>Need help? Ask Techmaster AI</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-teal-600 hover:bg-teal-700 text-white shadow-2xl flex items-center justify-center transition-all duration-300 relative group active:scale-95 border-2 border-white/30 ${
            isOpen ? 'rotate-90 bg-slate-800' : 'hover:scale-105'
          }`}
          aria-label="Toggle AI Assistant Chat"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <>
              <Bot className="w-7 h-7 text-white" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-pulse">
                  {unreadCount}
                </span>
              )}
            </>
          )}
        </button>
      </div>

      {/* Tawk / Brevo Style Live Chat Widget Modal */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] h-[590px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-fade-in font-sans">
          
          {/* 1. Teal Header Bar (Tawk / Brevo Style) */}
          <div className="bg-teal-600 text-white p-4 flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold tracking-tight">
              <span className="w-2.5 h-2.5 bg-emerald-300 rounded-full border border-white animate-pulse inline-block" />
              <span>Techmaster - Your Upskilling Partner</span>
            </div>

            <div className="flex items-center gap-1">
              {isSaved && (
                <button
                  onClick={() => setIsSaved(false)}
                  title="Edit Introduction Info"
                  className="p-1 rounded-md hover:bg-white/20 text-white text-xs font-bold"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                </button>
              )}
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                title="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* 2. Scrollable Body Content */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/60 modal-scrollbar">
            
            {/* Top Intro Welcome Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-9 h-9 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0">
                <Leaf className="w-5 h-5 text-teal-600" />
              </div>

              <div className="bg-slate-100 text-slate-800 p-3.5 rounded-2xl rounded-tl-none text-xs leading-relaxed max-w-[85%] font-medium">
                Introduce yourself to deliver your message. The team will get back to you soon.
              </div>
            </div>

            {/* 3. Pre-Chat Introduction Form Card (Tawk / Brevo Style) */}
            {!isSaved ? (
              <form onSubmit={handleSaveIntroForm} className="bg-white border-2 border-teal-500/80 rounded-2xl p-4 sm:p-5 shadow-sm space-y-3.5">
                
                {/* Full Name */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={introForm.fullName}
                    onChange={(e) => setIntroForm({ ...introForm, fullName: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.fullName.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Phone number */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Phone number</label>
                  <div className="flex items-center gap-1.5 pt-0.5">
                    <span className="text-xs shrink-0 font-bold text-slate-600">🇮🇳 +91</span>
                    <input
                      type="tel"
                      required
                      placeholder="Mobile number"
                      value={introForm.phone}
                      onChange={(e) => setIntroForm({ ...introForm, phone: e.target.value })}
                      className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6"
                    />
                  </div>
                  {introForm.phone.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Email */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={introForm.email}
                    onChange={(e) => setIntroForm({ ...introForm, email: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.email.includes('@') && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Preferred Call Time (optional) */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Preferred Call Time (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. 7 pm / Weekends"
                    value={introForm.callTime}
                    onChange={(e) => setIntroForm({ ...introForm, callTime: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.callTime.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Course Name */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Course Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Python, Data Science, AWS"
                    value={introForm.courseName}
                    onChange={(e) => setIntroForm({ ...introForm, courseName: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.courseName.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Current Location (optional) */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Current Location (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai / Kolkata"
                    value={introForm.location}
                    onChange={(e) => setIntroForm({ ...introForm, location: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.location.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* How did you hear About us? (optional) */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">How did you hear About us? (optional)</label>
                  <input
                    type="text"
                    placeholder="e.g. Google / Social Media"
                    value={introForm.source}
                    onChange={(e) => setIntroForm({ ...introForm, source: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.source.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Message */}
                <div className="relative border-b border-slate-200 pb-1.5">
                  <label className="block text-[10px] font-bold text-slate-400 uppercase">Message</label>
                  <input
                    type="text"
                    placeholder="Type your message"
                    value={introForm.message}
                    onChange={(e) => setIntroForm({ ...introForm, message: e.target.value })}
                    className="w-full bg-transparent text-xs font-bold text-slate-800 outline-none pr-6 pt-0.5"
                  />
                  {introForm.message.trim() && (
                    <Check className="w-4 h-4 text-emerald-600 absolute right-0 bottom-2" />
                  )}
                </div>

                {/* Save Button */}
                <button
                  type="submit"
                  className="w-full bg-white border-2 border-emerald-500 hover:bg-emerald-50 text-emerald-600 font-extrabold text-xs py-2.5 rounded-full transition-all flex items-center justify-center gap-1.5 shadow-xs"
                >
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Saved & Continue</span>
                </button>
              </form>
            ) : (
              /* Saved Summary Box */
              <div className="bg-white border border-slate-200 rounded-2xl p-3.5 shadow-xs space-y-1 text-xs">
                <div className="flex items-center justify-between text-emerald-600 font-bold border-b border-slate-100 pb-1.5">
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4" /> Saved Introduction
                  </span>
                  <button 
                    onClick={() => setIsSaved(false)}
                    className="text-[10px] text-slate-400 hover:text-slate-600 underline"
                  >
                    Edit
                  </button>
                </div>
                <div className="text-[11px] text-slate-600 font-medium space-y-0.5 pt-1">
                  <p><strong>Name:</strong> {introForm.fullName}</p>
                  <p><strong>Phone:</strong> {introForm.countryCode} {introForm.phone}</p>
                  <p><strong>Course:</strong> {introForm.courseName}</p>
                </div>
              </div>
            )}

            {/* 4. Live AI Chat Messages (Active after Intro Saved) */}
            {isSaved && messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-full bg-teal-100 border border-teal-300 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-teal-600" />
                  </div>
                )}

                <div className={`max-w-[85%] space-y-2`}>
                  <div
                    className={`p-3.5 rounded-2xl leading-relaxed text-xs ${
                      msg.sender === 'user'
                        ? 'bg-teal-600 text-white rounded-tr-none shadow-xs'
                        : 'bg-slate-100 text-slate-800 rounded-tl-none'
                    }`}
                  >
                    <p className="font-medium leading-relaxed">{msg.text}</p>

                    {/* Embedded Course Cards */}
                    {msg.courseList && (
                      <div className="mt-3 space-y-2 pt-2 border-t border-slate-200">
                        {msg.courseList.map((c) => (
                          <div
                            key={c.id}
                            className="bg-white border border-slate-200 rounded-xl p-2.5 flex items-center justify-between gap-2 shadow-xs"
                          >
                            <div className="min-w-0 flex-1">
                              <h5 className="font-extrabold text-slate-900 text-[11px] truncate">
                                {c.title}
                              </h5>
                              <p className="text-[10px] text-slate-500">
                                {c.duration} • Avg: {c.avgSalary}
                              </p>
                            </div>
                            <button
                              onClick={() => {
                                onSelectCourse(c);
                                setIsOpen(false);
                              }}
                              className="bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md shrink-0 hover:bg-teal-700"
                            >
                              View
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    {msg.action && (
                      <button
                        onClick={() => {
                          onOpenEnquire(msg.action.title);
                          setIsOpen(false);
                        }}
                        className="mt-2.5 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-[11px] py-1.5 rounded-md flex items-center justify-center gap-1"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    )}
                  </div>

                  {/* Suggestion Pills */}
                  {msg.suggestions && msg.suggestions.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.suggestions.map((sug, sIdx) => (
                        <button
                          key={sIdx}
                          onClick={() => handleSendMessage(sug)}
                          className="bg-white hover:bg-teal-50 text-teal-700 border border-teal-300/80 text-[10px] font-bold px-2.5 py-1 rounded-full transition-all shadow-2xs"
                        >
                          {sug}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 bg-slate-100 rounded-2xl p-3 w-fit text-xs text-slate-500 font-semibold">
                <Leaf className="w-4 h-4 text-teal-600 animate-spin" />
                <span>Techmaster AI is typing...</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 5. Powered by Brevo / Techmaster Footer Credit */}
          <div className="bg-slate-50 border-t border-slate-100 py-1 text-center text-[10px] text-slate-400 font-semibold flex items-center justify-center gap-1">
            <span className="w-3.5 h-3.5 bg-slate-400 text-white rounded-full flex items-center justify-center font-black text-[8px]">T</span>
            <span>Powered by Techmaster AI</span>
          </div>

          {/* 6. Bottom Input Bar (Brevo / Tawk Style) */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (isSaved) handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              disabled={!isSaved}
              placeholder={isSaved ? "One more message..." : "You haven't introduced yourself"}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent text-xs text-slate-800 font-medium placeholder:text-slate-400 outline-none disabled:opacity-60"
            />

            <div className="flex items-center gap-1.5 text-slate-400">
              <button type="button" className="p-1 hover:text-slate-600" title="Emoji">
                <Smile className="w-4 h-4" />
              </button>
              <button type="button" className="p-1 hover:text-slate-600" title="Attach file">
                <Paperclip className="w-4 h-4" />
              </button>
              {isSaved && (
                <button
                  type="submit"
                  disabled={!input.trim()}
                  className="bg-teal-600 text-white p-1.5 rounded-lg disabled:opacity-40 hover:bg-teal-700"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </form>

        </div>
      )}
    </>
  );
}
