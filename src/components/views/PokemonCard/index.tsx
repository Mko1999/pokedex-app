import React from "react";
import styles from "./PokemonCard.module.scss";
import { Link } from "react-router-dom";
import { PokemonItem } from "..";
import Sample from "../../../assets/sample.jpeg";

const PokemonCard: React.FC = () => {
  return (
    <div className={styles.pokemon_card}>
      <Link to="/pokemon">
        <div className={styles.pokemon_card__container}>
          <div className={styles.pokemon_card__container__background}>
            <div className={styles.pokemon_card__container__background__image}>
              <img
                alt="Pokemon"
                className={styles.pokemon_card__container__img}
                src={Sample}
              ></img>
            </div>
          </div>
        </div>
      </Link>
      <PokemonItem />
    </div>
  );
};

export default PokemonCard;
