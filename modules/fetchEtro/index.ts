import { defineNuxtModule, useLogger } from "@nuxt/kit";
import { getGearsets } from "./gearsets";
import { getEquipments } from "./equipments";
import { getFoods } from "./foods";
import { getMaterias } from "./materias";
import { Data, DataParams } from "./types";
import { writeDataToFile } from "./writer";

const getData = async ({
  etroApiUrl,
  bisEquipmentItemLevel,
  bisFoodItemLevel,
  xivApiUrl,
}: DataParams): Promise<Data> => {
  const [gearsets, equipments, foods, materias] = await Promise.all([
    getGearsets(etroApiUrl),
    getEquipments(etroApiUrl, bisEquipmentItemLevel, xivApiUrl),
    getFoods(etroApiUrl, bisFoodItemLevel, xivApiUrl),
    getMaterias(etroApiUrl),
  ]);

  return { materias, equipments, foods, gearsets };
};

const writeDataTofiles = async (data: Data) => {
  const promises = [];
  for (const key in data) {
    // @ts-ignore
    promises.push(writeDataToFile(data[key], key));
  }

  return Promise.all(promises);
};

interface ModuleOptions extends DataParams {
  patch: string;
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@nasuft/fetch-etro",
    configKey: "ffxiv-game",
    compatibility: {
      nuxt: "^3.0.0",
      bridge: true,
    },
  },
  defaults: {
    patch: "6.45",
    bisEquipmentItemLevel: 650,
    bisFoodItemLevel: 640,
    etroApiUrl: "https://etro.gg/api",
    xivApiUrl: "https://xivapi.com",
  },
  setup(options, nuxt) {
    nuxt.hook("nitro:config", async () => {
      const logger = useLogger();
      logger.info("Etro: Fetching data...");

      const data = await getData({
        etroApiUrl: options.etroApiUrl,
        bisEquipmentItemLevel: options.bisEquipmentItemLevel,
        bisFoodItemLevel: options.bisFoodItemLevel,
        xivApiUrl: options.xivApiUrl,
      });

      logger.info("Etro: Writing data to .json files...");

      await writeDataTofiles(data);

      logger.info("Etro: Done");
    });
  },
});
