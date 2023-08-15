export const uniqueFilter = <T extends Object>(
  value: T,
  index: number,
  array: T[]
) => {
  return array.indexOf(value) == index;
};

export * from "./jobs";
