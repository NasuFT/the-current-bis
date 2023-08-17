import {
  GearsetInfo,
  GearsetMateria,
  GearsetMateriaFull,
  MateriaID,
} from "types";

const getEquipment = async (id: number | null) => {
  const { data } = await useFetch(`/api/equipment/${id}`);
  return data.value;
};

const getFood = async (id: number | null) => {
  const { data } = await useFetch(`/api/food/${id}`);
  return data.value;
};

const getMaterias = async (ids?: MateriaID[]) => {
  if (!Array.isArray(ids)) return [];
  const promises = Promise.all(ids.map((id) => useFetch(`/api/materia/${id}`)));
  const data = (await promises).map((data) => data.data.value!);
  return data;
};

export const fetchMateria = async (
  materia?: GearsetMateria
): Promise<GearsetMateriaFull> => {
  if (!materia) {
    return {};
  }

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
  ] = await Promise.all([
    getMaterias(materia.weapon),
    getMaterias(materia.head),
    getMaterias(materia.body),
    getMaterias(materia.hands),
    getMaterias(materia.legs),
    getMaterias(materia.feet),
    getMaterias(materia.offhand),
    getMaterias(materia.ears),
    getMaterias(materia.neck),
    getMaterias(materia.wrist),
    getMaterias(materia.ringL),
    getMaterias(materia.ringR),
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
  };
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
    materia,
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
    fetchMateria(gearset.materia),
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
    materia,
  };
};
