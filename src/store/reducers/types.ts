import { NameURL, Pokemon } from "../../types";

export interface IPokemonState {
  allPokemons: NameURL[];
  pokemons: Pokemon[];
  error: string;
  loading: boolean;
  pokemonLoading: boolean;
  page: number;
  limit: number;
  searchValue: string;
  sortBy: string;
}

export interface IPokemonTypeState {
  pokemonTypes: NameURL[];
  pokemonsByType: NameURL[];
  error: string;
  loading: boolean;
  filterType: string;
}
