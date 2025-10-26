import { pipeline } from "node:stream/promises";
import { createWriteStream } from "node:fs";
import path from "node:path";

const write = async () => {
  const filePath = path.join(import.meta.dirname, "files", "fileToWrite.txt");
  const writeStream = createWriteStream(filePath, { encoding: "utf-8" });
  await pipeline(process.stdin, writeStream);
};

await write();
