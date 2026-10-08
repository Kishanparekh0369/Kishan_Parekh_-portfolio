import { useState } from 'react';
import Reveal from '../Reveal/Reveal';
import { CONTACT, SOCIALS } from '../../data/portfolio';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: '' }));
  };

  const handleTransmit = () => {
    const next = {};
    if (!form.name.trim()) next.name = true;
    if (!form.email.trim()) next.email = true;
    if (!form.message.trim()) next.message = true;
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSent(false);
      return;
    }
    const text =
      `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${encodeURIComponent(form.name.trim())}%0A` +
      `*Email:* ${encodeURIComponent(form.email.trim())}%0A` +
      `*Subject:* ${encodeURIComponent(form.subject.trim() || 'Not specified')}%0A%0A` +
      `*Message:*%0A${encodeURIComponent(form.message.trim())}`;
    window.open(`https://wa.me/91${CONTACT.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    setSent(true);
    window.setTimeout(() => setSent(false), 4000);
  };

  const invalid = (key) => (errors[key] ? { borderColor: '#EF4444' } : undefined);

  return (
    <section id="contact" className="contact">
      <div className="container">
        <Reveal>
          <h2 className="section-title">Initiate Contact</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="contact-wrap glass-panel">
            <div className="contact-info">
              <h3>Let&apos;s architect something extraordinary.</h3>
              <p>
                I am actively open to internships, impactful open-source collaborations, and professional freelance
                opportunities. Let&apos;s connect.
              </p>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt" aria-hidden="true" />
                </div>
                <span className="contact-text">{CONTACT.location}</span>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-envelope" aria-hidden="true" />
                </div>
                <a href={`mailto:${CONTACT.email}`} className="contact-text">
                  {CONTACT.email}
                </a>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <i className="fas fa-phone-alt" aria-hidden="true" />
                </div>
                <a href={CONTACT.phoneHref} className="contact-text">
                  {CONTACT.phone}
                </a>
              </div>

              <div className="social-links">
                {SOCIALS.map((s) => (
                  <a key={s.title} href={s.href} target="_blank" rel="noopener noreferrer" title={s.title} aria-label={s.title}>
                    <i className={s.icon} aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form">
              <form id="contactForm" onSubmit={(e) => e.preventDefault()} noValidate>
                <div className="form-group">
                  <label htmlFor="name">IDENTITY</label>
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    placeholder="Enter your name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={set('name')}
                    style={invalid('name')}
                    aria-invalid={Boolean(errors.name)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">RETURN ADDRESS</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email address"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={set('email')}
                    style={invalid('email')}
                    aria-invalid={Boolean(errors.email)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">DESIGNATION</label>
                  <input
                    type="text"
                    id="subject"
                    className="form-control"
                    placeholder="What is this regarding?"
                    autoComplete="off"
                    value={form.subject}
                    onChange={set('subject')}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">TRANSMISSION DATA</label>
                  <textarea
                    id="message"
                    className="form-control"
                    placeholder="Type your message here..."
                    required
                    value={form.message}
                    onChange={set('message')}
                    style={invalid('message')}
                    aria-invalid={Boolean(errors.message)}
                  />
                </div>
                <button
                  type="button"
                  id="whatsappBtn"
                  className="btn btn-success"
                  style={{ width: '100%', marginTop: '1rem' }}
                  onClick={handleTransmit}
                >
                  <i className="fab fa-whatsapp fa-lg" aria-hidden="true" /> Secure Transmit via WhatsApp
                </button>
                <p role="status" aria-live="polite" style={{ minHeight: '1.4em', fontSize: '0.88rem', color: errors.name || errors.email || errors.message ? '#EF4444' : 'var(--success-color)' }}>
                  {errors.name || errors.email || errors.message
                    ? 'Please fill out all mandatory fields (Identity, Return Address, and Transmission Data).'
                    : sent
                      ? 'Opening WhatsApp with your transmission…'
                      : ''}
                </p>
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
