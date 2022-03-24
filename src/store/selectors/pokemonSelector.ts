// import { IPokemonState } from "./../reducers/types";

export const pokemonsSelector = (state: any) => state.pokemon.allPokemons;

export const errorSelector = (state: any) => state.pokemon.error;

export const loadingSelector = (state: any) => state.pokemon.loading;

export const offsetSelector = (state: any) => state.pokemon.offset;

export const limitSelector = (state: any) => state.pokemon.limit;

export const searchValueSelector = (state: any) => state.pokemon.searchValue;

export const filterSearchSelector = (state: any) => state.pokemons.filterSearch;

export const filterTypeSelector = (state: any) => state.pokeons.fiterType;

export const sortBySelector = (state: any) => state.pokemons.sortBy;
