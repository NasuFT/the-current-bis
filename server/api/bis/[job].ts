import { GearsetInfo } from "@/types";

export default defineEventHandler(async (event): Promise<GearsetInfo[]> => {
  const jobIDParam = getRouterParam(event, "job") as string;
  const jobID = parseInt(jobIDParam);

  if (Number.isNaN(jobID)) {
    throw createError({
      statusCode: 400,
      statusMessage: "Please enter a valid job ID.",
    });
  }

  const data = await $fetch("/api/bis");

  if (!Array.isArray(data)) return [];

  return data.filter((job) => job.jobID === jobID);
});
