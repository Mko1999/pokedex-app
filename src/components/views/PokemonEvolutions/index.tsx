import React from "react";
import styles from "./PokemonEvolutions.module.scss";
import { ArrowRightSquare } from "react-bootstrap-icons";
import PokemonCard from "../PokemonCard";

const PokemonEvolutions: React.FC = () => {
  return (
    <div className={styles.pokemon_evolutions}>
      <h3 className={styles.pokemon_evolutions__title}>Evolutions</h3>
      <div className={styles.pokemon_evolutions__container}>
        {/* <PokemonCard /> */}
        <div className={styles.pokemon_evolutions__container__arrow}>
          <ArrowRightSquare fill="#ff6f61" size="25" />
        </div>
        {/* <PokemonCard /> */}
        <div className={styles.pokemon_evolutions__container__arrow}>
          <ArrowRightSquare fill="#ff6f61" size="25" />
        </div>
        {/* <PokemonCard /> */}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
