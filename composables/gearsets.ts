import gearsets from "@/constants/gearsets.json";
import { GearsetInfo, JobID } from "@/types";

export const useGearsets = (jobID: JobID | undefined): GearsetInfo[] => {
  if (jobID === undefined) {
    // @ts-ignore
    return [];
  }

  // @ts-ignore
  return gearsets.filter((gearset) => gearset.jobID === jobID);
};
