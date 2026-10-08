import Reveal from '../Reveal/Reveal';
import useTilt from '../../hooks/useTilt';
import { PROJECTS } from '../../data/portfolio';

function ProjectCard({ project, index }) {
  const ref = useTilt(3, 'translateY(-8px)');
  return (
    <Reveal delay={0.08 * (index % 2)}>
      <article className="project-card tilt-3d" ref={ref}>
        <div className="project-img-wrapper">
          <img src={project.img} alt={project.alt} loading="lazy" />
          <div className="project-shine" aria-hidden="true" />
        </div>
        <div className="project-content glass-panel">
          <h3>{project.title}</h3>
          <div className="tech-stack">
            {project.tech.map((t) => (
              <span key={t} className="tech-pill">{t}</span>
            ))}
          </div>
          <p>{project.desc}</p>
          <div className="project-links">
            {project.links.map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={`btn ${link.variant}`}>
                <i className={link.icon} aria-hidden="true" /> {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Featured Builds &amp; Projects</h2>
        </Reveal>
        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
