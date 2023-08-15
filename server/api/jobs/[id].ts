import jobsData from "@/constants/jobs.json";
import { Job } from "@/types";

const getRoleLabel = (value: string) => {
  switch (value) {
    case "tank":
      return "Tank";
    case "healer":
      return "Healer";
    case "melee":
      return "Melee DPS";
    case "ranged":
      return "Physical Ranged DPS";
    case "caster":
      return "Magical Ranged DPS";
    default:
      return "";
  }
};

export default defineEventHandler((event): Job => {
  const id = parseInt(getRouterParam(event, "id") as string);
  if (Number.isNaN(id)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a number ID",
    });
  }

  const baseJob = jobsData.find((job) => job.id === id);

  if (!baseJob) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a valid Job ID",
    });
  }

  const value = baseJob.title.toLowerCase().replace(/\s+/g, "");

  return {
    id: baseJob.id,
    title: baseJob.title,
    value,
    role: {
      title: getRoleLabel(baseJob.role),
      value: baseJob.role,
    },
    code: baseJob.code,
    iconImgSrc: `/img/icons/jobs/${value}.png`,
  };
});
