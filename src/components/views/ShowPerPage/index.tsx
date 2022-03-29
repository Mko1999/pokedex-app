import React, { useState, useRef } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import styles from "./ShowPerPage.module.scss";
import Arrow from "../../../assets/arrow.svg";

import { useOnOutsideClick } from "../../../hooks";
import { PAGINATION_LIMIT_OPTIONS } from "../../../constants";
import { setLimit } from "../../../store/actions";
import { limitSelector } from "../../../store/selectors";

const ShowPerPage: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  const toggleVisible = (): void => {
    setVisible(!visible);
  };

  const dispatch = useDispatch();

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

  const limit = useSelector(limitSelector);

  const handleLimitChange = (e: any) => {
    const limitValue = e.target.dataset.value;
    dispatch(setLimit(limitValue));
  };

  const limitOptions = PAGINATION_LIMIT_OPTIONS.map((limit) => {
    return (
      <li
        key={limit}
        className={styles.show_per_page__container__dropdown__element}
        role="button"
        onClick={handleLimitChange}
        data-value={limit}
      >
        {limit}
      </li>
    );
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
          <p className={titleClassname}>{limit}</p>
          <img alt="arrow" src={Arrow} className={iconClassname} />
          <ul className={dropdownClassname}>{limitOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default ShowPerPage;
