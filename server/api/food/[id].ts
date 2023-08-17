import foods from "@/constants/foods.json";
import { Food } from "../../../types";

export default defineEventHandler((event): Food | null => {
  const { id } = getRouterParams(event);
  if (Number.isNaN(parseInt(id))) return null;

  const ret = foods.find((food) => food.id === parseInt(id));
  if (!ret) return null;
  // @ts-ignore
  return ret;
});
