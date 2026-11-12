import { Reveal } from "../Reveal/Reveal";
import { SERVICES } from "../../data/services";
import "./Services.css";

// * Lista de estilos. Al tocar "Quiero este estilo" se avisa al padre (onSelect)
// * para que el formulario de contacto ya aparezca con ese estilo elegido.
export const Services = ({ onSelect }) => {
  return (
    <Reveal as="section" id="services" className="card services">
      <h2 className="section-title">Estilos</h2>

      <ul className="services__grid">
        {SERVICES.map((service, i) => (
          <li
            key={service.id}
            className={`service service--${service.color}`}
            style={{ "--i": i }}
          >
            <h3 className="service__title">{service.title}</h3>
            <p className="service__text">{service.text}</p>
            <a
              className="btn btn--small"
              href="#contact"
              onClick={() => onSelect(service.title)}
            >
              Quiero este estilo
            </a>
          </li>
        ))}
      </ul>
    </Reveal>
  );
};
