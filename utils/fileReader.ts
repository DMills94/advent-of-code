import * as fs from "fs";

export function importTxtFileAsArray(pathToFile: string, sep: string) {
  return fs.readFileSync(pathToFile, "utf8").split(sep);
}

export function importTxtFileAsString(pathToFile: string) {
  return fs.readFileSync(pathToFile, "utf8");
}
