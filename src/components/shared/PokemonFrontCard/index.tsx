import React from "react";
import { Link } from "react-router-dom";

import styles from "./PokemonFrontCard.module.scss";
import { PokemonFrontCardProps } from "./types";

import { Image } from "../../shared";
import { Types } from "../../../types";
import { getBeautifulID, getID } from "../../../utils";

const PokemonFrontCard: React.FC<PokemonFrontCardProps> = ({ pokemon, id }) => {
  const idString = getID(id);
  const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`;
  const pokemonID = getBeautifulID(id);

  const pokemonType = pokemon.types.map((type: Types) => type.type.name);

  const pokemonTypeToString = Array.isArray(pokemonType)
    ? pokemonType.join(" , ")
    : "";

  return (
    <div className={styles.pokemon_card}>
      <Link to={`/pokemon/${pokemon.name.replace(" ", "-")}`}>
        <div className={styles.pokemon_card__container}>
          <div className={styles.pokemon_card__container__background}>
            <div className={styles.pokemon_card__container__background__image}>
              <Image
                loading="lazy"
                draggable={false}
                alt="Pokemon"
                className={styles.pokemon_card__container__img}
                src={imageSrc}
              />
            </div>
          </div>
          <p className={styles.pokemon_card__container__name}>{pokemon.name}</p>
          <div className={styles.pokemon_card__container__item}>
            <p className={styles.pokemon_card__container__item__number}>
              {pokemonID}
            </p>
            <p className={styles.pokemon_card__container__item__type}>
              {pokemonTypeToString}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PokemonFrontCard;
