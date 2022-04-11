import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import { PrevNextProps } from "./types";
import styles from "./PrevNextPages.module.scss";

import {
  FIRST_POKEMON_NAME,
  LAST_POKEMON_NAME,
  POKEMONLINK,
} from "../../../constants";
import Arrow from "../../../assets/arrow.svg";
import { Image } from "../../shared";

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
    [styles.prev_next_pages__link__disabled]: name === FIRST_POKEMON_NAME,
  });

  const nextLinkClassName = classNames(styles.prev_next_pages__link, {
    [styles.prev_next_pages__link__disabled]: name === LAST_POKEMON_NAME,
  });

  const realPrevName = name === FIRST_POKEMON_NAME ? "" : prevName;
  const realNextName = name === LAST_POKEMON_NAME ? "" : nextName;

  return (
    <div className={styles.prev_next_pages}>
      <div className={styles.prev_next_pages__back}>
        <Image alt="arrow" className={iconClassname} src={Arrow} />
        <p className={styles.prev_next_pages__next__text}>
          <Link
            className={previousLinkClassName}
            to={`/${POKEMONLINK}/${prevName}`}
          >
            {realPrevName}
          </Link>
        </p>
      </div>
      <div>
        <h1 className={styles.prev_next_pages__title}>{name && name}</h1>
      </div>
      <div className={styles.prev_next_pages__next}>
        <p className={styles.prev_next_pages__next__text}>
          <Link
            className={nextLinkClassName}
            to={`/${POKEMONLINK}/${nextName}`}
          >
            {realNextName}
          </Link>
        </p>
        <Image
          alt="arrow"
          className={styles.prev_next_pages__arrow}
          src={Arrow}
        />
      </div>
    </div>
  );
};

export default PrevNextPages;
