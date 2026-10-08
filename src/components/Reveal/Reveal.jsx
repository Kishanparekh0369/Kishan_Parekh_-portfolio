import { motion, useReducedMotion } from 'framer-motion';

/**
 * Scroll reveal wrapper — replaces AOS.
 * Mobile: shorter distance + faster, subtler motion.
 */
export default function Reveal({ children, delay = 0, y = 28, className, once = true }) {
  const reduce = useReducedMotion();
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
  const distance = reduce ? 0 : isMobile ? Math.min(y, 16) : y;

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ duration: isMobile ? 0.45 : 0.65, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
