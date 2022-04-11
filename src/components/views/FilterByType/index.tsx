import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./FilterByType.module.scss";

import Arrow from "../../../assets/arrow.svg";
import { Image } from "../../shared";

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

import { useOnOutsideClick } from "../../../hooks";
import { ALL_TYPES, ALL } from "../../../constants";
import { NameURL } from "../../../types";

const FilterByType: React.FC = () => {
  const [visible, setIsVisible] = useState<boolean>(false);

  const filter = useSelector(filterTypeSelector);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  const handleDropdown = (): void => {
    setIsVisible(!visible);
  };

  const types = useSelector(pokemonTypesSelector);
  const nameUrls = [
    {
      name: ALL_TYPES,
      url: ALL,
    },
    ...types,
  ];

  const filterPokemons = (element: NameURL): void => {
    dispatch(setFilter(element.name));
    if (element.name === ALL) {
      dispatch(resetFilter());
    } else {
      dispatch(fetchPokemonsByType(element.url));
    }

    dispatch(setOffset(1));
  };

  const pokemonTypes = nameUrls?.map((type) => {
    return (
      <li
        key={type.url}
        data-url={type.url}
        data-name={type.name}
        role="button"
        onClick={(): void => filterPokemons(type)}
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

  const clickOutsidehandler = (): void => {
    setIsVisible(false);
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
        <Image alt="arrow" src={Arrow} className={iconClassname} />

        <div ref={dropdownRef} className={dropdownClassname}>
          {pokemonTypes}
        </div>
      </div>
    </div>
  );
};

export default FilterByType;
