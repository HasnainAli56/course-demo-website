import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Sparkles, 
  Bot, 
  User, 
  CheckCircle2, 
  ArrowRight, 
  PhoneCall, 
  MapPin, 
  Award, 
  RefreshCw,
  HelpCircle,
  Briefcase,
  BookOpen
} from 'lucide-react';
import { COURSES, CATEGORIES } from '../data/courses';

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "👋 Hi! Welcome to **Techmaster Academy**! I am your AI Career & Course Assistant.\n\nHow can I help you today? You can ask me about any course, job guarantee programs, fees, branch locations, or syllabus details!",
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    suggestions: [
      '🎓 Best Job Guarantee Courses',
      '🐍 Python & MERN Stack Fees',
      '📍 Where are your campuses?',
      '📜 How to download Syllabus PDF?'
    ]
  }
];

export default function ChatbotWidget({ onSelectCourse, onOpenEnquire }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
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
  }, [messages, isOpen]);

  // Knowledge Engine Processing Function
  const generateAIResponse = (userQuery) => {
    const q = userQuery.toLowerCase().trim();

    // 1. Job Guarantee Query
    if (q.includes('job guarantee') || q.includes('placement') || q.includes('guarantee')) {
      const guaranteeCourses = COURSES.filter(c => c.jobGuarantee).slice(0, 4);
      return {
        text: `🎓 **100% Job Guarantee Programs at Techmaster**:\n\nWe provide 100% placement assurance with 1-on-1 interview training, resume crafting, and unlimited interview calls across 450+ corporate partners!\n\n**Top Guaranteed Programs**:`,
        courseList: guaranteeCourses,
        action: { label: 'Enquire for Guarantee Batch', title: '100% Job Guarantee Program' }
      };
    }

    // 2. Locations / Branches Query
    if (q.includes('location') || q.includes('branch') || q.includes('campus') || q.includes('address') || q.includes('chennai') || q.includes('bangalore') || q.includes('hyderabad')) {
      return {
        text: `📍 **Techmaster Training Centers & Campuses**:\n\n• **Chennai (Main HQ)**: No. 123, Anna Salai, Chennai – 600 002 (Ph: +91 99533 06008)\n• **Chennai OMR**: OMR IT Corridor, Thoraipakkam\n• **Bangalore**: BTM Layout 2nd Stage, Outer Ring Road\n• **Hyderabad**: HITEC City & Ameerpet Tech Hub\n\n💬 All campuses offer **Live Online & Offline Classroom Labs** with 100% practical equipment!`,
        suggestions: ['📅 Schedule a Campus Visit', '📞 Call Admissions Office']
      };
    }

    // 3. Fees & EMI Query
    if (q.includes('fee') || q.includes('price') || q.includes('cost') || q.includes('emi') || q.includes('payment') || q.includes('discount')) {
      return {
        text: `💳 **Flexible Fee & EMI Options**:\n\n• **Easy Monthly EMI**: Starting at just **₹3,999 / month** with 0% interest.\n• **Scholarship Discounts**: Up to 30% discount on upfront enrollment.\n• **No Cost EMI**: Flexible 3, 6, 9, or 12-month tenure options via partner banks.\n\nWould you like to check EMI options for a specific course?`,
        suggestions: ['🐍 Python Stack EMI', '☁️ AWS DevOps Fee', '🧪 Software Testing Fee']
      };
    }

    // 4. PDF Syllabus Query
    if (q.includes('pdf') || q.includes('syllabus') || q.includes('download') || q.includes('curriculum')) {
      return {
        text: `📜 **Syllabus PDF Download Instructions**:\n\nEvery course on Techmaster has its own official **Syllabus PDF**!\n\n1. Click on **"Know More"** on any course card.\n2. In the modal popup, click the **"Download Syllabus PDF"** button.\n3. Your official multi-page PDF guide will download instantly!`,
        suggestions: ['Explore All 80+ Courses', 'Talk to Course Counselor']
      };
    }

    // 5. Timings & Batch Schedule
    if (q.includes('timing') || q.includes('batch') || q.includes('weekend') || q.includes('online') || q.includes('schedule')) {
      return {
        text: `⏰ **Flexible Training Schedules & Cohorts**:\n\n• **Regular Weekday Batches**: Mon - Fri (Morning 7 AM - 9 AM | Evening 7 PM - 9 PM)\n• **Weekend Executive Batches**: Sat & Sun (10 AM - 2 PM)\n• **Classroom vs Online**: Live Interactive Online + Offline Classroom Hands-on Labs.`,
        suggestions: ['Enquire for Upcoming Batch']
      };
    }

    // 6. Direct Course Match Query
    const matchedCourses = COURSES.filter(course => 
      course.title.toLowerCase().includes(q) ||
      course.subtitle.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q) ||
      (course.techBadges && course.techBadges.some(b => b.toLowerCase().includes(q)))
    );

    if (matchedCourses.length > 0) {
      const topMatches = matchedCourses.slice(0, 3);
      return {
        text: `🔍 Found **${matchedCourses.length} matching course(s)** for "${userQuery}":\n\nHere are the top recommended tracks with average salaries & durations:`,
        courseList: topMatches
      };
    }

    // 7. General Fallback Response
    return {
      text: `🤖 I'm here to assist you with any questions about Techmaster IT courses, syllabus, career roadmaps, or placement support!\n\nYou can ask about specific tech stacks like **Python, Data Science, AWS, Selenium, MERN, Java, DevOps, or Digital Marketing**.`,
      suggestions: [
        '🚀 Python Full Stack Course',
        '📊 Data Science & AI Details',
        '☁️ AWS Cloud Certification',
        '📞 Request Call Back'
      ]
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

    // Simulate natural AI thinking delay
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
        
        {/* Floating Tooltip Hint (Visible when closed) */}
        {!isOpen && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-slate-900 text-white text-xs font-bold px-3.5 py-2 rounded-2xl shadow-xl border border-slate-700 cursor-pointer hover:bg-slate-800 transition-all animate-bounce"
          >
            <Sparkles className="w-3.5 h-3.5 text-brand-peach animate-spin" />
            <span>Need help? Ask Techmaster AI</span>
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full bg-brand-teal hover:bg-teal-800 text-white shadow-2xl flex items-center justify-center transition-all duration-300 relative group active:scale-95 border-2 border-white/20 ${
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

      {/* Floating Chat Window Modal */}
      {isOpen && (
        <div className="fixed bottom-22 right-4 sm:right-6 z-50 w-[92vw] sm:w-[410px] h-[560px] max-h-[82vh] bg-white rounded-3xl shadow-2xl border border-slate-200/90 flex flex-col overflow-hidden animate-fade-in">
          
          {/* Chat Window Header */}
          <div className="bg-gradient-to-r from-brand-navy via-slate-900 to-brand-teal p-4 text-white flex items-center justify-between shrink-0 shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-2xl bg-brand-teal flex items-center justify-center border border-white/20 shadow-inner">
                  <Bot className="w-6 h-6 text-brand-peach" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-900" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-extrabold text-sm text-white">Techmaster AI</h3>
                  <span className="bg-brand-mint/20 text-brand-peach text-[9px] font-black px-1.5 py-0.5 rounded uppercase tracking-wider">
                    Official Bot
                  </span>
                </div>
                <p className="text-[11px] text-slate-300 font-medium flex items-center gap-1">
                  <span>Online • Course & Admissions Counselor</span>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages(INITIAL_MESSAGES)}
                title="Reset Conversation"
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Chat Messages Scroll Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-slate-50/70 text-xs modal-scrollbar">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-wrap ${
                    msg.sender === 'user'
                      ? 'bg-brand-teal text-white rounded-br-none shadow-sm'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-bl-none shadow-sm'
                  }`}
                >
                  {/* Rich Text formatting support */}
                  <div className="font-normal text-xs leading-relaxed space-y-1">
                    {msg.text.split('\n').map((line, lIdx) => {
                      if (line.startsWith('•')) {
                        return <div key={lIdx} className="pl-2 font-medium">{line}</div>;
                      }
                      if (line.includes('**')) {
                        const parts = line.split('**');
                        return (
                          <div key={lIdx}>
                            {parts.map((part, pIdx) => 
                              pIdx % 2 === 1 ? <strong key={pIdx} className="font-extrabold text-brand-navy">{part}</strong> : part
                            )}
                          </div>
                        );
                      }
                      return <div key={lIdx}>{line}</div>;
                    })}
                  </div>

                  {/* Render Embedded Course Cards if available */}
                  {msg.courseList && (
                    <div className="mt-3 space-y-2 pt-2 border-t border-slate-100">
                      {msg.courseList.map((c) => (
                        <div
                          key={c.id}
                          className="bg-slate-50 hover:bg-brand-mint/40 border border-slate-200 rounded-xl p-2.5 transition-all flex items-center justify-between gap-2"
                        >
                          <div className="flex-1 min-w-0">
                            <h5 className="font-extrabold text-brand-navy text-[11px] truncate">
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
                            className="bg-brand-teal text-white text-[10px] font-extrabold px-2.5 py-1 rounded-lg shrink-0 hover:bg-teal-800 transition-colors"
                          >
                            View Course
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action CTA Button inside message */}
                  {msg.action && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100">
                      <button
                        onClick={() => {
                          onOpenEnquire(msg.action.title);
                          setIsOpen(false);
                        }}
                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-[11px] py-1.5 px-3 rounded-lg flex items-center justify-center gap-1 shadow-sm transition-colors"
                      >
                        <span>{msg.action.label}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  )}

                  <span className={`block text-[9px] mt-1.5 font-medium ${msg.sender === 'user' ? 'text-teal-200 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>

                {/* Quick Suggestion Chips below Bot Message */}
                {msg.suggestions && msg.suggestions.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                    {msg.suggestions.map((sug, sIdx) => (
                      <button
                        key={sIdx}
                        onClick={() => handleSendMessage(sug)}
                        className="bg-white hover:bg-brand-mint text-brand-teal border border-brand-teal/20 text-[10px] font-bold px-2.5 py-1 rounded-full transition-all hover:scale-105 shadow-2xs"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                )}

              </div>
            ))}

            {/* Typing Indicator Bubble */}
            {isTyping && (
              <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-2xl rounded-bl-none p-3 w-fit shadow-xs">
                <Bot className="w-4 h-4 text-brand-teal animate-bounce" />
                <span className="text-xs text-slate-500 font-semibold animate-pulse">
                  Techmaster AI is typing...
                </span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Bar (Above Input) */}
          <div className="bg-white border-t border-slate-100 p-2 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
            <button
              onClick={() => handleSendMessage("Show Popular Courses")}
              className="shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1"
            >
              <BookOpen className="w-3 h-3 text-brand-teal" /> Courses
            </button>
            <button
              onClick={() => handleSendMessage("100% Job Guarantee")}
              className="shrink-0 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1 border border-emerald-200/60"
            >
              <Award className="w-3 h-3 text-emerald-600" /> Job Guarantee
            </button>
            <button
              onClick={() => handleSendMessage("Campus Locations")}
              className="shrink-0 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1"
            >
              <MapPin className="w-3 h-3 text-brand-teal" /> Locations
            </button>
            <button
              onClick={() => {
                onOpenEnquire('General AI Inquiry');
                setIsOpen(false);
              }}
              className="shrink-0 bg-brand-peach hover:bg-amber-300 text-brand-navy font-bold text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1"
            >
              <PhoneCall className="w-3 h-3 text-brand-navy" /> Call Advisor
            </button>
          </div>

          {/* Input Form Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              placeholder="Ask about courses, fees, syllabus, jobs..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-teal/30 focus:border-brand-teal transition-all"
            />

            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-brand-teal hover:bg-teal-800 disabled:opacity-50 text-white p-2.5 rounded-xl transition-all shadow-md shadow-brand-teal/20 shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}
    </>
  );
}
