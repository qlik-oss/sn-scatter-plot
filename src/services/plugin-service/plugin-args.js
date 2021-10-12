import KEYS from '../../constants/keys';

/**
 * The arguments that are passed to the fn function of the plugin definition.
 * For example, the layout and keys in the following plugin:
 *        const pointPlugin = {
 *         info: {
 *           name: 'point-plugin',
 *           type: 'component-definition',
 *         },
 *         fn: ({ layout, keys }) => {
 *           const componentDefinition = {
 *             key: keys.components.point,
 *             type: 'point',
 *             settings: {
 *               // Some new settings that make use of
 *               // the data in layout and keys
 *             },
 *           };
 *           return componentDefinition;
 *         },
 *        ;
 * @namespace pluginArguments
 * @entry
 */

/**
 * Prepare important chart internals for the users to build their own plugins
 * @param {object} layoutService
 * @returns {pluginArguments} Chart internals that will be exposed to the users.
 */
export default function getPluginArgs(layoutService) {
  /**
   * @lends pluginArguments
   */
  const pluginArgs = {
    /**
     * The layout from the enigma model.
     * @type {object}
     */
    layout: layoutService.getLayout(),
    /**
     * The keys (references) to different types of chart internals
     * @type {object}
     */
    keys: {
      /**
       * The scales associated with the measures.
       * They are useful if you want to, via plugin, add a new component that
       * uses the same scale as one of the measures.
       * @type {object}
       */
      SCALES: {
        /**
         * The scale used for positioning items along the x axis
         * @type {string}
         */
        X: KEYS.SCALE.X,
        /**
         * The scale used for positioning items along the y axis
         * @type {string}
         */
        Y: KEYS.SCALE.Y,
      },
      /**
       * The unique keys of the existing components available in the chart.
       * They are useful if you want to extend or override the existing components.
       * @type {object}
       */
      COMPONENT: {
        /**
         * The x-axis component
         * @type {string}
         */
        X_AXIS: KEYS.COMPONENT.X_AXIS,
        /**
         * The y-axis component
         * @type {string}
         */
        Y_AXIS: KEYS.COMPONENT.Y_AXIS,
        /**
         * The point component
         * @type {string}
         */
        POINT: KEYS.COMPONENT.POINT,
      },
    },
  };

  return pluginArgs;
}
