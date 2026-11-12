import { Reveal } from "../Reveal/Reveal";
import { asset } from "../../utils/assets";
import "./AboutUs.css";

// * Valores del estudio (salen del texto original: seguro, profesional, personalizado)
const VALUES = ["Seguro", "Profesional", "Personalizado"];

export const AboutUs = () => {
  return (
    <Reveal as="section" id="about" className="card about">
      <div className="about__media">
        <img
          src={asset("1.webp")}
          width="900"
          height="1200"
          alt="Tatuador trabajando sobre el antebrazo de un cliente"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="about__text">
        <h2 className="section-title">Sobre nosotros</h2>
        <p>
          Creamos arte permanente que exprese la identidad y emociones de cada
          cliente, ofreciendo una experiencia segura, profesional y
          personalizada en cada trazo.
        </p>
        <p>
          Somos un estudio de tatuajes con años de experiencia en el arte
          corporal, reconocido por la calidad artística, innovación y el
          compromiso con la autenticidad de cada diseño.
        </p>

        {
          // ? Cada chip entra con un pequeño retraso (--i) para escalonarlos */
        }
        <ul className="about__values">
          {VALUES.map((value, i) => (
            <li key={value} className="about__value" style={{ "--i": i }}>
              {value}
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
};
