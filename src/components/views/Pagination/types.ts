// export type PaginationProps = {
//   limit: number;
//   offset: number;
//   totalCount: number;
//   handleNextPage?: any;
//   handlePreviousPage?: any;
//   handlePageChange?: any;
// };

export type PaginationProps = {
  totalCount: number;
  siblingCount: number;
  pageSize: number;
};
