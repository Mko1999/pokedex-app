import React from "react";

import styles from "./PokemonLoader.module.scss";

const PokemonLoader: React.FC = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__item}></div>
      <div className={styles.spinner__item}></div>
      <div className={styles.spinner__item}></div>
    </div>
  );
};

export default PokemonLoader;
