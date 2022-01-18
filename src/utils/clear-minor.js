import isInBinRangeSelection from './is-in-bin-range-selection';

export default function clearMinor({ chart, actions }) {
  if (isInBinRangeSelection(chart)) {
    actions.select.emit('start');
    actions.select.emit('binRangeHighlightClear');
  }
}
