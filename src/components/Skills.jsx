import { PORTFOLIO } from '../data/content';

export default function Skills({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <div className="skills-head">
          <div>
            <span className="section-label">{t('label_skills')}</span>
            <h2 className="section-heading reveal">{t('skills_heading')}</h2>
          </div>
        </div>
        <div className="skills-grid">
          {PORTFOLIO.skills.map((s, i) => (
            <div key={i} className={`skill-card reveal reveal-d${i % 3}`}>
              <h3>{s.category[lang]}</h3>
              <div className="chips">
                {s.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
