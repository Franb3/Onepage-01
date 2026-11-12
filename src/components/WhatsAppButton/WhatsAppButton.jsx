import { buildWhatsAppUrl } from "../../utils/whatsapp";
import "./WhatsAppButton.css";

// * Botón flotante de WhatsApp. Abre el chat directo con un mensaje base: sin registro, sin formularios, un solo toque.
export const WhatsAppButton = () => {
  return (
    <a
      href={buildWhatsAppUrl()}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
    >
      <svg
        className="whatsapp-button__icon"
        viewBox="0 0 24 24"
        width="22"
        height="22"
        aria-hidden="true"
        focusable="false"
      >
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 2a8 8 0 1 1-4.2 14.8l-.4-.2-2.6.7.7-2.5-.2-.4A8 8 0 0 1 12 4Zm-2.6 3.6c-.3 0-.6.1-.8.4-.3.4-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.2 5 4.4 2.5 1 3 .8 3.5.7.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4l-1.8-.9c-.3-.1-.5-.1-.7.1l-.8 1c-.1.2-.3.2-.6.1-.3-.1-1.1-.4-2.1-1.3-.8-.7-1.3-1.5-1.4-1.8-.2-.3 0-.4.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.8-2c-.2-.5-.4-.5-.6-.5h-.6Z"
        />
      </svg>
      <span className="whatsapp-button__label">WhatsApp</span>
    </a>
  );
};
