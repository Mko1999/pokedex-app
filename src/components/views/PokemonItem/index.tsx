import React from "react";
import styles from "./PokemonItem.module.scss";

const PokemonItem: React.FC = () => {
  return (
    <div className={styles.pokemon_item}>
      <p className={styles.pokemon_item__name}>BulBasur</p>
      <p className={styles.pokemon_item__number}>001</p>
      <p className={styles.pokemon_item__type}>grass</p>
    </div>
  );
};

export default PokemonItem;
