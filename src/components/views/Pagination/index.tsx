import React from "react";
import classnames from "classnames";
import { nanoid } from "nanoid";

import { useDispatch, useSelector } from "react-redux";
import { CaretLeftFill, CaretRightFill } from "react-bootstrap-icons";

import styles from "./Pagination.module.scss";
import { PaginationProps } from "./types";

import { usePagination, DOTS } from "../../../hooks";
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

  const onPageChange = (e: React.MouseEvent): void => {
    if (!(e.target instanceof HTMLLIElement)) {
      return;
    }
    const pageNumber = Number(e.target.dataset.page);
    dispatch(setOffset(pageNumber));
  };

  return (
    <div className={styles.pagination}>
      {paginationRange && paginationRange.length < 2 ? null : (
        <div className={styles.pagination__container}>
          <ul>
            <li
              className={styles.pagination__button__back}
              onClick={onPrevious}
            >
              <Button className={styles.pagination__button__element}>
                <CaretLeftFill size="34" color="#fff" />
              </Button>
            </li>
            {paginationRange &&
              paginationRange.map(
                (pageNumber: number | string, index: number) => {
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
                      key={index}
                      className={buttonClassname}
                      onClick={onPageChange}
                      data-page={pageNumber}
                    >
                      {pageNumber}
                    </li>
                  );
                }
              )}

            <li className={styles.pagination__button__back} onClick={onNext}>
              <Button className={styles.pagination__button__element}>
                <CaretRightFill width="34" height="34" color="#fff" />
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pagination;
