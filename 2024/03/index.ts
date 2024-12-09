import { importTxtFileAsString } from "../../utils/fileReader";

const exampleP1Input = importTxtFileAsString("2024/03/examplep1.txt");
const exampleP2Input = importTxtFileAsString("2024/03/examplep2.txt");
const aocInput = importTxtFileAsString("2024/03/input.txt");

const part1 = (input: string) => {
  let answer = 0;
  const matches = input.match(/mul\(\d+,\d+\)/g);
  for (let match of matches) {
    const [a, b] = match.match(/\d+/g);
    answer += +a * +b;
  }
  console.log({ answer });
};

part1(exampleP1Input);
part1(aocInput);

const part2 = (input: string) => {
  let enabled = true;
  let answer = 0;
  const matches = input.match(/mul\(\d+,\d+\)|do\(\)|don't\(\)/g);
  for (let match of matches) {
    if (match === "do()") {
      enabled = true;
    } else if (match === "don't()") {
      enabled = false;
    } else if (enabled) {
      const [a, b] = match.match(/\d+/g);
      answer += +a * +b;
    }
  }
  console.log({ answer });
};

part2(exampleP2Input);
part2(aocInput);
