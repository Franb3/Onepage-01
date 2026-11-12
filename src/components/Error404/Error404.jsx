import { asset } from "../../utils/assets";
import "./Error404.css";

// * Página que se muestra cuando la ruta no existe.
export const Error404 = () => {
  return (
    <main
      className="error-404"
      style={{ backgroundImage: `url("${asset("error.webp")}")` }}
    >
      <h1>Error 404</h1>
      <p>Parece que la página que buscas no existe.</p>
      <a href={import.meta.env.BASE_URL} className="btn">
        Volver al inicio
      </a>
    </main>
  );
};
