import { selectionService as createSelectionService } from '@qlik/chart-modules';
import clearBrushes from './clear';

export default function createService({ chart, actions, selections, document }) {
  const allowSimultaneous = [...Array(15)].map((d, i) => `qHyperCube/qMeasureInfo/${i}`);

  const start = ({ name }) => {
    clearBrushes({
      current: name,
      chart,
      document,
    });
  };

  const service = createSelectionService({
    chart,
    actions,
    selections,
    config: {
      allowSimultaneous,
      selectionActions: {
        clear: () =>
          clearBrushes({
            chart,
            document,
          }),
      },
      selectionEvents: { start },
    },
  });

  return service;
}
