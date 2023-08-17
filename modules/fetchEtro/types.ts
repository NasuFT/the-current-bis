import { Equipment, Food, GearsetInfo, Materia } from "../../types";

export interface DataParams {
  etroApiUrl: string;
  bisEquipmentItemLevel: number;
  bisFoodItemLevel: number;
  xivApiUrl: string
}

export interface Data {
  gearsets: GearsetInfo[];
  materias: Materia[];
  equipments: Equipment[];
  foods: Food[];
}
