import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FcHome } from "react-icons/fc";
import { useNavigate } from "react-router";

import styles from "./PokemonPage.module.scss";

import {
  PrevNextPages,
  PokemonInfo,
  PokemonEvolutions,
  PokemonStats,
} from "../../components/views";

import { Button, Loader } from "../../components/shared";
import { getPokemonInfo } from "../../utils";

import redArrow from "../../assets/redArrow.png";
import { pokemonsSelector } from "../../store/selectors";
import { fetchFromUrl, getPokemonSpecies } from "../../data/data";
import { fetchPokemons } from "../../store/actions";
import { Pokemon, Stats } from "../../types";

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
  const [prevPokemon, setPrevPokemon] = useState<any>(null);
  const [nextPokemon, setNextPokemon] = useState<any>(null);
  const [flavor, setFlavor] = useState<any>(null);

  useEffect(() => {
    const pokemonGetter: () => void = async () => {
      const index = allPokemons.findIndex(
        (pokemon) => pokemon.name.toLowerCase() === name?.toLowerCase()
      );

      console.log(index, "ind");

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

      if (name) {
        const activePokemonFlavor = await getPokemonSpecies(name);
        setFlavor(activePokemonFlavor);
      }
    };
    if (name) {
      pokemonGetter();
    }
  }, [name, allPokemons]);

  console.log(pokemon, "pokemon");
  console.log(flavor, "flavor");

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

  const pokemonStats = pokemon?.stats?.map((stat: Stats) => {
    return (
      <div key={nanoid()} className={styles.stat_container}>
        <div className={styles.stat_wrapper}>
          <p>{stat.base_stat}</p>
        </div>
      </div>
    );
  });
  console.log(pokemonStats, "000");

  console.log(typeof pokemonStats, "typeof");

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
