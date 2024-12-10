const w = [-1, 0];
const e = [1, 0];
const n = [0, 1];
const s = [0, -1];
const ne = [1, 1];
const se = [1, -1];
const sw = [-1, -1];
const nw = [-1, 1];

export const ALL_DIRECTIONS = [n, ne, e, se, s, sw, w, nw];

export const DIAGONALS = [ne, se, sw, nw];
export const DIAGONAL_PAIRS = [
  [ne, sw],
  [se, nw],
];
