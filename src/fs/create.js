import fs from "node:fs/promises";
import { FS_ERROR_MESSAGE, getFilePathInFilesDir } from "./fs-helper.js";

const create = async () => {
  const fileName = "fresh.txt";
  const content = "I am fresh and young";
  const filePath = getFilePathInFilesDir(fileName);

  try {
    await fs.writeFile(filePath, content, { flag: "wx+" });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error(FS_ERROR_MESSAGE);
    }

    throw error;
  }
};

await create();
