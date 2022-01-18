import container from './container';
import createChart from './object';
import { createSessionAlternateState, destroySessionAlternateState } from './session-states';
import CONST from '../constants/index';

const chart = {
  createContainer: ({ ctx, layout }) => {
    if (layout.qHyperCube?.qDimensionInfo?.length <= 0) {
      return undefined;
    }
    return container(ctx, layout);
  },
  show: async ({ app, properties, selectedNodes, dimIndex, customTooltipModel, rtl }) => {
    // initialize and display the mini chart on the already created container
    const cttModel = customTooltipModel;
    const chartRefId = properties?.tooltip?.chart?.object?.refId;
    if (
      !cttModel?.embed ||
      !app.removeSessionAlternateState ||
      !app.addSessionAlternateState ||
      !chartRefId ||
      properties.qHyperCubeDef.qDimensions.length <= 0
    ) {
      return;
    }
    // destroy previous altStates and SessionObjects
    await chart.hide({ app, customTooltipModel });
    try {
      await createSessionAlternateState({ app, properties, customTooltipModel });
      const sessionObjectModel = await createChart({ app, properties, customTooltipModel });
      // cttModel.miniChartToken may be destroyed at any time by another tooltip that tries to be displayed
      if (cttModel.miniChartToken.alternateState && cttModel.miniChartToken.sessionObj && sessionObjectModel) {
        const elementNumbers =
          selectedNodes.length > 0 && selectedNodes[0].data?.value !== undefined ? [selectedNodes[0].data?.value] : [];
        const targetIndex = dimIndex !== undefined ? dimIndex : properties.qHyperCubeDef.qDimensions.length - 1;

        if (properties.qHyperCubeDef.qDimensions.length === 2 && dimIndex === undefined && selectedNodes.length > 0) {
          // handle multiple dimensions
          const outerNode = selectedNodes[0].data.selectionOuterDimension ?? selectedNodes[0].data.selectionDimension;
          if (outerNode?.source?.field) {
            const outerSourceParts = outerNode?.source?.field.split('/');
            const outerTargetIndex = outerSourceParts[outerSourceParts.length - 1];
            const outerDimensionElementNumbers = outerNode.value !== undefined ? [outerNode.value] : [];

            if (outerDimensionElementNumbers.length > 0 && outerTargetIndex !== undefined) {
              cttModel.miniChartToken.sessionObj.selectHyperCubeValues(
                '/qHyperCubeDef',
                Number(outerTargetIndex),
                outerDimensionElementNumbers,
                false
              );
            }
          }
        }
        if (elementNumbers.length > 0) {
          cttModel.miniChartToken.sessionObj.selectHyperCubeValues(
            '/qHyperCubeDef',
            targetIndex,
            elementNumbers,
            false
          );
        }
        // add the visualization to the container
        const element = document.getElementById(CONST.CHART.CONTAINER_ID);
        const direction = rtl ? 'rtl' : 'ltr';
        const options = {
          direction,
          isReadonly: true,
          isPopover: true,
          navigation: false,
          selections: false,
        };
        cttModel.miniChartToken.vis = await customTooltipModel.embed.render({
          element,
          model: cttModel.miniChartToken.model, // used for sense-client rendering (qv-object)
          options, // used for sense-client rendering (qv-object)
          id: cttModel.miniChartToken.model?.id, // used for nebula rendering
          type: cttModel.miniChartToken.model?.genericType, // used for nebula rendering
        });
      }
    } catch (err) {
      // catching error when the ID of mini-chart container in the DOM does not exist
      await chart.hide({ app, customTooltipModel });
    }
  },
  hide: async ({ app, customTooltipModel }) => {
    const cttModel = customTooltipModel;
    if (!cttModel?.embed) {
      return;
    }
    chart.destroyVisualization({ customTooltipModel });

    await app.destroySessionObject(CONST.CHART.CHART_OBJECT_ID);
    cttModel.miniChartToken.sessionObj = undefined;
    await destroySessionAlternateState({ app, customTooltipModel });
  },
  destroyVisualization: ({ customTooltipModel }) => {
    const cttModel = customTooltipModel;
    if (typeof cttModel.miniChartToken?.vis?.destroy === 'function') {
      // closing previously displayed visualization
      cttModel.miniChartToken.vis.destroy();
      cttModel.miniChartToken.vis = undefined;
    }
  },
};

export default chart;
