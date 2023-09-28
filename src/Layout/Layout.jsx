import React from "react";

import Navbar from "../Components/Navbar";

import Projects from "../Components/Projects";
import Cursos from "../Components/Cursos";
import Educacao from "../Components/Educacao";

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
