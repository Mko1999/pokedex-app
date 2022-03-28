import React from "react";
import { motion } from "framer-motion";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

import styles from "./Pagination.module.scss";
import { PaginationProps } from "./types";

import { getButtonsArray } from "../../../utils";
import { Button } from "../../../components/shared";

const Pagination: React.FC<PaginationProps> = ({
  limit,
  offset,
  totalCount,
  handleNextPage,
  handlePreviousPage,
  handlePageChange,
}) => {
  const countOfPages = Math.ceil(totalCount / limit);

  const buttonsArray = getButtonsArray(countOfPages, offset);
  console.log(buttonsArray, "ss");

  const paginationList = buttonsArray.map((item) => {
    const buttonClass =
      offset === item
        ? styles.pagination__container__btns__btn_active
        : styles.pagination__container__btns__btn;
    return (
      <Button
        className={buttonClass}
        onClick={handlePageChange}
        dataAttribute={item}
        key={item}
      >
        {item}
      </Button>
    );
  });

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__container}>
        <ul>
          <motion.li
            whileFocus={{ opacity: "0.7" }}
            whileTap={{
              boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
              background:
                "linear-gradient(160deg, #0093E9 0%, #80D0C7 33%, #ffffff 66%, #ffffff 100%)",
            }}
            transition={{ duration: 2 }}
            onClick={handlePreviousPage}
            className={styles.pagination__button__back}
          >
            <Button className={styles.pagination__button__element}>
              <CaretLeftFill size="34" color="#fff" />
            </Button>
          </motion.li>
          {paginationList}
          <motion.li
            whileFocus={{ opacity: "0.7" }}
            whileTap={{
              boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
              background:
                "linear-gradient(160deg, #0093E9 0%, #80D0C7 33%, #ffffff 66%, #ffffff 100%)",
            }}
            transition={{ duration: 2 }}
            onClick={handleNextPage}
            className={styles.pagination__button__next}
          >
            <Button className={styles.pagination__button__element}>
              <CaretRightFill size="34" color="#fff" />
            </Button>
          </motion.li>
        </ul>
      </div>
    </div>
  );
};

export default Pagination;
