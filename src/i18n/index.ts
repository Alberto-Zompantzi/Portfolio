import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        skills: "Skills",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact",
        downloadCV: "Download CV",
        contactMe: "Contact Me",
        switchLang: "Español",
      },
      hero: {
        greeting: "Hi, I'm",
        subtitle: "Software Engineer",
        title: "Alberto Zompantzi",
        role: "Software Engineer",
        stack:
          "(Java 17/21 · Python RAG · Spring Boot 3 · React 18/19 · Microservices · PostgreSQL · Containerized Systems)",
        tagline:
          "Measurable. Reproducible. Production-hardened. — I design end-to-end systems that ship, scale, and leave an audit trail.",
        thesis:
          "Rigorous engineering mindset applied across the full SDLC: zero-hallucination RAG agents (LangChain LCEL / FAISS / Gemini) · REST microservices (Spring Boot 3.x / JPA + HikariCP / JUnit 5) · conversion-driven React/TypeScript SPAs · 12-factor Docker multi-stage deploys on OCI, Render, Vercel, and Cloudflare.",
        primaryCTA: "See my work",
        secondaryCTA: "Contact me",
        liveProof: {
          label: "Live Deploy · OCI Production",
        },
      },
      stats: {
        projects: "Production Projects",
        certifications: "Verified Certifications",
        experience: "Months of Deliberate Practice",
        stack: "Core Technologies",
      },
      about: {
        title: "About Me",
        kicker: "Engineering with first-principles rigor.",
        description:
          "I'm Alberto Zompantzi, a Software Engineer specializing in the Java / Spring Boot 3.x + React 18/19 ecosystem with a deep RAG (Retrieval-Augmented Generation) specialization for regulated fintech compliance workflows. I treat every project as a reproducible, containerized product — source-grounded answers first, then design. I hold 37+ verified professional credentials spanning Oracle ONE (Alura Latam) and DataCamp, and I deliver the full stack: from PostgreSQL data modeling with JPA/Hibernate, to Spring Boot 3 layers with SOLID/Bean Validation, to React/TypeScript frontends with Zustand, i18n, and SEO pipelines, all the way through multi-stage Docker deployments on Oracle Cloud Infrastructure, Render, and Cloudflare Pages. My default engineering posture is: document, containerize, test, deploy, audit-trail.",
        tabs: {
          story: "Story & Thesis",
          skills: "Core Skills",
          stack: "Tech Stack",
          certifications: "Certifications",
          timeline: "Career Timeline",
        },
        story: {
          p1:
            "I entered the industry with a non-negotiable rule: every deliverable must leave a reproducible artifact. That rule is why all of my production systems ship with Dockerfile multi-stage builds, README-as-contract documentation with ASCII diagrams, append-only JSONL audit trails where compliance demands it, and an engineering-change log that a teammate can reason about without asking me a single question.",
          p2:
            "My signature project — FinShield AI — is an enterprise RAG agent for fintech PLD/KYC compliance, fraud detection, and regulatory audit. The stack: LangChain LCEL pipeline · FAISS-CPU persistent vector store (deliberate ChromaDB exit after 4 failing versions due to SQLite mount-lock corruption) · Gemini 2.5 Flash + 001 embeddings · Streamlit multi-tab UI · JSONL audit trail per query · OCI `VM.Standard.E4.Flex` live deploy hardened with non-root appuser permission parity via HOST_UID/HOST_GID.",
          p3:
            "On the backend I own the full Java 17/21 · Spring Boot 3.x surface: layered architecture, Bean Validation, `@ControllerAdvice` RFC-7807-style structured errors, SpringDoc OpenAPI + Swagger, JPA/Hibernate with PostgreSQL/MySQL (Neon/Supabase), HikariCP datasource tuning, Flyway/Liquibase migrations, and JUnit 5 unit + integration suites. On the frontend I ship performant React 18/19 with TypeScript, Zustand store, Tailwind/CSS Variables design systems, Framer Motion micro-interactions, i18next internationalization, and SEO meta pipelines with OG + Twitter Cards + sitemap + robots + GSC verification. Across both I enforce 12-factor config management via environment variables, never secrets-in-code.",
          p4:
            "I'm currently open to roles as: Software Engineer · Java/Spring Boot Backend Engineer · Full-Stack Engineer (Spring + React) · AI Application Engineer (RAG / LangChain / Python) · Backend Engineering roles with Microservice and Cloud-first mandates. If you're building something that must survive a real production weekend, I'd like to hear about it.",
        },
        skills: {
          backend: {
            title: "Backend Engineering — Java 17/21 · Spring Boot 3.x",
            desc: "Production-grade REST APIs applying layered architecture, SOLID, ControllerAdvice exception handling, Bean Validation, DTO projection, SpringDoc OpenAPI, JPA/Hibernate persistence with HikariCP tuning, and JUnit 5 unit/integration suites. I build for horizontal scale first: stateless services, 12-factor config, container first.",
            keywords: [
              "Java 17/21 Records & Virtual Threads",
              "Spring Boot 3.x · Web · Security · Data JPA · Validation",
              "Microservices · API Gateway · Feign · Resilience4j",
              "SpringDoc OpenAPI / Swagger UI",
              "JPA & Hibernate · JPQL · N+1 mitigation · Fetch Graphs",
              "HikariCP datasource tuning & transaction boundaries",
              "Flyway / Liquibase schema migrations",
              "JUnit 5 · Mockito · Testcontainers for Postgres",
            ],
          },
          rag: {
            title: "AI / RAG Engineering — Python · LangChain · FAISS",
            desc: "Enterprise Retrieval-Augmented Generation pipelines for regulated compliance use-cases. Source-grounded Q&A with anti-hallucination prompt gates, precise citations (PDF page, Markdown §, CSV transaction_id), append-only audit trails, FAISS persistent vector stores, and LangChain LCEL composition. Live production deploy on OCI with container permission parity.",
            keywords: [
              "LangChain LCEL (Expression Language)",
              "FAISS-CPU persistent vector store",
              "Google Gemini 2.5 Flash · Embeddings 001",
              "PyPDF · CSVLoader · Custom OpenAPI parser",
              "RecursiveCharacter chunking 800/150",
              "Anti-hallucination Prompt Gates + Fallback contract",
              "JSONL append-only Audit Trails (retention 7y)",
              "Streamlit multi-tab UI with runtime model switcher",
            ],
          },
          frontend: {
            title: "Frontend Engineering — React 18/19 · TypeScript · Tailwind",
            desc: "Conversion-driven React/TypeScript SPAs: responsive CSS Grid/Flexbox, Zustand state management, Framer Motion micro-interactions, i18next multi-language pipelines, SEO stacks (sitemap + robots + OG/Twitter + GSC verification), EmailJS lead capture, and Fetch/Axios client layers. Mobile-first down to 320px, Core Web Vitals-first.",
            keywords: [
              "React 18/19 with Hooks · StrictMode",
              "TypeScript strict, Discriminated Unions, generics",
              "Vite 6/7 · ESM builds · Rollup bundle tuning",
              "Zustand store with persist middleware",
              "TailwindCSS 3 + CSS Variables design systems",
              "Framer Motion enter/exit & scroll animations",
              "i18next browser language detector + localStorage cache",
              "SEO: OG/Twitter meta · sitemap · robots · canonical",
            ],
          },
          data: {
            title: "Data Engineering — PostgreSQL/MySQL · JPA/Hibernate",
            desc: "Relational schema design from requirements-first business events. Index strategy, query tuning via EXPLAIN ANALYZE, JPA entity graph design for fetch efficiency, and cloud PostgreSQL on Neon/Supabase/Render. Audit-ready schemas with soft-delete, created/updated timestamps, and immutable retention tables where regulation demands it.",
            keywords: [
              "PostgreSQL 16 · JSONB · CTEs · Window Functions",
              "MySQL 8 · Window · Common Table Expressions",
              "EXPLAIN ANALYZE · B-tree / Partial indexes",
              "JPA/Hibernate · FetchType tuning · @EntityGraph",
              "Neon serverless Postgres · Supabase",
              "Flyway versioned migrations · repeatable scripts",
              "Soft-delete + row-level audit columns",
              "Data-modeling from domain event storms",
            ],
          },
          infrastructure: {
            title: "Cloud & Infrastructure — OCI · Docker · 12-Factor",
            desc: "End-to-end deployable systems from zero to live HTTPS. Multi-stage Docker builds with non-root users, Docker Compose networking, OCI (Oracle Cloud Infrastructure) VM provisioning, Render container deploys, Cloudflare Pages edge, and Vercel for React. Hardening checklist: env-var only secrets, ingress CIDR scoping, TLS termination, health probes, container resource limits.",
            keywords: [
              "Docker Multi-stage · Slim images · non-root USER",
              "Docker Compose · named volumes + bind mount parity",
              "Oracle Cloud Infrastructure (OCI) · Ubuntu · ingress rules",
              "Render Docker Web Services · cold-start awareness",
              "Cloudflare Pages · SPA rewrites · cache rules",
              "Vercel · GitHub-based Next/React deploys",
              "12-Factor methodology · env vars only for config",
              "HEALTHCHECK probes · resource mem/cpu limits",
            ],
          },
          workflow: {
            title: "Workflow & Tooling — Git · Bash · AI-Assisted",
            desc: "Professional Git/GitHub hygiene: Conventional Commits, feature branch → PR → squash-and-merge, semantic PR titles. Bash-first environment, GitHub Actions for static QA, and AI-assisted refactors/docs via Cursor/Claude — always with human architectural review before merge. I write code the way I'd want to review it.",
            keywords: [
              "Conventional Commits (feat/fix/docs/chore/refactor)",
              "Git flow: feature → PR → squash-merge → main → deploy",
              "Bash / POSIX shell scripting & one-liners",
              "GitHub Actions · lint + build + preview",
              "Cursor IDE + Claude Sonnet/Opus assisted refactor",
              "Code Review checklists: SOLID, tests, security",
              "Postman collections + manual contract regression",
              "Documentation-as-contract READMEs (ASCII diagrams)",
            ],
          },
        },
        stack: {
          languages: {
            title: "Languages",
            items: ["Java 17/21", "Python 3.11+", "TypeScript", "JavaScript ES2024", "SQL", "Bash/POSIX Shell"],
          },
          frameworks: {
            title: "Frameworks & Runtimes",
            items: ["Spring Boot 3.x", "Spring Data JPA", "Spring Security", "LangChain", "LangChain LCEL", "React 18/19", "Vite 6/7", "Streamlit"],
          },
          datastores: {
            title: "Databases & Storage",
            items: ["PostgreSQL", "MySQL", "FAISS-CPU Vector Store", "Neon Serverless", "Supabase", "JPA/Hibernate", "Flyway", "HikariCP"],
          },
          cloud: {
            title: "Cloud, Containers & Edge",
            items: ["Docker Multi-stage", "Docker Compose", "Oracle Cloud (OCI)", "Render", "Vercel", "Cloudflare Pages", "GitHub Actions", "Let's Encrypt TLS"],
          },
          frontend: {
            title: "Frontend Toolchain",
            items: ["TailwindCSS 3", "CSS Variables Design System", "Zustand", "Framer Motion", "i18next", "EmailJS", "Axios / Fetch API", "SEO (sitemap/robots/OG/GSC)"],
          },
          practices: {
            title: "Quality Practices",
            items: ["12-Factor Apps", "SOLID Principles", "Microservices", "JUnit 5 · Mockito", "Testcontainers", "RAG Anti-Hallucination", "Container Security (non-root)", "Accessibility (WCAG AA focus)"],
          },
        },
        experience: {
          viewProject: "View Project",
          sectionSubtitle: "A selection of shipped production systems, tiered by technical depth.",
          tierBadge: { T1: "Tier 1 · Enterprise RAG & AI", T2: "Tier 2 · Business Logic Full-Stack", T3: "Tier 3 · UI/UX & Conversion-Focused" },
          items: {
            finshield: {
              title: "FinShield AI — Enterprise RAG Agent",
              tier: "T1",
              subtitle: "Python 3.11 · LangChain LCEL · FAISS · Gemini · Streamlit · Docker Multi-stage · OCI Live",
              stack: ["Python", "LangChain", "FAISS", "Gemini 2.5", "Streamlit", "Docker", "OCI"],
              desc: "Enterprise Retrieval-Augmented Generation agent for fintech PLD/KYC compliance, fraud detection, and regulatory CNBV/UIF audit. 4-format ingestion (PDF/MD/CSV/JSON) with RecursiveCharacter chunking, LangChain LCEL pipeline with 6-rule anti-hallucination prompt gate enforcing exact source citations (PDF page · Markdown § · CSV transaction_id). Persistent FAISS vector store with JSONL append-only audit trail. Deployed live on OCI `VM.Standard.E4.Flex` Ubuntu 24.04 with non-root appuser permission parity via HOST_UID/HOST_GID build args. Accessible on 140.84.168.9:8501.",
              tags: ["RAG", "Anti-Hallucination", "Audit Trail", "FAISS", "LCEL", "Compliance", "Oracle Cloud", "Multi-stage Docker"],
            },
            tzompcomer_backend: {
              title: "Tzompcomer — B2B E-Commerce Backend",
              tier: "T2",
              subtitle: "Java 17 · Spring Boot 3.3.1 · PostgreSQL · JPA/HikariCP · Docker · JWT · Swagger UI",
              stack: ["Java 17", "Spring Boot 3", "Spring Security JWT", "PostgreSQL", "JPA/Hibernate", "HikariCP", "Flyway", "Docker"],
              desc: "B2B e-commerce platform backend (wholesale trade vertical): 4-layer Spring Boot 3.3.1 architecture (Controller → Service → Repository → Entity) with role-based JWT access control (Customer/Admin). Business surfaces: product catalog with categories + SKU variants, shopping cart with concurrency-safe line-item locks, purchase-order pipeline, inventory management with low-stock triggers, admin operational dashboards. HikariCP connection pool tuning, Flyway versioned migrations, SpringDoc OpenAPI/SwaggerUI for API contract, PostgreSQL persistence. Containerized multi-stage Dockerfile + docker-compose one-command local boot, production deploy on Render.",
              tags: ["Java 17", "Spring Boot 3", "Microservices-ready", "JWT RBAC", "PostgreSQL", "HikariCP", "Flyway", "B2B Commerce"],
            },
            tzompcomer_frontend: {
              title: "Tzompcomer — B2B E-Commerce Frontend",
              tier: "T2",
              subtitle: "React 19 · TypeScript · Vite · TailwindCSS · Zustand · Axios · Render deploy",
              stack: ["React 19", "TypeScript", "Vite", "TailwindCSS 3", "Zustand", "Axios", "JWT auth", "Cloudflare/Vercel"],
              desc: "Business-to-business storefront SPA mirroring the Tzompcomer backend contract: catalog browsing with filters, SKU detail, authenticated customer zone with order history, shopping cart with optimistic line-item UI, role-based dashboard surfaces, registration + JWT login flows, admin product/SKU management. Zustand store with persist middleware, Axios request/response interceptors with token refresh, TailwindCSS responsive layouts, SEO meta, Core Web Vitals optimized, production deploy on Cloudflare Pages or Vercel.",
              tags: ["React 19", "TypeScript", "Zustand", "Axios", "Tailwind", "Responsive", "SPA", "JWT auth"],
            },
            divertikids_backend: {
              title: "DivertiKids Backend — Booking Microservice",
              tier: "T2",
              subtitle: "Java 21 · Spring Boot 3.4 · PostgreSQL (Neon) · SpringDoc OpenAPI · Docker · Render Live",
              stack: ["Java 21", "Spring Boot 3.4", "Spring Validation", "PostgreSQL Neon", "JPA", "SpringDoc OpenAPI 2.8", "Docker", "Render"],
              desc: "Reservation/booking microservice for a kids' events and entertainment venue. Full booking lifecycle: create with Bean Validation (date in future, time window sanity, non-empty fields), customer email lookups, idempotent cancel endpoint returning status enum. Structured error handling via GlobalExceptionHandler, SpringDoc OpenAPI 2.8.5 SwaggerUI auto-documentation, PostgreSQL Neon persistence, Dockerfile containerized, Render Docker-based live deploy with healthcheck endpoint and Render cold-start friendly architecture. Frontend pairing pre-warms the container via no-cors GET on module load.",
              tags: ["Java 21 Virtual Threads", "Spring Boot 3.4", "PostgreSQL Neon", "SpringDoc OpenAPI", "Booking Engine", "Docker", "Render"],
            },
            divertikids_frontend: {
              title: "DivertiKids Frontend — Booking SPA",
              tier: "T2",
              subtitle: "React 19.2 · Vite 7 · CSS Variables Design System · Fetch Layer · Cloudflare Pages Live",
              stack: ["React 19", "Vite 7", "CSS Variables", "Fetch API", "Google Fonts", "Font Awesome 7", "SEO Pipeline", "Cloudflare Pages"],
              desc: "Single-page React 19 booking SPA with zero-Redux, zero-state-library pattern: data-driven 11-workshop catalog plus 9-tier × 5-activity volume discount package calculator, controlled booking form wired to Render backend REST endpoints, smart no-cors backend wake-up fire-and-forget on import to beat Render's free-tier cold start. Full SEO pipeline: meta description, 12 keywords, OG + Twitter 1200×630 cards, sitemap.xml, robots.txt, Google Search Console verification. Cloudflare Pages edge deploy. Mobile-first down to iPhone SE (320px).",
              tags: ["React 19", "Vite 7", "Data-Driven UI", "Package Calculator", "SEO Pipeline", "WhatsApp CTA", "Mobile-first", "Cloudflare Pages"],
            },
            casazompantzi: {
              title: "Casa Zompantzi — Corporate Site",
              tier: "T3",
              subtitle: "React · Technical SEO · Core Web Vitals · Cloudflare Pages",
              stack: ["React", "Vite", "CSS Variables", "Technical SEO", "GSC verified", "Cloudflare Pages"],
              desc: "Corporate site for a family-owned commercial business with local-SEO-first information architecture: homepage, about, services gallery, contact with lead-capture form. Heavy technical SEO focus: Core Web Vitals optimization (LCP < 2.5s / CLS < 0.1 / INP < 200ms targets), schema.org LocalBusiness JSON-LD for rich results, meta + OG + Twitter stack, sitemap/robots + Google Search Console verification. Deployed edge on Cloudflare Pages.",
              tags: ["React", "Technical SEO", "Core Web Vitals", "LCP/CLS/INP", "Schema.org", "Local SEO", "GSC verified", "Cloudflare Pages"],
            },
            sunnyside: {
              title: "Sunnyside Muebles Infantiles — Static Storefront",
              tier: "T3",
              subtitle: "Vanilla HTML5 + CSS3 + ES6 · Zero Build · WhatsApp Checkout · Cloudflare Pages",
              stack: ["HTML5", "CSS3 Variables", "ES6+ JavaScript", "Font Awesome 7", "Google Fonts", "SEO Pipeline", "Cloudflare Pages"],
              desc: "Framework-free, zero-bundle children's furniture storefront. Pure static files: a single data-driven 24-SKU catalog renderer (insertAdjacentHTML), a CSS-variables design system with 4 pastel accent colorways across 6 categories, deterministic WhatsApp checkout as a single <a href='wa.me?...'> with pre-filled Spanish order message per SKU. Full SEO stack: description + 10 keywords + canonical + OG/Twitter 1200×630 + sitemap.xml 6-URL + robots.txt + GSC verification HTML. Works without JavaScript for the copy surfaces. Cloudflare Pages direct deploy.",
              tags: ["Zero-Framework", "Zero-NPM", "Mobile-First CSS", "Data-Driven Catalog", "WhatsApp Checkout", "SEO Pipeline", "Lighthouse 100 baseline", "Cloudflare Pages"],
            },
            portfolio: {
              title: "Alberto Zompantzi — Portfolio (This Site)",
              tier: "T3",
              subtitle: "React 19 · TypeScript · Vite · Zustand · Framer Motion · i18next · TailwindCSS · Responsive",
              stack: ["React 19", "TypeScript Strict", "Vite 7", "Zustand", "Framer Motion", "i18next EN/ES", "TailwindCSS 3", "EmailJS lead capture"],
              desc: "My portfolio. Built with React 19 + TypeScript strict + Vite. Zustand global store for language/UI state, Framer Motion for entrance and scroll-triggered animations, full i18next EN/ES translations with localStorage caching, TailwindCSS 3 + CSS Variables design system (typography scale, spacing grid, palette), 8 projects tiered by technical depth, 37+ certifications structured by issuing body, WCAG-AA accessibility targets, SEO meta + canonical + OG + Twitter, EmailJS backend-wired lead capture, fully responsive down to 320px. You are here.",
              tags: ["React 19", "TypeScript", "Zustand", "Framer Motion", "i18next EN↔ES", "TailwindCSS 3", "EmailJS", "Fully Responsive"],
            },
          },
        },
        education: {
          title: "Bachelor of Computer Systems Engineering",
          school: "Instituto de Educación a Distancia del Estado de Puebla (IEDEP) · 2025 – Present",
          desc: "Focus on Data Structures & Algorithms analysis, discrete mathematics for computer science, Software Engineering methodology (requirements, design, verification), Modern Web Development (Java EE / React), and computer networks & security fundamentals. Degree-in-progress, parallel to Oracle ONE + DataCamp rigorous certification tracks to ensure continuous skill delivery against a deadline.",
        },
        certifications: {
          totalBadge: "37+ Verified Professional Credentials",
          subtitle: "Curated credentials across Oracle ONE (Alura Latam) and DataCamp — issued against pass-fail examinations, project submissions, and skill-track assessments.",
          groups: {
            oracleOne: {
              title: "Oracle ONE · Alura Latam — 18 Verified Credentials",
              formationsTitle: "3 Specialization Formations",
              coursesTitle: "14 Courses Completed",
              badgesTitle: "1 Oracle ONE Challenge Badge",
              formations: {
                beginner: {
                  title: "Formation 1 — Beginner in Programming T6 · ONE",
                  competencies:
                    "Procedural programming with JavaScript/HTML/CSS, Git/GitHub collaborative workflows, agile fundamentals, portfolio-first project delivery, challenge-driven development.",
                },
                cs: {
                  title: "Formation 2 — Computer Science T6 · ONE",
                  competencies:
                    "Java Object-Oriented Programming foundations: encapsulation, inheritance, polymorphism, interfaces, Java collections, exception handling, JUnit unit testing foundations.",
                },
                backend: {
                  title: "Formation 3 — Back-End Java T6 · ONE",
                  competencies:
                    "Spring Boot 3 REST APIs, Spring Data JPA + Hibernate persistence, Bean Validation, MVC layers, MySQL/PostgreSQL integration, Swagger/OpenAPI contracts, deploy pipelines.",
                },
              },
              courses: {
                git: {
                  title: "Git y GitHub: Repositorios, Commit y Colaboración",
                  competencies:
                    "Branches, remotes, conflict resolution, Pull Request & code review workflows, Conventional Commits hygiene, tagged releases.",
                },
                htmlCss: {
                  title: "HTML5 y CSS3 Parte 1/2 · Mi Primera Página Web · Clases, Posicionamiento y Flexbox",
                  competencies:
                    "Semantic HTML landmarks, responsive CSS with Flexbox/Grid, mobile-first cascades, accessibility alt-text, OG/Twitter meta fundamentals.",
                },
                js1: {
                  title: "JavaScript Explorando la Lenguaje de la Web",
                  competencies:
                    "DOM manipulation, event delegation, closures, scope chain, ES6 modules, Fetch API with async/await + error handling.",
                },
                js2: {
                  title: "JavaScript en la Web · Almacenamiento de Datos Navegador y Animaciones",
                  competencies:
                    "localStorage/sessionStorage, IndexedDB patterns, Web Animations API and CSS keyframes, Web Vitals awareness (LCP/FID/CLS).",
                },
                js3: {
                  title: "JavaScript Consumiendo y Manipulando API REST + Métodos de Array en JS",
                  competencies:
                    "RESTful client integration, advanced array methods (map/filter/reduce/sort/some/every), defensive JSON parse, typed DTO shape validation on client.",
                },
                javaOop: {
                  title: "Java OOP · Aplicando la Orientación a Objetos",
                  competencies:
                    "Packages, access modifiers, encapsulation with getters/setters, constructors, this/super, abstract classes, interfaces, Java records in preview.",
                },
                javaT1: {
                  title: "Java Creando tu Primera Aplicación",
                  competencies:
                    "JDK/JRE/JVM stack, main entry point, primitive/wrapper types, Scanner CLI I/O, control flow if/switch/loops, Maven basics.",
                },
                javaT2: {
                  title: "Java Aplicando la Orientación a Objetos (Java Collections)",
                  competencies:
                    "List/Set/Map interfaces, ArrayList/LinkedList/HashSet/HashMap, Iterator vs for-each, Collections.sort(), Comparable vs Comparator.",
                },
                javaT3: {
                  title: "Estructuras de Datos y Algoritmos con Java · Listas Enlazadas, Pilas y Colas",
                  competencies:
                    "Complexity (Big-O) reasoning, LinkedList vs ArrayList tradeoffs, Stack (LIFO), Queue (FIFO), Deque, tree traversal intuition for SQL indexes.",
                },
                javaTesting: {
                  title: "Java y Testing · TDD con JUnit 5 y Mockito",
                  competencies:
                    "JUnit 5 lifecycle (@BeforeEach/@AfterEach), assertion library, parameterized tests, Mockito mocks/spies/injectMocks, TDD red-green-refactor loop.",
                },
                spring: {
                  title: "Spring Boot 3 · Desarrollo de API REST con Spring Boot + Spring Data JPA",
                  competencies:
                    "Spring Initializr starters, layered Controller/Service/Repository, @RestController, @PathVariable/@RequestParam, ResponseEntity, DTOs, exceptions, Spring Data JPA repositories.",
                },
                spring2: {
                  title: "Spring Boot 3 · Aplicando Buenas Prácticas y Protegiendo una API REST",
                  competencies:
                    "Spring Security JWT stateless auth, BCrypt password hashing, @ControllerAdvice global error handler, Bean Validation (JSR-380) with @Valid, actuator health/info, logging levels.",
                },
                sql: {
                  title: "Consultas SQL con MySQL · Manipulación y Análisis de Datos",
                  competencies:
                    "Subqueries, JOINs INNER/LEFT/RIGHT, GROUP BY + HAVING, window functions OVER (PARTITION BY), indexes, EXPLAIN plan reading.",
                },
                db: {
                  title: "MySQL · Consultas Avanzadas y Procedimientos Almacenados",
                  competencies:
                    "Stored procedures, triggers, ACID transaction semantics, isolation levels, deadlock awareness, backup/restore fundamentals.",
                },
              },
              badges: {
                challenger: {
                  title: "Oracle ONE Challenger Badge — Conversor de Monedas + Encriptador de Texto",
                  competencies:
                    "Two challenge submissions passing Alura automated grading. Currency converter with live-rate Fetch consumption + Enigma-style text encryptor UI. Both projects required Git/GitHub repo with README contract.",
                },
              },
            },
            datacamp: {
              title: "DataCamp · 19 Verified Credentials",
              tracksTitle: "5 Completed Skill Tracks",
              coursesTitle: "14 Verified Courses",
              tracks: {
                cloud: {
                  title: "AWS Cloud Fundamentals Skill Track",
                  competencies:
                    "AWS Global Infrastructure, IAM identity policies, S3 storage classes, EC2 compute, RDS/Aurora, VPC networking subnets, AWS shared responsibility model, Well-Architected Framework 6 pillars, cost explorer + Budgets.",
                },
                git: {
                  title: "Git & GitHub Foundations Skill Track",
                  competencies:
                    "Git objects: blob/tree/commit, three-tree architecture (working/staging/HEAD), rebasing vs merging, detached HEAD recovery, stash, cherry-pick, squash, code review discipline in PRs.",
                },
                docker: {
                  title: "Docker Fundamentals Skill Track",
                  competencies:
                    "Union FS layers, Dockerfile best practices, multi-stage, COPY/ADD distinction, volumes vs bind mounts, Docker Compose networking, entrypoint vs cmd, non-root USER, .dockerignore.",
                },
                bash: {
                  title: "Bash Scripting & Shell Fundamentals Skill Track",
                  competencies:
                    "POSIX bash: variables/quoting/expansion, for/while loops, if/case/test, exit codes, pipes/redirects, awk/sed one-liners, xargs, find + exec, crontab scheduling, writing idempotent scripts.",
                },
                dataviz: {
                  title: "Data Visualization Skill Track (Python / Matplotlib / Seaborn)",
                  competencies:
                    "Grammar of graphics: mapping data to aesthetics, color perception best practices, matplotlib subplots, seaborn distributions/categoricals, choosing chart for message (ranking / part-to-whole / correlation / distribution / deviation / flow).",
                },
              },
              courses: {
                awsCloud: {
                  title: "AWS Cloud Practitioner Essentials",
                  competencies: "AWS pricing models, S3 storage classes, CloudWatch metrics & alarms, IAM roles & policies, RDS Multi-AZ, shared-responsibility, Well-Architected.",
                },
                awsArchitecting: {
                  title: "Architecting on AWS — Core Services",
                  competencies: "Architectural decisions: multi-AZ, read replicas, VPC public/private subnets, NAT gateways, security groups vs NACLs.",
                },
                gitIntro: {
                  title: "Introduction to Git",
                  competencies: "Local repo init, diff, commit, log --graph --decorate --oneline, tag annotations, rollback strategies (reset --soft/mixed/hard, revert).",
                },
                gitCollab: {
                  title: "Collaborating with Git & GitHub",
                  competencies: "PR lifecycle, rebase vs merge strategies, code review checklists, resolving merge conflicts, CODEOWNERS and branch protection.",
                },
                dockerIntro: {
                  title: "Introduction to Docker",
                  competencies: "Container vs VM, Docker daemon, registry push/pull, run flags, network modes (bridge/host/none), EXPOSE vs -p.",
                },
                dockerAdvanced: {
                  title: "Advanced Docker: Multi-stage & Hardening",
                  competencies: "Multi-stage builder→runtime, user namespace, HEALTHCHECK CMD/interval, seccomp/cap-drop awareness, distroless vs slim, COPY --from=<stage>.",
                },
                bashIntro: {
                  title: "Introduction to Bash",
                  competencies: "Command substitution, variable expansion, test brackets [[, loops over filenames, exit 0 nonzero, stderr/stdout redirects 2>&1.",
                },
                bashScripts: {
                  title: "Writing Bash Scripts for Data Workflows",
                  competencies: "set -euo pipefail, trap for cleanup, heredocs, getopts, reading CSVs line-by-line, error handling functions.",
                },
                sqlIntro: {
                  title: "Introduction to SQL",
                  competencies: "SELECT FROM WHERE ORDER BY LIMIT, string/date/number functions, BETWEEN IN LIKE wildcards, basic JOIN keys.",
                },
                sqlJoins: {
                  title: "Joining Data in SQL",
                  competencies: "INNER LEFT FULL OUTER CROSS JOINs, set operations UNION INTERSECT EXCEPT, semi joins / anti joins, self-joins.",
                },
                sqlSummaries: {
                  title: "Summarizing Data with SQL",
                  competencies: "COUNT SUM AVG MIN MAX, GROUP BY, HAVING, CASE WHEN, COALESCE NULLIF, window functions ROW_NUMBER RANK DENSE_RANK LAG LEAD.",
                },
                pandasFoundations: {
                  title: "Data Manipulation with pandas",
                  competencies: "DataFrame/Series, indexing iloc loc, boolean masks, groupby.agg(), .apply(), pd.merge(), pivot/melt reshaping.",
                },
                matplotlib: {
                  title: "Introduction to Data Visualization with Matplotlib",
                  competencies: "Figures & Axes, plot types (bar line scatter hist box violin), annotation & arrows, rcParams styling, saving dpi for print/web.",
                },
                seaborn: {
                  title: "Intermediate Data Visualization with Seaborn",
                  competencies: "Categorical plots (stripplot/boxplot/barplot), relational (scatter/line), distribution (kde/hist), pairplot/heatmap, seaborn themes & palettes.",
                },
              },
            },
          },
        },
        timeline: {
          items: {
            t1: {
              period: "2025 Q1 → Today",
              title: "Portfolio Production Builds",
              desc: "Conceived and shipped 8+ production projects: FinShield AI enterprise RAG live on OCI, Tzompcomer B2B e-commerce (Spring Boot + React), DivertiKids booking system (Spring Boot 3.4 on Render + React on Cloudflare Pages), Sunnyside static, Casa Zompantzi SEO-first corporate site, this portfolio with 37+ certifications and i18n EN/ES. Each system containerized with multi-stage Docker where applicable, fully documented README, deployed to real edge hosts.",
            },
            t2: {
              period: "2024 Q4 → 2025 Q1",
              title: "DataCamp Skill Tracks Completion",
              desc: "Completed 5 DataCamp Skill Tracks and 14 verified DataCamp courses covering AWS Cloud, Git/GitHub collaboration, Docker multi-stage, Bash scripting for data pipelines, and data visualization (pandas/Matplotlib/Seaborn). Stack overlap with engineering duties enabled immediate application (Docker patterns in all new Spring Boot microservices, Bash automation for OCI deploys).",
            },
            t3: {
              period: "2024 Q1 → 2024 Q4",
              title: "Oracle ONE (Alura Latam) Program",
              desc: "Completed 3 full Formations (Beginner, CS, Back-End Java), 14 courses, and 1 Challenge Badge (Conversor + Encriptador). This track formed the Java 17/21 + Spring Boot 3.x foundation that underpins every current microservice I ship. Challenge submissions validated engineering standards against Alura's automated grading rubric.",
            },
            t4: {
              period: "2025 → Today",
              title: "Bachelor's Degree: Computer Systems Engineering",
              desc: "Started the Bachelor in Computer Systems Engineering at IEDEP (Puebla). Parallel to professional credential tracks, providing formal DSA, discrete math, SE methodology, networking, and security grounding alongside hands-on engineering practice.",
            },
          },
        },
      },
      services: {
        title: "Technical & Specialized Services",
        subtitle:
          "Turn-key services aligned to engineering standards: backend architecture, AI/RAG pipelines for regulated compliance, conversion React SPAs, and production deployment pipelines — every deliverable is reproducible, documented, and production-ready.",
        items: {
          backend: {
            title: "Backend Architecture — Java 21 & Spring Boot 3.x",
            desc: "Monolith and microservice REST APIs with Spring Boot 3.x: layered Controller/Service/Repository, SOLID, Bean Validation (JSR-380), SpringDoc OpenAPI contracts, JWT + BCrypt Spring Security, GlobalExceptionHandler RFC-7807 errors, JPA/Hibernate with HikariCP optimization, Flyway migrations, JUnit 5/Mockito/Testcontainers suites. I design for horizontal scale: stateless, idempotent APIs, config via environment only.",
          },
          rag: {
            title: "RAG & AI App Engineering (Python · LangChain)",
            desc: "Production Retrieval-Augmented Generation systems with enforceable answer contracts. LCEL pipeline composition, 4-format document ingestion, anti-hallucination prompt gates, exact source-level citation metadata (page/section/transaction_id), FAISS persistent vector stores, append-only JSONL audit trails, Streamlit/React frontends, and non-root Docker deploys on OCI. Used in regulated fintech PLD/KYC use cases.",
          },
          data: {
            title: "Data Modeling · PostgreSQL/MySQL & JPA",
            desc: "Relational schema design from domain event storms: naming discipline, indexes with EXPLAIN ANALYZE validation, foreign-key integrity, JPA entity graph fetch tuning, audit columns, immutable retention tables, Flyway/Liquibase versioned migrations. Cloud Postgres on Neon/Supabase, managed MySQL on RDS-equivalents.",
          },
          frontend: {
            title: "React Frontends · UX, SEO & Conversion",
            desc: "React 18/19 with TypeScript strict, Vite build, Zustand store, Framer Motion entrance & scroll animations, i18next multi-language, Tailwind/CSS Variables design systems, SEO meta stack (OG/Twitter/sitemap/robots/GSC), EmailJS lead capture, Fetch/Axios layer with interceptors, mobile-first responsive to 320px, Core Web Vitals (LCP/CLS/INP) targets.",
          },
          devops: {
            title: "Light DevOps — Docker, CI/CD & Cloud Deploys",
            desc: "Multi-stage Dockerfiles (builder → slim non-root runtime), Docker Compose networking/named volumes, GitHub Actions build/lint/preview, production deploy on Oracle Cloud Infrastructure VMs, Render Docker web services, Vercel, Cloudflare Pages. 12-factor by default, HEALTHCHECK probes, resource limits, TLS-first.",
          },
          workflow: {
            title: "Contract-First Delivery & Documentation",
            desc: "Documentation-as-contract: per-project READMEs with Architecture Summary, Core Features with technical patterns, ASCII architecture diagrams, File Structure Maps, Technical Spec Sheets, Step-by-Step Execution Guides, API Reference, Deployment Runbooks, and FAQ. Conventional Commits + PRs with checklists. Zero undocumented secrets, zero half-working deploys.",
          },
          productivity: {
            title: "Shell & Git Workflow Enablement",
            desc: "Bash scripts for CI, deploy, and local reproducibility. Git/GitHub hygiene (Conventional Commits, branch protections, squash-merge, PR templates), automation via GitHub Actions, Postman collections for API regression, Cursor/Claude-assisted refactors with human architectural sign-off.",
          },
          ia: {
            title: "AI-Assisted Quality Loops (Engineering-Guarded)",
            desc: "Cursor + Claude Sonnet/Opus integration for refactors, bulk-documentation, test-writing, and SQL performance brainstorming — always with human final review against an explicit architecture contract. I use AI to accelerate the engineer, never to replace the engineering decision.",
          },
        },
      },
      portfolio: {
        title: "Featured Projects",
        subtitle:
          "8 production systems, tiered by technical depth. Every project ships with a README-as-contract (architecture summary, ASCII diagram, file structure, execution guide). Click any card to see the code or live demo.",
        tierInfo: {
          T1: "Tier 1 · Enterprise RAG & AI",
          T2: "Tier 2 · Full-Stack Business Logic",
          T3: "Tier 3 · UX, Conversion, SEO-Focused",
        },
        tabs: {
          all: "All Projects",
          T1: "Tier 1 · AI & RAG",
          T2: "Tier 2 · Full-Stack",
          T3: "Tier 3 · UX & Conversion",
        },
        viewCode: "View Code",
        viewLive: "Live Demo",
        viewMore: "View more on GitHub",
      },
      contact: {
        title: "Let's Build Something That Survives a Production Weekend.",
        subtitle: "Currently open to new opportunities · Full-time · Contract · Consulting",
        description:
          "If you're hiring a Software Engineer who treats reproducibility, auditability, and production hardening as non-negotiable — let's talk. I respond within 24 hours on LinkedIn, WhatsApp, and email. Messages submitted below are delivered via EmailJS and persisted on the Spring Boot backend for follow-up.",
        channels: "Contact Channels",
        form: {
          title: "Send a Message",
          name: "Name",
          email: "E-mail",
          subject: "Subject",
          message: "Message",
          placeholderName: "e.g. Sarah — Hiring Manager / Recruiter",
          placeholderEmail: "sarah@company.com",
          placeholderSubject: "Java/Spring Boot role · Full-time remote · MX/CET time-zone",
          placeholderMessage: "Briefly describe the role, project scope, or collaboration idea…",
          send: "Send Message",
          sending: "Sending…",
          success: "Message saved & sent. I'll reply within 24 hours. ✔️",
          error: "Error sending — please retry or email me directly. ❌",
          required: "Please fill in all fields before sending. ⚠️",
          emailHint: "I never share your email or send unsolicited messages.",
        },
        availability: {
          title: "Availability",
          status: "Open to Opportunities",
          details: [
            "Roles: Java/Spring Boot Backend · Full-Stack Spring+React · RAG/AI Application Engineer · Software Engineer",
            "Employment: Full-time · Contract · Consulting (B2B invoiceable)",
            "Location: Remote-first (MX time-zones compatible with US/EU LATAM)",
            "Start date: Immediate / 2-week notice for current commitments",
          ],
        },
      },
      footer: {
        tagline:
          "Engineered with production-grade standards: reproducible, documented, hardened. — Alberto Zompantzi",
        rights: "All rights reserved.",
        techStackBuiltWith:
          "Built with React 19 · TypeScript · Vite · Zustand · Framer Motion · i18next · TailwindCSS 3 · EmailJS",
        quickLinks: "Quick Links",
        socials: "Connect",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        skills: "Habilidades",
        services: "Servicios",
        portfolio: "Portafolio",
        contact: "Contacto",
        downloadCV: "Descargar CV",
        contactMe: "Contáctame",
        switchLang: "English",
      },
      hero: {
        greeting: "Hola, soy",
        subtitle: "Software Engineer",
        title: "Alberto Zompantzi",
        role: "Software Engineer",
        stack:
          "(Java 17/21 · Python RAG · Spring Boot 3 · React 18/19 · Microservicios · PostgreSQL · Sistemas Contenerizados)",
        tagline:
          "Medible. Reproducible. Endurecido en producción. — Diseño sistemas de extremo a extremo que se despliegan, escalan y dejan traza de auditoría.",
        thesis:
          "Filosofía de ingeniería aplicada en todo el SDLC: agentes RAG cero-alucinaciones (LangChain LCEL / FAISS / Gemini) · microservicios REST (Spring Boot 3.x / JPA + HikariCP / JUnit 5) · SPAs React/TypeScript orientadas a conversión · despliegues Docker multi-stage 12-factor en OCI, Render, Vercel y Cloudflare.",
        primaryCTA: "Ver mi trabajo",
        secondaryCTA: "Contáctame",
        liveProof: {
          label: "Despliegue Vivo · OCI Producción",
        },
      },
      stats: {
        projects: "Proyectos en Producción",
        certifications: "Certificaciones Verificadas",
        experience: "Meses de Práctica Deliberada",
        stack: "Tecnologías Principales",
      },
      about: {
        title: "Sobre Mí",
        kicker: "Ingeniería con rigor desde los primeros principios.",
        description:
          "Soy Alberto Zompantzi, Software Engineer especializado en el ecosistema Java / Spring Boot 3.x + React 18/19 con una especialización profunda en RAG (Retrieval-Augmented Generation) para flujos regulados de cumplimiento financiero. Trato cada proyecto como un producto reproducible y contenerizado: respuestas sustentadas en fuentes reales, luego diseño. Cuento con más de 37 credenciales profesionales verificadas entre Oracle ONE (Alura Latam) y DataCamp, y entrego el stack completo: desde el modelado de datos PostgreSQL con JPA/Hibernate, pasando por capas Spring Boot 3 con SOLID/Bean Validation, hasta frontends React/TypeScript con Zustand, i18n y pipelines SEO, todo cerrado con despliegues Docker multi-stage en Oracle Cloud Infrastructure, Render y Cloudflare Pages. Mi postura por defecto: documentar, contenerizar, probar, desplegar, traza-auditoría.",
        tabs: {
          story: "Historia & Tesis",
          skills: "Habilidades Core",
          stack: "Stack Tecnológico",
          certifications: "Certificaciones",
          timeline: "Trayectoria",
        },
        story: {
          p1:
            "Entré a la industria con una regla innegociable: cada entrega debe dejar un artefacto reproducible. Por eso todos mis sistemas en producción incluyen Dockerfile multi-stage, documentación README como contrato con diagramas ASCII, trazas auditoría JSONL append-only cuando el cumplimiento lo exige, y un registro de cambios de ingeniería que un compañero puede razonar sin hacerme ni una sola pregunta.",
          p2:
            "Mi proyecto insignia — FinShield AI — es un agente RAG empresarial para cumplimiento PLD/KYC financiero, detección de fraude y auditoría regulatoria. Stack: pipeline LangChain LCEL · vector store persistente FAISS-CPU (salida deliberada de ChromaDB tras 4 versiones fallidas por corrupción SQLite en monturas Docker) · Gemini 2.5 Flash + embeddings 001 · UI Streamlit multi-pestaña · traza auditoría JSONL por consulta · despliegue vivo en OCI `VM.Standard.E4.Flex` endurecido con paridad de permisos para usuario no-root appuser via HOST_UID/HOST_GID.",
          p3:
            "En backend domino la superficie Java 17/21 · Spring Boot 3.x: arquitectura por capas, Bean Validation, errores estructurados estilo RFC-7807 con @ControllerAdvice, SpringDoc OpenAPI + Swagger, JPA/Hibernate con PostgreSQL/MySQL (Neon/Supabase), afinación HikariCP, migraciones Flyway/Liquibase y suites JUnit 5 unitarias + integración. En frontend entrego React 18/19 performante con TypeScript, Zustand store, sistemas de diseño Tailwind/CSS Variables, micro-interacciones Framer Motion, internacionalización i18next y pipelines SEO con OG + Twitter Cards + sitemap + robots + verificación GSC. En ambos lados aplico gestión de configuración 12-factor via variables de entorno, nunca secretos en código.",
          p4:
            "Actualmente estoy abierto a roles como: Software Engineer · Java/Spring Boot Backend Engineer · Full-Stack Engineer (Spring + React) · AI Application Engineer (RAG / LangChain / Python) · puestos de Ingeniería Backend con mandato Microservicios y Cloud-first. Si construyes algo que debe sobrevivir un fin de semana de producción real, me gustaría escucharlo.",
        },
        skills: {
          backend: {
            title: "Backend Engineering — Java 17/21 · Spring Boot 3.x",
            desc: "APIs REST en producción aplicando arquitectura por capas, SOLID, manejo de excepciones ControllerAdvice, Bean Validation, proyección DTO, SpringDoc OpenAPI, persistencia JPA/Hibernate con afinación HikariCP, JUnit 5 suites unitarias/integrales. Diseño para escala horizontal: servicios stateless, config 12-factor, contenedor primero.",
            keywords: [
              "Java 17/21 Records & Virtual Threads",
              "Spring Boot 3.x · Web · Security · Data JPA · Validation",
              "Microservicios · API Gateway · Feign · Resilience4j",
              "SpringDoc OpenAPI / Swagger UI",
              "JPA & Hibernate · JPQL · mitigación N+1 · Fetch Graphs",
              "Afinación HikariCP y límites transacción",
              "Migraciones Flyway / Liquibase",
              "JUnit 5 · Mockito · Testcontainers Postgres",
            ],
          },
          rag: {
            title: "Ingeniería AI / RAG — Python · LangChain · FAISS",
            desc: "Pipelines empresariales de Generación Aumentada por Recuperación para casos de uso de cumplimiento regulado. Preguntas y respuestas sustentadas en fuentes con puertas anti-alucinaciones en el prompt, citaciones exactas (página PDF, § Markdown, transaction_id CSV), trazas auditoría append-only, vector stores FAISS persistentes y composición LangChain LCEL. Despliegue producción vivo en OCI con paridad de permisos en contenedor.",
            keywords: [
              "LangChain LCEL (Expression Language)",
              "FAISS-CPU vector store persistente",
              "Google Gemini 2.5 Flash · Embeddings 001",
              "PyPDF · CSVLoader · parser OpenAPI custom",
              "Chunking RecursiveCharacter 800/150",
              "Puertas Prompt Anti-alucinaciones + Fallback contrato",
              "Trazas Auditoría JSONL (retención 7a)",
              "Streamlit multi-pestaña, switcher modelo runtime",
            ],
          },
          frontend: {
            title: "Frontend Engineering — React 18/19 · TypeScript · Tailwind",
            desc: "SPAs React/TypeScript orientadas a conversión: Grid/Flexbox responsive, Zustand state management, micro-interacciones Framer Motion, pipelines multi-idioma i18next, stacks SEO (sitemap + robots + OG/Twitter + verificación GSC), captura leads EmailJS y capas cliente Fetch/Axios. Mobile-first hasta 320px, Core Web Vitals primero.",
            keywords: [
              "React 18/19 con Hooks · StrictMode",
              "TypeScript strict, Discriminated Unions, genéricos",
              "Vite 6/7 · builds ESM · tuning Rollup",
              "Zustand store con middleware persist",
              "TailwindCSS 3 + sistemas diseño CSS Variables",
              "Animaciones entrada/scroll Framer Motion",
              "i18next browser detector + localStorage cache",
              "SEO: meta OG/Twitter · sitemap · robots · canonical",
            ],
          },
          data: {
            title: "Ingeniería de Datos — PostgreSQL/MySQL · JPA/Hibernate",
            desc: "Diseño esquemas relacionales desde eventos de negocio. Estrategia de índices, tuning de consultas via EXPLAIN ANALYZE, diseño entity graph JPA para eficiencia fetch, y PostgreSQL cloud en Neon/Supabase/Render. Esquemas listos para auditoría: soft-delete, timestamps created/updated y tablas retención inmutables donde la regulación lo pide.",
            keywords: [
              "PostgreSQL 16 · JSONB · CTEs · Window Functions",
              "MySQL 8 · Window · Common Table Expressions",
              "EXPLAIN ANALYZE · índices B-tree / Parciales",
              "JPA/Hibernate · tuning FetchType · @EntityGraph",
              "Neon serverless Postgres · Supabase",
              "Migraciones versionadas Flyway · scripts repetibles",
              "Soft-delete + columnas auditoría a nivel fila",
              "Modelado datos desde tormentas eventos dominio",
            ],
          },
          infrastructure: {
            title: "Cloud & Infraestructura — OCI · Docker · 12-Factor",
            desc: "Sistemas desplegables de cero a HTTPS vivo. Docker builds multi-stage con usuarios no-root, Docker Compose networking, aprovisionamiento VM Oracle Cloud (OCI), Render contenedor, Cloudflare Pages edge, y Vercel para React. Checklist endurecimiento: secrets solo env-vars, CIDR scoping ingress, terminación TLS, probes salud, límites recursos contenedor.",
            keywords: [
              "Docker Multi-stage · Slim images · USER no-root",
              "Docker Compose · named volumes + paridad bind mount",
              "Oracle Cloud (OCI) · Ubuntu · reglas ingress",
              "Render Docker Web Services · conciencia cold-start",
              "Cloudflare Pages · reescrituras SPA · reglas cache",
              "Vercel · deploys Next/React via GitHub",
              "12-Factor · variables entorno única config",
              "Probes HEALTHCHECK · límites memoria/cpu",
            ],
          },
          workflow: {
            title: "Workflow & Tooling — Git · Bash · IA Asistida",
            desc: "Higiene Git/GitHub profesional: Conventional Commits, feature branch → PR → squash-and-merge, títulos semánticos PR. Bash por defecto, GitHub Actions para QA estático y refactors/documentos asistidos por Cursor/Claude — siempre con revisión arquitectónica humana antes del merge. Escribo el código como me gustaría revisarlo.",
            keywords: [
              "Conventional Commits (feat/fix/docs/chore/refactor)",
              "Git flow: feature → PR → squash-merge → main → deploy",
              "Scripts Bash / POSIX shell y one-liners",
              "GitHub Actions · lint + build + preview",
              "Cursor IDE + Claude refactor asistido",
              "Checklists Code Review: SOLID, tests, seguridad",
              "Colecciones Postman + regresión manual contrato",
              "READMEs como contrato (diagramas ASCII)",
            ],
          },
        },
        stack: {
          languages: {
            title: "Lenguajes",
            items: ["Java 17/21", "Python 3.11+", "TypeScript", "JavaScript ES2024", "SQL", "Bash/POSIX Shell"],
          },
          frameworks: {
            title: "Frameworks & Runtimes",
            items: ["Spring Boot 3.x", "Spring Data JPA", "Spring Security", "LangChain", "LangChain LCEL", "React 18/19", "Vite 6/7", "Streamlit"],
          },
          datastores: {
            title: "Bases de Datos & Almacenamiento",
            items: ["PostgreSQL", "MySQL", "FAISS-CPU Vector Store", "Neon Serverless", "Supabase", "JPA/Hibernate", "Flyway", "HikariCP"],
          },
          cloud: {
            title: "Cloud, Contenedores & Edge",
            items: ["Docker Multi-stage", "Docker Compose", "Oracle Cloud (OCI)", "Render", "Vercel", "Cloudflare Pages", "GitHub Actions", "Let's Encrypt TLS"],
          },
          frontend: {
            title: "Toolchain Frontend",
            items: ["TailwindCSS 3", "CSS Variables Design System", "Zustand", "Framer Motion", "i18next", "EmailJS", "Axios / Fetch API", "SEO (sitemap/robots/OG/GSC)"],
          },
          practices: {
            title: "Prácticas de Calidad",
            items: ["12-Factor Apps", "Principios SOLID", "Microservicios", "JUnit 5 · Mockito", "Testcontainers", "RAG Anti-alucinaciones", "Seguridad Contenedores (no-root)", "Accesibilidad (foco WCAG AA)"],
          },
        },
        experience: {
          viewProject: "Ver Proyecto",
          sectionSubtitle: "Selección de sistemas enviados a producción, ordenados por profundidad técnica.",
          tierBadge: { T1: "Tier 1 · RAG & AI Empresarial", T2: "Tier 2 · Full-Stack Lógica Negocio", T3: "Tier 3 · UI/UX y Conversión" },
          items: {
            finshield: {
              title: "FinShield AI — Agente RAG Empresarial",
              tier: "T1",
              subtitle: "Python 3.11 · LangChain LCEL · FAISS · Gemini · Streamlit · Docker Multi-stage · OCI Vivo",
              stack: ["Python", "LangChain", "FAISS", "Gemini 2.5", "Streamlit", "Docker", "OCI"],
              desc: "Agente RAG empresarial para cumplimiento PLD/KYC financiero, detección de fraude y auditoría regulatoria CNBV/UIF. Ingesta 4 formatos (PDF/MD/CSV/JSON) con chunking RecursiveCharacter, pipeline LangChain LCEL con puerta anti-alucinaciones 6 reglas exigiendo citaciones exactas (pág PDF · § MD · transaction_id CSV). Vector store FAISS persistente con traza auditoría JSONL append-only. Despliegue vivo en OCI `VM.Standard.E4.Flex` Ubuntu 24.04 con paridad permisos usuario no-root via build args HOST_UID/HOST_GID. Accesible en 140.84.168.9:8501.",
              tags: ["RAG", "Anti-alucinaciones", "Auditoría", "FAISS", "LCEL", "Cumplimiento", "Oracle Cloud", "Docker Multi-stage"],
            },
            tzompcomer_backend: {
              title: "Tzompcomer — Backend E-Commerce B2B",
              tier: "T2",
              subtitle: "Java 17 · Spring Boot 3.3.1 · PostgreSQL · JPA/HikariCP · Docker · JWT · Swagger UI",
              stack: ["Java 17", "Spring Boot 3", "Spring Security JWT", "PostgreSQL", "JPA/Hibernate", "HikariCP", "Flyway", "Docker"],
              desc: "Backend plataforma e-commerce B2B (vertical comercio mayorista): arquitectura 4 capas Spring Boot 3.3.1 (Controller → Service → Repository → Entity) con control de acceso JWT por roles (Cliente/Admin). Superficies negocio: catálogo productos con categorías + variantes SKU, carrito con bloqueos línea-artículo seguros bajo concurrencia, pipeline órdenes compra, inventario con disparadores stock bajo, dashboards operativos admin. Afinación pool conexiones HikariCP, migraciones versionadas Flyway, contrato API SpringDoc OpenAPI/SwaggerUI, persistencia PostgreSQL. Dockerfile multi-stage + arranque local docker-compose un comando, despliegue producción en Render.",
              tags: ["Java 17", "Spring Boot 3", "Preparado para Microservicios", "JWT RBAC", "PostgreSQL", "HikariCP", "Flyway", "Comercio B2B"],
            },
            tzompcomer_frontend: {
              title: "Tzompcomer — Frontend E-Commerce B2B",
              tier: "T2",
              subtitle: "React 19 · TypeScript · Vite · TailwindCSS · Zustand · Axios · Deploy Render",
              stack: ["React 19", "TypeScript", "Vite", "TailwindCSS 3", "Zustand", "Axios", "JWT auth", "Cloudflare/Vercel"],
              desc: "SPA tienda empresa-a-empresa que espeja el contrato backend Tzompcomer: exploración catálogo con filtros, detalle SKU, zona cliente autenticada con historial órdenes, carrito con UI optimista líneas artículo, superficies dashboards por rol, flujos registro + login JWT, gestión admin productos/SKUs. Zustand store con persist middleware, Axios interceptores request/response con token refresh, layouts responsivos TailwindCSS, meta SEO, Core Web Vitals optimizados, producción Cloudflare Pages o Vercel.",
              tags: ["React 19", "TypeScript", "Zustand", "Axios", "Tailwind", "Responsivo", "SPA", "Auth JWT"],
            },
            divertikids_backend: {
              title: "DivertiKids Backend — Microservicio Reservas",
              tier: "T2",
              subtitle: "Java 21 · Spring Boot 3.4 · PostgreSQL (Neon) · SpringDoc OpenAPI · Docker · Render Vivo",
              stack: ["Java 21", "Spring Boot 3.4", "Spring Validation", "PostgreSQL Neon", "JPA", "SpringDoc OpenAPI 2.8", "Docker", "Render"],
              desc: "Microservicio reservas para sala de eventos y entretenimiento infantil. Ciclo vida completo: crear con Bean Validation (fecha futura, ventana horario coherente, campos no vacíos), búsquedas por email cliente, cancel idempotente por id devolviendo enum status. Manejo estructurado errores via GlobalExceptionHandler, auto-documentación SwaggerUI SpringDoc OpenAPI 2.8.5, persistencia PostgreSQL Neon, Dockerfile contenerizado, despliegue vivo Docker Render con healthcheck y arquitectura amigable cold-start Render. Frontend emparejado precalienta contenedor via no-cors GET al importar módulo.",
              tags: ["Java 21 Virtual Threads", "Spring Boot 3.4", "PostgreSQL Neon", "SpringDoc OpenAPI", "Motor Reservas", "Docker", "Render"],
            },
            divertikids_frontend: {
              title: "DivertiKids Frontend — SPA Reservas",
              tier: "T2",
              subtitle: "React 19.2 · Vite 7 · CSS Variables Design System · Fetch Layer · Cloudflare Pages Vivo",
              stack: ["React 19", "Vite 7", "CSS Variables", "Fetch API", "Google Fonts", "Font Awesome 7", "Pipeline SEO", "Cloudflare Pages"],
              desc: "Single-page React 19 sin Redux, sin state library: catálogo 11 talleres data-driven más calculadora paquetes con 9 niveles × 5 actividades descuentos por volumen, formulario reserva controlado conectado a endpoints REST backend Render, smart wake-up backend fire-and-forget no-cors al importar módulo para vencer el cold-start gratuito Render. Pipeline SEO completo: meta description, 12 keywords, OG + Twitter 1200×630 cards, sitemap.xml, robots.txt, verificación Google Search Console. Edge deploy Cloudflare Pages. Mobile-first hasta iPhone SE (320px).",
              tags: ["React 19", "Vite 7", "UI Data-Driven", "Calculador Paquetes", "Pipeline SEO", "CTA WhatsApp", "Mobile-first", "Cloudflare Pages"],
            },
            casazompantzi: {
              title: "Casa Zompantzi — Sitio Corporativo",
              tier: "T3",
              subtitle: "React · SEO Técnico · Core Web Vitals · Cloudflare Pages",
              stack: ["React", "Vite", "CSS Variables", "SEO Técnico", "GSC verificado", "Cloudflare Pages"],
              desc: "Sitio corporativo negocio comercial familiar con arquitectura información SEO local primero: portada, acerca, galería servicios, contacto con formulario captura lead. Foco pesado SEO técnico: optimización Core Web Vitals (metas LCP < 2.5s / CLS < 0.1 / INP < 200ms), JSON-LD schema.org LocalBusiness para resultados enriquecidos, stack meta + OG + Twitter, sitemap/robots + verificación Google Search Console. Edge deploy Cloudflare Pages.",
              tags: ["React", "SEO Técnico", "Core Web Vitals", "LCP/CLS/INP", "Schema.org", "SEO Local", "GSC verificado", "Cloudflare Pages"],
            },
            sunnyside: {
              title: "Sunnyside Muebles Infantiles — Tienda Estática",
              tier: "T3",
              subtitle: "Vanilla HTML5 + CSS3 + ES6 · Cero Build · Checkout WhatsApp · Cloudflare Pages",
              stack: ["HTML5", "CSS3 Variables", "ES6+ JavaScript", "Font Awesome 7", "Google Fonts", "Pipeline SEO", "Cloudflare Pages"],
              desc: "Tienda muebles infantiles sin framework, cero bundle. Archivos estáticos puros: renderizador catálogo 24 SKU data-driven único (insertAdjacentHTML), sistema diseño CSS Variables con 4 paletas pastel acento para 6 categorías, checkout WhatsApp determinístico como único <a href='wa.me?...'> con mensaje pedido español prellenado por SKU. Stack SEO completo: description + 10 keywords + canonical + OG/Twitter 1200×630 + sitemap.xml 6-URL + robots.txt + HTML verificación GSC. Funciona sin JavaScript para superficies textuales. Deploy directo Cloudflare Pages.",
              tags: ["Sin Framework", "Cero-NPM", "CSS Mobile-First", "Catálogo Data-Driven", "Checkout WhatsApp", "Pipeline SEO", "Baseline Lighthouse 100", "Cloudflare Pages"],
            },
            portfolio: {
              title: "Alberto Zompantzi — Portafolio (Este Sitio)",
              tier: "T3",
              subtitle: "React 19 · TypeScript · Vite · Zustand · Framer Motion · i18next · TailwindCSS · Responsive",
              stack: ["React 19", "TypeScript Strict", "Vite 7", "Zustand", "Framer Motion", "i18next EN/ES", "TailwindCSS 3", "EmailJS leads"],
              desc: "Mi portafolio. Construido con React 19 + TypeScript strict + Vite. Zustand store global estado idioma/UI, Framer Motion animaciones entrada y scroll disparadas, traducciones i18next completo EN/ES con cache localStorage, sistema diseño TailwindCSS 3 + CSS Variables (escala tipográfica, grid espaciado, paleta), 8 proyectos por profundidad técnica, 37+ certificaciones estructuradas por entidad emisora, metas accesibilidad WCAG-AA, meta SEO + canonical + OG + Twitter, captura leads conectada EmailJS, totalmente responsivo hasta 320px. Estás aquí.",
              tags: ["React 19", "TypeScript", "Zustand", "Framer Motion", "i18next EN↔ES", "TailwindCSS 3", "EmailJS", "Totalmente Responsivo"],
            },
          },
        },
        education: {
          title: "Licenciatura en Ingeniería en Sistemas Computacionales",
          school: "Instituto de Educación a Distancia del Estado de Puebla (IEDEP) · 2025 – Presente",
          desc: "Foco en Estructuras de Datos y análisis de Algoritmos, matemáticas discretas para Ciencias de la Computación, metodología Ingeniería de Software (requerimientos, diseño, verificación), Desarrollo Web Moderno (Java EE / React) y fundamentos redes y seguridad informática. Carrera en curso, paralela a pistas rigurosas certificación Oracle ONE + DataCamp para asegurar entrega continua de habilidades contra plazo.",
        },
        certifications: {
          totalBadge: "37+ Credenciales Profesionales Verificadas",
          subtitle: "Credenciales curadas entre Oracle ONE (Alura Latam) y DataCamp — expedidas tras exámenes aprobados, entregas de proyectos y evaluaciones skill-track.",
          groups: {
            oracleOne: {
              title: "Oracle ONE · Alura Latam — 18 Credenciales Verificadas",
              formationsTitle: "3 Formaciones Especialización",
              coursesTitle: "14 Cursos Completados",
              badgesTitle: "1 Insignia Challenge Oracle ONE",
              formations: {
                beginner: {
                  title: "Formación 1 — Principiante en Programación T6 · ONE",
                  competencies:
                    "Programación procedural con JavaScript/HTML/CSS, flujos colaborativos Git/GitHub, fundamentos ágiles, entrega proyectos con foco portafolio, desarrollo basado en retos.",
                },
                cs: {
                  title: "Formación 2 — Ciencias de la Computación T6 · ONE",
                  competencies:
                    "Fundamentos Java POO: encapsulamiento, herencia, polimorfismo, interfaces, colecciones Java, manejo excepciones, fundamentos pruebas unitarias JUnit.",
                },
                backend: {
                  title: "Formación 3 — Back-End Java T6 · ONE",
                  competencies:
                    "APIs REST Spring Boot 3, persistencia Spring Data JPA + Hibernate, Bean Validation, capas MVC, integración MySQL/PostgreSQL, contratos Swagger/OpenAPI, pipelines despliegue.",
                },
              },
              courses: {
                git: {
                  title: "Git y GitHub: Repositorios, Commit y Colaboración",
                  competencies:
                    "Branches, remotos, resolución conflictos, flujos Pull Request y code review, higiene Conventional Commits, releases etiquetadas.",
                },
                htmlCss: {
                  title: "HTML5 y CSS3 Parte 1/2 · Mi Primera Página Web · Clases, Posicionamiento y Flexbox",
                  competencies:
                    "Landmarks HTML semánticos, CSS responsive con Flexbox/Grid, cascadas mobile-first, alt-text accesibilidad, fundamentos meta OG/Twitter.",
                },
                js1: {
                  title: "JavaScript Explorando el Lenguaje de la Web",
                  competencies:
                    "Manipulación DOM, delegación eventos, closures, scope chain, módulos ES6, Fetch API con async/await + manejo errores.",
                },
                js2: {
                  title: "JavaScript en la Web · Almacenamiento Datos Navegador y Animaciones",
                  competencies:
                    "localStorage/sessionStorage, patrones IndexedDB, Web Animations API y CSS keyframes, conciencia Web Vitals (LCP/FID/CLS).",
                },
                js3: {
                  title: "JavaScript Consumiendo y Manipulando API REST + Métodos de Array en JS",
                  competencies:
                    "Integración cliente RESTful, métodos array avanzados (map/filter/reduce/sort/some/every), parse JSON defensivo, validación forma DTO tipada en cliente.",
                },
                javaOop: {
                  title: "Java Aplicando la Orientación a Objetos",
                  competencies:
                    "Paquetes, modificadores acceso, encapsulamiento getters/setters, constructores, this/super, clases abstractas, interfaces, Java records preview.",
                },
                javaT1: {
                  title: "Java Creando tu Primera Aplicación",
                  competencies:
                    "Pila JDK/JRE/JVM, punto entrada main, tipos primitivos/wrapper, Scanner E/S CLI, flujos control if/switch/bucles, Maven básicos.",
                },
                javaT2: {
                  title: "Java Aplicando la Orientación a Objetos (Java Collections)",
                  competencies:
                    "Interfaces List/Set/Map, ArrayList/LinkedList/HashSet/HashMap, Iterator vs for-each, Collections.sort(), Comparable vs Comparator.",
                },
                javaT3: {
                  title: "Estructuras de Datos y Algoritmos con Java · Listas Enlazadas, Pilas y Colas",
                  competencies:
                    "Razonamiento complejidad (Big-O), tradeoffs LinkedList vs ArrayList, Stack (LIFO), Queue (FIFO), Deque, intuición recorrido árboles para índices SQL.",
                },
                javaTesting: {
                  title: "Java y Testing · TDD con JUnit 5 y Mockito",
                  competencies:
                    "Ciclo vida JUnit 5 (@BeforeEach/@AfterEach), librería aserciones, pruebas parametrizadas, mocks/spies/injectMocks Mockito, ciclo TDD rojo-verde-refactor.",
                },
                spring: {
                  title: "Spring Boot 3 · Desarrollo API REST con Spring Boot + Spring Data JPA",
                  competencies:
                    "Starters Spring Initializr, Controller/Service/Repository por capas, @RestController, @PathVariable/@RequestParam, ResponseEntity, DTOs, excepciones, repositorios Spring Data JPA.",
                },
                spring2: {
                  title: "Spring Boot 3 · Aplicando Buenas Prácticas y Protegiendo una API REST",
                  competencies:
                    "Auth stateless JWT Spring Security, hash contraseñas BCrypt, manejador global errores @ControllerAdvice, Bean Validation (JSR-380) con @Valid, actuator health/info, niveles logging.",
                },
                sql: {
                  title: "Consultas SQL con MySQL · Manipulación y Análisis de Datos",
                  competencies:
                    "Subconsultas, JOINs INNER/LEFT/RIGHT, GROUP BY + HAVING, window functions OVER (PARTITION BY), índices, lectura plan EXPLAIN.",
                },
                db: {
                  title: "MySQL · Consultas Avanzadas y Procedimientos Almacenados",
                  competencies:
                    "Procedimientos almacenados, triggers, semántica transaccional ACID, niveles aislamiento, conciencia deadlocks, fundamentos backup/restore.",
                },
              },
              badges: {
                challenger: {
                  title: "Insignia Oracle ONE Challenger — Conversor Monedas + Encriptador Texto",
                  competencies:
                    "Dos entregas reto superando calificación automática Alura. Conversor monedas con consumo live-rate Fetch + UI encriptador texto estilo Enigma. Ambos proyectos requerían repo Git/GitHub con README como contrato.",
                },
              },
            },
            datacamp: {
              title: "DataCamp · 19 Credenciales Verificadas",
              tracksTitle: "5 Skill Tracks Completados",
              coursesTitle: "14 Cursos Verificados",
              tracks: {
                cloud: {
                  title: "AWS Cloud Fundamentals Skill Track",
                  competencies:
                    "Infraestructura Global AWS, políticas identidad IAM, clases almacenamiento S3, cómputo EC2, RDS/Aurora, subredes redes VPC, modelo responsabilidad compartida AWS, 6 pilares Well-Architected, cost explorer + Budgets.",
                },
                git: {
                  title: "Git & GitHub Foundations Skill Track",
                  competencies:
                    "Objetos Git: blob/tree/commit, arquitectura tres-árboles (working/staging/HEAD), rebasing vs merging, recuperación detached HEAD, stash, cherry-pick, squash, disciplina revisión código en PRs.",
                },
                docker: {
                  title: "Docker Fundamentals Skill Track",
                  competencies:
                    "Capas Union FS, mejores prácticas Dockerfile, multi-stage, distinción COPY/ADD, volúmenes vs bind mounts, networking Docker Compose, entrypoint vs cmd, USER no-root, .dockerignore.",
                },
                bash: {
                  title: "Bash Scripting & Shell Fundamentals Skill Track",
                  competencies:
                    "Bash POSIX: variables/comillas/expansión, for/while bucles, if/case/test, códigos salida, pipes/redirecciones, one-liners awk/sed, xargs, find + exec, planificación crontab, escritura scripts idempotentes.",
                },
                dataviz: {
                  title: "Data Visualization Skill Track (Python / Matplotlib / Seaborn)",
                  competencies:
                    "Gramática gráficos: mapeo datos a estética, mejores prácticas percepción color, subplots matplotlib, distribuciones/categóricos seaborn, elección gráfico por mensaje (ranking / parte-todo / correlación / distribución / desviación / flujo).",
                },
              },
              courses: {
                awsCloud: {
                  title: "AWS Cloud Practitioner Essentials",
                  competencies: "Modelos precios AWS, clases almacenamiento S3, métricas alarmas CloudWatch, políticas roles IAM, RDS Multi-AZ, responsabilidad compartida, Well-Architected.",
                },
                awsArchitecting: {
                  title: "Architecting on AWS — Core Services",
                  competencies: "Decisiones arquitectónicas: multi-AZ, réplicas lectura, subredes VPC públicas/privadas, NAT gateways, security groups vs NACLs.",
                },
                gitIntro: {
                  title: "Introduction to Git",
                  competencies: "Init repo local, diff, commit, log --graph --decorate --oneline, tags anotados, estrategias rollback (reset --soft/mixed/hard, revert).",
                },
                gitCollab: {
                  title: "Collaborating with Git & GitHub",
                  competencies: "Ciclo vida PR, estrategias rebase vs merge, checklists code review, resolución conflictos merge, CODEOWNERS y protección ramas.",
                },
                dockerIntro: {
                  title: "Introduction to Docker",
                  competencies: "Contenedor vs VM, daemon Docker, push/pull registry, flags run, modos red (bridge/host/none), EXPOSE vs -p.",
                },
                dockerAdvanced: {
                  title: "Advanced Docker: Multi-stage & Hardening",
                  competencies: "Multi-stage builder→runtime, namespace usuario, HEALTHCHECK CMD/interval, conciencia seccomp/cap-drop, distroless vs slim, COPY --from=<stage>.",
                },
                bashIntro: {
                  title: "Introduction to Bash",
                  competencies: "Sustitución comando, expansión variable, corchetes [[, bucles sobre nombres archivo, exit 0 no cero, redirects stderr/stdout 2>&1.",
                },
                bashScripts: {
                  title: "Writing Bash Scripts for Data Workflows",
                  competencies: "set -euo pipefail, trap limpieza, heredocs, getopts, lectura CSV línea-a-línea, funciones manejo errores.",
                },
                sqlIntro: {
                  title: "Introduction to SQL",
                  competencies: "SELECT FROM WHERE ORDER BY LIMIT, funciones cadena/fecha/número, BETWEEN IN LIKE comodines, JOINs básicos claves.",
                },
                sqlJoins: {
                  title: "Joining Data in SQL",
                  competencies: "INNER LEFT FULL OUTER CROSS JOINs, operaciones conjuntos UNION INTERSECT EXCEPT, semi joins / anti joins, self-joins.",
                },
                sqlSummaries: {
                  title: "Summarizing Data with SQL",
                  competencies: "COUNT SUM AVG MIN MAX, GROUP BY, HAVING, CASE WHEN, COALESCE NULLIF, window functions ROW_NUMBER RANK DENSE_RANK LAG LEAD.",
                },
                pandasFoundations: {
                  title: "Data Manipulation with pandas",
                  competencies: "DataFrame/Series, indexación iloc loc, máscaras booleanas, groupby.agg(), .apply(), pd.merge(), reshape pivot/melt.",
                },
                matplotlib: {
                  title: "Introduction to Data Visualization with Matplotlib",
                  competencies: "Figures & Axes, tipos gráfico (barra línea dispersión histograma caja violín), anotaciones y flechas, estilos rcParams, guardado dpi para impresión/web.",
                },
                seaborn: {
                  title: "Intermediate Data Visualization with Seaborn",
                  competencies: "Gráficos categóricos (stripplot/boxplot/barplot), relacionales (scatter/line), distribución (kde/hist), pairplot/heatmap, temas y paletas seaborn.",
                },
              },
            },
          },
        },
        timeline: {
          items: {
            t1: {
              period: "T1 2025 → Hoy",
              title: "Construcción Portafolio en Producción",
              desc: "Concebidos y enviados 8+ proyectos producción: FinShield AI RAG empresarial vivo en OCI, Tzompcomer e-commerce B2B (Spring Boot + React), sistema reservas DivertiKids (Spring Boot 3.4 en Render + React Cloudflare Pages), Sunnyside estático, sitio corporativo SEO Casa Zompantzi, este portafolio con 37+ certificaciones y i18n EN/ES. Cada sistema contenerizado Docker multi-stage cuando aplica, README completo documentado, desplegado hosts edge reales.",
            },
            t2: {
              period: "T4 2024 → T1 2025",
              title: "Completado DataCamp Skill Tracks",
              desc: "Terminados 5 DataCamp Skill Tracks y 14 cursos DataCamp verificados cubriendo AWS Cloud, colaboración Git/GitHub, Docker multi-stage, scripting Bash para pipelines datos y visualización datos (pandas/Matplotlib/Seaborn). Solapamiento stack con deberes ingeniería permitió aplicación inmediata (patrones Docker en todo nuevo microservicio Spring Boot, automatización Bash para deploys OCI).",
            },
            t3: {
              period: "T1 2024 → T4 2024",
              title: "Programa Oracle ONE (Alura Latam)",
              desc: "Completadas 3 Formaciones enteras (Principiante, CS, Back-End Java), 14 cursos, y 1 Insignia Challenge (Conversor + Encriptador). Esta pista formó la base Java 17/21 + Spring Boot 3.x sobre la que construyo cada microservicio actual. Entregas reto validaron estándares ingenieriles frente a rúbricas calificación automatizadas Alura.",
            },
            t4: {
              period: "2025 → Hoy",
              title: "Carrera Ingeniería Sistemas Computacionales",
              desc: "Iniciada Licenciatura Ingeniería en Sistemas Computacionales en IEDEP (Puebla). Paralela a pistas credenciales profesionales, aporta fundamentos formales DSA, matemática discreta, metodología IS, redes y seguridad junto a práctica ingenieril constante.",
            },
          },
        },
      },
      services: {
        title: "Servicios Técnicos & Especializados",
        subtitle:
          "Servicios llave-en-mano alineados a estándares ingeniería: arquitectura backend, pipelines AI/RAG para cumplimiento regulado, SPAs React orientadas a conversión, y pipelines despliegue producción — cada entrega es reproducible, documentada y lista para producción.",
        items: {
          backend: {
            title: "Arquitectura Backend — Java 21 & Spring Boot 3.x",
            desc: "APIs REST monolíticas y microservicio con Spring Boot 3.x: Controller/Service/Repository por capas, SOLID, Bean Validation (JSR-380), contratos SpringDoc OpenAPI, errores RFC-7807 GlobalExceptionHandler, JPA/Hibernate con optimización HikariCP, migraciones Flyway, suites JUnit 5/Mockito/Testcontainers. Diseño para escala horizontal: stateless, APIs idempotentes, config solo vía entorno.",
          },
          rag: {
            title: "Ingeniería Apps RAG & AI (Python · LangChain)",
            desc: "Sistemas RAG producción con contratos respuesta ejecutables. Composición pipeline LCEL, ingesta documento 4 formatos, puertas prompt anti-alucinaciones, metadatos citación a nivel fuente exacto (página/sección/transaction_id), vector stores FAISS persistentes, trazas auditoría JSONL append-only, frontends Streamlit/React, y despliegues Docker no-root en OCI. Usados en casos PLD/KYC financieros regulados.",
          },
          data: {
            title: "Modelado Datos · PostgreSQL/MySQL & JPA",
            desc: "Diseño esquema relacional desde tormentas eventos dominio: disciplina nombres, índices validados con EXPLAIN ANALYZE, integridad llave foránea, tuning entity graph JPA para eficiencia fetch, columnas auditoría, tablas retención inmutables, migraciones versionadas Flyway/Liquibase. Postgres cloud en Neon/Supabase, MySQL gestionado en equivalentes RDS.",
          },
          frontend: {
            title: "Frontends React · UX, SEO y Conversión",
            desc: "React 18/19 con TypeScript strict, build Vite, Zustand store, animaciones entrada y scroll Framer Motion, multi-idioma i18next, sistemas diseño Tailwind/CSS Variables, stack meta SEO (OG/Twitter/sitemap/robots/GSC), captura leads EmailJS, capa Fetch/Axios con interceptores, mobile-first responsive hasta 320px, metas Core Web Vitals (LCP/CLS/INP).",
          },
          devops: {
            title: "DevOps Ligero — Docker, CI/CD & Cloud Despliegues",
            desc: "Dockerfiles multi-stage (builder → runtime slim no-root), Docker Compose networking/named volumes, GitHub Actions build/lint/preview, producción en Oracle Cloud Infrastructure VMs, Render Docker web services, Vercel, Cloudflare Pages. 12-factor por defecto, probes HEALTHCHECK, límites recursos, TLS primero.",
          },
          workflow: {
            title: "Entrega Contrato-Primero & Documentación",
            desc: "Documentación como contrato: READMEs por proyecto con Resumen Arquitectura, Características core con patrones técnicos, diagramas arquitectura ASCII, Mapas Estructura Archivo, Fichas Técnicas, Guías Ejecución Paso-a-Paso, Referencias API, Manuales Despliegue y FAQ. Conventional Commits + PRs con listas verificación. Cero secretos sin documentar, cero despliegues a medias.",
          },
          productivity: {
            title: "Habilitación Shell & Flujos Git",
            desc: "Scripts Bash para CI, despliegue y reproducibilidad local. Higiene Git/GitHub (Conventional Commits, protecciones rama, squash-merge, plantillas PR), automatizaciones mediante GitHub Actions, colecciones Postman para regresión API, refactors asistidos Cursor/Claude con aprobación arquitectónica humana.",
          },
          ia: {
            title: "Bucles Calidad Asistidos por IA (Resguardados por Ingeniero)",
            desc: "Integración Cursor + Claude Sonnet/Opus para refactors, documentación masiva, escritura tests y lluvia ideas rendimiento SQL — siempre con revisión final humana frente a contrato arquitectónico explícito. Uso IA para acelerar al ingeniero, nunca para reemplazar la decisión de ingeniería.",
          },
        },
      },
      portfolio: {
        title: "Proyectos Destacados",
        subtitle:
          "8 sistemas producción, ordenados por profundidad técnica. Cada proyecto cuenta con README como contrato (resumen arquitectura, diagrama ASCII, estructura archivos, guía ejecución). Haz clic en cualquier tarjeta para ver código o demo en vivo.",
        tierInfo: {
          T1: "Tier 1 · AI & RAG Empresarial",
          T2: "Tier 2 · Full-Stack Lógica Negocio",
          T3: "Tier 3 · UX, Conversión, Enfocado SEO",
        },
        tabs: {
          all: "Todos los Proyectos",
          T1: "Tier 1 · AI & RAG",
          T2: "Tier 2 · Full-Stack",
          T3: "Tier 3 · UX & Conversión",
        },
        viewCode: "Ver Código",
        viewLive: "Demo Vivo",
        viewMore: "Ver más en GitHub",
      },
      contact: {
        title: "Construyamos Algo que Sobreviva un Fin de Semana en Producción.",
        subtitle: "Actualmente abierto a nuevas oportunidades · Tiempo completo · Contrato · Consultoría",
        description:
          "Si estás contratando un Software Engineer que trate reproducibilidad, auditabilidad y endurecimiento producción como no negociables — hablemos. Respondo en menos de 24h por LinkedIn, WhatsApp y correo. Los mensajes abajo se entregan vía EmailJS y persisten en el backend Spring Boot para seguimiento.",
        channels: "Canales de Contacto",
        form: {
          title: "Enviar Mensaje",
          name: "Nombre",
          email: "Correo",
          subject: "Asunto",
          message: "Mensaje",
          placeholderName: "Ej. Sarah — Hiring Manager / Recruiter",
          placeholderEmail: "sarah@empresa.com",
          placeholderSubject: "Puesto Java/Spring Boot · Remoto tiempo completo · zona MX/CET",
          placeholderMessage: "Describe brevemente el rol, alcance proyecto o idea de colaboración…",
          send: "Enviar Mensaje",
          sending: "Enviando…",
          success: "Mensaje guardado y enviado. Te responderé en menos de 24h. ✔️",
          error: "Error al enviar — reinténtalo o escríbeme directamente por email. ❌",
          required: "Por favor completa todos los campos antes de enviar. ⚠️",
          emailHint: "Nunca comparto tu correo ni envío mensajes no solicitados.",
        },
        availability: {
          title: "Disponibilidad",
          status: "Abierto a Oportunidades",
          details: [
            "Roles: Java/Spring Boot Backend · Full-Stack Spring+React · RAG/AI Application Engineer · Software Engineer",
            "Empleo: Tiempo completo · Contrato · Consultoría (facturable B2B)",
            "Ubicación: Remoto primero (zonas MX compatibles con US/EU LATAM)",
            "Fecha inicio: Inmediato / Preaviso 2 semanas compromisos actuales",
          ],
        },
      },
      footer: {
        tagline:
          "Ingeniería con estándares producción: reproducible, documentado, endurecido. — Alberto Zompantzi",
        rights: "Todos los derechos reservados.",
        techStackBuiltWith:
          "Construido con React 19 · TypeScript · Vite · Zustand · Framer Motion · i18next · TailwindCSS 3 · EmailJS",
        quickLinks: "Enlaces Rápidos",
        socials: "Conectar",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // English default — recruiters & global search
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator", "htmlTag"],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
