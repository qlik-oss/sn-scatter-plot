/* eslint-disable no-param-reassign */
import extend from 'extend';
import { onTakeSnapshot } from '@nebula.js/stardust';

const setupSnapshot = (models) => {
  onTakeSnapshot((layout) => {
    if (!models) {
      return undefined;
    }

    const { layoutModel, dockModel, colorService, chartModel } = models;
    const viewState = chartModel.query.getViewState();

    // Update snapshot layout with data from the plot
    extend(true, layout.qHyperCube.qDataPages[0], layoutModel.getDataPages()[0]);
    const { width: w, height: h } = dockModel.chartSize;
    layout.snapshotData = layout.snapshotData || {};
    layout.snapshotData.content = {
      size: { w, h },
    };

    /**
     * If the layout we are working with already is a snapshot, there is no need to recreate the chartData.
     * This will for example occur when doing a free-resize in story telling.
     */
    if (layoutModel.meta.isSnapshot) {
      return Promise.resolve();
    }

    layout.snapshotData.content.chartData = {
      scrollOffset: viewState.get('scrollOffset'),
      zoom: viewState.get('zoom'),
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
};

export default setupSnapshot;
