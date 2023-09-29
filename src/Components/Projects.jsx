import React, { useState } from "react";
import "../styles/projectStyles.css";
import travel from "../img/travel.png";
import todolist2 from "../img/todolist2.png";
import cadastroDeCliente from "../img/cadastroDeCliente.png";
import airbnb from "../img/airbnb.png";
const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All"); // Estado para rastrear a categoria selecionada

  // Função para atualizar a categoria selecionada
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="projects" id="portfolio">
      <div className="sobre_titulo">
        <h1>Meus Projetos</h1>
        <p>Todos meus projetos.</p>
        <div aria-label="Seção apenas de ilustrações de botões">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="projects_models">
        <ul aria-label="Navegação entre modelos específicos de projetos">
          <li
            className={selectedCategory === "All" ? "ativo" : ""}
            onClick={() => handleCategoryClick("All")}
          >
            All
          </li>
          <li
            className={selectedCategory === "Landing page" ? "ativo" : ""}
            onClick={() => handleCategoryClick("Landing page")}
          >
            Landing page
          </li>
          <li
            className={
              selectedCategory === "Cadastro de Cliente" ? "ativo" : ""
            }
            onClick={() => handleCategoryClick("Cadastro de Cliente")}
          >
            Cadastro de Cliente
          </li>

          <li
            className={selectedCategory === "To do List" ? "ativo" : ""}
            onClick={() => handleCategoryClick("To do List")}
          >
            To do List
          </li>
        </ul>
      </div>
      <div className="projects_armazenamentos">
        <ul aria-label="Navegação de projetos e webSites">
          {/* Renderize seus projetos com base na categoria selecionada */}
          {selectedCategory === "All" && (
            <>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/landingpageairbnb/"
                >
                  <img src={airbnb} alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://cadastro-de-cliente.netlify.app/"
                >
                  <img src={cadastroDeCliente} alt="" />
                </a>
              </li>

              <li className="ativo">
                <a
                  target="_blank"
                  href="https://todolist-netlify-reactjs.netlify.app/"
                >
                  <img src={todolist2} alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/projecthotel/"
                >
                  <img src={travel} alt="" />
                </a>
              </li>
            </>
          )}
          {selectedCategory === "Landing page" && (
            <>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/landingpageairbnb/"
                >
                  <img src={airbnb} alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/projecthotel/"
                >
                  <img src={travel} alt="" />
                </a>
              </li>
            </>
          )}
          {selectedCategory === "Cadastro de Cliente" && (
            <>
              {" "}
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://cadastro-de-cliente.netlify.app/"
                >
                  <img src={cadastroDeCliente} alt="" />
                </a>
              </li>
            </>
          )}

          {selectedCategory === "To do List" && (
            <>
              {" "}
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://todolist-netlify-reactjs.netlify.app/"
                >
                  <img src={todolist2} alt="" />
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
