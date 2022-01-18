export default function getNumMeasures(obj) {
  return obj?.qHyperCubeDef?.qMeasures?.length || 0;
}
