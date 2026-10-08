import Reveal from '../Reveal/Reveal';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <Reveal>
          <h2 className="section-title">About Me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal delay={0.05}>
            <div className="about-img-box">
              <div className="about-hud-frame" aria-hidden="true">
                <div className="hud-corner hud-corner-tl" />
                <div className="hud-corner hud-corner-tr" />
                <div className="hud-corner hud-corner-bl" />
                <div className="hud-corner hud-corner-br" />
              </div>
              <div className="about-shine" aria-hidden="true" />
              <img src="images/profile.jpg" alt="Kishan Parekh Profile" loading="lazy" />
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-text-container">
              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="fas fa-user-graduate" style={{ color: 'var(--accent-primary)', fontSize: '1.5rem', marginTop: '5px' }} aria-hidden="true" />
                  <p style={{ marginBottom: 0, color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: 1.7 }}>
                    I&apos;m an <b>MCA student</b> with a strong foundation in <b>computer applications</b> and a keen
                    interest in <b>full stack development</b>. Building upon my <b>BCA experience</b>, I am continuously
                    expanding my expertise in modern programming languages, frameworks, and software development practices.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem', borderLeft: '4px solid var(--accent-secondary)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                  <i className="fas fa-laptop-code" style={{ color: 'var(--accent-secondary)', fontSize: '1.5rem', marginTop: '5px' }} aria-hidden="true" />
                  <p style={{ marginBottom: 0, color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.1rem)', lineHeight: 1.7 }}>
                    During my BCA, I developed a <b>Library Management System</b> in <b>PHP</b>, which gave me practical
                    exposure to working with <b>frontend design</b>, <b>backend logic</b>, and <b>database integration</b>.
                    That project helped me strengthen my <b>problem-solving skills</b> and understand how different layers
                    of an application come together.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', marginBottom: '1.5rem', borderLeft: '4px solid var(--success-color)' }}>
                <p style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: 'clamp(1rem, 2vw, 1.1rem)' }}>
                  <i className="fas fa-bullseye" style={{ color: 'var(--success-color)', fontSize: '1.2rem' }} aria-hidden="true" />
                  <span style={{ fontWeight: 600 }}>Now, in my MCA journey, I am focusing on:</span>
                </p>
                <ul className="about-list" style={{ marginBottom: 0 }}>
                  <li>
                    <span className="about-bullet" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </span>
                    <span>Exploring modern frameworks like <b>React.js</b>, <b>Node.js</b>, and <b>Express.js</b> for building scalable applications.</span>
                  </li>
                  <li>
                    <span className="about-bullet" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </span>
                    <span><b>Database management</b> with <b>MySQL</b> and <b>MongoDB</b>.</span>
                  </li>
                  <li>
                    <span className="about-bullet" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </span>
                    <span><b>Version control &amp; collaboration</b> using <b>Git</b> and <b>GitHub</b>.</span>
                  </li>
                  <li>
                    <span className="about-bullet" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                    </span>
                    <span>Learning about <b>cloud deployment</b> and <b>APIs</b> to deliver real-world, production-ready solutions.</span>
                  </li>
                </ul>
              </div>

              <div className="about-highlights">
                <div className="glass-panel highlight-card" style={{ padding: '1rem 1.2rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-secondary)', textAlign: 'center' }}>
                  <div className="highlight-value" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-secondary)' }}>MCA Student</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>SPU Vallabh Vidyanagar</div>
                </div>
                <div className="glass-panel highlight-card" style={{ padding: '1rem 1.2rem', borderRadius: '12px', borderLeft: '3px solid var(--accent-primary)', textAlign: 'center' }}>
                  <div className="highlight-value" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--accent-primary)' }}>BCA Graduate</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>8.81 / 10 CGPA</div>
                </div>
                <div className="glass-panel highlight-card" style={{ padding: '1rem 1.2rem', borderRadius: '12px', borderLeft: '3px solid var(--warning-color)', textAlign: 'center' }}>
                  <div className="highlight-value" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--warning-color)' }}>Univ Topper</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Rank 9 (Sem 5 - 9.17)</div>
                </div>
                <div className="glass-panel highlight-card" style={{ padding: '1rem 1.2rem', borderRadius: '12px', borderLeft: '3px solid var(--success-color)', textAlign: 'center' }}>
                  <div className="highlight-value" style={{ fontFamily: 'var(--font-hud)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--success-color)' }}>Research Intern</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>AI Adaptive Exam System</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-primary)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <i className="fas fa-rocket" style={{ color: 'var(--accent-primary)', fontSize: '1.2rem', marginTop: '5px' }} aria-hidden="true" />
                    <p style={{ marginBottom: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      I am enthusiastic about working on <b>real-world projects</b>, <b>internships</b>, and{' '}
                      <b>collaborations</b> that challenge me to build complete, dynamic, and user-friendly applications.
                    </p>
                  </div>
                </div>
                <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px', borderLeft: '4px solid var(--accent-secondary)' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <i className="fas fa-gamepad" style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem', marginTop: '5px' }} aria-hidden="true" />
                    <p style={{ marginBottom: 0, color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                      Beyond academics, I enjoy playing <b>cricket</b>, debugging <b>coding errors</b>, and exploring{' '}
                      <b>video games</b>, which keep me curious, analytical, and motivated.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
