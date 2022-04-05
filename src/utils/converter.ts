export const meterToFeet = (num: number): number | string => {
  const realFeet = (num * 39.37) / 12;
  const feet = Math.floor(realFeet);
  const inches = Math.round((realFeet - feet) * 12);

  return feet + "'" + inches + "''";
};

export const kgToPound = (num: number): number => {
  return Math.round((num / 2.205) * 10) / 10;
};
