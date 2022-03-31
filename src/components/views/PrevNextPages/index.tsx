import React from "react";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";

import { PrevNextProps } from "./types";

import styles from "./PrevNextPages.module.scss";
import Arrow from "../../../assets/arrow.svg";

const PrevNextPages: React.FC<PrevNextProps> = ({
  name,
  prevName,
  nextName,
}) => {
  const iconClassname = classNames(
    styles.prev_next_pages__arrow,
    styles.prev_next_pages__left
  );

  const previousLinkClassName = classNames(styles.prev_next_pages__link, {
    [styles.prev_next_pages__link__disabled]: name === "1",
  });

  const nextLinkClassName = classNames(styles.prev_next_pages__link, {
    [styles.prev_next_pages__link__disabled]: name === "10228",
  });

  return (
    <div className={styles.prev_next_pages}>
      <div className={styles.prev_next_pages__back}>
        <img alt="arrow" className={iconClassname} src={Arrow} />
        <p>
          <Link className={previousLinkClassName} to={`/pokemon/${prevName}`}>
            {prevName}
          </Link>
        </p>
      </div>
      <div>
        <h1 className={styles.prev_next_pages__title}>{name && name}</h1>
      </div>
      <div className={styles.prev_next_pages__next}>
        <p className={styles.prev_next_pages__next__text}>
          <Link className={nextLinkClassName} to={`/pokemon/${nextName}`}>
            {nextName}
          </Link>
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
