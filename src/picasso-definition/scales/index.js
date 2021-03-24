import KEYS from '../../constants/keys';

export default function createScales({ layoutModel, tickModel, viewState }) {
  return {
    x: {
      data: {
        field: KEYS.FIELDS.X,
      },
      min: () => viewState.get('zoom').xAxisMin,
      max: () => viewState.get('zoom').xAxisMax,
      ticks: {
        values: tickModel.query.getXTicks(),
      },
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
      ticks: {
        values: tickModel.query.getYTicks(),
      },
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
