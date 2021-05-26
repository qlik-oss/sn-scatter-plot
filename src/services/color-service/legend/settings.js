import NUMBERS from '../../../constants/numbers';

export default function createSettings({ colorService }) {
  const { type: colorType } = colorService.getSettings();

  if (colorType !== 'categorical') {
    return undefined;
  }

  return {
    item: {
      shape: {
        type: 'circle',
        size: NUMBERS.LEGEND_CAT.SYMBOL.SIZE,
      },
    },
  };
}
