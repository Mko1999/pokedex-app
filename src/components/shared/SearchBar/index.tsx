import React, { useState } from "react";
import styles from "./SearchBar.module.scss";
import Input from "../Input";
import Button from "../Button";
import { Search } from "react-bootstrap-icons";
import { getAllPokemonsData } from "../../../data";

const SearchBar: React.FC = () => {
  const [searchText, setSearchText] = useState<string>("");

  const getData = () => {
    console.log(getAllPokemonsData());
  };
  return (
    <div className={styles.searchbar}>
      <Input
        maxLength={30}
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        placeholder="Search by name"
        type="text"
        className={styles.searchbar__input}
      />
      <Button onClick={getData} className={styles.searchbar__button}>
        <Search size="20" />
      </Button>
    </div>
  );
};

export default SearchBar;
