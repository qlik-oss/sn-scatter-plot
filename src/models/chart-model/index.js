import KEYS from '../../constants/keys';

export default function createChartModel({
  chart,
  localeInfo,
  layoutService,
  colorService,
  picasso,
  viewState,
  extremumModel,
  flags,
  viewHandler,
}) {
  let interactionInProgess = false;
  let settingsCopy;
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

  const getBinData = () => {
    if (!layoutService.meta.isBigData || !flags.isEnabled('DATA_BINNING')) {
      return [];
    }

    const data = layoutService.getLayoutValue('dataPages')[0].slice(1);
    if (!data.length) {
      return [];
    }

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
                  key: KEYS.FIELDS.BIN,
                  title: 'Bin',
                },
                {
                  key: KEYS.FIELDS.BIN_X,
                  title: 'X',
                },
                {
                  key: KEYS.FIELDS.BIN_Y,
                  title: 'Y',
                },
                {
                  key: KEYS.FIELDS.BIN_DENSITY,
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

  const update = ({ settings } = {}) => {
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
      getSettings: () => settingsCopy,
    },
    command: {
      layoutComponents: ({ settings } = {}) => {
        const binData = getBinData();
        settingsCopy = settings;
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
      update,
    },
  };
}
