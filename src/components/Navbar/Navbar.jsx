import { useEffect, useState } from 'react';
import { NAV_LINKS } from '../../data/portfolio';
import useActiveSection from '../../hooks/useActiveSection';
import useTheme from '../../hooks/useTheme';

const IDS = NAV_LINKS.map((l) => l.href.slice(1));

export default function Navbar() {
  const { active, scrolled } = useActiveSection(IDS);
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div
        className={`nav-overlay${open ? ' active' : ''}`}
        id="navOverlay"
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />
      <nav className={`navbar${scrolled ? ' scrolled' : ''}`} aria-label="Primary Navigation">
        <div className="container navbar-content">
          <a href="#home" className="logo" onClick={() => setOpen(false)}>
            Kishan <span className="title-accent">Parekh</span>
          </a>

          <div className="nav-controls">
            <button
              className="theme-toggle mobile-theme-btn"
              aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
              onClick={toggle}
            >
              <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
            </button>

            <button
              className={`mobile-menu-btn${open ? ' open' : ''}`}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="primaryNavLinks"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="bar" aria-hidden="true" />
            </button>
          </div>

          <ul className={`nav-links${open ? ' active' : ''}`} id="primaryNavLinks">
            <li className="nav-drawer-brand">
              <span className="drawer-title">Navigation</span>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${active === link.href.slice(1) ? ' active' : ''}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-theme-item">
              <button
                className="theme-toggle desktop-theme-btn"
                id="themeToggle"
                aria-label={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                title={theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'}
                onClick={() => {
                  toggle();
                  setOpen(false);
                }}
              >
                <i className={theme === 'light' ? 'fas fa-sun' : 'fas fa-moon'} aria-hidden="true" />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
