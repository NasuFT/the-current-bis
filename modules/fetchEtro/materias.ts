import { $fetch } from "ofetch";
import { Materia, MateriaStat } from "../../types";

const transformMateriaParam = (param: any): MateriaStat | null => {
  switch (param) {
    case "Critical Hit":
      return "CRT";
    case "Piety":
      return "PTY";
    case "Skill Speed":
      return "SKS";
    case "Tenacity":
      return "TNC";
    case "Direct Hit Rate":
      return "DH";
    case "Spell Speed":
      return "SPS";
    case "Determination":
      return "DET";
    default:
      return null;
  }
};

const transformData = (data: any): Materia[] => {
  if (!Array.isArray(data)) return [];

  return data
    .filter((data) => transformMateriaParam(data.paramName) !== null)
    .flatMap((data) => {
      let count = 0;
      const ret: Materia[] = [];

      while (data[`tier${++count}`] !== undefined) {
        const info = data[`tier${count}`];
        const value = data[`tier${count}Value`];

        ret.push({
          id: info.id,
          stat: transformMateriaParam(data.paramName)!,
          value,
        });
      }

      return ret;
    });
};

export const getMaterias = async (etroApiUrl: string) => {
  const data = await $fetch(`${etroApiUrl}/materia`);
  return transformData(data);
};
