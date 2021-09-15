export default function isOutOfBounds(value, min, max) {
  return value < min || value > max;
}

// pos: x or y
// dim: w or h
// export function outOfBoundsPosition(pos, dim, oobSize) {
//     return pos < 0 ? -10 + oobSize : pos > dim ? dim - oobSize + 10 : pos;
// }
