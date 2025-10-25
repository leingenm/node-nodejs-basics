import path from "node:path";
import fs from "node:fs/promises";

const create = async () => {
  // Write your code here
  const fileName = "fresh.txt";
  const content = "I am fresh and young";
  const currentDirectory = import.meta.dirname;
  const filesDirPath = path.join(currentDirectory, "files");
  const filePath = path.join(filesDirPath, fileName);

  try {
    await fs.writeFile(filePath, content, { flag: "wx+" });
  } catch (error) {
    if (error.code === "EEXIST") {
      throw new Error("FS operation failed");
    }

    throw error;
  }
};

await create();
