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

export default defineEventHandler((): Job[] => {
  return jobsData.map((job) => {
    const value = job.title.toLowerCase().replace(/\s+/g, "");

    return {
      id: job.id,
      title: job.title,
      value,
      role: {
        title: getRoleLabel(job.role),
        value: job.role,
      },
      code: job.code,
      iconImgSrc: `/img/icons/jobs/${value}.png`,
    };
  });
});
