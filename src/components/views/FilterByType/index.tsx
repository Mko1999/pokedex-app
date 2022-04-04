import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./FilterByType.module.scss";
import { useOnOutsideClick } from "../../../hooks";

import Arrow from "../../../assets/arrow.svg";
import { api } from "../../../utils";
import { getPokemonTypes } from "../../../data/data";
import { NameURL } from "../../../types";
import {
  fetchPokemonsByType,
  fetchPokemonTypes,
  resetFilter,
  setFilter,
  setOffset,
} from "../../../store/actions/pokemonActions";
import {
  filterTypeSelector,
  pokemonTypesSelector,
} from "../../../store/selectors";

const FilterByType: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleDropdown = () => {
    setVisible(!visible);
  };

  const types = useSelector(pokemonTypesSelector);
  const nameUrls = [
    {
      name: "All types",
      url: "All",
    },
    ...types,
  ];

  const filterPokemons = (e: any) => {
    const exactType = e.target.dataset.url;
    const typeName = e.target.dataset.name;
    dispatch(setFilter(typeName));
    if (exactType === "All") {
      dispatch(resetFilter());
    } else {
      dispatch(fetchPokemonsByType(exactType));
    }

    dispatch(setOffset(1));
  };

  console.log(types, "222");

  const pokemonTypes = nameUrls?.map((type) => {
    return (
      <li
        data-url={type.url}
        data-name={type.name}
        role="button"
        onClick={filterPokemons}
        key={type.url}
        className={styles.filter_by_type__dropdown__element}
      >
        {type.name}
      </li>
    );
  });

  const dropdownClassname = classNames(styles.filter_by_type__dropdown, {
    [styles.filter_by_type__dropdown__active]: visible,
  });

  const iconClassname = classNames(styles.filter_by_type__arrow, {
    [styles.filter_by_type__arrow__active]: visible,
  });

  const containerClassname = classNames(styles.filter_by_type__container, {
    [styles.filter_by_type__container__active]: visible,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const filter = useSelector(filterTypeSelector);

  const clickOutsidehandler = () => {
    setVisible(false);
  };

  useOnOutsideClick(dropdownRef, clickOutsidehandler);

  return (
    <div className={styles.filter_by_type}>
      <div
        role="button"
        onClick={handleDropdown}
        className={containerClassname}
        ref={dropdownRef}
      >
        <p className={styles.filter_by_type__title}>{filter}</p>
        <img alt="arrow" src={Arrow} className={iconClassname}></img>

        <div ref={dropdownRef} className={dropdownClassname}>
          {pokemonTypes}
        </div>
      </div>
    </div>
  );
};

export default FilterByType;
