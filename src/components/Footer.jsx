import { PORTFOLIO } from '../data/content';
import { GithubIcon, LinkedinIcon } from '../icons';
import { handleAnchor } from '../utils/scroll';

export default function Footer({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;
  const { links } = PORTFOLIO;

  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <a className="brand" href="#top" onClick={(e) => handleAnchor(e, '#top')}>
          <span className="brand-dot" />
          <b>Damian Kowalczyk</b>
        </a>
        <span className="footer-meta">{t('footer_built')}</span>
        <div className="footer-social">
          <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GithubIcon />
          </a>
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
