import { type FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
  Github,
  Linkedin,
  MessageSquare,
  Mail,
  ArrowUp,
  Sparkles,
} from "lucide-react";
import "./Footer.css";

const Footer: FC = () => {
  const { t } = useTranslation();

  const quickLinks = useMemo(
    () => [
      { href: "#home", label: "nav.home" },
      { href: "#about", label: "nav.about" },
      { href: "#services", label: "nav.services" },
      { href: "#portfolio", label: "nav.portfolio" },
      { href: "#contact", label: "nav.contact" },
    ],
    []
  );

  const socials = useMemo(
    () => [
      {
        href: "https://github.com/Alberto-zompantzi",
        label: "GitHub — Alberto Zompantzi",
        icon: <Github size={17} strokeWidth={2} aria-hidden="true" />,
      },
      {
        href: "https://www.linkedin.com/in/alberto-zompantzi-7897ab399/",
        label: "LinkedIn — Alberto Zompantzi",
        icon: <Linkedin size={17} strokeWidth={2} aria-hidden="true" />,
      },
      {
        href: "https://wa.me/522285720482?",
        label: "WhatsApp — +52 228 572 0482",
        icon: <MessageSquare size={17} strokeWidth={2} aria-hidden="true" />,
      },
      {
        href: "mailto:alberto-zompantzi@outlook.com",
        label: "Email — alberto-zompantzi@outlook.com",
        icon: <Mail size={17} strokeWidth={2} aria-hidden="true" />,
      },
    ],
    []
  );

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-col footer-col--brand">
            <a href="#home" className="footer-logo" aria-label="Back to top — Alberto Zompantzi">
              <span className="footer-logo__mark" aria-hidden="true">
                <Sparkles size={13} />
              </span>
              A.Z.<span>Developer</span>
            </a>
            <p className="footer-tagline">{t("footer.tagline")}</p>
            <div className="footer-builtwith">
              <div className="footer-builtwith__label">Built with</div>
              <div className="footer-builtwith__chips">
                {t("footer.techStackBuiltWith").split(" · ").map((chip) => (
                  <span key={chip} className="footer-builtwith__chip">{chip}</span>
                ))}
              </div>
            </div>
            <div className="footer-bottomline">
              <p className="footer-copyright">
                &copy; {new Date().getFullYear()} Alberto Zompantzi. {t("footer.rights")}
              </p>
            </div>
          </div>

          <div className="footer-col footer-col--links">
            <h4 className="footer-col-title">{t("footer.quickLinks")}</h4>
            <ul className="footer-links-list">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link">
                    <span className="footer-link__dot" aria-hidden="true" />
                    <span>{t(l.label)}</span>
                  </a>
                </li>
              ))}
              <li key="cv">
                <a
                  href="https://drive.google.com/file/d/1VGf_9bEv0DM7TC21WZMbZL2fJbLbe0nj/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="footer-link"
                >
                  <span className="footer-link__dot" aria-hidden="true" />
                  <span>{t("nav.downloadCV")}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col footer-col--connect">
            <h4 className="footer-col-title">{t("footer.socials")}</h4>
            <div className="footer-socials" aria-label="Social and contact links">
              {socials.map((s) => {
                const dataS = s.href.includes("github.com") ? "github"
                  : s.href.includes("linkedin.com") ? "linkedin"
                  : s.href.includes("wa.me") ? "wa"
                  : "email";
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="footer-social-link"
                    aria-label={s.label}
                    data-s={dataS}
                  >
                    {s.icon}
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={scrollTop}
              className="footer-totop"
              aria-label="Scroll to top of page"
            >
              <ArrowUp size={14} strokeWidth={2.25} aria-hidden="true" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>

      <div className="footer-sep" aria-hidden="true" />
      <div className="footer-bottom container">
        <p className="footer-engineer">
          Built with reproducible standards · React 19 · TypeScript · Vite · i18n EN↔ES · WCAG AA targets
        </p>
      </div>
    </footer>
  );
};

export default Footer;
