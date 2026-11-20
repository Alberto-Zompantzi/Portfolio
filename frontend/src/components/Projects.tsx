import { useState, type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Github, ExternalLink, Layers, Code2, Sparkles } from "lucide-react";
import "./Projects.css";

type TierId = "T1" | "T2" | "T3" | "all";

interface ProjectMeta {
  id: string;
  img: string;
  repo: string;
  live: string;
  tier: "T1" | "T2" | "T3";
}

const IMAGE_BY_ID: Record<string, string> = {
  finshield: "/images/finshield-full.png",
  tzompcomer_backend: "/images/tzompcomer-full.png",
  tzompcomer_frontend: "/images/tzompcomer-full.png",
  divertikids_backend: "/images/divertikids-full.png",
  divertikids_frontend: "/images/divertikids-full.png",
  casazompantzi: "/images/casazompantzi-full.png",
  sunnyside: "/images/sunnyside-full.png",
  portfolio: "/images/portfolio-full.png",
};

const PROJECTS_META: ProjectMeta[] = [
  {
    id: "finshield",
    tier: "T1",
    img: IMAGE_BY_ID.finshield,
    repo: "https://github.com/Alberto-zompantzi/nexus-ai-agent",
    live: "http://140.84.168.9:8501",
  },
  {
    id: "tzompcomer_backend",
    tier: "T2",
    img: IMAGE_BY_ID.tzompcomer_backend,
    repo: "https://github.com/Alberto-zompantzi/Comercializadora-Tzompantzi",
    live: "https://tzompcomer.onrender.com",
  },
  {
    id: "tzompcomer_frontend",
    tier: "T2",
    img: IMAGE_BY_ID.tzompcomer_frontend,
    repo: "https://github.com/Alberto-zompantzi",
    live: "https://tzompcomer.vercel.app",
  },
  {
    id: "divertikids_backend",
    tier: "T2",
    img: IMAGE_BY_ID.divertikids_backend,
    repo: "https://github.com/Alberto-zompantzi/Divertikids",
    live: "https://divertikids-backend.onrender.com",
  },
  {
    id: "divertikids_frontend",
    tier: "T2",
    img: IMAGE_BY_ID.divertikids_frontend,
    repo: "https://github.com/Alberto-zompantzi/Divertikids",
    live: "https://divertikids.pages.dev",
  },
  {
    id: "casazompantzi",
    tier: "T3",
    img: IMAGE_BY_ID.casazompantzi,
    repo: "https://github.com/Alberto-zompantzi",
    live: "https://casazompantzi.pages.dev",
  },
  {
    id: "sunnyside",
    tier: "T3",
    img: IMAGE_BY_ID.sunnyside,
    repo: "https://github.com/Alberto-zompantzi/Sunnyside",
    live: "https://sunnysideboutique.pages.dev",
  },
  {
    id: "portfolio",
    tier: "T3",
    img: IMAGE_BY_ID.portfolio,
    repo: "https://github.com/Alberto-zompantzi/Portfolio",
    live: "https://albertozompantzi-portfolio.pages.dev",
  },
];

const PROJECT_ORDER = ["finshield", "tzompcomer_backend", "tzompcomer_frontend", "divertikids_backend", "divertikids_frontend", "casazompantzi", "sunnyside", "portfolio"];

