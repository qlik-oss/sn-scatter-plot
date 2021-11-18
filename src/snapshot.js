/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import extend from 'extend';
import { onTakeSnapshot, useImperativeHandle } from '@nebula.js/stardust';
import KEYS from './constants/keys';

const setupSnapshot = ({ core, models }) => {
  onTakeSnapshot((layout) => {
    if (!models) {
      return undefined;
    }

    const { layoutService, dockService, colorService, chartModel } = models;
    const viewState = chartModel.query.getViewState();
    const dataHandler = chartModel.query.getDataHandler();
    const { isBinnedData } = dataHandler.getMeta();
    const dataPages = isBinnedData ? layoutService.getLayoutValue('dataPages') : layout.qHyperCube.qDataPages;
    const newDataPages = isBinnedData ? layoutService.getLayoutValue('dataPages') : layoutService.getDataPages();

    // Update snapshot layout with data from the plot
    extend(true, dataPages, newDataPages);
    const { width: w, height: h } = dockService.meta.chart.size;
    layout.snapshotData = layout.snapshotData || {};
    layout.dataPages = newDataPages;
    layout.snapshotData.content = {
      size: { w, h },
    };

    /**
     * If the layout we are working with already is a snapshot, there is no need to recreate the chartData.
     * This will for example occur when doing a free-resize in story telling.
     */
    if (layoutService.meta.isSnapshot) {
      return Promise.resolve();
    }

    const legend = core.chart.component(KEYS.COMPONENT.LEGEND_CATEGORICAL);
    const legendScrollOffset = legend && legend._DO_NOT_USE_getInfo && legend._DO_NOT_USE_getInfo().offset;
    const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewState.get('dataView');
    layout.snapshotData.content.chartData = {
      xAxisMin,
      xAxisMax,
      yAxisMin,
      yAxisMax,
      legendScrollOffset,
    };

    return colorService
      .getSnapshotData()
      .then((data) => {
        layout.snapshotData.content.chartData = {
          ...layout.snapshotData.content.chartData,
          ...data,
        };
      })
      .catch(() => {});
  });

  useImperativeHandle(
    () => ({
      getViewState() {
        if (!models) {
          return undefined;
        }
        const legend = core.chart.component(KEYS.COMPONENT.LEGEND_CATEGORICAL);
        const legendScrollOffset = legend && legend._DO_NOT_USE_getInfo && legend._DO_NOT_USE_getInfo().offset;
        const viewState = models.chartModel.query.getViewState();
        const { xAxisMin, xAxisMax, yAxisMin, yAxisMax } = viewState.get('dataView');
        return {
          xAxisMin,
          xAxisMax,
          yAxisMin,
          yAxisMax,
          legendScrollOffset,
        };
      },
    }),
    [models]
  );
};

export default setupSnapshot;
