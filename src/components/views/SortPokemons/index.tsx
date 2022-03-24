import React from "react";
import styles from "./SortPokemons.module.scss";
import Arrow from "../../../assets/arrow.svg";

const SortPokemons: React.FC = () => {
  return (
    <div className={styles.sort_pokemons}>
      <div className={styles.sort_pokemons__container}>
        <p className={styles.sort_pokemons__container__title}>
          Highest to lowest number
        </p>
        <img
          alt="arrow"
          src={Arrow}
          className={styles.sort_pokemons__container__arrow}
        ></img>
        <div className={styles.sort_pokemons__dropdown}>
          <li className={styles.sort_pokemons__dropdown__element}></li>
        </div>
      </div>
    </div>
  );
};

export default SortPokemons;
