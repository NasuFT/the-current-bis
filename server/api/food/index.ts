import foods from "@/constants/foods.json";
import { Food } from "@/types";

export default defineEventHandler((): Food[] => {
  return foods;
});
