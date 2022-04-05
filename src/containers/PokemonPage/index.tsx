import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router";

import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./PokemonPage.module.scss";

import {
  PrevNextPages,
  PokemonInfo,
  PokemonEvolutions,
  PokemonStats,
} from "../../components/views";

import { Button, Loader } from "../../components/shared";
import { getPokemonInfo, maximumStats } from "../../utils";

import redArrow from "../../assets/redArrow.png";
import { pokemonsSelector } from "../../store/selectors";
import { fetchFromUrl, getPokemonSpecies } from "../../data/data";
import { fetchPokemons } from "../../store/actions";
import { NameURL, Stats } from "../../types";

const PokemonPage: React.FC = () => {
  const allPokemons = useSelector(pokemonsSelector);
  const navigate = useNavigate();

  const percentage = 66;

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
  const [flavor, setFlavor] = useState<any>(null);
  const [evolutionChain, setEvolutionChain] = useState<any>(null);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const index = allPokemons.findIndex(
        (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
      );

      if (index > -1) {
        const data = await fetchFromUrl(allPokemons[index].url);
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

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const activePokemonFlavor = await getPokemonSpecies(pokemon.id);
      setFlavor(activePokemonFlavor);
    };
    if (pokemon) {
      pokemonGetter();
    }
  }, [pokemon]);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const evolutionChain = await fetchFromUrl(flavor.evolution_chain.url);
      let currentSpecies = evolutionChain.chain;
      const arr: NameURL[] = [currentSpecies.species];
      while (currentSpecies.evolves_to.length) {
        currentSpecies = currentSpecies.evolves_to[0];
        arr.push(currentSpecies.species);
      }
      const a = await Promise.all(
        arr.map(async (item) => {
          let data;
          if (item.name === name) {
            data = { ...pokemon };
          } else {
            data = await fetchFromUrl(item.url);
          }
          return data;
        })
      );
      setEvolutionChain(a);
    };
    if (flavor) {
      pokemonGetter();
    }
  }, [flavor]);

  const a = pokemon?.stats?.map((stat: Stats) => {
    return stat.base_stat;
  });

  console.log(a, "a");

  const b = Object.values(maximumStats).map((item) => {
    return item;
  });

  console.log(b, "b");

  const tokos = (arr1: number[], arr2: number[]): number[] => {
    const newArr = [];
    for (let i = 0; i < arr1?.length; i++) {
      newArr.push(Math.round((arr1[i] / arr2[i]) * 100));
    }
    return newArr;
  };

  console.log(tokos(a, b), "tokos");

  const pokemonInfo = getPokemonInfo(pokemon).map((item) => {
    return (
      <div
        key={nanoid()}
        className={styles.pokemon_info__mainInfo__advanced__item}
      >
        <p className={styles.pokemon_info__mainInfo__advanced__text}>
          {item.title}
        </p>
        <img
          className={styles.pokemon_info__mainInfo__advanced__image}
          src={item.image}
          draggable="false"
        ></img>
        <p className={styles.pokemon_info__mainInfo__advanced__title}>
          {item.info}
        </p>
      </div>
    );
  });

  const pokemonPic = pokemon?.sprites.front_default;
  const flavorText = flavor?.flavor_text_entries[0].flavor_text;

  const pokemonStats = pokemon?.stats?.map((stat: Stats, index: number) => {
    const realStat = tokos(a, b)[index];
    return (
      <CircularProgressbar key={nanoid()} value={realStat} text={`${realStat}`}>
        <div className={styles.stat_container}>
          <div className={styles.stat_wrapper}>
            <p>{stat.base_stat}</p>
          </div>
        </div>
      </CircularProgressbar>
    );
  });

  return (
    <React.Fragment>
      {pokemon ? (
        <div className={styles.pokemon_page}>
          <div className={styles.pokemon_page__container}>
            <PrevNextPages
              name={pokemon?.name}
              prevName={prevPokemon}
              nextName={nextPokemon}
            />
            <div className={styles.pokemon_page__goback}>
              <p className={styles.pokemon_page__goback__text}>
                <Link to="/">Go to Home Page</Link>
              </p>
              <img
                src={redArrow}
                className={styles.pokemon_page__goback__img}
              />
              <Button className={styles.pokemon_page__goback__home}>
                <FcHome
                  role="button"
                  onClick={(): void => navigate("/")}
                  size={35}
                />
              </Button>
            </div>
            <PokemonInfo
              flavorText={flavorText}
              pokemonInfo={pokemonInfo}
              pokemonPic={pokemonPic}
              id={pokemon.id}
            />
            <PokemonStats pokemonStats={pokemonStats} />
            <PokemonEvolutions />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default PokemonPage;
