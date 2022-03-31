import React from "react";
import { nanoid } from "nanoid";
import styles from "./PokemonInfo.module.scss";
import { PokemonInfoProps } from "./types";

import PokemonStats from "../PokemonStats";
import Sample from "../../../assets/sample.jpeg";

const PokemonInfo: React.FC<PokemonInfoProps> = ({
  pokemonInfo,
  pokemonPic,
}) => {
  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info__image}>
        <div className={styles.pokemon_info__image__container}>
          <img src={pokemonPic} alt="pokemon pic"></img>
        </div>
      </div>
      <div className={styles.pokemon_info__mainInfo}>
        <p className={styles.pokemon_info__mainInfo__sample}>
          Sample text Sample text
        </p>
        <div className={styles.pokemon_info__mainInfo__advanced}>
          {pokemonInfo}
        </div>
        <PokemonStats />
      </div>
    </div>
  );
};

export default PokemonInfo;
