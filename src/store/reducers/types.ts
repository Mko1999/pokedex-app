import { NameURL } from "../../types";

// export type InfoReducerType = {
//   pokemon: [];
//   offset: number;
//   limit: number;
//   searchValue: string;
//   filterSearch: string;
//   sortBy: string;
//   filterType: any;
// };

export interface IPokemonState {
  allPokemons: NameURL[];
  error: string;
  loading: boolean;
  offset: number;
  limit: number;
  searchValue: string;
  filterSearch: string;
  sortBy: string;
  filterType: any;
}
