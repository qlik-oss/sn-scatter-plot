/**
 * @namespace properties
 * @entry
 */
const properties = () => {
  /**
   * @lends properties
   */
  const initialProperties = {
    /**
     * Current version of this generic object definition
     * @type {string}
     * @default
     */
    version: '__PACKAGE_VERSION__',
    qHyperCubeDef: {
      qDimensions: [],
      qMeasures: [],
      qSuppressMissing: true,
    },
    refLine: {
      refLinesX: [],
      refLinesY: [],
    },
    showTitles: true,
    title: '',
    subtitle: '',
    footnote: '',
    disableNavMenu: false,
    showDetails: false,
    showDisclaimer: true,
    navigation: false,
    dataPoint: {
      bubbleSizes: 5,
      rangeBubbleSizes: [2, 8],
    },
    labels: {
      mode: 1,
    },
    compressionResolution: 5,
    gridLine: {
      auto: true,
      spacing: 2,
    },
    color: {
      auto: true,
      mode: 'primary',
      formatting: {
        numFormatFromTemplate: true,
      },
      useBaseColors: 'off',
      paletteColor: {
        index: 6,
      },
      useDimColVal: true,
      useMeasureGradient: true,
      persistent: false,
      expressionIsColor: true,
      expressionLabel: '',
      measureScheme: 'sg',
      reverseScheme: false,
      dimensionScheme: '12',
      autoMinMax: true,
      measureMin: 0,
      measureMax: 10,
    },
    legend: {
      show: true,
      dock: 'auto',
      showTitle: true,
    },
    xAxis: {
      show: 'all',
      dock: 'near',
      spacing: 1,
      autoMinMax: true,
      minMax: 'min',
      min: 0,
      max: 10,
    },
    yAxis: {
      show: 'all',
      dock: 'near',
      spacing: 1,
      autoMinMax: true,
      minMax: 'min',
      min: 0,
      max: 10,
    },
    tooltip: {
      auto: true,
      hideBasic: false,
    },
  };

  return initialProperties;
};

export default properties;
