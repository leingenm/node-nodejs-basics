import path from "node:path";
import fs from "node:fs/promises";
import { FS_ERROR_MESSAGE, getFilesDirPath } from "./fs-helper.js";

const rename = async () => {
  const filesDirPath = getFilesDirPath();
  const wrongFilenamePath = path.join(filesDirPath, "wrongFilename.txt");
  const properFilenamePath = path.join(filesDirPath, "properFilename.md");

  // If the destination file (`properFilename.md`) exists throw an error
  try {
    await fs.access(properFilenamePath);
    throw new Error(FS_ERROR_MESSAGE);
  } catch (e) {
    if (e.message === FS_ERROR_MESSAGE) {
      throw e;
    }
  }

  // Will throw an error if the source file (`wrongFilename.txt`) does not exist
  try {
    await fs.rename(wrongFilenamePath, properFilenamePath);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await rename();
