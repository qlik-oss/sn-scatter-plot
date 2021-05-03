import { getValue } from '@qlik/chart-modules';

export default function layoutServiceMeta({ layout }) {
  const isSnapshot = !!layout.snapshotData;
  const hasSizeMeasure = !!getValue(layout.qHyperCube, 'qMeasureInfo.2');

  return {
    isSnapshot,
    hasSizeMeasure,
  };
}
