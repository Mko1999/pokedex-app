import React from "react";
import styles from "./PokemonCards.module.scss";
import { useSelector } from "react-redux";
import { pokemonSelector } from "../../../store/selectors";
import PokemonCard from "../PokemonCard";

const PokemonCards = () => {
  const pokemons = useSelector(pokemonSelector);
  console.log(pokemons);

  const pokemonCard = pokemons.map((pokemon: any) => {
    return <PokemonCard key={pokemon.id} image ={pokemon.sprites.back_default} name={pokemon.name} />;
  });

  return <div className={styles.pokemon_cards}>{pokemonCard}</div>;
};

export default PokemonCards;
