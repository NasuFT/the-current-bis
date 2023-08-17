import materia from "@/constants/materias.json";
import { Materia } from "../../../types";

export default defineEventHandler((): Materia[] => {
  //@ts-ignore
  return materia;
});
