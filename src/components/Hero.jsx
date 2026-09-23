import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MessageSquare, Award, Laptop, Users, GraduationCap, Sparkles } from 'lucide-react';

const BRANDS = [
  { name: 'react', label: 'React.js', color: '#61dafb' },
  { name: 'html5', label: 'HTML5', color: '#e34f26' },
  { name: 'css3-alt', label: 'CSS3', color: '#264de4' },
  { name: 'js', label: 'JavaScript', color: '#f7df1e' },
  { name: 'php', label: 'PHP', color: '#787cb5' },
  { name: 'python', label: 'Python', color: '#3776ab' },
  { name: 'docker', label: 'Docker', color: '#2496ed' },
  { name: 'git-alt', label: 'Git', color: '#f05032' },
  { name: 'github', label: 'GitHub', color: '#181717' },
  { name: 'npm', label: 'npm', color: '#cb3837' },
  { name: 'node-js', label: 'Node.js', color: '#5fa04e' },
  { name: 'aws', label: 'AWS', color: '#ff9900' },
  { name: 'figma', label: 'Figma', color: '#a259ff' },
  { name: 'sass', label: 'Sass', color: '#cc6699' },
  { name: 'vuejs', label: 'Vue.js', color: '#42b883' },
  { name: 'angular', label: 'Angular', color: '#dd0031' },
  { name: 'swift', label: 'Swift', color: '#f05138' },
  { name: 'android', label: 'Android', color: '#3ddc84' },
  { name: 'apple', label: 'iOS / Apple', color: '#111111' },
  { name: 'linux', label: 'Linux', color: '#fcc624' },
  { name: 'gitlab', label: 'GitLab', color: '#fc6d26' },
  { name: 'wordpress', label: 'WordPress', color: '#21759b' },
  { name: 'laravel', label: 'Laravel', color: '#ff2d20' },
  { name: 'trello', label: 'Trello', color: '#0079bf' },
  { name: 'slack', label: 'Slack', color: '#e01e5a' }
];

