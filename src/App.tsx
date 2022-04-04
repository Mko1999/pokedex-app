import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { MainPage, ErrorPage, PokemonPage } from "./containers";

import styles from "./App.module.scss";

const App: React.FC = () => (
  <BrowserRouter>
    <div className={styles.app}>
      <Routes>
        <Route path="/pokemon/:name" element={<PokemonPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
