import { useEffect, useRef } from 'react';

/**
 * Subtle 3D tilt on hover — desktop with fine pointer only,
 * disabled for touch / reduced-motion.
 *
 * `hoverLift` must mirror the card's CSS :hover transform so the JS
 * tilt combines with it instead of overriding it (inline transform
 * otherwise kills the CSS hover lift). Touch devices keep pure CSS.
 */
export default function useTilt(max = 3, hoverLift = '') {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (window.innerWidth <= 992) return undefined;
    if (window.matchMedia('(hover: none)').matches) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const suffix = hoverLift ? ` ${hoverLift}` : '';
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
      const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
      el.style.transform = `perspective(1000px) rotateX(${(-y * max).toFixed(2)}deg) rotateY(${(x * max).toFixed(2)}deg)${suffix}`;
    };
    const onLeave = () => {
      el.style.transform = '';
    };
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      el.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, [max, hoverLift]);

  return ref;
}
