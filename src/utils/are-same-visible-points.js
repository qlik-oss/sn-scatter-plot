export default function areSameVisiblePoints(visiblePoints) {
  if (!visiblePoints) return false;
  if (visiblePoints.length < 2) return true;
  const row0 = visiblePoints[0];
  const x0 = row0[1].qNum;
  const y0 = row0[2].qNum;
  return visiblePoints.every((row) => row[1].qNum === x0 && row[2].qNum === y0);
}
