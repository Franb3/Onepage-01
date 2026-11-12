import { useState } from "react";
import { Reveal } from "../Reveal/Reveal";
import { FAQS } from "../../data/faqs";
import "./Faq.css";

// * Acordeón de preguntas frecuentes (una respuesta abierta a la vez)
export const Faq = () => {
  // * Índice de la pregunta abierta. `null` = todas cerradas.
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex((current) => (current === i ? null : i));

  return (
    <Reveal as="section" id="faq" className="card faq">
      <h2 className="section-title">Preguntas frecuentes</h2>

      <div className="faq__list">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className={`faq__item${isOpen ? " is-open" : ""}`}>
              <h3 className="faq__heading">
                <button
                  type="button"
                  className="faq__question"
                  id={`faq-q-${i}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-a-${i}`}
                  onClick={() => toggle(i)}
                >
                  <span>{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
              </h3>

              <div
                id={`faq-a-${i}`}
                className="faq__answer"
                role="region"
                aria-labelledby={`faq-q-${i}`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
};
