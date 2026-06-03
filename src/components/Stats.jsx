import { PORTFOLIO } from '../data/content';

export default function Stats({ lang }) {
  return (
    <section className="stats">
      <div className="wrap">
        <div className="stats-grid">
          {PORTFOLIO.stats.map((s, i) => (
            <div key={i} className={`stat reveal reveal-d${i}`}>
              <b>{s.value}</b>
              <span>{s.label[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
