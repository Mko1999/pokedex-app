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
import { useDispatch, useSelector } from "react-redux";
import { pokemonsSelector } from "../../store/selectors";
import { getAllPokemonsData, getPokemonUrls } from "../../data/data";
import { fetchPokemons } from "../../store/actions";

const PokemonPage: React.FC = () => {
  const allPokemons = useSelector(pokemonsSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!allPokemons.length) {
      dispatch(fetchPokemons());
    }
  }, [allPokemons]);
  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [prevPokemon, setPrevPokemon] = useState<any>(null);
  const [nextPokemon, setNextPokemon] = useState<any>(null);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const index = allPokemons.findIndex(
        (pokemon) =>
          pokemon.name.toLowerCase() === name?.replace("-", " ").toLowerCase()
      );
      console.log(index, "55");

      if (index > -1) {
        const data = await getPokemonUrls(allPokemons[index].url);
        setPokemon(data);
        if (index > 0) {
          setPrevPokemon(allPokemons[index - 1]?.name);
        }
        if (index < allPokemons.length) {
          setNextPokemon(allPokemons[index + 1]?.name);
        }
      }
    };
    if (name) {
      pokemonGetter();
    }
  }, [name, allPokemons]);

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

  return (
    <>
      {pokemon ? (
        <div className={styles.pokemon_page}>
          <div className={styles.pokemon_page__container}>
            <PrevNextPages
              name={pokemon?.name}
              prevName={prevPokemon}
              nextName={nextPokemon}
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
