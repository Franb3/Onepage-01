import { useState } from "react";
import { Reveal } from "../Reveal/Reveal";
import { Lightbox } from "./Lightbox";
import { GALLERY } from "../../data/gallery";
import { asset } from "../../utils/assets";
import "./Gallery.css";

export const Gallery = () => {
  // * Índice de la foto abierta en el visor. `null` = visor cerrado.
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <Reveal as="section" id="gallery" className="card gallery">
      <h2 className="section-title">Galería</h2>

      <ul className="gallery__grid">
        {GALLERY.map((item, i) => (
          <li key={item.id} className="gallery__cell" style={{ "--i": i }}>
            {
              // ? Es un <button> (no un <div>) para que se pueda abrir con teclado */
            }
            <button
              type="button"
              className="gallery__item"
              onClick={() => setActiveIndex(i)}
              aria-label={`Ampliar foto: ${item.caption}`}
            >
              <img
                src={asset(item.file)}
                width={item.width}
                height={item.height}
                alt={item.alt}
                loading="lazy"
                decoding="async"
              />
              <span className="gallery__caption">{item.caption}</span>
            </button>
          </li>
        ))}
      </ul>

      {activeIndex !== null && (
        <Lightbox
          items={GALLERY}
          index={activeIndex}
          onChange={setActiveIndex}
          onClose={() => setActiveIndex(null)}
        />
      )}
    </Reveal>
  );
};
