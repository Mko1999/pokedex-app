import { NameURL } from "../../types";

export interface IPokemonState {
  allPokemons: NameURL[];
  pokemons: any[];
  typePokemons: any[];
  error: string;
  loading: boolean;
  offset: number;
  limit: number;
  searchValue: string;
  sortBy: string;
  filterType: any;
}
