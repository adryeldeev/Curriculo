import React, { useState } from "react";
import "../styles/sectionfooterStyless.css";

const Educacao = () => {
  const [isExperienceVisible, setIsExperienceVisible] = useState(0);
  const [isEducationVisible, setIsEducationVisible] = useState(0);

  const toggleExperience = (index) => {
    setIsExperienceVisible(isExperienceVisible === index ? -1 : index);
  };

  const toggleEducation = (index) => {
    setIsEducationVisible(!isEducationVisible === index ? -1 : index);
    if (isEducationVisible !== null) {
      setIsEducationVisible(null);
    }
  };
  return (
    <div className="my_resume" id="educacao">
      <div className="sobre_titulo">
        <h1>Sobre mim</h1>
        <p>Perfil profissional - Há tudo sobre mim</p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="resume_generico">
        <h2 className={`experience`}>
          <i className="fa-solid fa-handshake"></i>EXPERIENCE
        </h2>
        <div className="experience_content">
          <div className={` ${isExperienceVisible === 1 ? "ativo" : ""}`}>
            <span>2017-2018</span>
            <h3>Casa Pio</h3>
            <p>
              Fui vendedor em uma loja de calçados, tive que trabalhar bastante
              a comunicação, <br />
              agilidade, disciplina e o profissionalismo.
            </p>
          </div>
          <div className={` ${isExperienceVisible === 2 ? "ativo" : ""}`}>
            <span>2018-2019</span>
            <h3>Sapataria Nova</h3>
            <p>
              objetive experiência com clientes, como trabalhar na comunicação,
              saber realizar vendas, persuardir o cliente e ter progressividade.
            </p>
          </div>

          <ul>
            <li
              onClick={() => toggleExperience(1)}
              className={`${isExperienceVisible === 1 ? "ativo" : ""}`}
            >
              <i className={`fa-solid fa-circle`}></i>
            </li>
            <li
              onClick={() => toggleExperience(2)}
              className={`${isExperienceVisible === 2 ? "ativo" : ""}`}
            >
              <i className={`fa-solid fa-circle`}></i>
            </li>
          </ul>
        </div>
        <h2 className="education">
          <i class="fa-solid fa-book"></i>
          EDUCATION
        </h2>
        <div className="education_content">
          <div className={`${isEducationVisible === 5 ? "open" : ""}`}>
            <span>2001-2014</span>
            <h3>Ensino Médio</h3>
            <p>Ensino Médio Completo</p>
          </div>
          <div className={` ${isEducationVisible === 6 ? "open" : ""}`}>
            <span>2022-2024</span>
            <h3>Análise e Desenvolvimento de Sistema</h3>
            <p>Programação.</p>
          </div>
          <ul>
            <li
              onClick={() => {
                toggleEducation(5);
              }}
              className={`${isEducationVisible === 5 ? "open" : ""}`}
            >
              <i className={`fa-solid fa-circle`}></i>
            </li>
            <li
              onClick={() => {
                toggleEducation(6);
              }}
              className={`${isEducationVisible === 6 ? "open" : ""}`}
            >
              <i className={`fa-solid fa-circle`}></i>
            </li>
          </ul>
        </div>
      </div>
      <div className="cursos">
        <div className="my_skill">
          <h2>
            <i></i>Minhas Habilidades
          </h2>
          <div className="skill_content">
            <h3>HTML 5</h3>
            <ul>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
            </ul>
          </div>
          <div className="skill_content">
            <h3>CSS 3</h3>
            <ul>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
              <li>
                <i className="fa-solid fa-star"></i>
              </li>
            </ul>
          </div>
          <div className="skill_content">
            <h3>BOOTSTRAP</h3>
            <ul>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i></i>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star-half-stroke"></i>
              </li>
            </ul>
          </div>
          <div className="skill_content">
            <h3>JAVASCRIPT</h3>
            <ul>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star-half-stroke"></i>
              </li>
            </ul>
          </div>
          <div className="skill_content">
            <h3>React JS</h3>
            <ul>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star-half-stroke"></i>
              </li>
            </ul>
          </div>
          <div className="skill_content">
            <h3>GIT</h3>
            <ul>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star"></i>
              </li>
              <li>
                <i class="fa-solid fa-star-half-stroke"></i>
              </li>
            </ul>
          </div>
        </div>
        <div className="funfacts">
          <h2>
            <i></i>CURIOSIDADES
          </h2>
          <ul>
            <li>
              <i></i>
              <span>4</span>
              <p>Projetos Realizados</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Educacao;
