import { useState, type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  BookOpen,
  Code2,
  Database,
  Layout,
  Cloud,
  GitBranch,
  Cpu,
  Award,
  ChevronRight,
  CheckCircle2,
  FileCode2,
  History,
} from "lucide-react";
import "./About.css";

const About: FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("story");
  const reduceMotion = useReducedMotion();

  const tabs = useMemo(
    () => [
      {
        id: "story",
        label: t("about.tabs.story"),
        icon: <BookOpen size={16} strokeWidth={2} />,
      },
      {
        id: "skills",
        label: t("about.tabs.skills"),
        icon: <Code2 size={16} strokeWidth={2} />,
      },
      {
        id: "stack",
        label: t("about.tabs.stack"),
        icon: <FileCode2 size={16} strokeWidth={2} />,
      },
      {
        id: "certifications",
        label: t("about.tabs.certifications"),
        icon: <Award size={16} strokeWidth={2} />,
      },
      {
        id: "timeline",
        label: t("about.tabs.timeline"),
        icon: <History size={16} strokeWidth={2} />,
      },
    ],
    [t],
  );

  const skillPillars = useMemo(
    () => [
      {
        key: "backend",
        icon: (
          <Code2 size={22} strokeWidth={1.8} style={{ color: "#007396" }} />
        ),
      },
      {
        key: "rag",
        icon: <Cpu size={22} strokeWidth={1.8} style={{ color: "#3776AB" }} />,
      },
      {
        key: "frontend",
        icon: (
          <Layout size={22} strokeWidth={1.8} style={{ color: "#61DAFB" }} />
        ),
      },
      {
        key: "data",
        icon: (
          <Database size={22} strokeWidth={1.8} style={{ color: "#336791" }} />
        ),
      },
      {
        key: "infrastructure",
        icon: (
          <Cloud size={22} strokeWidth={1.8} style={{ color: "#F80000" }} />
        ),
      },
      {
        key: "workflow",
        icon: (
          <GitBranch size={22} strokeWidth={1.8} style={{ color: "#F05032" }} />
        ),
      },
    ],
    [],
  );

  const stackCats = useMemo(
    () =>
      [
        "languages",
        "frameworks",
        "datastores",
        "cloud",
        "frontend",
        "practices",
      ] as const,
    [],
  );

  const certOracle = useMemo(
    () => [
      {
        group: t("about.certifications.groups.oracleOne.formationsTitle"),
        items: ["beginner", "cs", "backend"],
        ns: "formations",
      },
      {
        group: t("about.certifications.groups.oracleOne.coursesTitle"),
        items: [
          "git",
          "htmlCss",
          "js1",
          "js2",
          "js3",
          "javaOop",
          "javaT1",
          "javaT2",
          "javaT3",
          "javaTesting",
          "spring",
          "spring2",
          "sql",
          "db",
        ],
        ns: "courses",
      },
      {
        group: t("about.certifications.groups.oracleOne.badgesTitle"),
        items: ["challenger"],
        ns: "badges",
      },
    ],
    [t],
  );

  const certDC = useMemo(
    () => [
      {
        group: t("about.certifications.groups.datacamp.tracksTitle"),
        items: ["cloud", "git", "docker", "bash", "dataviz"],
        ns: "tracks",
      },
      {
        group: t("about.certifications.groups.datacamp.coursesTitle"),
        items: [
          "awsCloud",
          "awsArchitecting",
          "gitIntro",
          "gitCollab",
          "dockerIntro",
          "dockerAdvanced",
          "bashIntro",
          "bashScripts",
          "sqlIntro",
          "sqlJoins",
          "sqlSummaries",
          "pandasFoundations",
          "matplotlib",
          "seaborn",
        ],
        ns: "courses",
      },
    ],
    [t],
  );

  const timelineItems = useMemo(() => ["t1", "t2", "t3", "t4"] as const, []);

  const animDur = reduceMotion ? 0 : 0.35;

  return (
    <section
      className="about section"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="about-container container grid">
        <div className="about-content">
          <span className="section-kicker" aria-hidden="true">
            {t("about.kicker")}
          </span>
          <h2 id="about-heading" className="section-title section-title--left">
            {t("about.title")}
          </h2>
          <p className="about-description">{t("about.description")}</p>

          <div
            className="tabs-buttons"
            role="tablist"
            aria-label="About section tabs"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                type="button"
                id={`tab-${tab.id}`}
                aria-selected={activeTab === tab.id}
                aria-controls={`panel-${tab.id}`}
                tabIndex={activeTab === tab.id ? 0 : -1}
                className={`tabs-button ${activeTab === tab.id ? "tab-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="tabs-content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                id={`panel-${activeTab}`}
                role="tabpanel"
                aria-labelledby={`tab-${activeTab}`}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: animDur, ease: "easeOut" }}
              >
                {/* 1. STORY & THESIS */}
                {activeTab === "story" && (
                  <div className="tabs-item story-grid">
                    {(["p1", "p2", "p3", "p4"] as const).map((k) => (
                      <p key={k} className="story-paragraph">
                        <ChevronRight
                          size={14}
                          className="story-bullet"
                          aria-hidden="true"
                        />
                        {t(`about.story.${k}`)}
                      </p>
                    ))}
                  </div>
                )}

                {/* 2. CORE SKILLS (6 pillars) */}
                {activeTab === "skills" && (
                  <div className="tabs-item skills-grid">
                    {skillPillars.map((p) => (
                      <article key={p.key} className="skill-item">
                        <div className="skill-header">
                          <span className="skill-icon">{p.icon}</span>
                          <h4 className="skill-title">
                            {t(`about.skills.${p.key}.title`)}
                          </h4>
                        </div>
                        <p className="skill-desc">
                          {t(`about.skills.${p.key}.desc`)}
                        </p>
                        <ul
                          className="skill-chips"
                          aria-label={`${t(`about.skills.${p.key}.title`)} — key competencies`}
                        >
                          {(
                            t(`about.skills.${p.key}.keywords`, {
                              returnObjects: true,
                            }) as unknown as string[]
                          ).map((kw) => (
                            <li key={kw} className="skill-chip">
                              <CheckCircle2 size={10} aria-hidden="true" /> {kw}
                            </li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                )}

                {/* 3. TECH STACK (6 categories) */}
                {activeTab === "stack" && (
                  <div className="tabs-item stack-grid">
                    {stackCats.map((cat) => {
                      const catItems = t(`about.stack.${cat}.items`, {
                        returnObjects: true,
                      }) as unknown as string[];
                      const iconMap: Record<string, JSX.Element> = {
                        languages: <Code2 size={15} aria-hidden="true" />,
                        frameworks: <Layout size={15} aria-hidden="true" />,
                        datastores: <Database size={15} aria-hidden="true" />,
                        cloud: <Cloud size={15} aria-hidden="true" />,
                        frontend: <Layout size={15} aria-hidden="true" />,
                        practices: <GitBranch size={15} aria-hidden="true" />,
                      };
                      return (
                        <div key={cat} className="stack-group">
                          <div className="stack-group__header">
                            <span
                              className="stack-group__icon"
                              aria-hidden="true"
                            >
                              {iconMap[cat] ?? (
                                <FileCode2 size={15} aria-hidden="true" />
                              )}
                            </span>
                            <h4>{t(`about.stack.${cat}.title`)}</h4>
                          </div>
                          <div className="stack-chips">
                            {catItems.map((item) => (
                              <span key={item} className="chip">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* 4. CERTIFICATIONS (Oracle ONE + DataCamp) */}
                {activeTab === "certifications" && (
                  <div className="tabs-item certs-wrapper">
                    <div
                      className="certs-summary"
                      role="status"
                      aria-live="polite"
                    >
                      <span className="certs-summary__badge">
                        {t("about.certifications.totalBadge")}
                      </span>
                      <p className="certs-summary__subtitle">
                        {t("about.certifications.subtitle")}
                      </p>
                    </div>

                    <div className="certs-provider">
                      <h4 className="certs-provider__title">
                        {t("about.certifications.groups.oracleOne.title")}
                      </h4>
                      {certOracle.map((grp) => (
                        <div key={grp.group} className="certs-group">
                          <h5 className="certs-group__title">{grp.group}</h5>
                          <ul className="certs-list">
                            {grp.items.map((k) => {
                              const compString = t(
                                `about.certifications.groups.oracleOne.${grp.ns}.${k}.competencies`,
                              );
                              const comps = compString
                                .split(/[·,;]/)
                                .map((s) => s.trim())
                                .filter(Boolean);
                              return (
                                <li key={k} className="cert-item">
                                  <span
                                    className="cert-header"
                                    aria-hidden="true"
                                  >
                                    <Award size={12} />
                                  </span>
                                  <div className="cert-body">
                                    <div className="cert-body__name">
                                      {t(
                                        `about.certifications.groups.oracleOne.${grp.ns}.${k}.title`,
                                      )}
                                    </div>
                                    <div className="cert-body__comps">
                                      {comps.map((c, ci) => (
                                        <span key={ci}>{c}</span>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    <div className="certs-provider">
                      <h4 className="certs-provider__title">
                        {t("about.certifications.groups.datacamp.title")}
                      </h4>
                      {certDC.map((grp) => (
                        <div key={grp.group} className="certs-group">
                          <h5 className="certs-group__title">{grp.group}</h5>
                          <ul className="certs-list">
                            {grp.items.map((k) => {
                              const compString = t(
                                `about.certifications.groups.datacamp.${grp.ns}.${k}.competencies`,
                              );
                              const comps = compString
                                .split(/[·,;]/)
                                .map((s) => s.trim())
                                .filter(Boolean);
                              return (
                                <li key={k} className="cert-item">
                                  <span
                                    className="cert-header"
                                    aria-hidden="true"
                                    style={{
                                      background:
                                        "linear-gradient(135deg, color-mix(in srgb, #00EF8B 30%, transparent), color-mix(in srgb, #039855 25%, transparent))",
                                      color: "#039855",
                                    }}
                                  >
                                    <Award size={12} />
                                  </span>
                                  <div className="cert-body">
                                    <div className="cert-body__name">
                                      {t(
                                        `about.certifications.groups.datacamp.${grp.ns}.${k}.title`,
                                      )}
                                    </div>
                                    <div className="cert-body__comps">
                                      {comps.map((c, ci) => (
                                        <span key={ci}>{c}</span>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* 5. TIMELINE (4 phases) */}
                {activeTab === "timeline" && (
                  <div
                    className="tabs-item timeline"
                    aria-label="Career timeline"
                  >
                    <div className="timeline-rail" aria-hidden="true" />
                    {timelineItems.map((id) => {
                      const org = t(`about.timeline.items.${id}.org`, {
                        defaultValue: "",
                      });
                      return (
                        <div key={id} className="timeline-item">
                          <span className="timeline-dot" aria-hidden="true">
                            <CheckCircle2 size={9} />
                          </span>
                          <div className="timeline-line">
                            <span className="timeline-period">
                              {t(`about.timeline.items.${id}.period`)}
                            </span>
                            <h4 className="timeline-title">
                              {t(`about.timeline.items.${id}.title`)}
                            </h4>
                            {org && <div className="timeline-org">{org}</div>}
                            <p className="timeline-desc">
                              {t(`about.timeline.items.${id}.desc`)}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
