import React from "react";
import { useSelector } from "react-redux";
import { PokemonCard } from "..";
import { loadingSelector, pokemonSelector } from "../../../store/selectors";
import { Loader } from "../../shared";
import styles from "./PokemonCards.module.scss";

const PokemonCards: React.FC = () => {
  const pokemons = useSelector(pokemonSelector);
  console.log(pokemons, "a");
  const loading = useSelector(loadingSelector);

  const singlePokemonCard = pokemons.map((pokemon: any) => {
    return <PokemonCard pokemon={pokemon} key={pokemon.id} id={pokemon.id} />;
  });

  return (
    <div className={styles.pokemon_cards}>
      {loading ? <Loader /> : singlePokemonCard}
    </div>
  );
};

export default PokemonCards;
