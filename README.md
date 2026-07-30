<div align="center">

# 🌐 Portfolio Frontend — Alberto Zompantzi

### **React 18.3 + TypeScript 5.9 + Vite 8 · i18n ES/EN · Framer Motion · EmailJS · Cloudflare Pages SPA**

**Production-grade, bilingual personal portfolio SPA. Hero with Devicon stack badges · About tabbed panel (Skills / Experience / Education / Certifications) · 6 Service cards · Project gallery with live links · Hybrid Contact form (Spring Boot persistence + EmailJS delivery). Render cold-start wake-up fire-and-forget on mount. Deployed on Cloudflare Pages SPA edge.**

---

<div>
  <a href="https://albertozompantzi-portfolio.pages.dev/">
    <img src="https://img.shields.io/badge/%F0%9F%8C%90%20LIVE%20SITE-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflarepages&logoColor=white" alt="Cloudflare Pages Live" height="28">
  </a>
  &nbsp;&nbsp;
  <a href="https://albertozompantzi-portfolio.pages.dev/">
    <img src="https://img.shields.io/badge/Health-🟢%20online-success?style=for-the-badge" alt="Health" height="28">
  </a>
  &nbsp;&nbsp;
  <a href="https://albertozompantzi-portfolio.pages.dev/sitemap.xml">
    <img src="https://img.shields.io/badge/SEO-Sitemap%20%2B%20Robots-FF7139?style=for-the-badge&logo=googlechrome&logoColor=white" alt="SEO" height="28">
  </a>
</div>

