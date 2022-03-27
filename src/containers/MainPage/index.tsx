import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, SearchBar } from "../../components/shared";
import {
  FilterByType,
  SortPokemons,
  ShowPerPage,
  PokemonCard,
  Pagination,
} from "../../components/views";
import {
  fetchPokemon,
  fetchPokemons,
} from "../../store/actions/pokemonActions";
import {
  limitSelector,
  offsetSelector,
  pokemonsSelector,
  sortBySelector,
} from "../../store/selectors";
import { NameURL } from "../../types";
import {
  A_Z,
  HIGHEST_TO_LOWEST_NUMBER,
  LOWEST_TO_HIGHEST_NUMBER,
  Z_A,
} from "../../utils/sortOptions";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const pokemons = useSelector(pokemonsSelector);
  const offset = useSelector(offsetSelector);
  const limit = useSelector(limitSelector);
  const sortBy = useSelector(sortBySelector);

  const getUrls = () => {
    switch (sortBy) {
      case LOWEST_TO_HIGHEST_NUMBER:
        return pokemons.slice(offset, limit).map((item) => item.url);
      case HIGHEST_TO_LOWEST_NUMBER:
        return pokemons.slice(-offset, -limit).map((item) => item.url);
      case A_Z:
        return pokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(offset, limit)
          .map((item: NameURL) => item.url);
      case Z_A:
        return pokemons
          .sort((a, b) => b.name.localeCompare(a.name))
          .slice(offset, limit)
          .map((item: NameURL) => item.url);
      default:
        return [];
    }
  };

  const urls = getUrls();

  useEffect(() => {
    dispatch(fetchPokemon(urls));
  }, [dispatch, urls]);

  // const pokemonList = pokemons.map((pokemon)=>{
  //   return <PokemonCard
  // })

  return (
    <div className={styles.main_page}>
      <div className={styles.main_page__container}>
        <h1 className={styles.main_page__title}>Pokedex</h1>
        <div className={styles.main_page__header}>
          <SearchBar />
          <FilterByType />
          <SortPokemons />
          <ShowPerPage />
        </div>
        <div className={styles.main_page__all_pokemons}>
          <PokemonCard />
        </div>
        <div>
          <Loader />
        </div>
        <Pagination />
      </div>
    </div>
  );
};

export default MainPage;
