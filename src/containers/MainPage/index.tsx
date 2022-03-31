import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import styles from "./MainPage.module.scss";

import { Loader, SearchBar } from "../../components/shared";
import {
  FilterByType,
  SortPokemons,
  ShowPerPage,
  Pagination,
  PokemonCards,
} from "../../components/views";
import { fetchPokemon, fetchPokemons } from "../../store/actions";
import {
  limitSelector,
  loadingSelector,
  offsetSelector,
  pokemonsSelector,
  searchValueSelector,
  sortBySelector,
} from "../../store/selectors";
import { NameURL } from "../../types";
import {
  A_Z,
  HIGHEST_TO_LOWEST_NUMBER,
  LOWEST_TO_HIGHEST_NUMBER,
  Z_A,
} from "../../utils/sortOptions";

const MainPage: React.FC = () => {
  const dispatch = useDispatch();

  const allPokemons = useSelector(pokemonsSelector);
  const offset = useSelector(offsetSelector);
  const limit = useSelector(limitSelector);
  const sortBy = useSelector(sortBySelector);
  const loading = useSelector(loadingSelector);
  const search = useSelector(searchValueSelector);

  useEffect(() => {
    dispatch(fetchPokemons());
  }, [dispatch, sortBy]);

  const getUrls = (allPokemons: NameURL[]) => {
    const index = (offset - 1) * limit;
    const end = offset * limit;
    const filteredPokemons = allPokemons.filter((value) =>
      value.name.includes(search)
    );

    switch (sortBy) {
      case LOWEST_TO_HIGHEST_NUMBER:
        return filteredPokemons.slice(index, end).map((item) => item.url);
      case HIGHEST_TO_LOWEST_NUMBER:
        return filteredPokemons
          .slice(-end, index === 0 ? undefined : -index)
          .reverse()
          .map((item) => item.url);
      case A_Z:
        return filteredPokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(index, offset * limit)
          .map((item: NameURL) => item.url);
      case Z_A:
        return filteredPokemons
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
  }, [dispatch, offset, limit, sortBy, allPokemons, search]);

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
