import { useState, useEffect, useCallback, type FC } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  Download,
  Github,
  Linkedin,
  MessageSquare,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import "./Navbar.css";

const Navbar: FC = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 64);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = useCallback(() => setIsMenuOpen((v) => !v), []);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const toggleLanguage = useCallback(() => {
    const newLang = (i18n.language || "en").startsWith("es") ? "en" : "es";
    i18n.changeLanguage(newLang);
    document.documentElement.lang = newLang === "es" ? "es-MX" : "en-US";
  }, [i18n]);

  const currentLangShort = (
    (i18n.language || "en").split("-")[0] as string
  ).toUpperCase();
  const nextLangShort = currentLangShort === "ES" ? "EN" : "ES";

  const navItems = [
    { href: "#home", key: "nav.home" },
    { href: "#about", key: "nav.about" },
    { href: "#services", key: "nav.services" },
    { href: "#portfolio", key: "nav.portfolio" },
    { href: "#contact", key: "nav.contact" },
  ];

  return (
    <header
      className={`header ${isScrolled ? "scroll-header" : ""}`}
      id="header"
      role="banner"
    >
      <nav className="nav container" aria-label="Primary navigation">
        <a
          href="#home"
          className="nav-logo"
          aria-label="Home — Alberto Zompantzi"
        >
          <span className="nav-logo__mark" aria-hidden="true">
            <Sparkles size={14} />
          </span>
          A.Z.<span>Developer</span>
        </a>

        <div
          className={`nav-menu ${isMenuOpen ? "show-menu" : ""}`}
          id="nav-menu"
          role="dialog"
          aria-modal={isMenuOpen}
          aria-label="Site navigation menu"
        >
          <button
            type="button"
            className="nav-close"
            onClick={toggleMenu}
            aria-label={
              isMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
          >
            <X size={22} strokeWidth={2.25} />
          </button>

          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="nav-link" onClick={closeMenu}>
                  {t(item.key)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-menu-footer">
            <div
              className="nav-menu-socials"
              aria-label="Social links — mobile menu"
            >
              <a
                href="https://github.com/Alberto-zompantzi"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-social-link"
                aria-label="GitHub — Alberto Zompantzi"
                onClick={closeMenu}
              >
                <Github size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/alberto-zompantzi-7897ab399/"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-social-link"
                aria-label="LinkedIn — Alberto Zompantzi"
                onClick={closeMenu}
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://wa.me/522285720482?"
                target="_blank"
                rel="noreferrer noopener"
                className="nav-social-link"
                aria-label="WhatsApp — +52 228 572 0482"
                onClick={closeMenu}
              >
                <MessageSquare size={18} />
              </a>
            </div>
            <p className="nav-menu-tagline">
              {t("footer.tagline").split("—")[0].trim()}
            </p>
          </div>
        </div>

        <div className="nav-right">
          <div className="nav-socials" aria-label="Social links">
            <a
              href="https://github.com/Alberto-zompantzi"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-social-link"
              aria-label="GitHub — Alberto Zompantzi"
            >
              <Github size={17} strokeWidth={2} />
            </a>
            <a
              href="https://www.linkedin.com/in/alberto-zompantzi-7897ab399/"
              target="_blank"
              rel="noreferrer noopener"
              className="nav-social-link"
              aria-label="LinkedIn — Alberto Zompantzi"
            >
              <Linkedin size={17} strokeWidth={2} />
            </a>
          </div>

          <div className="nav-btns">
            <button
              type="button"
              className="lang-toggle"
              onClick={toggleLanguage}
              aria-label={`Switch language to ${nextLangShort}`}
              title={`Switch language to ${nextLangShort}`}
            >
              <Globe size={16} strokeWidth={2} aria-hidden="true" />
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentLangShort}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {currentLangShort}
                </motion.span>
              </AnimatePresence>
            </button>

            <a
              href="https://ik.imagekit.io/seefqe4nn/CV_Alberto_Zompantzi_Software_Engineer.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="btn btn-secondary cv-btn"
              aria-label={`${t("nav.downloadCV")} — Google Drive (opens in new tab)`}
            >
              <Download size={16} strokeWidth={2} aria-hidden="true" />
              <span className="btn-text">{t("nav.downloadCV")}</span>
            </a>

            <a href="#contact" className="btn btn-primary contact-btn">
              <span>{t("nav.contactMe")}</span>
              <ArrowRight size={15} strokeWidth={2.25} aria-hidden="true" />
            </a>

            <button
              type="button"
              className="nav-toggle"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="nav-menu"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X size={22} strokeWidth={2.25} />
              ) : (
                <Menu size={22} strokeWidth={2.25} />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div
            className={`nav-backdrop ${isMenuOpen ? "is-open" : ""}`}
            onClick={closeMenu}
            aria-hidden="true"
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
