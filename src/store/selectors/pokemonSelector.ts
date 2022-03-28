import { NameURL } from "../../types";

export const pokemonsSelector = (state: any): NameURL[] =>
  state.pokemon.allPokemons;

export const pokemonSelector = (state: any) => state.pokemon.pokemons;

export const typePokemonSelector = (state: any) => state.pokemon.typePokemons;

export const errorSelector = (state: any) => state.pokemon.error;

export const loadingSelector = (state: any) => state.pokemon.loading;

export const offsetSelector = (state: any) => state.pokemon.offset;

export const limitSelector = (state: any) => state.pokemon.limit;

export const searchValueSelector = (state: any) => state.pokemon.searchValue;

export const filterTypeSelector = (state: any) => state.pokemon.fiterType;

export const sortBySelector = (state: any) => state.pokemon.sortBy;
