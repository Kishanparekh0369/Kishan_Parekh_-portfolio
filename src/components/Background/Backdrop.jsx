import { useEffect } from 'react';

/** Cyber particle canvas + grid overlay + scanlines + cursor glow (from script.js). */
export default function Backdrop() {
  useEffect(() => {
    const canvas = document.getElementById('cyberCanvas');
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let raf = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    const count = Math.min(Math.floor((width * height) / 24000), 50);
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: (Math.random() - 0.5) * 0.4,
      hue: Math.random() > 0.5 ? 275 : 190,
      alpha: Math.random() * 0.5 + 0.2,
      pulse: Math.random() * 0.02 + 0.005,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      particles.forEach((p) => {
        if (!reduced) {
          p.x += p.speedX;
          p.y += p.speedY;
          p.alpha += Math.sin(Date.now() * p.pulse) * 0.004;
          if (p.x < 0 || p.x > width) p.speedX *= -1;
          if (p.y < 0 || p.y > height) p.speedY *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        const a = Math.max(0.15, Math.min(0.85, p.alpha));
        ctx.fillStyle = isLight
          ? `hsla(${p.hue}, 85%, 45%, ${Math.max(0.2, Math.min(0.7, a))})`
          : `hsla(${p.hue}, 95%, 65%, ${a})`;
        if (!isLight) {
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${p.hue}, 100%, 70%, 0.8)`;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      });
      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 125) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const lineAlpha = (1 - dist / 125) * 0.16;
            ctx.strokeStyle = isLight
              ? `rgba(124, 58, 237, ${lineAlpha * 1.3})`
              : `rgba(168, 85, 247, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }
      if (!reduced) raf = requestAnimationFrame(render);
    };
    render();

    // Cursor glow (desktop only)
    const glow = document.getElementById('cursorGlow');
    let glowRaf = 0;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    const onMouse = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };
    if (glow && window.innerWidth > 992 && !reduced && !window.matchMedia('(hover: none)').matches) {
      window.addEventListener('mousemove', onMouse);
      const loop = () => {
        cx += (mx - cx) * 0.12;
        cy += (my - cy) * 0.12;
        // -50% keeps the 300px halo perfectly centered on the cursor.
        glow.style.transform = `translate3d(${cx}px, ${cy}px, 0) translate(-50%, -50%)`;
        glowRaf = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouse);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(glowRaf);
    };
  }, []);

  return (
    <>
      <canvas id="cyberCanvas" className="cyber-canvas" aria-hidden="true" />
      <div className="cyber-grid-overlay" aria-hidden="true" />
      <div className="cyber-scanlines" aria-hidden="true" />
      <div className="cursor-glow" id="cursorGlow" aria-hidden="true" />
    </>
  );
}
