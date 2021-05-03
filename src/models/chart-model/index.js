import KEYS from '../../constants/keys';
import createZoomHandler from '../../zoom-handler';

export default function createChartModel({
  chart,
  localeInfo,
  layoutModel,
  dockModel,
  model,
  colorService,
  picasso,
  viewState,
  extremumModel,
}) {
  let interactionInProgess = false;
  const EXCLUDE = [
    KEYS.COMPONENT.X_AXIS_TITLE,
    KEYS.COMPONENT.Y_AXIS_TITLE,
    // KEYS.COMPONENT.X_AXIS,
    // KEYS.COMPONENT.Y_AXIS,
    // KEYS.COMPONENT.GRID_LINES,
  ];

  const mainConfig = {
    key: KEYS.DATA.MAIN,
    data: layoutModel.getHyperCube(),
    config: {
      localeInfo,
    },
  };

  const dataset = picasso.data('q')(mainConfig);

  const zoomHandler = createZoomHandler({
    dockModel,
    layoutModel,
    model,
    viewState,
  });

  function updatePartial(newZoom) {
    extremumModel.query.updateExtrema(newZoom);
    requestAnimationFrame(() => {
      // TODO: cancel requests as well to optimize???
      // const startTime = Date.now();
      interactionInProgess = true;
      chart.update({
        partialData: true,
        excludeFromUpdate: EXCLUDE,
        // transforms: [
        //   {
        //     key: KEYS.COMPONENT.POINT,
        //     transform: { a: 1, b: 0, c: 0, d: 1, e: x, f: y },
        //   },
        // ],
      });
      // TODO: debounce -> interactionInProgess = false
      // console.log('chart rendered in ', Date.now() - startTime, ' ms');
    });
  }

  viewState.onChanged('zoom', updatePartial);

  return {
    query: {
      getDataset: () => dataset,
      getViewState: () => viewState,
      getZoomHandler: () => zoomHandler,
      getLocaleInfo: () => localeInfo,
      isInteractionInProgess: () => interactionInProgess,
    },
    command: {
      update: ({ settings } = {}) => {
        chart.update({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...colorService.getData(),
          ],
          settings,
        });
      },
    },
  };
}
