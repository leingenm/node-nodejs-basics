import path from "node:path";

export const FS_ERROR_MESSAGE = "FS operation failed";

export const getFilesDirPath = () => path.join(import.meta.dirname, "files")

export const getFilePathInFilesDir = (fileName) => {
  const filesDir = getFilesDirPath()

  return path.join(filesDir, fileName);
};
