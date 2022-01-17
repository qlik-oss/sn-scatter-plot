import { getValue, setValue } from 'qlik-chart-modules';

export default function useDimValColShowFunc(data) {
  // If we have an old chart where this property is never set to its default value, set it to false
  if (getValue(data, 'color.useDimColVal') === undefined) {
    setValue(data, 'color.useDimColVal', false);
  }
  return (
    !getValue(data, 'color.auto') &&
    getValue(data, 'color.mode') === 'byDimension' &&
    getValue(data, 'color.byDimDef.type') === 'libraryItem'
  );
}
