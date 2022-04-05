import { NameURL } from "../../types";
import { store } from "..";

export const pokemonTypesSelector = (
  state: ReturnType<typeof store.getState>
): NameURL[] => state.pokemonType.pokemonTypes;

export const pokemonsByTypeSelector = (
  state: ReturnType<typeof store.getState>
): NameURL[] => state.pokemonType.pokemonsByType;

export const filterTypeSelector = (
  state: ReturnType<typeof store.getState>
): string => state.pokemonType.filterType;
