import React from "react";
import classnames from "classnames";
import { nanoid } from "nanoid";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

import styles from "./Pagination.module.scss";
import { usePagination, DOTS } from "../../../hooks";

import { PaginationProps } from "./types";

import { Button } from "../../shared";
import { setOffset } from "../../../store/actions";
import { offsetSelector } from "../../../store/selectors";

const Pagination: React.FC<PaginationProps> = ({
  totalCount,
  siblingCount,
  pageSize,
}) => {
  const offset = useSelector(offsetSelector);

  const paginationRange = usePagination({
    currentPage: offset,
    totalCount,
    siblingCount,
    pageSize,
  });
  const lastPage =
    paginationRange && paginationRange[paginationRange.length - 1];
  const dispatch = useDispatch();

  // If there are less than 2 times in pagination range we shall not render the component
  if (paginationRange && paginationRange.length < 2) {
    return null;
  }

  const onPrevious = (): void => {
    if (offset !== 1) {
      dispatch(setOffset(offset - 1));
    }
  };

  const onNext = (): void => {
    if (offset !== lastPage) {
      dispatch(setOffset(offset + 1));
    }
  };

  const onPageChange = (e: any): void => {
    const pageNumber = +e.target.dataset.page;
    dispatch(setOffset(pageNumber));
  };

  return (
    <div className={styles.pagination}>
      <div className={styles.pagination__container}>
        <ul>
          <motion.li
            whileFocus={{ opacity: "0.7" }}
            transition={{ duration: 2 }}
            className={styles.pagination__button__back}
            onClick={onPrevious}
          >
            <Button className={styles.pagination__button__element}>
              <CaretLeftFill size="34" color="#fff" />
            </Button>
          </motion.li>
          {paginationRange &&
            paginationRange.map((pageNumber: any) => {
              if (pageNumber === DOTS) {
                return (
                  <li
                    key={nanoid()}
                    className={styles.pagination__button__dots}
                  >
                    {DOTS}
                  </li>
                );
              }
              const buttonClassname = classnames(
                styles.pagination__container__btns__btn,
                {
                  [styles.pagination__container__btns__btn_active]:
                    offset === pageNumber,
                }
              );
              // Render our Page Pills
              return (
                <li
                  key={nanoid()}
                  className={buttonClassname}
                  onClick={onPageChange}
                  data-page={pageNumber}
                >
                  {pageNumber}
                </li>
              );
            })}

          <motion.li
            whileFocus={{ opacity: "0.7" }}
            transition={{ duration: 2 }}
            className={styles.pagination__button__back}
            onClick={onNext}
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
