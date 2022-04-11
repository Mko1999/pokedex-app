import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "react-bootstrap-icons";

import styles from "./SearchBar.module.scss";

import Input from "../Input";
import Button from "../Button";

import { INPUT_MAX_LENGTH } from "../../../constants";
import { setOffset, setSearch } from "../../../store/actions";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();

  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    dispatch(setSearch(searchText));
    dispatch(setOffset(1));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={onSearchSubmit} className={styles.searchbar}>
      <Input
        maxLength={INPUT_MAX_LENGTH}
        value={searchText}
        onChange={handleInputChange}
        placeholder="Search by name"
        type="text"
        className={styles.searchbar__input}
      />
      <Button className={styles.searchbar__button}>
        <Search width="20" height="20" />
      </Button>
    </form>
  );
};

export default SearchBar;
