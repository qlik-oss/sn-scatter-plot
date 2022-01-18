import showUseDimValCol from '../show-use-dim-val-col';

export default function showPersistentColors(data) {
  return !(data.color && data.color.mode === 'byDimension' && data.color.useDimColVal && showUseDimValCol(data));
}
