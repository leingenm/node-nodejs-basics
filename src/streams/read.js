import { pipeline } from "node:stream/promises";
import { createReadStream } from "node:fs";
import path from "node:path";

const read = async () => {
  try {
    const filePath = path.join(import.meta.dirname, "files", "fileToRead.txt");
    const readStream = createReadStream(filePath, { encoding: "utf-8" });
    await pipeline(readStream, process.stdout);
  } catch (error) {
    console.log(error);
  }
};

await read();
