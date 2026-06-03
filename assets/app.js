/* ============================================================
   Damian Kowalczyk — Portfolio  ·  app logic
   ============================================================ */
(function () {
  const P = window.PORTFOLIO;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

  let lang = localStorage.getItem('dk_lang') || 'pl';
  let theme = 'modern'; // locked — single blue direction
  let heroVariant = 'bg'; // locked — portrait-in-background layout

  const esc = (s) => String(s).replace(/[&<>]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
  const t = (key) => (P.ui[lang] && P.ui[lang][key]) || key;

  /* ---- ICONS ---- */
  const icons = {
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.79-4.57 5.05.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="4.5" width="19" height="15" rx="2.5"/><path d="m3 6 9 6.5L21 6"/></svg>',
    arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    arrowDown: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M6 13l6 6 6-6"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 18-6-6 6-6M16 6l6 6-6 6"/></svg>'
  };

  /* ---- RENDER: dynamic content ---- */
  function renderStats() {
    $('#stats-grid').innerHTML = P.stats.map((s, i) => `
      <div class="stat reveal reveal-d${i}">
        <b>${esc(s.value)}</b>
        <span>${esc(s.label[lang])}</span>
      </div>`).join('');
  }

  function renderAbout() {
    $('#about-body').innerHTML = P.about[lang].map(p => `<p>${esc(p)}</p>`).join('');
    $('#about-facts').innerHTML =
      P.about.facts.map(f => `
        <div class="fact"><span class="k">${esc(f.k[lang])}</span><span class="v">${esc(f.v[lang])}</span></div>`).join('') +
      `<div class="facts-code"><span class="c"># ${lang === 'pl' ? 'aktualny status' : 'current status'}</span><br>
        <span class="key">status</span> = <span class="str">"available"</span><br>
        <span class="key">focus</span> = <span class="str">"python_backend"</span></div>`;
  }

  function renderSkills() {
    $('#skills-grid').innerHTML = P.skills.map((s, i) => `
      <div class="skill-card reveal reveal-d${i % 3}">
        <h3>${esc(s.category[lang])}</h3>
        <div class="chips">${s.items.map(it => `<span class="chip">${esc(it)}</span>`).join('')}</div>
      </div>`).join('');
  }

  function renderProjects() {
    $('#project-list').innerHTML = P.projects.map(pr => `
      <article class="project reveal">
        <div class="project-main">
          <div class="project-role">${esc(pr.role[lang])}</div>
          <h3>${esc(pr.title)}</h3>
          <p class="project-summary">${esc(pr.summary[lang])}</p>
          <div class="project-tags">${pr.tags.map(tg => `<span class="project-tag">${esc(tg)}</span>`).join('')}</div>
          <ul class="project-highlights">${pr.highlights[lang].map(h => `<li>${esc(h)}</li>`).join('')}</ul>
          <div class="project-foot">
            <a class="btn btn-ghost btn-sm" href="${P.links.github}" target="_blank" rel="noopener">${icons.code}<span>${t('cta_code')}</span></a>
          </div>
        </div>
      </article>`).join('');
  }

  /* ---- RENDER: static i18n strings ---- */
  function applyI18n() {
    $$('[data-i18n]').forEach(el => { el.textContent = t(el.getAttribute('data-i18n')); });
    document.documentElement.lang = lang;
    // hero
    $('#hero-tagline').textContent = P.hero.tagline[lang];
    // lang buttons
    $$('.lang button').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  }

  function renderAll() {
    applyI18n();
    renderStats();
    renderAbout();
    renderSkills();
    renderProjects();
    observeReveals();
  }

  /* ---- THEME ---- */
  function setTheme(next) {
    theme = next;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('dk_theme', theme);
    $$('.theme-switch .swatch').forEach(s => s.classList.toggle('active', s.dataset.theme === theme));
  }

  /* ---- AMBIENT PYTHON CODE STREAM ---- */
  function highlightPy(line) {
    const patterns = [
      ['com', /^#.*/],
      ['str', /^(?:"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|f"(?:[^"\\]|\\.)*")/],
      ['kw', /^\b(?:async|await|def|return|class|import|from|if|elif|else|for|in|with|as|None|True|False|raise|try|except|finally|yield|lambda|and|or|not|pass|self)\b/],
      ['num', /^\b\d+(?:\.\d+)?\b/]
    ];
    let out = '', i = 0;
    while (i < line.length) {
      const rest = line.slice(i);
      let matched = false;
      for (const [cls, re] of patterns) {
        const m = rest.match(re);
        if (m && m.index === 0) {
          out += `<span class="tok-${cls}">${esc(m[0])}</span>`;
          i += m[0].length; matched = true; break;
        }
      }
      if (!matched) { out += esc(line[i]); i++; }
    }
    return out;
  }

  function buildStream(box, codeA, codeB) {
    if (!box) return;
    const render = (code) => code.split('\n').map(highlightPy).join('\n');
    const blkA = render(codeA) + '\n\n\n\n';
    const blkB = render(codeB) + '\n\n\n\n';
    box.innerHTML = `<div class="cols">
      <div class="code-col a"><pre class="track">${blkA}${blkA}</pre></div>
      <div class="code-col b"><pre class="track">${blkB}${blkB}</pre></div>
    </div>`;
  }

  function buildCodeStream() {
    const A = `from fastapi import APIRouter, Depends, HTTPException
from app.core.security import create_access_token, verify_totp
from app.schemas import LoginIn, TokenPair

router = APIRouter(prefix="/auth", tags=["auth"])

@router.post("/login", response_model=TokenPair)
async def login(data: LoginIn, users=Depends(get_users)):
    user = await users.by_email(data.email)
    if not user or not user.verify(data.password):
        raise HTTPException(401, "invalid credentials")
    if user.mfa_enabled and not verify_totp(user, data.otp):
        raise HTTPException(403, "mfa required")
    access = create_access_token(sub=user.id, role=user.role)
    refresh = create_refresh_token(sub=user.id)
    return TokenPair(access=access, refresh=refresh)`;

    const B = `import asyncio
from concurrent.futures import ThreadPoolExecutor
import httpx

pool = ThreadPoolExecutor(max_workers=16)

async def fan_out(targets: list[str]) -> list[dict]:
    async with httpx.AsyncClient(timeout=5.0) as client:
        tasks = [client.get(url) for url in targets]
        responses = await asyncio.gather(*tasks)
    return [r.json() for r in responses]

# 75% faster service-to-service calls
async def aggregate(user_id: str):
    data = await fan_out(service_urls(user_id))
    return merge(data)`;

    // Different snippets for the hero stream
    const C = `from pydantic import BaseModel, EmailStr, Field

class UserIn(BaseModel):
    email: EmailStr
    password: str = Field(min_length=8)
    role: str = "member"

class Course(BaseModel):
    id: str
    title: str
    published: bool = False
    tags: list[str] = []

    class Config:
        from_attributes = True`;

    const D = `from functools import lru_cache
from app.repositories import UserRepository

@lru_cache
def get_settings() -> Settings:
    return Settings()

async def get_current_user(token: str = Depends(oauth2)):
    payload = decode_token(token)
    user = await UserRepository().get(payload.sub)
    if user is None:
        raise HTTPException(401, "unauthorized")
    return user`;

    buildStream($('#code-stream'), A, B);
    buildStream($('#code-stream-hero'), C, D);
  }

  /* ---- HERO VARIANT ---- */
  function setHeroVariant(next) {
    heroVariant = next;
    const hero = $('#top');
    if (hero) hero.setAttribute('data-variant', heroVariant);
    localStorage.setItem('dk_hero', heroVariant);
    $$('.hvt-btns button').forEach(b => b.classList.toggle('active', b.dataset.variant === heroVariant));
  }

  /* ---- LANG ---- */
  function setLang(next) {
    if (next === lang) return;
    lang = next;
    localStorage.setItem('dk_lang', lang);
    renderAll();
  }

  /* ---- SCROLL REVEAL ---- */
  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    }
    $$('.reveal:not(.in)').forEach(el => io.observe(el));
  }

  /* ---- NAV scrolled ---- */
  function initNav() {
    const nav = $('#nav');
    const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- Build contact links (conditional email) ---- */
  function buildContact() {
    const box = $('#contact-links');
    const cards = [];
    cards.push(`<a class="contact-card" href="${P.links.linkedin}" target="_blank" rel="noopener">
      ${icons.linkedin}<span><span class="cc-label">LinkedIn</span><span class="cc-val">Damian Kowalczyk</span></span></a>`);
    cards.push(`<a class="contact-card" href="${P.links.github}" target="_blank" rel="noopener">
      ${icons.github}<span><span class="cc-label">GitHub</span><span class="cc-val">@DamianKowalczykDK</span></span></a>`);
    if (P.links.email) {
      cards.push(`<a class="contact-card" href="mailto:${P.links.email}">
        ${icons.mail}<span><span class="cc-label" data-i18n="contact_email_label">${t('contact_email_label')}</span><span class="cc-val">${esc(P.links.email)}</span></span></a>`);
    }
    box.innerHTML = cards.join('');
    // footer social
    $('#footer-social').innerHTML =
      `<a href="${P.links.github}" target="_blank" rel="noopener" aria-label="GitHub">${icons.github}</a>
       <a href="${P.links.linkedin}" target="_blank" rel="noopener" aria-label="LinkedIn">${icons.linkedin}</a>`;
  }

  /* ---- Inject icons into static CTAs ---- */
  function injectIcons() {
    $$('[data-icon]').forEach(el => { el.insertAdjacentHTML('afterbegin', icons[el.getAttribute('data-icon')] || ''); });
  }

  /* ---- INIT ---- */
  function init() {
    setTheme(theme);
    setHeroVariant(heroVariant);
    buildCodeStream();
    injectIcons();
    buildContact();
    renderAll();
    initNav();

    $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
    $$('.hvt-btns button').forEach(b => b.addEventListener('click', () => setHeroVariant(b.dataset.variant)));

    // smooth-scroll for nav anchors (offset for fixed nav)
    $$('a[href^="#"]').forEach(a => a.addEventListener('click', (ev) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const tgt = $(id);
        if (tgt) { ev.preventDefault(); window.scrollTo({ top: tgt.offsetTop - 60, behavior: 'smooth' }); }
      }
    }));
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
