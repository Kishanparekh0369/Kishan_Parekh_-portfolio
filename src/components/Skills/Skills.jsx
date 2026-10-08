import { useEffect, useRef } from 'react';
import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { SKILL_GROUPS } from '../../data/portfolio';

function fillBars(card) {
  card?.querySelectorAll('.skill-bar').forEach((bar) => {
    bar.style.width = `${bar.getAttribute('data-value')}%`;
  });
}

function SkillCard({ group, index }) {
  const tiltRef = useTilt(2.5, 'translateY(-6px)');
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;
    // Animate bars the moment the card enters the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            fillBars(card);
            observer.disconnect();
            clearTimeout(fallback);
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    );
    observer.observe(card);
    // Safety net: never leave bars empty even if IO misbehaves.
    const fallback = setTimeout(() => {
      fillBars(card);
      observer.disconnect();
    }, 3000);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  const setRefs = (el) => {
    tiltRef.current = el;
    cardRef.current = el;
  };

  return (
    <Reveal delay={0.08 * (index % 3)}>
      <div className="skill-card glass-panel tilt-3d" ref={setRefs}>
        <h3>
          <i className={group.icon} aria-hidden="true" /> {group.title}
        </h3>
        {group.subtitle && (
          <p className="skill-subtitle" style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '-1.2rem', marginBottom: '1.4rem' }}>
            {group.subtitle}
          </p>
        )}

        <div className="skill-tiles">
          {group.items.map((skill) => (
            <div key={skill.name} className="skill-tile">
              <span className="skill-icon-tile" aria-hidden="true">
                {skill.icon ? (
                  <img src={skill.icon} alt="" width="26" height="26" loading="lazy" className={skill.imgClass} />
                ) : (
                  <i className={skill.faIcon} style={{ color: 'var(--accent-secondary)', fontSize: '1.2rem' }} />
                )}
              </span>
              <span className="skill-tile-name">{skill.name}</span>
              <span className="skill-level-badge">{skill.level}</span>
              <div className="skill-bar-bg">
                <div className="skill-bar" data-value={skill.value} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Technical Arsenal</h2>
        </Reveal>

        <div className="skills-grid">
          {SKILL_GROUPS.map((group, i) => (
            <SkillCard key={group.title} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
