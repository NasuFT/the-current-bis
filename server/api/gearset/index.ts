import gearsetsData from "@/constants/gearsets.json";
import { GearsetInfo } from "../../../types";

export default defineEventHandler(async (event): Promise<GearsetInfo[]> => {
  const { jobID } = getQuery(event) as { jobID: string };

  if (!Number.isNaN(parseInt(jobID))) {
    // @ts-ignore
    return gearsetsData.filter((gearset) => gearset.jobID === parseInt(jobID));
  }

  // @ts-ignore
  return gearsetsData;
});
