import { Pokemon, Types } from "../types";

export const getPokemonInfo = (pokemon: Pokemon) => {
  return [
    { title: "Height", info: pokemon?.height },
    { title: "Weight", info: pokemon?.weight },
    { title: "Base experience", info: pokemon?.base_experience },
    {
      title: "Types",
      info: pokemon?.types.map((type: Types) => type.type.name),
    },
    { title: "Is default", info: `${pokemon?.is_default}` },
    { title: "Main Game index", info: pokemon?.game_indices[0].game_index },
  ];
};
