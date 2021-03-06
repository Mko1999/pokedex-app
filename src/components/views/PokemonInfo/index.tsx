import React from "react";
import classNames from "classnames";

import styles from "./PokemonInfo.module.scss";
import { PokemonInfoProps } from "./types";

import redArrow from "../../../assets/redArrow.png";
import { meterToFeet, kgToPound, getID } from "../../../utils";
import { Image } from "../../shared";

const PokemonInfo: React.FC<PokemonInfoProps> = ({
  types,
  flavorText,
  id,
  height,
  weight,
  isDefault,
  baseXP,
  order,
}) => {
  const idString = getID(id);
  const imageSrc = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${idString}.png`;

  const typeRenderer = types.map(({ slot, type }) => {
    return (
      <React.Fragment key={slot}>
        <p
          className={classNames(
            styles.pokemon_info__mainInfo__advanced__parent__text,
            styles.pokemon_info__mainInfo__advanced__parent__text__type
          )}
        >
          {type.name}
        </p>
      </React.Fragment>
    );
  });

  return (
    <div className={styles.pokemon_info}>
      <div className={styles.pokemon_info__image}>
        <div className={styles.pokemon_info__image__container}>
          <Image
            loading="lazy"
            draggable={false}
            src={imageSrc}
            alt="pokemon pic"
          />
        </div>
      </div>
      <div className={styles.pokemon_info__mainInfo}>
        <p className={styles.pokemon_info__mainInfo__sample}>{flavorText}</p>
        <div className={styles.pokemon_info__mainInfo__container}>
          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Height
            </p>
            <Image
              alt="Arrow"
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
            />
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__text}
            >
              {height / 10} m ({meterToFeet(height / 10)}
              ft)
            </p>
          </div>

          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Weight
            </p>
            <Image
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
              alt="Arrow"
            />
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__text}
            >
              {weight / 10}kg ({kgToPound(weight / 10)}pound)
            </p>
          </div>

          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Base experience
            </p>
            <Image
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
              alt="Arrow"
            />
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__text}
            >
              {baseXP}
            </p>
          </div>

          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Is default
            </p>
            <Image
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
              alt="Arrow"
            />
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__text}
            >
              {`${isDefault}`}
            </p>
          </div>

          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Types
            </p>
            <Image
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
              alt="Arrow"
            />
            <div
              className={styles.pokemon_info__mainInfo__advanced__type__parent}
            >
              {typeRenderer}
            </div>
          </div>

          <div className={styles.pokemon_info__mainInfo__advanced__parent}>
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__title}
            >
              Order
            </p>
            <Image
              className={styles.pokemon_info__mainInfo__advanced__image}
              src={redArrow}
              draggable={false}
              alt="Arrow"
            />
            <p
              className={styles.pokemon_info__mainInfo__advanced__parent__text}
            >
              {order}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
