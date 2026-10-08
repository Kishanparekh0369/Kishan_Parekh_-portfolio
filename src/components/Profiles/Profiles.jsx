import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { PROFILES } from '../../data/portfolio';

function ProfileCard({ profile, index }) {
  const ref = useTilt(3, 'translateY(-4px)');
  return (
    <Reveal delay={0.08 * (index % 4)}>
      <div className="profile-card glass-panel tilt-3d" ref={ref}>
        <span className="shine-sweep" aria-hidden="true" />
        <div className="profile-logo-wrapper">
          <div className="profile-icon" style={profile.iconColor ? { color: profile.iconColor } : undefined}>
            <i className={profile.icon} aria-hidden="true" />
          </div>
          <div>
            <div className="profile-platform-name">{profile.platform}</div>
            <div className="profile-handle">{profile.handle}</div>
          </div>
        </div>
        <p className="profile-desc">{profile.desc}</p>
        <a href={profile.href} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
          <i className={profile.btnIcon ?? profile.icon} aria-hidden="true" /> Open Profile{' '}
          <i className="fas fa-external-link-alt" style={{ fontSize: '0.75rem', marginLeft: '4px' }} aria-hidden="true" />
        </a>
      </div>
    </Reveal>
  );
}

export default function Profiles() {
  return (
    <section id="profiles" className="coding-profiles" style={{ padding: 'var(--section-padding)', background: 'var(--bg-secondary)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">Coding Profiles &amp; Proof of Skill</h2>
        </Reveal>
        <div className="profiles-grid">
          {PROFILES.map((p, i) => (
            <ProfileCard key={p.platform} profile={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
