import React from "react";
import { SearchBar } from "../../components/shared";
import {
  FilterByType,
  SortPokemons,
  ShowPerPage,
  PokemonCard,
  Pagination,
} from "../../components/views";
import styles from "./MainPage.module.scss";

const MainPage: React.FC = () => {
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
        <Pagination />
      </div>
    </div>
  );
};

export default MainPage;
