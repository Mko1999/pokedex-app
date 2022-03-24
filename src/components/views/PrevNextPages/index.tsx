import React from "react";
import styles from "./PrevNextPages.module.scss";
import Arrow from "../../../assets/arrow.svg";
import { Link } from "react-router-dom";

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
      <div className={styles.prev_next_pages__title}>
        <h1>Pokemon name</h1>
      </div>
      <div className={styles.prev_next_pages__next}>
        <p>
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
