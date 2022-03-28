export const getButtonsArray = (buttonCount: number, currentPage: number) => {
  let start: number, end: number;

  switch (currentPage) {
    case 1: {
      start = currentPage;
      end = buttonCount < 4 ? buttonCount : 3;
      break;
    }

    case 2: {
      start = currentPage - 1;
      end = buttonCount < 5 ? buttonCount : 4;
      break;
    }

    case buttonCount: {
      start = currentPage - 2;
      end = currentPage;
      break;
    }

    default: {
      start = currentPage - 2;
      end = buttonCount < currentPage + 2 ? currentPage + 1 : currentPage + 2;
    }
  }

  const arrayLength = end - start + 1;
  return Array(arrayLength)
    .fill(undefined)
    .map((_, index) => start + index);
};
