import { SITE } from "../../config/site";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="card footer">
      <p className="footer__brand">
        {SITE.name} © {new Date().getFullYear()}
      </p>
      <p className="footer__copy">Ven a visitarnos 🔥</p>
      <a className="btn btn--small" href="#top-of-page">
        Volver arriba
      </a>
    </footer>
  );
};
