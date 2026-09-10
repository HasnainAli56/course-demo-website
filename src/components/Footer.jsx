import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Linkedin, Instagram, Youtube, Facebook, CheckCircle2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail('');
      }, 4000);
    }
  };

  return (
    <footer id="contact" className="bg-brand-teal-dark text-white pt-16 pb-8 border-t border-teal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-teal-800/60">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white text-brand-teal font-extrabold text-xl flex items-center justify-center shadow">
                iCLP
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight leading-none">
                  iCLP <span className="text-brand-peach">Technologies</span>
                </span>
                <span className="text-[10px] font-bold text-teal-200 uppercase tracking-widest mt-0.5">
                  Learn • Grow • Build Your Future
                </span>
              </div>
            </div>

            <p className="text-xs text-teal-100/80 leading-relaxed font-normal max-w-sm">
              Empowering individuals with industry-ready IT skills, hands-on project exposure, and guaranteed placement assistance for a better tomorrow.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-peach hover:text-brand-teal flex items-center justify-center transition-colors text-white">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-peach hover:text-brand-teal flex items-center justify-center transition-colors text-white">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-peach hover:text-brand-teal flex items-center justify-center transition-colors text-white">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 hover:bg-brand-peach hover:text-brand-teal flex items-center justify-center transition-colors text-white">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-extrabold text-sm text-brand-peach tracking-wide uppercase">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs font-medium text-teal-100">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#placements" className="hover:text-white transition-colors">Placements</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#blog" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Popular Courses */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-extrabold text-sm text-brand-peach tracking-wide uppercase">
              Popular Courses
            </h4>
            <ul className="space-y-2 text-xs font-medium text-teal-100">
              <li><a href="#courses" className="hover:text-white transition-colors">SAP (Functional & Technical)</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Data Analytics (Python / SQL)</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Full Stack Development</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Software Testing Tools</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Cloud Computing (AWS / Azure)</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">IT Service Management</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Us & Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-extrabold text-sm text-brand-peach tracking-wide uppercase">
              Contact Us
            </h4>
            
            <div className="space-y-2.5 text-xs text-teal-100">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-peach shrink-0 mt-0.5" />
                <span>No. 123, Anna Salai, Chennai – 600 002.</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-peach shrink-0" />
                <a href="tel:+919876543210" className="hover:text-white">+91 98765 43210</a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-peach shrink-0" />
                <a href="mailto:info@iclptech.com" className="hover:text-white">info@iclptech.com</a>
              </div>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="pt-2">
              <h5 className="font-bold text-xs text-white mb-2">Subscribe to Our Newsletter</h5>
              
              {subscribed ? (
                <div className="bg-emerald-900/60 border border-emerald-500 text-emerald-200 text-xs p-2.5 rounded-lg flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Subscribed successfully! Thank you.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex items-center gap-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white/10 text-white placeholder-teal-200/60 text-xs px-3 py-2.5 rounded-lg border border-teal-700 focus:outline-none focus:border-brand-peach transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-brand-peach text-brand-teal p-2.5 rounded-lg hover:bg-white font-bold transition-colors shrink-0"
                    title="Subscribe"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
              <p className="text-[11px] text-teal-300/70 mt-1.5">
                Get updates on new courses, batches and career opportunities.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-teal-200/70 gap-4">
          <p>© 2026 iCLP Technologies. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
