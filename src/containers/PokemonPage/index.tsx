import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router";

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import styles from "./PokemonPage.module.scss";

import {
  PrevNextPages,
  PokemonInfo,
  PokemonEvolutions,
  PokemonStats,
} from "../../components/views";

import { Button, Loader } from "../../components/shared";
import { maximumStats } from "../../utils";

import redArrow from "../../assets/redArrow.png";
import { pokemonsSelector } from "../../store/selectors";
import { fetchFromUrl, getPokemonSpecies } from "../../data/data";
import { fetchPokemons } from "../../store/actions";
import { NameURL, Stats } from "../../types";

const PokemonPage: React.FC = () => {
  const allPokemons = useSelector(pokemonsSelector);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    if (!allPokemons.length) {
      dispatch(fetchPokemons());
    }
  }, [allPokemons]);

  const { name } = useParams();
  const [pokemon, setPokemon] = useState<any>(null);
  const [prevPokemon, setPrevPokemon] = useState<string>("");
  const [nextPokemon, setNextPokemon] = useState<string>("");
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
      if (pokemon) {
        const activePokemonFlavor = await getPokemonSpecies(pokemon.id);
        setFlavor(activePokemonFlavor);
      }
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
  console.log(pokemon, "poke");
  console.log(evolutionChain, "nm");
  console.log(prevPokemon, "prev");
  console.log(flavor, "flavor");

  const pokemonStat = pokemon?.stats?.map((stat: Stats) => {
    return stat.base_stat;
  });

  const maximumStat = Object.values(maximumStats).map((item) => {
    return item;
  });

  const percentage = (arr1: number[], arr2: number[]): number[] => {
    const newArr = [];
    for (let i = 0; i < arr1?.length; i++) {
      newArr.push(Math.round((arr1[i] / arr2[i]) * 100));
    }
    return newArr;
  };

  const flavorText = flavor?.flavor_text_entries[0].flavor_text;

  const evolution = "Evolution";

  const pokemonStats = pokemon?.stats?.map((stat: Stats, index: number) => {
    const realStat = percentage(pokemonStat, maximumStat)[index];
    return (
      <CircularProgressbar
        key={nanoid()}
        value={realStat}
        text={`${realStat}%`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "butt",
          pathTransitionDuration: 0.5,
          pathColor: "#272324",
          textColor: "#f88",
          trailColor: "#fa7c30",
        })}
      >
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
            {pokemon && (
              <PokemonInfo
                flavorText={flavorText}
                types={pokemon.types}
                height={pokemon.height}
                weight={pokemon.weight}
                isDefault={pokemon.is_default}
                baseXP={pokemon.base_experience}
                order={pokemon.order}
                id={pokemon.id}
              />
            )}
            <PokemonStats pokemonStats={pokemonStats} />
            <PokemonEvolutions evolution={evolution} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </React.Fragment>
  );
};

export default PokemonPage;
