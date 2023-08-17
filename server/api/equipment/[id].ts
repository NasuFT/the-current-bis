import equipments from "@/constants/equipments.json";
import { Equipment } from "../../../types";

export default defineEventHandler((event): Equipment | null => {
  const { id } = getRouterParams(event);
  if (Number.isNaN(parseInt(id))) return null;

  const ret = equipments.find((equipment) => equipment.id === parseInt(id));
  if (!ret) return null;
  // @ts-ignore
  return ret;
});
