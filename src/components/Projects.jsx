import { PORTFOLIO } from '../data/content';
import { CodeIcon } from '../icons';

export default function Projects({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div className="projects-head">
          <span className="section-label">{t('label_projects')}</span>
          <h2 className="section-heading reveal">{t('projects_heading')}</h2>
          <p className="section-sub reveal reveal-d1">{t('projects_sub')}</p>
        </div>
        <div className="project-list">
          {PORTFOLIO.projects.map((pr) => (
            <article key={pr.id} className="project reveal">
              <div className="project-main">
                <div className="project-role">{pr.role[lang]}</div>
                <h3>{pr.title}</h3>
                <p className="project-summary">{pr.summary[lang]}</p>
                <div className="project-tags">
                  {pr.tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <ul className="project-highlights">
                  {pr.highlights[lang].map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
                <div className="project-foot">
                  <a
                    className="btn btn-ghost btn-sm"
                    href={PORTFOLIO.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <CodeIcon />
                    <span>{t('cta_code')}</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
