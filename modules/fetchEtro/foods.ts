import { $fetch } from "ofetch";
import { Food } from "../../types";

const transformData = (data: any, xivApiUrl: string): Food[] => {
  if (!Array.isArray(data)) return [];

  return data.map((data) => ({
    id: data.id,
    name: data.name,
    iconSrc: `${xivApiUrl}${data.iconPath}`,
    itemLevel: data.itemLevel,
  }));
};

export const getFoods = async (
  etroApiUrl: string,
  bisFoodItemLevel: number,
  xivApiUrl: string
) => {
  const data = await $fetch(`${etroApiUrl}/food`, {
    query: {
      minItemLevel: bisFoodItemLevel,
    },
  });
  return transformData(data, xivApiUrl);
};
