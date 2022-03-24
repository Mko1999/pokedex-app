import React from "react";
import styles from "./PokemonPage.module.scss";
import {
  PrevNextPages,
  PokemonInfo,
  PokemonEvolutions,
} from "../../components/views";
import { Link } from "react-router-dom";

const PokemonPage = () => {
  return (
    <div className={styles.pokemon_page}>
      <div className={styles.pokemon_page__container}>
        <PrevNextPages />
        <div className={styles.pokemon_page__goback}>
          <p>
            <Link to="/">Go to Home Page</Link>
          </p>
        </div>
        <PokemonInfo />
        <PokemonEvolutions />
      </div>
    </div>
  );
};

export default PokemonPage;
