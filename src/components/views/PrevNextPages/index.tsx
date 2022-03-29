import React from "react";
import { Link } from "react-router-dom";

import styles from "./PrevNextPages.module.scss";
import Arrow from "../../../assets/arrow.svg";

const PrevNextPages: React.FC = () => {
  return (
    <div className={styles.prev_next_pages}>
      <div className={styles.prev_next_pages__back}>
        <img
          alt="arrow"
          className={[
            styles.prev_next_pages__arrow,
            styles.prev_next_pages__left,
          ].join(" ")}
          src={Arrow}
        />
        <p>
          <Link to="/">Pokemon name and number</Link>
        </p>
      </div>
      <div>
        <h1 className={styles.prev_next_pages__title}>Pokemon name</h1>
      </div>
      <div className={styles.prev_next_pages__next}>
        <p className={styles.prev_next_pages__next__text}>
          <Link to="/">Pokemon name and number</Link>
        </p>
        <img
          alt="arrow"
          className={styles.prev_next_pages__arrow}
          src={Arrow}
        />
      </div>
    </div>
  );
};

export default PrevNextPages;
