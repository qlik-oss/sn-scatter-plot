import extend from 'extend';

const OOB_SIZE = 10;

const oobHelper = {
  getDefaultSettings({ size = OOB_SIZE, fill = '#999', alignment } = {}) {
    return {
      /** Whether or not to show the out-of-bounds
       * @type {function|boolean=} */
      show: true,
      type: 'n-polygon',
      /** Fill color
       * @type {datum-string=} */
      fill,
      /** Stroke color
       * @type {datum-string=} */
      stroke: '#000',
      /** Stroke width
       * @type {datum-number=} */
      strokeWidth: 0,
      /** Size of the component
       * @type {number=} */
      size,
      sides: 3,
      startAngle: -90,
      alignment,
    };
  },

  /**
   * Out of bounds shape
   * @param {object} params parameters
   * @param {object} params.item Resolved styling item from box component with item.major
   * @param {number} params.dockValue 0 or 1 depending on where to render the oob shape
   * @param {number} params.boxWidth Un-calculated box width in relative/normalized format
   * @param {number} params.boxPadding Un-calculated box padding in relative/normalized format
   * @param {number} params.rendWidth The pixel width of the area to render upon
   * @param {number} params.rendHeight The pixel height of the area to render upon
   * @param {boolean} params.flipXY Wether or not to flip X and Y coordinates together with Width and Height
   * @param {function} params.symbol Symbol library function from component
   * @ignore
   */
  createOob({ oob, dockValue, boxCenter, majorAxis, rendWidth, rendHeight, symbol }) {
    let x;
    let y;
    let startAngle;
    if (majorAxis === 'x') {
      if (dockValue === 0) {
        x = oob.size / 2;
        startAngle = 180;
      } else {
        x = rendWidth - oob.size / 2;
        startAngle = 0;
      }
      y = rendHeight * boxCenter;
    } else {
      if (dockValue === 0) {
        y = rendHeight - oob.size / 2;
        startAngle = -90;
      } else {
        y = oob.size / 2;
        startAngle = 90;
      }
      x = rendWidth * boxCenter;
    }

    return symbol(extend({}, oob, { x, y, startAngle }));
  },
};

export default oobHelper;
