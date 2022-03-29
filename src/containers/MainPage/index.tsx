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
  const currentPage = (offset + limit) / limit;
  const buttonsCount = Math.ceil(allPokemons.length / limit);

  console.log(limit, "limit");
  console.log(offset, "offset");
  console.log(buttonsCount, "buttonsCount");
  console.log(currentPage, "current");

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch(fetchPokemons());
    }, 0);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const getUrls = (allPokemons: NameURL[]) => {
    switch (sortBy) {
      case LOWEST_TO_HIGHEST_NUMBER:
        return allPokemons.slice(offset, limit).map((item) => item.url);
      case HIGHEST_TO_LOWEST_NUMBER:
        return allPokemons.slice(-offset, -limit).map((item) => item.url);
      case A_Z:
        return allPokemons
          .sort((a, b) => a.name.localeCompare(b.name))
          .slice(offset, limit)
          .map((item: NameURL) => item.url);
      case Z_A:
        return allPokemons
          .sort((a, b) => b.name.localeCompare(a.name))
          .slice(offset, limit)
          .map((item: NameURL) => item.url);
      default:
        return [];
    }
  };

  useEffect(() => {
    const urls = getUrls(allPokemons);
    dispatch(fetchPokemon(urls));
  }, [dispatch, offset, limit, sortBy, allPokemons]);

  const handlePreviousPage = () => {
    if (currentPage !== 1) {
      dispatch(setOffset((currentPage - 2) * limit));
    }
  };

  const handleNextPage = () => {
    if (currentPage !== buttonsCount) {
      dispatch(setOffset(currentPage * limit));
    }
  };

  const handlePageChange = (e: any) => {
    const pageNumber = Number(e.target.dataset.attribute);
    dispatch(setOffset(pageNumber));
  };

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
        {loading ? <Loader /> : <PokemonCards />}

        <Pagination
          limit={limit}
          offset={offset}
          totalCount={allPokemons.length}
          handleNextPage={handleNextPage}
          handlePreviousPage={handlePreviousPage}
          handlePageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default MainPage;
