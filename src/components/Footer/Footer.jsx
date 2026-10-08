import { useEffect, useState } from 'react';
import Reveal from '../Reveal/Reveal';
import { CONTACT, NAV_LINKS, SOCIALS } from '../../data/portfolio';

const QUICK_HREFS = ['#home', '#about', '#skills', '#projects', '#contact'];
const QUICK_LINKS = NAV_LINKS.filter((l) => QUICK_HREFS.includes(l.href));

// Brand hover color per social platform (falls back to neon cyan).
const BRAND_COLORS = {
  GitHub: '#c084fc',
  LinkedIn: '#0a66c2',
  Instagram: '#e1306c',
  HackerRank: '#2ec866',
  Unstop: '#f59e0b',
};

const RING_R = 20;
const RING_C = 2 * Math.PI * RING_R;
const YEAR = new Date().getFullYear();

export default function Footer() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y > 400);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, y / max)) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTop = () => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' });
  };

  return (
    <>
      <footer className="site-footer">
        <span className="footer-glowline" aria-hidden="true" />
        <div className="container">
          <Reveal>
            <div className="footer-grid">
              <div className="footer-brand">
                <a href="#home" className="footer-logo" aria-label="Back to top — Kishan Parekh">
                  Kishan <span className="title-accent">Parekh</span>
                </a>
                <p className="footer-tagline">
                  MCA Student &amp; Full Stack Developer — building responsive,
                  real-world web applications.
                </p>
                <span className="footer-status">
                  <span className="footer-status-dot" aria-hidden="true" />
                  Open to internships &amp; collaborations
                </span>
              </div>

              <nav className="footer-nav" aria-label="Footer navigation">
                <h3 className="footer-heading">Explore</h3>
                <ul className="footer-links">
                  {QUICK_LINKS.map((l) => (
                    <li key={l.href}>
                      <a href={l.href}>{l.label}</a>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="footer-connect">
                <h3 className="footer-heading">Connect</h3>
                <div className="footer-socials">
                  {SOCIALS.map((s) => (
                    <a
                      key={s.title}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-social"
                      style={{ '--brand': BRAND_COLORS[s.title] ?? 'var(--accent-secondary)' }}
                      title={s.title}
                      aria-label={`${s.title} (opens in a new tab)`}
                    >
                      <i className={s.icon} aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <a href={`mailto:${CONTACT.email}`} className="footer-email">
                  <i className="fas fa-envelope" aria-hidden="true" />
                  <span>{CONTACT.email}</span>
                </a>
              </div>
            </div>
          </Reveal>

          <div className="footer-bottom">
            <p>© {YEAR} Kishan Parekh. All rights reserved.</p>
            <p className="footer-made">Engineered with precision · React + Vite</p>
          </div>
        </div>
      </footer>

      <button
        id="backToTop"
        type="button"
        className={`back-to-top${visible ? ' visible' : ''}`}
        aria-label={`Back to top — ${Math.round(progress * 100)} percent scrolled`}
        onClick={scrollTop}
        tabIndex={visible ? 0 : -1}
      >
        <svg viewBox="0 0 46 46" aria-hidden="true" className="back-to-top-ring">
          <circle className="ring-track" cx="23" cy="23" r={RING_R} />
          <circle
            className="ring-fill"
            cx="23"
            cy="23"
            r={RING_R}
            strokeDasharray={RING_C}
            strokeDashoffset={RING_C * (1 - progress)}
          />
        </svg>
        <i className="fas fa-arrow-up" aria-hidden="true" />
      </button>
    </>
  );
}