const Projects: FC = () => {
  const { t } = useTranslation();
  const [activeTier, setActiveTier] = useState<TierId>("all");
  const reduceMotion = useReducedMotion();

  const filterTabs = useMemo(
    () => [
      { id: "all" as const, label: t("portfolio.tabs.all") },
      { id: "T1" as const, label: t("portfolio.tabs.T1") },
      { id: "T2" as const, label: t("portfolio.tabs.T2") },
      { id: "T3" as const, label: t("portfolio.tabs.T3") },
    ],
    [t]
  );

  const tierAccent: Record<Exclude<TierId, "all">, string> = {
    T1: "278 92% 64%",
    T2: "265 85% 62%",
    T3: "109 25% 55%",
  };

  const filtered = useMemo(() => {
    const list =
      activeTier === "all"
        ? PROJECTS_META
        : PROJECTS_META.filter((p) => p.tier === activeTier);
    return [...list].sort(
      (a, b) => PROJECT_ORDER.indexOf(a.id) - PROJECT_ORDER.indexOf(b.id));
  }, [activeTier]);

  const animDur = reduceMotion ? 0 : 0.3;

  return (
    <section className="portfolio section" id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">
        <span className="section-kicker" aria-hidden="true">
          {t("portfolio.subtitle").split(".")[0].trim()}
        </span>
        <h2 id="portfolio-heading" className="section-title">
          {t("portfolio.title")}
        </h2>
        <p className="section-description">{t("portfolio.subtitle")}</p>

        <div className="portfolio-toolbar" role="note" aria-label="Project tier toolbar">
          <div className="portfolio-legend">
            {(["T1", "T2", "T3"] as const).map((tier) => (
              <div key={tier} className="portfolio-legend__item">
                <span
                  className={`legend-dot legend-dot--${tier}`}
                  aria-hidden="true"
                />
                <span>{t(`portfolio.tierInfo.${tier}`)}</span>
              </div>
            ))}
          </div>

          <div
            className="portfolio-filter" role="tablist" aria-label="Project tier filter">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                aria-selected={activeTier === tab.id}
                className={`portfolio-filter__btn ${activeTier === tab.id ? "filter-active" : ""}`}
                onClick={() => setActiveTier(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="portfolio-filter__count">
                  {tab.id === "all"
                    ? PROJECTS_META.length
                    : PROJECTS_META.filter((p) => p.tier === tab.id).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="portfolio-grid" role="tabpanel">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, index) => {
              const stackItems = t(`about.experience.items.${p.id}.stack`, {
                returnObjects: true,
              }) as unknown as string[];
              const tagItems = t(`about.experience.items.${p.id}.tags`, {
                returnObjects: true,
              }) as unknown as string[];
              return (
                <motion.article
                  key={p.id}
                  layout
                  initial={{ opacity: 0, y: 24, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -12, scale: 0.96 }}
                  transition={{
                    delay: index * 0.05,
                    duration: animDur || 0.4,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={reduceMotion ? {} : { y: -6 }}
                  className="portfolio-item"
                  data-tier={p.tier}
                  style={{ "--p-tier-accent": tierAccent[p.tier] } as React.CSSProperties}
                >
                  <div className="portfolio-item__tier" aria-hidden="true">
                    <Layers size={12} strokeWidth={2.5} />
                    <span>{t(`about.experience.tierBadge.${p.tier}`)}</span>
                  </div>

                  <div className="portfolio-img-wrapper">
                    <div className="mockup-stage" aria-hidden="true">
                      <div className="mockup-glow" />

                      <div className="mockup-macbook">
                        <div className="mockup-macbook__display">
                          <div className="mockup-macbook__notch" />
                          <div className="mockup-macbook__screen">
                            <img
                              src={p.img}
                              alt={`${t(`about.experience.items.${p.id}.title`)} — project preview`}
                              className="mockup-macbook__img"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>
                        </div>
                        <div className="mockup-macbook__hinge" />
                        <div className="mockup-macbook__base">
                          <div className="mockup-macbook__feet">
                            <span />
                            <span />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="portfolio-overlay">
                      <div className="portfolio-cta-row">
                        <a
                          href={p.repo}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="portfolio-cta portfolio-cta--ghost"
                          aria-label={`${t("portfolio.viewCode")} — ${t(`about.experience.items.${p.id}.title`)}`}
                        >
                          <Github size={12} />
                          <span>{t("portfolio.viewCode")}</span>
                        </a>
                        <a
                          href={p.live}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="portfolio-cta portfolio-cta--solid"
                          aria-label={`${t("portfolio.viewLive")} — ${t(`about.experience.items.${p.id}.title`)}`}
                        >
                          <ExternalLink size={12} />
                          <span>{t("portfolio.viewLive")}</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="portfolio-data">
                    <div className="portfolio-meta-top">
                      <h3 className="portfolio-title">
                        {t(`about.experience.items.${p.id}.title`)}
                      </h3>
                      <div className="portfolio-stack-mini" aria-label="Project tech stack icons" aria-hidden="true">
                        {stackItems.slice(0, 3).map((s) => (
                          <span key={s} className="stack-chip" title={s}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="portfolio-subtitle">
                      {t(`about.experience.items.${p.id}.subtitle`)}
                    </p>
                    <p className="portfolio-description">
                      {t(`about.experience.items.${p.id}.desc`)}
                    </p>

                    <div className="portfolio-tags" aria-label="Project feature tags">
                      {tagItems.slice(0, 6).map((tag) => (
                        <span key={tag} className="tag-pill">
                          <Sparkles size={9} aria-hidden="true" /> {tag}
                        </span>
                      ))}
                    </div>

                    <div className="portfolio-cta-row">
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="portfolio-cta portfolio-cta--ghost"
                      >
                        <Code2 size={14} /> <span>{t("portfolio.viewCode")}</span>
                      </a>
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="portfolio-cta portfolio-cta--solid"
                      >
                        <ExternalLink size={14} /> <span>{t("portfolio.viewLive")}</span>
                      </a>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </div>

        <div className="portfolio-footer">
          <a
            href="https://github.com/Alberto-zompantzi" target="_blank" rel="noreferrer noopener" className="btn btn-github">
            <Github size={18} strokeWidth={2} />
            <span>{t("portfolio.viewMore")}</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
