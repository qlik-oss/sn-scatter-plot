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
     */
    version: process.env.PACKAGE_VERSION,
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
    compressionResolution: 5,
    dataPoint: {
      bubbleSizes: 5,
      rangeBubbleSizes: [2, 8],
    },
    disableNavMenu: false,
    footnote: '',
    labels: {
      mode: 1,
    },
    gridLine: {
      auto: true,
      spacing: 2,
    },
    legend: {
      show: true,
      dock: 'auto',
      showTitle: true,
    },
    navigation: false,
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
    showDetails: false,
    showDisclaimer: true,
    subtitle: '',
    title: '',
    tooltip: {
      auto: true,
      hideBasic: false,
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
  };

  return initialProperties;
};

export default properties;
