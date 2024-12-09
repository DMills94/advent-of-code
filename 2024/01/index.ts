import { importTxtFile } from "../../utils/fileReader";

const exampleInput = importTxtFile("2024/01/example1.txt", "\n");
const aocInput = importTxtFile("2024/01/input.txt", "\n");

const sortLists = (input: string[]) => {
  const list1 = [];
  const list2 = [];
  for (let pair of input) {
    const [a, b] = pair.split("   ");
    list1.push(a);
    list2.push(b);
  }
  return [list1, list2];
};

const part1 = (input: string[]) => {
  const [list1, list2] = sortLists(input);
  list1.sort();
  list2.sort();
  const answer = list1.reduce((acc, cur, i) => {
    const diff = Math.abs(+list1[i] - +list2[i]);
    return acc + diff;
  }, 0);
  console.log({ answer });
};

part1(exampleInput);
part1(aocInput);

const part2 = (input: string[]) => {
  const [list1, list2] = sortLists(input);
  let similarity = 0;
  const occurances = {};
  for (let digit of list1) {
    if (occurances[digit]) {
      similarity += occurances[digit];
    } else {
      const matches = list2.filter((val) => val === digit).length;
      const score = matches * digit;
      similarity += score;
      occurances[digit] = score;
    }
  }
  console.log({ similarity });
};
part2(exampleInput);
part2(aocInput);
