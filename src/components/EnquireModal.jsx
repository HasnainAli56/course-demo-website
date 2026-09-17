import React, { useState } from 'react';
import { X, CheckCircle2, Send, Phone, Mail, User, BookOpen, Monitor, Loader2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import { sendEmailNotification } from '../utils/sendEmail';

export default function EnquireModal({ isOpen, onClose, defaultCourse = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: defaultCourse || COURSES[0]?.title || '',
    mode: 'Classroom',
    comments: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    await sendEmailNotification({
      formType: 'Enquire Now Modal',
      subject: `New Inquiry for ${formData.course || 'General Course'}`,
      name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      course: formData.course,
      mode: formData.mode,
      message: formData.comments
    });

    setIsSending(false);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      course: COURSES[0]?.title || '',
      mode: 'Classroom',
      comments: ''
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-100 relative">
        
        {/* Modal Header */}
        <div className="bg-brand-teal text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <span className="text-[11px] font-extrabold uppercase tracking-widest text-brand-peach">
            FREE CAREER COUNSELING
          </span>
          <h3 className="text-2xl font-extrabold mt-1 text-white">
            Enquire Now & Get Started
          </h3>
          <p className="text-xs text-teal-100 mt-1">
            Fill in your details below and our expert counselors will contact you within 2 hours.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-extrabold text-brand-navy">
                Thank You, {formData.fullName}!
              </h4>
              <p className="text-sm text-slate-600 max-w-xs mx-auto">
                Your inquiry for <strong className="text-brand-teal">{formData.course}</strong> has been received. Our counselor will call you at <span className="font-semibold">{formData.phone}</span> shortly.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-brand-teal text-white font-bold px-8 py-3 rounded-full hover:bg-brand-teal-dark transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              {/* Email & Phone grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Select Course & Training Mode */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Select Course</label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                    >
                      {COURSES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Training Mode</label>
                  <div className="relative">
                    <Monitor className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <select
                      value={formData.mode}
                      onChange={(e) => setFormData({ ...formData, mode: e.target.value })}
                      className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all bg-white"
                    >
                      <option value="Classroom">Classroom Training</option>
                      <option value="Online Live">Online Live Interactive</option>
                      <option value="Corporate">Corporate Group</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Comments / Questions */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Comments / Questions (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Any specific requirements or questions?"
                  value={formData.comments}
                  onChange={(e) => setFormData({ ...formData, comments: e.target.value })}
                  className="w-full p-3 rounded-xl border border-slate-200 text-sm focus:ring-2 focus:ring-brand-teal focus:border-transparent outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-brand-teal hover:bg-brand-teal-dark disabled:opacity-50 text-white font-extrabold py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 group text-sm uppercase tracking-wider"
              >
                {isSending ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Sending Inquiry to Email...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Inquiry</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-400 text-center font-medium">
                🔒 Your info is sent directly to <strong>enquiry.iclp@gmail.com</strong> for instant counseling.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
