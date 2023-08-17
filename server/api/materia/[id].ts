import materia from "@/constants/materias.json";
import { Materia } from "../../../types";

export default defineEventHandler((event): Materia | null => {
  const { id } = getRouterParams(event);
  if (Number.isNaN(parseInt(id))) return null;

  const ret = materia.find((materia) => materia.id === parseInt(id));
  if (!ret) return null;
  //@ts-ignore
  return ret;
});
