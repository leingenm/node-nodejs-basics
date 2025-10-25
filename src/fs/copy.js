import fs from "node:fs/promises";
import path from "node:path";

const copy = async () => {
  // Write your code here
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
      throw new Error("FS operation failed");
    } else if (error.code === "ENOENT") {
      throw new Error("FS operation failed");
    } else {
      throw error;
    }
  }
};

await copy();
