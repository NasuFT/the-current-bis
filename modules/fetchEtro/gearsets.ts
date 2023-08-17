import { $fetch } from "ofetch";
import { getCodeToJobID } from "../../utils";
import { GearsetInfo, MateriaID } from "../../types";

const transformMateriaData = (data: any): MateriaID[] | undefined => {
  if (data === undefined) return undefined;

  let count = 0;
  const ret: MateriaID[] = [];

  while (data[`${++count}`] !== undefined) {
    ret.push(data[`${count}`]);
  }

  return ret;
};

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
    materia: {
      weapon: transformMateriaData(data.materia[data.weapon]),
      head: transformMateriaData(data.materia[data.head]),
      body: transformMateriaData(data.materia[data.body]),
      hands: transformMateriaData(data.materia[data.hands]),
      legs: transformMateriaData(data.materia[data.legs]),
      feet: transformMateriaData(data.materia[data.feet]),
      offhand: transformMateriaData(data.materia[data.offHand]),
      ears: transformMateriaData(data.materia[data.ears]),
      neck: transformMateriaData(data.materia[data.neck]),
      wrist: transformMateriaData(data.materia[data.wrists]),
      ringL: transformMateriaData(data.materia[`${data.fingerL}L`]),
      ringR: transformMateriaData(data.materia[`${data.fingerR}R`]),
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
