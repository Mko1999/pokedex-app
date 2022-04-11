import React from "react";

import { useSelector } from "react-redux";

import styles from "./PokemonCard.module.scss";
import { PokemonCardProps } from "./types";

import { pokemonLoadingSelector } from "../../../store/selectors";
import { PokemonLoader } from "../../shared";

import PokemonBackCard from "../../shared/PokemonBackCard";
import PokemonFrontCard from "../../shared/PokemonFrontCard";

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon, id }) => {
  const pokemonLoading = useSelector(pokemonLoadingSelector);

  return (
    <div className={styles.parent}>
      {pokemonLoading ? (
        <PokemonLoader />
      ) : (
        <div className={styles.child}>
          <PokemonFrontCard pokemon={pokemon} id={id} />
          <PokemonBackCard pokemon={pokemon} />
        </div>
      )}
    </div>
  );
};

export default PokemonCard;
