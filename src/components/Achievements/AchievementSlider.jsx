import { useCallback, useEffect, useRef, useState } from 'react';

const AUTOPLAY_MS = 5000;
const RESUME_MS = 7000;
const SWIPE_PX = 40;

/**
 * Premium image slider — crossfade + subtle zoom, autoplay with
 * pause-on-interact, dots, arrows, keyboard + swipe support.
 * Mixed portrait/landscape images render distortion-free via a
 * blurred cover backdrop behind a `contain` foreground image.
 */
export default function AchievementSlider({ images, label = 'Achievement gallery' }) {
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false); // true briefly after manual interaction
  const [visible, setVisible] = useState(true); // slider on-screen?
  const [tabVisible, setTabVisible] = useState(
    typeof document === 'undefined' ? true : !document.hidden,
  );
  const resumeTimer = useRef(null);
  const touchX = useRef(null);
  const rootRef = useRef(null);
  const reduceMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const count = images.length;

  const goTo = useCallback(
    (next) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  // User interacted → pause autoplay briefly, then auto-resume.
  const holdAutoplay = useCallback(() => {
    setHeld(true);
    if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => setHeld(false), RESUME_MS);
  }, []);

  useEffect(
    () => () => {
      if (resumeTimer.current) window.clearTimeout(resumeTimer.current);
    },
    [],
  );

  // Run autoplay only while the slider is actually on-screen.
  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Track browser tab visibility so the timer never drifts in background.
  useEffect(() => {
    const onVis = () => setTabVisible(!document.hidden);
    document.addEventListener('visibilitychange', onVis);
    return () => document.removeEventListener('visibilitychange', onVis);
  }, []);

  // Continuous autoplay — pauses only briefly after manual interaction,
  // off-screen, in a hidden tab, or for reduced motion.
  useEffect(() => {
    if (reduceMotion || held || !visible || !tabVisible || count < 2) return undefined;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, held, visible, tabVisible, count]);

  const onKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      holdAutoplay();
      goTo(index - 1);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      holdAutoplay();
      goTo(index + 1);
    }
  };

  return (
    <div
      className="ach-slider"
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
      tabIndex={0}
      ref={rootRef}
      onKeyDown={onKeyDown}
      onTouchStart={(e) => {
        touchX.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        if (touchX.current == null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        touchX.current = null;
        if (Math.abs(dx) > SWIPE_PX) {
          holdAutoplay();
          goTo(index + (dx < 0 ? 1 : -1));
        }
      }}
    >
      <div className="ach-slider-viewport">
        {images.map((img, i) => (
          <div
            key={img.src}
            className={`ach-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              src={img.src}
              alt=""
              aria-hidden="true"
              className="ach-slide-bg"
              loading="lazy"
              draggable="false"
            />
            <img
              src={img.src}
              alt={i === index ? img.alt : ''}
              className="ach-slide-img"
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable="false"
            />
          </div>
        ))}

        <span className="ach-slider-count" aria-hidden="true">
          {index + 1} / {count}
        </span>

        <button
          type="button"
          className="ach-slider-arrow ach-slider-prev"
          aria-label="Previous image"
          onClick={() => {
            holdAutoplay();
            goTo(index - 1);
          }}
        >
          <i className="fas fa-chevron-left" aria-hidden="true" />
        </button>
        <button
          type="button"
          className="ach-slider-arrow ach-slider-next"
          aria-label="Next image"
          onClick={() => {
            holdAutoplay();
            goTo(index + 1);
          }}
        >
          <i className="fas fa-chevron-right" aria-hidden="true" />
        </button>
      </div>

      <div className="ach-slider-dots" role="tablist" aria-label="Choose image">
        {images.map((img, i) => (
          <button
            key={img.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to image ${i + 1} of ${count}`}
            className={`ach-dot${i === index ? ' is-active' : ''}`}
            onClick={() => {
              holdAutoplay();
              goTo(i);
            }}
          />
        ))}
      </div>

      {/* Screen-reader live announcement of the visible slide */}
      <span className="sr-only" aria-live="polite">
        {`Image ${index + 1} of ${count}: ${images[index].alt}`}
      </span>
    </div>
  );
}
