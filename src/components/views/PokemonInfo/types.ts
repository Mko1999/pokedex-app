import { NameURL } from "./../../../types/global";

export type PokemonInfoProps = {
  types: {
    slot: number;
    type: NameURL;
  }[];
  flavorText: string;
  id: number | undefined;
  height: number;
  weight: number;
  isDefault: boolean;
  baseXP: number;
  order: number;
};
