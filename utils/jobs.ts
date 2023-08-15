import data from "../constants/jobs.json";

const jobs: [string, string, number][] = [];
data.forEach((job) =>
  jobs.push([job.code, job.title.toLowerCase().replace(/\s+/g, ""), job.id])
);

export const getCodeToJob = (code: string) => {
  return jobs.find((val) => val[0] === code)?.[1] ?? "";
};

export const getJobToCode = (job: string) => {
  return jobs.find((val) => val[1] === job)?.[0] ?? "";
};

export const getCodeToJobID = (code: string) => {
  return jobs.find((val) => val[0] === code)?.[2] ?? null;
};
