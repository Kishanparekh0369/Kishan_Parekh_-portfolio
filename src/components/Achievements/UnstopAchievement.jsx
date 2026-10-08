import { motion, useReducedMotion } from 'framer-motion';
import useTilt from '../../hooks/useTilt';
import { UNSTOP_ACHIEVEMENT } from '../../data/portfolio';
import AchievementSlider from './AchievementSlider';

/**
 * Featured achievement card — 30 Days of Consistency (Unstop).
 * Same glass-panel card system as the existing achievement card,
 * extended with an image slider, highlights and LinkedIn CTA.
 */
export default function UnstopAchievement() {
  const ref = useTilt(2, 'translateY(-4px)');
  const reduce = useReducedMotion();
  const a = UNSTOP_ACHIEVEMENT;

  return (
    <article
      className="achievement-card achievement-card-featured glass-panel tilt-3d"
      ref={ref}
      aria-labelledby="unstop-achievement-title"
    >
      <AchievementSlider images={a.images} label="30 Days of Consistency photo gallery" />

      <div className="achievement-featured-body">
        <div className="achievement-featured-head">
          <div className="achievement-trophy" aria-hidden="true">
            <i className="fas fa-trophy" />
          </div>
          <div>
            <h3 className="achievement-title" id="unstop-achievement-title">
              {a.cardTitle}
            </h3>
            <div className="achievement-sub">{a.subtitle}</div>
          </div>
        </div>

        <p className="achievement-desc">{a.description}</p>

        <div className="achievement-status">
          <i className="fas fa-circle-check" aria-hidden="true" />
          <span>{a.status}</span>
        </div>

        <motion.ul
          className="achievement-highlights"
          initial={reduce ? false : 'hidden'}
          whileInView="show"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
        >
          {a.highlights.map((h) => (
            <motion.li
              key={h.text}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
              }}
            >
              <i className={h.icon} aria-hidden="true" />
              <span>{h.text}</span>
            </motion.li>
          ))}
        </motion.ul>

        <a
          className="btn-linkedin"
          href={a.linkedin.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${a.linkedin.label} — opens the LinkedIn post in a new tab`}
        >
          <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
          <span>{a.linkedin.label}</span>
          <i className="fas fa-arrow-up-right-from-square ach-external" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
