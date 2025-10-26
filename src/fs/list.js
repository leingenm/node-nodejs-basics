import fs from "node:fs/promises";
import { FS_ERROR_MESSAGE, getFilesDirPath } from "./fs-helper.js";

const list = async () => {
  const filesDirPath = getFilesDirPath();

  try {
    const dirContent = await fs.readdir(filesDirPath, {
      recursive: true,
    });
    console.log(dirContent);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await list();
