import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./PokemonCard.module.scss";
import { PokemonCardProps } from "./types";

import { pokemonLoadingSelector } from "../../../store/selectors";
import { PokemonLoader } from "../../shared";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, id }) => {
  const idString = `00${id}`.slice(-3);
  const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`;
  const pokemonLoading = useSelector(pokemonLoadingSelector);
  console.log(pokemonLoading, "000");
  const pokemonID =
    pokemon.id > 9
      ? `0${pokemon.id}`
      : pokemon.id < 10
      ? `00${pokemon.id}`
      : pokemon.id;

  const pokemonType = pokemon.types.map((type: any) => type.type.name);

  const pokemonTypeToString = Array.isArray(pokemonType)
    ? pokemonType.join(" , ")
    : "";

  return (
    <div className={styles.parent}>
      {pokemonLoading ? (
        <PokemonLoader />
      ) : (
        <div className={styles.child}>
          <div className={styles.pokemon_card}>
            <Link to={`pokemon/${pokemon.name.replace(" ", "-")}`}>
              <div className={styles.pokemon_card__container}>
                <div className={styles.pokemon_card__container__background}>
                  <div
                    className={
                      styles.pokemon_card__container__background__image
                    }
                  >
                    <img
                      draggable="false"
                      alt="Pokemon"
                      className={styles.pokemon_card__container__img}
                      src={imageSrc}
                    />
                  </div>
                </div>
                <p className={styles.pokemon_card__container__name}>
                  {pokemon.name}
                </p>
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
          {/* This is background that should be visible only in hover */}
          <div className={styles.pokemon_card__back}>
            <Link to={"" || ""}>
              <div className={styles.pokemon_card__back__container}>
                <p className={styles.pokemon_card__back__container__name}>
                  {pokemon.name}
                </p>
                <h2 className={styles.pokemon_card__back__container__heading}>
                  More info{" "}
                </h2>
                <div className={styles.pokemon_card__back__container__item}>
                  <p
                    className={
                      styles.pokemon_card__back__container__item__number
                    }
                  >
                    Weight: {pokemon.weight}
                  </p>
                  <p
                    className={styles.pokemon_card__back__container__item__type}
                  >
                    Height: {pokemon.height}
                  </p>
                  <p
                    className={
                      styles.pokemon_card__back__container__experience__text
                    }
                  >
                    Base experience: {pokemon.base_experience}
                  </p>
                  <p>Game Indices: {pokemon?.game_indices[0]?.game_index}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
