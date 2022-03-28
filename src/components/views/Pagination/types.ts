export type PaginationProps = {
  limit: number;
  offset: number;
  totalCount: number;
  handleNextPage?: any;
  handlePreviousPage?: any;
  handlePageChange?: any;
};
