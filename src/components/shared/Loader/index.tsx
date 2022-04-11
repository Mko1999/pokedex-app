import React from "react";

import styles from "./Loader.module.scss";
import { LoaderProps } from "./types";

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={styles.lds_roller}>
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default Loader;
