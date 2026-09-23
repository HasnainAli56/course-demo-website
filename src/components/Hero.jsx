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
  const viewportRef = useRef(null);
  const globeRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isDraggingState, setIsDraggingState] = useState(false);

  useEffect(() => {
    const viewport = viewportRef.current;
    const globe = globeRef.current;
    if (!viewport || !globe) return;

    const icons = Array.from(globe.querySelectorAll('.hero-3d-icon'));
    const n = BRANDS.length;

    // Unit sphere distribution (Fibonacci sphere algorithm matching floating-icons (2).html)
    const iconData = icons.map((el, i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const size = 36 + (i % 5) * 5;
      return {
        el,
        size,
        ux: Math.cos(theta) * radiusAtY,
        uy: y,
        uz: Math.sin(theta) * radiusAtY
      };
    });

    let rx = -10;
    let ry = 0;
    let vrx = 0;
    let vry = 0.08;
    let isDragging = false;
    let lastX = 0;
    let lastY = 0;
    let animationFrameId;

    function sphereRadius() {
      if (!viewport) return 190;
      return Math.min(viewport.clientWidth, viewport.clientHeight) * 0.44;
    }

    function layout() {
      if (!viewport || !globe) return;
      const R = sphereRadius();

      for (const p of iconData) {
        if (p.el.dataset.isHovered === 'true') continue;

        const x = p.ux * R;
        const y = p.uy * R;
        const z = p.uz * R;

        const depthScale = (z + R) / (2 * R); // 0 (back) to 1 (front)
        const opacity = 0.4 + depthScale * 0.6;

        p.el.style.transform = `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-ry}deg) rotateX(${-rx}deg)`;
        p.el.style.opacity = opacity;
        p.el.style.zIndex = Math.round((z + R) * 10);
      }

      globe.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    }

    function frame() {
      if (!isDragging) {
        ry += vry;
        rx += vrx;
        vrx *= 0.95;
        if (Math.abs(vrx) < 0.01) vrx = 0;
        if (Math.abs(vry) < 0.08) vry += (vry >= 0 ? 1 : -1) * 0.0003;
      }
      rx = Math.max(-75, Math.min(75, rx));
      layout();
      animationFrameId = requestAnimationFrame(frame);
    }

    animationFrameId = requestAnimationFrame(frame);

    const handleResize = () => layout();
    window.addEventListener('resize', handleResize);

    // Mouse & Touch Drag Handlers
    const getPos = (e) => {
      if (e.touches && e.touches.length > 0) {
        return { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
      return { x: e.clientX, y: e.clientY };
    };

    const onMove = (e) => {
      if (!isDragging) return;
      if (e.cancelable && e.type === 'touchmove') {
        e.preventDefault();
      }
      const pos = getPos(e);
      const dx = pos.x - lastX;
      const dy = pos.y - lastY;

      ry += dx * 0.4;
      rx -= dy * 0.4;
      vry = dx * 0.4;
      vrx = -dy * 0.4;

      lastX = pos.x;
      lastY = pos.y;
    };

    const onEnd = () => {
      if (!isDragging) return;
      isDragging = false;
      setIsDraggingState(false);
      if (Math.abs(vry) < 0.08) vry = vry >= 0 ? 0.08 : -0.08;

      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
    };

    const onStart = (e) => {
      isDragging = true;
      setIsDraggingState(true);
      const pos = getPos(e);
      lastX = pos.x;
      lastY = pos.y;
      vrx = 0;
      vry = 0;

      window.addEventListener('mousemove', onMove);
      window.addEventListener('touchmove', onMove, { passive: false });
      window.addEventListener('mouseup', onEnd);
      window.addEventListener('touchend', onEnd);
    };

    viewport.addEventListener('mousedown', onStart);
    viewport.addEventListener('touchstart', onStart, { passive: false });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (viewport) {
        viewport.removeEventListener('mousedown', onStart);
        viewport.removeEventListener('touchstart', onStart);
      }
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onEnd);
      window.removeEventListener('touchend', onEnd);
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

          {/* Right Hero Visual: 3D Tech Icon Globe + Student Photo in Center */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Viewport for 3D Globe with Drag & Perspective */}
            <div 
              ref={viewportRef}
              className={`relative w-full h-[460px] sm:h-[520px] flex items-center justify-center overflow-hidden select-none touch-none ${isDraggingState ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ perspective: '1300px' }}
            >
              {/* Center Student Photo Circle */}
              <div className="absolute z-15 w-[230px] sm:w-[280px] h-[230px] sm:h-[280px] rounded-full bg-gradient-to-tr from-brand-teal/30 via-brand-mint to-brand-peach/60 p-3 shadow-2xl transition-all duration-300 pointer-events-none">
                <div className="w-full h-full rounded-full bg-white relative overflow-hidden flex items-end justify-center shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                    alt="Student holding books"
                    className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Quote Bubble */}
                <div className="absolute -top-3 -right-3 sm:top-0 sm:-right-4 bg-brand-teal text-white px-3.5 py-2 rounded-2xl rounded-bl-none shadow-xl transform rotate-3 border-2 border-white z-40 pointer-events-none">
                  <p className="font-script text-lg sm:text-2xl font-bold leading-tight tracking-wide text-brand-peach">
                    {hoveredTech ? (
                      <span className="flex items-center gap-1.5 text-white text-xs sm:text-sm font-sans font-black">
                        <i className={`fa-brands fa-${hoveredTech.name}`} style={{ color: hoveredTech.color }}></i>
                        <span>{hoveredTech.label}</span>
                      </span>
                    ) : (
                      <span>“Better Skills <br /> Brighter Tomorrow”</span>
                    )}
                  </p>
                </div>
              </div>

              {/* 3D Rotating Globe Container */}
              <div 
                ref={globeRef}
                className="relative w-0 h-0"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {BRANDS.map((brandObj, index) => {
                  const bName = brandObj.name;
                  const bColor = brandObj.color;
                  const bLabel = brandObj.label;
                  const size = 36 + (index % 5) * 5;

                  return (
                    <div
                      key={bName + index}
                      className="hero-3d-icon absolute left-0 top-0 flex items-center justify-center rounded-full cursor-pointer transition-transform duration-200 group"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        marginLeft: `${-size / 2}px`,
                        marginTop: `${-size / 2}px`,
                        backgroundColor: 'rgba(255, 255, 255, 0.92)',
                        backdropFilter: 'blur(6px)',
                        boxShadow: `0 6px 18px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.08)`,
                        willChange: 'transform'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.dataset.isHovered = 'true';
                        e.currentTarget.style.transform += ' scale(1.4)';
                        e.currentTarget.style.zIndex = '100';
                        e.currentTarget.style.opacity = '1';
                        e.currentTarget.style.boxShadow = `0 10px 25px ${bColor}99, inset 0 0 0 2px ${bColor}`;
                        e.currentTarget.style.backgroundColor = '#ffffff';
                        setHoveredTech(brandObj);
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.dataset.isHovered = 'false';
                        e.currentTarget.style.boxShadow = `0 6px 18px rgba(0,0,0,0.15), inset 0 0 0 1px rgba(0,0,0,0.08)`;
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.92)';
                        setHoveredTech(null);
                      }}
                    >
                      <i 
                        className={`fa-brands fa-${bName} transition-colors duration-300 pointer-events-none`}
                        style={{
                          fontSize: `${size * 0.55}px`,
                          color: bColor
                        }}
                      />

                      {/* Tooltip Label */}
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-slate-950 text-white font-extrabold text-[10px] px-2 py-0.5 rounded-md shadow-lg border border-white/20 whitespace-nowrap z-50">
                        {bLabel}
                      </span>
                    </div>
                  );
                })}
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