export default function Hero({ onOpenEnquire, onExploreCourses }) {
  const stageRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const icons = Array.from(stage.querySelectorAll('.hero-tech-icon'));
    const n = BRANDS.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const iconData = icons.map((el, i) => {
      const size = 38 + (i % 5) * 6;
      return {
        el,
        size,
        ring: Math.sqrt(i + 1),
        angle: i * goldenAngle,
        phase: Math.random() * Math.PI * 2,
        speed: 0.6 + Math.random() * 0.6,
        amp: 5 + Math.random() * 6
      };
    });

    let animationFrameId;
    let t = 0;
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const rect = stage.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetX = (x / rect.width) * 25;
      targetY = (y / rect.height) * 25;
    };

    const handleMouseLeave = () => {
      targetX = 0;
      targetY = 0;
    };

    stage.addEventListener('mousemove', handleMouseMove);
    stage.addEventListener('mouseleave', handleMouseLeave);

    function step() {
      if (!stage) return;
      const w = stage.clientWidth;
      const h = stage.clientHeight;
      if (w === 0 || h === 0) return;

      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const cx = w / 2 + mouseX;
      const cy = h / 2 + mouseY;

      const minR = Math.min(w, h) * 0.28;
      const maxR = Math.min(w, h) * 0.48;
      const maxRing = Math.sqrt(n);

      t += 0.016;

      for (const p of iconData) {
        if (p.el.dataset.isHovered === 'true') continue;

        const r = minR + (maxR - minR) * (p.ring / maxRing);
        const homeX = cx + r * Math.cos(p.angle) - p.size / 2;
        const homeY = cy + r * Math.sin(p.angle) - p.size / 2;
        const x = homeX + Math.sin(t * p.speed + p.phase) * p.amp;
        const y = homeY + Math.cos(t * p.speed * 1.3 + p.phase) * p.amp;

        p.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(step);
    }

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (stage) {
        stage.removeEventListener('mousemove', handleMouseMove);
        stage.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section id="home" className="relative bg-gradient-to-b from-slate-50 via-white to-brand-mint/20 py-12 lg:py-20 overflow-hidden">
      {/* Background Subtle Shapes */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-brand-peach/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left z-10">
            
            {/* Top Subtitle Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-mint border border-brand-mint-border px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-brand-teal" />
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-teal">
                SKILLS FOR A SMARTER TOMORROW
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-navy tracking-tight leading-[1.15]">
              Learn In-Demand <br className="hidden sm:inline" />
              <span className="text-brand-teal relative inline-block">
                Software Courses
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-brand-peach-dark/80 -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0,15 Q50,0 100,15" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            {/* Paragraph Subtitle */}
            <p className="text-lg sm:text-xl text-brand-muted max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Gain practical skills, work on real-time projects and build a successful career in IT with industry-certified trainers.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#courses"
                onClick={onExploreCourses}
                className="w-full sm:w-auto bg-brand-teal hover:bg-brand-teal-dark text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-brand-teal/25 hover:shadow-xl transition-all flex items-center justify-center gap-3 group"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenEnquire}
                className="w-full sm:w-auto bg-white hover:bg-brand-mint/40 text-brand-teal border-2 border-brand-teal font-bold text-base px-8 py-3.5 rounded-full transition-all flex items-center justify-center gap-2.5 shadow-sm hover:shadow"
              >
                <MessageSquare className="w-5 h-5 text-brand-teal" />
                <span>Talk to Our Counselor</span>
              </button>
            </div>

            {/* Features Strip */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Expert</h4>
                  <p className="text-xs text-brand-muted">Trainers</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Laptop className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Hands-on</h4>
                  <p className="text-xs text-brand-muted">Training</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">Certification</h4>
                  <p className="text-xs text-brand-muted">Support</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-100 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-mint flex items-center justify-center text-brand-teal flex-shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-brand-navy">100% Placement</h4>
                  <p className="text-xs text-brand-muted">Assistance</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Hero Visual: Floating Tech Icons Cloud + Student Photo Center */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[500px]">
            
            {/* Interactive Floating Icons Stage Container */}
            <div ref={stageRef} className="relative w-full h-[460px] sm:h-[500px] flex items-center justify-center overflow-hidden select-none">
              
              {/* Central Hero Circle Image */}
              <div className="relative z-10 w-[240px] sm:w-[300px] h-[240px] sm:h-[300px] rounded-full bg-gradient-to-tr from-brand-teal/30 via-brand-mint to-brand-peach/60 p-3 shadow-2xl transition-all duration-300 transform hover:scale-105">
                <div className="w-full h-full rounded-full bg-white relative overflow-hidden flex items-end justify-center shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                    alt="Student holding books"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Quote Bubble */}
                <div className="absolute -top-4 -right-4 sm:top-0 sm:-right-4 bg-brand-teal text-white px-4 py-2.5 rounded-2xl rounded-bl-none shadow-xl transform rotate-3 border-2 border-white">
                  <p className="font-script text-xl sm:text-2xl font-bold leading-tight tracking-wide text-brand-peach">
                    {hoveredTech ? (
                      <span className="flex items-center gap-1.5 text-white text-sm font-sans font-black">
                        <i className={`fa-brands fa-${hoveredTech.name}`} style={{ color: hoveredTech.color }}></i>
                        <span>{hoveredTech.label}</span>
                      </span>
                    ) : (
                      <span>“Better Skills <br /> Brighter Tomorrow”</span>
                    )}
                  </p>
                </div>
              </div>

              {/* Floating Icons Loop */}
              {BRANDS.map((brandObj, index) => {
                const bName = brandObj.name;
                const bColor = brandObj.color;
                const bLabel = brandObj.label;
                const size = 38 + (index % 5) * 6;

                return (
                  <div
                    key={bName + index}
                    className="hero-tech-icon absolute top-0 left-0 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 group z-20"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      backgroundColor: 'rgba(255, 255, 255, 0.85)',
                      backdropFilter: 'blur(6px)',
                      boxShadow: `0 6px 20px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.06)`,
                      willChange: 'transform'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.dataset.isHovered = 'true';
                      e.currentTarget.style.transform += ' scale(1.4)';
                      e.currentTarget.style.zIndex = '50';
                      e.currentTarget.style.boxShadow = `0 10px 25px ${bColor}88, inset 0 0 0 2px ${bColor}`;
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      setHoveredTech(brandObj);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.dataset.isHovered = 'false';
                      e.currentTarget.style.zIndex = '20';
                      e.currentTarget.style.boxShadow = `0 6px 20px rgba(0,0,0,0.12), inset 0 0 0 1px rgba(0,0,0,0.06)`;
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.85)';
                      setHoveredTech(null);
                    }}
                  >
                    <i 
                      className={`fa-brands fa-${bName} transition-colors duration-300`}
                      style={{
                        fontSize: `${size * 0.55}px`,
                        color: bColor
                      }}
                    />

                    {/* Tooltip Label */}
                    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-slate-900 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md shadow-lg border border-white/20 whitespace-nowrap z-50">
                      {bLabel}
                    </span>
                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
