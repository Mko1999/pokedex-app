import React from "react";
import styles from "./PokemonInfo.module.scss";
import { PokemonInfoProps } from "./types";

const PokemonInfo: React.FC<PokemonInfoProps> = ({
  pokemonInfo,
  pokemonPic,
  flavorText,
  id,
}) => {
  console.log(pokemonInfo, "33");
  console.log(typeof pokemonPic, "44");
  const idString = `00${id}`.slice(-3);
  const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`;

  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info__image}>
        <div className={styles.pokemon_info__image__container}>
          <img draggable="false" src={imageSrc} alt="pokemon pic"></img>
        </div>
      </div>
      <div className={styles.pokemon_info__mainInfo}>
        <p className={styles.pokemon_info__mainInfo__sample}>{flavorText}</p>
        <div className={styles.pokemon_info__mainInfo__advanced}>
          {pokemonInfo}
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
