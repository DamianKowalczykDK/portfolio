import { PORTFOLIO } from '../data/content';
import { LinkedinIcon, GithubIcon, MailIcon } from '../icons';

export default function Contact({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;
  const { links } = PORTFOLIO;

  return (
    <section className="contact" id="contact">
      <div className="contact-glow" />
      <div className="wrap">
        <div className="contact-inner">
          <span className="section-label">
            {t('label_contact')}
          </span>
          <h2>{t('contact_heading')}</h2>
          <p>{t('contact_sub')}</p>
          <div className="contact-links">
            <a
              className="contact-card"
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
              <span>
                <span className="cc-label">LinkedIn</span>
                <span className="cc-val">Damian Kowalczyk</span>
              </span>
            </a>
            <a
              className="contact-card"
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
              <span>
                <span className="cc-label">GitHub</span>
                <span className="cc-val">@DamianKowalczykDK</span>
              </span>
            </a>
            {links.email && (
              <a className="contact-card" href={`mailto:${links.email}`}>
                <MailIcon />
                <span>
                  <span className="cc-label">{t('contact_email_label')}</span>
                  <span className="cc-val">{links.email}</span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
