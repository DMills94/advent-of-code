import * as fs from "fs";

export function importTxtFile(pathToFile: string, sep: string) {
  return fs.readFileSync(pathToFile, "utf8").split(sep);
}
