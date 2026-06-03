import { PORTFOLIO } from '../data/content';
import { ArrowIcon } from '../icons';
import { handleAnchor } from '../utils/scroll';
import CodeStream from './CodeStream';

const HERO_CODE_A = `from pydantic import BaseModel, EmailStr, Field

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

const HERO_CODE_B = `from functools import lru_cache
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

const IS_DESKTOP = typeof window !== 'undefined' && window.matchMedia('(min-width: 1281px)').matches;

export default function Hero({ lang }) {
  const t = (key) => PORTFOLIO.ui[lang][key] || key;

  return (
    <header className="hero" id="top" data-variant="bg">
      <div className="hero-bg" />
      <div className="hero-glow" />
      <CodeStream id="code-stream-hero" className="hero-code" codeA={HERO_CODE_A} codeB={HERO_CODE_B} />
      {IS_DESKTOP && (
        <div className="hero-portrait">
          <img src="/photo-natural.png" alt="Damian Kowalczyk" />
        </div>
      )}
      <div className="wrap hero-inner">
        <div className="hero-text">
          <span className="kicker reveal">
            <span className="pulse" />
            <span>{t('hero_kicker')}</span>
          </span>
          <h1 className="reveal reveal-d1">
            Damian<br /><span className="accent">Kowalczyk</span>
          </h1>
          <div className="hero-role reveal reveal-d2">
            <span className="prompt">$</span>
            <span>{t('hero_role')}</span>
            <span className="caret" />
          </div>
          <p className="hero-tagline reveal reveal-d2">{PORTFOLIO.hero.tagline[lang]}</p>
          <div className="hero-cta reveal reveal-d3">
            <a className="btn btn-primary" href="#projects" onClick={(e) => handleAnchor(e, '#projects')}>
              <span>{t('cta_projects')}</span>
              <ArrowIcon />
            </a>
            <a className="btn btn-ghost" href="#contact" onClick={(e) => handleAnchor(e, '#contact')}>
              {t('cta_contact')}
            </a>
          </div>
        </div>
        <div className="hero-media reveal reveal-d2">
          <span className="kicker kicker-mobile">
            <span className="pulse" />
            <span>{t('hero_kicker')}</span>
          </span>
          <div className="photo-card">
            <div className="bar">
              <span className="dot-py" />
              damian_kowalczyk.py
            </div>
            <div className="photo-frame">
              <img src="/photo-natural.png" alt="Damian Kowalczyk" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
