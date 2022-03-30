export const getRange = (start: number, end: number): number[] => {
  const length = end - start + 1;

  return Array.from({ length }, (_, index) => index + start);
};

console.log(getRange(3, 6), "44");
