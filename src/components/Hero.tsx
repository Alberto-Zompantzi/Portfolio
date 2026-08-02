import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, FolderKanban, Award, Clock, Wrench, ExternalLink, Globe2 } from "lucide-react";
import "./Hero.css";

const Hero: FC = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();

  const stats = useMemo(
    () => [
      { value: "8", label: "stats.projects", icon: <FolderKanban size={20} aria-hidden="true" /> },
      { value: "37+", label: "stats.certifications", icon: <Award size={20} aria-hidden="true" /> },
      { value: "18+", label: "stats.experience", icon: <Clock size={20} aria-hidden="true" /> },
      { value: "30+", label: "stats.stack", icon: <Wrench size={20} aria-hidden="true" /> },
    ],
    []
  );

  const animDuration = reduceMotion ? 0 : 0.8;

  return (
    <section className="home section" id="home" aria-labelledby="hero-heading">
      <div className="home-container container grid">
        <motion.div
          className="home-content"
          initial={{ opacity: 0, x: -36 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: animDuration, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="home-eyebrow" aria-hidden="true">
            <span>{t("hero.subtitle")}</span>
          </div>

          <h1 id="hero-heading" className="home-title">
            <span className="home-greeting">{t("hero.greeting")}</span>{" "}
            <span className="home-name">{t("hero.title")}</span>
          </h1>

          <div className="home-tagline">
            <span>{t("hero.role")}</span>{" "}
            <span>{t("hero.stack")}</span>
          </div>
          <p className="home-thesis">{t("hero.tagline")}</p>
          <p className="home-thesis">{t("hero.thesis")}</p>

          <div className="home-cta-row" role="group" aria-label="Primary call-to-action buttons">
            <a href="#portfolio" className="btn btn-primary home-cta">
              <span>{t("hero.primaryCTA")}</span>
              <ArrowRight size={16} strokeWidth={2.25} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-secondary home-cta">
              <span>{t("hero.secondaryCTA")}</span>
            </a>
          </div>

          <dl className="home-stats" aria-label="Portfolio summary statistics">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5 + idx * 0.08,
                  duration: reduceMotion ? 0 : 0.5,
                }}
              >
                <dt className="stat-card__icon" aria-hidden="true">
                  {stat.icon}
                </dt>
                <dd>
                  <span className="stat-card__value" aria-label={`${stat.value} — ${t(stat.label)}`}>
                    {stat.value}
                  </span>
                  <span className="stat-card__label">{t(stat.label)}</span>
                </dd>
              </motion.div>
            ))}
          </dl>

          <div className="home-proof" aria-label="Production deployment proof">
            <div className="home-proof__icon" aria-hidden="true">
              <Globe2 size={16} />
            </div>
            <div className="home-proof__body">
              <span className="home-proof__label">{t("hero.liveProof.label")}</span>
              <span>
                FinShield AI · OCI ·{" "}
                <a
                  href="http://140.84.168.9:8501"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-proof__link"
                >
                  140.84.168.9:8501 <ExternalLink size={12} aria-hidden="true" />
                </a>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="home-img-wrapper"
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: animDuration, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="home-blobs" aria-hidden="true">
            <div className="home-blob__orb home-blob__orb--a" />
            <div className="home-blob__orb home-blob__orb--b" />
            <div className="home-blob__orb home-blob__orb--c" />
          </div>
          <div className="home-frame">
            <img
              src="/images/profilephoto.webp"
              alt="Alberto Zompantzi — Software Engineer portrait"
              className="profile-photo"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
            <div className="home-frame__corner home-frame__corner--tl" aria-hidden="true" />
            <div className="home-frame__corner home-frame__corner--tr" aria-hidden="true" />
            <div className="home-frame__corner home-frame__corner--bl" aria-hidden="true" />
            <div className="home-frame__corner home-frame__corner--br" aria-hidden="true" />
            <div className="home-badge home-badge--top" aria-hidden="true">
              <span className="status-pill" />
              {t("contact.availability.status")}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
