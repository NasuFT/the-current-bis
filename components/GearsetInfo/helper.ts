import { Gearset, GearsetInfo } from "types";

const getEquipment = async (id: number | null) => {
  const { data } = await useFetch(`/api/equipment/${id}`);
  return data.value;
};

const getFood = async (id: number | null) => {
  const { data } = await useFetch(`/api/food/${id}`);
  return data.value;
};

export const fetchData = async (gearset: GearsetInfo) => {
  const [
    weapon,
    head,
    body,
    hands,
    legs,
    feet,
    offhand,
    ears,
    neck,
    wrist,
    ringL,
    ringR,
    food,
  ] = await Promise.all([
    getEquipment(gearset.gear.weapon),
    getEquipment(gearset.gear.head),
    getEquipment(gearset.gear.body),
    getEquipment(gearset.gear.hands),
    getEquipment(gearset.gear.legs),
    getEquipment(gearset.gear.feet),
    getEquipment(gearset.gear.offhand),
    getEquipment(gearset.gear.ears),
    getEquipment(gearset.gear.neck),
    getEquipment(gearset.gear.wrist),
    getEquipment(gearset.gear.ringL),
    getEquipment(gearset.gear.ringR),
    getFood(gearset.gear.food),
  ]);

  return {
    weapon,
    head,
    body,
    hands,
    legs,
    feet,
    offhand,
    ears,
    neck,
    wrist,
    ringL,
    ringR,
    food,
  };
};
