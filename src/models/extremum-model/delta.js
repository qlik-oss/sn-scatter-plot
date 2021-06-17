export default function getDelta({ layoutService, value, measureIndex }) {
  const colIdx = measureIndex + 1;
  const matrix = layoutService.getHyperCubeValue('qDataPages.0.qMatrix', []);

  let delta = Number.MAX_VALUE;
  matrix.forEach((row) => {
    if (row[colIdx].qNum !== value) {
      delta = Math.min(delta, Math.abs(row[colIdx].qNum - value));
    }
  });
  if (delta === Number.MAX_VALUE) {
    return value === 0 ? 10 : value / 10;
  }
  return delta / 2;
}
