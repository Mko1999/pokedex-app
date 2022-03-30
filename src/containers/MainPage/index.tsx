import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, SearchBar } from "../../components/shared";
import {
  FilterByType,
  SortPokemons,
  ShowPerPage,
  Pagination,
  PokemonCards,
} from "../../components/views";
import { fetchPokemon, fetchPokemons, setOffset } from "../../store/actions";
import {
  limitSelector,
  loadingSelector,
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

  const allPokemons = useSelector(pokemonsSelector);
  const offset = useSelector(offsetSelector);
  const limit = useSelector(limitSelector);
  const sortBy = useSelector(sortBySelector);
  const loading = useSelector(loadingSelector);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch]);

  const getUrls = (allPokemons: NameURL[]) => {
    const index = (offset - 1) * limit;
    const end = offset * limit;

    switch (sortBy) {
      case LOWEST_TO_HIGHEST_NUMBER:
        return allPokemons.slice(index, end).map((item) => item.url);
      case HIGHEST_TO_LOWEST_NUMBER:
        return allPokemons
          .slice(-end, index === 0 ? undefined : -index)
          .reverse()
          .map((item) => item.url);
      case A_Z:
        return allPokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(index, offset * limit)
          .map((item: NameURL) => item.url);
      case Z_A:
        return allPokemons
          .sort((a, b) => b.name.localeCompare(a.name))
          .slice(index, offset * limit)
          .map((item: NameURL) => item.url);
      default:
        return [];
    }
  };

  useEffect(() => {
    const urls = getUrls(allPokemons);
    dispatch(fetchPokemon(urls));
  }, [dispatch, offset, limit, sortBy, allPokemons]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [offset]);

  return (
    <div className={styles.main_page}>
      <div className={styles.main_page__container}>
        <h1 className={styles.main_page__title}>
          Welcome to the Pokemons World
        </h1>
        <div className={styles.main_page__header}>
          <SearchBar />
          <FilterByType />
          <SortPokemons />
          <ShowPerPage />
        </div>
        {loading ? <Loader /> : <PokemonCards />}

        <Pagination
          totalCount={allPokemons.length}
          siblingCount={1}
          pageSize={limit}
        />
      </div>
    </div>
  );
};

export default MainPage;
