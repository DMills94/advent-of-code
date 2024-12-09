import { importTxtFile } from "../../utils/fileReader";

const exampleInput = importTxtFile("2024/02/example.txt", "\n");
const aocInput = importTxtFile("2024/02/input.txt", "\n");

const isReportSafe = (report: number[]) => {
  const isIncreasing = report[0] < report[1];
  let isSafe = true;
  report.forEach((val, i) => {
    if (isIncreasing) {
      const diff = report[i + 1] - val;
      if (diff < 1 || diff > 3) {
        isSafe = false;
      }
    } else {
      const diff = val - report[i + 1];
      if (diff < 1 || diff > 3) {
        isSafe = false;
      }
    }
    if (!isSafe) return;
  });
  return isSafe;
};

const part1 = (input: string[]) => {
  let safeCount = 0;
  for (let report of input) {
    const values = report.split(" ").map((v) => +v);
    const isSafe = isReportSafe(values);
    if (isSafe) {
      safeCount++;
    }
  }
  console.log({ safeCount });
};

part1(exampleInput);
part1(aocInput);

const part2 = (input: string[]) => {
  let safeCount = 0;
  for (let report of input) {
    let isSafe = true;
    const values = report.split(" ").map((v) => +v);
    isSafe = isReportSafe(values);
    if (isSafe) {
      safeCount++;
      continue;
    }

    for (let i = 0; i < values.length; i++) {
      isSafe = isReportSafe([...values.slice(0, i), ...values.slice(i + 1)]);
      if (isSafe) {
        safeCount++;
        break;
      }
    }
  }
  console.log({ safeCount });
};

part2(exampleInput);
part2(aocInput);
