/**
 * @namespace properties
 * @entry
 */
const objectDefinition = () => {
  /**
   * @lends properties
   */
  const definition = {
    /**
     * Current version of this generic object definition
     * @type {string}
     * @default
     */
    version: process.env.PACKAGE_VERSION,
    /**
     * Color settings.
     * Most color options for visualizations are set in the color object in the options. You activate custom coloring by setting `"auto": false` which turns off auto-coloring.
     * If `"auto": true`, no other properties need to be defined in the color object.
     * Note: Some of the color properties are depending on which theme is currently being used.
     * @type {object}
     */
    color: {
      /**
       * Set to use automatic coloring.
       * When `"auto": true`, color settings are based on the visualization used and the number of dimensions
       * and measures, that is, the settings are not fixed, but are dependent on the data input.
       * @type {boolean}
       * @default
       */
      auto: true,
      /**
       * Sets the coloring mode for the visualization when auto-coloring has been switched off (`"auto": false`). Can be one of:
       * * `primary`: a single color (by default blue) is used for all items in the chart. In visualizations that do not benefit from multiple colors (bar charts with one dimension and scatter plots), single color is the default setting.
       * * `byDimension`: coloring is based upon the amount of dimension values. Details are set in the `"byDimDef"` property.
       * !Note: `byDimension` can only be used in conjunction with an attribute dimension on the dimension to color by, as shown in the example below.
       * ```json
       * {
       *     "qDef": {
       *       "qFieldDefs": [
       *         "NetScoreName"
       *       ]
       *     },
       *     "qAttributeDimensions": [
       *       {
       *         "qDef": "NetScoreName",
       *         "id": "colorByAlternative",
       *         "label": "Year"
       *       }
       *     ]
       * }
       * ```
       * * `byExpression`: coloring is based on an expression, which in most cases is a color code. Details are set in the `"expressionIsColor"`, `"expressionLabel`" and `"colorExpression"` properties.
       * * `byMeasure`: coloring is based on the measure value. Details are set in the `"byMeasureDef"` property.
       * * `byMultiple`: can be used when more than one measure is used. By default, 12 colors are used for the dimensions. The colors are reused when there are more than 12 dimension values.
       * @type {'primary'|'byDimension'|'byExpression'|'byMeasure'|'byMultiple'}
       * @default "primary"
       */
      mode: 'primary',
      /**
       * Color by measure number formatting options
       */
      formatting: {
        /**
         * When enabled, the number format to use can be selected from multiple predefined formats based on the desired type (number, date).
         * @type {boolean=}
         * @default
         */
        numFormatFromTemplate: true,
      },
      /**
       * Use colors encoded in master items.
       * Only applicable when `"mode": "primary"` or `"mode": "byMultiple"` has been defined.
       * @type {'off'|'dimension'|'measure'}
       * @default "off"
       */
      useBaseColors: 'off',
      /**
       * The paletteColor object is used to define the color when you color by single color `("mode": "primary")`.
       * @type {paletteColor}
       * @default { index: 6 }
       */
      paletteColor: {
        index: 6,
      },
      /**
       * Set to true if you want to apply the colors defined for library dimensions when used.
       * Only applicable if `'colorMode': 'byDimension'`.
       * @type {boolean}
       * @default
       */
      useDimColVal: true,
      /**
       * Set to true if you want to apply the colors defined for library measures when used. Only applicable if `"mode": "byMeasure"`.
       * @default
       */
      useMeasureGradient: true,
      /**
       * Set to use persistent colors on data points between selections. Only applicable when using one dimension and when `"mode": "byDimension"` or when `"mode": "byMultiple"`.
       * @type {boolean}
       * @default
       */
      persistent: false,
      /**
       * Set to define whether the result of the expression is a valid CSS3 color.
       * Only applicable when `"mode": "byExpression"`.
       * @type {boolean}
       * @default
       */
      expressionIsColor: true,
      /**
       * Label to be defined on tool tips when using a coloring expression.
       * Only used if `'expressionIsColor': false`.
       * @type {string}
       * @default
       */
      expressionLabel: '',
      /**
       * Color scheme when `"mode": "byMeasure"`. Can be one of:
       * * `sg`: (sequential gradient) the transition between the different color groups is made using different shades of colors. High measure values have darker hues
       * * `sc`: (sequential classes) the transition between the different color groups is made using distinctly different colors.
       * * `dg`: (diverging gradient) used when working with data that is ordered from low to high, for instance, to show the relationship between different areas on a map. Low and high values have dark colors, mid-range colors are light.
       * * `dc`: (diverging classes) can be seen as two sequential classes combined, with the mid-range shared. The two extremes, high and low, are emphasized with dark colors with contrasting hues, and the mid-range critical values are emphasized with light colors.
       * @type {'sg'|'sc'|'dg'|'dc'}
       * @default "sg"
       */
      measureScheme: 'sg',
      /**
       * Set to reverse the color scheme.
       * @type {boolean}
       * @default
       */
      reverseScheme: false,
      /**
       * Color scheme when `"mode": "byDimension"` or `"mode": "byMultiple"` (`"12"` or `"100"` for most themes).
       * @type {'12'|'100'}
       * @default
       */
      dimensionScheme: '12',
      /**
       * Set to false to define custom color range. Custom color range is only applicable when coloring is by measure (`"mode": "byMeasure"`) or by expression (`"mode": "byExpression"`).
       * When coloring is by expression, `"expressionIsColor": "false"` must be set for custom color range to work.
       * @type {boolean}
       * @default
       */
      autoMinMax: true,
      /**
       * Set the min value for the color range.
       * Only applicable if `"autoMinMax": false`.
       * @type {number|ValueExpression=}
       * @default 0
       */
      measureMin: 0,
      /**
       * Set the max value for the color range.
       * Only applicable if `"autoMinMax": false`.
       * @type {number|ValueExpression=}
       * @default 10
       */
      measureMax: 10,
    },
    /**
     * Set resolution level for compressed data.
     * @type {number}
     * @default 5
     */
    compressionResolution: 5,
    /**
     * Data points settings.
     * @type {object}
     */
    dataPoint: {
      /**
       * Set bubble size when there is no measure for size.
       * @type {number}
       * @default 5
       */
      bubbleSizes: 5,
      /**
       * Bubble sizes. Represented as an array of two integers where the first index is the from-size and the second the to-size. From-size needs to be smaller. Only applicable when there is a third neasure.
       * @type {array}
       * @default 5
       */
      rangeBubbleSizes: [2, 8],
    },
    /**
     * Set to enable or disable navigation menu.
     * @type {boolean}
     * @default
     */
    disableNavMenu: false,
    /**
     * Visualization footnote.
     * @type {(string|StringExpression)=}
     * @default
     */
    footnote: '',
    /**
     * Label mode settings.
     * @type {object}
     * @default
     */
    labels: {
      /**
       * Show labels. 1 for auto, 2 for show all and 0 for hiding labels.
       * @type {0|1|2}
       * @default
       */
      mode: 1,
    },
    /**
     * Grid lines settings.
     * @type {object}
     */
    gridLine: {
      /**
       * Automatic grid line spacing.
       * @type {boolean}
       * @default
       */
      auto: true,
      /**
       * Grid line spacing. Used only when auto is set to false.
       * @type {0|1|2|3}
       * @default
       */
      spacing: 2,
    },
    /**
     * Legend settings.
     * @type {object}
     */
    legend: {
      /**
       * Sets the legend position.
       * @type {'auto'|'right'|'left'|'bottom'|'top'}
       * @default "auto"
       */
      dock: 'auto',
      /**
       * Set to show the legend.
       * @type {boolean}
       * @default
       */
      show: true,
      /**
       * Show the legend title.
       * @type {boolean}
       * @default
       */
      showTitle: true,
    },
    /**
     * Show navigation UI.
     * @type {boolean}
     * @default
     */
    navigation: false,
    /**
     * Extends `HyperCubeDef`, see Engine API: `HyperCubeDef`.
     * @extends {HyperCubeDef}
     */
    qHyperCubeDef: {
      /** @type {DimensionProperties[]} */
      qDimensions: [],
      /** @type {MeasureProperties[]} */
      qMeasures: [],
      /**
       * @type {boolean}
       * @default
       * */
      qSuppressMissing: true,
    },
    /**
     * Reference lines settings
     * @type {object}
     */
    refLine: {
      /**
       * Array of x-axis reference line definitions
       * @type {refLine[]}
       */
      refLinesX: [],
      /**
       * Array of y-axis reference line definitions
       * @type {refLine[]}
       */
      refLinesY: [],
    },
    /**
     * Show visualization details toggle
     * @type {boolean=}
     * @default
     */
    showDetails: false,
    /**
     * Show visualization disclaimer toggle
     * @type {boolean}
     * @default
     */
    showDisclaimer: true,
    /**
     * Show title for the visualization.
     * @type {boolean=}
     * @default
     */
    showTitles: true,
    /**
     * Visualization subtitle.
     * @type {(string|StringExpression)=}
     * @default
     */
    subtitle: '',
    /**
     * Visualization title.
     * @type {(string|StringExpression)=}
     * @default
     */
    title: '',
    /**
     * Custom tooltip properties
     * @type {object}
     */
    tooltip: {
      /**
       * Toggle for using custom tooltip or regular tooltip
       * @type {boolean}
       * @default
       */
      auto: true,
      /**
       * Toggle for hiding basic information from custom tooltip
       * @type {boolean}
       * @default
       */
      hideBasic: false,
      /**
       * Custom tooltip title.
       * @type {(string|StringExpression)=}
       * @default
       */
      title: '',
      /**
       * Custom tooltip description.
       * @type {(string|StringExpression)=}
       * @default
       */
      description: '',
    },
    /**
     * X-axis settings.
     * @type {object}
     */
    xAxis: {
      /**
       * Labels and title
       * @type {'all'|'labels'|'title'|'none'}
       * @default "all"
       */
      show: 'all',
      /**
       * Axis docking position
       * @type {'near'|'far'}
       * @default "near"
       */
      dock: 'near',
      /**
       * Axis scale
       * @type {number}
       * @default
       */
      spacing: 1,
      /**
       * Automatic max/min
       * @type {boolean}
       * @default
       */
      autoMinMax: true,
      /**
       * Set custom max/min
       * @type {'min'|'max'|'minMax'}
       * @default "min"
       */
      minMax: 'min',
      /**
       * Axis min value. `"autoMinMax"` must be set to false and `"minMax"`
       * must be set to `"min"` or `"minMax"` to use this property
       * @type {number|ValueExpression}
       * @default
       */
      min: 0,
      /**
       * Axis max value. `"autoMinMax"` must be set to false and `"minMax"`
       * must be set to `"max"` or `"minMax"` to use this property
       * @type {number|ValueExpression}
       * @default
       */
      max: 10,
    },
    /**
     * Y-axis settings.
     * @type {object}
     */
    yAxis: {
      /**
       * Labels and title
       * @type {'all'|'labels'|'title'|'none'}
       * @default "all"
       */
      show: 'all',
      /**
       * Axis docking position
       * @type {'near'|'far'}
       * @default "near"
       */
      dock: 'near',
      /**
       * Axis scale
       * @type {number}
       * @default
       */
      spacing: 1,
      /**
       * Automatic max/min
       * @type {boolean}
       * @default
       */
      autoMinMax: true,
      /**
       * Set custom max/min
       * @type {'min'|'max'|'minMax'}
       * @default "min"
       */
      minMax: 'min',
      /**
       * Axis min value. `"autoMinMax"` must be set to false and `"minMax"`
       * must be set to `"min"` or `"minMax"` to use this property
       * @type {number|ValueExpression}
       * @default
       */
      min: 0,
      /**
       * Axis max value. `"autoMinMax"` must be set to false and `"minMax"`
       * must be set to `"max"` or `"minMax"` to use this property
       * @type {number|ValueExpression}
       * @default
       */
      max: 10,
    },
  };

  return definition;
};

