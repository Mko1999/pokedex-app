import React from "react";
import { useSelector } from "react-redux";
import { PokemonCard } from "..";
import {
  pokemonLoadingSelector,
  pokemonSelector,
} from "../../../store/selectors";
import { Pokemon } from "../../../types";
import { PokemonLoader } from "../../shared";
import styles from "./PokemonCards.module.scss";

const PokemonCards: React.FC = () => {
  const pokemons = useSelector(pokemonSelector);
  const loading = useSelector(pokemonLoadingSelector);

  const singlePokemonCard = pokemons.map((pokemon: Pokemon) => {
    return <PokemonCard pokemon={pokemon} key={pokemon.id} id={pokemon.id} />;
  });

  return (
    <div className={styles.pokemon_cards__wrapper}>
      {loading ? (
        <PokemonLoader />
      ) : (
        <div className={styles.pokemon_cards}> {singlePokemonCard}</div>
      )}
    </div>
  );
};

export default PokemonCards;
