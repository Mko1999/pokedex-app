import { NameURL, Pokemon } from "../../types";

export interface IPokemonState {
  allPokemons: NameURL[];
  pokemons: Pokemon[];
  typePokemons: any[];
  error: string;
  loading: boolean;
  pokemonLoading: boolean;
  offset: number;
  limit: number;
  searchValue: string;
  sortBy: string;
  filterType: any;
}
