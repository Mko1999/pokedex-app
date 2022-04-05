export type NameURL = {
  name: string;
  url: string;
};

export type IPagination = {
  totalCount: number;
  pageSize: number;
  siblingCount: number;
  currentPage: number;
};

export type Pokemon = {
  abilites: Abilities[];
  base_experience: number;
  forms: Forms[];
  game_indices: GameIndices[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Moves[];
  name: string;
  order: number;
  past_types: any[];
  species: Species;
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
  xp?: number | undefined | null;
};

export type Abilities = {
  ability: NameURL;
  is_hidden: boolean;
  slot: number;
};

export type Forms = {
  name: string;
  url: string;
};
export type GameIndices = {
  game_index: number;
  version: NameURL;
};

export type VersionGroupDetails = {
  level_learned_at: number;
  move_learn_method: NameURL;
  version_group: NameURL;
};

export type Moves = {
  move: NameURL;
  version_group_details: VersionGroupDetails[];
};

export type Species = {
  name: string;
  url: string;
};

export type DreamWorld = {
  front_default: string | null;
  front_female: string | null;
};

export type HomeSprite = {
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
};

export type OfficialArtwork = {
  front_default: string | null;
};

export type Sprites = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: string | null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: string | null;
  other: {
    dream_world: DreamWorld;
    home: HomeSprite;
    "official-artwork": OfficialArtwork;
    versions: any;
  };
};

export type Stats = {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
};

export type Types = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};

export type Slots = {
  slot: number;
  pokemon: NameURL;
};

export type PokemonSpecies = {
  pokemon_species: NameURL;
  rate: number;
};
