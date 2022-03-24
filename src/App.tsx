import React from "react";
import styles from "./App.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, ErrorPage, PokemonPage } from "./containers";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/pokemon" element={<PokemonPage />} />
          <Route element={<ErrorPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
