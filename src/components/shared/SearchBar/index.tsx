import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";
import Input from "../Input";
import Button from "../Button";
import { Search } from "react-bootstrap-icons";
import { getAllPokemonsData } from "../../../data";
import { useDispatch, useSelector } from "react-redux";
import { axios } from "../../../utils";
import { fetchPokemon } from "../../../store/actions";
import { A_Z, HIGHEST_TO_LOWEST_NUMBER, LOWEST_TO_HIGHEST_NUMBER, Z_A } from "../../../utils/sortOptions";
import {
  limitSelector,
  loadingSelector,
  offsetSelector,
  pokemonsSelector,
  sortBySelector,
} from "../../../store/selectors";
import { NameURL } from "../../../types";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    e.preventDefault();
  };
  return (
    <div className={styles.searchbar}>
      <form className={styles.searchbar__form} onSubmit={handleSearch}>
        <Input
          maxLength={30}
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by name"
          type="text"
          className={styles.searchbar__input}
        />
        <Button className={styles.searchbar__button}>
          <Search size="20" />
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;
