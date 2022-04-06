import React from "react";
import styles from "./PokemonEvolutions.module.scss";
import { ArrowRightSquare } from "react-bootstrap-icons";
import PokemonCard from "../PokemonCard";
import { PokemonEvolutionProps } from "./types";

const PokemonEvolutions: React.FC<PokemonEvolutionProps> = ({ evolution }) => {
  return (
    <div className={styles.pokemon_evolutions}>
      <h3 className={styles.pokemon_evolutions__title}>Evolutions</h3>
      <div className={styles.pokemon_evolutions__container}>
        {evolution}
        <div className={styles.pokemon_evolutions__container__arrow}>
          <ArrowRightSquare fill="#ff6f61" size="25" />
        </div>
        {evolution}
        <div className={styles.pokemon_evolutions__container__arrow}>
          <ArrowRightSquare fill="#ff6f61" size="25" />
        </div>
        {evolution}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
