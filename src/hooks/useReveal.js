import { useEffect, useRef, useState } from "react";

// * Hook que avisa cuando un elemento entra en pantalla (para animarlo).
// * Uso: const [ref, visible] = useReveal();
// ! Si el navegador es muy antiguo y no tiene IntersectionObserver,
// ! devolvemos `true` desde el inicio para que el contenido nunca quede oculto.
export const useReveal = (threshold = 0.12) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof IntersectionObserver === "undefined"
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // ? Solo animamos la primera vez
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, visible]);

  return [ref, visible];
};
