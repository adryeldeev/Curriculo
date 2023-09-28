import React, { useState } from "react";
import "../styles/navbarStyles.css";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header id="inicio">
      <h1>
        Dev<span>Adryel</span>
      </h1>
      <nav>
        <ul
          className={
            menuVisible ? "navegacao-primaria active" : "navegacao-primaria"
          }
          aria-label="Navegação primária"
        >
          <li>
            <a href="#inicio">íncio</a>
          </li>
          <li>
            <a href="#sobremim">Sobre Mim</a>
          </li>
          <li>
            <a href="#educacao">Educação</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contato">contato</a>
          </li>
        </ul>
      </nav>
      <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
    </header>
  );
};

export default Navbar;
