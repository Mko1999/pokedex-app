export const getID = (id: number): string => {
  return `00${id}`.slice(-3);
};

export const getBeautifulID = (a: number): string | number => {
  if (a < 100 && a >= 10) {
    return `0${a}`;
  } else if (a < 10) {
    return `00${a}`;
  } else {
    return a;
  }
};
