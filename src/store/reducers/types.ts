import { NameURL, Pokemon } from "../../types";

export interface IPokemonState {
  allPokemons: NameURL[];
  pokemons: Pokemon[];
  pokemonTypes: any[];
  pokemonsByType: any[];
  error: string;
  loading: boolean;
  pokemonLoading: boolean;
  offset: number;
  limit: number;
  searchValue: string;
  sortBy: string;
  filterType: any;
}
