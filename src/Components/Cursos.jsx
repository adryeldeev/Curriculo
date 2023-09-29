import React from "react";
import "../styles/sectionserviceStyles.css";

const Cursos = () => {
  return (
    <section className="services" id="cursos">
      <div className="sobre_titulo">
        <h1>Cursos</h1>
        <p>Perfil profissional - Há tudo sobre mim</p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="my_services">
        <ul aria-label="navegação secundaria">
          <li>
            <i className="fas fa-globe"></i>
            <h1>Desenvolvimento Web</h1>
            <p>Criador de Sites.</p>
          </li>
          <li className="mkt">
            <i className="fas fa-bullseye"></i>
            <h1>Marketing Digital</h1>
            <p>
              Gerar conteúdos para prospectar mais clientes por meio do
              marketing Digital.
            </p>
          </li>
          <li>
            <i className="fas fa-chart-line"></i>
            <h1>Gestor de tráfego</h1>
            <p>
              Usar métodos e ferramentas para direcionar o produto para o
              cliente final.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Cursos;
