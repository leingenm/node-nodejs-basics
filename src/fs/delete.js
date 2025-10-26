import fs from "node:fs/promises";
import { FS_ERROR_MESSAGE, getFilePathInFilesDir } from "./fs-helper.js";

const remove = async () => {
  try {
    const fileToDeletePath = getFilePathInFilesDir("fileToRemove.txt");
    await fs.unlink(fileToDeletePath);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await remove();
