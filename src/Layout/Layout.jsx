import React from "react";

import Navbar from "../Componente/Navbar";

import Projects from "../Componente/Projects";
import Cursos from "../Componente/Cursos";
import Educacao from "../Componente/Educacao";

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "70vh" }}>{children}</main>
      <Cursos />
      <Educacao />
      <Projects />
    </div>
  );
}

Layout.defaultProps = {
  title: "Ecommerce app - shop now",
  description: "mern stack project",
  keywords: "mern, react, node, mongodb",
};

export default Layout;
