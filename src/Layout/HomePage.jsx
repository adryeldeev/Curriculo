import React from "react";
import Layout from "./Layout";
import foto from "../img/foto.jpeg";
import "../styles/mainsectionStyles.css";
const HomePage = () => {
  return (
    <Layout>
      <main id="sobremim">
        <article aria-label="seção sobre mim" className="sobre">
          <div className="sobre_titulo">
            <h1>Sobre mim</h1>
            <p>Perfil profissional - Tem tudo sobre mim</p>
            <div aria-label="seção apenas de ilustrações de botões">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <img src={foto} />
            {/* <i class="fa-solid fa-map"></i> */}
          </div>
          <div className="sobre_conteudo">
            <div className="sobre_texto">
              <h1>
                Oi. Eu sou o Adryel - <br /> REACT DEVELOPER{" "}
                <a href="https://github.com/adryeldeev" target="_blank">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/adryel-martins-b01544249/"
                  target="_blank"
                >
                  <i class="fa-brands fa-linkedin"></i>
                </a>
              </h1>

              <p>
                Me chamo Adryel Martins. Iniciei na programação em 2022,
                cursando Análise e Desenvolvimento de Sistemas. Atualmente estou
                no quinto e último semestre da faculdade.
                <br />
                Possuo experiências com programações front-end e backend e estou
                sempre buscando novos conhecimentos e tecnologias para me manter
                atualizado, com o objetivo de entregar o melhor trabalho
                possível.
              </p>
            </div>
            <div className="sobre_info">
              <p>
                <i class="fa-solid fa-calendar-days"></i>Data de nascimento:
                13/06/1998
              </p>
              <p>
                <i class="fa-solid fa-location-dot"></i>Endereço: Rua raimundo
                neri - Parque são José
              </p>
              <p>
                <i class="fa-sharp fa-solid fa-globe"></i>Linguagens: Português
              </p>
              <p>
                {" "}
                <i class="fa-solid fa-flag"></i>Nacionalidade: Brasileira.
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>Número:(85)98416-6186
              </p>
              <p>
                <i class="fa-solid fa-envelope"></i>Email: adryeldev@hotmail.com
              </p>
            </div>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export default HomePage;
