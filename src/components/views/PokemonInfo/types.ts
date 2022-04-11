import { PokemonTypes } from "./../../../types/pokemon";
import { NameURL } from "../../../types/pokemon";

export type PokemonInfoProps = {
  types: PokemonTypes[];
  flavorText: string;
  id: number;
  height: number;
  weight: number;
  isDefault: boolean;
  baseXP: number;
  order: number;
};
