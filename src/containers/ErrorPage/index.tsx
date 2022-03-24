import { Link } from "react-router-dom";
import styles from "./ErrorPage.module.scss";
import errorPic from "../../assets/error.png";
import React from "react";

const ErrorPage: React.FC = () => {
  return (
    <div className={styles.error_page}>
      <img alt="Error" src={errorPic} className={styles.error_page__pic} />
      <div className={styles.error_page__info}>
        <h2>
          OOPS! <span> This page is not found</span>
        </h2>
      </div>
      <Link to="/">Go To</Link>
    </div>
  );
};

export default ErrorPage;
