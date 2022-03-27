import React, { useState, useRef } from "react";
import classNames from "classnames";

import { useOnOutsideClick } from "../../../hooks";
import styles from "./ShowPerPage.module.scss";
import Arrow from "../../../assets/arrow.svg";
import { PAGINATION_LIMIT_OPTIONS } from "../../../constants";

const ShowPerPage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = (): void => {
    setVisible(!visible);
  };

  const iconClassname = classNames(styles.show_per_page__container__arrow, {
    [styles.show_per_page__container__arrow_active]: visible,
  });

  const dropdownClassname = classNames(
    styles.show_per_page__container__dropdown,
    { [styles.show_per_page__container__dropdown_active]: visible }
  );

  const dropButtonClassname = classNames(
    styles.show_per_page__container__dropbutton,
    {
      [styles.show_per_page__container__dropbutton_active]: visible,
    }
  );

  const titleClassname = classNames(styles.show_per_page__container__title, {
    [styles.show_per_page__container__title_active]: visible,
  });

  const dropdownRef = useRef<HTMLDivElement>(null);

  const clickOutsidehandler = () => {
    setVisible(false);
  };

  useOnOutsideClick(dropdownRef, clickOutsidehandler);

  return (
    <div className={styles.show_per_page}>
      <div className={styles.show_per_page__container}>
        <p className={styles.show_per_page__container__title}>Show per page:</p>
        <div
          role="button"
          onClick={toggleVisible}
          className={dropButtonClassname}
          ref={dropdownRef}
        >
          <p className={titleClassname}>20</p>
          <img alt="arrow" src={Arrow} className={iconClassname} />
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
