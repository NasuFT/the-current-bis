import gearsets from "@/constants/gearsets.json";
import { GearsetInfo } from "@/types";

export default defineEventHandler((event): GearsetInfo | null => {
  const { id } = getRouterParams(event);
  const ret = gearsets.find((gearset) => gearset.id === id);
  if (ret === undefined) {
    return null;
  }
  // @ts-ignore
  return ret;
});
