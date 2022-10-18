export default function showCompressionResolution(layout, properties) {
  const compressionThreshold = Math.max(1000, properties?.maxVisibleBubbles || 1000);
  const dim = layout.qHyperCube.qDimensionInfo[0];
  return dim?.qCardinal > compressionThreshold;
}
