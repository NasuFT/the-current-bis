import { JobID } from "./job";

export type EquipmentID = number;
export type MateriaID = number;
export type FoodID = number;
export type GearsetID = string;

export interface Equipment {
  id: EquipmentID;
}

export interface Food {
  id: FoodID;
}

export interface Gearset {
  weapon: EquipmentID;
  head: EquipmentID | null;
  body: EquipmentID | null;
  hands: EquipmentID | null;
  legs: EquipmentID | null;
  feet: EquipmentID | null;
  offHand: EquipmentID | null;
  ears: EquipmentID | null;
  neck: EquipmentID | null;
  wrist: EquipmentID | null;
  ringL: EquipmentID | null;
  ringR: EquipmentID | null;
  food: FoodID | null;
}

export interface GearsetInfo {
  id: string;
  type: "bis" | "prog" | "others";
  jobID: JobID | JobID[];
  name: string;
  gear: Gearset;
}

export * from "./job";
