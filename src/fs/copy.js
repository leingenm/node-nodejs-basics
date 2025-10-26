import fs from "node:fs/promises";
import path from "node:path";
import { FS_ERROR_MESSAGE } from "./fs-helper.js";

const copy = async () => {
  const sourceDirName = "files";
  const destinationDirName = `${sourceDirName}_copy`;

  const currentDirectory = import.meta.dirname;
  const sourceDirPath = path.join(currentDirectory, sourceDirName);
  const destinationDirPath = path.join(currentDirectory, destinationDirName);

  try {
    await fs.cp(sourceDirPath, destinationDirPath, {
      recursive: true,
      force: false,
      errorOnExist: true,
    });
  } catch (error) {
    if (error.code === "ERR_FS_CP_EEXIST") {
      throw new Error(FS_ERROR_MESSAGE);
    } else if (error.code === "ENOENT") {
      throw new Error(FS_ERROR_MESSAGE);
    }
  }
};

await copy();
