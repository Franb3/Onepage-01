import { useEffect, useState } from "react";
import { Reveal } from "../Reveal/Reveal";
import { SITE } from "../../config/site";
import { SERVICES } from "../../data/services";
import { buildContactMessage, buildWhatsAppUrl } from "../../utils/whatsapp";
import "./Contact.css";

const DRAFT_KEY = "brutal-tattoo:draft";

// * Lee el borrador guardado en el navegador (si existe).
// ! localStorage puede fallar (modo privado, cookies bloqueadas, navegadores viejos), por eso todo va dentro de try/catch y nunca rompe la página.
const readDraft = () => {
  try {
    const raw = window.localStorage.getItem(DRAFT_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
};

// * Formulario simplificado: SIN registro, SIN correo y SIN servidor.
// * Solo se pide la idea del tatuaje; al enviar se abre WhatsApp con el
// * mensaje ya escrito y la persona únicamente toca "Enviar" en la app.
// * `style` y `onStyleChange` vienen del padre (Content) para que la sección
// * de Estilos pueda preseleccionar el estilo en este formulario.
export const Contact = ({ style, onStyleChange }) => {
  const [form, setForm] = useState(() => {
    const draft = readDraft();
    return { name: draft.name || "", message: draft.message || "" };
  });

  // * "idle" (normal) | "sent" (se abrió WhatsApp) | "error" (falta la idea)
  const [status, setStatus] = useState("idle");
  const [waUrl, setWaUrl] = useState("");

  // * Guardamos el borrador mientras la persona escribe, para que no pierda
  // * su texto si cierra la pestaña o vuelve desde WhatsApp.
  useEffect(() => {
    try {
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(form));
    } catch {
      // * sin almacenamiento disponible: no pasa nada
    }
  }, [form]);

  // * Tras enviar, el mensaje de confirmación se oculta solo a los 15 segundos
  useEffect(() => {
    if (status !== "sent") return undefined;
    const timer = setTimeout(() => setStatus("idle"), 15000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ? `required` no detecta textos con solo espacios, así que lo validamos aquí
    if (!form.message.trim()) {
      setStatus("error");
      return;
    }

    const url = buildWhatsAppUrl(buildContactMessage({ ...form, style }));
    setWaUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  };

  return (
    <Reveal as="section" id="contact" className="card contact">
      <h2 className="section-title">Contacto</h2>
      <p className="contact__intro">
        Cuéntanos tu idea y te respondemos por WhatsApp. Sin registro y sin
        correo.
      </p>

      <div className="contact__content">
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <label className="contact__field">
            <span className="contact__label">Tu nombre (opcional)</span>
            <input
              type="text"
              name="name"
              autoComplete="given-name"
              value={form.name}
              onChange={handleChange}
            />
          </label>

          <label className="contact__field">
            <span className="contact__label">Estilo (opcional)</span>
            <select
              value={style}
              onChange={(e) => onStyleChange(e.target.value)}
            >
              <option value="">Aún no lo sé</option>
              {SERVICES.map((service) => (
                <option key={service.id} value={service.title}>
                  {service.title}
                </option>
              ))}
            </select>
          </label>

          <label className="contact__field">
            <span className="contact__label">¿Qué te quieres tatuar?</span>
            <textarea
              name="message"
              rows="5"
              placeholder="Ej.: una luna pequeña en el antebrazo"
              required
              aria-invalid={status === "error"}
              aria-describedby="contact-status"
              value={form.message}
              onChange={handleChange}
            />
          </label>

          <button
            type="submit"
            className={`btn contact__submit${status === "sent" ? " is-sent" : ""}`}
          >
            {status === "sent" ? "¡Abriendo WhatsApp!" : "Enviar por WhatsApp"}
          </button>

          {
            //* Mensajes de estado: aria-live hace que el lector de pantalla los anuncie
          }
          <p
            id="contact-status"
            className={`contact__status contact__status--${status}`}
            role="status"
            aria-live="polite"
          >
            {status === "error" && "Cuéntanos tu idea para poder continuar."}
            {status === "sent" && (
              <>
                Listo. Si WhatsApp no se abrió,{" "}
                <a href={waUrl} target="_blank" rel="noopener noreferrer">
                  toca aquí
                </a>
                .
              </>
            )}
          </p>

          <small className="contact__hint">
            Se abrirá WhatsApp con tu mensaje listo. Tus datos no se guardan en
            ningún servidor.
          </small>
        </form>

        <div className="contact__map">
          <h3>Ubicación del estudio</h3>
          <iframe
            title="Mapa del estudio"
            src={SITE.mapEmbedUrl}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            className="btn btn--small"
            href={SITE.mapLinkUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver mapa más grande
          </a>
        </div>
      </div>
    </Reveal>
  );
};
