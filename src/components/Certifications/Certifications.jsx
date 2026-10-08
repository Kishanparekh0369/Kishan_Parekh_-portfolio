import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { CERTIFICATIONS } from '../../data/portfolio';

function CertCard({ cert, index, onView }) {
  const ref = useTilt(2.5, 'translateY(-6px)');
  return (
    <Reveal delay={0.08 * (index % 3)}>
      <div className="certification-card stagger-item tilt-3d" ref={ref}>
        <div className="cert-medal" aria-hidden="true">
          <i className="fas fa-award" />
        </div>
        <h3 className="certification-name">{cert.name}</h3>
        <p className="certification-issuer mb-1">{cert.issuer}</p>
        <p className="certification-date mb-2">{cert.date}</p>
        <p>{cert.desc}</p>
        <button type="button" className="certification-btn" onClick={() => onView(cert.image, cert.name)}>
          View Certificate
        </button>
      </div>
    </Reveal>
  );
}

export default function Certifications() {
  const [modal, setModal] = useState(null);

  const open = useCallback((src, name) => setModal({ src, name }), []);
  const close = useCallback(() => setModal(null), []);

  useEffect(() => {
    if (!modal) return undefined;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
    };
  }, [modal, close]);

  return (
    <section id="certifications" className="certifications" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title fade-in">Certifications</h2>
        </Reveal>
        <div className="cert-grid">
          {CERTIFICATIONS.map((c, i) => (
            <CertCard key={c.name} cert={c} index={i} onView={open} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {modal && (
          <motion.div
            className="modal-overlay active"
            id="certificateModal"
            role="dialog"
            aria-modal="true"
            aria-label={`${modal.name} certificate`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.target === e.currentTarget) close();
            }}
          >
            <motion.div
              className="modal-content glass-panel"
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <button className="modal-close" aria-label="Close certificate viewer" onClick={close}>
                <i className="fas fa-times" aria-hidden="true" />
              </button>
              <img src={modal.src} alt={`${modal.name} certificate`} id="modalCertificateImg" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
