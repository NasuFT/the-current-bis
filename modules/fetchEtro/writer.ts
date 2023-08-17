import path from "path";
import jsonFile from "jsonfile";

export const writeDataToFile = async (data: any, fileName: string) => {
  const filePath = path.join(
    __dirname,
    "..",
    "..",
    "constants",
    `${fileName}.json`
  );

  return jsonFile.writeFile(filePath, data);
};
