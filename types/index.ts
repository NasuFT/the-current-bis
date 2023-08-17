import { JobID } from "./job";

export type EquipmentID = number;
export type MateriaID = number;
export type FoodID = number;
export type GearsetID = string;

export type EquipmentSlot =
  | "weapon"
  | "head"
  | "body"
  | "hands"
  | "legs"
  | "feet"
  | "offhand"
  | "ear"
  | "neck"
  | "wrist"
  | "ring";

export type MateriaStat = "DH" | "CRT" | "SPS" | "SKS" | "DET" | "PTY" | "TNC";

export interface Equipment {
  id: EquipmentID;
  name: string;
  iconSrc: string;
  itemLevel: number;
  slot: EquipmentSlot;
}

export interface Materia {
  id: MateriaID;
  stat: MateriaStat;
  value: number;
}

export interface Food {
  id: FoodID;
  name: string;
  iconSrc: string;
  itemLevel: number;
}

export type GearsetSlot =
  | "weapon"
  | "head"
  | "body"
  | "hands"
  | "legs"
  | "feet"
  | "offhand"
  | "ears"
  | "neck"
  | "wrist"
  | "ringL"
  | "ringR";

export type Gearset = {
  [id in GearsetSlot]: EquipmentID | null;
} & {
  food: FoodID | null;
  weapon: EquipmentID;
};

export type GearsetMateriaFull = {
  [key in GearsetSlot]?: Materia[];
};

export type GearsetMateria = {
  [id in GearsetSlot]?: MateriaID[];
};

export type GearsetFull = {
  [id in GearsetSlot]: Equipment | null;
} & {
  food: Food | null;
  weapon: Equipment;
  materia?: GearsetMateriaFull;
};

export interface GearsetInfo {
  id: string;
  type: "bis" | "prog" | "others";
  jobID: JobID | JobID[];
  name: string;
  gear: Gearset;
  materia?: GearsetMateria;
}

export * from "./job";
