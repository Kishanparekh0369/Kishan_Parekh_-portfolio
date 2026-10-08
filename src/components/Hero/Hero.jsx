import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import useTyped from '../../hooks/useTyped';
import { HERO_ORBIT_ICONS, TYPED_STRINGS } from '../../data/portfolio';

export default function Hero() {
  const typed = useTyped(TYPED_STRINGS);
  const reduce = useReducedMotion();
  const wrapperRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const section = sectionRef.current;
    if (!wrapper || !section) return undefined;
    if (window.innerWidth <= 992) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      wrapper.style.transform = `perspective(1000px) rotateX(${(-y * 3.5).toFixed(2)}deg) rotateY(${(x * 3.5).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      wrapper.style.transform = '';
    };
    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="home" className="hero section" ref={sectionRef}>
      <div className="container hero-grid">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: reduce ? 0 : -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          <h1>
            Hi, I&apos;m <span className="title-accent">Kishan Parekh</span>
          </h1>
          <h2 aria-live="polite">
            <span className="typed-text">{typed}</span>
            <span className="typed-caret" aria-hidden="true">█</span>
          </h2>
          <p>
            ✨ &quot;I specialize in building creative and modern websites that bring ideas to life. Passionate about
            learning and building user-friendly digital experiences.&quot;
            <br />
            <span style={{ fontSize: '0.98rem', opacity: 0.9, marginTop: '0.5rem', display: 'inline-block' }}>
              Building responsive and practical web applications with modern frontend, backend, database and AI
              technologies.
            </span>
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              <i className="fas fa-code" aria-hidden="true" /> View Projects
            </a>
            <a href="resume/Kishan_Parekh_Resume_new.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <i className="fas fa-download" aria-hidden="true" /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-image-wrapper"
          ref={wrapperRef}
          initial={{ opacity: 0, scale: reduce ? 1 : 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          <div className="ring ring-1" aria-hidden="true" />
          <div className="ring ring-2" aria-hidden="true" />

          <div className="orbit-container" aria-hidden="true">
            {HERO_ORBIT_ICONS.map((icon) => (
              <div key={icon.key} className={icon.className} title={icon.title}>
                <img src={icon.src} alt={icon.alt} loading="lazy" className={icon.imgClass} />
              </div>
            ))}
            <div className="floating-icon icon-code" title="Code">
              <i className="fas fa-code" style={{ color: 'var(--accent-secondary)', fontSize: '1.1rem' }} />
            </div>
          </div>

          <div className="hero-photo-frame">
            <div className="hero-halo" aria-hidden="true" />
            <img src="images/me.png" alt="Kishan Parekh" className="hero-image" fetchPriority="high" />
            <span className="hero-shine" aria-hidden="true" />
          </div>
          <div className="hero-status-pill" role="status">
            <span className="hero-status-dot" aria-hidden="true" />
            Available for opportunities
          </div>
        </motion.div>
      </div>
    </section>
  );
}
