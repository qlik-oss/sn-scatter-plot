const COMPRESSION_THRESHOLD = 1000;

export default function showCompressionResolution(layout) {
  const dim = layout.qHyperCube.qDimensionInfo[0];
  return dim?.qCardinal > COMPRESSION_THRESHOLD;
}
