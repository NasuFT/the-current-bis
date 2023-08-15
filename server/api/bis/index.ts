import { GearsetInfo } from "@/types";
import { getCodeToJobID } from "@/utils";

const baseURL = "https://etro.gg/api";

export default defineEventHandler(async (): Promise<GearsetInfo[]> => {
  const data = await $fetch(`${baseURL}/gearsets/bis`);

  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((data) => ({
    id: data.id,
    type: "bis",
    name: data.name,
    jobID: getCodeToJobID(data.jobAbbrev) as number,
    gear: {
      weapon: data.weapon,
      head: data.head,
      body: data.body,
      hands: data.hands,
      legs: data.legs,
      feet: data.feet,
      offHand: data.offHand,
      ears: data.ears,
      neck: data.neck,
      wrist: data.wrists,
      ringL: data.fingerL,
      ringR: data.fingerR,
      food: data.food,
    },
  }));
});
