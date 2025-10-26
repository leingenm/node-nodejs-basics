import path from "node:path";
import fs from "node:fs/promises";

const rename = async () => {
  const filesDirPath = path.join(import.meta.dirname, "files");
  const wrongFilenamePath = path.join(filesDirPath, "wrongFilename.txt");
  const properFilenamePath = path.join(filesDirPath, "properFilename.md");

  // If the file dest file (`properFilename.md`) exists throw an error
  try {
    await fs.access(properFilenamePath);
    throw new Error("FS operation failed");
  } catch (e) {
    if (e.message === "FS operation failed") {
      throw e;
    }
  }

  // Will throw an error if the source file (`wrongFilename.txt`) does not exist
  try {
    await fs.rename(wrongFilenamePath, properFilenamePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