<br>

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8.0.1-646CFF?logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11.1-FF4088?logo=framer&logoColor=white)
![i18next](https://img.shields.io/badge/i18n-ES%20%2F%20EN-7C3AED?logo=i18next)
![Axios](https://img.shields.io/badge/HTTP-Axios%201.14-5A29E4?logo=axios)
![EmailJS](https://img.shields.io/badge/Email-EmailJS%204.4-22C55E)
![Cloudflare](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?logo=cloudflarepages&logoColor=white)
![Lucide](https://img.shields.io/badge/Icons-Lucide%20React-242938?logo=lucide&logoColor=white)
![ESLint](https://img.shields.io/badge/Lint-ESLint%209%20Flat-4B32C3?logo=eslint&logoColor=white)
![Tailwind?](https://img.shields.io/badge/Design%20System-CSS%20Variables-38B2AC)
![Devicon](https://img.shields.io/badge/Stack%20Badges-Devicon-4479A1)
![GitHub last commit](https://img.shields.io/github/last-commit/Alberto-Zompantzi/portfolio-frontend?label=Last%20commit)

</div>

---

<p align="center">
  <img src="https://ik.imagekit.io/seefqe4nn/logos/Logo.webp" alt="Portfolio Frontend Hero Preview" style="max-width: 60%; border-radius: 12px;">
</p>

---

## Architecture Grade Summary

Portfolio Frontend is a **strict single-page application (SPA)** built with **React + TypeScript**, bundled by Vite, and deployed to **Cloudflare Pages edge network** with SPA fallback redirects (`_redirects` `/* → /index.html  200`). The app follows **component-scoped colocation** (each `.tsx` lives with its matching `.css`), uses **i18next browser language detection** with localStorage/cookie persistence for ES/EN bilingual UX, and ships a **hybrid Contact pipeline** that writes to the Spring Boot backend **first**, then delivers the email copy via EmailJS — giving both audit-persistent records and instant notification.

### Engineering Standouts

- **Cold-Start Wake-Up Pattern:** `wakeupBackend()` fires on App mount as fire-and-forget (silent catch) against Render `/api/v1/contactos/health` — defeats the free-tier cold start so the first real `saveContact()` call is fast.
- **Backend URL Auto-Switching:** `services/api.ts` computes `isLocal` from `window.location.hostname` (`localhost` / `127.0.0.1`) and swaps base URL between `localhost:8080` and Render production host — NO `.env` switching required.
- **Bilingual Zero-Flash i18n:** `LanguageDetector` runs detection order `querystring → cookie → localStorage → navigator → htmlTag` with `caches: [localStorage, cookie]`; default `es` + fallback `es`.
- **Tabbed About Panel with AnimatePresence:** About uses Framer Motion `AnimatePresence mode="wait"` so only one active tab (Skills / Experience / Education / Certifications) mounts with enter/exit y-offset transitions.
- **Colocated CSS Modules (Flat Pattern):** Each component imports its own `.css` sibling — no cascade leak risk, no Tailwind overhead, and theme tokens come from a single `assets/variables.css` import.
- **SEO Baseline Preflighted:** Full `<head>` meta (title / description / keywords / canonical / OG / Twitter Card 1200×630 og-preview) + `robots.txt` + `sitemap.xml` + Google Search Console domain ownership verification static file — Cloudflare Pages crawls on edge.

---

## Project Badges Row

![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?logo=vite&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-9%20Flat-4B32C3?logo=eslint&logoColor=white) ![TS-ESLint](https://img.shields.io/badge/typescript--eslint-8.57-3178C6) ![react-hooks](https://img.shields.io/badge/react--hooks-7.0-CA4245) ![react-refresh](https://img.shields.io/badge/react--refresh-0.5-A979FF) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11.11-FF4088) ![i18next](https://img.shields.io/badge/i18next-26.0-7C3AED?logo=i18next) ![react-i18next](https://img.shields.io/badge/react--i18next-17.0-7C3AED) ![Lucide](https://img.shields.io/badge/Lucide-0.475-242938?logo=lucide&logoColor=white) ![EmailJS](https://img.shields.io/badge/EmailJS-4.4-22C55E) ![Axios](https://img.shields.io/badge/Axios-1.14-5A29E4) ![Devicon](https://img.shields.io/badge/Devicon-Latest-4479A1) ![Cloudflare](https://img.shields.io/badge/Cloudflare%20Pages-Edge-F38020?logo=cloudflarepages&logoColor=white) ![SPA Redirects](https://img.shields.io/badge/SPA-_%2F%2A%20200-646CFF) ![SEO](https://img.shields.io/badge/SEO-OG%2FTwitter%2FRobots%2FSitemap-FF7139)

---

## 🚀 Core Features Breakdown

| Section                    | Feature                                   | Technical Pattern                                                                                                    |
| -------------------------- | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **App Shell**              | 7-section single-page flow                | App composes Navbar → (Hero → About → Services → Projects → Contact) → Footer in flex column                         |
| **App Shell**              | Render cold-start wake-up on mount        | `useEffect([])` → `wakeupBackend()` → fire-and-forget GET `/health` with silent catch                                |
| **Navbar**                 | Scroll-aware glass header                 | `scrollY >= 80` → toggles `.scroll-header` class                                                                     |
| **Navbar**                 | Responsive mobile drawer                  | `useState(isMenuOpen)` + `Menu`/`X` Lucide icons + overlay close                                                     |
| **Navbar**                 | Bilingual ES/EN toggle                    | `Globe` button → `i18n.changeLanguage(es↔en)` · displays `ES` / `EN` badge                                           |
| **Navbar**                 | CV download & quick-contact CTA           | External Google Drive href for CV + hash-anchor `#contact` CTA                                                       |
| **Navbar**                 | Social quick links                        | GitHub / LinkedIn / WhatsApp inline links (social sidebar)                                                           |
| **Hero**                   | Staggered stack tech badges               | 8 Devicon icons (Java / Spring / React / TS / JS / PG / Docker / AWS) with staggered `delay: 0.2 + i*0.1` on fade-up |
| **Hero**                   | Framer Motion entry                       | Content x-slide from -50 · Blob image scale 0.8 → 1 · both 0.8s ease                                                 |
| **Hero**                   | Hover interactivity on stack icons        | `whileHover: { scale: 1.2, rotate: 5 }`                                                                              |
| **About**                  | 4-tab content switcher                    | Local `useState activeTab` (skills / experience / education / certifications) · 4 `tabs-button` row                  |
| **About**                  | Smooth tab transitions                    | `AnimatePresence mode="wait"` → y +10/-10 enter/exit · 0.3s duration                                                 |
| **About / Skills**         | 5 skill cards                             | Lucide Code2 / Layout / Database / Cloud / GitBranch → Backend / Frontend / Data / Infra / Workflow                  |
| **About / Experience**     | Linked project list                       | DivertiKids / Casa Zompantzi / Sunnyside cards with live hrefs                                                       |
| **About / Certifications** | Grid of achievement badges                | AWS Cloud Practitioner · Git & GitHub Foundations · Docker & Bash                                                    |
| **Services**               | 6 specialty offering cards                | Backend · Data · Frontend · DevOps · Productivity · AI-assisted — each `whileInView` reveal                          |
| **Projects**               | 4-item portfolio grid                     | Portfolio · DivertiKids · Casa Zompantzi · Sunnyside — each links to live Cloudflare Pages demo                      |
| **Projects**               | Image overlay UX                          | Hover `.portfolio-overlay` → ExternalLink icon gradient                                                              |
| **Projects**               | GitHub CTA footer                         | "View more on GitHub" links to full profile                                                                          |
| **Contact**                | Hybrid dual-pipeline submit               | 1) `saveContact(formData)` → Spring Boot `/api/v1/contactos` POST · 2) `sendEmail(formRef)` → EmailJS SDK            |
| **Contact**                | Client-side required-field pre-validation | Early return with translated warning before axios call                                                               |
| **Contact**                | IsSending state with spinner              | Disables button + Loader2 spinner during async submit                                                                |
| **Contact**                | Auto-clearing feedback toast              | 5s `setTimeout` resets success/error message                                                                         |
| **Contact**                | Direct contact methods                    | WhatsApp `wa.me/<number>?text=...` href pattern + mailto anchor                                                      |
| **i18n**                   | Full ES/EN translation                    | Single `resources` object inlined in `i18n/index.ts` · nav / hero / about / services / portfolio / contact / footer  |
| **i18n**                   | Persistence & detection                   | querystring → cookie → localStorage → browser lang → htmlTag · cached in LS + cookie                                 |
| **Styling**                | Design system via CSS Variables           | `@import "./assets/variables.css"` → root tokens cascaded to all components                                          |
| **Styling**                | Component-scoped CSS                      | 1:1 `.tsx` + `.css` per component (Navbar.css, Hero.css, About.css…)                                                 |
| **Styling**                | Google Fonts Montserrat + Poppins         | `preconnect` hints in `index.html` · Montserrat 900 headings / Poppins 300–700 body                                  |
| **Build**                  | Strict TSConfig                           | `strict: true` + `noUnusedLocals/Params: true` + `verbatimModuleSyntax: true` + `noUncheckedSideEffectImports: true` |
| **Build**                  | ESLint 9 flat config                      | `defineConfig([ globalIgnores + extends: js/recommended · tseslint/recommended · react-hooks · reactRefresh ])`      |
| **Deploy**                 | SPA edge on Cloudflare Pages              | `_redirects` rule `/*  /index.html  200` — no 404 on deep links                                                      |
| **SEO**                    | Meta + OG + Twitter                       | Canonical `albertozompantzi-portfolio.pages.dev` · 1200×630 OG image · `summary_large_image` Twitter card            |
| **SEO**                    | Crawler tooling                           | `robots.txt` (allow all + sitemap URL) · `sitemap.xml` edge-delivered                                                |
| **SEO**                    | Search console claim                      | Google Search Console domain ownership verification static file                                                      |

---

## 📐 Architecture Diagram (ASCII)

```
╔══════════════════════════════════════════════════════════════════════════════════════════╗
║   🌍  BROWSER (V8 Runtime)   ·   React 18 Root → <App />                               ║
╚══════════════════════════════════════════════════════════════════════════════════════════╝
                                              │
                                              ▼
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  🏠  APP SHELL  ·  src/App.tsx  ·  Flex Column Layout                                    │
│                                                                                          │
│   ┌──────────────────────┐    ┌──────────────────────────────────────────────────────┐   │
│   │  <Navbar />          │    │  <main className="main">  (flex: 1 grow)            │   │
│   │  • scroll-header     │    │                                                      │   │
│   │  • mobile drawer     │    │   <Hero />     Devicon Stack + Blob Profile Photo   │   │
│   │  • ES/EN toggle      │    │   <About />    4 Tabs · AnimatePresence transitions│   │
│   │  • CV / CTAs         │    │   <Services /> 6 Cards · whileInView reveals       │   │
│   │  • socials           │    │   <Projects /> 4 Live Project Cards + GitHub CTA   │   │
│   └──────────────────────┘    │   <Contact />  Form + Dual-Pipeline Submit         │   │
│                               └──────────────────────────────────────────────────────┘   │
│   ┌──────────────────────┐    ┌──────────────────────────────────────────────────────┐   │
│   │  <Footer />          │    │  useEffect( [] ) on App mount                        │   │
│   │  • logo · socials    │    │     → wakeupBackend()  [FIRE AND FORGET]            │   │
│   │  • © year dynamic    │    │         → GET /api/v1/contactos/health               │   │
│   └──────────────────────┘    └──────────────────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────┬───────────────────────────────────┘
                                                       │
             ┌─────────────────────────────────────────┼──────────────────────────────────┐
             │                                         │                                  │
             ▼                                         ▼                                  ▼
┌──────────────────────────┐          ┌──────────────────────────────┐      ┌─────────────────────────┐
│  🌐 i18n Layer           │          │  📡 Backend HTTP Layer        │      │  ✉️ Email Delivery SDK   │
│  src/i18n/index.ts       │          │  src/services/api.ts          │      │  src/services/email.ts   │
│                          │          │                              │      │                         │
│  i18next                 │          │  axios.create({               │      │  @emailjs/browser       │
│   + LanguageDetector     │          │    baseURL: BASE + /api/v1    │      │  sendForm(SVC,TPL,form, │
│   + react-i18next init   │          │  })                          │      │          PUBLIC_KEY)    │
│   • resources: {es, en}  │          │                              │      │                         │
│   • default lng: es      │          │  wakeupBackend()             │      │                         │
│   • fallback: es         │          │    GET /contactos/health     │      │                         │
│   • detect order qs→    │          │    (silent catch)             │      │                         │
│     cookie→LS→nav→html  │          │                              │      │                         │
│   • cache LS + cookie    │          │  saveContact(ContactData)    │      │                         │
│                          │          │    POST /contactos (201)     │      │                         │
│  every component uses:   │          │                              │      │                         │
│   const {t, i18n} =      │          │  BASE selector:              │      │                         │
│   useTranslation()       │          │    localhost → :8080         │      │                         │
│                          │          │    otherwise → Render host   │      │                         │
└──────────────────────────┘          └──────────────┬───────────────┘      └────────────┬───────────┘
                                                     │                                     │
                                                     ▼                                     ▼
                        ┌────────────────────────────────────────────┐     ┌────────────────────────────────┐
                        │  🎯  Spring Boot Portfolio Backend         │     │  EmailJS SaaS Delivery        │
                        │     (Render Alpine Docker · Java 21)       │     │  • service template render   │
                        │                                             │     │  • inbox delivery to owner   │
                        │  POST /api/v1/contactos → 201 Created      │     └────────────────────────────────┘
                        │     → save to Postgres (Neon dialect)      │
                        │     → @PrePersist fechaRegistro timestamp  │
                        │                                             │
                        │  GET /api/v1/contactos/health → "ok"       │
                        └────────────────────────────────────────────┘

                                             ╔═════════════════════════════╗
                                             ║  ☁️  DEPLOY TARGET          ║
                                             ╠═════════════════════════════╣
                                             ║  Cloudflare Pages (Edge)    ║
                                             ║  • Build: tsc -b && vite   ║
                                             ║      build                  ║
                                             ║  • _redirects /* → index   ║
                                             ║      .html 200 (SPA)       ║
                                             ║  • robots.txt + sitemap.xml║
                                             ║  • OG 1200×630 preview    ║
                                             ╚═════════════════════════════╝
```

---

## 🧩 Project-Specific Technical Skills

| Category                    | Exact Stack                                                                                                                                                                                                                                                                               |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **UI Framework**            | React 18.3.1 · React-DOM 18.3.1 · `react-jsx` runtime (no pragma)                                                                                                                                                                                                                         |
| **Type System**             | TypeScript ~5.9.3 · `strict: true` · `noUnusedLocals: true` · `noUnusedParameters: true` · `verbatimModuleSyntax: true` · `noUncheckedSideEffectImports: true` · `noFallthroughCasesInSwitch: true` · `moduleResolution: bundler` · `target: ES2023` · `lib: [ES2023, DOM, DOM.Iterable]` |
| **Bundler / Dev Server**    | Vite ^8.0.1 · `@vitejs/plugin-react` ^6.0.1 · ESM-only (`"type": "module"`)                                                                                                                                                                                                               |
| **TypeScript Project Refs** | `tsconfig.json` → references `./tsconfig.app.json` + `./tsconfig.node.json`                                                                                                                                                                                                               |
| **Linting (ESLint 9 Flat)** | `@eslint/js` ^9.39 · `typescript-eslint` ^8.57 · `eslint-plugin-react-hooks` ^7.0 · `eslint-plugin-react-refresh` ^0.5 · `globals` ^17.4 · `globalIgnores(['dist'])`                                                                                                                      |
| **Animations**              | Framer Motion 11.11.1 · `motion` primitives · `AnimatePresence` · `whileInView viewport={{once:true}}` · `initial / animate / whileHover / transition`                                                                                                                                    |
| **Iconography**             | Lucide React ^0.475 · Devicon (CDN devicon.min.css) + Font Awesome 7.0.1 (CDN all.min.css)                                                                                                                                                                                                |
| **i18n / L10n**             | i18next ^26.0 · react-i18next ^17.0 · i18next-browser-languagedetector 8.0.2 · inlined `resources` en+es (no external JSON split)                                                                                                                                                         |
| **HTTP Client**             | Axios ^1.14 · named axios instance (`api`) with `/api/v1` prefix · hostname-based baseURL routing                                                                                                                                                                                         |
| **Transactional Email**     | @emailjs/browser ^4.4 · SDK initialized inline (public key) · `sendForm()` passes raw HTML form ref                                                                                                                                                                                       |
| **CSS Architecture**        | Design tokens in `assets/variables.css` → `index.css` @import → per-component `.css` (Navbar/Hero/About/Services/Projects/Contact/Footer/App) · Google Fonts: Montserrat 900 + Poppins 300/400/500/600/700                                                                                |
| **SEO & Crawling**          | Full meta (title/description/keywords/author/theme-color/canonical) · OG (type/url/title/desc/image) · Twitter `summary_large_image` · `robots.txt` User-agent:\* Allow:/ + Sitemap · `sitemap.xml` · Google Search Console domain ownership verification static file                     |
| **SPA Hosting**             | Cloudflare Pages · `_redirects: /*  /index.html  200` (full SPA fallback on edge workers)                                                                                                                                                                                                 |
| **Form UX Patterns**        | Controlled component state (useState formData) · onChange → spread setter · onSubmit preventDefault + required guard · isSending disabled state + Loader2 spinner · auto-dismiss feedback (5s) · Lucide `Send` submit icon                                                                |
| **Asset Hosting**           | Static `/public/images/*.webp` (profile, about, portfolio items, og-preview, Logo, Dark) · SVG favicon + icons.svg                                                                                                                                                                        |
| **Fonts (preconnect)**      | `index.html` preconnects fonts.googleapis.com + fonts.gstatic.com + crossorigin attribute                                                                                                                                                                                                 |
| **TypeScript @types**       | `@types/node` ^24 · `@types/react` 18.3.28 · `@types/react-dom` 18.3.7 · `vite/client` types                                                                                                                                                                                              |

---

## 🗂️ File Structure Map

```
portfolio-frontend/
├── public/
│   ├── images/                          ← Static WebP assets (OG/SEO + content)
│   │   ├── Logo.webp                     (Site logo / nav brand)
│   │   ├── profilephoto.webp             (Hero blob portrait)
│   │   ├── aboutphoto.webp               (About section image)
│   │   ├── portfolio.webp                (Project card 1)
│   │   ├── divert.webp                   (Project card 2)
│   │   ├── casa.webp                     (Project card 3)
│   │   ├── Sunnyside.webp                (Project card 4)
│   │   ├── Dark.webp                     (Contact section illustration)
│   │   └── og-preview.webp               (OG/Twitter 1200×630 SEO card)
│   ├── _redirects                        (SPA fallback rule: /* /index.html 200)
│   ├── favicon.svg
│   ├── icons.svg
│   ├── robots.txt                       (Crawl allow + sitemap URL)
│   ├── sitemap.xml
│   └── googleadf8a670e84f2e00.html      (Google Search Console domain ownership verification static file)
├── src/
│   ├── assets/
│   │   ├── variables.css                 (Design tokens: colors · font stacks · spacing)
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Navbar.tsx + Navbar.css       (Header · scroll · mobile drawer · lang toggle · CV/CTA · socials)
│   │   ├── Hero.tsx   + Hero.css         (Intro · title · 8 Devicon stack badges stagger · blob photo)
│   │   ├── About.tsx  + About.css        (4-tab panel · Skills/Experience/Education/Certs · AnimatePresence)
│   │   ├── Services.tsx + Services.css   (6 offering cards · whileInView staggered · Lucide icon headers)
│   │   ├── Projects.tsx + Projects.css   (4-project gallery · Cloudflare live links · GitHub CTA footer)
│   │   ├── Contact.tsx  + Contact.css    (Dual-pipeline form · EmailJS + backend · loading state · direct contact links)
│   │   └── Footer.tsx  + Footer.css      (Logo · 3 socials · dynamic copyright year)
│   ├── i18n/
│   │   └── index.ts                      (i18next init · inlined es+en resources · LanguageDetector config)
│   ├── services/
│   │   ├── api.ts                        (Axios baseURL router · wakeupBackend · saveContact · ContactData iface)
│   │   └── email.ts                      (EmailJS SDK wrapper · sendEmail(formRef) · service/template/public keys)
│   ├── App.tsx                           (Shell: Navbar → Hero/About/Services/Projects/Contact → Footer + wakeup)
│   ├── App.css                           (min-height:100vh flex-col; .main flex:1)
│   ├── index.css                         (reset + variables.css import · smooth scroll · font body)
│   └── main.tsx                          (ReactDOM.createRoot → <App /> + i18n side-effect import)
├── .gitignore
├── eslint.config.js                      (ESLint 9 flat defineConfig · globalIgnores dist · ts+react hooks)
├── index.html                            (SEO meta baseline · OG/Twitter · FontAwesome/Devicon CDN · Google Fonts)
├── package.json                          (12 deps · 12 devDeps · scripts: dev/build/lint/preview)
├── package-lock.json
├── tsconfig.json                         (Project references: app + node)
├── tsconfig.app.json                     (Strict TS · src include · ES2023 target · React JSX runtime)
├── tsconfig.node.json
├── vite.config.ts                        (defineConfig · @vitejs/plugin-react only)
└── README.md
```

---

## 🐳 Docker & Local Execution (Step-by-Step)

### Prerequisites

| Tool             | Minimum Version                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------- |
| Node.js          | 20.x+ (for Vite 8)                                                                        |
| npm / pnpm / bun | npm 10.x recommended                                                                      |
| (Optional)       | A running **Portfolio Backend** on `http://localhost:8080` (see Portfolio Backend README) |

---

### Option 1 — Quick Local (npm / Vite dev server, ~10s)

Fastest path — zero build step, HMR on port 5173. Auto-points `api.ts` to `localhost:8080` for local backend.

```bash
# 1. Clone & enter
git clone https://github.com/Alberto-Zompantzi/portfolio-frontend.git
cd portfolio-frontend

# 2. Install dependencies (uses package-lock.json for determinism)
npm install

# 3. (Optional) start Portfolio Backend first to test full Contact pipeline
#    → see Portfolio Backend README · Option 1 or 2

# 4. Start Vite dev server
npm run dev
# → VITE ready in ~800ms
# → Local:   http://localhost:5173/
# → Network: http://<your-ip>:5173/

# 5. Open browser → app auto-switches API base to localhost:8080 for dev
```

> **EmailJS in dev:** Uses the same public key identity as production — valid form submissions will deliver real emails in both environments.

---

### Option 2 — Production Build + Local Preview

Builds the exact `dist/` bundle Cloudflare Pages serves. Runs `tsc -b` (typecheck) **before** `vite build` — build fails if TS strict errors exist.

```bash
# 1. Clean install + strict build (TS check → bundle)
npm ci
npm run build
# Output → dist/   (assets/index-*.js  ~chunked
#                   assets/index-*.css  ~CSS system tokens+components)

# 2. Run the built bundle through Vite Preview (port 4173)
npm run preview
# →  ➜  Preview: http://localhost:4173/

# 3. Verify SPA fallback manually (simulates Cloudflare _redirects rule):
curl -sSf http://localhost:4173/portfolio  | grep -o "Cargando Portfolio..."
# Expected match → Vite preview returns index.html for deep routes when using vite preview SPA mode
```

---

### Option 3 — CI / Build for Cloudflare Pages (Headless)

Replicates exactly what Cloudflare Pages does on each push to `main`. Run lint + typecheck + bundle.

```bash
# 1. Lint pass (ESLint 9 flat config)
npm run lint
# No output = success. Add --max-warnings 0 to your CI gate if needed.

# 2. Build step (same as Cloudflare Pages Build Command)
tsc -b && vite build
# → ✓ 2 modules transformed.
# → dist/index.html                       0.62 kB │ gzip:  0.39 kB
# → dist/assets/index-<hash>.js         180.xx kB │ gzip: 60.xx kB

# 3. (Optional) size audit before deploy
npx vite-bundle-analyzer dist/assets/*.js   # OR your preferred analyzer

# 4. Deploy artifacts
# Cloudflare Pages automatically uploads dist/ — map:
#   Build command: npm run build    (internally uses tsc -b && vite build)
#   Build output directory: dist
#   Add _redirects from public/ already copied into dist by Vite
```

---

## 🔌 Service Contract

| Integration                     | Contract / Usage Pattern                                                                                      | Payload / Method                                                                                                                                      | Expected Response                                                                                                                                 |
| ------------------------------- | ------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Backend: wakeupBackend()**    | Fires on App `useEffect([])` mount · silent catch (fire-and-forget cold-start buster)                         | `GET {API_BASE_URL}/api/v1/contactos/health`                                                                                                          | `200 OK` → `text/plain` = backend up string · network errors swallowed — app renders normally either way                                          |
| **Backend: saveContact(data)**  | Contact form step 1 — **first** call on submit, before EmailJS. Throws on non-2xx.                            | `POST {API_BASE_URL}/api/v1/contactos` · JSON body: `{nombre:string, email:string, asunto:string, mensaje:string}` (matching `ContactData` interface) | `201 Created` → persisted entity JSON incl. server `id` and `fechaRegistro` · `400 Bad Request` → Jakarta Bean Validation violations from backend |
| **Backend: BASE selector**      | `window.location.hostname` === `localhost\|127.0.0.1` → `http://localhost:8080`, otherwise → **Render host**  | _(runtime only · no outbound call during selection)_                                                                                                  | Pure client-side logic, no `.env` file required to toggle env                                                                                     |
| **EmailJS: sendEmail(formRef)** | Contact form step 2 — runs **after** backend 201 succeeds using the native `<form>` ref populated from state. | `emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, HTMLFormElement, PUBLIC_KEY)` (SDK handles template variable bindings from form `name=` attributes)        | Resolves `{status:200, text:"OK"}` EmailJS receipt · rejects with SDK error on quota/invalid keys                                                 |
| **SEO: robots.txt**             | Served from `/robots.txt` on Cloudflare Pages edge                                                            | Static file · `User-agent: *` `Allow: /` + `Sitemap:` absolute URL to sitemap                                                                         | 200 · `text/plain`                                                                                                                                |
| **SEO: sitemap.xml**            | Served from `/sitemap.xml`                                                                                    | Static XML URL set for portfolio domain + project routes                                                                                              | 200 · `application/xml`                                                                                                                           |
| **SPA Deep Link Fallback**      | Cloudflare Pages rule from `public/_redirects` — applies to every non-asset path                              | `/*  /index.html  200`                                                                                                                                | No 404 on `/about`, `/portfolio`, or any client-side route — React router (hash anchors) take over client-side                                    |

---

## ☁️ Deployment Guide (Production)

### Target Platform — Cloudflare Pages (Git-backed auto-build)

| Setting                              | Value                                                                                                   |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| **Project type**                     | Connect to Git (`portfolio-frontend` repo)                                                              |
| **Framework preset**                 | Vite (auto-fills most below)                                                                            |
| **Build command**                    | `npm run build` → expands to `tsc -b && vite build`                                                     |
| **Build output directory**           | `dist`                                                                                                  |
| **Root directory**                   | `/`                                                                                                     |
| **Environment variables (optional)** | `None required` — i18n + EmailJS use browser-safe public keys; API host is derived from window.location |

### Step-by-step deploy

```bash
# 1. Push everything (including public/_redirects) to GitHub main
git add -A
git commit -m "deploy: release portfolio-frontend to Cloudflare Pages"
git push origin main

# 2. Cloudflare Dashboard → Pages → Create → Connect to Git → pick repo
# 3. Framework preset: select "Vite" → confirm default Build cmd / dist
# 4. Click "Save and Deploy"
# 5. After first green build → Custom domain → albertozompantzi-portfolio.pages.dev + add your custom apex/www domain
# 6. Verify SEO deep routes:
#    curl -I https://albertozompantzi-portfolio.pages.dev/about
#    → expected 200 (not 404) · body contains <script type="module" src="/src/main.tsx"> equivalent
```

### Production Hardening Roadmap

| Priority | Hardening Step                                                                       | Pattern Applied                                                                                                                                                                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **P0**   | Extract EmailJS `PUBLIC_KEY` / template IDs to `import.meta.env.VITE_EMAILJS_*` vars | Current keys are browser-visible but centralized env avoids accidental reuse; keep secret keys out of repo entirely                                                                                                                                                                                       |
| **P0**   | Add CSP header in Cloudflare Pages → Response Headers tab                            | `Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' https://fonts.googleapis.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; font-src https://fonts.gstatic.com; img-src 'self' https: data:; connect-src 'self' https://*.onrender.com https://api.emailjs.com` |
| **P1**   | Add `Security Headers` through Cloudflare Transform Rules                            | Strict-Transport-Security · X-Frame-Options DENY · X-Content-Type-Options nosniff · Referrer-Policy strict-origin-when-cross-origin · Permissions-Policy `geolocation=(), microphone=(), camera=()`                                                                                                       |
| **P1**   | Rate-limit Contact form client + backend combo                                       | Already validated 4x required on client + backend Bean Validation; add a 60s cooldown per localStorage key to block double submits                                                                                                                                                                        |
| **P2**   | Dynamic OG image per route via Cloudflare Workers (optional for portfolio SEO)       | Generate personalized `og:image` on projects route if needed                                                                                                                                                                                                                                              |
| **P2**   | Brotli + early hints on Cloudflare Pages                                             | Enabled by default for paid; confirm on free tier dashboard                                                                                                                                                                                                                                               |
| **P3**   | Extract i18n resources to JSON `locales/{es,en}/translation.json` + lazy load        | Shrinks initial bundle; today translations are inlined in i18n/index.ts for simplicity                                                                                                                                                                                                                    |

---

## 📊 Production Quality Gates (Measurable Pattern-Based)

| Signal                        | Current                                                         | Rationale                                                                                                                                            |
| ----------------------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **TypeScript Strictness**     | ✅ Strict + 4 opt-in linters                                    | `strict:true` · `noUnusedLocals/Params:true` · `verbatimModuleSyntax:true` · `noUncheckedSideEffectImports:true` — no implicit any, no unused params |
| **Build Pipeline**            | ✅ Typecheck-then-bundle                                        | `tsc -b` → fails on strict TS errors before Vite touches the code                                                                                    |
| **ESLint Gate**               | ✅ Flat config with React Hooks + Refresh + TS-ESLint           | `npm run lint` validates all `.ts/.tsx` against recommended presets + global dist ignore                                                             |
| **SPA Fallback**              | ✅ `_redirects /* /index.html 200` shipped                      | No 404 on deep links on Cloudflare Pages edge                                                                                                        |
| **API Env Toggle**            | ✅ Hostname-derived routing                                     | `isLocal` boolean swaps base URL — no `.env` switching or build per env                                                                              |
| **Cold-Start Strategy**       | ✅ Fire-and-forget health on mount                              | Silently defeats Render cold start before user submits the form                                                                                      |
| **Hybrid Submit Contract**    | ✅ Backend-first, then email                                    | Guarantees persistent audit record in PostgreSQL before notifying owner — backend failure aborts email step cleanly                                  |
| **i18n Persistence**          | ✅ LS + Cookie cache                                            | LanguageDetector persists selection — refresh / revisits retain user's language                                                                      |
| **SEO Coverage (meta layer)** | ✅ Canonical + OG + Twitter + robots + sitemap                  | 7 layers: meta, og:_ x4, twitter:_ x3, robots.txt allow, sitemap.xml, GSC claim, theme-color                                                         |
| **Font Loading**              | ✅ 2 preconnects + crossorigin                                  | `preconnect` to Google APIs + Gstatic with `crossorigin` hint cuts FOUC                                                                              |
| **Bundle Size (baseline)**    | ⚠️ Medium — ~180 KB JS before gzip (Framer Motion + i18n heavy) | Split Framer Motion and lucide-react with dynamic imports per section if LCP becomes >2.5s on 3G                                                     |
| **EmailJS Secrets**           | ⚠️ Inlined public keys in `src/services/email.ts`               | Public keys are safe by design (need private key to impersonate), but move to `VITE_*` env vars for centralization                                   |

---

## 🧭 Future Roadmap

- [ ] Migrate EmailJS service/template/public keys to `import.meta.env.VITE_EMAILJS_*` (dotenv Vite)
- [ ] Add 60s client cooldown after form submit (localStorage) to prevent double-click spam
- [ ] Split Framer Motion + Lucide into lazy-loaded sections (`React.lazy / Suspense`) for smaller initial bundle
- [ ] Extract i18n resources to `public/locales/{es,en}/translation.json` with i18next-xhr-backend lazy-loading
- [ ] Add Contact form honeypot field + CSRF-ish client token (reduce bot spam without backend auth)
- [ ] Add structured JSON-LD Person schema in index.html for Google Knowledge Panel SEO
- [ ] Add Playwright / Cypress E2E: bilingual toggle + form submit against local backend
- [ ] Implement dark/light theme toggle (extend `variables.css` with `data-theme` tokens)
- [ ] Add per-portfolio-project detail modal with expanded stack + GitHub links

---

## 🤝 Contributing

This project follows the **Conventional Commits** spec. Submit commits as `<type>(<scope>): <subject>`:

```bash
# New feature (section, i18n key, animation, etc.)
feat(hero): stagger devicon badges with 80ms incremental delay

# Bug / fix
fix(contact): remove double submit on fast click — add isSending guard to handler

# Docs only
docs(readme): clarify 3 local execution options for CI preview

# Refactor (no behavior change)
refactor(i18n): extract resources to locales/*.json with lazy loader

# Build / tooling
build(vite): bump Vite to 8.x and plugin-react 6.x
```

Recommended PR flow:

1. Fork → feature branch from `main`
2. `npm run lint && npm run build` must pass locally (strict TS gates are in the build step)
3. Squash merge to `main`

---

## ⚖️ License

© 2026 Alberto Zompantzi. Personal Portfolio Frontend SPA — source-available reference implementation of React + TS + Vite + i18n on Cloudflare Pages.

---

## 📫 Let's Connect

<div align="center">

[![LinkedIn - Alberto Zompantzi](https://img.shields.io/badge/LinkedIn-Alberto%20Zompantzi-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alberto-zompantzi/)
&nbsp;&nbsp;
[![Portfolio Live](https://img.shields.io/badge/🌐_Portfolio-Live%20Site-7952B3?style=for-the-badge&logo=cloudflarepages&logoColor=white)](https://albertozompantzi-portfolio.pages.dev)
&nbsp;&nbsp;
[![GitHub - Alberto-Zompantzi](https://img.shields.io/badge/GitHub-Alberto--Zompantzi-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Alberto-Zompantzi)
&nbsp;&nbsp;
[![Email](https://img.shields.io/badge/Email-contact%40alberto--zompantzi.dev-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:contact@alberto-zompantzi.dev)

**💼 Open to backend, platform, and architecture roles.**

</div>
