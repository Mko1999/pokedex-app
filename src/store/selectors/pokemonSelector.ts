import { RootState, NameURL, Pokemon } from "../../types";

export const pokemonsSelector = (state: RootState): NameURL[] =>
  state.pokemon.allPokemons;

export const pokemonSelector = (state: RootState): Pokemon[] =>
  state.pokemon.pokemons;

export const errorSelector = (state: RootState): string => state.pokemon.error;

export const loadingSelector = (state: RootState): boolean =>
  state.pokemon.loading;

export const pokemonLoadingSelector = (state: RootState): boolean =>
  state.pokemon.pokemonLoading;

export const offsetSelector = (state: RootState): number => state.pokemon.page;

export const limitSelector = (state: RootState): number => state.pokemon.limit;

export const searchValueSelector = (state: RootState): string =>
  state.pokemon.searchValue;

export const sortBySelector = (state: RootState): string =>
  state.pokemon.sortBy;
