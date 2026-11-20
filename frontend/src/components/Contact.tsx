import { useState, useRef, type FC, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { motion, useReducedMotion } from "framer-motion";
import {
  Send,
  Loader2,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
  MapPin,
  Briefcase,
  CalendarClock,
  CheckCircle2,
  AlertTriangle,
  XCircle,
} from "lucide-react";
import { saveContact } from "../services/api";
import { sendEmail } from "../services/email";
import "./Contact.css";

const Contact: FC = () => {
  const { t } = useTranslation();
  const reduceMotion = useReducedMotion();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState<{
    message: string;
    type: "success" | "error" | "";
  }>({ message: "", type: "" });

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.asunto || !formData.mensaje) {
      setFeedback({ message: t("contact.form.required"), type: "error" });
      return;
    }

    setIsSending(true);
    setFeedback({ message: "", type: "" });

    try {
      await saveContact(formData);

      if (formRef.current) {
        await sendEmail(formRef.current);
      }

      setFeedback({ message: t("contact.form.success"), type: "success" });
      setFormData({ nombre: "", email: "", asunto: "", mensaje: "" });
      formRef.current?.reset();
    } catch (error) {
      console.error("Contact submit error:", error);
      setFeedback({ message: t("contact.form.error"), type: "error" });
    } finally {
      setIsSending(false);
      setTimeout(() => setFeedback({ message: "", type: "" }), 6000);
    }
  };

  const animDur = reduceMotion ? 0 : 0.6;

  const availDetails = t("contact.availability.details", {
    returnObjects: true,
  }) as unknown as string[];

  const availIcons = [Briefcase, MapPin, CalendarClock, CheckCircle2];

  return (
    <section className="contact section" id="contact" aria-labelledby="contact-heading">
      <div className="contact-container container grid">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: animDur, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker" aria-hidden="true">
            {t("contact.subtitle").split("·")[0].trim()}
          </span>
          <h2 id="contact-heading" className="section-title section-title--left">
            {t("contact.title")}
          </h2>
          <p className="contact-subtitle">{t("contact.subtitle")}</p>
          <p className="contact-description">{t("contact.description")}</p>

          <div className="availability-card" aria-label="Availability status">
            <div className="availability-header">
              <h3 className="availability-title">
                {t("contact.availability.title")}
              </h3>
              <span className="availability-status-pill" aria-hidden="true">
                <span className="availability-status-dot" />
                <span>{t("contact.availability.status")}</span>
              </span>
            </div>
            <ul className="availability-list">
              {availDetails.map((d, i) => {
                const sepIdx = d.indexOf(": ");
                const label = sepIdx > 0 ? d.slice(0, sepIdx).trim() : "";
                const value = sepIdx > 0 ? d.slice(sepIdx + 2).trim() : d;
                return (
                  <li key={d} className="availability-item">
                    <span className="availability-item__icon" aria-hidden="true">
                      {availIcons[i]
                        ? (() => {
                            const IconCmp = availIcons[i] as FC<{ size: number; strokeWidth: number }>;
                            return <IconCmp size={13} strokeWidth={2} />;
                          })()
                        : null}
                    </span>
                    <div>
                      {label && <div className="availability-item__label">{label}</div>}
                      <div className="availability-item__value">{value}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="contact-methods" aria-label={t("contact.channels")}>
            <h4 className="contact-methods__title">{t("contact.channels")}</h4>
            <div className="contact-methods__grid">
              <a
                href="mailto:alberto-zompantzi@outlook.com"
                className="contact-method-card"
                data-channel="email"
                aria-label="Email — alberto-zompantzi@outlook.com"
              >
                <div className="contact-method__icon" aria-hidden="true">
                  <Mail size={16} strokeWidth={2} />
                </div>
                <span className="contact-method__label">Email</span>
                <span className="contact-method__value">alberto-zompantzi@outlook.com</span>
              </a>

              <a
                href="https://wa.me/522285720482?"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-method-card"
                data-channel="wa"
                aria-label="WhatsApp — +52 228 572 0482"
              >
                <div className="contact-method__icon" aria-hidden="true">
                  <MessageCircle size={16} strokeWidth={2} />
                </div>
                <span className="contact-method__label">WhatsApp</span>
                <span className="contact-method__value">+52 228 572 0482</span>
              </a>

              <a
                href="https://www.linkedin.com/in/alberto-zompantzi-7897ab399/"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-method-card"
                data-channel="linkedin"
                aria-label="LinkedIn — Alberto Zompantzi"
              >
                <div className="contact-method__icon" aria-hidden="true">
                  <Linkedin size={16} strokeWidth={2} />
                </div>
                <span className="contact-method__label">LinkedIn</span>
                <span className="contact-method__value">/in/alberto-zompantzi-7897ab399</span>
              </a>

              <a
                href="https://github.com/Alberto-zompantzi"
                target="_blank"
                rel="noreferrer noopener"
                className="contact-method-card"
                data-channel="github"
                aria-label="GitHub — Alberto-zompantzi"
              >
                <div className="contact-method__icon" aria-hidden="true">
                  <Github size={16} strokeWidth={2} />
                </div>
                <span className="contact-method__label">GitHub</span>
                <span className="contact-method__value">@Alberto-zompantzi</span>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-wrap"
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: animDur, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="contact-form-card">
            <h4 className="contact-form-title">{t("contact.form.title")}</h4>

            <form
              className="contact-form"
              id="contact-form"
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="contact-form-hint"
            >
              <p id="contact-form-hint" className="contact-form__hint" aria-hidden="true">
                <span className="contact-form__hint-icon" />
                {t("contact.form.emailHint")}
              </p>

              <div className="contact-form-input">
                <label htmlFor="contact-name" className="contact-label">
                  {t("contact.form.name")} <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  name="nombre"
                  id="contact-name"
                  className="contact-input"
                  placeholder={t("contact.form.placeholderName")}
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </div>

              <div className="contact-form-input">
                <label htmlFor="contact-email" className="contact-label">
                  {t("contact.form.email")} <span aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  className="contact-input"
                  placeholder={t("contact.form.placeholderEmail")}
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                />
              </div>

              <div className="contact-form-input">
                <label htmlFor="contact-subject" className="contact-label">
                  {t("contact.form.subject")} <span aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  name="asunto"
                  id="contact-subject"
                  className="contact-input"
                  placeholder={t("contact.form.placeholderSubject")}
                  value={formData.asunto}
                  onChange={handleChange}
                  required
                  autoComplete="off"
                />
              </div>

              <div className="contact-form-input">
                <label htmlFor="contact-message" className="contact-label">
                  {t("contact.form.message")} <span aria-hidden="true">*</span>
                </label>
                <textarea
                  name="mensaje"
                  id="contact-message"
                  className="contact-input textarea"
                  placeholder={t("contact.form.placeholderMessage")}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  minLength={10}
                  rows={5}
                />
              </div>

              <div className="contact-submit">
                <button type="submit" className="btn btn-primary" disabled={isSending}>
                  {isSending ? (
                    <>
                      <span>{t("contact.form.sending")}</span>
                      <Loader2 className="spinner" size={16} strokeWidth={2.25} />
                    </>
                  ) : (
                    <>
                      <span>{t("contact.form.send")}</span>
                      <Send size={16} strokeWidth={2.25} />
                    </>
                  )}
                </button>

                <div
                  className="feedback-wrap"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  {feedback.message && (
                    <p className={`feedback-message feedback-message--${feedback.type}`}>
                      {feedback.type === "success" && (
                        <CheckCircle2 size={16} aria-hidden="true" />
                      )}
                      {feedback.type === "error" &&
                        (feedback.message.includes("llena") || feedback.message.includes("fill")) ? (
                        <AlertTriangle size={16} aria-hidden="true" />
                      ) : feedback.type === "error" ? (
                        <XCircle size={16} aria-hidden="true" />
                      ) : null}
                      <span>{feedback.message}</span>
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
