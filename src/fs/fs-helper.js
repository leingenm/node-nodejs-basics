import path from "node:path";

export const FS_ERROR_MESSAGE = "FS operation failed";

export const getFilePathInFilesDir = (fileName) => {
  const filesDir = path.join(import.meta.dirname, "files");

  return path.join(filesDir, fileName);
};
