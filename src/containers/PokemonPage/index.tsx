import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";

import styles from "./PokemonPage.module.scss";

import {
  PrevNextPages,
  PokemonInfo,
  PokemonEvolutions,
} from "../../components/views";
import { getPokemonData } from "../../data";
import { PokemonLoader } from "../../components/shared";
import { getPokemonInfo } from "../../utils";

const PokemonPage: React.FC = () => {
  const { id } = useParams();

  const [pokemon, setPokemon] = useState<any>(null);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const data = await getPokemonData(Number(id));
      setPokemon(data);
    };
    if (id) {
      pokemonGetter();
    }
  }, [id]);

  const pokemonInfo = getPokemonInfo(pokemon).map((item) => {
    return (
      <div
        key={nanoid()}
        className={styles.pokemon_info__mainInfo__advanced__item}
      >
        <p className={styles.pokemon_info__mainInfo__advanced__text}>
          {item.title}
        </p>
        <p className={styles.pokemon_info__mainInfo__advanced__title}>
          {item.info}
        </p>
      </div>
    );
  });

  const pokemonPic = pokemon?.sprites.back_default;

  const prevName = "";
  const nextName = "";

  return (
    <>
      {pokemon ? (
        <div className={styles.pokemon_page}>
          <div className={styles.pokemon_page__container}>
            <PrevNextPages
              name={pokemon?.name}
              prevName={prevName}
              nextName={nextName}
            />
            <div className={styles.pokemon_page__goback}>
              <p>
                <Link to="/">Go to Home Page</Link>
              </p>
            </div>
            <PokemonInfo pokemonInfo={pokemonInfo} pokemonPic={pokemonPic} />
            <PokemonEvolutions />
          </div>
        </div>
      ) : (
        <PokemonLoader />
      )}
    </>
  );
};

export default PokemonPage;
