import { useEffect, useRef, useState } from 'react';
import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { SKILL_GROUPS } from '../../data/portfolio';

function SkillItem({ skill, isVisible }) {
  return (
    <div className="skill-item">
      <div className="skill-item-header">
        <div className="skill-item-info">
          <span className="skill-icon-tile" aria-hidden="true">
            {skill.icon ? (
              <img src={skill.icon} alt="" width="22" height="22" loading="lazy" className={skill.imgClass} />
            ) : (
              <i className={skill.faIcon} aria-hidden="true" />
            )}
          </span>
          <span className="skill-item-name">{skill.name}</span>
        </div>
        <div className="skill-item-meta">
          <span className="skill-level-badge">{skill.level}</span>
          <span className="skill-item-percent">{skill.value}%</span>
        </div>
      </div>
      <div
        className="skill-bar-bg"
        role="progressbar"
        aria-valuenow={skill.value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${skill.name} proficiency: ${skill.value}%`}
      >
        <div
          className="skill-bar"
          data-value={skill.value}
          style={{ width: isVisible ? `${skill.value}%` : '0%' }}
        />
      </div>
    </div>
  );
}

function SkillCard({ group, index }) {
  const tiltRef = useTilt(2, 'translateY(-6px)');
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return undefined;

    // Trigger smooth fill animation when card enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -30px 0px' },
    );
    observer.observe(card);

    // Fail-safe fallback so bars never remain at 0%
    const fallback = setTimeout(() => {
      setIsVisible(true);
      observer.disconnect();
    }, 1200);

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
    <Reveal delay={0.06 * (index % 3)}>
      <div className="skill-card glass-panel tilt-3d" ref={setRefs}>
        <div className="skill-card-header">
          <div className="skill-card-icon" aria-hidden="true">
            <i className={group.icon} />
          </div>
          <div className="skill-card-head-text">
            <h3 className="skill-card-title">{group.title}</h3>
            {group.subtitle && <p className="skill-subtitle">{group.subtitle}</p>}
          </div>
        </div>

        <div className="skill-items-list">
          {group.items.map((skill) => (
            <SkillItem key={skill.name} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="container">
        <Reveal>
          <div className="section-header">
            <h2 className="section-title">Technical Arsenal</h2>
            <p className="section-subtitle">
              Comprehensive toolkit of languages, frameworks, databases, and modern developer technologies I use to build robust full-stack applications.
            </p>
          </div>
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
