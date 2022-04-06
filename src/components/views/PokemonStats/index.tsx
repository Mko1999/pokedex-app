import React from "react";
import styles from "./PokemonStats.module.scss";
import { maximumStats, refactorWord } from "../../../utils";
import { nanoid } from "nanoid";
import { PokemonStatProps } from "./types";

const PokemonStats: React.FC<PokemonStatProps> = ({ pokemonStats }) => {
  const mainStat = Object.keys(maximumStats).map((item) => {
    return (
      <p className={styles.pokemon_stats__container__title} key={nanoid()}>
        {refactorWord(item)}
      </p>
    );
  });

  return (
    <div className={styles.pokemon_stats}>
      <h2 className={styles.pokemon_stats__title}>Stats</h2>
      <div className={styles.pokemon_stats__parent}>
        <div className={styles.pokemon_stats__container}>{mainStat}</div>
        <div className={styles.pokemon_stats__container__item}>
          {pokemonStats}
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
