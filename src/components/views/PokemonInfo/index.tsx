import React from "react";
import { nanoid } from "nanoid";
import styles from "./PokemonInfo.module.scss";

import PokemonStats from "../PokemonStats";
import Sample from "../../../assets/sample.jpeg";
import { pokemonInfo } from "../../../utils";

const PokemonInfo: React.FC = () => {
  const pokemonInformationDiv = pokemonInfo.map((item) => {
    return (
      <div
        key={nanoid()}
        className={styles.pokemon_info__mainInfo__advanced__item}
      >
        <p className={styles.pokemon_info__mainInfo__advanced__text}>
          {item.title}
        </p>
        <p className={styles.pokemon_info__mainInfo__advanced__title}>
          {item.info}
        </p>
      </div>
    );
  });

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
          {pokemonInformationDiv}
        </div>
        <PokemonStats />
      </div>
    </div>
  );
};

export default PokemonInfo;
