import React, { useEffect, useState } from "react";
import { ArrowRightSquare } from "react-bootstrap-icons";

import { PokemonEvolutionProps } from "./types";
import styles from "./PokemonEvolutions.module.scss";

import PokemonCard from "../PokemonCard";
import { getPokemonData } from "../../../data";
import { NameURL, Pokemon } from "../../../types";

const PokemonEvolutionCard: React.FC<Partial<NameURL>> = ({ name }) => {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon | null>(null);

  useEffect(() => {
    const getPokemonChainInfo = async (): Promise<void> => {
      if (name) {
        const data = await getPokemonData(name);
        setPokemonInfo(data);
      }
    };
    getPokemonChainInfo();
  }, [name]);

  return (
    <div>
      {pokemonInfo && <PokemonCard id={pokemonInfo.id} pokemon={pokemonInfo} />}
    </div>
  );
};

const PokemonEvolutions: React.FC<PokemonEvolutionProps> = ({ evolutions }) => {
  const evolutionsRenderer = evolutions.map(({ name }, index) => {
    return (
      <div className={styles.pokemon_evolutions__container__parent} key={name}>
        <div className={styles.pokemon_evolutions__container__parent__arrow}>
          {index === 0 ? null : (
            <ArrowRightSquare fill="#ff6f61" width="25" height="25" />
          )}
        </div>
        <div className={styles.pokemon_evolutions__container__card}>
          <PokemonEvolutionCard name={name} />
        </div>
      </div>
    );
  });

  return (
    <div className={styles.pokemon_evolutions}>
      <h3 className={styles.pokemon_evolutions__title}>Evolutions</h3>
      <div className={styles.pokemon_evolutions__container}>
        {evolutionsRenderer}
      </div>
    </div>
  );
};

export default PokemonEvolutions;
