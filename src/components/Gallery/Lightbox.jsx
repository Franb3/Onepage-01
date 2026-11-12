import { useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { asset } from "../../utils/assets";
import "./Lightbox.css";

// * Visor de fotos a pantalla completa.
// * Se cierra con Escape, con clic fuera de la foto o con el botón ✕.
// * Se navega con las flechas del teclado, los botones o deslizando el dedo.
export const Lightbox = ({ items, index, onChange, onClose }) => {
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const touchStartX = useRef(null);

  const total = items.length;
  const item = items[index];

  // * Ir a la foto anterior (-1) o siguiente (+1), dando la vuelta al llegar al final
  const go = useCallback(
    (direction) => onChange((index + direction + total) % total),
    [index, total, onChange],
  );

  // * Al abrir: bloqueamos el scroll de la página y enfocamos el botón cerrar.
  // * Al cerrar: devolvemos el scroll y el foco al elemento que abrió el visor.
  useEffect(() => {
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    if (closeRef.current) closeRef.current.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    };
  }, []);

  // * Atajos de teclado
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "Tab" && dialogRef.current) {
        // ? Mantiene el foco dentro del visor (no se escapa al resto de la página)
        const focusable = dialogRef.current.querySelectorAll("button");
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, go]);

  // * Deslizar el dedo para cambiar de foto en el celular
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(diff) > 50) go(diff > 0 ? -1 : 1);
    touchStartX.current = null;
  };

  // * Clic en el fondo oscuro (no en la foto) cierra el visor
  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // ? createPortal renderiza el visor directo en <body>: así ningún contenedor con transform/overflow puede recortarlo.
  return createPortal(
    <div
      ref={dialogRef}
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Foto ${index + 1} de ${total}: ${item.caption}`}
      onClick={onBackdropClick}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        ref={closeRef}
        type="button"
        className="lightbox__btn lightbox__close"
        onClick={onClose}
        aria-label="Cerrar visor"
      >
        ✕
      </button>
      <button
        type="button"
        className="lightbox__btn lightbox__nav lightbox__nav--prev"
        onClick={() => go(-1)}
        aria-label="Foto anterior"
      >
        ‹
      </button>
      // * `key` fuerza que la imagen se vuelva a montar y repita la animación.
      <figure key={item.id} className="lightbox__figure">
        <img src={asset(item.file)} alt={item.alt} className="lightbox__img" />
        <figcaption className="lightbox__caption">
          {item.caption} · {index + 1}/{total}
        </figcaption>
      </figure>
      <button
        type="button"
        className="lightbox__btn lightbox__nav lightbox__nav--next"
        onClick={() => go(1)}
        aria-label="Foto siguiente"
      >
        ›
      </button>
    </div>,
    document.body,
  );
};
