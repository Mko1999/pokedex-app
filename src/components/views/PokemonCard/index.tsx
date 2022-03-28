import React from "react";
import styles from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";
import { PokemonItem } from "..";
import Sample from "../../../assets/sample.jpeg";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../../store/selectors";
import { PokemonCardProps } from "./types";

const PokemonCard: React.FC<PokemonCardProps> = ({ name, url }) => {
  // const pokemon = useSelector(pokemonSelector);

  return (
    <div className={styles.pokemon_card}>
      <Link to={url || "/"}>
        <div className={styles.pokemon_card__container}>
          <div className={styles.pokemon_card__container__background}>
            <div className={styles.pokemon_card__container__background__image}>
              <img
                draggable="false"
                alt="Pokemon"
                className={styles.pokemon_card__container__img}
                src={Sample}
              ></img>
            </div>
          </div>
          <p className={styles.pokemon_card__container__name}>{name}</p>
        </div>
      </Link>
      <PokemonItem />
    </div>
  );
};

export default PokemonCard;
