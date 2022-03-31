import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import Input from "../Input";
import Button from "../Button";
import { Search } from "react-bootstrap-icons";
import { getAllPokemonsData } from "../../../data";
import { INPUT_MAX_LENGTH } from "../../../constants";
import { useDispatch } from "react-redux";
import { setOffset, setSearch } from "../../../store/actions";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();

  const handleSearch = (e: any) => {
    e.preventDefault();
    dispatch(setSearch(searchText));
    dispatch(setOffset(1));
  };

  const handleInputChange = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch} className={styles.searchbar}>
        <Input
          maxLength={INPUT_MAX_LENGTH}
          value={searchText}
          onChange={handleInputChange}
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
