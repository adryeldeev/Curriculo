import React from "react";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import HomePage from "./Layout/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Curriculo" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
