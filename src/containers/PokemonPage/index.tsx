import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
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

import { Button, Loader, Image } from "../../components/shared";
import { maximumStats } from "../../utils";

import redArrow from "../../assets/redArrow.png";
import { loadingSelector, pokemonsSelector } from "../../store/selectors";
import { fetchFromUrl, getPokemonSpecies } from "../../data/data";
import { fetchPokemons } from "../../store/actions";
import { NameURL, SpeciesURL, Stats, Pokemon } from "../../types";

const PokemonPage: React.FC = () => {
  const allPokemons = useSelector(pokemonsSelector);
  const navigate = useNavigate();
  const loading = useSelector(loadingSelector);

  const dispatch = useDispatch();
  useEffect(() => {
    if (!allPokemons.length) {
      dispatch(fetchPokemons());
    }
  }, [allPokemons]);

  const { name } = useParams();
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);

  const [prevPokemon, setPrevPokemon] = useState<string>("");
  const [nextPokemon, setNextPokemon] = useState<string>("");
  const [flavor, setFlavor] = useState<SpeciesURL | null>(null);

  const [evolutionChain, setEvolutionChain] = useState<NameURL[] | []>([]);

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
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [name]);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      if (flavor) {
        const evolutionChain = await fetchFromUrl(flavor.evolution_chain.url);
        const currentPokemon = evolutionChain.chain.species;

        const nextEvolution = evolutionChain?.chain.evolves_to[0]?.species;

        const lastEvolution =
          evolutionChain.chain.evolves_to[0]?.evolves_to[0]?.species;
        const evolutionsArray = [
          currentPokemon,
          nextEvolution,
          lastEvolution,
        ].filter((item) => item);

        setEvolutionChain(evolutionsArray);
      }
    };
    if (flavor) {
      pokemonGetter();
    }
  }, [flavor]);

  const pokemonStat = pokemon?.stats?.map((stat: Stats) => {
    return stat.base_stat;
  });

  const maximumStat = Object.values(maximumStats).map((item) => {
    return item;
  });

  const percentage = (
    realStats: number[] | undefined,
    maximumStats: number[] | undefined
  ): number[] => {
    const newArr = [];
    if (realStats && maximumStats) {
      for (let i = 0; i < realStats?.length; i++) {
        newArr.push(Math.round((realStats[i] / maximumStats[i]) * 100));
      }
    }

    return newArr;
  };

  const flavorText = flavor?.flavor_text_entries[0].flavor_text;

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
              <Image
                alt="Arrow"
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
            {evolutionChain.length ? (
              <PokemonEvolutions evolutions={evolutionChain} />
            ) : null}
          </div>
        </div>
      ) : (
        <Loader loading={loading} />
      )}
    </React.Fragment>
  );
};

export default PokemonPage;
