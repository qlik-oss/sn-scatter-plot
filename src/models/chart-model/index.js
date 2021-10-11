import KEYS from '../../constants/keys';
import createViewHandler from '../../view-handler';
import isBigData from '../../utils/is-big-data';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  colorService,
  picasso,
  viewState,
  extremumModel,
  app,
  flags,
  model,
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
    app,
    flags,
    layoutService,
    extremumModel,
    model,
    viewState,
  });

  function updatePartial() {
    const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
    if (isBigData(qcy, app.layout, flags) && flags.isEnabled('DATA_BINNING')) {
      viewHandler.fetchData().then((pages) => {
        // Transition between bin data and normal data
        if (pages[0].qMatrix?.length) {
          layoutService.setDataPages(pages);
          layoutService.setLayoutValue('dataPages', [[]]);
        } else {
          layoutService.setLayoutValue('dataPages', pages);
          layoutService.setDataPages([]);
        }
      });
    }
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

  const getBinData = () => {
    const qcy = layoutService.getHyperCubeValue('qSize.qcy', 0);
    if (!isBigData(qcy, app.layout, flags) || !flags.isEnabled('DATA_BINNING')) {
      return [];
    }

    const data = layoutService.getLayoutValue('dataPages')[0].slice(1);

    return [
      {
        key: KEYS.DATA.BIN,
        type: 'matrix',
        data,
        config: {
          parse: {
            fields() {
              return [
                {
                  key: 'bin',
                  title: 'Bin',
                },
                {
                  key: 'binX',
                  title: 'X',
                },
                {
                  key: 'binY',
                  title: 'Y',
                },
                {
                  key: 'binDensity',
                  title: 'Density',
                },
              ];
            },
            row(d) {
              return {
                bin: d.qElemNumber,
                binX: (d.qText[0] + d.qText[2]) / 2,
                binY: (d.qText[1] + d.qText[3]) / 2,
                binDensity: d.qNum,
              };
            },
          },
        },
      },
    ];
  };

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
        const binData = getBinData();
        chart.layoutComponents({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...binData,
            ...colorService.getData(),
          ],
          settings,
        });
        state.isPrelayout = false;
      },
      update: ({ settings } = {}) => {
        const binData = getBinData();
        chart.update({
          data: [
            {
              type: 'q',
              ...mainConfig,
            },
            ...binData,
            ...colorService.getData(),
          ],
          settings,
        });
      },
    },
  };
}
