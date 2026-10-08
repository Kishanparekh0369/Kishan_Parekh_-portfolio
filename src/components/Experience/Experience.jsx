import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';

export default function Experience() {
  const tiltRef = useTilt(3, 'translateX(6px) translateY(-3px)');
  return (
    <section id="experience" className="experience" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">Professional Experience</h2>
        </Reveal>

        <div className="edu-grid">
          <Reveal delay={0.1}>
            <div className="edu-card glass-panel tilt-3d" ref={tiltRef}>
              <span className="shine-sweep" aria-hidden="true" />
              <div className="edu-header">
                <div>
                  <div className="edu-degree">
                    <i className="fas fa-briefcase" style={{ color: 'var(--accent-primary)', marginRight: '8px' }} aria-hidden="true" />
                    Summer Research Intern
                  </div>
                  <div className="edu-uni">Post Graduate Department of Computer Science and Technology, Sardar Patel University</div>
                  <div className="edu-college">Vallabh Vidyanagar</div>
                </div>
                <div className="edu-year">May 2026 – July 2026</div>
              </div>

              <div className="project-highlight">
                <span className="project-kicker">
                  <i className="fas fa-diagram-project" aria-hidden="true" />
                  Project
                </span>
                <span className="project-name">
                  AI-Based Adaptive Online Examination and Student Performance Analysis System
                </span>
              </div>

              <div style={{ marginBottom: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'AJAX'].map((t) => (
                  <span key={t} className="tech-pill">{t}</span>
                ))}
              </div>

              <div className="edu-desc" style={{ marginBottom: 0 }}>
                <strong style={{ color: 'var(--accent-secondary)', display: 'block', marginBottom: '8px', fontFamily: 'var(--font-sub)', fontSize: '1.05rem' }}>
                  Key Responsibilities:
                </strong>
                <ul style={{ listStyle: 'none', paddingLeft: 0, marginBottom: 0 }}>
                  {[
                    'Designed adaptive assessment logic based on student performance.',
                    'Developed online examination and result modules.',
                    'Implemented performance tracking and analytics.',
                    'Worked on system design, testing and documentation.',
                  ].map((item) => (
                    <li key={item} style={{ marginBottom: '10px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--accent-primary)', marginTop: '5px', fontSize: '1.05rem' }} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-links" style={{ marginTop: '1.8rem' }}>
                <a href="https://github.com/Kishanparekh0369" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fab fa-github" aria-hidden="true" /> View Source
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
