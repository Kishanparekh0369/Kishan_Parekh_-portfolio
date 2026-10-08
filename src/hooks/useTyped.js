import { useEffect, useState } from 'react';

/**
 * Lightweight typed-text effect (replaces Typed.js, zero dependency).
 * Respects prefers-reduced-motion: shows first string statically.
 */
export default function useTyped(strings, { typeSpeed = 50, backSpeed = 30, backDelay = 2000 } = {}) {
  const [text, setText] = useState(() =>
    typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      ? (strings[0] ?? '')
      : '',
  );

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;
    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = strings[stringIndex % strings.length] ?? '';
      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex >= current.length) {
          deleting = true;
          timer = setTimeout(tick, backDelay);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, Math.max(0, charIndex)));
        if (charIndex <= 0) {
          deleting = false;
          stringIndex += 1;
          timer = setTimeout(tick, 400);
          return;
        }
        timer = setTimeout(tick, backSpeed);
      }
    };

    timer = setTimeout(tick, 500);
    return () => clearTimeout(timer);
  }, [strings, typeSpeed, backSpeed, backDelay]);

  return text;
}
