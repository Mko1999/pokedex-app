import React from "react";
import { Link } from "react-router-dom";

import styles from "./ErrorPage.module.scss";

import errorPic from "../../assets/error.png";
import { Image } from "../../components/shared";

const ErrorPage: React.FC = () => (
  <div className={styles.error_page}>
    <div className={styles.error_page__container}>
      <Image
        alt="Error"
        src={errorPic}
        className={styles.error_page__container__pic}
        draggable={false}
      />
      <div className={styles.error_page__container__info}>
        <h2 className={styles.error_page__container__info__text}>
          OOPS! <span> This page is not found</span>
        </h2>

        <Link to="/">
          <p className={styles.error_page__container__info__back}>Go To Home</p>
        </Link>
      </div>
    </div>
  </div>
);

export default ErrorPage;
