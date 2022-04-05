import { NameURL, Pokemon } from "../../types";
import { store } from "..";

export const pokemonsSelector = (
  state: ReturnType<typeof store.getState>
): NameURL[] => state.pokemon.allPokemons;

export const pokemonSelector = (
  state: ReturnType<typeof store.getState>
): Pokemon[] => state.pokemon.pokemons;

export const errorSelector = (
  state: ReturnType<typeof store.getState>
): string => state.pokemon.error;

export const loadingSelector = (
  state: ReturnType<typeof store.getState>
): boolean => state.pokemon.loading;

export const pokemonLoadingSelector = (
  state: ReturnType<typeof store.getState>
): boolean => state.pokemon.pokemonLoading;

export const offsetSelector = (
  state: ReturnType<typeof store.getState>
): number => state.pokemon.offset;

export const limitSelector = (
  state: ReturnType<typeof store.getState>
): number => state.pokemon.limit;

export const searchValueSelector = (
  state: ReturnType<typeof store.getState>
): string => state.pokemon.searchValue;

export const sortBySelector = (
  state: ReturnType<typeof store.getState>
): string => state.pokemon.sortBy;
