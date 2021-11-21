/* eslint-disable no-param-reassign */
export default function movePath(path, distance, close = true) {
  // Convert path to points
  const coordinates = path
    .replace(/[MLZ]/g, '')
    .split(' ')
    .filter((str) => str.length > 0)
    .map(parseFloat);
  const points = [];
  for (let i = 0; i < coordinates.length / 2; i++) {
    points.push({ x: coordinates[i * 2], y: coordinates[i * 2 + 1] });
  }

  // Displace points
  points.forEach((point) => {
    point.x += distance;
  });

  // Convert points to path
  let d = '';

  for (let i = 0; i < points.length; i++) {
    const p = points[i];
    if (i === 0) {
      d += `M${p.x} ${p.y}`;
    } else {
      d += `L${p.x} ${p.y}`;
    }

    d += ' ';
  }

  if (close) {
    d += 'Z';
  }

  return d;
}
