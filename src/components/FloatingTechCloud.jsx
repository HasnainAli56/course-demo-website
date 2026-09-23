import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Code2, Cpu } from 'lucide-react';

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

export default function FloatingTechCloud({ onOpenEnquire }) {
  const stageRef = useRef(null);
  const [hoveredTech, setHoveredTech] = useState(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const icons = Array.from(stage.querySelectorAll('.tech-icon-item'));
    const n = BRANDS.length;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));

    const iconData = icons.map((el, i) => {
      const size = 42 + (i % 5) * 6;
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
      targetX = (x / rect.width) * 30;
      targetY = (y / rect.height) * 30;
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
      const maxR = Math.min(w, h) * 0.44;
      const c = maxR / Math.sqrt(n);

      t += 0.016;

      for (const p of iconData) {
        if (p.el.dataset.isHovered === 'true') continue;

        const r = c * p.ring;
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 via-indigo-950 to-brand-navy text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-teal/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest text-amber-300 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>Interactive Tech Ecosystem</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            Master <span className="text-amber-400">25+ Industry Technologies</span> & Tools
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed">
            Gain production-ready hands-on expertise with cutting-edge frameworks, cloud platforms, automation tools, and modern languages.
          </p>
        </div>

        <div className="relative w-full h-[460px] sm:h-[520px] bg-slate-900/60 border border-white/15 rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden flex items-center justify-center">
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)`,
              backgroundSize: '28px 28px'
            }}
          />

          <div className="relative z-10 text-center p-6 sm:p-8 bg-slate-900/80 border border-white/20 rounded-3xl backdrop-blur-md max-w-sm sm:max-w-md shadow-2xl space-y-3.5 transform transition-all duration-300 hover:scale-105 pointer-events-auto">
            <div className="w-14 h-14 bg-gradient-to-tr from-amber-400 to-amber-200 text-slate-950 rounded-2xl mx-auto flex items-center justify-center shadow-lg font-black">
              <Cpu className="w-8 h-8 text-slate-950" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {hoveredTech ? (
                <span className="flex items-center justify-center gap-2" style={{ color: hoveredTech.color }}>
                  <i className={`fa-brands fa-${hoveredTech.name} text-2xl`}></i>
                  <span>{hoveredTech.label}</span>
                </span>
              ) : (
                <span>Industry Ready Curriculum</span>
              )}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
              {hoveredTech ? (
                <span>Explore hands-on capstone projects and live lab scenarios powered by <strong style={{ color: hoveredTech.color }}>{hoveredTech.label}</strong>.</span>
              ) : (
                <span>Hover over any floating technology icon to explore tools taught in our career programs.</span>
              )}
            </p>

            <button
              onClick={() => onOpenEnquire && onOpenEnquire('Tech Ecosystem Inquiry')}
              className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <Code2 className="w-4 h-4" />
              <span>Explore All Syllabuses</span>
            </button>
          </div>

          <div ref={stageRef} className="absolute inset-0 w-full h-full overflow-hidden select-none">
            {BRANDS.map((brandObj, index) => {
              const bName = brandObj.name;
              const bColor = brandObj.color;
              const bLabel = brandObj.label;
              const size = 42 + (index % 5) * 6;

              return (
                <div
                  key={bName + index}
                  className="tech-icon-item absolute top-0 left-0 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 group"
                  style={{
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(8px)',
                    boxShadow: `0 8px 24px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.15)`,
                    willChange: 'transform'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.dataset.isHovered = 'true';
                    e.currentTarget.style.transform += ' scale(1.35)';
                    e.currentTarget.style.zIndex = '40';
                    e.currentTarget.style.boxShadow = `0 12px 30px ${bColor}66, inset 0 0 0 2px ${bColor}`;
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    setHoveredTech(brandObj);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.dataset.isHovered = 'false';
                    e.currentTarget.style.zIndex = '1';
                    e.currentTarget.style.boxShadow = `0 8px 24px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.15)`;
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
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

                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none bg-slate-950 text-white font-extrabold text-[10px] px-2.5 py-1 rounded-md shadow-lg border border-white/20 whitespace-nowrap z-50">
                    {bLabel}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-extrabold text-slate-300 pt-2 text-center">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            <span>100% Practical Live Code Labs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>Real-world Enterprise Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-teal"></span>
            <span>Beginner to Advanced Roadmaps</span>
          </div>
        </div>
      </div>
    </section>
  );
}
