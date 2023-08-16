import { defineNuxtModule } from "@nuxt/kit";
import { $fetch } from "ofetch";
import path from "path";
import jsonFile from "jsonfile";
import { GearsetInfo } from "../types";
import { getCodeToJobID } from "../utils";

const baseURL = "https://etro.gg/api";

const pickData = (
  data: any,
  type: GearsetInfo["type"] = "bis"
): GearsetInfo[] => {
  if (!Array.isArray(data)) {
    return [];
  }

  return data.map((data) => ({
    id: data.id,
    type,
    name: data.name,
    jobID: getCodeToJobID(data.jobAbbrev) as number,
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

const getBISGearsets = async () => {
  const data = await $fetch(`${baseURL}/gearsets/bis`);
  return pickData(data);
};

const getGearsets = async () => {
  const data = await Promise.allSettled([getBISGearsets()]);
  return data.map((promiseResult) =>
    promiseResult.status === "fulfilled" ? promiseResult.value : []
  )[0];
};

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook("nitro:config", async () => {
      console.log("Fetching Etro gearsets...");

      const filePath = path.join(__dirname, "..", "constants", "gearsets.json");
      const data = await getGearsets();
      jsonFile.writeFile(filePath, data);

      console.log("Fetched Etro gearsets");
    });
  },
});
