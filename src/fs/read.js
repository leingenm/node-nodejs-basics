import fs from "node:fs/promises";
import { FS_ERROR_MESSAGE, getFilePathInFilesDir } from "./fs-helper.js";

const read = async () => {
  try {
    const filePath = getFilePathInFilesDir("fileToRead1.txt");
    const content = await fs.readFile(filePath, 'utf-8');
    console.log(content);
  } catch {
    throw new Error(FS_ERROR_MESSAGE);
  }
};

await read();
