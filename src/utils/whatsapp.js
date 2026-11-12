import { SITE } from "../config/site";

// * Crea el enlace de WhatsApp con el mensaje ya escrito.
// * No necesita registro, backend ni correo: el cliente solo toca "Enviar".
export const buildWhatsAppUrl = (message = SITE.defaultMessage) =>
  `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;

// * Arma el texto del mensaje a partir de lo que llenó la persona.
// ? El nombre y el estilo son opcionales, por eso se omiten si vienen vacíos.
export const buildContactMessage = ({ name, style, message }) => {
  const cleanName = name.trim();
  const lines = [
    cleanName
      ? `Hola, soy ${cleanName}. Quiero cotizar un tatuaje.`
      : "Hola, quiero cotizar un tatuaje.",
  ];

  if (style) lines.push(`Estilo: ${style}`);
  lines.push(`Mi idea: ${message.trim()}`);

  return lines.join("\n");
};
