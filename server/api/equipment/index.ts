import equipments from "@/constants/equipments.json";
import { Equipment } from "../../../types";

export default defineEventHandler((): Equipment[] => {
  // @ts-ignore
  return equipments;
});
