import path from "node:path";
import fs from "node:fs/promises";

const list = async () => {
  // Write your code here
  const filesDirPath = path.join(import.meta.dirname, "files");

  try {
    const dirContent = await fs.readdir(filesDirPath, {
      recursive: true,
    });
    console.log(dirContent);
  } catch {
    throw new Error("FS operation failed");
  }
};

await list();
