import React, { useState } from "react";
import classNames from "classnames";

import styles from "./ShowPerPage.module.scss";
import Arrow from "../../../assets/arrow.svg";
import { PAGINATION_LIMIT_OPTIONS } from "../../../constants";

const ShowPerPage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = (): void => {
    setVisible(!visible);
  };

  const iconClassname = visible
    ? styles.show_per_page__container__arrow
    : styles.show_per_page__container__arrow_active;

  const dropdownClassname = classNames(
    styles.show_per_page__container__dropdown,
    { [styles.show_per_page__container__dropdown_active]: visible }
  );

  return (
    <div className={styles.show_per_page}>
      <div className={styles.show_per_page__container}>
        <p className={styles.show_per_page__container__title}>Show per page:</p>
        <div
          role="button"
          onClick={toggleVisible}
          className={styles.show_per_page__container__dropbutton}
        >
          <p className={styles.show_per_page__container__title}>20</p>
          <img
            alt="arrow"
            src={Arrow}
            className={styles.show_per_page__container__arrow}
          />
          <ul className={dropdownClassname}>
            {PAGINATION_LIMIT_OPTIONS.map((limit) => {
              return (
                <li
                  key={limit}
                  className={styles.show_per_page__container__dropdown__element}
                >
                  {limit}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShowPerPage;
