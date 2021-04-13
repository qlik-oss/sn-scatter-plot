import KEYS from '../../../constants/keys';

export default function createSettings({ colorService }) {
  const { type: colorType } = colorService.getSettings();

  if (colorType !== 'categorical') {
    return undefined;
  }

  return {
    item: {
      shape: {
        type: 'circle',
        stroke: {
          // scale: 'colorLegend' or KEYS.SCALE.COLOR,
        },
        strokeWidth: 0,
        size: 10,
        fill: {
          scale: KEYS.SCALE.COLOR,
        },
      },
    },
  };
}
