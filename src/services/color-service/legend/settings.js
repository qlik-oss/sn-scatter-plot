export default function createSettings({ colorService }) {
  const { type: colorType } = colorService.getSettings();

  if (colorType !== 'categorical') {
    return undefined;
  }

  return {
    item: {
      shape: {
        type: 'circle',
        size: 10,
      },
    },
  };
}
