import path from "node:path";
import fs from "node:fs/promises";

const remove = async () => {
  // Write your code here
  try {
    const filesDirPath = path.join(import.meta.dirname, "files");
    const fileToDeletePath = path.join(filesDirPath, "fileToRemove.txt");
    await fs.unlink(fileToDeletePath)
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
