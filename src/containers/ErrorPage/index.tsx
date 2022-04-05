import React from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

import errorPic from "../../assets/error.png";

const ErrorPage: React.FC = () => (
  <div className={styles.error_page}>
    <div className={styles.error_page__container}>
      <img
        alt="Error"
        src={errorPic}
        className={styles.error_page__container__pic}
        draggable="false"
      />
      <div className={styles.error_page__container__info}>
        <h2 className={styles.error_page__container__info__text}>
          OOPS! <span> This page is not found</span>
        </h2>
        <p className={styles.error_page__container__info__back}>
          <Link to="/">Go To Home</Link>
        </p>
      </div>
    </div>
  </div>
);

export default ErrorPage;
