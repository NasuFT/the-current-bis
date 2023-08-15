export interface Role {
  title: string;
  value: string;
  toString: () => string;
}

export type JobID = number;

export interface Job {
  id: JobID;
  title: string;
  value: string;
  iconImgSrc: string;
  code: string;
  toString: () => string;
  role: Role;
}
