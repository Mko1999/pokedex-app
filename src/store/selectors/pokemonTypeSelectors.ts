import { NameURL, RootState } from "../../types";

export const pokemonTypesSelector = (state: RootState): NameURL[] =>
  state.pokemonType.pokemonTypes;

export const pokemonsByTypeSelector = (state: RootState): NameURL[] =>
  state.pokemonType.pokemonsByType;

export const filterTypeSelector = (state: RootState): string =>
  state.pokemonType.filterType;
