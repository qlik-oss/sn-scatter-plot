import KEYS from '../../constants/keys';

export default function createScales({ models, viewState }) {
  const { tickModel, colorService } = models;
  return {
    x: {
      data: {
        field: KEYS.FIELDS.X,
      },
      min: () => viewState.get('dataView').xAxisMin,
      max: () => viewState.get('dataView').xAxisMax,
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
      min: () => viewState.get('dataView').yAxisMin,
      max: () => viewState.get('dataView').yAxisMax,
      invert: true,
      ticks: {
        values: () => tickModel.query.getYTicks(),
      },
    },
    ...colorService.getScales(),
  };
}