export default objectDefinition;

/**
 * Extends `NxInlineDimensionDef`, see Engine API: `NxInlineDimensionDef`.
 * @typedef {object} InlineDimensionDef
 * @extends NxInlineDimensionDef
 * @property {boolean=} autoSort Set to automatically sort the dimension.
 * @property {string=} cId ID used by the Qlik Sense. Must be unique within the current chart.
 * @property {string|StringExpression} othersLabel
 */

/**
 * Extends `NxInlineMeasureDef`, see Engine API: `NxInlineMeasureDef`.
 * @typedef {object} InlineMeasureDef
 * @extends NxInlineMeasureDef
 * @property {boolean=} autoSort Set to automatically sort the measure.
 * @property {string=} cId ID used by the Qlik Sense. Must be unique within the current chart.
 * @property {boolean} isCustomFormatted Set to true to toggle off the default client formatting.
 * @property {boolean} numFormatFromTemplate=true When enabled, the number format to use can be selected from multiple predefined formats based on the desired type (number, date).
 * @property {string|StringExpression} othersLabel
 */

/**
 * Extends `NxAttrDimDef`, see Engine API: `NxAttrDimDef`.
 * @typedef {object} AttributeDimensionProperties
 * @extends NxAttrDimDef
 * @property {string} id - One of: `colorByAlternative`: colors the chart using different dimensions (can be used together with color.mode="byDimension") or `colorByExpression` together with color.mode="byExpression".
 */

