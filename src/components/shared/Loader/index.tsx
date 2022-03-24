import React from "react";
import styles from "./Loader.module.scss";
import { LoaderProps } from "./types";

const Loader: React.FC<LoaderProps> = ({ loading }) => {
  return (
    <div className={styles.loader}>
      <div className={styles.loader__half}></div>
    </div>
  );
};

export default Loader;
