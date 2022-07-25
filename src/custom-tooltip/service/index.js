import { getValue } from 'qlik-chart-modules';

import constants from '../constants';
import utils from '../utils';
import promises from '../promises';
import getAttributes from '../picasso-definitions/attribute';
import createModel from '../model';
import customTooltipChart from '../chart';

const { CUSTOM } = constants;

export default function createCustomTooltipService({
  flags,
  layout,
  app,
  model,
  picasso,
  chart,
  translator,
  localeInfo,
  embed,
  options,
}) {
  const customTooltipModel = createModel({
    layout,
    app,
    model,
    picasso,
    chart,
    translator,
    localeInfo,
    embed,
  });

  const rtl = options.direction === 'rtl';

  const isEnabled = !!(layout.tooltip && !layout.tooltip.auto);
  const hideBasic = isEnabled && getValue(layout, 'tooltip.hideBasic', false);
  const isChartEnabled = !!(
    isEnabled &&
    layout.tooltip?.chart?.object?.refId &&
    embed &&
    typeof model?.getEffectiveProperties === 'function'
  );

  return {
    isEnabled: () => isEnabled,
    hideBasic: () => hideBasic,
    getAttributes: ({ dataset, nodes }) => {
      const attributes = getAttributes({ dataset, nodes, layout });
      return {
        title: attributes.customTooltipInfoAttrExpsArr.find((a) => a.id === CUSTOM.TITLE)?.title,
        description: attributes.customTooltipInfoAttrExpsArr.find((a) => a.id === CUSTOM.DESCRIPTION)?.value,
        measures: attributes.customTooltipAttrExpsArr,
      };
    },
    hasImages: () => utils.checkIfPromisesExist({ customTooltipModel }),
    createImageRow: ({ value, h }) => utils.getImageRow(value, { h, rtl }),
    addImages: ({ nodes }) => {
      const modified = utils.getDataNodes(chart, nodes);
      const expressions = utils.getAttrExprData(layout);

      return promises.handlePromises({
        customTooltipModel,
        nodes: modified,
        attrExps: expressions,
        opts: {
          flags,
          app,
        },
      });
    },
    chart: {
      isEnabled: () => isChartEnabled,
      hasLimitation: () => !!app?.isInModalSelection?.(),
      createContainer: ({ h }) => customTooltipChart.createContainer({ layout, ctx: { h, rtl } }),
      createLimitationRow: () => utils.getFooterRow(translator.get('properties.tooltip.notselectedmessage'), rtl),
      show: ({ nodes, properties }) =>
        customTooltipChart.show({
          app,
          properties,
          selectedNodes: nodes,
          customTooltipModel,
          rtl,
        }),
      hasAlternateState: () => !!customTooltipModel.miniChartToken?.alternateState,
      hide: () => customTooltipChart.hide({ app, customTooltipModel }),
      destroy: () => customTooltipChart.destroyVisualization({ customTooltipModel }),
    },
  };
}
