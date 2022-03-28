import React, { useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader, SearchBar } from "../../components/shared";
import {
  FilterByType,
  SortPokemons,
  ShowPerPage,
  PokemonCard,
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
import { axios } from "../../utils";
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

  const allPokemons = useSelector(pokemonsSelector);
  console.log(allPokemons, "dd");
  const offset = useSelector(offsetSelector);
  const limit = useSelector(limitSelector);
  const sortBy = useSelector(sortBySelector);
  const loading = useSelector(loadingSelector);
  const buttonsCount = Math.ceil(allPokemons.length / limit);

  //  const memoizedLink =useMemo(()=>{

  //  },[url])
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
    if (offset !== 1) {
      dispatch(setOffset(offset - 1));
    }
  };

  const handleNextPage = () => {
    if (offset !== buttonsCount) {
      dispatch(setOffset(offset + 1));
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
        {loading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <div className={styles.main_page__all_pokemons}>
            <PokemonCards />
          </div>
        )}

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
