import { $fetch } from "ofetch";
import { getCodeToJobID } from "../../utils";
import { GearsetInfo } from "../../types";

const transformData = (
  data: any,
  type: GearsetInfo["type"] = "bis"
): GearsetInfo[] => {
  if (!Array.isArray(data)) return [];

  return data.map((data) => ({
    id: data.id,
    type,
    name: data.name,
    jobID: getCodeToJobID(data.jobAbbrev)!,
    gear: {
      weapon: data.weapon,
      head: data.head,
      body: data.body,
      hands: data.hands,
      legs: data.legs,
      feet: data.feet,
      offhand: data.offHand,
      ears: data.ears,
      neck: data.neck,
      wrist: data.wrists,
      ringL: data.fingerL,
      ringR: data.fingerR,
      food: data.food,
    },
  }));
};

const getBISGearsets = async (etroApiUrl: string) => {
  const data = await $fetch(`${etroApiUrl}/gearsets/bis`);
  return transformData(data);
};

export const getGearsets = async (etroApiUrl: string) => {
  const bisGearsets = await getBISGearsets(etroApiUrl);
  return bisGearsets;
};
