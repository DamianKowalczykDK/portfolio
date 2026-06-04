import { useEffect, useState } from 'react';
import { PORTFOLIO } from '../data/content';
import { handleAnchor } from '../utils/scroll';

export default function Nav({ lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = (key) => PORTFOLIO.ui[lang][key] || key;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = (e, href) => {
    setMenuOpen(false);
    if (href) handleAnchor(e, href);
  };

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={(e) => handleAnchor(e, '#top')}>
          <span className="brand-dot" />
          <b>Damian Kowalczyk</b><span>· py</span>
        </a>
        <div className="nav-links">
          <a href="#about" onClick={(e) => handleAnchor(e, '#about')}>{t('nav_about')}</a>
          <a href="#skills" onClick={(e) => handleAnchor(e, '#skills')}>{t('nav_skills')}</a>
          <a href="#projects" onClick={(e) => handleAnchor(e, '#projects')}>{t('nav_projects')}</a>
          <a href="#contact" onClick={(e) => handleAnchor(e, '#contact')}>{t('nav_contact')}</a>
        </div>
        <div className="nav-tools">
          <div className="lang">
            <button
              className={lang === 'pl' ? 'active' : ''}
              onClick={() => setLang('pl')}
            >PL</button>
            <button
              className={lang === 'en' ? 'active' : ''}
              onClick={() => setLang('en')}
            >EN</button>
          </div>
          <a
            className="btn btn-primary btn-sm nav-cta"
            href="#contact"
            onClick={(e) => handleAnchor(e, '#contact')}
          >{t('cta_contact')}</a>
          <button
            className={`nav-hamburger${menuOpen ? ' active' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
        <a href="#about" onClick={(e) => closeMenu(e, '#about')}>{t('nav_about')}</a>
        <a href="#skills" onClick={(e) => closeMenu(e, '#skills')}>{t('nav_skills')}</a>
        <a href="#projects" onClick={(e) => closeMenu(e, '#projects')}>{t('nav_projects')}</a>
        <a href="#contact" onClick={(e) => closeMenu(e, '#contact')}>{t('nav_contact')}</a>
      </div>
      <div
        className={`nav-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />
    </nav>
  );
}
