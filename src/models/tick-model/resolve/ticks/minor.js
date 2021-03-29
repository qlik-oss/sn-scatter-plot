export default function getMinorTicks({ majorTicks, count }) {
  const minor = [];

  for (let i = 0; i < majorTicks.length - 1; i++) {
    const start = majorTicks[i];
    const end = majorTicks[i + 1];
    const step = (end - start) / (count + 1);

    for (let c = 1; c <= count; c++) {
      minor.push(start + step * c);
    }
  }

  return minor;
}
