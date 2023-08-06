import React from "react";
/* Importacion de Componetes */
import NavBar from "../Components/NavBar";
/* Importacion de Estilos */
import "../Styles/About.css";
/* Importacion de Imagen */
import img from "../Img/6.png";

const About = () => {
  return (
    <div>
      <div className="img-A">
        <NavBar />
      </div>

      <div className="contenido-G">
        <p id="Titulo">Historia</p>

        <p id="Texto">
          <p>
            “NEXXUS” Fue fundada en 2023 por cuatro amigos de diferentes
            carreras Alondra estudiante de Derecho, Araceli en Mercadotecnia
            Estratégica e Irving y Jose Luis como estudiantes de ingeniería en
            sistemas, apasionados por sus carreras decidieron unir sus
            conocimientos para la creación de una empresa dedicada al desarrollo
            de software. Al ser un equipo multidisciplinario cada uno de los
            integrantes se dedicaron un área en específico según su carrera:
            Alondra como especialista en leyes ayudo a consolidar las bases
            legales de la empresa como contratos con los consignatarios,
            consumidores, empleados y establecimientos. Araceli estudiantes de
            la licenciatura de mercadotecnia se encargan de estructurar la
            imagen organizacional, creación de estrategias de publicidad y
            ventas para el reconocimiento de la empresa. Irvin y Jose Luis los
            ingenieros en sistemas encargados de desarrollar los softwares de
            inventario para las refaccionarias se encargarán de hacer análisis
            de los requerimientos funciónales y no funcionales de acuerdo con
            las necesidades de las empresas compradoras del software.
          </p>
          <p>
            El enfoque principal de “NEXXUS” es comprender las necesidades y los
            desafíos específicos de cada empresa cliente. A través de consultas
            y análisis exhaustivos, el equipo de “NEXXUS” trabajara en estrecha
            colaboración con sus clientes para identificar oportunidades de
            innovación y desarrollo de software personalizado.
          </p>

          <div id="log">
            <img src={img} alt="" id="logoNexxus" />
          </div>

          <div>
            <p>Misión</p>
            <p>
              Proporcionar soluciones tecnológicas innovadoras y de alta calidad
              que satisfagan las necesidades de nuestros clientes. Desarrollar y
              mantener software confiable, seguro y fácil de usar, que mejore la
              eficiencia y productividad de las empresas y contribuya a su
              crecimiento y éxito a largo plazo.
            </p>

            <p>Visión</p>
            <p>
              Brindamos servicios de impacto positivo en la sociedad por nuestra
              eficiencia, confiabilidad y funcionalidad para ser líderes en el
              desarrollo de soluciones tecnológicas innovadoras y de calidad
            </p>
          </div>
        </p>
      </div>
    </div>
  );
};

export default About;