/**
 * Extends `NxAttrExprDef`, see Engine API: `NxAttrExprDef`.
 * @typedef {object} ColorAttributes
 * @extends NxAttrExprDef
 * @property {string} id - One of: `colorByAlternative`: colors the chart using different dimensions (can be used together with color.mode="byDimension") or `colorByExpression` together with color.mode="byExpression".
 */

/**
 * @typedef {ColorAttributes} AttributeExpressionProperties
 */

/**
 * Extends `NxDimension`, see Engine API: `NxDimension`.
 * @typedef {object} DimensionProperties
 * @extends NxDimension
 * @property {AttributeDimensionProperties[]} qAttributeDimensions
 * @property {InlineDimensionDef} qDef
 */

/**
 * Extends `NxMeasure`, see Engine API: `NxMeasure`.
 * @typedef {object} MeasureProperties
 * @extends NxMeasure
 * @property {AttributeExpressionProperties[]} qAttributeExpressions
 * @property {InlineMeasureDef} qDef
 */

/**
 * Color information structure. Holds the actual color and index in palette.
 * @typedef {object} paletteColor
 * @property {string} color - Color as hex string (mandatory if index: -1)
 * @property {number} index - Index in palette
 */

/**
 * @typedef {object} refLine
 * @property {boolean|ValueExpression} show=true Set to true to display this reference line.
 * @property {string} label Reference line label.
 * @property {paletteColor} paletteColor
 */

/**
 * @typedef {object} refLineExpr
 * @memberof refLine
 * @property {number|ValueExpression} value
 * @property {string|StringExpression} [label]
 */
