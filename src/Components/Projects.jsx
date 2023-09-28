import React, { useState } from "react";
import "../styles/projectStyles.css";
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
        <p>Lorem ipsum dolor sit amet.</p>
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
                  <img src="src/img/airbnb.png" alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://cadastro-de-cliente.netlify.app/"
                >
                  <img src="src/img/cadastroDeCliente.png" alt="" />
                </a>
              </li>

              <li className="ativo">
                <a
                  target="_blank"
                  href="https://todolist-netlify-reactjs.netlify.app/"
                >
                  <img src="src/img/todoList2.png" alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/projecthotel/"
                >
                  <img src="src/img/travel.png" alt="" />
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
                  <img src="src/img/airbnb.png" alt="" />
                </a>
              </li>
              <li className="ativo">
                <a
                  target="_blank"
                  href="https://adryeldeev.github.io/projecthotel/"
                >
                  <img src="src/img/travel.png" alt="" />
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
                  <img src="src/img/cadastroDeCliente.png" alt="" />
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
                  <img src="src/img/todoList2.png" alt="" />
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
