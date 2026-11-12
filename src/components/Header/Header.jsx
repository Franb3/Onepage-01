import { useEffect, useState } from "react";
import { SITE } from "../../config/site";
import "./Header.css";

// * Enlaces del menú (apuntan a los id de cada sección)
const LINKS = [
  { href: "#about", label: "Nosotros" },
  { href: "#services", label: "Estilos" },
  { href: "#gallery", label: "Galería" },
  { href: "#faq", label: "Preguntas" },
  { href: "#contact", label: "Contacto" },
];

export const Header = () => {
  // * Estado del menú móvil (abierto / cerrado)
  const [open, setOpen] = useState(false);

  // * Mientras el menú está abierto: Escape lo cierra y, si la pantalla
  // * crece (ej. girar el celular), se cierra solo para no quedar "atascado".
  useEffect(() => {
    if (!open) return undefined;

    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 640) setOpen(false);
    };

    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="card header">
      <div className="header__top">
        {
          // * Cada letra del logo cae con un pequeño retraso (animación de carga).
          // ! aria-label en el h1 + aria-hidden en las letras: el lector de pantalla lee "Brutal.Tattoo" completo y no letra por letra.
        }
        <h1 className="header__brand" aria-label={SITE.name}>
          {SITE.name.split("").map((char, i) => (
            <span
              key={i}
              className="header__letter"
              aria-hidden="true"
              style={{ animationDelay: `${i * 55}ms` }}
            >
              {char}
            </span>
          ))}
        </h1>

        <button
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="main-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="header__bar" />
          <span className="header__bar" />
          <span className="header__bar" />
        </button>
      </div>

      <nav
        id="main-nav"
        className={`header__nav${open ? " is-open" : ""}`}
        aria-label="Principal"
      >
        <ul>
          {LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
