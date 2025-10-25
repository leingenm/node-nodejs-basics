import path from "node:path";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  // Write your code here
  const fileName = "fresh.txt";
  const content = "I am fresh and young";
  const filesDirPath = path.join(__dirname, "files");
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
