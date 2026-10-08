import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { SERVICES } from '../../data/portfolio';

function ServiceCard({ service, index }) {
  const ref = useTilt(3, 'translateY(-4px)');
  return (
    <Reveal delay={0.08 * (index % 4)}>
      <div className="service-card glass-panel tilt-3d" ref={ref}>
        <span className="shine-sweep" aria-hidden="true" />
        <div className="service-icon-box">
          <i className={service.icon} aria-hidden="true" />
        </div>
        <h3 className="service-title">{service.title}</h3>
        <p className="service-desc">{service.desc}</p>
        <div className="service-badges">
          {service.badges.map((b) => (
            <span key={b} className="tech-pill">{b}</span>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="services" style={{ padding: 'var(--section-padding)' }}>
      <div className="container">
        <Reveal>
          <h2 className="section-title">Services &amp; Solutions</h2>
        </Reveal>
        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
