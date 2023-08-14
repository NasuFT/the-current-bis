import { Job } from "types";
import jobsData from "../constants/jobs.json";

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

export const useJobs = () => {
  const data: Job[] = jobsData.map((job) => {
    const value = job.title.toLowerCase().replace(/\s+/g, "");

    return {
      value,
      title: job.title,
      iconImgSrc: `/img/icons/jobs/${value}.png`,
      code: job.code,
      role: {
        title: getRoleLabel(job.role),
        value: job.role,
      },
    };
  });

  return { data };
};
