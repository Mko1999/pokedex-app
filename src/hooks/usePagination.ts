import { getPaginationRange } from "./../utils/getRange";
import { IPagination } from "../types/pokemon";

export const DOTS = "...";

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: IPagination): (string | number)[] | undefined => {
  const totalPageCount = Math.ceil(totalCount / pageSize);

  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return getPaginationRange(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPageCount
  );

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (!shouldShowLeftDots && shouldShowRightDots) {
    const leftItemCount = 3 + 2 * siblingCount;
    const leftRange = getPaginationRange(1, leftItemCount);

    return [...leftRange, DOTS, totalPageCount];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    const rightItemCount = 3 + 2 * siblingCount;
    const rightRange = getPaginationRange(
      totalPageCount - rightItemCount + 1,
      totalPageCount
    );

    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    const middleRange = getPaginationRange(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }
};
