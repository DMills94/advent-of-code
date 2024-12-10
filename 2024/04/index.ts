import { importTxtFileAsArray } from "../../utils/fileReader";
import { ALL_DIRECTIONS, DIAGONAL_PAIRS } from "../../utils/coords";

const exampleInput = importTxtFileAsArray("2024/04/example.txt", "\n");
const aocInput = importTxtFileAsArray("2024/04/input.txt", "\n");

const mas = ["M", "A", "S"];

const checkCoordinate = ({
  direction,
  input,
  letterToCheckIndex,
  sequence,
  startCoords,
}: {
  input: string[];
  startCoords: [number, number];
  letterToCheckIndex: number;
  direction: number[];
  sequence: string[];
}) => {
  const [x, y] = startCoords;
  const [xDir, yDir] = direction;
  let foundXmas = false;
  const letterToFind = sequence[letterToCheckIndex];
  if (
    input[x + xDir] &&
    input[x + xDir][y + yDir] &&
    input[x + xDir][y + yDir] === letterToFind
  ) {
    if (letterToFind === "S") return true;
    foundXmas = checkCoordinate({
      direction,
      input,
      letterToCheckIndex: letterToCheckIndex + 1,
      sequence: mas,
      startCoords: [x + xDir, y + yDir],
    });
  }
  return foundXmas;
};

const searchForXmas = (input: string[], coords: [number, number]) => {
  let numFound = 0;
  for (let direction of ALL_DIRECTIONS) {
    const xmasFound = checkCoordinate({
      direction,
      input,
      letterToCheckIndex: 0,
      sequence: mas,
      startCoords: coords,
    });
    if (xmasFound) {
      numFound++;
    }
  }
  return numFound;
};

const part1 = (input: string[]) => {
  let xmasses = 0;
  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const letter = input[x][y];
      if (letter === "X") {
        const matches = searchForXmas(input, [x, y]);
        xmasses += matches;
      }
    }
  }
  console.log({ xmasses });
};

part1(exampleInput);
part1(aocInput);

const searchForCrossMasses = (input: string[], coords: [number, number]) => {
  let numFound = 0;
  let [x, y] = coords;
  for (let pair of DIAGONAL_PAIRS) {
    let [[x1, y1], [x2, y2]] = pair;
    if (
      input[x + x1] &&
      input[x + x1][y + y1] &&
      input[x + x2] &&
      input[x + x2][y + y2] &&
      ((input[x + x1][y + y1] === "S" && input[x + x2][y + y2] === "M") ||
        (input[x + x1][y + y1] === "M" && input[x + x2][y + y2] === "S"))
    ) {
      numFound += 1;
    }
  }
  return numFound === 2;
};

const part2 = (input: string[]) => {
  let crossmasses = 0;

  for (let y = 0; y < input.length; y++) {
    for (let x = 0; x < input[y].length; x++) {
      const letter = input[x][y];
      if (letter === "A") {
        const match = searchForCrossMasses(input, [x, y]);
        if (match) {
          crossmasses += 1;
        }
      }
    }
  }

  console.log({ crossmasses });
};

part2(exampleInput);
part2(aocInput);
