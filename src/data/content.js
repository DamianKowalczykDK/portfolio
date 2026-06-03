export const PORTFOLIO = {
  links: {
    github: "https://github.com/DamianKowalczykDK",
    linkedin: "https://www.linkedin.com/in/damian-kowalczyk-283a4232a",
    email: ""
  },

  ui: {
    pl: {
      nav_about: "O mnie",
      nav_skills: "Technologie",
      nav_projects: "Projekty",
      nav_contact: "Kontakt",
      hero_kicker: "Otwarty na nowe wyzwania",
      hero_role: "Python Backend Developer",
      cta_projects: "Zobacz projekty",
      cta_contact: "Skontaktuj się",
      cta_github: "GitHub",
      cta_linkedin: "LinkedIn",
      cta_code: "Kod źródłowy",
      label_about: "O mnie",
      label_skills: "Stack technologiczny",
      label_projects: "Wybrane projekty",
      label_contact: "Kontakt",
      about_heading: "Inżynierskie podejście do kodu, biznesowe rozumienie problemu",
      skills_heading: "Czym się posługuję na co dzień",
      projects_heading: "Backend, który działa pod obciążeniem",
      projects_sub: "Projekty własne — architektura, bezpieczeństwo i wydajność w praktyce.",
      contact_heading: "Porozmawiajmy o współpracy",
      contact_sub: "Projektuję backend, który jest bezpieczny, skalowalny i gotowy na produkcję. Chętnie pokażę, jak mogę wzmocnić Twój zespół i Wasze produkty.",
      contact_email_label: "Napisz wiadomość",
      footer_built: "Zaprojektowane i zbudowane z dbałością o szczegóły.",
    },
    en: {
      nav_about: "About",
      nav_skills: "Tech",
      nav_projects: "Projects",
      nav_contact: "Contact",
      hero_kicker: "Open to new challenges",
      hero_role: "Python Backend Developer",
      cta_projects: "View projects",
      cta_contact: "Get in touch",
      cta_github: "GitHub",
      cta_linkedin: "LinkedIn",
      cta_code: "Source code",
      label_about: "About me",
      label_skills: "Tech stack",
      label_projects: "Selected work",
      label_contact: "Contact",
      about_heading: "An engineering mindset for code, a business understanding of the problem",
      skills_heading: "What I work with day to day",
      projects_heading: "Backend that holds up under load",
      projects_sub: "Personal projects — architecture, security and performance in practice.",
      contact_heading: "Let's talk about working together",
      contact_sub: "I build backend systems that are secure, scalable and production-ready. I'd be glad to show how I can strengthen your team and your products.",
      contact_email_label: "Send a message",
      footer_built: "Designed and built with attention to detail.",
    }
  },

  hero: {
    name: "Damian Kowalczyk",
    tagline: {
      pl: "Projektuję bezpieczne, skalowalne i asynchroniczne REST API w oparciu o FastAPI oraz Flask. Łączę inżynierskie podejście do kodu z praktycznym rozumieniem procesów biznesowych — wyniesionym z prowadzenia własnej firmy.",
      en: "I design secure, scalable and asynchronous REST APIs built on FastAPI and Flask. I pair an engineering approach to code with a practical understanding of business processes — gained from running my own company."
    }
  },

  stats: [
    {
      value: "2 lata",
      label: {
        pl: "doświadczenia w Pythonie — projekty backendowe i własne wdrożenia",
        en: "of Python experience — backend projects and personal deployments"
      }
    },
    {
      value: "4+",
      label: {
        pl: "wdrożone projekty backendowe oparte o mikroserwisy",
        en: "shipped backend projects built on microservices"
      }
    },
    {
      value: "75%",
      label: {
        pl: "wzrost wydajności komunikacji między mikroserwisami (ThreadPoolExecutor)",
        en: "performance gain in inter-microservice communication (ThreadPoolExecutor)"
      }
    },
    {
      value: "Clean",
      label: {
        pl: "Clean Architecture, SOLID, mypy + ruff + pytest",
        en: "Clean Architecture, SOLID, mypy + ruff + pytest"
      }
    }
  ],

  about: {
    pl: [
      "Prowadziłem własną firmę — i właśnie tam nauczyłem się patrzeć na każdy proces przez pryzmat efektywności, kosztu i realnej wartości dla biznesu. To doświadczenie dziś przenoszę do kodu.",
      "Dziś specjalizuję się w backendzie w Pythonie: projektuję czyste, warstwowe architektury (Clean Architecture, SOLID), buduję asynchroniczne API i dbam o bezpieczeństwo oraz wydajność. Stawiam na kod, który jest łatwy do utrzymania, otestowany i gotowy na produkcję.",
      "Łączę kompetencje techniczne z rozumieniem potrzeb biznesowych — dzięki temu dostarczam rozwiązania, które nie tylko działają, ale realnie wspierają cele zespołu i skalują się wraz z produktem."
    ],
    en: [
      "I ran my own company — and that is exactly where I learned to look at every process through the lens of efficiency, cost and real business value. I bring that perspective to code today.",
      "Now I specialize in Python backend: I design clean, layered architectures (Clean Architecture, SOLID), build asynchronous APIs and care about security and performance. I focus on code that is maintainable, tested and production-ready.",
      "I combine technical skill with an understanding of business needs — delivering solutions that don't just work, but genuinely support the team's goals and scale with the product."
    ],
    facts: [
      { k: { pl: "Lokalizacja", en: "Location" }, v: { pl: "Polska · zdalnie / hybrydowo", en: "Poland · remote / hybrid" } },
      { k: { pl: "Specjalizacja", en: "Focus" }, v: { pl: "Backend · API · Mikroserwisy", en: "Backend · APIs · Microservices" } },
      { k: { pl: "Języki", en: "Languages" }, v: { pl: "Polski, Angielski", en: "Polish, English" } }
    ]
  },

  skills: [
    { category: { pl: "Języki", en: "Languages" }, items: ["Python"] },
    { category: { pl: "Architektura i Frameworki", en: "Architecture & Frameworks" }, items: ["FastAPI", "Flask", "REST API", "Mikroserwisy", "SOLID", "Clean Architecture"] },
    { category: { pl: "Bazy danych", en: "Databases" }, items: ["MySQL", "MongoDB", "SQLAlchemy", "Beanie ODM", "Alembic", "Optymalizacja zapytań"] },
    { category: { pl: "DevOps i ekosystem", en: "DevOps & Ecosystem" }, items: ["Docker", "Docker Compose", "Kubernetes", "Nginx", "Git", "Linux", "Poetry", "Pipenv"] },
    { category: { pl: "Jakość kodu i testy", en: "Code quality & Testing" }, items: ["Pytest", "Pydantic", "mypy", "ruff", "Clean Code"] },
    { category: { pl: "Bezpieczeństwo i integracje", en: "Security & Integrations" }, items: ["JWT", "MFA (TOTP)", "RBAC", "HTTPX", "Fakturownia API", "ElevenLabs API"] },
    { category: { pl: "AI / LLM / NLP", en: "AI / LLM / NLP" }, items: ["OpenAI", "Ollama", "Gemini", "LangChain", "Prompt engineering", "BeautifulSoup"] }
  ],

  projects: [
    {
      id: "auth",
      title: "Auth Microservices System",
      role: { pl: "Python Backend Developer · projekt własny", en: "Python Backend Developer · personal project" },
      summary: {
        pl: "System uwierzytelniania oparty o architekturę mikroserwisową z centralnym API Gateway.",
        en: "Authentication system built on a microservice architecture with a central API Gateway."
      },
      tags: ["FastAPI", "MongoDB", "JWT", "MFA", "RBAC", "HTTPX", "Docker"],
      highlights: {
        pl: [
          "Backend w pełni asynchroniczny (FastAPI async) z izolowanym Users Service i API Gateway.",
          "Uwierzytelnianie JWT (access + refresh) oraz HTTP-only cookies; MFA (TOTP) i kontrola dostępu RBAC.",
          "Pełny przepływ: login → MFA → wydanie tokenów → odświeżanie. Komunikacja serwisów przez HTTPX.",
          "Clean Architecture (API / Services / Repositories / Domain), MongoDB (Beanie ODM), Docker Compose."
        ],
        en: [
          "Fully asynchronous backend (FastAPI async) with an isolated Users Service and API Gateway.",
          "JWT authentication (access + refresh) and HTTP-only cookies; MFA (TOTP) and RBAC access control.",
          "Full flow: login → MFA → token issuance → refresh. Inter-service communication over HTTPX.",
          "Clean Architecture (API / Services / Repositories / Domain), MongoDB (Beanie ODM), Docker Compose."
        ]
      }
    },
    {
      id: "course",
      title: "Course Platform Microservice",
      role: { pl: "Python Backend Developer · projekt własny", en: "Python Backend Developer · personal project" },
      summary: {
        pl: "Rozproszona architektura backendowa do obsługi nowoczesnej platformy e-learningowej.",
        en: "Distributed backend architecture powering a modern e-learning platform."
      },
      tags: ["Flask", "MySQL", "MongoDB", "SQLAlchemy", "APScheduler", "Nginx", "Docker"],
      highlights: {
        pl: [
          "Endpointy we Flasku z rygorystyczną walidacją (Pydantic) i wielopoziomową autoryzacją (JWT + MFA).",
          "Hybrydowy model danych: MySQL (SQLAlchemy / Alembic) na transakcje, MongoDB na dane niestrukturalne i logi.",
          "Asynchroniczna aktualizacja statusów kursów w tle (APScheduler) — koniec z ręcznym zarządzaniem stanem.",
          "W pełni odizolowane środowisko produkcyjne: Docker, Docker Compose, Nginx."
        ],
        en: [
          "Flask endpoints with rigorous validation (Pydantic) and multi-level authorization (JWT + MFA).",
          "Hybrid data model: MySQL (SQLAlchemy / Alembic) for transactions, MongoDB for unstructured data and logs.",
          "Background course-status updates (APScheduler) — eliminating manual state management entirely.",
          "Fully isolated, deployment-ready production environment: Docker, Docker Compose, Nginx."
        ]
      }
    },
    {
      id: "insurance",
      title: "Insurance Client Manager",
      role: { pl: "Python Developer · projekt własny", en: "Python Developer · personal project" },
      summary: {
        pl: "Wydajny system do automatyzacji przetwarzania danych ubezpieczeniowych i rozliczeń.",
        en: "An efficient system automating insurance data processing and settlements."
      },
      tags: ["pandas", "openpyxl", "mypy", "Pytest", "REST API"],
      highlights: {
        pl: [
          "Wysoko wydajne skrypty ETL w pandas: agregacja, transformacja i analiza dużych wolumenów danych klienckich.",
          "Programistyczne generowanie raportów finansowych (openpyxl) i asynchroniczne powiadomienia mailowe.",
          "Wysoka jakość kodu: ścisłe typowanie (mypy), linting (ruff) i kompleksowe pokrycie testami jednostkowymi (Pytest).",
          "Integracja z systemem księgowym przez RESTful Fakturownia API."
        ],
        en: [
          "High-performance pandas ETL scripts: aggregation, transformation and analysis of large client datasets.",
          "Programmatic financial reporting (openpyxl) and asynchronous email notifications.",
          "High code quality: strict typing (mypy), linting (ruff) and comprehensive unit-test coverage (Pytest).",
          "Integration with an accounting system via the RESTful Fakturownia API."
        ]
      }
    },
    {
      id: "summarizer",
      title: "AI Web Summarizer",
      role: { pl: "Python Developer · projekt własny", en: "Python Developer · personal project" },
      summary: {
        pl: "Pipeline do ekstrakcji tekstu ze stron i generowania ustrukturyzowanych podsumowań przez LLM.",
        en: "A pipeline that extracts text from websites and generates structured summaries with LLMs."
      },
      tags: ["OpenAI", "Ollama", "BeautifulSoup", "CLI", "YAML", "pytest"],
      highlights: {
        pl: [
          "Web scraping i czysta ekstrakcja tekstu (fetch_page_text) — bez skryptów, stylów i nawigacji.",
          "Wielokrokowy pipeline AI (SummaryService): analiza, formatowanie i serializacja, z konfiguracją liczby punktów i języka.",
          "Eksport w wielu formatach (TXT, JSON, CSV, YAML, HTML) oraz prompty definiowane w YAML.",
          "Intuicyjne CLI; ścisłe typowanie (mypy) i testy (pytest) gwarantujące niezawodność."
        ],
        en: [
          "Web scraping and clean text extraction (fetch_page_text) — stripping scripts, styles and navigation.",
          "Multi-step AI pipeline (SummaryService): analysis, formatting and serialization, with configurable point count and language.",
          "Export to multiple formats (TXT, JSON, CSV, YAML, HTML) and YAML-defined prompts.",
          "Intuitive CLI; strict typing (mypy) and tests (pytest) ensuring reliability."
        ]
      }
    }
  ]
};
