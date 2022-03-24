import React from "react";
import styles from "./PokemonStats.module.scss";

const PokemonStats: React.FC = () => {
  return (
    <div className={styles.pokemon_stats}>
      <h2 className={styles.pokemon_stats__title}>Stats</h2>
      <div className={styles.pokemon_stats__container}>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
        <div className={styles.pokemon_stats__container__item}>
          <div className={styles.pokemon_stats__container__graphics}></div>
          <p>HP</p>
        </div>
      </div>
    </div>
  );
};

export default PokemonStats;
