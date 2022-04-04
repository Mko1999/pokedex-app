import { NameURL, Types } from "../../types";

export const pokemonsSelector = (state: any): NameURL[] =>
  state.pokemon.allPokemons;

export const pokemonSelector = (state: any) => state.pokemon.pokemons;

export const pokemonTypesSelector = (state: any): NameURL[] =>
  state.pokemon.pokemonTypes;

export const pokemonsByTypeSelector = (state: any): NameURL[] =>
  state.pokemon.pokemonsByType;

export const errorSelector = (state: any) => state.pokemon.error;

export const loadingSelector = (state: any) => state.pokemon.loading;

export const pokemonLoadingSelector = (state: any) =>
  state.pokemon.pokemonLoading;

export const offsetSelector = (state: any) => state.pokemon.offset;

export const limitSelector = (state: any) => state.pokemon.limit;

export const searchValueSelector = (state: any) => state.pokemon.searchValue;

export const filterTypeSelector = (state: any) => state.pokemon.filterType;

export const sortBySelector = (state: any) => state.pokemon.sortBy;
