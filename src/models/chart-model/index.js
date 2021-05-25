import KEYS from '../../constants/keys';
import createViewHandler from '../../view-handler';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  dockService,
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
    data: layoutService.getHyperCube(),
    config: {
      localeInfo,
    },
  };

  const dataset = picasso.data('q')(mainConfig);

  const viewHandler = createViewHandler({
    dockService,
    layoutService,
    model,
    viewState,
  });

  function updatePartial() {
    const dataView = viewState.get('dataView');
    const { isHomeState } = viewHandler.getMeta();
    extremumModel.command.updateExtrema(dataView, isHomeState);
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

  viewState.onChanged('dataView', updatePartial);

  const state = { isPrelayout: true };

  return {
    query: {
      getDataset: () => dataset,
      getViewState: () => viewState,
      getViewHandler: () => viewHandler,
      getLocaleInfo: () => localeInfo,
      isInteractionInProgess: () => interactionInProgess,
      getFormatter: (fieldName) => dataset.field(fieldName).formatter(),
      isPrelayout: () => state.isPrelayout,
    },
    command: {
      layoutComponents: ({ settings } = {}) => {
        chart.layoutComponents({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...colorService.getData(),
          ],
          settings,
        });
        state.isPrelayout = false;
      },
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
