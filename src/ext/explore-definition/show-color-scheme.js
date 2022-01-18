import showPersistentColors from './show-persistent-colors';

const getDimensionLayouts = (layout) => layout?.qHyperCube?.qDimensionInfo || [];

export default function showColorScheme(data, layout) {
  const dim = getDimensionLayouts(layout)[0];
  return !(dim && dim.qCardinal <= 12) && showPersistentColors(data);
}
