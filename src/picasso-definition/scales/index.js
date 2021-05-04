import KEYS from '../../constants/keys';

export default function createScales({ models, viewState }) {
  const { tickModel, colorService } = models;
  return {
    x: {
      data: {
        field: KEYS.FIELDS.X,
      },
      min: () => viewState.get('zoom').xAxisMin,
      max: () => viewState.get('zoom').xAxisMax,
      ticks: {
        values: () => tickModel.query.getXTicks(),
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
        values: () => tickModel.query.getYTicks(),
      },
    },
    ...colorService.getScales(),
  };
}
