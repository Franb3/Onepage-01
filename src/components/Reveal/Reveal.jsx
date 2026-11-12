import { useReveal } from "../../hooks/useReveal";
import "./Reveal.css";

// * Envuelve cualquier bloque y lo anima cuando entra en pantalla.
// * - as: etiqueta HTML a renderizar ("div", "section", "li"...)
// * - variant: "up" (sube) | "pop" (rebota) | "left" | "right"
// * - delay: retraso en milisegundos (sirve para escalonar elementos)
export const Reveal = ({
  as = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) => {
  const [ref, visible] = useReveal();
  // ? Alias en mayúscula: así JSX lo interpreta como componente/etiqueta dinámica
  const Tag = as;

  const classes = [
    "reveal",
    `reveal--${variant}`,
    visible ? "reveal--visible" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Tag
      ref={ref}
      className={classes}
      style={{ ...style, "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
};
