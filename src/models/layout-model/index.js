/* eslint-disable no-param-reassign */
import utils from '../../utils';

export default function createLayoutModel({ layout }) {
  const layoutModel = {
    meta: {
      isSnapshot: !!layout.snapshotData,
      hasSizeMeasure: !!utils.getValue(layout.qHyperCube, 'qMeasureInfo.2'),
    },
    getDataPages: () => layout.qHyperCube.qDataPages,
    getHyperCube: () => layout.qHyperCube,
    getHyperCubeValue: (path, defaultValue) => utils.getValue(layout.qHyperCube, path, defaultValue),
    getLayoutValue: (path, defaultValue) => utils.getValue(layout, path, defaultValue),
    getLayout: () => layout,
    setDataPages: (pages) => {
      layout.qHyperCube.qDataPages = pages;
    },
  };
  return layoutModel;
}
