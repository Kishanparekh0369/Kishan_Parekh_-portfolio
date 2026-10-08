import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import UnstopAchievement from './UnstopAchievement';

export default function Achievements() {
  const ref = useTilt(2, 'translateY(-4px)');
  return (
    <section id="achievements" className="achievements" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">Honors &amp; Achievements</h2>
        </Reveal>

        <div className="achievements-grid">
          <Reveal delay={0.1}>
            <div className="achievement-card glass-panel tilt-3d" ref={ref}>
              <span className="shine-sweep" aria-hidden="true" />
              <div className="achievement-trophy">
                <i className="fas fa-trophy" aria-hidden="true" />
              </div>
              <div>
                <h3 className="achievement-title">University Topper</h3>
                <div className="achievement-sub">BCA Semester 5 Examination | Sardar Patel University</div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: 0 }}>
                  Secured Rank 9 in the University Semester 5 BCA Examinations conducted by Sardar Patel University with
                  an outstanding academic record.
                </p>
                <div className="achievement-stats">
                  <span>Rank: 9</span>
                  <span>•</span>
                  <span>GPA: 9.17 / 10.0</span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <UnstopAchievement />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
