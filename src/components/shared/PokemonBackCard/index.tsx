import React from "react";
import { Link } from "react-router-dom";

import styles from "./PokemonBackCard.module.scss";
import { PokemonBackCardProps } from "./types";

const PokemonBackCard: React.FC<PokemonBackCardProps> = ({ pokemon }) => {
  return (
    <div className={styles.pokemon_card__back}>
      <Link to={`/pokemon/${pokemon.name.replace(" ", "-")}`}>
        <div className={styles.pokemon_card__back__container}>
          <p className={styles.pokemon_card__back__container__name}>
            {pokemon.name}
          </p>
          <h2 className={styles.pokemon_card__back__container__heading}>
            More info
          </h2>
          <div className={styles.pokemon_card__back__container__item}>
            <p className={styles.pokemon_card__back__container__item__number}>
              Weight: {pokemon.weight}
            </p>
            <p className={styles.pokemon_card__back__container__item__type}>
              Height: {pokemon.height}
            </p>
            <p
              className={styles.pokemon_card__back__container__experience__text}
            >
              Base experience: {pokemon.base_experience}
            </p>
            <p>Game Indices: {pokemon?.game_indices[0]?.game_index}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonBackCard;
