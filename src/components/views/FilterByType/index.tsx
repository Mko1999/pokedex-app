import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./FilterByType.module.scss";
import { useOnOutsideClick } from "../../../hooks";

import Arrow from "../../../assets/arrow.svg";

import {
  fetchPokemonsByType,
  setOffset,
  resetFilter,
  setFilter,
} from "../../../store/actions/";
import {
  filterTypeSelector,
  pokemonTypesSelector,
} from "../../../store/selectors";

import { ALL_TYPES, ALL } from "../../../constants";
import { NameURL } from "../../../types";

const FilterByType: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const dispatch = useDispatch();

  const handleDropdown = (): void => {
    setVisible(!visible);
  };

  const types = useSelector(pokemonTypesSelector);
  const nameUrls = [
    {
      name: ALL_TYPES,
      url: ALL,
    },
    ...types,
  ];

  const filterPokemons = (e: NameURL): void => {
    dispatch(setFilter(e.name));
    if (e.name === ALL) {
      dispatch(resetFilter());
    } else {
      dispatch(fetchPokemonsByType(e.url));
    }

    dispatch(setOffset(1));
  };

  const pokemonTypes = nameUrls?.map((type) => {
    return (
      <li
        data-url={type.url}
        data-name={type.name}
        role="button"
        onClick={(): void => filterPokemons(type)}
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

  const clickOutsidehandler = (): void => {
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
