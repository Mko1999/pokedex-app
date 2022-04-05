import { Pokemon, Types } from "../types";
import redArrow from "../assets/redArrow.png";
import { meterToFeet, kgToPound } from ".";

export const getPokemonInfo = (pokemon: Pokemon) => {
  return [
    {
      title: "Height",
      image: redArrow,
      info: `${pokemon?.height / 10} m (${meterToFeet(
        pokemon?.height / 10
      )}ft)`,
    },
    {
      title: "Weight",
      image: redArrow,
      info: `${pokemon?.weight / 10}kg (${kgToPound(
        pokemon?.weight / 10
      )}pound) `,
    },
    {
      title: "Base experience",
      image: redArrow,
      info: pokemon?.base_experience,
    },
    {
      title: "Types",
      image: redArrow,
      info: pokemon?.types.map((type: Types) => type.type.name),
    },
    {
      title: "Is default",
      image: redArrow,
      info: `${pokemon?.is_default}`,
    },
    {
      title: "Main Game index",
      image: redArrow,
      info: pokemon?.game_indices[0]?.game_index
        ? pokemon?.game_indices[0]?.game_index
        : "No data",
    },
  ];
};
