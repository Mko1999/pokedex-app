import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./FilterByType.module.scss";

import Arrow from "../../../assets/arrow.svg";

const FilterByType: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    setVisible(!visible);
  };

  const dropdownClassname = visible
    ? styles.filter_by_type__dropdown
    : styles.filter_by_type__dropdown__active;
  const iconClassname = visible
    ? styles.filter_by_type__arrow
    : styles.filter_by_type__arrow__active;

  return (
    <div className={styles.filter_by_type}>
      <div
        role="button"
        onClick={handleDropdown}
        className={styles.filter_by_type__container}
      >
        <p className={styles.filter_by_type__title}>All types</p>
        <img alt="arrow" src={Arrow} className={iconClassname}></img>

        <div className={dropdownClassname}>
          <li className={styles.filter_by_type__dropdown__element}>Normal</li>
          <li className={styles.filter_by_type__dropdown__element}>Fighting</li>
        </div>
      </div>
    </div>
  );
};

export default FilterByType;
