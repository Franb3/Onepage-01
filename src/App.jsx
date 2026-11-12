import { useEffect, useState } from "react";
import { Content } from "./Content";
import { Error404 } from "./components/Error404/Error404";

// * Decide si la URL actual es la página principal.
const isHomePath = () => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const path = window.location.pathname
    .replace(/\/index\.html$/, "")
    .replace(/\/$/, "");
  return path === base;
};

export const App = () => {
  const [isHome, setIsHome] = useState(isHomePath);

  // * Si la persona usa los botones atrás/adelante del navegador, revisamos de nuevo
  useEffect(() => {
    const onPopState = () => setIsHome(isHomePath());
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  return isHome ? <Content /> : <Error404 />;
};
