import { useState } from "react";
import { Header } from "./components/Header/Header";
import { AboutUs } from "./components/AboutUs/AboutUs";
import { Services } from "./components/Services/Services";
import { Gallery } from "./components/Gallery/Gallery";
import { Faq } from "./components/Faq/Faq";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton/WhatsAppButton";

// * Página principal: une todas las secciones.
export const Content = () => {
  // * Estilo elegido, compartido entre "Estilos" y el formulario de "Contacto".
  // ? Se sube aquí (al padre) porque dos componentes hermanos lo necesitan.
  const [style, setStyle] = useState("");

  return (
    <div className="app-container" id="top-of-page">
      <Header />
      <main>
        <AboutUs />
        <Services onSelect={setStyle} />
        <Gallery />
        <Faq />
        <Contact style={style} onStyleChange={setStyle} />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};
