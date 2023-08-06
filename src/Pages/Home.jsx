import React from "react";
import NavBar from "../Components/NavBar";
import '../Styles/Home.css'
import '../Styles/HomeMediaQueries.css'


const Nav = () => {
  return (
    <>
      <div className="img">
      <NavBar/>
      <div>
        </div>
        <div className="header">
          <text>
            <p id="titulo-nav">SOLUCIONES EN EL DESAROLLO DE SOFTWARE</p>
            <p id="Subtitulo-nav">
              Las metodologías ágiles para el desarrollo de software son
              técnicas novedosas que permite reducir el tiempo gastado en la
              programación de un nuevo software.
            </p>
          </text>
        </div>
      </div>

      <div className="contenido-G">
        <p id="Titulo">Lo que hacemos</p>
        <p id="Texto">
        <p>
          En nuestra empresa, impulsamos su éxito mediante la implementación de soluciones de software integrales y personalizadas, forjadas a través de un enfoque cuidadosamente diseñado y transparente. Nuestro proceso consta de cuatro pasos esenciales que aseguran una colaboración estrecha y una adaptación perfecta a sus necesidades
        </p>
        <p>
          Asociarse con nosotros no solo amplifica la eficiencia, el alcance y la rentabilidad de su negocio, sino que también le brinda acceso a un equipo de profesionales altamente calificados, dedicados a apoyarlo en cada paso del camino. En esta era digital, en la que la tecnología y la innovación son cruciales, no pretendemos ser simplemente una opción entre muchas. Nos consideramos más que un proveedor; somos su aliado esencial y estratégico para el crecimiento.
        </p>

       {/*    Impulsamos su éxito con soluciones de software integrales, forjadas a
          través de un proceso transparente de cuatro pasos: escuchar,
          planificar, desarrollar y perfeccionar. Asociarse con nosotros
          amplifica la eficiencia, el alcance y la rentabilidad. En esta era
          digital, no pretendemos ser solo una opción, somos tu aliado esencial
          para el crecimiento. */}
        </p>
        <div className="ali">
          <div className="cards">
            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3449/3449750.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Desarrollo web personalizado</h5>
                    <br />
                    <p className="card-text">
                      El desarrollo web permite a las empresas que buscan una
                      experiencia consistente y flexible entre diferentes
                      plataformas..
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7075/7075373.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">
                      Desarrollo móvil personalizado
                    </h5>
                    <br />
                    <p className="card-text">
                      Creamos aplicaciones personalizadas para mejorar el
                      compromiso, la accesibilidad y la conectividad en tiempo
                      real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className="cards2">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/8473/8473799.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Gestion en la nube</h5>
                    <br />
                    <p className="card-text">
                      Creamos aplicaciones personalizadas para mejorar el
                      compromiso, la accesibilidad y la conectividad en tiempo
                      real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card mb-3" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/3220/3220198.png"
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">Asesoramiento</h5>
                    <br />
                    <p className="card-text">
                      Creamos aplicaciones personalizadas para mejorar el
                      compromiso, la accesibilidad y la conectividad en tiempo
                      real.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>

        <div>
          <p id="Titulo2">Cómo trabajamos</p>
        </div>

        <div className="desarollo">
          <div>
            <p id="Texto" className="Alineacion">
              Lo guiaremos a través de nuestra metodología probada y confiable
              que hemos probado y pulido durante años de experiencia. El proceso
              comienza con la comprensión de sus necesidades específicas,
              seguido de la identificación de los expertos que mejor se adaptan
              a sus requisitos.
            </p>
          </div>

          <div>
           <img
              src="https://www.solusoft.es/Info/Imagenes/desarrollo-software-2/desarrollo-software.png"
              alt=""
            /> 
          </div>

        </div>
      </div>
     
      <div className="footer">
            
            </div>
    </>
  );
};

export default Nav;
