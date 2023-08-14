export interface Role {
  title: string;
  value: string;
  toString: () => string;
}

export interface Job {
  title: string;
  value: string;
  iconImgSrc: string;
  code: string;
  toString: () => string;
  role: Role;
}

export interface Gear {
  id: string;
}

export interface Food {}

export interface Gearset {
  weapon: Gear;
  head: Gear | null;
  body: Gear | null;
  hands: Gear | null;
  legs: Gear | null;
  feet: Gear | null;
  offHand: Gear | null;
  ears: Gear | null;
  neck: Gear | null;
  wrist: Gear | null;
  ringL: Gear | null;
  ringR: Gear | null;
  food: Food | null;
}

export interface GearsetInfo {
  id: string;
  type: "bis" | "prog" | "others";
  job: Job["value"] | Job["value"][];
  name: string;
  gear: Gearset;
}
