import { motion } from 'framer-motion';

const STATUS_STAGES = [
  { at: 0, text: 'Initializing system' },
  { at: 30, text: 'Loading modules' },
  { at: 60, text: 'Compiling portfolio' },
  { at: 85, text: 'Finalizing experience' },
  { at: 100, text: 'Welcome' },
];

const NAME = 'KISHAN PAREKH';
const HERO_PHOTO = 'images/me.png';

// Controlled loader: progress comes from App.jsx (single source of truth).
// This guarantees the bar ALWAYS reaches 100% before the loader dismisses.
export default function Loader({ progress = 0 }) {
  const safeProgress = Math.min(100, Math.max(0, Math.floor(progress)));
  const status = [...STATUS_STAGES].reverse().find((s) => safeProgress >= s.at)?.text ?? STATUS_STAGES[0].text;

  return (
    <motion.div
      className="loader-overlay"
      role="status"
      aria-label="Loading portfolio"
      aria-live="polite"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)', transition: { duration: 0.55, ease: 'easeInOut' } }}
    >
      <div className="loader-grid-bg" aria-hidden="true" />
      <div className="loader-glow" aria-hidden="true" />
      <div className="loader-scan" aria-hidden="true" />

      {/* HUD corner brackets */}
      <div className="loader-corner loader-corner-tl" aria-hidden="true" />
      <div className="loader-corner loader-corner-tr" aria-hidden="true" />
      <div className="loader-corner loader-corner-bl" aria-hidden="true" />
      <div className="loader-corner loader-corner-br" aria-hidden="true" />

      <motion.div
        className="loader-core"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Hero photo emblem — same photo as hero section */}
        <div className="loader-emblem" aria-hidden="true">
          <div className="loader-ring loader-ring-outer" />
          <div className="loader-ring loader-ring-inner" />
          <div className="loader-orbit">
            <span className="loader-orbit-dot" />
          </div>
          <img src={HERO_PHOTO} alt="" className="loader-photo" draggable="false" />
        </div>

        {/* Name with staggered letter reveal */}
        <h1 className="loader-mark" aria-label={NAME}>
          {NAME.split('').map((ch, i) => (
            <motion.span
              key={i}
              className={ch === ' ' ? 'loader-letter loader-space' : 'loader-letter'}
              initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ delay: 0.15 + i * 0.045, duration: 0.45, ease: 'easeOut' }}
            >
              {ch === ' ' ? '\u00A0' : ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          className="loader-role"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <span className="loader-role-line" aria-hidden="true" />
          Full Stack Developer
          <span className="loader-role-line" aria-hidden="true" />
        </motion.p>

        {/* Progress */}
        <div className="loader-progress-wrap">
          <div className="loader-progress-head">
            <span className="loader-status">
              {status}
              <span className="loader-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
            </span>
            <span className="loader-percent">{safeProgress}%</span>
          </div>
          <div
            className="loader-bar-track"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={safeProgress}
            aria-hidden="false"
          >
            <div className="loader-bar-fill" style={{ width: `${safeProgress}%` }} />
            <div className="loader-bar-shine" aria-hidden="true" />
          </div>
          <div className="loader-ticks" aria-hidden="true">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className={safeProgress >= (i + 1) * 5 ? 'on' : ''} />
            ))}
          </div>
        </div>
      </motion.div>

      <div className="loader-foot" aria-hidden="true">
        <span>v2.0</span>
        <span className="loader-foot-sep" />
        <span>Portfolio OS</span>
      </div>
    </motion.div>
  );
}
