import KEYS from '../../constants/keys';

export default function createScales({ layoutModel, viewState }) {
  return {
    x: {
      data: {
        field: KEYS.FIELDS.X,
      },
      min: () => viewState.get('zoom').xAxisMin,
      max: () => viewState.get('zoom').xAxisMax,
    },
    y: {
      data: {
        extract: {
          field: KEYS.FIELDS.Y,
        },
      },
      min: () => viewState.get('zoom').yAxisMin,
      max: () => viewState.get('zoom').yAxisMax,
      invert: true,
    },
    size: layoutModel.meta.hasSizeMeasure
      ? {
          data: {
            extract: {
              field: KEYS.FIELDS.SIZE,
              filter: (d) => d,
            },
          },
        }
      : undefined,
  };
}
