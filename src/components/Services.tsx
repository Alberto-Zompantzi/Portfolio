import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  Code2,
  Database,
  Layout,
  Cloud,
  GitBranch,
  Cpu,
  Bot,
  FileCheck,
  ArrowUpRight,
} from "lucide-react";
import "./Services.css";

const Services: FC = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const services = useMemo(
    () => [
      {
        id: "backend",
        icon: <Code2 size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "209 100% 35%",
      },
      {
        id: "rag",
        icon: <Cpu size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "230 46% 50%",
      },
      {
        id: "data",
        icon: <Database size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "210 58% 45%",
      },
      {
        id: "frontend",
        icon: <Layout size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "193 95% 55%",
      },
      {
        id: "devops",
        icon: <Cloud size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "0 100% 52%",
      },
      {
        id: "workflow",
        icon: <FileCheck size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "265 85% 62%",
      },
      {
        id: "productivity",
        icon: <GitBranch size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "11 95% 58%",
      },
      {
        id: "ia",
        icon: <Bot size={34} strokeWidth={1.6} aria-hidden="true" />,
        accent: "150 60% 45%",
      },
    ],
    []
  );

  const animDur = reduceMotion ? 0 : 0.55;

  return (
    <section className="services section" id="services" aria-labelledby="services-heading">
      <div className="container">
        <span className="section-kicker" aria-hidden="true">
          {t("services.subtitle").split(".")[0].trim()}
        </span>
        <h2 id="services-heading" className="section-title">
          {t("services.title")}
        </h2>
        <p className="section-description">{t("services.subtitle")}</p>

        <div className="services-grid grid" role="list">
          {services.map((s, index) => (
            <motion.article
              role="listitem"
              key={s.id}
              className="services-item"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.06,
                duration: animDur,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={reduceMotion ? {} : { y: -6, transition: { duration: 0.2 } }}
              style={{ "--svc-accent": s.accent } as React.CSSProperties}
            >
              <div className="services-item__top">
                <div className="services-icon-wrapper" aria-hidden="true">
                  <div className="services-icon-glow" />
                  {s.icon}
                </div>
                <ArrowUpRight size={18} strokeWidth={2} className="services-arrow" aria-hidden="true" />
              </div>
              <h3 className="services-title-card">
                {t(`services.items.${s.id}.title`)}
              </h3>
              <p className="services-description-card">
                {t(`services.items.${s.id}.desc`)}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
