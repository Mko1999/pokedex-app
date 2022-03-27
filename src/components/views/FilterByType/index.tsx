import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";

import styles from "./FilterByType.module.scss";
import { useOnOutsideClick } from "../../../hooks";

import Arrow from "../../../assets/arrow.svg";

const FilterByType: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setVisible(!visible);
  };

  const dropdownClassname = classNames(styles.filter_by_type__dropdown, {
    [styles.filter_by_type__dropdown__active]: visible,
  });

  const iconClassname = classNames(styles.filter_by_type__arrow, {
    [styles.filter_by_type__arrow__active]: visible,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setVisible(false);
  };

  useOnOutsideClick(dropdownRef, clickOutsidehandler);

  return (
    <div className={styles.filter_by_type}>
      <div
        role="button"
        onClick={handleDropdown}
        className={styles.filter_by_type__container}
      >
        <p className={styles.filter_by_type__title}>All types</p>
        <img alt="arrow" src={Arrow} className={iconClassname}></img>

        <div ref={dropdownRef} className={dropdownClassname}>
          <li className={styles.filter_by_type__dropdown__element}>Normal</li>
          <li className={styles.filter_by_type__dropdown__element}>Fighting</li>
        </div>
      </div>
    </div>
  );
};

export default FilterByType;
