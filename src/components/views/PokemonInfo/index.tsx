import React from "react";
import styles from "./PokemonInfo.module.scss";
import PokemonStats from "../PokemonStats";
import Sample from "../../../assets/sample.jpeg";

const PokemonInfo: React.FC = () => {
  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info__image}>
        <div className={styles.pokemon_info__image__container}>
          <img src={Sample} alt="pokemon pic"></img>
        </div>
      </div>
      <div className={styles.pokemon_info__mainInfo}>
        <p className={styles.pokemon_info__mainInfo__sample}>
          Sample text Sample text
        </p>
        <div className={styles.pokemon_info__mainInfo__advanced}>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
          <div className={styles.pokemon_info__mainInfo__advanced__item}>
            <p className={styles.pokemon_info__mainInfo__advanced__text}>
              Height
            </p>
            <p className={styles.pokemon_info__mainInfo__advanced__title}>
              Some info
            </p>
          </div>
        </div>
        <PokemonStats />
      </div>
    </div>
  );
};

export default PokemonInfo;
