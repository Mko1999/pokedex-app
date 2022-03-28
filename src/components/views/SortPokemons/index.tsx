import React, { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import classNames from "classnames";
import styles from "./SortPokemons.module.scss";
import Arrow from "../../../assets/arrow.svg";
import { sortOptions } from "../../../utils";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import { sortBySelector } from "../../../store/selectors";
import { setSortBy } from "../../../store/actions";

const SortPokemons: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleSortChange = (e: any) => {
    const sortValue = e.target.dataset.value;
    dispatch(setSortBy(sortValue));
  };

  const sortOption = sortOptions.map((option) => {
    return (
      <li
        role="button"
        onClick={handleSortChange}
        key={option}
        className={styles.sort_pokemons__dropdown__element}
        data-value={option}
      >
        {option}
      </li>
    );
  });

  const dispatch = useDispatch();

  const toggleVisible = (): void => {
    setVisible(!visible);
  };

  const clickOutsidehandler = () => {
    setVisible(false);
    // alert("You have clicked outside the square box");
  };
  const dropdownRef = useRef<HTMLDivElement>(null);
  const sortBy = useSelector(sortBySelector);

  useOnClickOutside(dropdownRef, clickOutsidehandler);

  const containerClassname = classNames(styles.sort_pokemons__container, {
    [styles.sort_pokemons__container_active]: visible,
  });

  const dropdownClassname = classNames(styles.sort_pokemons__dropdown, {
    [styles.sort_pokemons__dropdown_active]: visible,
  });

  const iconClassname = classNames(styles.sort_pokemons__container__arrow, {
    [styles.sort_pokemons__container__arrow_active]: visible,
  });

  const titleClassname = classNames(styles.sort_pokemons__container__title, {
    [styles.sort_pokemons__container__title_active]: visible,
  });

  return (
    <div className={styles.sort_pokemons}>
      <div
        ref={dropdownRef}
        role="button"
        onClick={toggleVisible}
        className={containerClassname}
      >
        <p className={titleClassname}>{sortBy}</p>
        <img alt="arrow" src={Arrow} className={iconClassname}></img>
        <ul className={dropdownClassname}>{sortOption}</ul>
      </div>
    </div>
  );
};

export default SortPokemons;
